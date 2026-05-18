"use client";

import { useState } from "react";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

const tabs = [
  { id: "accounting", label: "Accounting & Statutory Reporting" },
  { id: "transfer-pricing", label: "Transfer Pricing Advisory" },
  { id: "oecd-beps", label: "OECD Pillar Two / BEPS" },
  { id: "taxation", label: "Corporate International Tax" },
  { id: "technology", label: "Tax Technology & Automation" },
];

const serviceData = {
  accounting: {
    badge: "Statutory & Management Reporting",
    title: "Global Accounting & Statutory Reporting",
    description:
      "Precision-driven financial reporting architectures tailored for international scale. We bridge the gap between complex local statutory mandates and global corporate reporting standards, reducing your close cycles and audit friction.",
    cta: "Optimize Your Financial Reporting",
    highlights: [
      "Multi-jurisdictional consolidated financial reporting",
      "Local statutory financial statement preparation & compliance",
      "Complex cross-border GAAP to IFRS / US GAAP conversions",
      "End-to-end audit coordination and readiness assurance",
      "Clean intercompany transaction reconciliation & data mapping",
      "Scalable general ledger management for complex multinational structures",
    ],
  },
  "transfer-pricing": {
    badge: "Risk Mitigation & Strategy",
    title: "Strategic Transfer Pricing Solutions",
    description:
      "Protect your cross-border value chains against intensifying regulatory scrutiny. We design, implement, and defend defensible transfer pricing frameworks that align with substance and support long-term corporate growth.",
    cta: "Secure Your Transfer Pricing Strategy",
    highlights: [
      "Global transfer pricing policy design and transactional benchmarking",
      "Robust Master File and Local File documentation compliance",
      "Country-by-Country (CbCR) reporting risk analysis and notifications",
      "Intangible asset (DEMPE functions) valuation and cross-border licensing",
      "Bilateral and Unilateral Advance Pricing Agreement (APA) negotiations",
      "Operational transfer pricing monitoring to eliminate year-end adjustments",
    ],
  },
  "oecd-beps": {
    badge: "Global Minimum Tax Readiness",
    title: "OECD Pillar Two & BEPS Compliance",
    description:
      "The 15% Global Minimum Tax regime is here, fundamentally altering global Effective Tax Rates (ETR). We equip multinational groups with the concrete data strategies, predictive modeling, and technical depth required to navigate complex GloBE rules.",
    cta: "Assess Your Pillar Two Exposure",
    highlights: [
      "Pillar Two liability impact assessment and data modeling",
      "Qualified Domestic Minimum Top-up Tax (QDMTT) compliance reviews",
      "Transitional Safe Harbour qualification and optimization mapping",
      "Comprehensive GloBE Information Return (GIR) preparation workflows",
      "ERP data strategy mapping for granular minimum tax data points",
      "CFO-level strategic tax planning and board-ready reporting",
    ],
  },
  taxation: {
    badge: "Cross-Border Tax Advisory",
    title: "Corporate International Taxation",
    description:
      "Proactive corporate tax planning and robust tax compliance workflows engineered for the modern enterprise footprint. Protect your margins while remaining adaptive to shifting domestic and international tax frameworks.",
    cta: "Consult Our Tax Strategy Team",
    highlights: [
      "Strategic direct and indirect tax compliance frameworks",
      "Permanent Establishment (PE) risk assessment for remote/cross-border teams",
      "Cross-border withholding tax (WHT) structuring and treaty optimization",
      "Inbound and outbound M&A tax due diligence and structural design",
      "Corporate tax controversy management and strategic dispute resolution",
      "R&D tax credits, intellectual property boxes, and incentive optimization",
    ],
  },
  technology: {
    badge: "Digital Transformation",
    title: "Tax Technology Integration & Automation",
    description:
      "Modernize your finance operations by turning compliance into a competitive advantage. We deploy, configure, and automate the cutting-edge digital infrastructure needed for real-time tax data visibility and accurate forecasting.",
    cta: "Modernize Your Tax Infrastructure",
    highlights: [
      "Enterprise tax software assessment, selection, and deployment",
      "Custom workflow automation for highly complex tax accounting functions",
      "ERP tax engine configuration and optimization (SAP, Oracle, NetSuite)",
      "Dynamic data analytics and real-time visualization dashboards for CFOs",
      "E-invoicing, digital tax reporting, and live SAF-T compliance compliance",
      "Secure, cloud-based compliance management and audit trail tracking",
    ],
  },
};

const partners = [
  { name: "OECD Guidelines", abbr: "OECD" },
  { name: "PricewaterhouseCoopers", abbr: "PwC" },
  { name: "Deloitte", abbr: "DTT" },
  { name: "KPMG", abbr: "KPMG" },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("accounting");
  const data = serviceData[activeTab];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-26 md:pt-30 pb-16 md:pb-20 relative noise-texture bg-[url('/Technical%20Excellence.webp')] bg-cover bg-center bg-no-repeat">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px]" />
        <div className="container-main relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-text-muted mb-6">
            <span>OECD Compliance</span>
            <span className="text-accent">›</span>
            <span>BEPS Pillar Two</span>
            <span className="text-accent">›</span>
            <span>Transfer Pricing Strategy</span>
          </div>

          <h1 className="text-hero-sm md:text-hero font-display font-bold max-w-4xl mb-6 tracking-tight">
            Technical <span className="text-accent italic">Excellence</span> in 
            <br />
            Global Tax Compliance.
          </h1>
          <p className="text-base md:text-lg text-text-secondary max-w-2xl leading-relaxed">
            Strategic tax advisory and robust statutory reporting engineered for the complexities of US, European, and cross-border multinational corporate operations. We turn regulatory shifts into structural advantages.
          </p>
        </div>
      </section>

      {/* Sticky Navigation Tabs */}
      <section className="sticky top-16 md:top-18 z-40 bg-primary/95 backdrop-blur-md border-y border-navy-border">
        <div className="container-main">
          <div className="flex overflow-x-auto gap-2 py-3 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-accent text-primary shadow-sm"
                    : "bg-navy-card text-text-secondary hover:bg-navy-light hover:text-white border border-navy-border"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Showcase */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Descriptive Capabilities */}
            <div className="order-2 lg:order-1">
              <span className="inline-block px-3 py-1 rounded text-xs font-semibold tracking-wider uppercase bg-accent/10 text-accent border border-accent/20 mb-4">
                {data.badge}
              </span>
              <div className="mb-2">
                <SectionLabel>Specialized Enterprise Practice</SectionLabel>
              </div>
              <h2 className="text-section-sm md:text-section font-display font-semibold mb-5 tracking-tight text-white">
                {data.title}
              </h2>
              <p className="text-text-secondary leading-relaxed text-base md:text-md mb-8">
                {data.description}
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center group">
                {data.cta}
                <svg 
                  className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Right Column: Key Operational Highlights */}
            <div className="order-1 lg:order-2 card-surface p-6 md:p-8 bg-navy-card rounded-lg border border-navy-border">
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">
                Core Practice Deliverables
              </h3>
              <ul className="flex flex-col gap-4">
                {data.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M3 8l4 4 6-6" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm md:text-base text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Global Standards & Framework Alignment */}
      {/* <section className="py-16 md:py-20 bg-navy-surface border-y border-navy-border">
        <div className="container-main text-center">
          <SectionLabel className="justify-center">Regulatory Alignment & Benchmarks</SectionLabel>
          <p className="text-sm text-text-muted mt-2 max-w-xl mx-auto">
            Our methodologies are meticulously aligned with the international frameworks and guidelines outlined by premier tax jurisdictions and advisory standards.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {partners.map((p) => (
              <div
                key={p.name}
                title={p.name}
                className="w-28 h-16 card-surface flex items-center justify-center text-text-muted font-display font-extrabold text-md tracking-wider hover:border-accent/40 hover:text-white transition-all cursor-default rounded border border-navy-border bg-navy-card"
              >
                {p.abbr}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Actionable Bottom CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="container-main relative z-10">
          <h2 className="text-section-sm md:text-section font-display font-semibold mb-4 tracking-tight">
            Ready to institutionalize your global compliance?
          </h2>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
            Partner with SNG Consultancy to de-risk your cross-border operations and navigate the shifting landscape of global taxation with institutional precision.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Schedule an Advisory Consultation
            </Link>
            <Link href="/insights" className="btn-secondary">
              Review Corporate Tax Insights
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}