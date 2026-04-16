const painPoints = [
  'After-hours calls go to competitors',
  'Dispatch gets overwhelmed during peak season',
  'Techs can’t answer while on jobs',
  'Slow response times kill close rates',
  'Voicemail costs real money',
]

const features = [
  'Answers every inbound call instantly',
  'Books appointments automatically',
  'Handles service, install, and maintenance calls',
  'Qualifies leads before wasting team time',
  'Follows up missed calls by text',
  'Works nights, weekends, holidays',
]

const roiCards = [
  'Faster response = higher close rate',
  'Zero missed calls = more booked jobs',
  'Less admin load = happier office staff',
  'Better speed = beat competitors',
]

const steps = [
  {
    title: 'We install your AI receptionist',
    copy: 'We connect it to your call flow fast, without dumping tech work on your team.',
  },
  {
    title: 'We customize scripts, booking logic, and FAQs',
    copy: 'It sounds like your shop, handles your common call types, and routes the right jobs.',
  },
  {
    title: 'Calls get answered + jobs get booked automatically',
    copy: 'Your office stays focused while after-hours and overflow opportunities stop leaking out.',
  },
]

const testimonials = [
  {
    quote: 'We stopped missing calls after hours and booked jobs immediately.',
    author: 'Owner, 12-truck HVAC company',
  },
  {
    quote: 'Best ROI tool we added this year.',
    author: 'Operations manager, residential HVAC team',
  },
  {
    quote: 'Peak season stopped crushing the front desk because every caller got an answer.',
    author: 'Dispatcher, multi-location HVAC business',
  },
]

const navItems = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'ROI', href: '#roi' },
  { label: 'How It Works', href: '#how-it-works' },
]

function App() {
  return (
    <div className="bg-white font-body text-slate-900">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <Roi />
        <HowItWorks />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyCta />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center">
          <BrandLogo className="h-10 w-auto sm:h-12" />
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-200 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#book" className="hidden rounded-full bg-orange px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-deep md:inline-flex">
          Book My Free Audit
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_22%,rgba(157,244,66,0.2),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.02)_100%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-16">
        <div className="relative z-10 animate-rise">
          <div className="mb-6 inline-flex rounded-full border border-lime/30 bg-white/10 px-4 py-2 text-sm font-semibold text-lime backdrop-blur">
            24/7 AI Reception + Follow-Up For Residential HVAC
          </div>
          <h1 className="max-w-4xl font-heading text-5xl font-bold uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Never Miss Another <span className="text-lime">HVAC Lead</span> Again
          </h1>
          <p className="mt-4 max-w-2xl font-heading text-2xl font-bold italic leading-tight text-white/95 sm:text-3xl">
            24/7 AI answering service to book more jobs.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            We install 24/7 AI reception &amp; follow-up systems for HVAC contractors so every caller gets an answer, gets qualified, and gets pushed toward a booked appointment.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#book" className="rounded-full bg-orange px-7 py-4 text-center text-base font-bold text-white shadow-glow transition hover:bg-orange-deep">
              Book a 15-Minute Missed Revenue Audit
            </a>
            <a href="#problem" className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-center text-base font-bold text-white transition hover:bg-white/15">
              See How Much Revenue You’re Losing
            </a>
          </div>
          <p className="mt-4 text-sm font-medium text-slate-300">
            No tech headaches. No long setup. Results fast.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <TrustPill label="Answers in seconds" />
            <TrustPill label="Books while you sleep" />
            <TrustPill label="Built for HVAC call flow" />
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-x-6 top-12 h-72 rounded-full bg-sky/20 blur-3xl sm:inset-x-12" />
          <div className="absolute bottom-0 right-6 h-40 w-40 rounded-full bg-lime/30 blur-3xl" />
          <div className="absolute left-4 top-12 hidden opacity-20 md:block">
            <img src="/answer-flow-logo.svg" alt="" className="h-28 w-auto" aria-hidden="true" />
          </div>
          <div className="relative w-full max-w-xl animate-float rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-glow backdrop-blur-xl">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#081a36]">
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[340px] overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,138,30,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0))] p-6">
                  <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-sky/20 blur-3xl" />
                  <div className="absolute inset-x-6 bottom-24 h-px bg-gradient-to-r from-transparent via-lime/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-lime">
                      Live Call Flow
                    </p>
                    <p className="mt-2 text-xl font-bold text-white">The phone rings. A real voice answers fast.</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Your AI answers, qualifies the lead, and locks in the appointment before your competitor picks up.
                    </p>
                  </div>
                  <div className="absolute inset-x-6 top-6 rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                      Missed Call Revenue Risk
                    </p>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-orange to-orange-deep" />
                    </div>
                    <p className="mt-2 text-sm text-slate-300">After-hours and overflow calls are the leaks.</p>
                  </div>
                </div>
                <div className="relative flex min-h-[340px] items-end justify-center bg-[radial-gradient(circle_at_70%_20%,rgba(157,244,66,0.26),transparent_24%),linear-gradient(180deg,rgba(93,184,255,0.08),rgba(255,255,255,0)),linear-gradient(180deg,#0a1d3d_0%,#0d2a58_100%)] px-6 pb-6 pt-14">
                  <div className="absolute right-5 top-5 max-w-[240px] rounded-3xl rounded-tr-md bg-navy-soft px-4 py-3 text-sm leading-6 text-white shadow-panel">
                    Hi! Thanks for calling. How can I help with your HVAC needs today?
                  </div>
                  <div className="absolute bottom-10 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border border-sky/30 bg-sky/10 blur-sm" />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#081a36] to-transparent" />
                  <HumanReceptionVisual />
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-[1.5rem] bg-white px-5 py-4 shadow-panel">
              <div className="grid gap-4 text-center sm:grid-cols-3">
                <StatBlock value="< 10 sec" label="Average answer speed" />
                <StatBlock value="24/7" label="Coverage nights + weekends" />
                <StatBlock value="1 extra job" label="Can pay for the system" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PainPoints() {
  return (
    <section id="problem" className="bg-white py-20 sm:py-24">
      <SectionHeading
        eyebrow="The Problem"
        title="Every Missed Call Is Lost Revenue"
        copy="HVAC buyers call when they need help now. If nobody answers fast, they move to the next company."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="rounded-[2rem] bg-mist p-8 shadow-panel">
          <div className="grid gap-4">
            {painPoints.map((point) => (
              <BulletRow key={point} text={point} />
            ))}
          </div>
          <a href="#book" className="mt-8 inline-flex rounded-full bg-orange px-6 py-4 text-sm font-bold text-white transition hover:bg-orange-deep">
            See How Much Revenue You’re Losing
          </a>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-panel">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange">What this means</p>
          <h3 className="mt-3 font-heading text-3xl font-bold uppercase tracking-[-0.04em] text-navy">
            If you’re not answering instantly, you’re leaking booked jobs.
          </h3>
          <div className="mt-8 grid gap-4">
            <MiniMetric label="After-hours opportunities" value="Still shopping" />
            <MiniMetric label="Peak season call volume" value="Hits all at once" />
            <MiniMetric label="Competitor advantage" value="Whoever answers first" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Solution() {
  return (
    <section id="solution" className="bg-[#f8fbff] py-20 sm:py-24">
      <SectionHeading
        eyebrow="The Solution"
        title="Your 24/7 AI Front Desk for HVAC"
        copy="Built to answer faster, book more, and keep your office team out of phone chaos."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 xl:grid-cols-3 lg:px-8">
        {features.map((feature, index) => (
          <FeatureCard key={feature} feature={feature} index={index} />
        ))}
      </div>
    </section>
  )
}

function Roi() {
  return (
    <section id="roi" className="bg-navy py-20 text-white sm:py-24">
      <SectionHeading
        dark
        eyebrow="The ROI"
        title="One Extra Job Per Week Can Pay For Everything"
        copy="This is not headcount. It is speed, coverage, and recovered revenue."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 xl:grid-cols-4 lg:px-8">
        {roiCards.map((card) => (
          <div key={card} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-glow">
            <div className="mb-5 inline-flex rounded-2xl bg-orange/15 p-3 text-orange">
              <RiseIcon />
            </div>
            <p className="text-lg font-semibold leading-8 text-white">{card}</p>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-5xl rounded-[1.75rem] bg-orange px-8 py-5 text-center font-heading text-2xl font-bold uppercase tracking-[-0.03em] text-white shadow-glow">
        One extra booked job each week can cover the system and leave margin on top.
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-24">
      <SectionHeading
        eyebrow="How It Works"
        title="Installed Fast. Customized Tight. Built To Book."
        copy="No bloated onboarding. No DIY buildout. We make it fit your HVAC operation and get it live."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {steps.map((step, index) => (
          <div key={step.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-panel">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy font-heading text-2xl font-bold text-white">
              {index + 1}
            </div>
            <h3 className="mt-6 font-heading text-3xl font-bold uppercase tracking-[-0.04em] text-navy">
              {step.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">{step.copy}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] py-20 sm:py-24">
      <SectionHeading
        eyebrow="Social Proof"
        title="HVAC Owners Don’t Need More Calls. They Need More Answered Calls."
        copy="Placeholder proof blocks below are styled for quick swap-in once real customer quotes are ready."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {testimonials.map((item) => (
          <blockquote key={item.author} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-panel">
            <p className="text-xl font-semibold leading-8 text-navy">“{item.quote}”</p>
            <footer className="mt-6 border-t border-slate-100 pt-6 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              {item.author}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section id="book" className="bg-navy py-20 text-white sm:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange">Free 15-minute audit</p>
        <h2 className="mt-4 font-heading text-4xl font-bold uppercase tracking-[-0.05em] sm:text-5xl">
          How Much Money Is Voicemail Costing You?
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
          Book a free 15-minute missed revenue audit and we’ll show you exactly where calls are slipping through.
        </p>
        <a href="mailto:hello@answerflowai.com?subject=Book%20My%20Free%20Audit" className="mt-8 inline-flex rounded-full bg-orange px-8 py-4 text-base font-bold text-white transition hover:bg-orange-deep">
          Book My Free Audit
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#08162f] py-10 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <div className="flex items-center">
            <BrandLogo className="h-10 w-auto sm:h-12" />
          </div>
          <div className="mt-5 space-y-2 text-sm">
            <p>Phone: (757) 303-8050</p>
            <p>Email: hello@answerflowai.com</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 text-sm font-semibold">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy/95 p-3 shadow-[0_-10px_40px_rgba(0,0,0,0.2)] backdrop-blur md:hidden">
      <a href="#book" className="flex items-center justify-center rounded-full bg-orange px-5 py-4 text-center text-sm font-bold text-white">
        Book a 15-Minute Missed Revenue Audit
      </a>
    </div>
  )
}

function SectionHeading({ eyebrow, title, copy, dark = false }) {
  return (
    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
      <p className={`text-sm font-bold uppercase tracking-[0.22em] ${dark ? 'text-orange' : 'text-orange'}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-heading text-4xl font-bold uppercase tracking-[-0.05em] sm:text-5xl ${
          dark ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      <p className={`mt-5 text-lg leading-8 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{copy}</p>
    </div>
  )
}

function TrustPill({ label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-sm font-semibold text-white backdrop-blur">
      {label}
    </div>
  )
}

function BulletRow({ text }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-white p-4">
      <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-orange" />
      <p className="text-lg font-medium text-slate-700">{text}</p>
    </div>
  )
}

function MiniMetric({ label, value }) {
  return (
    <div className="rounded-2xl bg-mist p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-2 font-heading text-2xl font-bold uppercase tracking-[-0.04em] text-navy">
        {value}
      </p>
    </div>
  )
}

function FeatureCard({ feature, index }) {
  const icons = [PhoneIcon, CalendarIcon, SnowflakeIcon, FilterIcon, MessageIcon, MoonIcon]
  const Icon = icons[index % icons.length]

  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-panel transition hover:-translate-y-1">
      <div className="inline-flex rounded-2xl bg-navy p-3 text-white">
        <Icon />
      </div>
      <h3 className="mt-5 text-xl font-bold leading-8 text-navy">{feature}</h3>
    </div>
  )
}

function StatBlock({ value, label }) {
  return (
    <div>
      <p className="font-heading text-2xl font-bold uppercase tracking-[-0.04em] text-navy">{value}</p>
      <p className="mt-1 text-sm font-medium text-slate-500">{label}</p>
    </div>
  )
}

function BrandLogo({ className = '' }) {
  return (
    <img
      src="/answer-flow-logo.svg"
      alt="Answer Flow AI"
      className={className}
      loading="eager"
      decoding="async"
    />
  )
}

function HumanReceptionVisual() {
  return (
    <svg viewBox="0 0 280 280" className="relative z-10 w-full max-w-[280px]" fill="none" aria-hidden="true">
      <ellipse cx="142" cy="254" rx="78" ry="14" fill="rgba(255,255,255,0.12)" />
      <path d="M82 252c8-52 40-86 78-86s70 34 78 86H82Z" fill="#0f2448" />
      <path d="M103 252c6-37 25-62 57-62 31 0 50 25 56 62H103Z" fill="#12366f" />
      <path d="M111 77c0-32 22-56 52-56 31 0 52 24 52 56 0 35-24 66-52 66s-52-31-52-66Z" fill="#ffd8bf" />
      <path d="M115 86c5-39 28-63 57-63 27 0 45 15 51 44-10-8-19-12-34-10-20 3-34-4-45-14-6 20-15 34-29 43Z" fill="#1f2437" />
      <path d="M120 92c0-8 7-15 15-15" stroke="#1f2437" strokeWidth="5" strokeLinecap="round" />
      <path d="M187 92c0-8-7-15-15-15" stroke="#1f2437" strokeWidth="5" strokeLinecap="round" />
      <circle cx="142" cy="92" r="4" fill="#1f2437" />
      <circle cx="181" cy="92" r="4" fill="#1f2437" />
      <path d="M153 109c4 4 13 4 17 0" stroke="#d67f66" strokeWidth="4" strokeLinecap="round" />
      <path d="M142 120c8 8 29 8 37 0" stroke="#c96d5a" strokeWidth="5" strokeLinecap="round" />
      <path d="M98 80c0-18 14-32 32-32h11" stroke="#101f3f" strokeWidth="9" strokeLinecap="round" />
      <path d="M215 80c0-18-14-32-32-32h-11" stroke="#101f3f" strokeWidth="9" strokeLinecap="round" />
      <rect x="88" y="74" width="15" height="28" rx="7.5" fill="#101f3f" />
      <rect x="211" y="74" width="15" height="28" rx="7.5" fill="#101f3f" />
      <path d="M221 112c0 15-11 28-26 30" stroke="#101f3f" strokeWidth="6" strokeLinecap="round" />
      <rect x="185" y="139" width="30" height="16" rx="8" fill="#101f3f" />
      <path d="M146 145c6 11 13 16 23 16h20" stroke="#101f3f" strokeWidth="6" strokeLinecap="round" />
      <path d="M149 136h26c0 13-5 24-13 24s-13-11-13-24Z" fill="#ffc4a3" />
      <path d="M123 160h79l18 92H106l17-92Z" fill="#f3f7ff" />
      <path d="M139 161h48l14 91h-79l17-91Z" fill="#eef4ff" />
      <path d="M111 175c16 19 37 28 62 28 23 0 44-8 59-25" stroke="#5db8ff" strokeWidth="4" strokeLinecap="round" opacity=".65" />
      <rect x="137" y="185" width="51" height="38" rx="14" fill="#101f3f" />
      <path d="M146 204h32" stroke="#5db8ff" strokeWidth="4" strokeLinecap="round" />
      <path d="M151 198l4 12 8-18 8 18 4-12" stroke="#5db8ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M122 158l-18 26" stroke="#f3f7ff" strokeWidth="12" strokeLinecap="round" />
      <path d="M202 158l22 28" stroke="#f3f7ff" strokeWidth="12" strokeLinecap="round" />
      <path d="M128 252l-14 16" stroke="#12366f" strokeWidth="12" strokeLinecap="round" />
      <path d="M192 252l14 16" stroke="#12366f" strokeWidth="12" strokeLinecap="round" />
      <circle cx="235" cy="84" r="8" fill="#9df442" className="animate-pulse-soft" />
      <path d="M245 76c7 5 12 13 14 21" stroke="#5db8ff" strokeWidth="5" strokeLinecap="round" />
      <path d="M253 62c12 8 20 20 24 34" stroke="#5db8ff" strokeWidth="5" strokeLinecap="round" opacity=".75" />
      <path d="M258 47c16 10 26 26 31 44" stroke="#5db8ff" strokeWidth="5" strokeLinecap="round" opacity=".5" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path d="M7 5h3l2 5-2 2c1.5 3 3 4.5 6 6l2-2 5 2v3c0 1-1 2-2 2-9.4 0-17-7.6-17-17 0-1 1-2 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 3v4M16 3v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function SnowflakeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M8 5l4 2 4-2M8 19l4-2 4 2M5 10l2 2-2 2M19 10l-2 2 2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FilterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path d="M4 5h16l-6 7v5l-4 2v-7L4 5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path d="M5 6h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-5 4V8a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

function RiseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path d="M5 17 11 11l4 4 4-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 7h2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default App
