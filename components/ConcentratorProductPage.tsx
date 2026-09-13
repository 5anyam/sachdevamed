'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { ShieldCheck, Truck, RotateCcw, Package, Zap, ChevronRight, Star, Phone } from 'lucide-react';
import { useCart } from '../lib/cart';
import { toast } from '../hooks/use-toast';
import { getReviewStats } from '../lib/product-reviews';
import type { ConcentratorProduct } from '../lib/concentrator-products';
import ExperienceRibbon from './ExperienceRibbon';

const ProductReviews = dynamic(() => import('./ProductReviews'), { ssr: false });
const ProductFAQ = dynamic(() => import('./ProductFaq'), { ssr: false });

const ACC = '#2D3748';
const GREY = '#6B7280';
const DARK = '#0F1117';
const BG = '#F8F9FA';

const W = 1280;
const PAD = 'clamp(16px,4vw,32px)';
const VPAD = 'clamp(48px,8vw,80px)';

const WHATSAPP = 'https://wa.me/919891521090';

function StarRow({ r }: { r: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} style={{ width: 14, height: 14, fill: i <= Math.round(r) ? '#F59E0B' : '#E5E7EB', color: i <= Math.round(r) ? '#F59E0B' : '#E5E7EB' }} />
      ))}
    </div>
  );
}

function Label({ text }: { text: string }) {
  return <span style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: GREY, fontWeight: 700, display: 'block', marginBottom: 12 }}>◆ {text}</span>;
}

function H2({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 style={{ fontSize: 'clamp(26px,4vw,46px)', fontWeight: 900, letterSpacing: '-0.02em', color: light ? '#fff' : DARK, lineHeight: 1.08, marginBottom: 24 }}>
      {children}
    </h2>
  );
}

function BenefitCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [lit, setLit] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setLit(true); }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ padding: 'clamp(14px,2vw,20px)', background: lit ? '#fff' : BG, borderRadius: 12, border: `1.5px solid ${lit ? '#CBD5E0' : '#E5E7EB'}`, boxShadow: lit ? '0 4px 20px rgba(0,0,0,0.07)' : 'none', transition: 'background 0.45s ease, box-shadow 0.45s ease, border-color 0.45s ease' }}>
      {children}
    </div>
  );
}

/* Gallery — same behaviour as the JAY-1000P page: all images preloaded so
   switching is instant, auto-advancing every 4s, tapping a thumb resets it. */
function Gallery({ images, frame, name }: { images: string[]; frame: 'square' | 'wide'; name: string }) {
  const [main, setMain] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const pad = frame === 'wide' ? '61.86%' : '100%';

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setMain((m) => (m + 1) % images.length), 4000);
  };
  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const pick = (i: number) => { setMain(i); startTimer(); };

  return (
    <div>
      <div style={{ position: 'relative', width: '100%', paddingBottom: pad, background: '#fff', borderRadius: 14, overflow: 'hidden', border: '2px solid #E5E7EB', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
        {images.map((src, i) => (
          <div key={src} style={{ position: 'absolute', inset: 8, opacity: main === i ? 1 : 0, transition: 'opacity 0.15s ease', pointerEvents: 'none' }}>
            <Image src={src} alt={i === 0 ? name : `${name} — view ${i + 1}`} fill style={{ objectFit: 'contain' }} sizes="(max-width:768px) 100vw, 50vw" priority={i === 0} />
          </div>
        ))}
        <ExperienceRibbon />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8, marginTop: 10 }}>
        {images.map((src, i) => (
          <button key={src} onClick={() => pick(i)} style={{ display: 'block', position: 'relative', width: '100%', paddingTop: pad, border: `2px solid ${i === main ? ACC : '#E5E7EB'}`, borderRadius: 8, overflow: 'hidden', opacity: i === main ? 1 : 0.6, cursor: 'pointer', background: '#fff', transition: 'all 0.2s' }}>
            <div style={{ position: 'absolute', inset: 4 }}>
              <Image src={src} alt="" fill style={{ objectFit: 'contain' }} sizes="120px" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ConcentratorProductPage({ product }: { product: ConcentratorProduct }) {
  const { addToCart } = useCart();
  const router = useRouter();
  const [adding, setAdding] = useState(false);
  const [buying, setBuying] = useState(false);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const reviewStats = getReviewStats(product.id);

  const priced = product.price > 0;
  const discount = priced && product.mrp > product.price ? Math.round(((product.mrp - product.price) / product.mrp) * 100) : 0;

  const cartItem = {
    id: product.id,
    name: product.name,
    price: product.price.toString(),
    regular_price: (product.mrp || product.price).toString(),
    images: product.gallery.map((src) => ({ src })),
  };

  const doAdd = () => {
    setAdding(true);
    addToCart(cartItem);
    toast({ title: 'Added to Cart', description: `${product.name} added to your cart.` });
    setTimeout(() => setAdding(false), 600);
  };
  const doBuy = () => { setBuying(true); addToCart(cartItem); router.push('/checkout'); };

  return (
    <div style={{ minHeight: '100vh', background: BG, overflowX: 'hidden', maxWidth: '100vw' }}>

      {/* ──── EXCLUSIVE IMPORTER BAR ──── */}
      <div style={{ background: ACC, padding: '9px 0', textAlign: 'center' }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.06em' }}>
          Sachdeva Medline is the exclusive importer and partner for Longfian oxygen concentrators in India
        </p>
      </div>

      {/* ──── BREADCRUMB ──── */}
      <div style={{ borderBottom: '1px solid #E5E7EB', background: '#fff' }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `10px ${PAD}` }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(15,17,23,0.4)' }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <ChevronRight style={{ width: 12, height: 12 }} />
            <Link href="/shop" style={{ color: 'inherit', textDecoration: 'none' }}>Products</Link>
            <ChevronRight style={{ width: 12, height: 12 }} />
            <span style={{ color: DARK }}>{product.name}</span>
          </nav>
        </div>
      </div>

      {/* ──── HERO ──── */}
      <section style={{ background: '#fff', paddingBottom: 'clamp(32px,5vw,56px)' }}>
        <div className="hero-wrap" style={{ maxWidth: W, margin: '0 auto', padding: `clamp(24px,5vw,40px) ${PAD} 0`, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px,5vw,64px)', alignItems: 'start' }}>

          <div className="hero-gallery" style={{ position: 'sticky', top: 88, alignSelf: 'start' }}>
            <Gallery images={product.gallery} frame={product.frame} name={product.name} />
          </div>

          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 4, background: ACC, color: '#fff' }}>
                {product.badge}
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(26px,3.5vw,48px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1.05, marginBottom: 14 }}>
              {product.name}<br />
              <span style={{ fontSize: 'clamp(14px,1.8vw,20px)', fontWeight: 500, color: GREY, letterSpacing: 0 }}>
                {product.subtitle}
              </span>
            </h1>

            {reviewStats.count > 0 && (
              <button onClick={() => reviewsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                <StarRow r={reviewStats.average} />
                <span style={{ fontSize: 12, color: 'rgba(15,17,23,0.5)', borderBottom: '1px solid rgba(15,17,23,0.2)' }}>
                  {reviewStats.average} · {reviewStats.count} Verified Review{reviewStats.count !== 1 ? 's' : ''}
                </span>
              </button>
            )}

            {/* ── KEY HIGHLIGHTS BOX ── */}
            <div style={{ marginBottom: 4, border: '2.5px solid #2D3748', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 16px rgba(15,17,23,0.10)' }}>
              <div style={{ background: '#EAECF0', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 0 }}>
                {product.highlights.map((h, i, arr) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '11px 2px', borderBottom: i < arr.length - 1 ? '1px solid rgba(45,55,72,0.12)' : 'none' }}>
                    <span style={{ fontSize: 18, flexShrink: 0, minWidth: 26, whiteSpace: 'nowrap', textAlign: 'center', marginTop: 1 }}>{h.icon}</span>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: DARK, lineHeight: 1.25 }}>{h.title}</p>
                      {h.sub && <p style={{ fontSize: 12, color: GREY, lineHeight: 1.4, marginTop: 2 }}>{h.sub}</p>}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ background: '#D1D5DB', padding: '10px 14px', borderTop: '1.5px solid rgba(45,55,72,0.15)' }}>
                {product.notes.map((line, i, arr) => (
                  <p key={i} style={{ fontSize: 11, color: '#374151', lineHeight: 1.65, marginBottom: i < arr.length - 1 ? 2 : 0 }}>{line}</p>
                ))}
              </div>
            </div>

            <p style={{ fontSize: 13, fontWeight: 600, color: ACC, lineHeight: 1.6, marginBottom: 20, marginTop: 12 }}>
              {product.tagline}
            </p>

            {/* ── PRICE ── */}
            <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '2px solid #E5E7EB' }}>
              {priced ? (
                <>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 44, fontWeight: 900, color: DARK, letterSpacing: '-0.02em' }}>₹{product.price.toLocaleString('en-IN')}</span>
                    {product.mrp > product.price && (
                      <>
                        <span style={{ fontSize: 16, color: 'rgba(15,17,23,0.35)', textDecoration: 'line-through' }}>₹{product.mrp.toLocaleString('en-IN')}</span>
                        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 4, background: DARK, color: '#fff' }}>
                          {discount}% OFF
                        </span>
                      </>
                    )}
                  </div>
                  <p style={{ fontSize: 11, color: GREY, fontWeight: 500, letterSpacing: '0.04em' }}>
                    Incl. of all taxes
                    {product.mrp > product.price && <> &nbsp;·&nbsp; Save ₹{(product.mrp - product.price).toLocaleString('en-IN')}</>}
                  </p>
                </>
              ) : (
                <>
                  <p style={{ fontSize: 'clamp(24px,3vw,32px)', fontWeight: 900, color: DARK, letterSpacing: '-0.02em', marginBottom: 6 }}>Price on Request</p>
                  <p style={{ fontSize: 12, color: GREY, lineHeight: 1.6 }}>
                    Call or WhatsApp us on <strong style={{ color: ACC }}>+91 98915 21090</strong> for current pricing and availability.
                  </p>
                </>
              )}
            </div>

            {/* ── CTA ── */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
              {priced ? (
                <>
                  <button onClick={doAdd} disabled={adding} style={{ flex: 1, padding: '14px 20px', background: '#fff', color: DARK, border: `2px solid ${ACC}`, borderRadius: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s' }}>
                    {adding ? 'ADDED ✓' : 'ADD TO CART'}
                  </button>
                  <button onClick={doBuy} disabled={buying} style={{ flex: 1, padding: '14px 20px', background: DARK, color: '#fff', border: 'none', borderRadius: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: 'inherit', boxShadow: '0 4px 14px rgba(15,17,23,0.25)', transition: 'all 0.15s' }}>
                    <Zap style={{ width: 14, height: 14 }} />
                    {buying ? 'PROCESSING...' : 'BUY NOW'}
                  </button>
                </>
              ) : (
                <>
                  <a href="tel:+919891521090" style={{ flex: 1, padding: '14px 20px', background: '#fff', color: DARK, border: `2px solid ${ACC}`, borderRadius: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    <Phone style={{ width: 14, height: 14 }} /> CALL US
                  </a>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{ flex: 1, padding: '14px 20px', background: DARK, color: '#fff', border: 'none', borderRadius: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: '0 4px 14px rgba(15,17,23,0.25)' }}>
                    ENQUIRE ON WHATSAPP
                  </a>
                </>
              )}
            </div>

            {/* ── TRUST GRID ── */}
            <div className="trust-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {[
                { icon: Truck, title: 'Free Delivery', sub: 'All over India' },
                { icon: Package, title: 'Delivery Time', sub: '3–5 business days' },
                { icon: RotateCcw, title: 'Easy Returns', sub: '7-Day Return Policy' },
                { icon: ShieldCheck, title: 'Warranty', sub: 'Backed by Sachdeva Medline' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '10px 12px', background: '#fff', border: '1.5px solid #E5E7EB', borderRadius: 8 }}>
                  <item.icon style={{ width: 14, height: 14, color: ACC, flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 700, color: DARK, marginBottom: 1 }}>{item.title}</p>
                    <p style={{ fontSize: 11, color: GREY }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──── STATS STRIP ──── */}
      <section style={{ background: DARK, padding: 'clamp(28px,5vw,40px) 0' }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${PAD}` }}>
          <div className="stats-row1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            {product.stats.slice(0, 2).map((s, i) => (
              <div key={i} className="stat-cell" style={{ textAlign: 'center', padding: 'clamp(16px,3vw,28px) clamp(12px,2vw,24px)', borderRight: i === 0 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <p style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 6 }}>{s.val}</p>
                <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3 }}>{s.lbl}</p>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{s.sub}</p>
              </div>
            ))}
          </div>
          <div className="stats-row2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
            {product.stats.slice(2, 4).map((s, i) => (
              <div key={i} className="stat-cell" style={{ textAlign: 'center', padding: 'clamp(16px,3vw,28px) clamp(12px,2vw,24px)', borderRight: i === 0 ? '1px solid rgba(255,255,255,0.1)' : 'none', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ fontSize: 'clamp(22px,3vw,40px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 6 }}>{s.val}</p>
                <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3 }}>{s.lbl}</p>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{s.sub}</p>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', padding: 'clamp(16px,3vw,24px)' }}>
            <p style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 6 }}>15+</p>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3 }}>Service Centres All Over India</p>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>Pan-India support by Sachdeva Medline</p>
          </div>
        </div>
      </section>

      {/* ──── BENEFITS ──── */}
      <section style={{ background: '#fff', padding: `${VPAD} 0` }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${PAD}` }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <Label text="Key Benefits" />
            <H2>WHY CHOOSE THE {product.name.toUpperCase()}?</H2>
          </div>
          <div className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {product.benefits.map((b, i) => (
              <BenefitCard key={i}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{b.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: DARK, marginBottom: b.accent ? 4 : 6 }}>{b.title}</h3>
                {b.accent && <p style={{ fontSize: 12, fontWeight: 600, color: ACC, marginBottom: 6 }}>{b.accent}</p>}
                <p style={{ fontSize: 13, color: GREY, lineHeight: 1.7 }}>{b.text}</p>
              </BenefitCard>
            ))}
          </div>
        </div>
      </section>

      {/* ──── SPECIFICATIONS ──── */}
      <section style={{ background: DARK, padding: `${VPAD} 0` }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${PAD}` }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <H2 light>TECHNICAL SPECIFICATIONS</H2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', maxWidth: 480, margin: '0 auto' }}>
              Every number that matters — as published by the manufacturer.
            </p>
          </div>

          <div className="spec-table-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[product.specs.slice(0, 2), product.specs.slice(2)].map((column, colIdx) => (
              <div key={colIdx} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {column.map((grp, gi) => (
                  <React.Fragment key={grp.group}>
                    <div style={{ background: ACC, borderRadius: gi === 0 ? '10px 10px 0 0' : 0, padding: '10px 18px', marginTop: gi === 0 ? 0 : 6 }}>
                      <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>{grp.group}</span>
                    </div>
                    {grp.rows.map(([lbl, val], i) => {
                      const last = gi === column.length - 1 && i === grp.rows.length - 1;
                      return (
                        <div key={lbl} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '13px 18px', background: i % 2 === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)', borderLeft: '1px solid rgba(255,255,255,0.06)', borderRight: '1px solid rgba(255,255,255,0.06)', borderBottom: last ? '1px solid rgba(255,255,255,0.06)' : 'none', borderRadius: last ? '0 0 10px 10px' : 0 }}>
                          <span style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.45)', flexShrink: 0 }}>{lbl}</span>
                          <span style={{ fontSize: 13, fontWeight: 700, color: '#fff', textAlign: 'right' }}>{val}</span>
                        </div>
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── WARRANTY ──── */}
      <section style={{ background: ACC, padding: 'clamp(28px,5vw,48px) 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: `0 ${PAD}`, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center' }} className="warranty-grid">
          <div>
            <Label text="Warranty Coverage" />
            <h2 style={{ fontSize: 'clamp(22px,3vw,36px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 12, letterSpacing: '-0.02em' }}>
              Backed by<br />Sachdeva Medline
            </h2>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>
              As the exclusive importer and authorised service partner, we back every {product.name} with a comprehensive warranty and support from 15+ service centres across India.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { period: 'Warranty', item: 'Main Concentrator Unit', note: 'Full parts & service coverage' },
              { period: 'Service', item: '15+ Centres in India', note: 'Pan-India after-sales support' },
              { period: 'Support', item: 'Setup & Usage Guidance', note: 'Call or WhatsApp +91 98915 21090' },
            ].map((w, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '14px 16px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10 }}>
                <span style={{ fontSize: 11, fontWeight: 900, color: '#fff', background: 'rgba(255,255,255,0.15)', padding: '4px 10px', borderRadius: 4, whiteSpace: 'nowrap', flexShrink: 0 }}>{w.period}</span>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{w.item}</p>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)' }}>{w.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── WHAT'S IN THE BOX ──── */}
      <section style={{ background: BG, padding: `${VPAD} 0` }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${PAD}` }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <Label text="Complete Package" />
            <H2>WHAT&apos;S IN THE BOX</H2>
          </div>
          <div className="box-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, maxWidth: 960, margin: '0 auto' }}>
            {product.box.map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '16px', background: '#fff', borderRadius: 10, border: '1.5px solid #E5E7EB' }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{b.icon}</span>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: DARK, marginBottom: 3 }}>{b.item}</p>
                  <p style={{ fontSize: 11, color: GREY, lineHeight: 1.5 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── REVIEWS ──── */}
      <div ref={reviewsRef} style={{ background: BG, padding: `${VPAD} 0`, scrollMarginTop: 96 }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${PAD}` }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <Label text="Verified Reviews" />
            <H2>WHAT CUSTOMERS ARE SAYING</H2>
          </div>
          <ProductReviews productId={product.id} productName={product.name} />
        </div>
      </div>

      {/* ──── FAQ ──── */}
      <div style={{ background: '#fff', padding: `${VPAD} 0` }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${PAD}` }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <Label text="Got Questions?" />
            <H2>FREQUENTLY ASKED QUESTIONS</H2>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <ProductFAQ productSlug={product.slug} productName={product.name} />
          </div>
        </div>
      </div>

      {/* ──── MOBILE STICKY CTA ──── */}
      <div className="mob-cta" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: '2px solid #E5E7EB', padding: '10px 12px', zIndex: 500, boxShadow: '0 -4px 16px rgba(0,0,0,0.08)', display: 'none' }}>
        <div style={{ display: 'flex', gap: 8, maxWidth: 600, margin: '0 auto' }}>
          {priced ? (
            <>
              <button onClick={doAdd} disabled={adding} style={{ flex: '0 0 auto', padding: '13px 14px', background: '#fff', color: DARK, border: `2px solid ${ACC}`, borderRadius: 10, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}>
                {adding ? '✓ ADDED' : 'ADD TO CART'}
              </button>
              <button onClick={doBuy} disabled={buying} style={{ flex: 1, background: DARK, color: '#fff', padding: '13px 12px', border: 'none', borderRadius: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontFamily: 'inherit', boxShadow: '0 4px 14px rgba(15,17,23,0.25)', minWidth: 0 }}>
                <Zap style={{ width: 13, height: 13, flexShrink: 0 }} />
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {buying ? 'PROCESSING...' : `BUY NOW — ₹${product.price.toLocaleString('en-IN')}`}
                </span>
              </button>
            </>
          ) : (
            <>
              <a href="tel:+919891521090" style={{ flex: '0 0 auto', padding: '13px 16px', background: '#fff', color: DARK, border: `2px solid ${ACC}`, borderRadius: 10, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}>
                <Phone style={{ width: 13, height: 13 }} /> CALL
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{ flex: 1, background: DARK, color: '#fff', padding: '13px 12px', border: 'none', borderRadius: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, boxShadow: '0 4px 14px rgba(15,17,23,0.25)', minWidth: 0 }}>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>ENQUIRE ON WHATSAPP</span>
              </a>
            </>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-wrap        { grid-template-columns: 1fr !important; }
          .hero-gallery     { position: relative !important; top: auto !important; }
          .warranty-grid    { grid-template-columns: 1fr !important; }
          .spec-table-grid  { grid-template-columns: 1fr !important; }
          .stats-row1, .stats-row2 { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .mob-cta        { display: block !important; }
          .benefits-grid  { grid-template-columns: 1fr 1fr !important; }
          .box-grid       { grid-template-columns: repeat(2, 1fr) !important; }
          .trust-grid     { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .benefits-grid  { grid-template-columns: 1fr !important; }
          .box-grid       { grid-template-columns: 1fr !important; }
          .trust-grid     { grid-template-columns: 1fr !important; }
          .stats-row1, .stats-row2 { grid-template-columns: 1fr !important; }
          .stat-cell { border-right: none !important; }
          .stats-row1 .stat-cell + .stat-cell { border-top: 1px solid rgba(255,255,255,0.1); }
        }
      `}</style>
    </div>
  );
}
