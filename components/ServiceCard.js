import Link from "next/link";

const iconMap = {
  chart: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M3 3v18h18M7 16V10M11 16V6M15 16v-4M19 16V8" />
    </svg>
  ),
  globe: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
  shield: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  clipboard: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
    </svg>
  ),
};

export default function ServiceCard({ icon = "chart", title, description, href = "#" }) {
  return (
    <div className="card-surface-hover p-6 md:p-8 group">
      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:bg-accent/20 transition-colors">
        {iconMap[icon] || iconMap.chart}
      </div>
      <h3 className="text-lg font-display font-semibold text-white mb-3">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed mb-5">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-light transition-colors group/link"
      >
        Learn More
        <svg
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="transition-transform group-hover/link:translate-x-1"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
