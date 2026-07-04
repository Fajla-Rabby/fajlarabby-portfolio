import { links } from '../data.js'

const navItems = [
  ['About', '#about'],
  ['Work', '#work'],
  ['Skills', '#skills'],
  ['Process', '#process'],
  ['Contact', '#contact'],
]

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-edge/60 bg-night/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-white">
          fajla<span className="text-accent">.</span>dev
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="link-underline text-sm font-medium text-mist hover:text-white">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${links.email}`}
          className="rounded-md border border-accent/50 px-4 py-1.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-night"
        >
          Email me
        </a>
      </nav>
    </header>
  )
}
