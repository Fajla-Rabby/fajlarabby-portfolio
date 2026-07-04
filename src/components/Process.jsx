import Reveal from './Reveal.jsx'
import { Eyebrow, ShieldIcon } from './Icons.jsx'
import { processSteps } from '../data.js'

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <Eyebrow n="04">How I work</Eyebrow>
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          The discipline behind the case studies.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.08}>
            <div className="relative h-full rounded-lg border border-edge bg-surface p-6">
              <span className="font-display text-4xl font-bold text-edge">{s.step}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-mist">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 flex items-start gap-4 rounded-lg border border-accent/25 bg-accent/5 p-6">
          <span className="mt-0.5 shrink-0 text-accent">
            <ShieldIcon />
          </span>
          <p className="text-[15px] leading-relaxed text-neutral-200">
            <strong className="font-display text-white">CI-green discipline:</strong> every change I
            merge passes static analysis, style gates, and the full test suite before review —
            whether that's PHPStan/Pint/Pest on a Laravel monolith or gofmt/vet/fixture gates on a
            Go service. The next developer can change my code without fear.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
