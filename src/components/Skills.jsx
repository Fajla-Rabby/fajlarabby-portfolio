import Reveal from './Reveal.jsx'
import { Eyebrow, skillIcons } from './Icons.jsx'
import { skillGroups, metrics } from '../data.js'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <Eyebrow n="03">Skills</Eyebrow>
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Technologies I work with.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => {
          const Icon = skillIcons[group.icon]
          return (
            <Reveal key={group.title} delay={i * 0.08}>
              <div className="h-full rounded-lg border border-edge bg-surface p-6">
                <div className="flex items-center gap-3">
                  <span className="text-accent">
                    <Icon />
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">{group.title}</h3>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] text-mist">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={0.1}>
        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-edge bg-edge md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-surface p-6 text-center">
              <dt className="font-display text-3xl font-bold text-accent">{m.value}</dt>
              <dd className="mt-1 text-sm text-mist">{m.label}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
