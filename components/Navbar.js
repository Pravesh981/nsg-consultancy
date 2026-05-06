"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "Who We Are", href: "/about/who-we-are" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Milestones", href: "/about/milestones" },
      { label: "KMPs", href: "/about/kmps" },
      { label: "Offices", href: "/about/offices" },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    dropdown: [
      { label: "Service Related", href: "/insights/services" },
      { label: "Publications", href: "/insights/publications" },
      { label: "Taxsutra", href: "/insights/taxsutra" },
      { label: "Kanoon Case", href: "/insights/kanoon-case" },
      { label: "News", href: "/insights/news" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Tax", href: "/services/tax" },
      { label: "Transfer Pricing", href: "/services/tp" },
      { label: "Accounting", href: "/services/accounting" },
      { label: "Technical", href: "/services/technical" },
    ],
  },
  {
    label: "Technology",
    href: "/technology",
    dropdown: [
      { label: "Automation", href: "/technology/automation" },
      { label: "AI Solutions", href: "/technology/ai-solutions" },
      { label: "Cloud Services", href: "/technology/cloud-services" },
      { label: "Analytics", href: "/technology/analytics" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    dropdown: [
      { label: "Banking", href: "/industries/banking" },
      { label: "Insurance", href: "/industries/insurance" },
      { label: "Credit Rating", href: "/industries/credit-rating" },
      { label: "Datamatics", href: "/industries/Datamatics" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-navy-border/50">
      <div className="container-main flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/40 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1L12 4.5V9.5L7 13L2 9.5V4.5L7 1Z"
                stroke="#D4A843"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <span className="font-display text-lg font-semibold text-white">
            NSG{" "}
            <span className="text-text-secondary font-normal">
              Consultancy
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <Link
                href={link.href}
                className="flex items-center gap-1 text-sm text-text-secondary hover:text-white transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}

                {link.dropdown && (
                  <ChevronDown
                    size={16}
                    className="group-hover:rotate-180 transition-transform duration-300"
                  />
                )}
              </Link>

              {/* Dropdown */}
              {link.dropdown && (
                <div className="absolute left-0 top-full mt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-[#0F172A] border border-white/10 rounded-2xl shadow-2xl p-3">
                  <div className="flex flex-col">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="px-4 py-3 text-sm text-text-secondary hover:text-white hover:bg-white/5 rounded-xl transition-all"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/services"
            className="btn-secondary text-xs px-4 py-2"
          >
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
          <span
            className={`block w-5 h-[1.5px] bg-white transition-transform duration-200 ${
              mobileOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          />

          <span
            className={`block w-5 h-[1.5px] bg-white transition-opacity duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block w-5 h-[1.5px] bg-white transition-transform duration-200 ${
              mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-navy-border animate-fade-in">
          <div className="container-main py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-base text-text-secondary hover:text-white py-3"
                  >
                    {link.label}
                  </Link>

                  {link.dropdown && (
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className="text-white"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {link.dropdown && openDropdown === link.label && (
                  <div className="ml-4 border-l border-white/10 pl-4 pb-2 flex flex-col">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-2 text-sm text-text-secondary hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="flex flex-col gap-3 pt-5">
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