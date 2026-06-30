'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StaticProduct } from '../../../lib/products-data';
import { Star, ChevronRight } from 'lucide-react';

const GREEN = '#2D3748';
const DARK = '#0F1117';
const BG = '#F5FAF4';

interface Props {
  products: StaticProduct[];
}

function ProductCard({ product }: { product: StaticProduct }) {
  const discount = Math.round(((product.regularPrice - product.price) / product.regularPrice) * 100);
  return (
    <Link
      href={`/product/${product.slug}`}
      style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: '#fff', border: `1.5px solid #E5E7EB`, borderRadius: 12, overflow: 'hidden', transition: 'transform 0.25s, box-shadow 0.25s', boxShadow: '0 2px 10px rgba(45,55,72,0.07)' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 30px rgba(45,55,72,0.15)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 10px rgba(45,55,72,0.07)'; }}
    >
      <div style={{ position: 'relative', aspectRatio: '4/3', background: '#F8F9FA', overflow: 'hidden' }}>
        <Image src={product.images[0]} alt={product.name} fill style={{ objectFit: 'contain', padding: '12px', transition: 'transform 0.5s' }} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        {product.badge && (
          <span style={{ position: 'absolute', top: 12, left: 12, background: GREEN, color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', padding: '4px 10px', borderRadius: 4 }}>{product.badge}</span>
        )}
        {discount > 0 && (
          <span style={{ position: 'absolute', top: 12, right: 12, background: '#E8175D', color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', padding: '4px 8px', borderRadius: 4 }}>{discount}% OFF</span>
        )}
      </div>
      <div style={{ padding: '18px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: GREEN, marginBottom: 6, fontWeight: 600 }}>{product.category}</p>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: DARK, marginBottom: 6, lineHeight: 1.2, letterSpacing: '-0.01em' }}>{product.name}</h3>
        <p style={{ fontSize: 12, color: 'rgba(15,17,23,0.5)', marginBottom: 12, lineHeight: 1.65, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{product.tagline}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <div style={{ display: 'flex', gap: 2 }}>
            {[1,2,3,4,5].map(i => <Star key={i} style={{ width: 13, height: 13, fill: i <= Math.round(product.rating) ? GREEN : '#dde8dd', color: i <= Math.round(product.rating) ? GREEN : '#dde8dd' }} />)}
          </div>
          <span style={{ fontSize: 11, color: 'rgba(15,17,23,0.4)' }}>({product.reviewCount})</span>
        </div>
        <div style={{ marginTop: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 12 }}>
            <span style={{ fontSize: 24, fontWeight: 800, color: DARK, letterSpacing: '-0.02em' }}>₹{product.price.toLocaleString('en-IN')}</span>
            {product.regularPrice > product.price && (
              <span style={{ fontSize: 13, color: 'rgba(15,17,23,0.35)', textDecoration: 'line-through' }}>₹{product.regularPrice.toLocaleString('en-IN')}</span>
            )}
          </div>
          <div style={{ background: GREEN, color: '#fff', textAlign: 'center', padding: '11px 16px', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: 8, transition: 'background 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}
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

export default function ShopPageClient({ products }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = useMemo(() => [...new Set(products.map((p) => p.category))], [products]);
  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (searchTerm && !p.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      if (selectedCategory && p.category !== selectedCategory) return false;
      return true;
    });
  }, [products, searchTerm, selectedCategory]);

  return (
    <div style={{ minHeight: '100vh', background: BG }}>

      {/* Hero */}
      <section style={{ background: DARK, padding: '64px 32px', borderBottom: `4px solid ${GREEN}`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(45,55,72,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(45,55,72,0.05) 1px, transparent 1px)`, backgroundSize: '48px 48px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: GREEN, display: 'block', marginBottom: 16 }}>◆ Our Equipment</span>
          <h1 style={{ fontSize: 'clamp(56px,9vw,110px)', fontWeight: 900, color: '#fff', lineHeight: 0.9, marginBottom: 16, letterSpacing: '-0.02em' }}>
            ALL<br /><span style={{ color: GREEN }}>PRODUCTS.</span>
          </h1>
          <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.55)', maxWidth: 480, margin: '0 auto', lineHeight: 1.85 }}>
            Genuine medical equipment from authorised brands — delivered pan-India with full warranty and expert support.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 32px' }}>

        {/* Search + Filter */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 36, flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
            <svg style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, color: 'rgba(15,17,23,0.4)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '12px 16px 12px 40px', border: `1.5px solid #E5E7EB`, background: '#fff', color: DARK, fontSize: 13, outline: 'none', boxSizing: 'border-box', borderRadius: 8, fontFamily: 'inherit' }}
              onFocus={e => (e.currentTarget.style.borderColor = GREEN)}
              onBlur={e => (e.currentTarget.style.borderColor = '#E5E7EB')}
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ padding: '12px 20px', border: `1.5px solid #E5E7EB`, background: '#fff', color: DARK, fontSize: 13, outline: 'none', cursor: 'pointer', fontFamily: 'inherit', borderRadius: 8 }}
          >
            <option value="">All Categories</option>
            {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>

        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(15,17,23,0.4)', marginBottom: 24 }}>
          {filtered.length} product{filtered.length !== 1 ? 's' : ''} found
        </p>

        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 32px' }}>
            <p style={{ fontSize: 14, color: 'rgba(15,17,23,0.5)', marginBottom: 24 }}>No products match your search.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory(''); }}
              style={{ background: GREEN, color: '#fff', padding: '12px 28px', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              CLEAR FILTERS
            </button>
          </div>
        ) : (
          <div className="shop-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) { .shop-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .shop-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
