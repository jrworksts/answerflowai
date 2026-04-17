const painColumns = [
  [
    'After-hours calls go to competitors',
    'Slow response times lose customers',
  ],
  [
    'Dispatch gets overwhelmed in peak season',
    'Slow response times lose customers',
  ],
  [
    'Techs can’t answer while on jobs',
    'Voicemail doesn’t book jobs',
  ],
]

const featureCards = [
  {
    title: 'Answers Every Call Instantly',
    icon: PhoneIcon,
  },
  {
    title: 'Books Appointments 24/7',
    icon: CalendarIcon,
  },
  {
    title: 'Qualifies Leads Fast',
    icon: UserCheckIcon,
  },
  {
    title: 'Works Nights, Weekends, Holidays',
    icon: MoonIcon,
  },
]

const steps = [
  {
    title: 'We Install Your AI Receptionist',
    copy: 'Quick setup and test calls to make sure everything works smoothly.',
  },
  {
    title: 'We Customize Scripts & Logic',
    copy: 'Tailored to your HVAC services and booking needs.',
  },
  {
    title: 'Calls Get Booked Automatically',
    copy: '24/7 AI handles all inbound leads and schedules jobs without you lifting a finger.',
  },
]

const navItems = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'FAQ', href: '#book' },
  { label: 'How It Works', href: '#how-it-works' },
]

const bookingUrl =
  'https://api.leadconnectorhq.com/widget/bookings/ai-voice-setup-call-30daysfree'

function App() {
  return (
    <div className="bg-[#eef3fb] font-body text-slate-900">
      <Header />
      <main>
        <Hero />
        <PainSection />
        <SolutionSection />
        <HowItWorksSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <MobileStickyCta />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center">
          <BrandLogo className="h-10 w-auto sm:h-12" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-white/80 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-gradient-to-b from-lime to-[#57c63b] px-5 py-3 text-sm font-extrabold text-navy shadow-glow transition hover:brightness-105 md:inline-flex"
        >
          Book My Free Audit
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_75%_30%,rgba(255,255,255,0.18),transparent_22%),linear-gradient(90deg,#0a234b_0%,#17396a_42%,#4774a7_100%)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-10 pt-8 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-0 lg:pt-8">
        <div className="relative z-10 max-w-xl py-4 lg:py-10">
          <h1 className="font-heading text-5xl font-extrabold uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-6xl">
            Never Miss Another <span className="text-lime">HVAC Lead</span> Again
          </h1>
          <div className="mt-5 h-px w-full max-w-md bg-white/25" />
          <p className="mt-5 text-2xl font-extrabold text-white sm:text-3xl">
            24/7 AI Receptionist to book more jobs.
          </p>
          <p className="mt-5 max-w-md text-lg leading-8 text-white/90">
            We answer every call instantly, qualify leads, and book appointments 24/7.
          </p>

          <div className="mt-8 flex max-w-sm flex-col gap-4">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-b from-lime to-[#49bb40] px-7 py-4 text-center text-xl font-extrabold text-white shadow-glow transition hover:brightness-105"
            >
              Book a 15-Minute Demo
            </a>
            <a
              href="#problem"
              className="rounded-full bg-white px-7 py-4 text-center text-base font-extrabold text-navy shadow-panel transition hover:bg-slate-100"
            >
              See How Much Revenue You’re Losing
            </a>
          </div>
        </div>

        <div className="relative min-h-[520px] lg:min-h-[620px]">
          <div className="absolute left-0 top-1/2 z-20 hidden w-[220px] -translate-y-1/2 rounded-[1.75rem] border border-white/15 bg-navy/50 p-3 shadow-glow backdrop-blur md:block lg:left-4">
            <MetricCard icon={ClockIcon} value="2" suffix="Sec" label="Avg Response Time" />
            <MetricCard icon={ClockIcon} value="24/7" label="Always Answering" bordered />
            <MetricCard icon={BriefcaseIcon} value="1 Job" label="Weekly Pays For The System" bordered />
          </div>

          <div className="absolute inset-y-0 right-0 left-8 overflow-hidden rounded-t-[2rem] lg:left-28">
            <img
              src="/hero-receptionist.png"
              alt="Receptionist wearing a headset at a computer"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,24,53,0.7)_0%,rgba(8,24,53,0.16)_45%,rgba(8,24,53,0.04)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(255,255,255,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
          </div>
        </div>
      </div>
    </section>
  )
}

function PainSection() {
  return (
    <section id="problem" className="bg-[linear-gradient(180deg,#f8fbff_0%,#f3f7fd_100%)] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CenteredSectionTitle title="Every Missed Call Is Lost Revenue" />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {painColumns.map((column, index) => (
            <div key={index} className="rounded-[1.5rem] bg-white p-4 shadow-panel ring-1 ring-slate-100">
              <div className="grid gap-3">
                {column.map((item) => (
                  <PainRow key={item} text={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#book"
            className="inline-flex rounded-full bg-gradient-to-r from-orange to-orange-deep px-8 py-4 text-lg font-extrabold text-white shadow-glow transition hover:brightness-105"
          >
            See How Much Revenue You’re Losing
          </a>
        </div>
      </div>
    </section>
  )
}

function SolutionSection() {
  return (
    <section id="solution" className="bg-[linear-gradient(180deg,#eef3fb_0%,#f7faff_100%)] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CenteredSectionTitle title="Your 24/7 AI Front Desk For HVAC" />
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {featureCards.map((card) => (
            <FeatureCard key={card.title} title={card.title} Icon={card.icon} />
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-2xl rounded-full border border-slate-200 bg-white px-6 py-4 text-center text-lg text-navy shadow-panel">
          One extra booked job each week covers the system and leaves margin on top.
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-extrabold uppercase tracking-[0.35em] text-orange">
          How It Works:
        </p>
        <h2 className="mt-4 text-center font-heading text-4xl font-extrabold uppercase tracking-[-0.05em] text-navy sm:text-5xl">
          Installed Fast. Customized Tight. Built To Book.
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <StepCard key={step.title} number={index + 1} title={step.title} copy={step.copy} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCtaSection() {
  return (
    <section id="book" className="bg-[linear-gradient(180deg,#f4f8fe_0%,#ffffff_100%)] py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <CenteredSectionTitle title="HVAC Owners Don’t Need More Calls. They Need More Answered Calls." />
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Book a free 15 minute audit and we&apos;ll show you exactly where revenue is slipping through the cracks.
        </p>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex rounded-full bg-gradient-to-r from-orange to-orange-deep px-10 py-5 text-2xl font-extrabold text-white shadow-glow transition hover:brightness-105"
        >
          Book My Free Audit
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[linear-gradient(135deg,#071a3b_0%,#0e2d5f_100%)] py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <BrandLogo className="h-9 w-auto sm:h-10" />
          <div className="mt-6 space-y-2 text-sm text-white/85">
            <p>Phone 361-266-4276</p>
            <p>Email hello@theanswerflow.com</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 text-sm font-bold">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-white/90 transition hover:text-white">
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
      <a
        href={bookingUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center rounded-full bg-gradient-to-r from-orange to-orange-deep px-5 py-4 text-center text-sm font-extrabold text-white"
      >
        Book My Free Audit
      </a>
    </div>
  )
}

function CenteredSectionTitle({ title }) {
  return (
    <div className="mx-auto max-w-5xl text-center">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-200" />
        <h2 className="font-heading text-3xl font-extrabold uppercase tracking-[-0.05em] text-navy sm:text-5xl">
          {title}
        </h2>
        <div className="h-px flex-1 bg-slate-200" />
      </div>
    </div>
  )
}

function MetricCard({ icon: Icon, value, suffix, label, bordered = false }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-4 ${bordered ? 'border-t border-white/15' : ''}`}>
      <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="flex items-end gap-1 text-white">
          <span className="font-heading text-4xl font-extrabold leading-none tracking-[-0.04em]">{value}</span>
          {suffix ? <span className="pb-1 text-lg font-extrabold">{suffix}</span> : null}
        </div>
        <p className="text-sm font-semibold text-white/80">{label}</p>
      </div>
    </div>
  )
}

function PainRow({ text }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-100 px-4 py-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200">
        <span className="h-3 w-3 rounded-full bg-orange" />
      </span>
      <p className="text-lg font-medium text-slate-700">{text}</p>
    </div>
  )
}

function FeatureCard({ title, Icon }) {
  return (
    <div className="flex items-center gap-4 rounded-[1.5rem] bg-white px-5 py-5 shadow-panel ring-1 ring-slate-100">
      <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy text-white shadow-panel">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="max-w-[12rem] text-2xl font-extrabold leading-tight text-navy">{title}</h3>
    </div>
  )
}

function StepCard({ number, title, copy }) {
  return (
    <div className="rounded-[1.75rem] bg-white p-6 shadow-panel ring-1 ring-slate-100">
      <div className="flex items-start gap-4">
        <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-2xl font-extrabold text-white">
          {number}
        </div>
        <div>
          <h3 className="text-3xl font-extrabold leading-tight text-navy">{title}</h3>
        </div>
      </div>
      <div className="mt-5 h-px w-full bg-slate-200" />
      <p className="mt-5 text-lg leading-8 text-slate-600">{copy}</p>
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

function PhoneIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M7 5h3l2 5-2 2c1.5 3 3 4.5 6 6l2-2 5 2v3c0 1-1 2-2 2-9.4 0-17-7.6-17-17 0-1 1-2 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CalendarIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 3v4M16 3v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function UserCheckIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 20c1.4-3.6 4-5.5 7-5.5S17.6 16.4 19 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function MoonIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ClockIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BriefcaseIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 12h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export default App
