"use client";
import { useState } from "react";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

const categories = ["All", "GST", "Income Tax", "International Tax", "Customs & Excise", "Transfer Pricing"];

const featuredUpdate = {
  tag: "Taxsutra Exclusive",
  title: "CBDT Issues Comprehensive Circular on Safe Harbour Rules for AY 2024-25",
  excerpt:
    "The Central Board of Direct Taxes has released a landmark circular clarifying the application of safe harbour provisions under Rule 10TD, with significant implications for IT/ITeS companies and intra-group financial transactions.",
  date: "October 22, 2024",
  readTime: "14 min read",
  source: "Taxsutra Bureau",
};

const taxsutraItems = [
  {
    id: 1,
    category: "GST",
    categoryColor: "bg-emerald-500/20 text-emerald-400",
    date: "Oct 20, 2024",
    readTime: "6 min read",
    title: "GST Council Clarifies ITC Reversal Norms for Mixed Supply Transactions",
    excerpt:
      "New advisory issued on proportionate reversal of input tax credit where goods or services are used for both taxable and exempt supplies.",
    source: "Taxsutra GST Desk",
    isNew: true,
  },
  {
    id: 2,
    category: "Income Tax",
    categoryColor: "bg-blue-500/20 text-blue-400",
    date: "Oct 17, 2024",
    readTime: "8 min read",
    title: "ITAT Mumbai: No Disallowance u/s 14A Where Dividend Income is Incidental",
    excerpt:
      "Tribunal rules that expenditure incurred for earning exempt income cannot be disallowed when dividend receipts are merely incidental to business operations.",
    source: "Taxsutra Litigation",
    isNew: false,
  },
  {
    id: 3,
    category: "International Tax",
    categoryColor: "bg-purple-500/20 text-purple-400",
    date: "Oct 14, 2024",
    readTime: "10 min read",
    title: "India Signs DTAA Amendment Protocol with Netherlands: Key Changes",
    excerpt:
      "Updated treaty provisions incorporate BEPS minimum standards including PPT clause and modifications to PE definition for digital activities.",
    source: "Taxsutra International",
    isNew: true,
  },
  {
    id: 4,
    category: "Transfer Pricing",
    categoryColor: "bg-amber-500/20 text-amber-400",
    date: "Oct 10, 2024",
    readTime: "9 min read",
    title: "APA Annual Report 2023-24: Record Bilateral Agreements Signal Maturity",
    excerpt:
      "CBDT's APA programme concludes 125 agreements in FY24, with bilateral APAs doubling — reflecting growing certainty in TP dispute resolution.",
    source: "Taxsutra TP Desk",
    isNew: false,
  },
  {
    id: 5,
    category: "Customs & Excise",
    categoryColor: "bg-rose-500/20 text-rose-400",
    date: "Oct 06, 2024",
    readTime: "5 min read",
    title: "CESTAT Ruling: Customs Valuation of Related-Party Imports Under Scrutiny",
    excerpt:
      "Appellate tribunal examines burden of proof standards when customs authorities challenge declared transaction value in related-party imports.",
    source: "Taxsutra Indirect Tax",
    isNew: false,
  },
  {
    id: 6,
    category: "GST",
    categoryColor: "bg-emerald-500/20 text-emerald-400",
    date: "Sep 30, 2024",
    readTime: "7 min read",
    title: "E-Invoicing Threshold Reduced to ₹5 Crore: Compliance Roadmap",
    excerpt:
      "GSTN releases technical specifications and onboarding timelines for taxpayers newly brought under the mandatory e-invoicing framework.",
    source: "Taxsutra GST Desk",
    isNew: false,
  },
];

const quickUpdates = [
  { date: "Oct 21", text: "CBDT extends due date for filing Form 3CEB to November 30, 2024" },
  { date: "Oct 19", text: "GSTN issues advisory on auto-population of GSTR-3B from GSTR-1 and IFF" },
  { date: "Oct 16", text: "Income Tax Department launches compliance portal for faceless assessment responses" },
  { date: "Oct 12", text: "Supreme Court admits appeal in Vodafone retrospective tax settlement matter" },
  { date: "Oct 09", text: "SEBI-CBDT data sharing MoU signed to curb listed company tax evasion" },
];

export default function TaxsutraPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? taxsutraItems
      : taxsutraItems.filter((i) => i.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-4 bg-navy-surface noise-texture relative overflow-hidden">
        <div className="container-main py-10 md:py-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <SectionLabel>Regulatory Intelligence</SectionLabel>
              <h1 className="text-3xl md:text-4xl font-display font-bold mt-3 leading-tight">
                Taxsutra <span className="text-accent">Updates</span>
              </h1>
              <p className="text-sm text-text-secondary mt-3 max-w-xl leading-relaxed">
                Curated Indian tax regulatory intelligence — tribunal rulings, CBDT/CBIC
                circulars, and legislative updates analysed by our subject-matter experts.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="flex items-center gap-2 text-xs text-text-muted bg-navy-card border border-navy-border rounded px-3 py-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live regulatory feed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 md:top-18 z-40 bg-primary/95 backdrop-blur-md border-y border-navy-border">
        <div className="container-main">
          <div className="flex items-center gap-3 py-3 overflow-x-auto scrollbar-none">
            <span className="text-xs text-text-muted flex items-center gap-1.5 flex-shrink-0">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
              </svg>
              Filter by area
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded text-xs font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-accent text-primary"
                    : "bg-navy-card text-text-secondary border border-navy-border hover:border-accent/30"
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="text-xs text-text-muted ml-auto flex-shrink-0">
              {filtered.length} updates
            </span>
          </div>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="py-12 md:py-16">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left: Featured + Grid */}
            <div className="lg:col-span-2 space-y-8">

              {/* Featured */}
              <div className="card-surface overflow-hidden">
                <div className="bg-gradient-to-br from-navy-light to-navy-card h-52 flex items-center justify-center relative">
                  <span className="absolute top-4 left-4 px-3 py-1 rounded text-xs font-medium bg-accent/10 text-accent border border-accent/20">
                    {featuredUpdate.tag}
                  </span>
                  <div className="text-accent/10">
                    <svg width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="text-lg md:text-xl font-display font-bold leading-snug mb-3">
                    {featuredUpdate.title}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {featuredUpdate.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-text-muted mb-5">
                    <span className="flex items-center gap-1">
                      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      {featuredUpdate.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                      </svg>
                      {featuredUpdate.readTime}
                    </span>
                    <span className="text-accent">{featuredUpdate.source}</span>
                  </div>
                  <Link href="#" className="btn-primary w-fit">Read Full Update</Link>
                </div>
              </div>

              {/* Grid */}
              <div>
                <SectionLabel>All Updates</SectionLabel>
                <h2 className="section-title mb-6">Recent Regulatory Alerts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {filtered.map((item) => (
                    <article key={item.id} className="card-surface-hover overflow-hidden group flex flex-col">
                      <div className="relative h-36 bg-gradient-to-br from-navy-light to-navy-card flex items-center justify-center overflow-hidden">
                        <span className={`absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-medium ${item.categoryColor}`}>
                          {item.category}
                        </span>
                        {item.isNew && (
                          <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold bg-accent text-primary">
                            NEW
                          </span>
                        )}
                        <div className="text-accent/10 group-hover:scale-110 transition-transform duration-500">
                          <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-xs text-text-muted mb-2">
                          <span>{item.date}</span>
                          <span>{item.readTime}</span>
                        </div>
                        <h3 className="text-sm font-display font-semibold text-white mb-2 leading-snug group-hover:text-accent transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-text-muted leading-relaxed mb-4 flex-1">
                          {item.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-text-muted">{item.source}</span>
                          <Link href="#" className="text-xs font-semibold text-accent hover:text-accent-light transition-colors flex items-center gap-1 uppercase tracking-wider">
                            Read
                            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-1">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card-surface p-5 sticky top-28">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider">Flash Updates</h3>
                </div>
                <div className="space-y-4">
                  {quickUpdates.map((update, i) => (
                    <div key={i} className="flex gap-3 pb-4 border-b border-navy-border last:border-0 last:pb-0">
                      <span className="text-[10px] font-bold text-accent bg-accent/10 px-1.5 py-0.5 rounded flex-shrink-0 h-fit mt-0.5">
                        {update.date}
                      </span>
                      <p className="text-xs text-text-secondary leading-relaxed">{update.text}</p>
                    </div>
                  ))}
                </div>
                <Link href="#" className="mt-4 text-xs font-semibold text-accent hover:text-accent-light flex items-center gap-1 transition-colors">
                  View all flash updates
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="card-surface p-5 border border-accent/10">
                <h3 className="text-sm font-display font-bold text-white mb-2">Taxsutra Digest</h3>
                <p className="text-xs text-text-muted mb-4 leading-relaxed">
                  Get daily tax regulatory alerts delivered to your inbox before market open.
                </p>
                <input
                  type="email"
                  placeholder="Your corporate email"
                  className="bg-navy-card border border-navy-border rounded px-3 py-2.5 text-xs text-white placeholder:text-text-muted w-full focus:outline-none focus:border-accent/60 transition-colors mb-3"
                />
                <button className="btn-primary w-full text-xs">Subscribe to Alerts</button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}