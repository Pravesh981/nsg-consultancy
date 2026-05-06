import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import StatCard from "@/components/StatCard";

const stats = [
  { value: 2009, suffix: "", label: "Founded" },
  { value: 3, suffix: "", label: "Global Offices" },
  { value: 500, suffix: "+", label: "Deals Advised" },
  { value: 45, suffix: "", label: "Tax Experts" },
];

const values = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Uncompromising Integrity",
    desc: "Our advice is built on the bedrock of ethical compliance and long-term regulatory stability.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    title: "Precision Execution",
    desc: "We eliminate ambiguity. Every transfer pricing study and filing is executed with meticulous detail.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Agile Intelligence",
    desc: "Staying ahead of OECD Pillar Two and evolving tax technologies to give you a strategic advantage.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Senior-Led Focus",
    desc: "Direct access to our partners for every engagement. No junior hand-offs, only veteran expertise.",
  },
];

const team = [
  {
    name: "Marcus Vane",
    role: "Managing Partner",
    tags: ["Transfer Pricing", "M&A Tax"],
    initials: "MV",
  },
  {
    name: "Sienna Gupta",
    role: "Head of Compliance",
    tags: ["OECD Pillar Two", "Global Reporting"],
    initials: "SG",
  },
  {
    name: "David Sterling",
    role: "Director of Operations",
    tags: ["Process Ops.", "Tax Tech"],
    initials: "DS",
  },
  {
    name: "Elena Rossi",
    role: "Lead Tax Counsel",
    tags: ["BEPS Advisory", "EU Tax Law"],
    initials: "ER",
  },
];

const offices = [
  {
    city: "London",
    badge: "Client HQ",
    badgeColor: "bg-red-500/20 text-red-400",
    country: "United Kingdom",
    address: "150 Aldersgate St, Barbican, London EC1A 4AB",
    phone: "+44 (0) 20 7946 0123",
    email: "london@SNGconsultancy.com",
  },
  {
    city: "Jaipur",
    badge: "Global Operations",
    badgeColor: "bg-amber-500/20 text-amber-400",
    country: "India",
    address: "World Trade Park, Malviya Nagar, Jaipur, Rajasthan 302017",
    phone: "+91 141 271 8500",
    email: "jaipur@SNGconsultancy.com",
  },
  {
    city: "Virtual",
    badge: "Digital Advisory",
    badgeColor: "bg-blue-500/20 text-blue-400",
    country: "Global Support",
    address: "Serving clients across 40+ jurisdictions remotely",
    phone: "+44 800 123 4567",
    email: "global@SNGconsultancy.com",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-26 md:pt-30 pb-16 md:pb-20 relative noise-texture overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[120px]" />
        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded text-xs font-medium bg-accent/10 text-accent border border-accent/20 mb-6">
                About SNG
              </span>
              <h1 className="text-hero-sm md:text-hero font-display font-bold mb-6">
                Refining Global{" "}
                <span className="text-accent italic">Compliance</span>
                <br />
                Through Expert Precision.
              </h1>
              <p className="text-text-secondary leading-relaxed">
                For over 15 years, SNG Consultancy has served as the silent architecture
                behind the global tax operations of Fortune 500 multinationals.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="card-surface p-5 text-center">
                  <StatCard {...stat} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SNG Standard */}
      <section className="py-20 md:py-26 bg-navy-surface">
        <div className="container-main">
          <SectionLabel>The SNG Standard</SectionLabel>
          <h2 className="section-title max-w-2xl mb-4">
            Our approach is rooted in technical rigor and senior-led accountability.
          </h2>
          <p className="text-text-secondary max-w-2xl mb-12 leading-relaxed">
            We bridge the gap between complex OECD regulations and practical corporate
            implementation, ensuring your global footprint is both compliant and optimized.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="card-surface-hover p-6 text-center group">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  {v.icon}
                </div>
                <h4 className="text-sm font-semibold text-white mb-2">{v.title}</h4>
                <p className="text-xs text-text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-26">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <SectionLabel>Senior Leadership</SectionLabel>
              <h2 className="section-title">
                Guided by veterans of the global tax landscape.
              </h2>
            </div>
            <Link href="/contact" className="btn-outline-accent mt-4 md:mt-0 text-sm">
              Join the Team
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((person) => (
              <div key={person.name} className="card-surface-hover p-6 text-center group">
                <div className="w-20 h-20 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center mx-auto mb-4 text-accent font-display font-bold text-xl group-hover:border-accent/60 transition-colors">
                  {person.initials}
                </div>
                <h4 className="text-base font-semibold text-white">{person.name}</h4>
                <p className="text-xs text-accent uppercase tracking-wider font-semibold mt-1 mb-3">
                  {person.role}
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {person.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] bg-navy-light border border-navy-border text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network */}
      <section className="py-20 md:py-26 bg-navy-surface">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
            <div>
              <SectionLabel>Global Network</SectionLabel>
              <h2 className="section-title max-w-md">
                Positioned where the world does business.
              </h2>
            </div>
            <p className="text-sm text-text-secondary max-w-md leading-relaxed lg:pt-8">
              Our strategic presence in the UK and India allows us to provide
              follow-the-sun support for multinationals operating across EMEA, APAC, and
              the Americas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {offices.map((office) => (
              <div key={office.city} className="card-surface p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white">{office.city}</h4>
                    <p className="text-xs text-text-muted uppercase tracking-wider">
                      {office.country}
                    </p>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${office.badgeColor}`}>
                    {office.badge}
                  </span>
                </div>

                <div className="flex flex-col gap-2.5 mb-4">
                  <div className="flex items-start gap-2">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="mt-0.5 text-text-muted flex-shrink-0">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p className="text-xs text-text-muted">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-text-muted flex-shrink-0">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <p className="text-xs text-text-muted">{office.phone}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-text-muted flex-shrink-0">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <p className="text-xs text-accent">{office.email}</p>
                  </div>
                </div>

                <Link href="/contact" className="text-xs text-accent hover:text-accent-light font-medium transition-colors flex items-center gap-1">
                  Contact Office →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-26 relative noise-texture">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-card via-primary to-primary" />
        <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-accent/[0.04] rounded-full blur-[100px]" />
        <div className="container-main relative z-10 text-center">
          <h2 className="text-section-sm md:text-section font-display font-bold mb-4">
            Ready to elevate your global tax strategy with SNG&apos;s expert precision?
          </h2>
          <div className="flex justify-center gap-4 flex-wrap mt-8">
            <Link href="/contact" className="btn-primary px-8">
              Request a Consultation
            </Link>
            <Link href="/services" className="btn-secondary px-8">
              Browse Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
