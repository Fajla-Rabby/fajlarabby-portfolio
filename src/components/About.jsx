import Reveal from './Reveal.jsx'
import { Eyebrow } from './Icons.jsx'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <Eyebrow n="01">About</Eyebrow>
        <div className="grid gap-10 md:grid-cols-[1fr_320px]">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From enterprise ERP systems to production AI infrastructure.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-mist">
              <p>
                I started my career at Logic Software building Oracle-backed ERP systems, where
                report performance and data accuracy directly affected daily business operations.
                That experience taught me to treat performance, correctness, and data integrity as
                fundamentals — and it's where I reduced multi-million-row report load times from
                minutes to seconds by rewriting the underlying SQL.
              </p>
              <p>
                Today I bring that discipline to{' '}
                <a href="https://tubeonai.com" target="_blank" rel="noreferrer" className="link-underline text-white">
                  TubeOnAI
                </a>
                , an AI content-summarization SaaS, where I work on a production Laravel 12 system
                that summarizes YouTube videos, podcasts, audio, and documents through a
                multi-provider LLM pipeline — and on the multi-tenant Go platform behind its quiz
                micro-apps, where LLM output is validated, repaired, and citation-checked before a
                user ever sees it. My focus is the infrastructure that makes AI products
                dependable: provider fallback, key isolation, billing consistency, retry
                semantics, and security hardening.
              </p>
              <p className="font-medium text-neutral-200">
                In short: I integrate LLMs into production systems and make sure they stay
                reliable under real-world failure conditions.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {/* [PLACEHOLDER] profile photo: drop an image into /public (e.g. /public/profile.jpg,
                compressed to <150KB) and replace this div with:
                <img src="/profile.jpg" alt="Md. Fajla Rabby" className="aspect-square w-full rounded-lg border border-edge object-cover" loading="lazy" /> */}
            <div className="flex aspect-square w-full items-center justify-center rounded-lg border border-dashed border-edge bg-surface text-sm text-mist">
              [ profile photo ]
            </div>
            <div className="rounded-lg border border-edge bg-surface p-5 text-sm leading-relaxed">
              <p className="font-display font-semibold text-white">Currently</p>
              <p className="mt-1 text-mist">Backend Developer @ TubeOnAI (remote)</p>
              <p className="mt-3 font-display font-semibold text-white">Previously</p>
              <p className="mt-1 text-mist">Oracle/PHP ERP · Logic Software</p>
              <p className="mt-3 font-display font-semibold text-white">Education</p>
              <p className="mt-1 text-mist">B.Sc. CSE, Varendra University</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
