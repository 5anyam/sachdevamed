'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Check, ShieldCheck, Truck, RotateCcw, Package, Zap, ChevronRight, Star, Award } from 'lucide-react';
import { useCart } from '../../../../lib/cart';
import { toast } from '../../../../hooks/use-toast';

const ProductReviews = dynamic(() => import('../../../../components/ProductReviews'), { ssr: false });
const ProductFAQ = dynamic(() => import('../../../../components/ProductFaq'), { ssr: false });

// ── palette: grey/black, no green ──────────────────────────────
const ACC  = '#2D3748';   // dark slate — primary accent (replaces green)
const GREY = '#6B7280';   // medium grey — labels, borders
const DARK = '#0F1117';   // near-black — headings, body
const BG   = '#F8F9FA';   // neutral off-white background

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
const CREATIVE_1 = 'https://drive.google.com/thumbnail?id=1pqGeZ8S5x7jKljkdL4387r0hqV9_u9cG&sz=w2000';
const CREATIVE_2 = 'https://drive.google.com/thumbnail?id=1Ko3sVyiDCrpeqBlaXgzsAAOVww1YZfTC&sz=w2000';

const MORE_VIDEOS = [
  { id: '1w-PUSdr2Sh8v6HkcsH800y1tNmC4fBwr', title: 'Longfian Manufacturing Facility' },
  { id: '1xxsGDkQqq2bPZ8ToXjGDcuGwwEdhTM8-', title: 'Production Line Tour' },
  { id: '1O3R2ywXX-LyZf3Wv-akB_1druXA3j-tJ', title: 'JAY-1000P in Action' },
  { id: '13ywqxTXsAkkDtDM1CT1eLchspSfpel89', title: 'Product Showcase' },
  { id: '1hLbQBO8PV8AfX9CdRHyb7kYok1AoPPdF', title: 'Device Overview' },
  { id: '1jWb-4XvHfzsCSDmhJ7D_op54v-KPd4-v', title: 'Usage Demonstration' },
  { id: '11jv5KOMBLB0QR077pPHOJzK9ZCzG9GxS', title: 'Product in Action' },
  { id: '1GEW--Dc2G_98oxHJbQbkTe6posEk0VgO', title: 'Feature Highlight' },
  { id: '1ZlfHxf-QVVRQp5E1cFg7EoqKNlxEAc6B', title: 'JAY-1000P Overview' },
];

/* ─── reusable primitives ───────────────────────────────────── */

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
      {/* main image — wrapper div provides padding so image is never clipped */}
      <div style={{ position: 'relative', width: '100%', paddingBottom: '100%', background: '#fff', borderRadius: 14, overflow: 'hidden', border: '2px solid #E5E7EB', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
        <div style={{ position: 'absolute', inset: 8 }}>
          <Image
            src={GALLERY[main]}
            alt={PNAME}
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width:768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
      {/* thumbnails */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginTop: 10 }}>
        {GALLERY.map((src, i) => (
          <button
            key={i}
            onClick={() => setMain(i)}
            style={{ display: 'block', position: 'relative', width: '100%', paddingTop: '100%', border: `2px solid ${i === main ? ACC : '#E5E7EB'}`, borderRadius: 8, overflow: 'hidden', opacity: i === main ? 1 : 0.6, cursor: 'pointer', background: '#fff', transition: 'all 0.2s' }}
          >
            <div style={{ position: 'absolute', inset: 4 }}>
              <Image src={src} alt="" fill style={{ objectFit: 'contain' }} sizes="120px" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// eyebrow label — grey, no green
function Label({ text }: { text: string }) {
  return (
    <span style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: GREY, fontWeight: 700, display: 'block', marginBottom: 12 }}>
      ◆ {text}
    </span>
  );
}

// section heading — always black
function H2({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 style={{ fontSize: 'clamp(26px,4vw,46px)', fontWeight: 900, letterSpacing: '-0.02em', color: light ? '#fff' : DARK, lineHeight: 1.08, marginBottom: 24 }}>
      {children}
    </h2>
  );
}

function VideoEmbed({ id, title, dark }: { id: string; title: string; dark?: boolean }) {
  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 12, border: dark ? '2px solid rgba(255,255,255,0.08)' : '2px solid #E5E7EB', boxShadow: dark ? 'none' : '0 4px 20px rgba(0,0,0,0.08)' }}>
      <iframe
        src={`https://drive.google.com/file/d/${id}/preview`}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
        allow="autoplay; fullscreen; encrypted-media"
        allowFullScreen
        title={title}
        loading="lazy"
      />
    </div>
  );
}

const W    = 1280;
const PAD  = 'clamp(16px,4vw,32px)';
const VPAD = 'clamp(48px,8vw,80px)';

/* ─── page ──────────────────────────────────────────────────── */

export default function Jay1000PClient() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [adding, setAdding]  = useState(false);
  const [buying, setBuying]  = useState(false);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const cartItem = {
    id: PID,
    name: PNAME,
    price: PRICE.toString(),
    regular_price: MRP.toString(),
    images: GALLERY.map(src => ({ src })),
  };

  const doAdd = () => {
    setAdding(true);
    addToCart(cartItem);
    toast({ title: 'Added to Cart', description: `${PNAME} added to your cart.` });
    setTimeout(() => setAdding(false), 600);
  };
  const doBuy = () => { setBuying(true); addToCart(cartItem); router.push('/checkout'); };

  return (
    <div style={{ minHeight: '100vh', background: BG, overflowX: 'hidden', maxWidth: '100vw' }}>

      {/* ──── BREADCRUMB ──── */}
      <div style={{ borderBottom: '1px solid #E5E7EB', background: '#fff' }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `10px ${PAD}` }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(15,17,23,0.4)' }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <ChevronRight style={{ width: 12, height: 12 }} />
            <Link href="/shop" style={{ color: 'inherit', textDecoration: 'none' }}>Products</Link>
            <ChevronRight style={{ width: 12, height: 12 }} />
            <span style={{ color: DARK }}>JAY-1000P</span>
          </nav>
        </div>
      </div>

      {/* ──── HERO ──── */}
      <section style={{ background: '#fff', paddingBottom: 'clamp(32px,5vw,56px)' }}>
        <div
          className="hero-wrap"
          style={{ maxWidth: W, margin: '0 auto', padding: `clamp(24px,5vw,40px) ${PAD} 0`, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px,5vw,64px)', alignItems: 'start' }}
        >
          {/* Sticky gallery */}
          <div className="hero-gallery" style={{ position: 'sticky', top: 88, alignSelf: 'start' }}>
            <Gallery />
          </div>

          {/* Product info */}
          <div>
            {/* Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
              {[
                { label: 'Portable Oxygen Concentrator', dark: false },
                { label: 'Flight Safe · FAA Approved',  dark: true  },
                { label: `${DISC}% OFF`,                red:  true  },
              ].map((b: { label: string; dark?: boolean; red?: boolean }, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                    padding: '5px 12px', borderRadius: 4,
                    background: b.red ? '#E8175D' : b.dark ? ACC : '#F3F4F6',
                    color: (b.red || b.dark) ? '#fff' : GREY,
                    border: (!b.red && !b.dark) ? `1.5px solid #E5E7EB` : 'none',
                  }}
                >
                  {b.label}
                </span>
              ))}
            </div>

            {/* Exclusive partner line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <Award style={{ width: 14, height: 14, color: ACC, flexShrink: 0 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACC }}>
                Exclusive Partner &amp; Authorised Importer — Longfian Scitech, China
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(26px,3.5vw,48px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1.05, marginBottom: 14 }}>
              Longfian JAY-1000P<br />
              <span style={{ fontSize: 'clamp(14px,1.8vw,20px)', fontWeight: 500, color: GREY, letterSpacing: 0 }}>
                Portable Oxygen Concentrator
              </span>
            </h1>

            <button
              onClick={() => reviewsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <StarRow r={4.9} />
              <span style={{ fontSize: 12, color: 'rgba(15,17,23,0.5)', borderBottom: '1px solid rgba(15,17,23,0.2)' }}>
                4.9 · 47 Verified Reviews
              </span>
            </button>

            {/* KEY HIGHLIGHTS STRIP */}
            <div
              className="highlights-grid"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, marginBottom: 20, padding: '16px', background: BG, border: '1.5px solid #E5E7EB', borderRadius: 12 }}
            >
              {[
                { icon: '⏱', val: '11 Hrs',        lbl: 'Battery Backup (double battery)' },
                { icon: '✈️', val: 'FAA Approved',  lbl: 'Fly on any commercial airline' },
                { icon: '🔋', val: '2 Batteries',   lbl: 'Included in the box' },
                { icon: '⚖️', val: '1.98 kg',       lbl: 'Ultra-light — fits in carry bag' },
              ].map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>{h.icon}</span>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 800, color: DARK, lineHeight: 1.1 }}>{h.val}</p>
                    <p style={{ fontSize: 11, color: GREY, lineHeight: 1.4 }}>{h.lbl}</p>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 14, color: 'rgba(15,17,23,0.6)', lineHeight: 1.75, marginBottom: 20 }}>
              India&apos;s lightest portable oxygen concentrator — FDA cleared, FAA approved for flights, CDSCO registered for India. Comes with 2 batteries for up to 11 hours of uninterrupted oxygen therapy.
            </p>

            {/* Bullet benefits */}
            <div style={{ marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                'Only 1.98 kg — lighter than most laptops, fits in the air-vented carry bag',
                'FDA cleared & FAA approved — permitted on all commercial flights worldwide',
                'Comes with 2 batteries — up to 11 hours of use on a single charge cycle',
                'CDSCO approved for India — authorised by Sachdeva Medline since 1999',
              ].map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ width: 18, height: 18, background: '#F3F4F6', border: `1.5px solid ${ACC}`, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <Check style={{ width: 9, height: 9, color: ACC }} />
                  </span>
                  <span style={{ fontSize: 13, color: DARK, lineHeight: 1.6 }}>{b}</span>
                </div>
              ))}
            </div>

            {/* Price block */}
            <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '2px solid #E5E7EB' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 4 }}>
                <span style={{ fontSize: 44, fontWeight: 900, color: DARK, letterSpacing: '-0.02em' }}>
                  ₹{PRICE.toLocaleString('en-IN')}
                </span>
                <span style={{ fontSize: 16, color: 'rgba(15,17,23,0.35)', textDecoration: 'line-through' }}>
                  ₹{MRP.toLocaleString('en-IN')}
                </span>
              </div>
              <p style={{ fontSize: 11, color: GREY, fontWeight: 500, letterSpacing: '0.04em' }}>
                Incl. of all taxes &nbsp;·&nbsp; MRP ₹{MRP.toLocaleString('en-IN')} &nbsp;·&nbsp; Save ₹{(MRP - PRICE).toLocaleString('en-IN')} ({DISC}%)
              </p>
            </div>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
              <button
                onClick={doAdd}
                disabled={adding}
                style={{ flex: 1, padding: '14px 20px', background: '#fff', color: DARK, border: `2px solid ${ACC}`, borderRadius: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s' }}
              >
                {adding ? 'ADDED ✓' : 'ADD TO CART'}
              </button>
              <button
                onClick={doBuy}
                disabled={buying}
                style={{ flex: 1, padding: '14px 20px', background: DARK, color: '#fff', border: 'none', borderRadius: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: 'inherit', boxShadow: '0 4px 14px rgba(15,17,23,0.25)', transition: 'all 0.15s' }}
              >
                <Zap style={{ width: 14, height: 14 }} />
                {buying ? 'PROCESSING...' : 'BUY NOW'}
              </button>
            </div>

            {/* Delivery note */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: DARK, marginBottom: 20, padding: '10px 14px', background: '#F3F4F6', border: '1.5px solid #E5E7EB', borderRadius: 8 }}>
              <Truck style={{ width: 15, height: 15, color: ACC, flexShrink: 0 }} />
              <span><strong>Free delivery</strong> · Dispatched within 24 hours · Pan-India</span>
            </div>

            {/* Trust grid */}
            <div className="trust-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {[
                { icon: ShieldCheck, title: 'Exclusive Importer',  sub: 'Direct from Longfian, China' },
                { icon: RotateCcw,   title: 'Easy Returns',        sub: '7-day return policy' },
                { icon: Package,     title: '2-Year Warranty',     sub: '1 yr on batteries & sieve beds' },
                { icon: Truck,       title: 'Pan-India Delivery',  sub: '3–5 business days' },
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
        <div
          className="stats-grid"
          style={{ maxWidth: W, margin: '0 auto', padding: `0 ${PAD}`, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
        >
          {[
            { val: '1.98 kg',  lbl: 'Ultra-light',     sub: 'Lighter than most laptops' },
            { val: '93%±3%',   lbl: 'Oxygen purity',   sub: 'Medical-grade PSA technology' },
            { val: '11 hrs',   lbl: 'Max battery',     sub: 'Double battery, Setting 1' },
            { val: '≤48 dB',   lbl: 'Noise level',     sub: 'Quieter than a conversation' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center', padding: 'clamp(8px,2vw,20px)', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}>
              <p style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 4 }}>{s.val}</p>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.75)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>{s.lbl}</p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ──── BENEFITS ──── */}
      <section style={{ background: '#fff', padding: `${VPAD} 0` }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${PAD}` }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <Label text="Key Benefits" />
            <H2>WHY CHOOSE THE JAY-1000P?</H2>
          </div>
          <div className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { icon: '✈️', title: 'Fly Anywhere',           desc: 'FDA cleared & FAA approved for all commercial airlines worldwide. No extra documentation — just pack and board.' },
              { icon: '⚖️', title: 'Only 1.98 kg',           desc: 'Lighter than most laptops. Runs inside the included shoulder bag — air vents keep it cool while stored.' },
              { icon: '🔋', title: '11-Hour Battery Backup',  desc: 'Comes with 2 batteries delivering up to 11 hours of continuous oxygen therapy at Setting 1.' },
              { icon: '💧', title: '93%±3% Oxygen Purity',   desc: 'PSA molecular sieve technology delivers clinically accurate oxygen every breath, every time.' },
              { icon: '🔇', title: 'Whisper Quiet',           desc: 'At under 48 dB — quieter than a normal conversation. Use in meetings, on flights, or while sleeping.' },
              { icon: '🇮🇳', title: 'CDSCO Approved',         desc: "Officially registered with India's drug regulatory authority. Sachdeva Medline — exclusive importer since 1999." },
              { icon: '📊', title: 'Smart LCD Display',       desc: 'Real-time battery level, flow setting, and running hours. Large tactile buttons — no complicated menus.' },
            ].map((b, i) => (
              <div key={i} style={{ padding: 'clamp(16px,2.5vw,24px)', background: BG, borderRadius: 12, border: '1.5px solid #E5E7EB' }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{b.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: DARK, marginBottom: 8 }}>{b.title}</h3>
                <p style={{ fontSize: 13, color: GREY, lineHeight: 1.7 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── CREATIVE IMAGE 1 ──── */}
      <section style={{ position: 'relative', width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <div style={{ position: 'relative', width: '100%', paddingBottom: 'clamp(28%,20vw,36%)' }}>
          <Image src={CREATIVE_1} alt="Longfian JAY-1000P — Portable Oxygen Concentrator" fill style={{ objectFit: 'cover', objectPosition: 'center' }} sizes="100vw" />
        </div>
      </section>

      {/* ──── VIDEO 1: PRODUCT OVERVIEW ──── */}
      <section style={{ background: '#111827', padding: `${VPAD} 0` }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: `0 ${PAD}` }}>
          <Label text="Product Overview" />
          <H2 light>JAY-1000P — See It In Action</H2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32, maxWidth: 520 }}>
            The complete product video — design, features, and how the JAY-1000P fits seamlessly into daily life for travel, COPD therapy, and more.
          </p>
          <VideoEmbed id="15m-J_sUB_MMHmnJSG399tm6tYW9oJZCj" title="JAY-1000P Product Video HD" dark />
        </div>
      </section>

      {/* ──── SPECIFICATIONS ──── */}
      <section style={{ background: BG, padding: `${VPAD} 0` }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${PAD}` }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <Label text="Technical Details" />
            <H2>TECHNICAL SPECIFICATIONS</H2>
          </div>
          <div className="specs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, maxWidth: 900, margin: '0 auto' }}>
            {[
              ['Oxygen Purity',        '93% ± 3%'],
              ['Flow Settings',        '1–5 Levels (Pulse Dose)'],
              ['Weight',               '1.98 kg'],
              ['Dimensions',           '183 × 86 × 199 mm'],
              ['Battery (Single)',     '5.5 hrs at Setting 1 / 3 hrs at Setting 2'],
              ['Battery (Double)',     'Up to 11 hrs at Setting 1'],
              ['Batteries Included',   '2 batteries included in the box'],
              ['Charge Time',          'Approx. 2 hours'],
              ['Noise Level',          '≤ 48 dB'],
              ['Technology',           'PSA Molecular Sieve'],
              ['Display',              'LCD — battery, flow, running hours'],
              ['Carry Bag',            'Shoulder + backpack dual mode, air vented'],
              ['Certifications',       'CE · ISO · FDA · CDSCO · FAA'],
              ['Warranty',             '2 Years total (1 yr on batteries & sieve beds)'],
              ['Manufacturer',         'Longfian Scitech Co., Ltd, China'],
              ['Indian Distributor',   'Sachdeva Medline — Exclusive Importer'],
            ].map(([lbl, val], i) => (
              <div key={i} style={{ display: 'flex', gap: 16, padding: '13px 18px', background: '#fff', border: '1.5px solid #E5E7EB', borderRadius: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: GREY, minWidth: 140, flexShrink: 0, lineHeight: 1.5 }}>{lbl}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: DARK, lineHeight: 1.5 }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── CREATIVE IMAGE 2 ──── */}
      <section style={{ position: 'relative', width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <div style={{ position: 'relative', width: '100%', paddingBottom: 'clamp(28%,20vw,36%)' }}>
          <Image src={CREATIVE_2} alt="Fly With Confidence — JAY-1000P FDA FAA Approved for flights" fill style={{ objectFit: 'cover', objectPosition: 'center' }} sizes="100vw" />
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
          <VideoEmbed id="1qUxGfQL_dFZ145J1sUh-_DfmA45Oao0N" title="MEDICA 2025 — FDA & FAA Approved Demo" />
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
              <h3 style={{ fontSize: 'clamp(15px,2vw,20px)', fontWeight: 800, color: '#fff', marginBottom: 10, lineHeight: 1.3 }}>
                Pulse Mode Demonstration
              </h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 16, lineHeight: 1.65 }}>
                See how the JAY-1000P synchronises oxygen delivery to your breathing — oxygen only on inhalation, zero waste, maximum efficiency.
              </p>
              <VideoEmbed id="19Jpj6asBolaWH_fY5kDd7C5KyOBWCYGV" title="Pulse Mode Demonstration" dark />
            </div>
            <div>
              <h3 style={{ fontSize: 'clamp(15px,2vw,20px)', fontWeight: 800, color: '#fff', marginBottom: 10, lineHeight: 1.3 }}>
                Filter Replacement Guide
              </h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 16, lineHeight: 1.65 }}>
                Easy DIY maintenance at home — replace the air filter yourself in under 2 minutes. No technician needed, no tools required.
              </p>
              <VideoEmbed id="1WRGiADRDTkPlGWGy_6_5KrGbdYWU-OrL" title="Filter Replacement Guide" dark />
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
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: ACC, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                  <span style={{ fontSize: 12, fontWeight: 900, color: '#fff', letterSpacing: '0.02em' }}>{c.cert}</span>
                </div>
                <p style={{ fontSize: 13, fontWeight: 800, color: DARK, marginBottom: 6 }}>{c.name}</p>
                <p style={{ fontSize: 11, color: GREY, lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── WARRANTY CALLOUT ──── */}
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
              { period: '2 Years', item: 'Main Concentrator Unit', note: 'Full parts & service coverage' },
              { period: '1 Year',  item: 'Rechargeable Batteries', note: 'Both batteries included in box' },
              { period: '1 Year',  item: 'Molecular Sieve Beds',   note: 'Core filtration component' },
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
              { icon: '🔬', item: 'JAY-1000P Unit',         desc: 'The main concentrator device' },
              { icon: '🔋', item: '2 Batteries',             desc: 'Both single batteries included' },
              { icon: '👜', item: 'Carry Bag',               desc: 'Shoulder & backpack, air vented' },
              { icon: '🔌', item: 'AC Power Adapter',        desc: 'Standard household charger' },
              { icon: '🚗', item: 'Car Charger',             desc: 'DC adapter for vehicle use' },
              { icon: '👃', item: 'Nasal Cannula',           desc: 'For oxygen delivery' },
              { icon: '📖', item: 'User Manual',             desc: 'Setup and operation guide' },
              { icon: '📋', item: 'Warranty Card',           desc: '2-yr warranty by Sachdeva Medline' },
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
                <VideoEmbed id={v.id} title={v.title} />
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
      <div
        className="mob-cta"
        style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: '2px solid #E5E7EB', padding: '10px 12px', zIndex: 500, boxShadow: '0 -4px 16px rgba(0,0,0,0.08)', display: 'none' }}
      >
        <div style={{ display: 'flex', gap: 8, maxWidth: 600, margin: '0 auto' }}>
          <button
            onClick={doAdd}
            disabled={adding}
            style={{ flex: '0 0 auto', padding: '13px 14px', background: '#fff', color: DARK, border: `2px solid ${ACC}`, borderRadius: 10, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}
          >
            {adding ? '✓ ADDED' : 'ADD TO CART'}
          </button>
          <button
            onClick={doBuy}
            disabled={buying}
            style={{ flex: 1, background: DARK, color: '#fff', padding: '13px 12px', border: 'none', borderRadius: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontFamily: 'inherit', boxShadow: '0 4px 14px rgba(15,17,23,0.25)', minWidth: 0 }}
          >
            <Zap style={{ width: 13, height: 13, flexShrink: 0 }} />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {buying ? 'PROCESSING...' : `BUY NOW — ₹${PRICE.toLocaleString('en-IN')}`}
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-wrap      { grid-template-columns: 1fr !important; }
          .hero-gallery   { position: relative !important; top: auto !important; }
          .cert-grid      { grid-template-columns: repeat(3, 1fr) !important; }
          .video-pair     { grid-template-columns: 1fr !important; gap: 40px !important; }
          .more-grid      { grid-template-columns: 1fr 1fr !important; }
          .warranty-grid  { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .mob-cta           { display: block !important; }
          .stats-grid        { grid-template-columns: repeat(2, 1fr) !important; }
          .benefits-grid     { grid-template-columns: 1fr 1fr !important; }
          .specs-grid        { grid-template-columns: 1fr !important; }
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
        }
      `}</style>
    </div>
  );
}
