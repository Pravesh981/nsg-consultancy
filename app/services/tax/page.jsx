"use client";

import { useState } from "react";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

// Latest 2026 regulatory insights from Taxsutra & Indian Jurisprudence
const realTimeUpdates = [
  {
    tag: "Regulatory Shift",
    title: "New Income Tax Framework Compliance",
    desc: "Adapting enterprise compliance architectures to the sweeping direct tax structural overhaul, rationalized prosecution provisions, and integrated assessment-penalty models.",
  },
  {
    tag: "Judicial Precedent",
    title: "Form 67 & FTC Relief Protections",
    desc: "Leveraging recent high-court and ITAT mandates establishing that procedural or venial delays in filing Form 67 cannot deny substantive Foreign Tax Credit (FTC) treaty rights.",
  },
  {
    tag: "OECD Pillar Two",
    title: "New 'Side-by-Side' Package & GIR Readiness",
    desc: "Implementing the newly released permanent simplified ETR safe harbours and data strategies ahead of the critical GloBE Information Return (GIR) deadlines.",
  },
];

const taxPractices = [
  {
    id: "international-tax",
    title: "Cross-Border & International Tax Advisory",
    subtitle: "Inbound & Outbound Structuring",
    description: "Architecting robust cross-border business models that mitigate Permanent Establishment (PE) exposures and maximize double taxation relief under global DTAA networks.",
    bullets: [
      "Permanent Establishment (PE) risk mapping for hybrid and global remote workforces",
      "Withholding Tax (WHT) optimization and treaty entitlement defense (MLI compliance)",
      "Strategic structuring of inbound investments (FDI) and outbound global expansions",
      "Interplay management between Section 195 withholdings and export commission structures",
    ],
  },
  {
    id: "pillar-two",
    title: "OECD Pillar Two & GloBE Data Automation",
    subtitle: "Global Minimum Tax Regime",
    description: "Providing advanced predictive modeling and data ingestion frameworks for the 15% Global Minimum Tax, completely aligned with the OECD's latest Administrative Guidance.",
    bullets: [
      "Comprehensive Pillar Two liability impact mapping and jurisdictional ETR assessments",
      "Transitional and Permanent Safe Harbour qualification audits under the new side-by-side framework",
      "Qualified Domestic Minimum Top-up Tax (QDMTT) data mapping and defensive structuring",
      "End-to-end design of automated workflows for GloBE Information Return (GIR) reporting",
    ],
  },
  {
    id: "transfer-pricing",
    title: "Transfer Pricing & Advance Pricing Agreements",
    subtitle: "Arm's Length Defense",
    description: "Defending complex value chains amidst aggressive transfer pricing audits. We leverage newly fast-tracked APA pathways and automated safe harbour thresholds.",
    bullets: [
      "Master File, Local File, and Country-by-Country Reporting (CbCR) audit-ready compilation",
      "Value chain analysis for intangible asset licensing, IP migration, and DEMPE functions",
      "Unilateral and Bilateral Advance Pricing Agreement (APA) strategic negotiations",
      "Application of the expanded 15.5% automated Safe Harbour margins for IT/ITeS and tech sectors",
    ],
  },
  {
    id: "litigation",
    title: "Tax Controversy & Dispute Resolution",
    subtitle: "Appellate Representation",
    description: "Representing enterprise interests before the DRP, ITAT, and High Courts, utilizing the newest litigation reduction and integrated penalty-assessment rules.",
    bullets: [
      "Strategic defense against high-value draft assessment orders and Section 144C proceedings",
      "Litigating complex Fee for Technical Services (FTS) and royalty characterization disputes",
      "Filing and processing delayed Form 67 rectifications for substantial Foreign Tax Credit recovery",
      "Compounding of technical defaults under the decriminalized direct tax guidelines",
    ],
  },
];

export default function TaxServicesPage() {
  const [activePractice, setActivePractice] = useState("international-tax");
  const selectedPractice = taxPractices.find((p) => p.id === activePractice) || taxPractices[0];

  return (
    <>
      {/* Search-Rich Hero Section */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 relative bg-gradient-to-b from-navy-card to-primary overflow-hidden border-b border-navy-border">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[120px] pointer-events-none" />
        <div className="container-main relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent mb-4">
            <span>Corporate Advisory</span>
            <span className="text-text-muted">•</span>
            <span>International Taxation</span>
            <span className="text-text-muted">•</span>
            <span>Litigation Defense</span>
          </div>
          
          <h1 className="text-hero-sm md:text-hero font-display font-bold max-w-4xl mb-6 tracking-tight text-white">
            Institutional Precision in <br />
            <span className="text-accent italic font-normal">International Tax</span> & Controversy.
          </h1>
          <p className="text-base md:text-xl text-text-secondary max-w-3xl leading-relaxed">
            Navigating the intersection of the new domestic tax frameworks, aggressive ITAT precedents, and the shifting dynamics of the OECD Pillar Two global minimum tax regime. 
          </p>
        </div>
      </section>

      {/* Real-Time Market Intelligence Ticker/Cards */}
      <section className="py-12 bg-navy-surface border-b border-navy-border">
        <div className="container-main">
          <div className="mb-6">
            <SectionLabel>Regulatory Intelligence & Precedents</SectionLabel>
            <h2 className="text-xl font-semibold text-white mt-1">Live Technical Focus Areas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {realTimeUpdates.map((update, idx) => (
              <div key={idx} className="p-5 rounded border border-navy-border bg-navy-card relative group hover:border-accent/30 transition-all duration-300">
                <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase text-accent bg-accent/10 px-2 py-0.5 rounded">
                  {update.tag}
                </span>
                <h3 className="text-sm font-bold text-white mb-2 pr-20">{update.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{update.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Capabilities Interface */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Nav: Interactive Taxonomy Selector */}
            <div className="lg:col-span-4 flex flex-col gap-2 sticky top-24 z-20">
              <span className="text-xs font-bold uppercase tracking-widest text-text-muted px-3 mb-2 block">
                Practice Verticals
              </span>
              {taxPractices.map((practice) => (
                <button
                  key={practice.id}
                  onClick={() => setActivePractice(practice.id)}
                  className={`w-full text-left px-4 py-3.5 rounded text-sm font-medium transition-all duration-200 border ${
                    activePractice === practice.id
                      ? "bg-accent text-primary border-accent font-semibold shadow-md"
                      : "bg-navy-card text-text-secondary hover:bg-navy-light hover:text-white border-navy-border"
                  }`}
                >
                  <span className="block text-[11px] opacity-75 uppercase tracking-wider font-mono mb-0.5">
                    {practice.subtitle}
                  </span>
                  <span className="text-base font-display">{practice.title}</span>
                </button>
              ))}
            </div>

            {/* Right Panel: Deep-Dive SEO Content Dynamic View */}
            <div className="lg:col-span-8 p-6 md:p-10 rounded-lg bg-navy-card border border-navy-border shadow-xl">
              <span className="text-xs font-mono tracking-wider uppercase text-accent bg-accent/5 px-2.5 py-1 rounded border border-accent/10">
                {selectedPractice.subtitle}
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mt-4 mb-4 tracking-tight">
                {selectedPractice.title}
              </h3>
              <p className="text-text-secondary leading-relaxed text-base mb-8 pb-6 border-b border-navy-border">
                {selectedPractice.description}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                Core Advisory & Defense Frameworks
              </h4>
              <ul className="grid grid-cols-1 gap-4">
                {selectedPractice.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-text-secondary">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-1 flex-shrink-0 text-accent"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8l4 4 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="leading-normal">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-6 border-t border-navy-border flex flex-wrap gap-4 items-center justify-between">
                <p className="text-xs text-text-muted max-w-sm">
                  Fully updated to conform with the latest DTAA multilateral instruments and ITAT rulings.
                </p>
                <Link href="/contact" className="btn-primary inline-flex items-center text-sm font-semibold">
                  Enquire About This Practice
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Strategic Value Proposition / Footer CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-t from-navy-surface to-primary relative border-t border-navy-border">
        <div className="container-main text-center max-w-3xl mx-auto">
          <SectionLabel className="justify-center">Mitigate Cross-Border Risk</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mt-3 mb-6 tracking-tight">
            Institutional Protection Against Global Tax Ambiguity
          </h2>
          <p className="text-text-secondary text-base md:text-lg mb-10 leading-relaxed">
            As tax administrations globally enforce tech-driven automated data reconciliations, reactive compliance is a liability. Partner with SNG Consultancy to insulate your corporate structures with proactive, defensible advisory.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Initiate Risk Assessment
            </Link>
            <Link href="/insights" className="btn-secondary">
              Access Technical Tax Briefings
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}