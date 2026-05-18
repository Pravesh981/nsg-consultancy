"use client";

import { useState } from "react";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

// High-impact operational capabilities tailored for US & European Inbound/Outbound MNEs
const accountingMarketUpdates = [
  {
    tag: "US & EU Compliance",
    title: "Dual-Framework Financial Mapping",
    desc: "Bridging the structural gap between local European statutory books, local direct tax filing regulations, and strict corporate US GAAP or IFRS requirements seamlessly.",
  },
  {
    tag: "Cross-Border Consolidation",
    title: "Multi-Currency Global Close Optimization",
    desc: "Accelerating your month-end and year-end closing cycles through automated, audited intercompany reconciliations and multi-tier foreign currency translation adjustments.",
  },
  {
    tag: "Audit Readiness",
    title: "Decoupling Audit Friction For Western Corporate CFOs",
    desc: "Providing institutional, clear, and audit-ready workpapers designed to appease Big Four and premier international audit networks without internal operational drag.",
  },
];

const accountingPractices = [
  {
    id: "gaap-ifrs",
    title: "Complex GAAP conversions & Dual Reporting",
    subtitle: "US GAAP • IFRS Integration",
    description: "Aligning distinct accounting systems for foreign subsidiaries. We execute precise conversions between local statutory books, standard European accounting guidelines (e.g., German HGB, French GAAP), US GAAP, and IFRS.",
    bullets: [
      "Comprehensive conversion and restatement of multi-jurisdictional financial profiles",
      "Meticulous alignment of lease accounting structures (ASC 842 / IFRS 16) across global books",
      "Revenue recognition policy reconciliation frameworks (ASC 606 / IFRS 15)",
      "Detailed deferred tax computation and valuation under IAS 12 and ASC 740 architectures",
    ],
  },
  {
    id: "consolidation-reporting",
    title: "Global Entity Consolidation & Management Reporting",
    subtitle: "Multi-Jurisdictional Frameworks",
    description: "Delivering consolidated corporate reporting suites tailored for international boardrooms and executive stake-holders in London, New York, Frankfurt, or Silicon Valley.",
    bullets: [
      "Rigorous elimination of complex cross-border intercompany balances, profits, and dividends",
      "Sophisticated foreign currency translation adjustments (CTA) under ASC 830 / IAS 21",
      "Customized, granular management reporting packs containing executive KPI and margin analytics",
      "Standardized data extraction frameworks compatible with tier-1 enterprise ERPs (SAP, Oracle, NetSuite)",
    ],
  },
  {
    id: "statutory-compliance",
    title: "Cross-Border Statutory Compliance & Year-End Close",
    subtitle: "Frictionless Sub-Ledger Control",
    description: "Ensuring flawless compliance with local regulations while maintaining strict adherence to Western parent company timelines, compliance protocols, and controls.",
    bullets: [
      "Preparation of comprehensive, audit-ready standalone statutory financial statements",
      "Smooth data mapping between operational sub-ledgers and strict tax compliance returns",
      "Implementation of standard SOX-compliant financial close controls and documentation paths",
      "Continuous monitoring of evolving electronic reporting mandates across European jurisdictions (such as SAF-T)",
    ],
  },
  {
    id: "audit-coordination",
    title: "Institutional Audit Coordination & Support",
    subtitle: "Big Four Network Interface",
    description: "Acting as your local technical interface to guide your organization through intense international audits. We manage the requests of global audit networks directly, saving internal team bandwidth.",
    bullets: [
      "Compiling granular, institutional-grade lead schedules and technical disclosure notes",
      "Proactively resolving complex technical accounting queries raised by international audit partners",
      "Maintaining an end-to-end, transparent trail of audit evidence and process validation documents",
      "Streamlining seasonal review cycles to prevent target date overruns or surprise restatements",
    ],
  },
];

export default function AccountingServicesPage() {
  const [activePractice, setActivePractice] = useState("gaap-ifrs");
  const selectedPractice = accountingPractices.find((p) => p.id === activePractice) || accountingPractices[0];

  return (
    <>
      {/* SEO-Enriched Hero Section */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 relative bg-gradient-to-b from-navy-card to-primary overflow-hidden border-b border-navy-border">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[120px] pointer-events-none" />
        <div className="container-main relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent mb-4">
            <span>Global Operations</span>
            <span className="text-text-muted">•</span>
            <span>US GAAP & IFRS Advisory</span>
            <span className="text-text-muted">•</span>
            <span>Statutory Excellence</span>
          </div>
          
          <h1 className="text-hero-sm md:text-hero font-display font-bold max-w-5xl mb-6 tracking-tight text-white">
            Institutional <span className="text-accent italic font-normal">Financial Reporting</span> <br />
            for US & European Multinationals.
          </h1>
          <p className="text-base md:text-xl text-text-secondary max-w-3xl leading-relaxed">
            De-risk your cross-border finance function. We deliver precision-driven statutory accounting, GAAP conversions, and global consolidation structures engineered specifically for international controllers and CFOs.
          </p>
        </div>
      </section>

      {/* Real-Time Market Intelligence Ticker/Cards */}
      <section className="py-12 bg-navy-surface border-b border-navy-border">
        <div className="container-main">
          <div className="mb-6">
            <SectionLabel>Cross-Border Governance & Accounting Integrity</SectionLabel>
            <h2 className="text-xl font-semibold text-white mt-1">Institutional Delivery Standards</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {accountingMarketUpdates.map((update, idx) => (
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
                Accounting Verticals
              </span>
              {accountingPractices.map((practice) => (
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
              <p className="text-text-secondary leading-relaxed text-base md:text-md mb-8 pb-6 border-b border-navy-border">
                {selectedPractice.description}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                Technical Execution Areas
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
                  Fully standardized to align with GAAP convergence criteria, FASB guidelines, IASB pronouncements, and international corporate reporting governance.
                </p>
                <Link href="/contact" className="btn-primary inline-flex items-center text-sm font-semibold">
                  Optimize Corporate Closures
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Strategic Value Proposition / Bottom CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-t from-navy-surface to-primary relative border-t border-navy-border">
        <div className="container-main text-center max-w-3xl mx-auto">
          <SectionLabel className="justify-center">Consolidate with Certainty</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mt-3 mb-6 tracking-tight">
            Seamless Accounting Alignment Across All Borders
          </h2>
          <p className="text-text-secondary text-base md:text-lg mb-10 leading-relaxed">
            Don't let multi-tier compliance requirements, currency fluctuations, or systemic framework mismatches disrupt your global reporting timeline. Let SNG Consultancy inject clarity, speed, and institutional rigor into your enterprise accounting infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Initiate Reporting Diagnostic
            </Link>
            <Link href="/insights" className="btn-secondary">
              Review International Reporting Toolkits
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}