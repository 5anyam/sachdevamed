'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS, StaticProduct } from '../../lib/products-data';
import { Star, ShieldCheck, Truck, Check, ChevronRight, Phone, Clock, Wrench, BadgeCheck, HeartPulse, Package } from 'lucide-react';

const GREEN = '#2D3748';
const PINK = '#E8175D';
const DARK = '#0F1117';
const BG = '#F5FAF4';

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible'); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1,2,3,4,5].map((i) => (
        <Star key={i} style={{ width: 13, height: 13, fill: i <= Math.round(rating) ? GREEN : '#dde8dd', color: i <= Math.round(rating) ? GREEN : '#dde8dd' }} />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: StaticProduct }) {
  const discount = Math.round(((product.regularPrice - product.price) / product.regularPrice) * 100);
  return (
    <Link
      href={`/product/${product.slug}`}
      style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: '#fff', border: `2px solid #E5E7EB`, boxShadow: '0 2px 12px rgba(45,55,72,0.08)', borderRadius: 12, overflow: 'hidden', transition: 'transform 0.25s, box-shadow 0.25s' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(45,55,72,0.18)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(45,55,72,0.08)'; }}
    >
      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: '4/3', background: '#F8F9FA', overflow: 'hidden' }}>
        <Image src={product.images[0]} alt={product.name} fill style={{ objectFit: 'contain', padding: '12px', transition: 'transform 0.5s' }} sizes="(max-width: 768px) 100vw, 33vw" />
        {product.badge && (
          <span style={{ position: 'absolute', top: 12, left: 12, background: GREEN, color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', padding: '4px 10px', borderRadius: 4 }}>
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span style={{ position: 'absolute', top: 12, right: 12, background: PINK, color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', padding: '4px 8px', borderRadius: 4 }}>
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <p style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: GREEN, marginBottom: 6, fontWeight: 600 }}>{product.category}</p>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: DARK, marginBottom: 6, lineHeight: 1.2, letterSpacing: '-0.01em' }}>{product.name}</h3>
        <p style={{ fontSize: 13, color: 'rgba(15,17,23,0.55)', marginBottom: 12, lineHeight: 1.65, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{product.tagline}</p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <StarRating rating={product.rating} />
          <span style={{ fontSize: 11, color: 'rgba(15,17,23,0.4)' }}>({product.reviewCount} reviews)</span>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14 }}>
            <span style={{ fontSize: 26, fontWeight: 800, color: DARK, letterSpacing: '-0.02em' }}>₹{product.price.toLocaleString('en-IN')}</span>
            {product.regularPrice > product.price && (
              <span style={{ fontSize: 14, color: 'rgba(15,17,23,0.35)', textDecoration: 'line-through' }}>₹{product.regularPrice.toLocaleString('en-IN')}</span>
            )}
          </div>
          <div style={{ background: GREEN, color: '#fff', textAlign: 'center', padding: '12px 16px', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', borderRadius: 8, transition: 'background 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#1A202C')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = GREEN)}
          >
            VIEW DETAILS <ChevronRight size={14} />
          </div>
        </div>
      </div>
    </Link>
  );
}

function HeroSection() {
  return (
    <section style={{ background: DARK, position: 'relative', overflow: 'hidden', borderBottom: `4px solid ${GREEN}` }}>
      {/* grid pattern */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(45,55,72,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(45,55,72,0.04) 1px, transparent 1px)`, backgroundSize: '48px 48px', pointerEvents: 'none' }} />
      {/* Pink glow */}
      <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, background: `radial-gradient(circle, rgba(232,23,93,0.12) 0%, transparent 70%)`, pointerEvents: 'none' }} />

      <div className="hero-grid" style={{ maxWidth: 1280, margin: '0 auto', padding: '70px 40px 80px', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 56, alignItems: 'center' }}>
        {/* Left */}
        <div>
          {/* Since badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `rgba(45,55,72,0.1)`, border: `1.5px solid rgba(45,55,72,0.35)`, color: GREEN, fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 4, marginBottom: 28 }}>
            ◆ Trusted Since 1981 — 45+ Years of Service
          </div>

          <h1 style={{ fontSize: 'clamp(52px, 7.5vw, 108px)', fontWeight: 900, lineHeight: 0.92, letterSpacing: '-0.025em', marginBottom: 24 }}>
            <span style={{ display: 'block', color: '#fff' }}>BREATHE</span>
            <span style={{ display: 'block', color: 'transparent', WebkitTextStroke: `2.5px ${GREEN}` }}>BETTER.</span>
            <span style={{ display: 'block', color: GREEN }}>LIVE</span>
            <span style={{ display: 'block', color: '#fff', opacity: 0.9 }}>BETTER.</span>
          </h1>

          <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, maxWidth: 420, marginBottom: 36 }}>
            India&apos;s authorised dealer for <strong style={{ color: GREEN, fontWeight: 600 }}>Longfian Oxygen Concentrators</strong>. Genuine products, expert support, and pan-India delivery — straight to your doorstep.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 40 }}>
            <Link href="/shop" style={{ background: GREEN, color: '#fff', padding: '14px 30px', borderRadius: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, boxShadow: `0 4px 18px rgba(45,55,72,0.4)`, transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = `0 8px 24px rgba(45,55,72,0.5)`; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'none'; el.style.boxShadow = `0 4px 18px rgba(45,55,72,0.4)`; }}
            >
              SHOP NOW <ChevronRight size={15} />
            </Link>
            <a href="tel:+919999999999" style={{ color: '#fff', padding: '14px 30px', border: `1.5px solid rgba(255,255,255,0.25)`, borderRadius: 8, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'border-color 0.2s' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = `rgba(45,55,72,0.6)`)}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = `rgba(255,255,255,0.25)`)}
            >
              <Phone size={14} /> CALL US
            </a>
          </div>

          {/* Trust chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {[
              { icon: BadgeCheck, label: 'Authorised Dealer' },
              { icon: Truck, label: 'Pan-India Delivery' },
              { icon: Wrench, label: 'After-Sale Service' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '7px 14px', borderRadius: 6 }}>
                <item.icon style={{ width: 14, height: 14, color: GREEN }} />
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', fontWeight: 500, letterSpacing: '0.05em' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Logo card */}
        <div className="hero-img-col" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: 380 }}>
            {/* Decorative ring */}
            <div style={{ position: 'absolute', inset: -16, border: `2px dashed rgba(45,55,72,0.25)`, borderRadius: 20, pointerEvents: 'none' }} />
            <div style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid rgba(45,55,72,0.2)`, borderRadius: 16, padding: '48px 40px', backdropFilter: 'blur(8px)', textAlign: 'center' }}>
              <div style={{ background: '#fff', borderRadius: 12, padding: '28px 24px', marginBottom: 28 }}>
                <Image src="/sachdeva-logo.jpeg" alt="Sachdeva Medline" width={300} height={100} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[
                  { num: '45+', label: 'Years' },
                  { num: '10K+', label: 'Units Sold' },
                  { num: '500+', label: 'Cities' },
                  { num: '100%', label: 'Genuine' },
                ].map(s => (
                  <div key={s.label} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: '14px 10px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ fontSize: 26, fontWeight: 900, color: GREEN, lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; padding: 44px 20px 52px !important; gap: 36px !important; }
          .hero-img-col { display: none !important; }
        }
      `}</style>
    </section>
  );
}

function MarqueeBelt() {
  const row1 = ['BREATHE BETTER', 'LIVE BETTER', 'TRUSTED SINCE 1981', 'PAN-INDIA DELIVERY', 'GENUINE PRODUCTS'];
  const row2 = ['OXYGEN CONCENTRATORS', 'RECLINER BEDS', 'AUTHORISED DEALER', 'FREE HOME DELIVERY', 'EMI AVAILABLE'];
  return (
    <div style={{ borderTop: `3px solid ${DARK}`, borderBottom: `3px solid ${DARK}` }}>
      <div style={{ overflow: 'hidden', borderBottom: `2px solid ${DARK}`, background: GREEN, padding: '10px 0' }}>
        <div style={{ display: 'inline-flex', whiteSpace: 'nowrap', animation: 'mq-fwd 20s linear infinite' }}>
          {[...Array(2)].map((_, r) => (
            <span key={r} style={{ display: 'inline-flex' }}>
              {row1.map((t) => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 14, padding: '0 22px', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff' }}>
                  {t} <span style={{ fontSize: 12 }}>◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
      <div style={{ overflow: 'hidden', background: DARK, padding: '10px 0' }}>
        <div style={{ display: 'inline-flex', whiteSpace: 'nowrap', animation: 'mq-rev 16s linear infinite' }}>
          {[...Array(2)].map((_, r) => (
            <span key={r} style={{ display: 'inline-flex' }}>
              {row2.map((t) => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 14, padding: '0 22px', fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', color: GREEN }}>
                  {t} <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)' }}>▶</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TrustBar() {
  const items = [
    { icon: BadgeCheck, label: 'NO COD Option' },
    { icon: ShieldCheck, label: 'ISO Certified Products' },
    { icon: Truck, label: 'Free Pan-India Delivery' },
    { icon: Wrench, label: 'After-Sale Service' },
    { icon: Clock, label: 'Fast Dispatch in 24 hrs' },
  ];
  return (
    <section style={{ background: '#fff', borderBottom: `2px solid #E5E7EB` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '14px 32px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 36px', alignItems: 'center' }}>
          {items.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: DARK }}>
              <item.icon style={{ width: 15, height: 15, color: GREEN }} />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const ref = useReveal(0.1);
  return (
    <section style={{ padding: '80px 0', background: BG }} id="products">
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

        <div ref={ref} className="reveal" style={{ marginBottom: 48 }}>
          <span style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: GREEN, fontWeight: 600, display: 'block', marginBottom: 10 }}>◆ Our Equipment</span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
            <h2 style={{ fontSize: 'clamp(40px,5.5vw,72px)', fontWeight: 900, letterSpacing: '-0.025em', color: DARK, lineHeight: 1 }}>
              MEDICAL EQUIPMENT<br />
              <span style={{ color: GREEN }}>YOU CAN TRUST.</span>
            </h2>
            <Link href="/shop" style={{ background: DARK, color: '#fff', padding: '12px 26px', borderRadius: 8, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'background 0.2s' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = GREEN)}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = DARK)}
            >
              VIEW ALL →
            </Link>
          </div>
        </div>

        <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const ref = useReveal(0.15);
  const stats = [
    { num: '45+', label: 'Years in Business' },
    { num: '10,000+', label: 'Units Delivered' },
    { num: '500+', label: 'Cities Served' },
    { num: '100%', label: 'Genuine Products' },
  ];
  return (
    <section style={{ background: GREEN, borderTop: `3px solid ${DARK}`, borderBottom: `3px solid ${DARK}`, padding: '48px 40px' }}>
      <div ref={ref} className="reveal" style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap', gap: 24 }}>
        {stats.map((s, i) => (
          <React.Fragment key={s.label}>
            {i > 0 && <div style={{ width: 1, height: 52, background: 'rgba(255,255,255,0.3)', flexShrink: 0 }} />}
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: 'clamp(44px,5vw,72px)', fontWeight: 900, color: '#fff', display: 'block', lineHeight: 1, letterSpacing: '-0.02em' }}>{s.num}</span>
              <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginTop: 6, fontWeight: 500 }}>{s.label}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

const whyItems = [
  { icon: BadgeCheck, title: 'Authorised Dealer', desc: 'Official and authorised dealer for Longfian Science — guaranteed genuine equipment with full manufacturer warranty.', num: '01' },
  { icon: HeartPulse, title: 'Expert Guidance', desc: 'Our trained biomedical team helps you choose the right equipment for your specific medical condition and prescription.', num: '02' },
  { icon: Truck, title: 'Pan-India Delivery', desc: 'Fast and safe delivery across India. Dispatched within 24 hours, fully insured, with real-time tracking.', num: '03' },
  { icon: Wrench, title: 'After-Sale Service', desc: 'Dedicated service network for maintenance, spare parts, and troubleshooting — long after your purchase.', num: '04' },
  { icon: Package, title: 'Genuine Products Only', desc: 'Every unit is brand new, sealed, and comes with full documentation — no refurbished or grey-market goods.', num: '05' },
  { icon: ShieldCheck, title: 'Warranty Backed', desc: 'All Longfian concentrators come with manufacturer warranty. We assist with claims from day one.', num: '06' },
];

function WhySection() {
  return (
    <section style={{ background: '#fff', borderBottom: `3px solid ${DARK}` }} id="why">
      <div style={{ borderBottom: `2px solid #E5E7EB`, padding: '52px 40px', background: `linear-gradient(135deg,#F8F9FA,#F8F9FA)`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
        <div>
          <span style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: GREEN, fontWeight: 600, display: 'block', marginBottom: 10 }}>◆ The Sachdeva Medline Difference</span>
          <h2 style={{ fontSize: 'clamp(40px,5.5vw,72px)', fontWeight: 900, letterSpacing: '-0.025em', color: DARK, lineHeight: 1 }}>
            TRUSTED BY<br /><span style={{ color: GREEN }}>THOUSANDS.</span>
          </h2>
        </div>
        <Link href="/contact" style={{ background: DARK, color: '#fff', padding: '14px 30px', borderRadius: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.2s' }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = GREEN)}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = DARK)}
        >
          CONTACT US →
        </Link>
      </div>
      <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {whyItems.map((item, i) => (
          <div
            key={i}
            style={{
              padding: '40px 32px',
              borderRight: (i + 1) % 3 !== 0 ? `2px solid #E5E7EB` : 'none',
              borderBottom: i < 3 ? `2px solid #E5E7EB` : 'none',
              position: 'relative', overflow: 'hidden', cursor: 'default',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = BG)}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#fff')}
          >
            <span style={{ position: 'absolute', top: -8, right: 16, fontSize: 80, fontWeight: 900, color: `rgba(45,55,72,0.05)`, lineHeight: 1, pointerEvents: 'none', letterSpacing: '-0.02em' }}>{item.num}</span>
            <div style={{ width: 44, height: 44, background: `rgba(45,55,72,0.1)`, border: `1.5px solid rgba(45,55,72,0.25)`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <item.icon style={{ width: 20, height: 20, color: GREEN }} />
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em', color: DARK, marginBottom: 10 }}>{item.title}</h3>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'rgba(15,17,23,0.55)', lineHeight: 1.85 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowToOrderSection() {
  return (
    <section className="how-section" style={{ padding: '80px 48px', background: BG, borderBottom: `2px solid #E5E7EB` }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: GREEN, fontWeight: 600, display: 'block', marginBottom: 12 }}>◆ Simple Process</span>
          <h2 style={{ fontSize: 'clamp(40px,5vw,68px)', fontWeight: 900, letterSpacing: '-0.025em', color: DARK, lineHeight: 1 }}>
            ORDER IN<br /><span style={{ color: GREEN }}>4 EASY STEPS.</span>
          </h2>
        </div>
        <div className="how-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: `2px solid #E5E7EB`, borderRadius: 12, overflow: 'hidden' }}>
          {[
            { step: '01', title: 'Browse Products', desc: 'Explore our range of Longfian oxygen concentrators and recliner beds.' },
            { step: '02', title: 'Call or WhatsApp', desc: 'Confirm your requirement and get expert guidance from our team.' },
            { step: '03', title: 'Easy Payment', desc: 'Pay online, via UPI, or choose EMI — quick and secure checkout.' },
            { step: '04', title: 'Doorstep Delivery', desc: 'Dispatched within 24 hrs. Delivered safely with installation guidance.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '36px 26px', textAlign: 'center', borderRight: i < 3 ? `2px solid #E5E7EB` : 'none', background: i % 2 === 0 ? '#fff' : BG }}>
              <div style={{ width: 52, height: 52, background: GREEN, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px', boxShadow: `0 4px 12px rgba(45,55,72,0.3)` }}>
                <span style={{ fontSize: 20, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{item.step}</span>
              </div>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: DARK, marginBottom: 10 }}>{item.title}</h4>
              <p style={{ fontSize: 12, color: 'rgba(15,17,23,0.55)', lineHeight: 1.75 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={{ background: DARK, padding: '80px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(45,55,72,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(45,55,72,0.05) 1px, transparent 1px)`, backgroundSize: '40px 40px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -100, left: -100, width: 400, height: 400, background: `radial-gradient(circle, rgba(232,23,93,0.08) 0%, transparent 70%)`, pointerEvents: 'none' }} />
      <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `rgba(45,55,72,0.1)`, border: `1.5px solid rgba(45,55,72,0.3)`, color: GREEN, fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', padding: '6px 14px', borderRadius: 4, marginBottom: 24 }}>
          ◆ We&apos;re Here to Help
        </div>
        <h2 style={{ fontSize: 'clamp(44px,6.5vw,88px)', fontWeight: 900, color: '#fff', lineHeight: 0.92, marginBottom: 20, letterSpacing: '-0.025em' }}>
          NEED HELP<br /><span style={{ color: GREEN }}>CHOOSING?</span><br />CALL US.
        </h2>
        <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.5)', marginBottom: 40, lineHeight: 1.75 }}>
          Our experts will guide you to the right oxygen concentrator for your prescription and budget — no pushy sales, just honest advice.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginBottom: 40 }}>
          <Link href="/shop" style={{ background: GREEN, color: '#fff', padding: '15px 32px', borderRadius: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: `0 4px 18px rgba(45,55,72,0.4)`, transition: 'transform 0.2s, box-shadow 0.2s' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = `0 8px 28px rgba(45,55,72,0.5)`; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'none'; el.style.boxShadow = `0 4px 18px rgba(45,55,72,0.4)`; }}
          >
            EXPLORE PRODUCTS →
          </Link>
          <Link href="/contact" style={{ color: '#fff', padding: '15px 32px', border: `1.5px solid rgba(255,255,255,0.25)`, borderRadius: 8, fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', transition: 'border-color 0.2s' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = `rgba(45,55,72,0.5)`)}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = `rgba(255,255,255,0.25)`)}
          >
            CONTACT US
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 28, flexWrap: 'wrap' }}>
          {['Free Delivery', 'Genuine Products', 'Secure Payment', 'EMI Available'].map((t) => (
            <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em' }}>
              <Check style={{ width: 12, height: 12, color: GREEN }} /> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Homepage() {
  return (
    <div style={{ minHeight: '100vh', background: BG, overflow: 'hidden' }}>
      <HeroSection />
      <MarqueeBelt />
      <TrustBar />
      <ProductsSection />
      <StatsBar />
      <WhySection />
      <HowToOrderSection />
      <CTASection />

      <style>{`
        @keyframes mq-fwd { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes mq-rev { from { transform: translateX(-50%); } to { transform: translateX(0); } }

        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.visible { opacity: 1; transform: none; }

        @media (max-width: 900px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .why-grid { grid-template-columns: 1fr 1fr !important; }
          .how-section { padding: 48px 20px !important; }
          .how-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .products-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; }
          .how-grid { grid-template-columns: 1fr !important; }
          .how-grid > div { border-right: none !important; border-bottom: 2px solid #E5E7EB !important; }
          .why-grid > div { border-right: none !important; }
        }
      `}</style>
    </div>
  );
}
