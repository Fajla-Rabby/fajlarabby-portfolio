import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { links } from '../data.js'
import { ArrowIcon } from './Icons.jsx'

// The 3D scene (three.js + r3f, ~200KB gz) is code-split and only ever
// requested on desktop-class devices without reduced-motion. Content
// renders immediately either way — the scene fades in behind it.
const HeroScene = lazy(() => import('./HeroScene.jsx'))

function useWantsScene() {
  const [wants, setWants] = useState(false)
  useEffect(() => {
    const ok =
      window.matchMedia('(min-width: 768px)').matches &&
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (ok) setWants(true)
  }, [])
  return wants
}

export default function Hero() {
  const wantsScene = useWantsScene()
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(true)

  // Pause the render loop once the hero scrolls out of view.
  useEffect(() => {
    if (!sectionRef.current) return
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0 })
    obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="top" ref={sectionRef} className="hero-fallback relative flex min-h-svh items-center overflow-hidden">
      {wantsScene && (
        <Suspense fallback={null}>
          <HeroScene active={inView} />
        </Suspense>
      )}
      {/* readability scrim over the scene */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-night/30 via-transparent to-night" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-16">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-edge bg-surface/70 px-4 py-1.5 text-sm text-mist">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Md. Fajla Rabby · Dhaka, Bangladesh · Remote
        </p>

        <h1 className="max-w-4xl font-display text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Backend developer building{' '}
          <span className="text-accent">production AI-powered</span> SaaS systems.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
          2.5 years shipping production backends in Laravel and Go — currently engineering
          TubeOnAI's multi-provider LLM pipeline (OpenAI, Azure, Claude, Gemini, OpenRouter) and
          the Go platform behind its AI micro-apps.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${links.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-display font-semibold text-night transition-transform hover:-translate-y-0.5"
          >
            Email me <ArrowIcon />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-edge bg-surface/70 px-6 py-3 font-display font-semibold text-white transition-colors hover:border-accent/60"
          >
            LinkedIn
          </a>
          <a href={links.github} target="_blank" rel="noreferrer" className="link-underline font-medium text-mist hover:text-white">
            GitHub ↗
          </a>
        </div>

        <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-edge/70 pt-6 text-sm">
          {[
            ['5', 'LLM providers behind one reliable pipeline'],
            ['3', 'recurring incident classes eliminated'],
            ['70+', 'features shipped in production'],
          ].map(([v, l]) => (
            <div key={l} className="flex items-baseline gap-2">
              <dt className="font-display text-xl font-bold text-white">{v}</dt>
              <dd className="text-mist">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
