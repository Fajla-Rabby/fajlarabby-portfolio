import Reveal from './Reveal.jsx'
import { Eyebrow } from './Icons.jsx'
import { links } from '../data.js'

// [PLACEHOLDER] When you have 1-2 real testimonials (TubeOnAI lead, past client),
// re-add quote cards here — quote, name, role, company. Until then this section
// shows only verifiable facts; never ship visible placeholder quotes.
export default function Proof() {
  return (
    <section id="proof" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <Eyebrow n="05">Track record</Eyebrow>
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Measurable outcomes.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-mist">
          Each of these corresponds to a case study above, and I'm happy to discuss any of them in
          detail.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col gap-4 rounded-lg border border-edge bg-surface p-7">
            <h3 className="font-display text-lg font-bold text-white">In production</h3>
            <ul className="space-y-3 text-[15px] text-mist">
              <li>• 3 recurring production incident classes eliminated at TubeOnAI</li>
              <li>• A critical access-control vulnerability found and closed</li>
              <li>• 9 legacy endpoints unified into one V3 API contract</li>
              <li>• 2 AI products live on a shared Go platform (Android + iOS)</li>
              <li>• Multi-million-row ERP reports taken from minutes to seconds</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex h-full flex-col gap-4 rounded-lg border border-edge bg-surface p-7">
            <h3 className="font-display text-lg font-bold text-white">Background</h3>
            <ul className="space-y-3 text-[15px] text-mist">
              <li>
                <span className="font-medium text-neutral-200">Now:</span> Backend Developer @ TubeOnAI (remote)
              </li>
              <li>
                <span className="font-medium text-neutral-200">Before:</span> Oracle/PHP ERP systems @ Logic Software
              </li>
              <li>
                <span className="font-medium text-neutral-200">Education:</span> B.Sc. in Computer Science &amp; Engineering, Varendra University
              </li>
            </ul>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="link-underline mt-auto w-fit font-medium text-accent"
            >
              GitHub ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
