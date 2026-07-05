import Reveal from './Reveal.jsx'
import { Eyebrow, ArrowIcon } from './Icons.jsx'
import { links } from '../data.js'

// Static "form": no backend — submitting opens the visitor's mail client
// with the message pre-filled via mailto.
function onSubmit(e) {
  e.preventDefault()
  const data = new FormData(e.target)
  const subject = encodeURIComponent(`Project inquiry from ${data.get('name') || 'your website'}`)
  const body = encodeURIComponent(`${data.get('message')}\n\n— ${data.get('name')} (${data.get('from')})`)
  window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`
}

const inputCls =
  'w-full rounded-md border border-edge bg-night px-4 py-3 text-[15px] text-white placeholder:text-mist/60 outline-none transition-colors focus:border-accent/60'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <Eyebrow n="06">Contact</Eyebrow>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's talk.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-mist">
            Whether you're hiring a backend engineer or need help with an AI integration, tell me
            about your project. I usually reply within 24 hours.
          </p>
          <ul className="mt-8 space-y-3 text-[15px]">
            <li>
              <a href={`mailto:${links.email}`} className="link-underline font-medium text-white">
                {links.email}
              </a>
            </li>
            <li>
              <a href={links.github} target="_blank" rel="noreferrer" className="link-underline text-mist hover:text-white">
                github.com/Fajla-Rabby ↗
              </a>
            </li>
            <li>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="link-underline text-mist hover:text-white">
                linkedin.com/in/fajlarabby666 ↗
              </a>
            </li>
            <li className="text-mist">{links.phone}</li>
          </ul>
          <a
            href={links.resume}
            className="mt-8 inline-flex items-center gap-2 rounded-md border border-edge bg-surface px-5 py-2.5 font-display font-semibold text-white transition-colors hover:border-accent/60"
          >
            Download resume (PDF) <ArrowIcon className="rotate-90" />
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="flex h-full flex-col gap-4 rounded-lg border border-edge bg-surface p-7">
            <label className="text-sm font-medium text-mist">
              Name
              <input name="name" required placeholder="Your name" className={`${inputCls} mt-1.5`} />
            </label>
            <label className="text-sm font-medium text-mist">
              Email
              <input name="from" type="email" required placeholder="you@company.com" className={`${inputCls} mt-1.5`} />
            </label>
            <label className="flex grow flex-col text-sm font-medium text-mist">
              How can I help?
              <textarea
                name="message"
                required
                rows={5}
                placeholder="e.g. We're integrating OpenAI into our Laravel application and need help with reliability and billing."
                className={`${inputCls} mt-1.5 grow resize-none`}
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-display font-semibold text-night transition-transform hover:-translate-y-0.5"
            >
              Send message <ArrowIcon />
            </button>
            <p className="text-xs text-mist/70">Opens your email client — no data is stored on this site.</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
