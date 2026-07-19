'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { ShieldCheck, Truck, RotateCcw, Package, Zap, ChevronRight, Star } from 'lucide-react';
import { useCart } from '../../../../lib/cart';
import { toast } from '../../../../hooks/use-toast';

const ProductReviews = dynamic(() => import('../../../../components/ProductReviews'), { ssr: false });
const ProductFAQ = dynamic(() => import('../../../../components/ProductFaq'), { ssr: false });

const ACC  = '#2D3748';
const GREY = '#6B7280';
const DARK = '#0F1117';
const BG   = '#F8F9FA';

const PRICE = 95000;
const MRP   = 149000;
const DISC  = Math.round(((MRP - PRICE) / MRP) * 100);
const PID   = 4;
const PNAME = 'Longfian JAY-1000P';
const PSLUG = 'longfian-jay-1000p-portable-oxygen-concentrator';

const GALLERY = [
  'https://drive.google.com/thumbnail?id=1PMlRVzIuLxUaFu6tC-GPJL8H8tolqD0T&sz=w2000',
  'https://drive.google.com/thumbnail?id=13InsWquc7HhRHUt2P9A0gVgpvviOUsP6&sz=w2000',
  'https://drive.google.com/thumbnail?id=17wYaPDQbETH7AFSaZUxe_lR-HUYSdIPz&sz=w2000',
  'https://drive.google.com/thumbnail?id=1werhzIak53KRDx7bLagADW-IAFIgVaQ1&sz=w2000',
];

const MORE_VIDEOS = [
  { id: '1w-PUSdr2Sh8v6HkcsH800y1tNmC4fBwr', title: 'Longfian Manufacturing Facility' },
  { id: '1xxsGDkQqq2bPZ8ToXjGDcuGwwEdhTM8-', title: 'Production Line Tour' },
  { id: '1O3R2ywXX-LyZf3Wv-akB_1druXA3j-tJ', title: 'Longfian JAY-1000P in Action' },
  { id: '13ywqxTXsAkkDtDM1CT1eLchspSfpel89', title: 'Product Showcase' },
  { id: '1hLbQBO8PV8AfX9CdRHyb7kYok1AoPPdF', title: 'Device Overview' },
  { id: '1jWb-4XvHfzsCSDmhJ7D_op54v-KPd4-v', title: 'Usage Demonstration' },
  { id: '11jv5KOMBLB0QR077pPHOJzK9ZCzG9GxS', title: 'Longfian JAY-1000P in Action' },
  { id: '1GEW--Dc2G_98oxHJbQbkTe6posEk0VgO', title: 'Feature Highlight' },
  { id: '1ZlfHxf-QVVRQp5E1cFg7EoqKNlxEAc6B', title: 'Longfian JAY-1000P Overview' },
];

/* ─── primitives ─────────────────────────────────────────────── */

function StarRow({ r }: { r: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <Star key={i} style={{ width: 14, height: 14, fill: i <= Math.round(r) ? '#F59E0B' : '#E5E7EB', color: i <= Math.round(r) ? '#F59E0B' : '#E5E7EB' }} />
      ))}
    </div>
  );
}

function Gallery() {
  const [main, setMain] = useState(0);
  return (
    <div>
      <div style={{ position: 'relative', width: '100%', paddingBottom: '100%', background: '#fff', borderRadius: 14, overflow: 'hidden', border: '2px solid #E5E7EB', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
        <div style={{ position: 'absolute', inset: 8 }}>
          <Image src={GALLERY[main]} alt={PNAME} fill style={{ objectFit: 'contain' }} sizes="(max-width:768px) 100vw, 50vw" priority />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginTop: 10 }}>
        {GALLERY.map((src, i) => (
          <button key={i} onClick={() => setMain(i)} style={{ display: 'block', position: 'relative', width: '100%', paddingTop: '100%', border: `2px solid ${i === main ? ACC : '#E5E7EB'}`, borderRadius: 8, overflow: 'hidden', opacity: i === main ? 1 : 0.6, cursor: 'pointer', background: '#fff', transition: 'all 0.2s' }}>
            <div style={{ position: 'absolute', inset: 4 }}>
              <Image src={src} alt="" fill style={{ objectFit: 'contain' }} sizes="120px" />
            </div>
          </button>
        ))}
      </div>
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

/* clickable video thumbnail — opens modal on click */
function VideoThumb({ title, dark, onPlay }: { id: string; title: string; dark?: boolean; onPlay: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onPlay}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'block', width: '100%', position: 'relative', paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: '56.25%', borderRadius: 12, overflow: 'hidden', border: dark ? '1.5px solid rgba(255,255,255,0.12)' : '1.5px solid #E5E7EB', background: '#1a1f2e', cursor: 'pointer' }}
      aria-label={`Play ${title}`}
    >
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
        {/* play circle */}
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: hovered ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.12)', border: '2px solid rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: hovered ? 'scale(1.12)' : 'scale(1)', transition: 'transform 0.18s ease, background 0.18s ease', backdropFilter: 'blur(4px)' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 3 }}>
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
        {/* title */}
        <p style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.7)', textAlign: 'center', padding: '0 16px', lineHeight: 1.4, letterSpacing: '0.02em' }}>{title}</p>
      </div>
    </button>
  );
}

const W    = 1280;
const PAD  = 'clamp(16px,4vw,32px)';
const VPAD = 'clamp(48px,8vw,80px)';

/* ─── page ──────────────────────────────────────────────────── */

export default function Jay1000PClient() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [adding, setAdding] = useState(false);
  const [buying, setBuying] = useState(false);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const cartItem = {
    id: PID, name: PNAME,
    price: PRICE.toString(), regular_price: MRP.toString(),
    images: GALLERY.map(src => ({ src })),
  };

  const doAdd = () => {
    setAdding(true);
    addToCart(cartItem);
    toast({ title: 'Added to Cart', description: `${PNAME} added to your cart.` });
    setTimeout(() => setAdding(false), 600);
  };
  const doBuy = () => { setBuying(true); addToCart(cartItem); router.push('/checkout'); };

  const play = (id: string) => window.open(`https://drive.google.com/file/d/${id}/view`, '_blank');

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
            <span style={{ color: DARK }}>Longfian JAY-1000P</span>
          </nav>
        </div>
      </div>

      {/* ──── HERO ──── */}
      <section style={{ background: '#fff', paddingBottom: 'clamp(32px,5vw,56px)' }}>
        <div className="hero-wrap" style={{ maxWidth: W, margin: '0 auto', padding: `clamp(24px,5vw,40px) ${PAD} 0`, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px,5vw,64px)', alignItems: 'start' }}>

          {/* sticky gallery */}
          <div className="hero-gallery" style={{ position: 'sticky', top: 88, alignSelf: 'start' }}>
            <Gallery />
          </div>

          {/* product info */}
          <div>
            {/* badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
              {[
                { label: 'Longfian Portable Oxygen Concentrator', dark: false },
                { label: 'Flight Safe · FAA Approved',             dark: true  },
              ].map((b: { label: string; dark?: boolean }, i) => (
                <span key={i} style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 4, background: b.dark ? ACC : '#F3F4F6', color: b.dark ? '#fff' : GREY, border: !b.dark ? `1.5px solid #E5E7EB` : 'none' }}>
                  {b.label}
                </span>
              ))}
            </div>

            <h1 style={{ fontSize: 'clamp(26px,3.5vw,48px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1.05, marginBottom: 14 }}>
              Longfian JAY-1000P<br />
              <span style={{ fontSize: 'clamp(14px,1.8vw,20px)', fontWeight: 500, color: GREY, letterSpacing: 0 }}>
                Portable Oxygen Concentrator
              </span>
            </h1>

            {/* reviews — #3: 623 */}
            <button onClick={() => reviewsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <StarRow r={4.9} />
              <span style={{ fontSize: 12, color: 'rgba(15,17,23,0.5)', borderBottom: '1px solid rgba(15,17,23,0.2)' }}>
                4.9 · 623 Verified Reviews
              </span>
            </button>

            {/* ── KEY HIGHLIGHTS BOX ── */}
            <div style={{ marginBottom: 4, border: '2.5px solid #2D3748', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 16px rgba(15,17,23,0.10)' }}>
              <div style={{ background: '#EAECF0', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  { icon: '✈️', title: 'FAA Approved',                    sub: 'Can be taken on any flight' },
                  { icon: '⚖️', title: '1.98 Kg',                        sub: 'Ultra Light Weight' },
                  { icon: '🔋', title: '2 Batteries Included in the Box', sub: null },
                ].map((h, i, arr) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '11px 2px', borderBottom: i < arr.length - 1 ? '1px solid rgba(45,55,72,0.12)' : 'none' }}>
                    <span style={{ fontSize: 18, flexShrink: 0, width: 26, textAlign: 'center', marginTop: 1 }}>{h.icon}</span>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: DARK, lineHeight: 1.25 }}>{h.title}</p>
                      {h.sub && <p style={{ fontSize: 12, color: GREY, lineHeight: 1.4, marginTop: 2 }}>{h.sub}</p>}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ background: '#D1D5DB', padding: '10px 14px', borderTop: '1.5px solid rgba(45,55,72,0.15)' }}>
                {[
                  '*CE, ISO, FDA, CDSCO and FAA approved — permitted on all commercial flights worldwide',
                  '*Pulse dose model with settings from 1 to 5 as per patient\'s requirement',
                  '*93% ± 3% oxygen concentration at all flow settings',
                  '*Only 1.98 kg — lighter than most laptops, fits in the air-vented carry bag',
                  '*Comes with car charger, 2 spare filters, all standard accessories and 2 rechargeable batteries',
                ].map((line, i) => (
                  <p key={i} style={{ fontSize: 11, color: '#374151', lineHeight: 1.65, marginBottom: i < 4 ? 2 : 0 }}>{line}</p>
                ))}
              </div>
            </div>

            {/* #5 — tagline below box */}
            <p style={{ fontSize: 13, fontWeight: 600, color: ACC, lineHeight: 1.6, marginBottom: 20, marginTop: 12 }}>
              Lightest and most affordable FAA (flight) approved portable oxygen concentrator available in India
            </p>

            {/* price */}
            <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '2px solid #E5E7EB' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
                <span style={{ fontSize: 44, fontWeight: 900, color: DARK, letterSpacing: '-0.02em' }}>₹{PRICE.toLocaleString('en-IN')}</span>
                <span style={{ fontSize: 16, color: 'rgba(15,17,23,0.35)', textDecoration: 'line-through' }}>₹{MRP.toLocaleString('en-IN')}</span>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 4, background: DARK, color: '#fff' }}>
                  {DISC}% OFF
                </span>
              </div>
              <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, color: ACC, background: 'rgba(45,55,72,0.08)', border: `1.5px solid ${ACC}`, borderRadius: 5, padding: '4px 10px', marginBottom: 6, letterSpacing: '0.04em' }}>
                With Double Batteries
              </span>
              <p style={{ fontSize: 11, color: GREY, fontWeight: 500, letterSpacing: '0.04em' }}>
                Incl. of all taxes &nbsp;·&nbsp; MRP ₹{MRP.toLocaleString('en-IN')} &nbsp;·&nbsp; Save ₹{(MRP - PRICE).toLocaleString('en-IN')}
              </p>
            </div>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
              <button onClick={doAdd} disabled={adding} style={{ flex: 1, padding: '14px 20px', background: '#fff', color: DARK, border: `2px solid ${ACC}`, borderRadius: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s' }}>
                {adding ? 'ADDED ✓' : 'ADD TO CART'}
              </button>
              <button onClick={doBuy} disabled={buying} style={{ flex: 1, padding: '14px 20px', background: DARK, color: '#fff', border: 'none', borderRadius: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: 'inherit', boxShadow: '0 4px 14px rgba(15,17,23,0.25)', transition: 'all 0.15s' }}>
                <Zap style={{ width: 14, height: 14 }} />
                {buying ? 'PROCESSING...' : 'BUY NOW'}
              </button>
            </div>

            {/* #6 — trust grid updated */}
            <div className="trust-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {[
                { icon: Truck,       title: 'Free Delivery',     sub: 'All over India' },
                { icon: Package,     title: 'Delivery Time',     sub: '3–5 business days' },
                { icon: RotateCcw,   title: 'Easy Returns',      sub: '7 Days Return Policy' },
                { icon: ShieldCheck, title: '2-Year Warranty',   sub: '(1 Year on Batteries and Sieve Beds)' },
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

      {/* ──── STATS STRIP — #7 ──── */}
      <section style={{ background: DARK, padding: 'clamp(28px,5vw,40px) 0' }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${PAD}` }}>
          {/* row 1: experience + manufacturer — side by side */}
          <div className="stats-row1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: 0 }}>
            {[
              { val: '25+',  lbl: 'Years of Experience',  sub: 'Longfian — established 1999' },
              { val: '#1',   lbl: 'Oxygen Concentrator Manufacturer in the World', sub: "Longfian is the world's biggest manufacturer" },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: 'clamp(16px,3vw,28px) clamp(12px,2vw,24px)', borderRight: i === 0 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <p style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 6 }}>{s.val}</p>
                <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3 }}>{s.lbl}</p>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{s.sub}</p>
              </div>
            ))}
          </div>
          {/* row 2: oxygen purity + noise */}
          <div className="stats-row2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
            {[
              { val: '93% ± 3%', lbl: 'Oxygen Purity',  sub: 'Medical-grade PSA technology' },
              { val: '≤48 dB',   lbl: 'Noise Level',     sub: 'Quieter than a conversation' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: 'clamp(16px,3vw,28px) clamp(12px,2vw,24px)', borderRight: i === 0 ? '1px solid rgba(255,255,255,0.1)' : 'none', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ fontSize: 'clamp(22px,3vw,40px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 6 }}>{s.val}</p>
                <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3 }}>{s.lbl}</p>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{s.sub}</p>
              </div>
            ))}
          </div>
          {/* row 3: service centres */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', padding: 'clamp(16px,3vw,24px)' }}>
            <p style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 6 }}>15+</p>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3 }}>Service Centres All Over India</p>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>Pan-India support by Sachdeva Medline</p>
          </div>
        </div>
      </section>

      {/* ──── BENEFITS — #8-13 ──── */}
      <section style={{ background: '#fff', padding: `${VPAD} 0` }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${PAD}` }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <Label text="Key Benefits" />
            {/* #8: Longfian added */}
            <H2>WHY CHOOSE THE LONGFIAN JAY-1000P?</H2>
          </div>
          <div className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>

            <BenefitCard>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: DARK, color: '#fff', padding: '5px 12px', borderRadius: 5, fontSize: 12, fontWeight: 900, letterSpacing: '0.08em', marginBottom: 12 }}>LONGFIAN</div>
              <h3 style={{ fontSize: 15, fontWeight: 800, color: DARK, marginBottom: 6 }}>Over 25 Years of Experience</h3>
              <p style={{ fontSize: 13, color: GREY, lineHeight: 1.7 }}>Longfian is the world&apos;s biggest manufacturer for oxygen concentrators with decades of experience.</p>
            </BenefitCard>

            <BenefitCard>
              <div style={{ fontSize: 28, marginBottom: 12 }}>✈️</div>
              <h3 style={{ fontSize: 15, fontWeight: 800, color: DARK, marginBottom: 6 }}>Fly Anywhere</h3>
              <p style={{ fontSize: 13, color: GREY, lineHeight: 1.7 }}>FAA (flight) approved for all commercial airlines worldwide.</p>
            </BenefitCard>

            <BenefitCard>
              <div style={{ fontSize: 28, marginBottom: 12 }}>⚖️</div>
              <h3 style={{ fontSize: 15, fontWeight: 800, color: DARK, marginBottom: 4 }}>Only 1.98 Kg</h3>
              <p style={{ fontSize: 12, fontWeight: 600, color: ACC, marginBottom: 6 }}>Ultra Light Weight</p>
              <p style={{ fontSize: 13, color: GREY, lineHeight: 1.7 }}>Comes with shoulder carry bag for ease in carrying during travel.</p>
            </BenefitCard>

            <BenefitCard>
              <div style={{ fontSize: 28, marginBottom: 12 }}>🔋</div>
              <h3 style={{ fontSize: 15, fontWeight: 800, color: DARK, marginBottom: 6 }}>Upto 10 Hours Battery Backup</h3>
              <p style={{ fontSize: 13, color: GREY, lineHeight: 1.7 }}>Comes with 2 lithium ion rechargeable batteries.</p>
              <p style={{ fontSize: 11, color: GREY, lineHeight: 1.5, marginTop: 6, fontStyle: 'italic' }}>(Battery backup time varies as per flow setting)</p>
            </BenefitCard>

            <BenefitCard>
              <div style={{ fontSize: 28, marginBottom: 12 }}>💧</div>
              <h3 style={{ fontSize: 15, fontWeight: 800, color: DARK, marginBottom: 6 }}>93% ± 3% Oxygen Purity</h3>
              <p style={{ fontSize: 13, color: GREY, lineHeight: 1.7 }}>Advanced PSA Molecular sieve technology for above 93% oxygen concentration in every breath, every time.</p>
            </BenefitCard>

            <BenefitCard>
              <div style={{ fontSize: 28, marginBottom: 12 }}>🔇</div>
              <h3 style={{ fontSize: 15, fontWeight: 800, color: DARK, marginBottom: 6 }}>Whisper Quiet</h3>
              <p style={{ fontSize: 13, color: GREY, lineHeight: 1.7 }}>At under 48 dB — quieter than a normal conversation / library.</p>
            </BenefitCard>

            <BenefitCard>
              <div style={{ fontSize: 28, marginBottom: 12 }}>📊</div>
              <h3 style={{ fontSize: 15, fontWeight: 800, color: DARK, marginBottom: 6 }}>Smart LCD Display</h3>
              <p style={{ fontSize: 13, color: GREY, lineHeight: 1.7 }}>Shows real-time battery level, flow setting and running hours. Large tactile buttons — no complicated menus.</p>
            </BenefitCard>

            <BenefitCard>
              <div style={{ fontSize: 28, marginBottom: 12 }}>🏅</div>
              <h3 style={{ fontSize: 15, fontWeight: 800, color: DARK, marginBottom: 6 }}>Globally Certified</h3>
              <p style={{ fontSize: 13, color: GREY, lineHeight: 1.7 }}>CE, ISO, CDSCO, US FDA and FAA approvals — trusted by healthcare professionals worldwide.</p>
            </BenefitCard>

            <BenefitCard>
              <div style={{ fontSize: 28, marginBottom: 12 }}>🔔</div>
              <h3 style={{ fontSize: 15, fontWeight: 800, color: DARK, marginBottom: 6 }}>Safety Alarms</h3>
              <p style={{ fontSize: 13, color: GREY, lineHeight: 1.7 }}>Audio and visual alarms for low battery, low oxygen concentration, high / low pressure and other issues.</p>
            </BenefitCard>

          </div>
        </div>
      </section>

      {/* ──── BATTERY BACKUP TABLE ──── */}
      <section style={{ background: DARK, padding: `${VPAD} 0` }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: `0 ${PAD}` }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <Label text="Battery Performance" />
            <H2 light>BATTERY BACKUP TIME</H2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
              Backup time varies as per the pulse flow setting. Double battery (2 batteries included in the box).
            </p>
          </div>
          <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.12)' }}>
            {/* header row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: ACC }}>
              {['Pulse Setting', 'Single Battery', 'Double Battery'].map((h, i) => (
                <div key={i} style={{ padding: '13px 18px', textAlign: 'center' }}>
                  <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)' }}>{h}</span>
                </div>
              ))}
            </div>
            {[
              ['1', '5 h 00 min', '10 h 00 min'],
              ['2', '3 h 50 min', '7 h 40 min'],
              ['3', '3 h 00 min', '6 h 00 min'],
              ['4', '2 h 00 min', '4 h 00 min'],
              ['5', '1 h 40 min', '3 h 20 min'],
            ].map(([setting, single, double_], i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: i % 2 === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ padding: '14px 18px', textAlign: 'center' }}>
                  <span style={{ fontSize: 15, fontWeight: 900, color: '#fff' }}>{setting}</span>
                </div>
                <div style={{ padding: '14px 18px', textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.07)' }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>{single}</span>
                </div>
                <div style={{ padding: '14px 18px', textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.07)' }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{double_}</span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginTop: 14, lineHeight: 1.6 }}>
            *Values are approximate and may vary based on usage pattern and battery age.
          </p>
        </div>
      </section>

      {/* ──── VIDEO 1: PRODUCT OVERVIEW ──── */}
      <section style={{ background: '#111827', padding: `${VPAD} 0` }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: `0 ${PAD}` }}>
          <Label text="Product Overview" />
          <H2 light>Longfian JAY-1000P — See It In Action</H2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32, maxWidth: 520 }}>
            The complete product video — design, features, and how the JAY-1000P fits seamlessly into daily life for travel, COPD therapy, and more.
          </p>
          <VideoThumb id="15m-J_sUB_MMHmnJSG399tm6tYW9oJZCj" title="JAY-1000P Product Video HD" dark onPlay={() => play('15m-J_sUB_MMHmnJSG399tm6tYW9oJZCj')} />
        </div>
      </section>

      {/* ──── SPECIFICATIONS ──── */}
      <section style={{ background: DARK, padding: `${VPAD} 0` }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${PAD}` }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <Label text="Technical Details" />
            <H2 light>TECHNICAL SPECIFICATIONS</H2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', maxWidth: 480, margin: '0 auto' }}>
              Every number that matters — tested, certified, and verified by international regulators.
            </p>
          </div>

          {/* categorised spec table */}
          <div className="spec-table-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <div style={{ background: ACC, borderRadius: '10px 10px 0 0', padding: '10px 18px' }}>
                <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>Performance</span>
              </div>
              {[
                ['Oxygen Purity',   '93% ± 3%'],
                ['Flow Settings',   '1–5 Levels (Pulse Dose)'],
                ['Technology',      'PSA Molecular Sieve'],
                ['Noise Level',     '≤ 48 dB'],
              ].map(([lbl, val], i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '13px 18px', background: i % 2 === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)', borderLeft: '1px solid rgba(255,255,255,0.06)', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.45)', flexShrink: 0 }}>{lbl}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#fff', textAlign: 'right' }}>{val}</span>
                </div>
              ))}
              <div style={{ background: ACC, padding: '10px 18px', marginTop: 6 }}>
                <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>Physical</span>
              </div>
              {[
                ['Weight',      '1.98 kg (single battery)'],
                ['Dimensions',  '183 × 86 × 199 mm'],
                ['Display',     'LCD — battery, flow, hours'],
                ['Carry Bag',   'Shoulder + backpack, air vented'],
              ].map(([lbl, val], i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '13px 18px', background: i % 2 === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)', borderLeft: '1px solid rgba(255,255,255,0.06)', borderRight: '1px solid rgba(255,255,255,0.06)', borderBottom: i === 3 ? '1px solid rgba(255,255,255,0.06)' : 'none', borderRadius: i === 3 ? '0 0 10px 10px' : 0 }}>
                  <span style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.45)', flexShrink: 0 }}>{lbl}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#fff', textAlign: 'right' }}>{val}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <div style={{ background: ACC, borderRadius: '10px 10px 0 0', padding: '10px 18px' }}>
                <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>Battery</span>
              </div>
              {[
                ['Batteries in Box',    '2 batteries included'],
                ['Single Battery Life', '5.5 hrs (Flow 1) / 3 hrs (Flow 2)'],
                ['Double Battery Life', 'Up to 10 hrs at Flow Setting 1'],
                ['Charge Time',         'Approx. 2 hours (per battery)'],
              ].map(([lbl, val], i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '13px 18px', background: i % 2 === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)', borderLeft: '1px solid rgba(255,255,255,0.06)', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.45)', flexShrink: 0 }}>{lbl}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#fff', textAlign: 'right' }}>{val}</span>
                </div>
              ))}
              <div style={{ background: ACC, padding: '10px 18px', marginTop: 6 }}>
                <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>Compliance & Support</span>
              </div>
              {[
                ['Certifications',    'CE · ISO · FDA · CDSCO · FAA'],
                ['Warranty',          '2 Years (1 Year on Batteries and Sieve Beds)'],
                ['Manufacturer',      'Longfian Scitech Co., Ltd, China'],
                ['India Partner',     'Sachdeva Medline — Exclusive Importer'],
              ].map(([lbl, val], i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '13px 18px', background: i % 2 === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)', borderLeft: '1px solid rgba(255,255,255,0.06)', borderRight: '1px solid rgba(255,255,255,0.06)', borderBottom: i === 3 ? '1px solid rgba(255,255,255,0.06)' : 'none', borderRadius: i === 3 ? '0 0 10px 10px' : 0 }}>
                  <span style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.45)', flexShrink: 0 }}>{lbl}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#fff', textAlign: 'right' }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──── YOUTUBE VIDEO ──── */}
      <section style={{ background: DARK, padding: `${VPAD} 0` }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: `0 ${PAD}` }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <Label text="Official Product Video" />
            <H2 light>Longfian JAY-1000P — Watch It Here</H2>
          </div>
          <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: 14, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}>
            <iframe
              src="https://www.youtube.com/embed/aC2HtnMiPw0"
              title="Longfian JAY-1000P — Official Product Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ──── VIDEO 2: MEDICA 2025 ──── */}
      <section style={{ background: '#fff', padding: `${VPAD} 0` }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: `0 ${PAD}` }}>
          <Label text="International Certification" />
          <H2>MEDICA 2025 — FDA & FAA Certified Demo</H2>
          <p style={{ fontSize: 14, color: GREY, lineHeight: 1.8, marginBottom: 32, maxWidth: 560 }}>
            Longfian demonstrated the JAY-1000P at MEDICA 2025 — the world&apos;s largest medical trade fair. Watch the live FDA and FAA certified demonstration with international healthcare professionals.
          </p>
          <VideoThumb id="1qUxGfQL_dFZ145J1sUh-_DfmA45Oao0N" title="MEDICA 2025 — FDA & FAA Approved Demo" onPlay={() => play('1qUxGfQL_dFZ145J1sUh-_DfmA45Oao0N')} />
        </div>
      </section>

      {/* ──── VIDEOS 3 & 4 ──── */}
      <section style={{ background: '#111827', padding: `${VPAD} 0` }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${PAD}` }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <Label text="How It Works" />
            <H2 light>WATCH IT IN DETAIL</H2>
          </div>
          <div className="video-pair" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
            <div>
              <h3 style={{ fontSize: 'clamp(15px,2vw,20px)', fontWeight: 800, color: '#fff', marginBottom: 10, lineHeight: 1.3 }}>Pulse Mode Demonstration</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 16, lineHeight: 1.65 }}>
                See how the JAY-1000P synchronises oxygen delivery to your breathing — oxygen only on inhalation, zero waste, maximum efficiency.
              </p>
              <VideoThumb id="19Jpj6asBolaWH_fY5kDd7C5KyOBWCYGV" title="Pulse Mode Demonstration" dark onPlay={() => play('19Jpj6asBolaWH_fY5kDd7C5KyOBWCYGV')} />
            </div>
            <div>
              <h3 style={{ fontSize: 'clamp(15px,2vw,20px)', fontWeight: 800, color: '#fff', marginBottom: 10, lineHeight: 1.3 }}>Filter Replacement Guide</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 16, lineHeight: 1.65 }}>
                Easy DIY maintenance at home — replace the air filter yourself in under 2 minutes. No technician needed, no tools required.
              </p>
              <VideoThumb id="1WRGiADRDTkPlGWGy_6_5KrGbdYWU-OrL" title="Filter Replacement Guide" dark onPlay={() => play('1WRGiADRDTkPlGWGy_6_5KrGbdYWU-OrL')} />
            </div>
          </div>
        </div>
      </section>

      {/* ──── CERTIFICATIONS ──── */}
      <section style={{ background: '#fff', padding: `${VPAD} 0` }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${PAD}` }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <Label text="Globally Trusted" />
            <H2>CERTIFIED EVERYWHERE IT MATTERS</H2>
          </div>
          <div className="cert-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
            {[
              { cert: 'CE',    name: 'European Conformity', desc: 'Meets EU safety, health & environmental protection standards for medical devices.' },
              { cert: 'ISO',   name: 'ISO 9001',            desc: 'International quality management system — consistent, reliable manufacturing.' },
              { cert: 'FDA',   name: 'US FDA Cleared',      desc: '510(k) cleared by the US Food & Drug Administration (K243833).' },
              { cert: 'CDSCO', name: 'India CDSCO',         desc: "Approved by India's Central Drugs Standard Control Organisation for import & sale." },
              { cert: 'FAA',   name: 'Flight Approved',     desc: 'Meets FAA standards for Portable Oxygen Concentrators — permitted on all commercial flights.' },
            ].map((c, i) => (
              <div key={i} style={{ textAlign: 'center', padding: 'clamp(16px,2vw,24px) clamp(12px,1.5vw,16px)', background: BG, borderRadius: 12, border: '1.5px solid #E5E7EB' }}>
                <div style={{ display: 'inline-block', background: ACC, color: '#fff', fontSize: 11, fontWeight: 900, letterSpacing: '0.12em', padding: '5px 14px', borderRadius: 6, marginBottom: 12 }}>{c.cert}</div>
                <p style={{ fontSize: 13, fontWeight: 800, color: DARK, marginBottom: 6 }}>{c.name}</p>
                <p style={{ fontSize: 11, color: GREY, lineHeight: 1.65 }}>{c.desc}</p>
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
              2-Year Warranty<br />Backed by Sachdeva Medline
            </h2>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>
              As the exclusive importer and authorised service partner, we back every JAY-1000P with a comprehensive warranty — so you buy with total confidence.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { period: '2 Years', item: 'Main Concentrator Unit',  note: 'Full parts & service coverage' },
              { period: '1 Year',  item: 'Rechargeable Batteries',  note: 'Both batteries included in box' },
              { period: '1 Year',  item: 'Molecular Sieve Beds',    note: 'Core filtration component' },
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
            {[
              { icon: '🔬', item: 'JAY-1000P Unit',       desc: 'The main concentrator device' },
              { icon: '🔋', item: '2 Batteries',           desc: 'Both batteries included' },
              { icon: '👜', item: 'Carry Bag',             desc: 'Shoulder & backpack, air vented' },
              { icon: '🔌', item: 'AC Power Adapter',      desc: 'Standard household charger' },
              { icon: '🚗', item: 'Car Charger',           desc: 'DC adapter for vehicle use' },
              { icon: '👃', item: 'Nasal Cannula',         desc: 'For oxygen delivery' },
              { icon: '🔧', item: '2 Spare Filters',       desc: 'Replacement air filters' },
              { icon: '📋', item: 'Warranty Card',         desc: '2-Year Warranty by Sachdeva Medline' },
            ].map((b, i) => (
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

      {/* ──── MORE VIDEOS ──── */}
      <section style={{ background: '#fff', padding: `${VPAD} 0` }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${PAD}` }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <Label text="More Content" />
            <H2>MORE VIDEOS</H2>
          </div>
          <div className="more-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {MORE_VIDEOS.map((v, i) => (
              <div key={i}>
                <h3 style={{ fontSize: 13, fontWeight: 700, color: DARK, marginBottom: 10, lineHeight: 1.4 }}>{v.title}</h3>
                <VideoThumb id={v.id} title={v.title} onPlay={() => play(v.id)} />
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
          <ProductReviews productId={PID} productName={PNAME} />
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
            <ProductFAQ productSlug={PSLUG} productName={PNAME} />
          </div>
        </div>
      </div>

      {/* ──── MOBILE STICKY CTA ──── */}
      <div className="mob-cta" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: '2px solid #E5E7EB', padding: '10px 12px', zIndex: 500, boxShadow: '0 -4px 16px rgba(0,0,0,0.08)', display: 'none' }}>
        <div style={{ display: 'flex', gap: 8, maxWidth: 600, margin: '0 auto' }}>
          <button onClick={doAdd} disabled={adding} style={{ flex: '0 0 auto', padding: '13px 14px', background: '#fff', color: DARK, border: `2px solid ${ACC}`, borderRadius: 10, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}>
            {adding ? '✓ ADDED' : 'ADD TO CART'}
          </button>
          <button onClick={doBuy} disabled={buying} style={{ flex: 1, background: DARK, color: '#fff', padding: '13px 12px', border: 'none', borderRadius: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontFamily: 'inherit', boxShadow: '0 4px 14px rgba(15,17,23,0.25)', minWidth: 0 }}>
            <Zap style={{ width: 13, height: 13, flexShrink: 0 }} />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {buying ? 'PROCESSING...' : `BUY NOW — ₹${PRICE.toLocaleString('en-IN')}`}
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-wrap        { grid-template-columns: 1fr !important; }
          .hero-gallery     { position: relative !important; top: auto !important; }
          .cert-grid        { grid-template-columns: repeat(3, 1fr) !important; }
          .video-pair       { grid-template-columns: 1fr !important; gap: 40px !important; }
          .more-grid        { grid-template-columns: 1fr 1fr !important; }
          .warranty-grid    { grid-template-columns: 1fr !important; }
          .spec-table-grid  { grid-template-columns: 1fr !important; }
          .stats-row1, .stats-row2 { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .mob-cta           { display: block !important; }
          .benefits-grid     { grid-template-columns: 1fr 1fr !important; }
          .box-grid          { grid-template-columns: repeat(2, 1fr) !important; }
          .trust-grid        { grid-template-columns: 1fr 1fr !important; }
          .more-grid         { grid-template-columns: 1fr !important; }
          .highlights-grid   { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .benefits-grid  { grid-template-columns: 1fr !important; }
          .cert-grid      { grid-template-columns: repeat(2, 1fr) !important; }
          .box-grid       { grid-template-columns: 1fr !important; }
          .trust-grid     { grid-template-columns: 1fr !important; }
          .stats-row1, .stats-row2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
