// Hand-drawn-style SVG icons — consistent 1.5px stroke, 24px grid.

const base = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function ServerIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="13" width="18" height="7" rx="1.5" />
      <circle cx="7" cy="7.5" r="0.4" fill="currentColor" />
      <circle cx="7" cy="16.5" r="0.4" fill="currentColor" />
      <path d="M13 7.5h5M13 16.5h5" />
    </svg>
  )
}

export function CircuitIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="8" y="8" width="8" height="8" rx="1.5" />
      <path d="M12 8V3M12 21v-5M8 12H3M21 12h-5M6.5 6.5 8 8M17.5 6.5 16 8M6.5 17.5 8 16M17.5 17.5 16 16" />
      <circle cx="12" cy="3" r="0.6" fill="currentColor" />
      <circle cx="21" cy="12" r="0.6" fill="currentColor" />
    </svg>
  )
}

export function ShieldIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 5 6v5.5c0 4.2 2.9 7.4 7 9 4.1-1.6 7-4.8 7-9V6l-7-2.5Z" />
      <path d="m9 12 2.2 2.2L15.5 9.8" />
    </svg>
  )
}

export function StackIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3.5 8.5 4.25L12 12 3.5 7.75 12 3.5Z" />
      <path d="m3.5 12.25 8.5 4.25 8.5-4.25M3.5 16.5 12 20.75l8.5-4.25" />
    </svg>
  )
}

export function ArrowIcon(props) {
  return (
    <svg {...base} width={16} height={16} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export const skillIcons = {
  server: ServerIcon,
  circuit: CircuitIcon,
  shield: ShieldIcon,
  stack: StackIcon,
}

// Section divider: a line with circuit-node marks, echoing the backend/pipeline theme.
export function Divider() {
  return (
    <div aria-hidden="true" className="mx-auto my-2 max-w-6xl px-6">
      <svg className="w-full text-edge" height="12" preserveAspectRatio="none">
        <line x1="0" y1="6" x2="100%" y2="6" stroke="currentColor" strokeWidth="1" strokeDasharray="1 6" />
      </svg>
    </div>
  )
}

// Small "section number + label" eyebrow used above every section heading.
export function Eyebrow({ n, children }) {
  return (
    <p className="mb-3 flex items-center gap-3 font-display text-sm font-medium tracking-widest text-accent uppercase">
      <span className="text-mist">{n}</span>
      <span aria-hidden="true" className="h-px w-8 bg-accent/60" />
      {children}
    </p>
  )
}
