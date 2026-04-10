"use client";
import { useState } from "react";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

const tabs = [
  { id: "accounting", label: "Accounting" },
  { id: "transfer-pricing", label: "Transfer Pricing" },
  { id: "oecd-beps", label: "OECD / BEPS" },
  { id: "taxation", label: "Taxation" },
  { id: "technology", label: "Technology" },
];

const serviceData = {
  accounting: {
    badge: "Lease & Jobs",
    color: "blue",
    title: "Accounting & Reporting",
    description:
      "Precision-driven financial reporting and accounting services that ensure full alignment with both local statutory requirements and global corporate standards.",
    cta: "Enquire About Accounting & Reporting",
    highlights: [
      "Multi-jurisdictional consolidated reporting",
      "Statutory financial statement preparation",
      "Complex GAAP to IFRS conversions",
      "Audit coordination and readiness support",
      "General ledger management for multinationals",
      "Intercompany transaction reconciliation",
    ],
  },
  "transfer-pricing": {
    badge: "Strategy",
    color: "amber",
    title: "Transfer Pricing",
    description:
      "Navigating the high-stakes world of cross-border value chains with sophisticated modeling, documentation, and dispute resolution strategies.",
    cta: "Enquire About Transfer Pricing",
    highlights: [
      "Global TP policy design and benchmarking",
      "Master File & Local File documentation",
      "Country-by-Country (CbCR) Reporting compliance",
      "Intangible asset DFI valuation and licensing",
      "Advanced Pricing Agreement (APA) negotiations",
      "Operational TP implementation monitoring",
    ],
  },
  "oecd-beps": {
    badge: "Global Minimum",
    color: "green",
    title: "OECD / BEPS Pillar Two",
    description:
      "Specialized preparedness for the Global Minimum Tax (GMT). We provide the technical depth required to manage the Pillar Two impact on your global ETR.",
    cta: "Enquire About OECD / BEPS Pillar Two",
    highlights: [
      "Pillar Two impact assessment & modeling",
      "Qualified Domestic Minimum Top-up Tax (QDMTT) analysis",
      "Global Anti-Base Erosion (GloBE) information returns",
      "Transitional Safe Harbour qualification checks",
      "Data strategy for GMT reporting requirements",
      "CFO-level strategic tax planning",
    ],
  },
  taxation: {
    badge: "Advisory",
    color: "purple",
    title: "Corporate Taxation",
    description:
      "Comprehensive tax planning and compliance services that optimize your global footprint while ensuring absolute adherence to evolving tax laws.",
    cta: "Enquire About Corporate Taxation",
    highlights: [
      "Direct and indirect tax compliance",
      "Permanent Establishment (PE) risk management",
      "Withholding tax (WHT) optimization",
      "M&A tax due diligence & structuring",
      "Tax controversy and dispute resolution",
      "R&D tax credit and incentive claims",
    ],
  },
  technology: {
    badge: "Innovation",
    color: "teal",
    title: "Tax Technology",
    description:
      "Modernizing the tax function through digital transformation. We implement the tools that automate compliance and provide real-time insights.",
    cta: "Enquire About Tax Technology",
    highlights: [
      "Tax software selection and implementation",
      "Workflow automation for tax functions",
      "ERP tax engine configuration",
      "Data analytics and visualization for CFOs",
      "Digital tax reporting for invoicing solutions",
      "Cloud-based compliance management",
    ],
  },
};

const partners = [
  { name: "OECD", abbr: "OECD" },
  { name: "PwC", abbr: "PwC" },
  { name: "Deloitte", abbr: "DT" },
  { name: "KPMG", abbr: "KP" },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("accounting");
  const data = serviceData[activeTab];

  return (
    <>
      {/* Hero */}
      <section className="pt-26 md:pt-30 pb-16 md:pb-20 relative noise-texture  bg-[url('/Technical%20Excellence.webp')] bg-cover bg-center bg-no-repeat">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px]" />
        <div className="container-main relative z-10  ">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-6">
            <span>OECD</span>
            <span className="text-accent">›</span>
            <span>BEPS</span>
            <span className="text-accent">›</span>
            <span>Transfer Pricing</span>
            <span className="text-accent">›</span>
            <span className="text-text-secondary">Pillar Two</span>
          </div>

          <h1 className="text-hero-sm md:text-hero font-display font-bold max-w-3xl mb-6">
            Technical <span className="text-accent italic">Excellence</span> in
            <br />
            Global Compliance.
          </h1>
          <p className="text-base md:text-lg text-text-secondary max-w-xl leading-relaxed">
            Strategic advisory services designed specifically for the complexities of US
            and European multinational operations. We translate regulation into competitive
            advantage.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="sticky top-16 md:top-18 z-40 bg-primary/95 backdrop-blur-md border-y border-navy-border">
        <div className="container-main">
          <div className="flex overflow-x-auto gap-1 py-3 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-accent text-primary"
                    : "bg-navy-card text-text-secondary hover:bg-navy-light hover:text-white border border-navy-border"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail */}
      <section className="py-16 md:py-22">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Description */}
            <div className="order-2 lg:order-1">
              <span className="inline-block px-3 py-1 rounded text-xs font-medium bg-accent/10 text-accent border border-accent/20 mb-4">
                {data.badge}
              </span>
              <SectionLabel>Specialized Practice</SectionLabel>
              <h2 className="text-section-sm md:text-section font-display font-semibold mb-5">
                {data.title}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">{data.description}</p>
              <Link href="/contact" className="btn-primary">
                {data.cta}
              </Link>
            </div>

            {/* Right: Highlights */}
            <div className="order-1 lg:order-2 card-surface p-6 md:p-8">
              <h4 className="text-label uppercase tracking-wider text-accent mb-5">
                Practice Highlights
              </h4>
              <ul className="flex flex-col gap-3">
                {data.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-0.5 flex-shrink-0"
                    >
                      <path d="M3 8l4 4 6-6" stroke="#D4A843" strokeWidth="1.5" />
                    </svg>
                    <span className="text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Adhering to Global Standards */}
      <section className="py-16 md:py-22 bg-navy-surface">
        <div className="container-main">
          <SectionLabel className="text-center">Adhering to Global Standards</SectionLabel>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {partners.map((p) => (
              <div
                key={p.name}
                className="w-24 h-16 card-surface flex items-center justify-center text-text-muted font-display font-bold text-lg hover:border-accent/30 transition-colors"
              >
                {p.abbr}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-26">
        <div className="container-main">
          <h2 className="text-section-sm md:text-section font-display font-semibold mb-4">
            Ready to institutionalize your compliance?
          </h2>
          <p className="text-text-secondary max-w-xl mb-8">
            Partner with NSG Consultancy to navigate the shifting sands of global taxation
            with the precision your organization demands.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
            <Link href="/insights" className="btn-secondary">
              Read Latest Insights
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
