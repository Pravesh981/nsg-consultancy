export default function TestimonialCard({ quote, name, title, company }) {
  return (
    <div className="card-surface p-6 md:p-8 flex flex-col">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-accent/40 mb-4 flex-shrink-0">
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor"/>
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor"/>
      </svg>
      <p className="text-sm text-text-secondary leading-relaxed mb-6 italic flex-1">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent font-display font-bold text-sm">
          {name?.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-text-muted">{title}, {company}</p>
        </div>
      </div>
    </div>
  );
}
