import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import StatCard from "@/components/StatCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

const stats = [
  { value: 200, suffix: "+", label: "Multinational Clients" },
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 40, suffix: "+", label: "Countries Covered" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

const services = [
  {
    icon: "chart",
    title: "Global Transfer Pricing",
    description:
      "Comprehensive documentation, benchmarking, and policy implementation tailored to multi-jurisdictional requirements.",
    href: "/services#transfer-pricing",
  },
  {
    icon: "globe",
    title: "OECD / BEPS Compliance",
    description:
      "Expert guidance on Pillar Two, CbCR filing, and emerging international regulatory frameworks for large enterprises.",
    href: "/services#oecd-beps",
  },
  {
    icon: "shield",
    title: "Strategic Taxation",
    description:
      "Advisory on corporate structuring, local tax optimization, and long-term compliance strategy for global growth.",
    href: "/services#taxation",
  },
  {
    icon: "clipboard",
    title: "Managed Compliance",
    description:
      "End-to-end outsourcing of statutory reporting and tax filing with guaranteed technical accuracy and timeliness.",
    href: "/services#compliance",
  },
];

const advantages = [
  "Direct access to Senior Partners at every project phase",
  "Deep technical mastery of OECD/BEPS standards",
  "Cross-border coordination across 40+ countries",
  "Proactive risk identification before regulatory inquiry",
];

const focusAreas = [
  "Data Analysis & Risk Assessment",
  "Safe Harbour Evaluation",
  "Pillar One/Pillar Two Workflows",
  "Qualified Domestic Minimum Tax (QDMTT)",
];

const testimonials = [
  {
    quote:
      "NSG's technical depth in OECD Pillar Two implementation was a game changer for our European regional HQ.",
    name: "Marcus Von Braun",
    title: "Head of Tax, EMEA",
    company: "Fortune 100 Industrial",
  },
  {
    quote:
      "The level of senior partner engagement at NSG far exceeds what we've experienced with Big Four firms.",
    name: "Sarah Jennings",
    title: "Group CFO",
    company: "Global Consumer Goods",
  },
  {
    quote:
      "Precision is the right word. Their transfer pricing documentation stood up to rigorous local audits without a single adjustment.",
    name: "James Chen",
    title: "VP Tax, Asia-Pacific",
    company: "Tech Conglomerate",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ======== HERO ======== */}
      <section className="relative min-h-[90vh] flex items-center pt-18 noise-texture overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[100px]" />

        <div className="container-main relative z-10 text-center py-20 md:py-30">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs text-text-muted mb-8">
            <span>OECD</span>
            <span className="text-accent">›</span>
            <span>BEPS</span>
            <span className="text-accent">›</span>
            <span>Transfer Pricing</span>
            <span className="text-accent">›</span>
            <span className="text-text-secondary">Pillar Two</span>
          </div>

          <h1 className="text-hero-sm md:text-hero font-display font-bold max-w-3xl mx-auto mb-6">
            Navigating Global Compliance with{" "}
            <span className="text-accent italic">Precision</span>
          </h1>

          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Strategic tax advisory and OECD compliance solutions for US and European
            multinationals. Delivered with technical rigor and senior-level expertise.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/contact" className="btn-secondary">
              Talk to an Expert
            </Link>
            <Link href="/services" className="btn-primary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ======== STATS BAR ======== */}
      <section className="bg-navy-surface border-y border-navy-border">
        <div className="container-main py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ======== SERVICES ======== */}
      <section className="py-20 md:py-26 ">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <SectionLabel>Core Capabilities</SectionLabel>
              <h2 className="section-title">
                Technical Excellence Across the Tax Life-cycle
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

      {/* ======== WHY NSG ======== */}
      <section className="py-20 md:py-26 bg-[#f0f3fa]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Why Us */}
            <div>
              <SectionLabel>Our Advantage</SectionLabel>
              <h2 className="section-title text-black mb-6">
                Why Multinational Leaders Trust Our Counsel
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Unlike traditional firms, NSG focuses exclusively on the complex needs of
                US and European multinationals, providing a level of specialization that
                general consultancies cannot match.
              </p>
              <ul className="flex flex-col gap-3">
                {advantages.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#D4A843" strokeWidth="1.5" />
                      </svg>
                    </span>
                    <span className="text-sm text-black">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Features */}
            <div className="grid  grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icon: "👥",
                  title: "Partner-Led Delivery",
                  desc: "Every engagement is overseen directly by a senior partner, ensuring top-tier expertise in every deliverable.",
                },
                {
                  icon: "✦",
                  title: "Technical Rigor",
                  desc: "Our methodologies are built on the latest OECD frameworks and local jurisdictional requirements.",
                },
                {
                  icon: "🌍",
                  title: "Global Footprint",
                  desc: "Operational excellence from London to Jaipur, supporting clients across all major time zones.",
                },
                {
                  icon: "🛡",
                  title: "Risk Mitigation",
                  desc: "We don't just fill documents; we build robust audit-ready defenses for your global tax positions.",
                },
              ].map((feature) => (
                <div key={feature.title} className="card-surface text-white p-5">
                  <div className="text-2xl mb-3">{feature.icon}</div>
                  <h4 className="text-sm font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-xs text-text-muted leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======== OECD FOCUS BANNER ======== */}
      <section className="py-20 md:py-26 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-card to-primary" />
        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg md:text-xl font-display italic text-text-secondary leading-relaxed mb-6">
                &ldquo;Transfer Pricing is no longer just about documentation&mdash;it&apos;s
                about global narrative management.&rdquo;
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                As tax authorities worldwide increase transparency and cooperation, NSG
                provides the sophisticated economic analysis and localized defense
                strategies needed to protect your global value chain.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8">
              <h3 className="text-label uppercase tracking-wider text-accent mb-5">
                OECD Pillar Two Preparedness
              </h3>
              <ul className="flex flex-col gap-3 mb-6">
                {focusAreas.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/services" className="btn-primary w-full justify-center text-sm">
                View TP Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======== TESTIMONIALS ======== */}
      <section className="py-20 md:py-26 bg-navy-surface">
        <div className="container-main">
          <SectionLabel>Client Feedback</SectionLabel>
          <h2 className="section-title mb-10">Trusted by Heads of Tax Worldwide</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ======== CTA ======== */}
      <section className="py-20 md:py-26 relative noise-texture">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-navy-card to-primary" />
        <div className="container-main relative z-10 text-center">
          <h2 className="text-section-sm md:text-section font-display font-bold mb-4">
            Ready to Secure Your{" "}
            <span className="text-accent">Global Footprint</span>?
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-8">
            Connect with our senior partners to discuss your multinational tax and
            compliance challenges.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
