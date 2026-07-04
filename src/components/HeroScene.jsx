import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Subtle particle field: two point clouds on a slowly rotating shell,
// with gentle parallax toward the pointer. Deliberately cheap —
// static geometry, no per-frame buffer writes, DPR capped at 1.5.

function ParticleShell({ count, radius, color, size, opacity }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // random point in a thick spherical shell
      const r = radius * (0.55 + 0.45 * Math.cbrt(Math.random()))
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6 // flatten vertically
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count, radius])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={size}
        sizeAttenuation
        transparent
        opacity={opacity}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function Scene() {
  const group = useRef()

  useFrame((state, delta) => {
    const g = group.current
    if (!g) return
    // slow ambient drift + eased pointer parallax
    g.rotation.y += delta * 0.04
    const targetX = state.pointer.y * 0.18
    const targetZ = state.pointer.x * 0.12
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, targetX, 2.5, delta)
    g.rotation.z = THREE.MathUtils.damp(g.rotation.z, targetZ, 2.5, delta)
  })

  return (
    <group ref={group}>
      <ParticleShell count={1800} radius={7} color="#8b96a8" size={0.035} opacity={0.55} />
      <ParticleShell count={350} radius={6} color="#a3e635" size={0.055} opacity={0.75} />
      <mesh>
        <icosahedronGeometry args={[2.6, 1]} />
        <meshBasicMaterial color="#2a3242" wireframe transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

export default function HeroScene({ active = true }) {
  return (
    <Canvas
      frameloop={active ? 'always' : 'never'}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8], fov: 50 }}
      gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <fog attach="fog" args={['#0a0c10', 6, 14]} />
      <Scene />
    </Canvas>
  )
}
