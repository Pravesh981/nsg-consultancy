export default function SectionLabel({ children, className = "" }) {
  return (
    <p className={`section-label mb-4 ${className}`}>
      {children}
    </p>
  );
}
