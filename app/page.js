import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

// ─── DATA ────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: "chart",
    title: "Transfer Pricing",
    description:
      "Audit-ready documentation built around your specific intercompany flows — not recycled templates. We benchmark, defend, and adapt as regulations shift.",
    href: "/services#transfer-pricing",
  },
  {
    icon: "globe",
    title: "OECD / BEPS Compliance",
    description:
      "Pillar Two hits every group structure differently. We map your GloBE exposure, identify QDMTT elections, and keep you ahead of local implementation timelines.",
    href: "/services#oecd-beps",
  },
  {
    icon: "shield",
    title: "Strategic Tax Advisory",
    description:
      "Cross-border structuring and holding company optimization that survives scrutiny — not just on paper, but in front of a tax authority.",
    href: "/services#taxation",
  },
  {
    icon: "clipboard",
    title: "Managed Compliance",
    description:
      "Statutory reporting and tax filing handled end-to-end, across every jurisdiction you operate in. You focus on the business; we handle the calendar.",
    href: "/services#compliance",
  },
];

const differentiators = [
  {
    icon: "👥",
    title: "Partner on every call",
    desc: "No handoffs to junior associates. The senior who scopes your work is the one who delivers it — every time.",
  },
  {
    icon: "✦",
    title: "Built for complexity",
    desc: "We work exclusively with multinationals navigating OECD frameworks. This isn't a side practice — it's the whole firm.",
  },
  {
    icon: "🌍",
    title: "Cross-border by design",
    desc: "Coordinated coverage across 40+ jurisdictions, with deep local knowledge in the US, UK, Germany, and the Netherlands.",
  },
  {
    icon: "🛡",
    title: "Audit-first thinking",
    desc: "Every document we produce is written as if a tax authority will read it tomorrow. Because sometimes they do.",
  },
];

const focusAreas = [
  "GloBE income & top-up tax calculations",
  "Qualified Domestic Minimum Tax (QDMTT)",
  "CbCR filing & Country-by-Country Reporting",
  "Pillar One / Amount B simplified approach",
  "Safe harbour evaluation & transition rules",
];

const testimonials = [
  {
    quote:
      "We were 72 hours out from a board meeting with a massive gap in our Pillar Two impact modeling. SNG didn't just 'consult'—they stayed on the line until 2 AM to ensure our Head of Tax had defensible numbers for the CFO. That's the difference between a partner and a provider.",
    name: "Marcus Von Braun",
    title: "Head of Tax, EMEA",
    company: "Industrial Multinational",
  },
  {
    quote:
      "I’ve worked with Big Four firms where I became the project manager for their junior staff. With SNG, I actually get to be the CFO. I call a partner, they know my group's structure by heart, and the problem is solved without a game of 'telephone' through associates.",
    name: "Sarah Jennings",
    title: "Group CFO",
    company: "Consumer Goods Group",
  },
  {
    quote:
      "A local Singapore audit challenged our cross-border royalty flows. SNG stepped in, reconstructed the functional analysis from the ground up, and defended it during the inquiry. We closed the audit with zero adjustments. They know how tax authorities actually think.",
    name: "James Chen",
    title: "VP Tax, Asia-Pacific",
    company: "Technology Conglomerate",
  },
];

const processSteps = [
  {
    step: "01",
    title: "The Reality Check",
    desc: "We start with a plain-talk conversation. No long forms to fill out. You tell us how your business moves money, and we tell you exactly where the modern tax rules might create a headache for you.",
  },
  {
    step: "02",
    title: "Finding the Leaks",
    desc: "Before we build your defense, we act like the tax inspector. we look for the 'red flags' in your current setup—the same things an auditor would look for—so we can fix them before they become an issue.",
  },
  {
    step: "03",
    title: "Experts Only, No 'Junior' Staff",
    desc: "In big firms, the person you meet is rarely the person doing the work. With us, the senior expert you talk to on day one is the same person actually writing your documents and protecting your business.",
  },
  {
    step: "04",
    title: "We’ve Got Your Back",
    desc: "Tax laws change every month. We don't just hand you a folder and leave. If the rules shift or an authority asks questions a year from now, we’re the first call you make. We stay in your corner.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ======== HERO ======== */}
      <section className="relative min-h-[90vh] bg-[url('/herobanner.webp')]  backdrop-blur-[8px]  bg-cover bg-center bg-no-repeat flex items-center pt-18 noise-texture overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[100px]" />

        <div className="container-main relative z-10 text-center py-20 md:py-30">

          {/* Trust badge — replaces breadcrumb */}
          {/* <div className="inline-flex items-center gap-2 text-xs text-white/70 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            Specialist transfer pricing & OECD advisory — US &amp; European multinationals
          </div> */}

          <h1 className="text-hero-sm md:text-hero font-display font-bold max-w-3xl mx-auto mb-6" style={{ textShadow: '2px 2px 12px rgba(0,0,0,0.9)' }}>
            When Tax Authorities Come Knocking,{" "}
            <span className="text-yellow-300 italic" style={{ textShadow: '2px 2px 12px rgba(0,0,0,0.9)' }}>
              Documentation Alone Won't Save You.
            </span>
          </h1>

          {/* <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed" >
            SNG advises US and European multinationals on transfer pricing, Pillar Two compliance,
            and cross-border tax strategy. Senior-partner led. Built to withstand scrutiny.
          </p> */}

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/contact" className="bg-white text-black font-medium text-sm px-6 py-3 rounded hover:bg-accent hover:text-white transition-colors">
              Talk to a Partner
            </Link>
            <Link href="/services" className="btn-primary">
              See Our Services
            </Link>
          </div>

          {/* Social proof strip — honest signals for a new firm */}
          <div className="mt-14 flex items-center justify-center gap-8 flex-wrap  text-white font-bold  text-xs" style={{ textShadow: '2px 2px 12px rgba(0,0,0,0.9)' }}>
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="#D4A843" strokeWidth="1.5" />
              </svg>
              OECD BEPS specialist counsel
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="#D4A843" strokeWidth="1.5" />
              </svg>
              40+ jurisdictions covered
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="#D4A843" strokeWidth="1.5" />
              </svg>
              Partner-led on every engagement
            </span>
          </div>
        </div>
      </section>

      {/* ======== PROBLEM STATEMENT ======== */}
      {/*
        New section: speaks directly to the fear before pitching the solution.
        This is what humanizes the page for a real Head of Tax or CFO.
      */}
      <section className="py-16 md:py-20 border-b border-navy-border">
        <div className="container-main max-w-3xl text-center">
          <p className="text-lg md:text-xl font-display italic text-text-secondary leading-relaxed">
            &ldquo;Most tax firms hand your engagement to associates after the pitch meeting.
            Regulators have noticed. So have we.&rdquo;
          </p>
          <p className="text-sm text-text-muted mt-4">
            SNG was founded specifically because the largest firms in this space have a
            delivery problem. Every client we work with is handled by the partner who
            scoped the work — not someone reading their notes.
          </p>
        </div>
      </section>

      {/* ======== SERVICES ======== */}
      <section className="py-20 md:py-26">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="section-title">
                Specialist Counsel Across the Full Tax Life-cycle
              </h2>
            </div>
            <Link
              href="/services"
              className="mt-4 md:mt-0 text-sm text-accent hover:text-accent-light transition-colors flex items-center gap-1"
            >
              All Services
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ======== HOW WE WORK ======== */}
      {/*
        New section: process transparency builds trust for a firm without a long track record.
        Shows exactly what a client can expect — removes the unknown.
      */}
      {/* <section className="py-20 md:py-26 bg-[#f0f3fa]">
        <div className="container-main">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="section-title text-black mb-12">
            What Happens After You Reach Out
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="text-3xl font-display font-bold text-accent/20 mb-3">
                  {step.step}
                </div>
                <h4 className="text-sm font-semibold text-black mb-2">{step.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-20 md:py-26 bg-[#f0f3fa] overflow-hidden">
  <div className="container-main">
    <SectionLabel>How We Work</SectionLabel>
    <h2 className="section-title text-black mb-16">
      What Happens After You Reach Out
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
      
      {/* Connecting line (desktop only) */}
      <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent z-0" />

      {processSteps.map((step, i) => (
        <div key={step.step} className="relative flex flex-col items-center text-center px-6 group">
          
          {/* Step bubble */}
          <div className="relative z-10 mb-6">
            <div className="w-[52px] h-[52px] rounded-full border-2 border-accent/40 bg-white shadow-md shadow-accent/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
              <span className="text-sm font-bold font-display text-accent">{step.step}</span>
            </div>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 group-hover:shadow-md group-hover:border-accent/20 transition-all duration-300 w-full">
            {/* Icon per step */}
            <div className="text-2xl mb-3">
              {["🔍", "🛠", "👤", "🛡"][i]}
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 leading-snug">
              {step.title}
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
          </div>

          {/* Arrow between cards (mobile/tablet) */}
          {i < processSteps.length - 1 && (
            <div className="lg:hidden flex justify-center my-3 text-accent/40 text-xl">↓</div>
          )}
        </div>
      ))}
    </div>

    {/* Bottom CTA nudge */}
    <div className="mt-12 text-center">
      <p className="text-sm text-gray-400 italic">
        Most engagements are scoped within 48 hours of the first call.
      </p>
    </div>
  </div>
</section>

      {/* ======== WHY SNG ======== */}
      <section className="py-20 md:py-26">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionLabel>Our Difference</SectionLabel>
              <h2 className="section-title mb-6">
                Built Differently From the Firms You've Used Before
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                The largest tax advisory firms manage thousands of clients. By the time
                your file reaches someone qualified to handle it, three people have already
                touched it. SNG works differently — senior partners own every engagement,
                from scoping through delivery.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                We focus exclusively on US and European multinationals navigating OECD
                complexity. That focus means we're faster, sharper, and more current than
                generalist firms — because this is the only work we do.
              </p>
              <Link href="/contact" className="btn-primary inline-flex">
                Speak With a Partner
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {differentiators.map((feature) => (
                <div key={feature.title} className="card-surface text-white p-5">
                  <div className="text-2xl mb-3" style={{ fontSize: "20px" }}>{feature.icon}</div>
                  <h4 className="text-sm font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-xs text-text-muted leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======== OECD PILLAR TWO BANNER ======== */}
      <section className="py-20 md:py-26 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-card to-primary" />
        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>Why It Matters Now</SectionLabel>
              <h2 className="section-title mb-4">
                Pillar Two Is No Longer a Future Problem
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                As of 2024, over 35 jurisdictions have enacted Pillar Two legislation.
                Multinationals that treated this as a planning exercise are now filing under
                live rules — often without documentation robust enough to withstand review.
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                SNG helps groups understand their actual GloBE exposure, evaluate safe harbour
                elections, and build the internal workflows needed to file accurately — not just
                technically comply on paper.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8">
              <h3 className="text-label uppercase tracking-wider text-accent mb-5">
                Pillar Two Services
              </h3>
              <ul className="flex flex-col gap-3 mb-6">
                {focusAreas.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/services#oecd-beps" className="btn-primary w-full justify-center text-sm">
                Explore Pillar Two Advisory
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ======== TESTIMONIALS ======== */}
      <section className="py-20 md:py-26 bg-navy-surface">
        <div className="container-main">
          <SectionLabel>Client Outcomes</SectionLabel>
          <h2 className="section-title mb-4">
            Real Scrutiny. Real Resolutions.
          </h2>
          <p className="text-text-muted text-sm mb-12 max-w-2xl leading-relaxed">
            In our world, "good service" isn't a rating—it's an audit closed without adjustments
            or a board meeting that goes smoothly because the data is bulletproof. Here is how
            we’ve stepped in when the stakes were high.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>

          {/* Subtle Footnote for Credibility */}
          {/* <p className="text-[14px]  rounded-md text-red-500 mt-8 italic">
            *To maintain strict client confidentiality, names have been changed, but the scenarios and outcomes are 100% factual.
          </p> */}
        </div>
      </section>

      {/* ======== THOUGHT LEADERSHIP NUDGE ======== */}
      {/*
        New section: for a new firm, publishing insight builds credibility faster than claims.
        This nudges visitors toward your expertise before they decide to contact you.
      */}
      <section className="py-16 md:py-20 border-y border-navy-border">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <SectionLabel>Insights</SectionLabel>
              <h2 className="section-title mb-2">
                Read How We Think About Complex Problems
              </h2>
              <p className="text-text-muted text-sm max-w-lg">
                Before you decide to work with an advisory firm, you should know how they
                think. Our published analysis on Pillar Two, transfer pricing, and BEPS
                gives you exactly that.
              </p>
            </div>
            <Link href="/insights" className="btn-primary whitespace-nowrap shrink-0">
              Browse Insights
            </Link>
          </div>
        </div>
      </section>

      {/* ======== CTA ======== */}
      <section className="py-20 md:py-26 relative noise-texture">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-navy-card to-primary" />
        <div className="container-main relative z-10 text-center">
          <h2 className="text-section-sm md:text-section font-display font-bold mb-4">
            A 30-Minute Call Costs Nothing.{" "}
            <span className="text-accent">An Undefended Position Might.</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-3">
            Talk directly with a senior partner about your group's transfer pricing
            exposure, Pillar Two readiness, or compliance calendar. No sales team,
            no intake process — just a direct conversation.
          </p>
          <p className="text-text-muted text-sm mb-8">
            Response within one business day across US and European time zones.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Request a Partner Call
          </Link>
        </div>
      </section>
    </>
  );
}