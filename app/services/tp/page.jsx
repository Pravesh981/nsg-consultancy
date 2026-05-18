"use client";

import { useState } from "react";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

// Latest 2026 Transfer Pricing Regulatory Framework & ITAT Market Intelligence
const tpMarketUpdates = [
  {
    tag: "CBDT Milestone",
    title: "Record 219 APAs Concluded in FY 2025-26",
    desc: "Leveraging the CBDT's aggressive signing velocity, including landmark first-ever Bilateral APAs with France, Ireland, Sweden, and Indonesia to eliminate double taxation.",
  },
  {
    tag: "Statutory Reform",
    title: "New Income Tax Act APA Framework",
    desc: "Navigating the restructured Section 168 and Rules 103-122 with a unified flat ₹20 Lakh application fee and a strict 1-to-2 year fast-track timeline for unilateral filings.",
  },
  {
    tag: "Taxsutra / ITAT Precedent",
    title: "Curbing Notional Interest Adjustments",
    desc: "Capitalizing on recent landmark ITAT rulings (Infosys BPM / Wipro GE) rejecting mechanical TPO adjustments on delayed trade receivables and restrictive guarantee commissions.",
  },
];

const tpPractices = [
  {
    id: "apa-strategy",
    title: "Advance Pricing Agreements (APA) & Rollbacks",
    subtitle: "Section 168 Multi-Year Certainty",
    description: "Securing unilateral, bilateral, and multilateral APAs under the newly overhauled rules to achieve up to 9 years of absolute transfer pricing immunity (5 years forward-looking + 4 years retrospective rollback protection).",
    bullets: [
      "Strategic execution of non-binding Phase-1 Pre-Filing Consultations (Rule 105) with the Pr. CCIT",
      "Comprehensive economic analysis and Profit Level Indicator (PLI) defense (including custom Berry Ratio implementations)",
      "Bilateral APA representation involving competent authorities across major corridors (US, UK, Singapore, Japan, Eurozone)",
      "Streamlined deployment of the flat ₹20 Lakh application fee framework to minimize administrative overhead",
    ],
  },
  {
    id: "compliance-documentation",
    title: "Three-Tier BEPS Compliance Architecture",
    subtitle: "Audit-Ready Defense Documentation",
    description: "Constructing unassailable transfer pricing files designed to withstand intense Transfer Pricing Officer (TPO) scrutiny and eliminate local or global adjustment exposure.",
    bullets: [
      "Local File compilation under robust local multi-year database benchmarking strategies",
      "Global Master File coordination tailored for cross-border enterprise value chain reporting",
      "Country-by-Country Reporting (CbCR) threshold notifications and data reconciliation frameworks",
      "Harmonious mapping of actual economic realities to eliminate year-end manual transfer pricing adjustments",
    ],
  },
  {
    id: "safe-harbour",
    title: "Automated Safe Harbour Rule Optimization",
    subtitle: "De-Risking Mid-Market Scale",
    description: "Capitalizing on the newly enhanced Safe Harbour rules that increase transaction eligibility thresholds from ₹300 Crore to ₹2,000 Crore, eliminating granular scrutiny interfaces.",
    bullets: [
      "Streamlining multi-tech operations into the consolidated 'Information Technology Services' uniform 15.5% margin bracket",
      "Safe Harbour strategy evaluation for KPOs, Contract R&D, intra-group financing, and corporate guarantees",
      "Interplay management between Safe Harbour elections and Rule 10Q unilateral agreement critical assumptions",
      "Deploying automated data filters to verify eligibility and defend rule-based standardized filings",
    ],
  },
  {
    id: "tp-controversy",
    title: "Audit Defense & Dispute Resolution",
    subtitle: "DRP, ITAT, & Section 144C Proceedings",
    description: "Defending complex intercompany transactions against aggressive tax positioning. We build concrete evidence trails to counter arbitrary comparable exclusions and irrational markups.",
    bullets: [
      "Defending corporate head office charge allocations, management fees, and Intra-Group Services (IGS)",
      "Litigating intangible asset valuation disputes involving complex DEMPE (Development, Enhancement, Maintenance, Protection, Exploitation) matrices",
      "Quashing defective final assessment orders passed in defiance of DRP directions or without a Section 144C draft mandate",
      "Securing economic adjustments for working capital deviations, capacity utilization variance, and startup phase under-utilization",
    ],
  },
];

export default function TransferPricingPage() {
  const [activePractice, setActivePractice] = useState("apa-strategy");
  const selectedPractice = tpPractices.find((p) => p.id === activePractice) || tpPractices[0];

  return (
    <>
      {/* SEO-Enriched Hero Section */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 relative bg-gradient-to-b from-navy-card to-primary overflow-hidden border-b border-navy-border">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[120px] pointer-events-none" />
        <div className="container-main relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent mb-4">
            <span>Enterprise Strategy</span>
            <span className="text-text-muted">•</span>
            <span>Transfer Pricing Advisory</span>
            <span className="text-text-muted">•</span>
            <span>Arm's Length Certainty</span>
          </div>
          
          <h1 className="text-hero-sm md:text-hero font-display font-bold max-w-5xl mb-6 tracking-tight text-white">
            Defensible <span className="text-accent italic font-normal">Transfer Pricing</span> Architectures <br />
            for Cross-Border Value Chains.
          </h1>
          <p className="text-base md:text-xl text-text-secondary max-w-3xl leading-relaxed">
            Protect your multinational margins. We combine precise multi-country benchmarking with proactive APA negotiations and automated safe harbour mechanics to shield your group from aggressive adjustment penalties.
          </p>
        </div>
      </section>

      {/* Real-Time Market Intelligence Ticker/Cards */}
      <section className="py-12 bg-navy-surface border-b border-navy-border">
        <div className="container-main">
          <div className="mb-6">
            <SectionLabel>Transfer Pricing Insights & Jurisprudence</SectionLabel>
            <h2 className="text-xl font-semibold text-white mt-1">Live Technical Focus Areas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tpMarketUpdates.map((update, idx) => (
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
              {tpPractices.map((practice) => (
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
                Core Deliverables & Methodologies
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
                  Fully updated in accordance with the 2026 direct tax code restructures, BEPS Action 13/14 guidelines, and recent ITAT division bench rulings.
                </p>
                <Link href="/contact" className="btn-primary inline-flex items-center text-sm font-semibold">
                  Secure Strategic Certainty
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
          <SectionLabel className="justify-center">Insulate Your Value Chain</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mt-3 mb-6 tracking-tight">
            Institutional Protection Against Double Taxation
          </h2>
          <p className="text-text-secondary text-base md:text-lg mb-10 leading-relaxed">
            With the tax department deploying machine learning data tools for cross-border ledger reconciliation, routine compliance is no longer a defense against transfer pricing adjustments. Let our specialist team de-risk your international operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Schedule an APA Diagnostics Review
            </Link>
            <Link href="/insights" className="btn-secondary">
              Review Global Pricing Frameworks
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}