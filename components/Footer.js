"use client";
import Link from "next/link";

const footerLinks = {
  Expertise: [
    { label: "Transfer Pricing", href: "/services#transfer-pricing" },
    { label: "OECD / BEPS Pillar Two", href: "/services#oecd-beps" },
    { label: "Global Compliance", href: "/services#compliance" },
    { label: "Tax Technology", href: "/services#technology" },
  ],
  "Global Offices": [
    { label: "London, United Kingdom", href: "/contact", icon: "🔴" },
    { label: "Jaipur, India", href: "/contact", icon: "🟠" },
    { label: "EMEA / Americas Support", href: "/contact", icon: "🟡" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-navy-border">
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-accent/10 border border-accent/40 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L12 4.5V9.5L7 13L2 9.5V4.5L7 1Z" stroke="#D4A843" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="font-display text-base font-semibold">SNG Consultancy</span>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed mb-6">
              Strategic tax and compliance advisory for the world&apos;s leading multinationals. Global expertise, delivered with precision.
            </p>
            <div className="flex gap-3">
              {/* LinkedIn */}
              <a href="#" className="w-9 h-9 rounded bg-navy-card border border-navy-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 transition-all">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* X/Twitter */}
              <a href="#" className="w-9 h-9 rounded bg-navy-card border border-navy-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 transition-all">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-text-muted hover:text-text-secondary transition-colors">
                      {link.icon && <span className="mr-2 text-xs">{link.icon}</span>}
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-label text-text-muted mb-3">GLOBAL TAX UPDATES</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-navy-card border border-navy-border rounded-l px-3 py-2.5 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-accent/60 transition-colors"
              />
              <button className="bg-accent hover:bg-accent-light text-primary px-3 py-2.5 rounded-r transition-colors">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-navy-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">&copy; 2024 SNG Consultancy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-text-muted hover:text-text-secondary transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-text-muted hover:text-text-secondary transition-colors">Terms of Service</Link>
            <Link href="#" className="text-xs text-text-muted hover:text-text-secondary transition-colors">Regulatory Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
