// ─────────────────────────────────────────────────────────────
// All editable content lives here. Search for [PLACEHOLDER] to
// find the spots you still need to fill in.
// ─────────────────────────────────────────────────────────────

export const links = {
  email: 'fajla.rabby008@gmail.com',
  github: 'https://github.com/Fajla-Rabby',
  linkedin: 'https://www.linkedin.com/in/fajlarabby666/',
  phone: '+880 1919-703167',
  // [PLACEHOLDER] replace with your real Upwork profile URL (shown in footer only)
  upwork: '#upwork-profile-url',
  // [PLACEHOLDER] drop your resume PDF into /public (e.g. /public/fajla-rabby-resume.pdf)
  // and update this path
  resume: '/fajla-rabby-resume.pdf',
}

// Outcome metrics only — activity counts (PRs, bug tallies) read as volume, not impact.
export const metrics = [
  { value: '3', label: 'recurring incident classes eliminated' },
  { value: '9 → 1', label: 'legacy endpoints unified into one API' },
  { value: 'min → sec', label: 'Oracle ERP report load times' },
  { value: '70+', label: 'features shipped at TubeOnAI' },
]

// Wording rule: "Built/Designed" only where the work was personally led
// (the LLM gateway + billing saga). Team efforts say "helped" / "worked on" /
// "contributed to" — this must survive interview drill-down.
export const caseStudies = [
  {
    featured: true,
    tag: 'TubeOnAI · AI Reliability',
    title: 'Multi-Provider LLM Reliability & Billing',
    problem:
      'AI provider calls failed unpredictably; billing suffered race conditions and retry storms that produced recurring production incidents.',
    approach:
      'Built a LiteLLM gateway with BYOK key isolation, streaming-truncation retry, and automatic provider fallback across OpenAI, Azure OpenAI, Claude, Gemini, and OpenRouter. Migrated billing to a credit-based reserve → settle → refund saga.',
    result:
      'Eliminated 3 recurring classes of production incidents. AI calls degrade gracefully instead of failing loudly — and billing stays consistent under retries.',
    stack: ['LiteLLM', 'BYOK', 'Saga pattern', 'Redis'],
  },
  {
    tag: 'TubeOnAI · Quiz Micro-Apps (Go)',
    title: 'Validated, Citation-Checked LLM Output',
    problem:
      'LLMs return malformed quiz JSON — wrong question counts, unanswerable items, hallucinated citations. Shipping raw model output meant shipping broken quizzes.',
    approach:
      'On the platform’s quiz-generation pipeline, worked on a strict JSON contract with a validate → repair loop that feeds concrete validation failures back to the model — plus server-verified citations: the model must supply a verbatim source quote, which the backend locates in the source to derive the page or timestamp itself.',
    result:
      'The pipeline yields exactly N answerable, source-cited questions or a clean handled error — never a half-built quiz. Verified live end-to-end against real LLMs.',
    stack: ['Go', 'PostgreSQL', 'Redis', 'Prompt engineering'],
  },
  {
    tag: 'TubeOnAI · Platform Engineering',
    title: 'A Multi-Tenant Go Platform for AI Products',
    problem:
      'A second AI product was coming — and neither forking the first app nor bolting it onto the main Laravel monolith would scale to N products.',
    approach:
      'As part of the platform team, helped build a shared Go core (chi, pgx, Redis) with a plug-in app interface: auth, billing, AI providers, and free-tier metering live in the core, and each product mounts as a module. Mobile is offline-first with idempotent sync, and the Go and Kotlin scoring engines are held identical by shared JSON fixtures enforced as a CI gate.',
    result:
      'Two products run on one core — Lumina (AI-powered NCLEX prep, live on Android + iOS) and Quidger (AI quiz maker) — 52 API endpoints, zero forked code.',
    stack: ['Go', 'PostgreSQL', 'Kotlin Multiplatform', 'CI parity gates'],
  },
  {
    tag: 'TubeOnAI · Scale',
    title: 'Shedding 90% of Webhook Traffic at the Edge',
    problem:
      "YouTube's PubSubHubbub fires a webhook for every channel event. At TubeOnAI's channel scale, ~90% of that traffic was irrelevant — flooding queues and causing duplicate-delivery race conditions on video creation.",
    approach:
      'Contributed to a pipeline that puts Terraform-provisioned Azure Functions in front of Laravel: synchronous filters drop deletes, edits, and stale events; an async duration check drops Shorts and live streams; Redis dedupes deliveries; and survivors arrive through an Azure Service Bus queue with dead-lettering.',
    result:
      'Only ~10% of webhook traffic reaches the backend. Duplicate-driven race conditions eliminated; queue pressure and infrastructure cost cut dramatically.',
    stack: ['Azure Functions', 'Service Bus', 'Terraform', 'Redis'],
  },
  {
    tag: 'TubeOnAI · API Design',
    title: 'Unified Content Submission API',
    problem:
      '9 fragmented legacy endpoints — one per content type — made every client integration slow, inconsistent, and error-prone.',
    approach:
      'Helped design and ship a single unified V3 API contract that normalizes submission, validation, and processing across all content types behind one surface.',
    result:
      'One endpoint now handles YouTube, podcasts, audio, video, PDF, DOCX, PPTX, images, and articles — a drastically simpler integration surface for every client.',
    stack: ['Laravel 12', 'API design', 'Queues'],
  },
  {
    tag: 'TubeOnAI · Security & Performance',
    title: 'Hardening a Production SaaS',
    problem:
      'A critical access-control flaw exposed cross-user data, inefficient query patterns dragged down hot paths, and a recurring failure loop kept paging the team.',
    approach:
      'Worked on hardening across the API surface: ownership checks enforced on every endpoint, error responses sanitized, the expensive query patterns eliminated, and the failure loop fixed at its root cause.',
    result:
      'A critical vulnerability closed and a recurring production incident permanently eliminated — with faster response times as a side effect.',
    stack: ['Security', 'MySQL 8', 'Query optimization'],
  },
]

export const skillGroups = [
  {
    icon: 'server',
    title: 'Backend',
    items: ['PHP 8.4 · Laravel 12', 'Go (chi, pgx)', 'MySQL 8', 'PostgreSQL', 'Redis 7', 'Oracle SQL', 'ClickHouse', 'Filament 3 · Livewire'],
  },
  {
    icon: 'circuit',
    title: 'AI / Integration',
    items: [
      'LiteLLM',
      'OpenAI · Azure OpenAI',
      'Claude · Gemini · OpenRouter',
      'Whisper',
      'RAG — Qdrant, embeddings, hybrid BM25',
      'LLM output validation & repair loops',
      'MCP server design',
      'Multi-provider fallback design',
    ],
  },
  {
    icon: 'shield',
    title: 'Testing & Quality',
    items: ['Pest 4', 'PHPUnit', 'PHPStan', 'Pint', 'Go testing + cross-language fixture gates', 'TDD'],
  },
  {
    icon: 'stack',
    title: 'Infra & Tools',
    items: [
      'Docker',
      'AWS S3',
      'Azure Functions · Service Bus',
      'Terraform',
      'Laravel Horizon',
      'Stripe Cashier · RevenueCat',
      'GitHub Actions CI/CD (self-hosted runners)',
      'Sentry · Grafana',
      'Coolify (self-hosted PaaS)',
    ],
  },
]

// Framed as engineering discipline (how I work on a team), not a freelance sales funnel.
export const processSteps = [
  {
    step: '01',
    title: 'Understand the domain',
    body: 'I map the data model, the failure modes, and who gets hurt when things break — before writing code. Backend work is domain work.',
  },
  {
    step: '02',
    title: 'Plan in small slices',
    body: 'Reviewable PRs with clear acceptance criteria and test plans — not 2,000-line surprises. Scope honestly, flag risk early.',
  },
  {
    step: '03',
    title: 'Build with gates',
    body: 'TDD where it pays off, static analysis always: PHPStan, Pint, and Pest on Laravel; gofmt, vet, and fixture-parity gates on Go. CI-green is non-negotiable.',
  },
  {
    step: '04',
    title: 'Ship and own it',
    body: 'Deploys, monitoring in Sentry and Grafana, and the incident channel afterwards. I own what I ship — that’s where the reliability stories above come from.',
  },
]
