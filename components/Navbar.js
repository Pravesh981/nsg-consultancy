"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-navy-border/50">
      <div className="container-main flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/40 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L12 4.5V9.5L7 13L2 9.5V4.5L7 1Z" stroke="#D4A843" strokeWidth="1.5" />
            </svg>
          </div>
          <span className="font-display text-lg font-semibold text-white">
            NSG <span className="text-text-secondary font-normal">Consultancy</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-white transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/services" className="btn-secondary text-xs px-4 py-2">
            Explore Services
          </Link>
          <Link href="/contact" className="btn-primary text-xs px-4 py-2">
            Talk to an Expert
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1.5px] bg-white transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-navy-border animate-fade-in">
          <div className="container-main py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base text-text-secondary hover:text-white py-2 border-b border-navy-border/50"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Link href="/services" className="btn-secondary text-center">
                Explore Services
              </Link>
              <Link href="/contact" className="btn-primary text-center">
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
