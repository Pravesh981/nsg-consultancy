"use client";
import { useState } from "react";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

const serviceAreas = [
  "Transfer Pricing",
  "OECD / BEPS Pillar Two",
  "Corporate Taxation",
  "Accounting & Reporting",
  "Tax Technology",
  "General Enquiry",
];

const faqs = [
  {
    q: "How is data confidentiality managed?",
    a: "All technical disclosures and proprietary data are protected under multi-jurisdictional NDAs. We utilize ISO 27001 certified cloud environments for all document handling.",
  },
  {
    q: "What are your typical fee structures?",
    a: "We offer value-based fixed pricing for compliance projects and monthly retainers for ongoing strategic advisory. Transparent cost models are agreed upon before engagement.",
  },
  {
    q: "Can you support global implementation?",
    a: "Yes. Our Jaipur delivery hub is optimized for high-volume technical documentation, while our London office handles high-level strategy and client relations.",
  },
  {
    q: "How do I initiate a new project?",
    a: "Once you submit the enquiry form, a Managing Director will schedule a 30-minute discovery call to assess your scope and technical requirements.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    details: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-26 md:pt-30 pb-12 md:pb-16 noise-texture relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px]" />
        <div className="container-main relative z-10 text-center">
          <SectionLabel className="text-center">Engagement &amp; Inquiry</SectionLabel>
          <h1 className="text-hero-sm md:text-[3.5rem] font-display font-bold mb-4">
            Expert Guidance,
            <br />
            <span className="text-accent italic">Directly</span> Within Reach
          </h1>
          <p className="text-base text-text-secondary max-w-xl mx-auto">
            Connect with our senior technical advisors in London and Jaipur. We provide
            precision-focused solutions for multinational tax compliance and transfer
            pricing.
          </p>
        </div>
      </section>

      {/* Main Content: Hubs + Form */}
      <section className="py-16 md:py-22">
        <div className="container-main">
          <SectionLabel>Global Footprint</SectionLabel>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Office Hubs */}
            <div>
              <h2 className="text-section-sm font-display font-semibold mb-8">
                Our Strategic Hubs
              </h2>

              {/* London */}
              <div className="card-surface p-6 mb-4 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg width="14" height="14" fill="none" stroke="#D4A843" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <p className="text-label text-accent mb-2">Client Relations &amp; Strategic Advisory</p>
                <h3 className="text-lg font-semibold text-white mb-4">London, United Kingdom</h3>
                <div className="flex flex-col gap-2 text-sm text-text-secondary">
                  <div className="flex items-start gap-2">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="mt-0.5 flex-shrink-0 text-text-muted">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>124 City Road<br />London, EC1V 2NX<br />United Kingdom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-text-muted flex-shrink-0">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <span>+44 (0) 20 7946 0123</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-text-muted flex-shrink-0">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span className="text-accent">london@nsg.consultancy</span>
                  </div>
                </div>
              </div>

              {/* Jaipur */}
              <div className="card-surface p-6 mb-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg width="14" height="14" fill="none" stroke="#D4A843" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <p className="text-label text-accent mb-2">Global Operations &amp; Technical Delivery</p>
                <h3 className="text-lg font-semibold text-white mb-4">Jaipur, India</h3>
                <div className="flex flex-col gap-2 text-sm text-text-secondary">
                  <div className="flex items-start gap-2">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="mt-0.5 flex-shrink-0 text-text-muted">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>Malviya Nagar Sector 5<br />Jaipur, Rajasthan 302017<br />India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-text-muted flex-shrink-0">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <span>+91 141 272 4500</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-text-muted flex-shrink-0">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span className="text-accent">jaipur@nsg.consultancy</span>
                  </div>
                </div>
              </div>

              {/* Guaranteed Response */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" fill="none" stroke="#D4A843" strokeWidth="1.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-label text-accent mb-1">Guaranteed Response</p>
                  <p className="text-sm text-text-secondary">
                    Our experts typically review and respond to new technical inquiries
                    within <strong className="text-white">48 business hours</strong>.
                  </p>
                </div>
              </div>

              {/* Direct Lines */}
              <div className="mt-6 pt-6 border-t border-navy-border">
                <p className="text-label text-text-muted mb-3">Direct Lines</p>
                <div className="flex gap-8">
                  <div>
                    <p className="text-[10px] text-text-muted uppercase tracking-wider mb-1">New Client Enquiries</p>
                    <p className="text-sm text-accent font-medium">partners@nsg.consultancy</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Media &amp; Insights</p>
                    <p className="text-sm text-accent font-medium">press@nsg.consultancy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="card-surface p-6 md:p-8">
              <h3 className="text-xl font-display font-semibold mb-2">
                Submit a Technical Enquiry
              </h3>
              <p className="text-sm text-text-muted mb-6">
                Please provide detail regarding your firm&apos;s specific compliance or
                advisory needs. All communications are handled under strict confidentiality
                protocols.
              </p>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-label text-text-muted block mb-1.5">Full Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Johnathan Doe"
                      className="w-full bg-navy-surface border border-navy-border rounded px-3 py-2.5 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-accent/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-label text-text-muted block mb-1.5">Professional Email</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jdoe@multinational.com"
                      className="w-full bg-navy-surface border border-navy-border rounded px-3 py-2.5 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-accent/60 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-label text-text-muted block mb-1.5">Company Name</label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Global Enterprises Ltd."
                      className="w-full bg-navy-surface border border-navy-border rounded px-3 py-2.5 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-accent/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-label text-text-muted block mb-1.5">Service Area</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-navy-surface border border-navy-border rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-accent/60 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="text-text-muted">Select expertise needed</option>
                      {serviceAreas.map((area) => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-label text-text-muted block mb-1.5">Enquiry Details</label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Briefly describe your requirements or the specific tax jurisdiction involved..."
                    rows={5}
                    className="w-full bg-navy-surface border border-navy-border rounded px-3 py-2.5 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-accent/60 transition-colors resize-none"
                  />
                </div>

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded border-navy-border bg-navy-surface accent-accent"
                  />
                  <span className="text-xs text-text-muted leading-relaxed">
                    I consent to NSG Consultancy processing my data for the purpose of this
                    technical enquiry. View our{" "}
                    <Link href="#" className="text-accent underline">Privacy Policy</Link>{" "}
                    for more information.
                  </span>
                </label>

                <button className="btn-primary w-full justify-center py-3 mt-2">
                  Send Technical Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-22 bg-navy-surface">
        <div className="container-main">
          <div className="text-center mb-10">
            <SectionLabel className="text-center">Engagement Clarity</SectionLabel>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-sm text-text-secondary mt-2 max-w-lg mx-auto">
              Answers to common operational questions regarding multinational engagements
              and administrative compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.q} className="card-surface p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="14" height="14" fill="none" stroke="#D4A843" strokeWidth="1.5" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-semibold text-white">{faq.q}</h4>
                </div>
                <p className="text-xs text-text-muted leading-relaxed pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-26 relative noise-texture">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-navy-card/50 to-primary" />
        {/* Background image placeholder */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/60" />
        <div className="container-main relative z-10 text-center">
          <h2 className="text-section-sm md:text-section font-display font-bold mb-6">
            Ready to streamline your global tax compliance?
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="btn-primary px-8">
              Request a Consultation
            </Link>
            <Link href="/services" className="btn-secondary px-8 flex items-center gap-2">
              View Service Modules
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
