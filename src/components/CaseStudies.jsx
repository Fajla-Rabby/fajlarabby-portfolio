import Reveal from './Reveal.jsx'
import { Eyebrow } from './Icons.jsx'
import { caseStudies, links } from '../data.js'

function Block({ label, children }) {
  return (
    <div>
      <p className="font-display text-xs font-semibold tracking-widest text-accent uppercase">{label}</p>
      <p className="mt-1.5 text-[15px] leading-relaxed text-mist">{children}</p>
    </div>
  )
}

export default function CaseStudies() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <Eyebrow n="02">Case studies</Eyebrow>
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Selected production work.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-mist">
          All of these are from my professional roles, structured as problem, approach, and result.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {caseStudies.map((cs, i) => (
          <Reveal key={cs.title} delay={(i % 2) * 0.1} className={cs.featured ? 'md:col-span-2' : undefined}>
            <article className="group flex h-full flex-col gap-5 rounded-lg border border-edge bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
              <div>
                <p className="text-sm font-medium text-mist">{cs.tag}</p>
                <h3 className="mt-1 font-display text-xl font-bold text-white group-hover:text-accent">
                  {cs.title}
                </h3>
              </div>
              {/* featured card is double-width, so P/A/R sit side by side to keep line lengths readable */}
              <div className={cs.featured ? 'grid gap-5 md:grid-cols-3' : 'contents'}>
                <Block label="Problem">{cs.problem}</Block>
                <Block label="Approach">{cs.approach}</Block>
                <Block label="Result">{cs.result}</Block>
              </div>
              <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                {cs.stack.map((s) => (
                  <li key={s} className="rounded-full border border-edge px-3 py-1 text-xs font-medium text-mist">
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-edge bg-surface p-6">
          <p className="text-lg text-neutral-200">
            Working on similar problems?{' '}
            <span className="text-mist">I'm happy to discuss them in detail.</span>
          </p>
          <a
            href={`mailto:${links.email}?subject=Project inquiry`}
            className="rounded-md bg-accent px-5 py-2.5 font-display font-semibold text-night transition-transform hover:-translate-y-0.5"
          >
            Email me
          </a>
        </div>
      </Reveal>
    </section>
  )
}
