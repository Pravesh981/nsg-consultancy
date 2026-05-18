"use client";

import { useState } from "react";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

// High-impact market insights for founders, asset managers, and fintech builders
const techMarketUpdates = [
  {
    tag: "AI & Automation",
    title: "AI-Driven Portfolio Analytics",
    desc: "Integrating predictive Large Language Models (LLMs) and vector search to automate personalized investment reporting, asset allocation models, and real-time risk alerts.",
  },
  {
    tag: "Full-Stack Scale",
    title: "Next.js & Serverless Architectures",
    desc: "Building blazing-fast digital storefronts and reactive financial dashboards with instantaneous data streaming, sub-second load times, and dynamic user interfaces.",
  },
  {
    tag: "Data Pipeline",
    title: "Secure Financial Data Ingestion",
    desc: "Architecting hardened, real-time API integrations with market data aggregates, banking protocols, and brokerages while maintaining bank-grade security and encryption.",
  },
];

const techPractices = [
  {
    id: "portfolio-fintech",
    title: "Digital Portfolio Trackers & Fintech Systems",
    subtitle: "WealthTech • Asset Management",
    description: "Engineering secure, highly visual, and reactive digital portfolio tracking applications. We build custom dashboards that aggregate multi-asset investments (equities, mutual funds, real estate) into a single, cohesive interface.",
    bullets: [
      "Real-time profit & loss (P&L) tracking, CAGR metrics, and XIRR performance calculators",
      "Seamless integration with financial market APIs (Moneycontrol, Yahoo Finance, Zerodha, or custom feeds)",
      "Interactive data visualizations using high-performance charting libraries (Recharts, Chart.js, D3.js)",
      "Multi-currency conversion engines built specifically for global investment portfolios",
    ],
  },
  {
    id: "ai-agents",
    title: "AI Agents & Intelligent Content Engines",
    subtitle: "GenAI • NLP Optimization",
    description: "Deploying production-grade AI agents that automate complex research workflows, parse dense quarterly corporate reports, and generate structured, humanized outputs for marketing or analytical scale.",
    bullets: [
      "Custom Retrieval-Augmented Generation (RAG) pipelines to query private financial or legal records instantly",
      "Automated, SEO-optimized content generation engines engineered to produce high-intent landing pages",
      "Intelligent text humanization algorithms designed to bypass rigid automated filters cleanly",
      "AI-driven sentiment analysis tracking market guidance, news cycles, and earning call transcripts",
    ],
  },
  {
    id: "fullstack-saas",
    title: "Full-Stack Web Development & SaaS Products",
    subtitle: "Next.js • Node.js • Cloud Scale",
    description: "Architecting modern, clean, and highly maintainable web applications using cutting-edge tech stacks. From blueprinting to deployment, we build software engineered to scale to millions of active users.",
    bullets: [
      "Robust client-side or server-side architectures utilizing Next.js, React, and robust TypeScript",
      "Scalable backend infrastructures designed on Node.js, Python frameworks, and serverless architectures",
      "Highly responsive database indexing (PostgreSQL, Firebase, MongoDB) for sub-second data fetches",
      "Comprehensive API development and webhook management to connect third-party platforms smoothly",
    ],
  },
  {
    id: "cloud-security",
    title: "Cloud Infrastructure & Data Orchestration",
    subtitle: "AWS • Firebase • Secure Pipelines",
    description: "Setting up ironclad cloud foundations that prioritize user data protection, continuous uptime, and automated deployment pipelines.",
    bullets: [
      "Automated CI/CD deployment pipelines (GitHub Actions, Vercel, AWS Amplify) for zero-downtime shipping",
      "Bank-grade authentication system design (NextAuth, Firebase Auth, Clerk) supporting multi-factor security",
      "Optimized cron-job schedulers for real-time portfolio updates and overnight background data syncing",
      "Comprehensive logging, end-to-end encryption, and persistent data backup protocols",
    ],
  },
];

export default function TechnologyServicesPage() {
  const [activePractice, setActivePractice] = useState("portfolio-fintech");
  const selectedPractice = techPractices.find((p) => p.id === activePractice) || techPractices[0];

  return (
    <>
      {/* Search-Rich Hero Section */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 relative bg-gradient-to-b from-navy-card to-primary overflow-hidden border-b border-navy-border">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[120px] pointer-events-none" />
        <div className="container-main relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent mb-4">
            <span>Engineering Excellence</span>
            <span className="text-text-muted">•</span>
            <span>AI Automation</span>
            <span className="text-text-muted">•</span>
            <span>Full-Stack Scalability</span>
          </div>
          
          <h1 className="text-hero-sm md:text-hero font-display font-bold max-w-5xl mb-6 tracking-tight text-white">
            We Architect <span className="text-accent italic font-normal">Custom AI</span> & <br />
            Full-Stack Financial Platforms.
          </h1>
          <p className="text-base md:text-xl text-text-secondary max-w-3xl leading-relaxed">
            Turn your vision into an unassailable digital product. From advanced portfolio analytics dashboards to automated AI content agents and high-performance SaaS platforms, we write production-ready code engineered for growth.
          </p>
        </div>
      </section>

      {/* Real-Time Market Intelligence Ticker/Cards */}
      <section className="py-12 bg-navy-surface border-b border-navy-border">
        <div className="container-main">
          <div className="mb-6">
            <SectionLabel>Technology Framework & Delivery Pillars</SectionLabel>
            <h2 className="text-xl font-semibold text-white mt-1">Live Engineering Focus Areas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techMarketUpdates.map((update, idx) => (
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
                Development Capabilities
              </span>
              {techPractices.map((practice) => (
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
                Technical Stack & Capabilities
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
                  All systems are architected with clean documentation, scalable databases, and production-ready APIs optimized for rapid business scaling.
                </p>
                <Link href="/contact" className="btn-primary inline-flex items-center text-sm font-semibold">
                  Launch Your Product
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
          <SectionLabel className="justify-center">From Concept to Deployment</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mt-3 mb-6 tracking-tight">
            Build Future-Proof Technology Tailored For Growth
          </h2>
          <p className="text-text-secondary text-base md:text-lg mb-10 leading-relaxed">
            Whether you are an asset manager seeking a highly polished custom analytics dashboard, a tech startup launching an ambitious software platform, or an enterprise looking to automate operations with AI—we deliver the technical execution you need.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Consult Our Engineering Lead
            </Link>
            <Link href="/insights" className="btn-secondary">
              Review Architecture Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}