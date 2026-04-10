"use client";
import { useState } from "react";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

const filters = ["All", "Transfer Pricing", "Tax Advisory", "Accounting", "Technology"];

const featured = {
  tag: "Featured Analysis",
  title: "Navigating the Complexities of OECD Pillar Two Implementation",
  excerpt:
    "A comprehensive executive briefing on the shifting landscape of global minimum taxation and its immediate impact on US-headquartered multinationals with European operations.",
  date: "October 24, 2024",
  readTime: "12 min read",
};

const articles = [
  {
    tag: "Transfer Pricing",
    tagColor: "bg-amber-500/20 text-amber-400",
    date: "Oct 18, 2024",
    readTime: "8 min read",
    title: "Intercompany Financial Transactions: New Regulatory Realities",
    excerpt:
      "Deep dive into the latest OECD guidance on financial transactions and how CFOs can mitigate risk through robust documentation.",
  },
  {
    tag: "Tax Advisory",
    tagColor: "bg-blue-500/20 text-blue-400",
    date: "Oct 15, 2024",
    readTime: "10 min read",
    title: "Post-Brexit VAT Strategies for EU-UK Supply Chains",
    excerpt:
      "Analyzing the evolving VAT landscape and optimizing supply chain structures to maintain margin and compliance in a fragmented market.",
  },
  {
    tag: "Technology",
    tagColor: "bg-emerald-500/20 text-emerald-400",
    date: "Oct 08, 2024",
    readTime: "6 min read",
    title: "The Role of AI in Automated Tax Compliance Workflows",
    excerpt:
      "How generative AI and machine learning are transforming the tax department from a cost center to a strategic insights engine.",
  },
  {
    tag: "Accounting",
    tagColor: "bg-purple-500/20 text-purple-400",
    date: "Sep 28, 2024",
    readTime: "9 min read",
    title: "IFRS 17 Implementation: Lessons from the Insurance Sector",
    excerpt:
      "Key takeaways from recent implementation projects that can be applied to complex contract accounting across industries.",
  },
  {
    tag: "Transfer Pricing",
    tagColor: "bg-amber-500/20 text-amber-400",
    date: "Sep 20, 2024",
    readTime: "11 min read",
    title: "Intangibles and Value Creation in the Digital Economy",
    excerpt:
      "Re-evaluating DEMPE functions in a remote-first world and ensuring profit allocation aligns with actual substance.",
  },
  {
    tag: "Tax Advisory",
    tagColor: "bg-blue-500/20 text-blue-400",
    date: "Sep 14, 2024",
    readTime: "7 min read",
    title: "US Foreign Tax Credit Optimization Post-TCJA",
    excerpt:
      "Strategic considerations for maximizing FTC utilization in the wake of significant regulatory shifts and interest rate volatility.",
  },
];

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredArticles =
    activeFilter === "All"
      ? articles
      : articles.filter((a) => a.tag === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="pt-4   bg-navy-surface noise-texture relative overflow-hidden">
        {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/[0.03] rounded-full blur-[120px]" />
        <div className="container-main relative z-10 text-center">
          <SectionLabel className="text-center">Knowledge Hub</SectionLabel>
          <h1 className="text-hero-sm md:text-hero font-display font-bold mb-4">
            Global Tax <span className="text-accent italic">Insights</span> &amp; Strategy
          </h1>
          <p className="text-base text-text-secondary max-w-xl mx-auto">
            Expert analysis, technical briefings, and strategic updates designed for CFOs
            and Tax Heads at world-leading multinationals.
          </p>
        </div> */}
         <img src="/insightbanner.webp" className="w-full rounded-md"/>

      </section>

      {/* Filters */}
      <section className="sticky top-16 md:top-18 z-40 bg-primary/95 backdrop-blur-md border-y border-navy-border">
        <div className="container-main">
          <div className="flex items-center gap-3 py-3 overflow-x-auto scrollbar-none">
            <span className="text-xs text-text-muted flex items-center gap-1.5 flex-shrink-0">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
              </svg>
              Filter by expertise
            </span>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded text-xs font-medium whitespace-nowrap transition-all ${
                  activeFilter === filter
                    ? "bg-accent text-primary"
                    : "bg-navy-card text-text-secondary border border-navy-border hover:border-accent/30"
                }`}
              >
                {filter}
              </button>
            ))}
            <span className="text-xs text-text-muted ml-auto flex-shrink-0">
              Showing {filteredArticles.length} articles
            </span>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 md:py-16">
        <div className="container-main">
          <div className="card-surface overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            {/* Image placeholder */}
            <div className="bg-gradient-to-br from-navy-light to-navy-card min-h-[280px] lg:min-h-[360px] flex items-center justify-center relative">
              {/* <div className="absolute inset-0 bg-gradient-to-t from-navy-card/80 to-transparent" />
              <div className="text-accent/20">
                <svg width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                  <path d="M21 15V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10m18 0l-6.16-4.53a2 2 0 00-2.34 0L3 15m18 0v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2" />
                </svg>
              </div> */}
              <img src="/OECD Pillar.webp" className="w-full rounded-md"/>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="inline-block w-fit px-3 py-1 rounded text-xs font-medium bg-accent/10 text-accent border border-accent/20 mb-4">
                {featured.tag}
              </span>
              <h2 className="text-xl md:text-2xl font-display font-bold mb-4 leading-tight">
                {featured.title}
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-text-muted mb-6">
                <span className="flex items-center gap-1">
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  {featured.date}
                </span>
                <span className="flex items-center gap-1">
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  {featured.readTime}
                </span>
              </div>
              <Link href="#" className="btn-primary w-fit">
                Read Featured Insight
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-16 md:pb-22">
        <div className="container-main">
          <SectionLabel>Latest Thinking</SectionLabel>
          <h2 className="section-title mb-10">Recent Technical Briefings</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredArticles.map((article) => (
              <article
                key={article.title}
                className="card-surface-hover overflow-hidden group flex flex-col"
              >
                {/* Image placeholder */}
                <div className="relative h-44 bg-gradient-to-br from-navy-light to-navy-card flex items-center justify-center overflow-hidden">
                  <span className={`absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-medium ${article.tagColor}`}>
                    {article.tag}
                  </span>
                  <div className="text-accent/10 group-hover:scale-110 transition-transform duration-500">
                    <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                      <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2v9a2 2 0 01-2 2h-2z" />
                    </svg>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-base font-display font-semibold text-white mb-2 leading-snug group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed mb-4 flex-1">
                    {article.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="text-xs font-semibold text-accent hover:text-accent-light transition-colors flex items-center gap-1 uppercase tracking-wider"
                  >
                    Read Insight
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20 bg-navy-surface border-t border-navy-border">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-xl md:text-2xl font-display font-bold italic mb-2">
                Stay Ahead of Global Compliance
              </h2>
              <p className="text-sm text-text-secondary">
                Join over 5,000 CFOs and Heads of Tax receiving our fortnightly digest of
                technical alerts and strategic analysis.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center flex-shrink-0">
              <input
                type="email"
                placeholder="Enter your corporate email address"
                className="bg-navy-card border border-navy-border rounded px-4 py-3 text-sm text-white placeholder:text-text-muted w-full sm:w-80 focus:outline-none focus:border-accent/60 transition-colors"
              />
              <button className="btn-primary whitespace-nowrap">Subscribe</button>
            </div>
          </div>
          <p className="text-[10px] text-text-muted mt-3 flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-red-400" />
            No spam. Only technical insights. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </>
  );
}
