import { links } from '../data.js'

export default function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-mist">
        <p>
          © {new Date().getFullYear()} Md. Fajla Rabby · Backend Developer, Dhaka, Bangladesh
        </p>
        <div className="flex gap-6">
          <a href={`mailto:${links.email}`} className="link-underline hover:text-white">Email</a>
          <a href={links.github} target="_blank" rel="noreferrer" className="link-underline hover:text-white">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="link-underline hover:text-white">LinkedIn</a>
          <a href={links.upwork} className="link-underline hover:text-white">Upwork</a>
        </div>
      </div>
    </footer>
  )
}
