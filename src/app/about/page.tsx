'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BadgeCheck, Truck, Wrench, HeartPulse, ShieldCheck, Phone } from 'lucide-react';

const GREEN = '#3DAA35';
const DARK = '#0F1117';
const BG = '#F5FAF4';

export default function AboutPage() {
  return (
    <main style={{ minHeight: '100vh', background: BG }}>

      {/* Hero */}
      <section style={{ background: DARK, padding: '72px 32px', borderBottom: `4px solid ${GREEN}`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(61,170,53,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(61,170,53,0.05) 1px, transparent 1px)`, backgroundSize: '48px 48px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: -80, right: -80, width: 360, height: 360, background: `radial-gradient(circle, rgba(232,23,93,0.1) 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: GREEN, display: 'block', marginBottom: 18 }}>◆ Our Story</span>
          <h1 style={{ fontSize: 'clamp(56px,9vw,110px)', fontWeight: 900, color: '#fff', lineHeight: 0.9, marginBottom: 24, letterSpacing: '-0.02em' }}>
            ABOUT<br /><span style={{ color: GREEN }}>SACHDEVA</span><br /><span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.6em', letterSpacing: '0.02em' }}>MEDLINE</span>
          </h1>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.55)', maxWidth: 540, margin: '0 auto', lineHeight: 1.85 }}>
            Established in 1981 by Mr. S.K. Sachdeva — India&apos;s trusted importer and dealer of medical equipment with over four decades of service to healthcare.
          </p>
        </div>
      </section>

      <div className="about-container" style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 32px' }}>

        {/* Company Intro */}
        <section className="about-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', marginBottom: 88 }}>
          <div style={{ background: '#fff', border: `1.5px solid #e8f0e8`, borderRadius: 16, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '4/3', padding: 40 }}>
            <Image src="/sachdeva-logo.jpeg" alt="Sachdeva Medline" width={380} height={140} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
          <div>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN, display: 'block', marginBottom: 14 }}>◆ Who We Are</span>
            <h2 style={{ fontSize: 'clamp(36px,4.5vw,56px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1, marginBottom: 22 }}>
              YOUR TRUSTED<br /><span style={{ color: GREEN }}>MEDICAL EQUIPMENT</span><br />PARTNER
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(15,17,23,0.65)', lineHeight: 1.85, marginBottom: 20 }}>
              Sachdeva Medline is a major medical supplies importer and wholesaler based in Delhi. Founded in 1981 by Mr. S.K. Sachdeva, we have spent over 45 years building trust with hospitals, clinics, and home-care patients across India.
            </p>
            <p style={{ fontSize: 14, color: 'rgba(15,17,23,0.65)', lineHeight: 1.85, marginBottom: 28 }}>
              We are the authorised dealer for <strong style={{ color: DARK }}>Longfian oxygen concentrators</strong> and supply a wide range of medical equipment — from oxygen therapy devices to patient care beds — all backed by genuine warranties and expert after-sales service.
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              <Link href="/shop" style={{ background: GREEN, color: '#fff', padding: '12px 24px', borderRadius: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.2s', boxShadow: `0 4px 14px rgba(61,170,53,0.3)` }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#2e9128')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = GREEN)}
              >
                Our Products →
              </Link>
              <Link href="/contact" style={{ background: 'transparent', color: DARK, padding: '12px 24px', border: `2px solid #e8f0e8`, borderRadius: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'border-color 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = GREEN)}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = '#e8f0e8')}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ background: GREEN, borderRadius: 16, padding: '52px 48px', marginBottom: 88, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, textAlign: 'center' }}>
          {[
            { num: '45+', label: 'Years in Business' },
            { num: '10,000+', label: 'Units Delivered' },
            { num: '500+', label: 'Cities Served' },
            { num: '100%', label: 'Genuine Products' },
          ].map((s, i) => (
            <div key={i} style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.25)' : 'none', paddingRight: i < 3 ? 24 : 0 }}>
              <div style={{ fontSize: 'clamp(40px,4vw,64px)', fontWeight: 900, color: '#fff', lineHeight: 1, letterSpacing: '-0.02em' }}>{s.num}</div>
              <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginTop: 8, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </section>

        {/* Leadership */}
        <section style={{ marginBottom: 88 }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN, display: 'block', marginBottom: 12 }}>◆ Our Leadership</span>
            <h2 style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1 }}>THE PEOPLE BEHIND<br /><span style={{ color: GREEN }}>SACHDEVA MEDLINE</span></h2>
          </div>
          <div className="leaders-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {[
              {
                name: 'Mr. S.K. Sachdeva',
                title: 'Founder & Chairman',
                bio: 'With over 45 years in the pharmaceutical and medical industries, Mr. S.K. Sachdeva founded Sachdeva Medline in 1981 with a vision to make quality medical equipment accessible across India. Under his leadership, the company has grown to serve thousands of patients, clinics, and hospitals nationwide. He remains committed to the highest standards of integrity and corporate governance.',
                initials: 'SK',
              },
              {
                name: 'Mr. Saurish Sachdeva',
                title: 'CEO & Managing Director',
                bio: 'A Mathematics Honours graduate with an actuarial background, Mr. Saurish Sachdeva oversees day-to-day operations, business strategy, and organisational structure. He has modernised the company\'s supply chain, expanded its product range, and strengthened partnerships with leading global medical equipment manufacturers — bringing Sachdeva Medline into the digital age while preserving its core values.',
                initials: 'SS',
              },
            ].map((person, i) => (
              <div key={i} style={{ background: '#fff', border: `1.5px solid #e8f0e8`, borderRadius: 16, padding: '36px 32px', display: 'flex', gap: 24, alignItems: 'flex-start', boxShadow: '0 2px 12px rgba(61,170,53,0.06)' }}>
                <div style={{ width: 72, height: 72, background: `rgba(61,170,53,0.1)`, border: `2px solid rgba(61,170,53,0.25)`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 26, fontWeight: 900, color: GREEN }}>{person.initials}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: DARK, marginBottom: 4, letterSpacing: '-0.01em' }}>{person.name}</h3>
                  <p style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: GREEN, fontWeight: 700, marginBottom: 14 }}>{person.title}</p>
                  <p style={{ fontSize: 13, color: 'rgba(15,17,23,0.6)', lineHeight: 1.85 }}>{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose */}
        <section style={{ marginBottom: 88 }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN, display: 'block', marginBottom: 12 }}>◆ Why Choose Us</span>
            <h2 style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1 }}>THE SACHDEVA<br /><span style={{ color: GREEN }}>MEDLINE ADVANTAGE</span></h2>
          </div>
          <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {[
              { icon: BadgeCheck, title: 'Authorised Dealer', desc: 'Official authorised dealer for Longfian Scitech — every unit is brand new, sealed and backed by a full manufacturer’s warranty.' },
              { icon: HeartPulse, title: 'Expert Guidance', desc: 'Our trained team helps you choose the right equipment for your prescription, condition, and budget — without any sales pressure.' },
              { icon: Truck, title: 'Pan-India Delivery', desc: 'Fast, insured delivery across 500+ cities in India. Dispatched within 24 hours with real-time tracking.' },
              { icon: Wrench, title: 'After-Sales Service', desc: 'Dedicated service support for maintenance, spare parts, and troubleshooting — long after your purchase.' },
              { icon: ShieldCheck, title: 'Genuine Products Only', desc: 'Every product comes with original documentation, a warranty card and the manufacturer’s seal. No refurbished or grey-market goods.' },
              { icon: Phone, title: 'Always Reachable', desc: 'Call or WhatsApp us — our team is available to guide you through setup, troubleshooting, or any product queries.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', border: `1.5px solid #e8f0e8`, borderRadius: 12, padding: '32px 28px', boxShadow: '0 2px 8px rgba(61,170,53,0.05)', transition: 'box-shadow 0.2s, transform 0.2s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 8px 24px rgba(61,170,53,0.12)'; el.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 2px 8px rgba(61,170,53,0.05)'; el.style.transform = 'none'; }}
              >
                <div style={{ width: 48, height: 48, background: `rgba(61,170,53,0.1)`, border: `1.5px solid rgba(61,170,53,0.2)`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <item.icon style={{ width: 22, height: 22, color: GREEN }} />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: DARK, marginBottom: 10, letterSpacing: '-0.01em' }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(15,17,23,0.55)', lineHeight: 1.85 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products we carry */}
        <section style={{ marginBottom: 88 }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN, display: 'block', marginBottom: 12 }}>◆ Our Product Range</span>
            <h2 style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1 }}>WHAT WE<br /><span style={{ color: GREEN }}>SUPPLY</span></h2>
          </div>
          <div className="products-list-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
            {[
              'Oxygen Concentrators',
              'BiPAP / CPAP Machines',
              'Patient Recliner Beds',
              'Air Mattresses',
              'Pulse Oximeters',
              'Examination Gloves',
              'Patient Monitors',
              'Medical Disposables',
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', border: `1.5px solid #e8f0e8`, borderRadius: 10, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 1px 6px rgba(61,170,53,0.05)' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: GREEN, flexShrink: 0 }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: DARK }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: DARK, borderRadius: 20, padding: '72px 56px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(61,170,53,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(61,170,53,0.05) 1px, transparent 1px)`, backgroundSize: '40px 40px', pointerEvents: 'none', borderRadius: 20 }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN, display: 'block', marginBottom: 18 }}>◆ Get in Touch</span>
            <h2 style={{ fontSize: 'clamp(44px,6.5vw,80px)', fontWeight: 900, color: '#fff', lineHeight: 0.92, marginBottom: 20, letterSpacing: '-0.02em' }}>
              NEED MEDICAL<br /><span style={{ color: GREEN }}>EQUIPMENT?</span><br />LET&apos;S TALK.
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', maxWidth: 460, margin: '0 auto 36px', lineHeight: 1.85 }}>
              Our experts will help you choose the right device for your needs — and ensure it reaches you safely, quickly, and with full support.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+919891521090"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: GREEN, color: '#fff', padding: '14px 32px', borderRadius: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: `0 4px 18px rgba(61,170,53,0.4)`, transition: 'background 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#2e9128')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = GREEN)}
              >
                <Phone size={15} /> CALL US NOW →
              </a>
              <Link href="/shop"
                style={{ display: 'inline-block', color: '#fff', padding: '14px 32px', border: `1.5px solid rgba(255,255,255,0.25)`, borderRadius: 10, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'border-color 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = `rgba(61,170,53,0.5)`)}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = `rgba(255,255,255,0.25)`)}
              >
                VIEW PRODUCTS
              </Link>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-container { padding: 40px 16px !important; }
          .about-2col { grid-template-columns: 1fr !important; }
          .leaders-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr 1fr !important; }
          .products-list-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .products-list-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  );
}
