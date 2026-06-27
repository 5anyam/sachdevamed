'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import {
  Star, ShieldCheck, Truck, Check, RotateCcw,
  ChevronRight, Package, Zap
} from 'lucide-react';
import { StaticProduct, ProductVideo, PRODUCTS } from '../../../../lib/products-data';
import { useCart } from '../../../../lib/cart';
import { toast } from '../../../../hooks/use-toast';

const ProductReviews = dynamic(() => import('../../../../components/ProductReviews'), { ssr: false });
const ProductFAQ = dynamic(() => import('../../../../components/ProductFaq'), { ssr: false });

const GREEN = '#3DAA35';
const DARK = '#0F1117';
const BG = '#F5FAF4';

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1,2,3,4,5].map((i) => (
        <Star key={i} style={{ width: 14, height: 14, fill: i <= Math.round(rating) ? GREEN : '#dde8dd', color: i <= Math.round(rating) ? GREEN : '#dde8dd' }} />
      ))}
    </div>
  );
}

function ImageGallery({ images }: { images: string[] }) {
  const [main, setMain] = useState(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ position: 'relative', aspectRatio: '4/3', background: '#edf6ec', overflow: 'hidden', border: `2px solid #e8f0e8`, borderRadius: 12, boxShadow: '0 4px 20px rgba(61,170,53,0.1)' }}>
        <Image
          src={images[main]}
          alt="Product"
          fill
          style={{ objectFit: 'contain', padding: 16, transition: 'opacity 0.3s' }}
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
      {images.length > 1 && (
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setMain(i)}
              style={{
                position: 'relative', flexShrink: 0, width: 72, height: 72,
                border: `2px solid ${i === main ? GREEN : '#e8f0e8'}`,
                borderRadius: 8,
                overflow: 'hidden', opacity: i === main ? 1 : 0.6,
                cursor: 'pointer', background: '#edf6ec', padding: 0,
                transition: 'opacity 0.2s, border-color 0.2s',
              }}
            >
              <Image src={src} alt="" fill style={{ objectFit: 'contain', padding: 6 }} sizes="72px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function VideoGallery({ videos }: { videos: ProductVideo[] }) {
  const [active, setActive] = useState(0);
  return (
    <div style={{ marginTop: 80 }}>
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <span style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN, fontWeight: 600, display: 'block', marginBottom: 12 }}>◆ See It In Action</span>
        <h2 style={{ fontSize: 'clamp(32px,4vw,56px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1 }}>
          PRODUCT<br /><span style={{ color: GREEN }}>VIDEOS.</span>
        </h2>
      </div>

      {/* Tab selector */}
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
        {videos.map((v, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              padding: '7px 14px', fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap', cursor: 'pointer',
              background: i === active ? GREEN : '#fff', color: i === active ? '#fff' : 'rgba(15,17,23,0.5)',
              border: `1.5px solid ${i === active ? GREEN : '#e8f0e8'}`, borderRadius: 20,
              transition: 'all 0.2s', fontFamily: 'inherit',
            }}
          >
            {v.title}
          </button>
        ))}
      </div>

      {/* Active video player */}
      <div style={{ marginTop: 20, maxWidth: 840, margin: '20px auto 0' }}>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 14, border: `2px solid #e8f0e8`, boxShadow: '0 8px 32px rgba(61,170,53,0.12)' }}>
          <iframe
            key={videos[active].id}
            src={`https://drive.google.com/file/d/${videos[active].id}/preview`}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            allow="autoplay; fullscreen"
            title={videos[active].title}
          />
        </div>
        <p style={{ textAlign: 'center', marginTop: 12, fontSize: 13, color: 'rgba(15,17,23,0.45)', fontWeight: 600 }}>
          {videos[active].title}
        </p>
      </div>
    </div>
  );
}

const TABS = ['Features', 'Specifications', 'How to Use', 'Delivery'];

function Tabs({ product }: { product: StaticProduct }) {
  const [active, setActive] = useState(0);
  return (
    <div style={{ marginTop: 40, borderTop: `2px solid #e8f0e8` }}>
      <div style={{ display: 'flex', borderBottom: `2px solid #e8f0e8`, overflowX: 'auto' }}>
        {TABS.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              padding: '12px 20px', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', whiteSpace: 'nowrap', cursor: 'pointer',
              background: i === active ? GREEN : 'transparent',
              color: i === active ? '#fff' : 'rgba(15,17,23,0.45)',
              border: 'none', borderRadius: i === active ? '6px 6px 0 0' : 0,
              transition: 'background 0.2s, color 0.2s',
              fontFamily: 'inherit',
            }}
          >
            {t}
          </button>
        ))}
      </div>
      <div style={{ paddingTop: 24, paddingBottom: 8 }}>
        {active === 0 && (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {product.benefits.map((b, i) => (
              <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 20, height: 20, background: `rgba(61,170,53,0.12)`, border: `1.5px solid ${GREEN}`, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                  <Check style={{ width: 10, height: 10, color: GREEN }} />
                </span>
                <span style={{ fontSize: 13, color: DARK, lineHeight: 1.65 }}>{b}</span>
              </li>
            ))}
          </ul>
        )}
        {active === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {product.ingredients.map((ing, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, padding: '14px 16px', background: '#fff', border: `1.5px solid #e8f0e8`, borderRadius: 8 }}>
                <div style={{ minWidth: 72, textAlign: 'center', flexShrink: 0 }}>
                  <p style={{ fontSize: 15, fontWeight: 800, color: GREEN, lineHeight: 1.1, letterSpacing: '-0.01em' }}>{ing.dose}</p>
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 13, color: DARK, marginBottom: 3 }}>{ing.name}</p>
                  <p style={{ fontSize: 12, color: 'rgba(15,17,23,0.5)' }}>{ing.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {active === 2 && (
          <div>
            <div style={{ background: '#fff', border: `1.5px solid #e8f0e8`, borderRadius: 8, padding: '16px 20px', marginBottom: 12 }}>
              <p style={{ fontSize: 13, color: DARK, lineHeight: 1.8 }}>{product.howToUse}</p>
            </div>
            <div style={{ padding: '12px 16px', background: `rgba(61,170,53,0.06)`, border: `1.5px solid rgba(61,170,53,0.2)`, borderRadius: 8 }}>
              <p style={{ fontSize: 12, color: '#2e7a28', fontWeight: 600 }}>
                Always use as directed by your physician. If any unusual symptoms occur, stop use and consult a doctor immediately.
              </p>
            </div>
          </div>
        )}
        {active === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { icon: Package, label: 'Dispatch', value: 'Within 24 hours of order confirmation' },
              { icon: Truck, label: 'Delivery', value: '3–5 business days, pan-India' },
              { icon: RotateCcw, label: 'Returns', value: '7-day return policy on manufacturing defects' },
              { icon: ShieldCheck, label: 'Warranty', value: 'Full manufacturer warranty included' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '12px 16px', background: '#fff', border: `1.5px solid #e8f0e8`, borderRadius: 8 }}>
                <item.icon style={{ width: 16, height: 16, color: GREEN, flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'rgba(15,17,23,0.4)', fontWeight: 600, marginBottom: 2 }}>{item.label}</p>
                  <p style={{ fontSize: 12, color: DARK, fontWeight: 600 }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function RelatedCard({ product }: { product: StaticProduct }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: '#fff', border: `1.5px solid #e8f0e8`, borderRadius: 12, overflow: 'hidden', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 2px 8px rgba(61,170,53,0.06)' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(61,170,53,0.15)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(61,170,53,0.06)'; }}
    >
      <div style={{ position: 'relative', aspectRatio: '4/3', background: '#edf6ec', overflow: 'hidden' }}>
        <Image src={product.images[0]} alt={product.name} fill style={{ objectFit: 'contain', padding: 12 }} sizes="300px" />
      </div>
      <div style={{ padding: '14px 16px' }}>
        <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: GREEN, fontWeight: 600, marginBottom: 4 }}>{product.category}</p>
        <h4 style={{ fontSize: 16, fontWeight: 700, color: DARK, marginBottom: 8, lineHeight: 1.2 }}>{product.name}</h4>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontSize: 20, fontWeight: 800, color: DARK }}>₹{product.price.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </Link>
  );
}

export default function ProductClient({ product }: { product: StaticProduct }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const reviewsRef = useRef<HTMLDivElement>(null);

  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isBuyingNow, setIsBuyingNow] = useState(false);

  const discount = Math.round(((product.regularPrice - product.price) / product.regularPrice) * 100);
  const relatedProducts = PRODUCTS.filter((p) => p.slug !== product.slug);

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    addToCart({ id: product.id, name: product.name, price: product.price.toString(), regular_price: product.regularPrice.toString(), images: product.images.map((src) => ({ src })) });
    toast({ title: 'Added to Cart', description: `${product.shortName} added to your cart.` });
    setTimeout(() => setIsAddingToCart(false), 600);
  };

  const handleBuyNow = () => {
    setIsBuyingNow(true);
    addToCart({ id: product.id, name: product.name, price: product.price.toString(), regular_price: product.regularPrice.toString(), images: product.images.map((src) => ({ src })) });
    router.push('/checkout');
  };

  return (
    <div style={{ minHeight: '100vh', background: BG, paddingBottom: 120 }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: `1px solid #e8f0e8`, background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '10px 32px' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(15,17,23,0.4)' }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={e => (e.currentTarget.style.color = GREEN)} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(15,17,23,0.4)')}>Home</Link>
            <ChevronRight style={{ width: 12, height: 12 }} />
            <Link href="/shop" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={e => (e.currentTarget.style.color = GREEN)} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(15,17,23,0.4)')}>Products</Link>
            <ChevronRight style={{ width: 12, height: 12 }} />
            <span style={{ color: DARK }}>{product.shortName}</span>
          </nav>
        </div>
      </div>

      {/* Main layout */}
      <div className="product-container" style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 32px' }}>
        <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px 64px' }}>

          {/* LEFT: Images */}
          <div className="product-image-sticky" style={{ position: 'sticky', top: 24, alignSelf: 'start' }}>
            <ImageGallery images={product.images} />
          </div>

          {/* RIGHT: Info */}
          <div>
            {/* Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
              <span style={{ background: `rgba(61,170,53,0.1)`, color: GREEN, fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', padding: '5px 12px', border: `1.5px solid rgba(61,170,53,0.3)`, borderRadius: 4 }}>
                {product.category}
              </span>
              {product.badge && (
                <span style={{ background: GREEN, color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 4 }}>
                  {product.badge}
                </span>
              )}
              {discount > 0 && (
                <span style={{ background: '#E8175D', color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 10px', borderRadius: 4 }}>
                  {discount}% OFF
                </span>
              )}
            </div>

            {/* Name */}
            <h1 style={{ fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1.05, marginBottom: 14 }}>
              {product.name}
            </h1>

            {/* Rating */}
            <button
              onClick={() => reviewsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <StarRating rating={product.rating} />
              <span style={{ fontSize: 12, color: 'rgba(15,17,23,0.5)', borderBottom: '1px solid rgba(15,17,23,0.2)' }}>
                {product.rating.toFixed(1)} ({product.reviewCount} Reviews)
              </span>
            </button>

            {/* Tagline */}
            <p style={{ fontSize: 14, color: 'rgba(15,17,23,0.6)', lineHeight: 1.75, marginBottom: 20 }}>{product.tagline}</p>

            {/* Key benefits */}
            <div style={{ marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {product.benefits.slice(0, 4).map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ width: 18, height: 18, background: `rgba(61,170,53,0.1)`, border: `1.5px solid ${GREEN}`, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <Check style={{ width: 9, height: 9, color: GREEN }} />
                  </span>
                  <span style={{ fontSize: 13, color: DARK, lineHeight: 1.6 }}>{b}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 24, paddingBottom: 24, borderBottom: `2px solid #e8f0e8` }}>
              <span style={{ fontSize: 44, fontWeight: 900, color: DARK, lineHeight: 1, letterSpacing: '-0.02em' }}>
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.regularPrice > product.price && (
                <span style={{ fontSize: 16, color: 'rgba(15,17,23,0.35)', textDecoration: 'line-through' }}>₹{product.regularPrice.toLocaleString('en-IN')}</span>
              )}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
              <button
                onClick={handleAddToCart}
                disabled={isAddingToCart}
                style={{
                  flex: 1, padding: '14px 20px', background: '#fff', color: DARK,
                  border: `2px solid #e8f0e8`, borderRadius: 10,
                  fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                  cursor: isAddingToCart ? 'not-allowed' : 'pointer', opacity: isAddingToCart ? 0.7 : 1,
                  transition: 'border-color 0.15s, box-shadow 0.15s', fontFamily: 'inherit',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}
                onMouseEnter={e => { if (!isAddingToCart) { (e.currentTarget as HTMLElement).style.borderColor = GREEN; (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 12px rgba(61,170,53,0.15)`; }}}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#e8f0e8'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'; }}
              >
                {isAddingToCart ? 'ADDED ✓' : 'ADD TO CART'}
              </button>
              <button
                onClick={handleBuyNow}
                disabled={isBuyingNow}
                style={{
                  flex: 1, padding: '14px 20px', background: GREEN, color: '#fff',
                  border: 'none', borderRadius: 10,
                  fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                  cursor: isBuyingNow ? 'not-allowed' : 'pointer', opacity: isBuyingNow ? 0.7 : 1,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  transition: 'background 0.15s, box-shadow 0.15s', fontFamily: 'inherit',
                  boxShadow: `0 4px 14px rgba(61,170,53,0.35)`,
                }}
                onMouseEnter={e => { if (!isBuyingNow) { (e.currentTarget as HTMLElement).style.background = '#2e9128'; (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 20px rgba(61,170,53,0.45)`; }}}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = GREEN; (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 14px rgba(61,170,53,0.35)`; }}
              >
                <Zap style={{ width: 14, height: 14 }} />
                {isBuyingNow ? 'PROCESSING...' : 'BUY NOW'}
              </button>
            </div>

            {/* Delivery note */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: DARK, marginBottom: 20, padding: '10px 14px', background: `rgba(61,170,53,0.06)`, border: `1.5px solid rgba(61,170,53,0.2)`, borderRadius: 8 }}>
              <Truck style={{ width: 15, height: 15, color: GREEN, flexShrink: 0 }} />
              <span><strong>Free delivery</strong> · Dispatched within 24 hours · Pan-India</span>
            </div>

            {/* Trust Grid */}
            <div className="trust-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {[
                { icon: ShieldCheck, title: '100% Genuine', sub: 'Authorised dealer' },
                { icon: RotateCcw, title: 'Easy Returns', sub: '7-day return policy' },
                { icon: Package, title: 'Manufacturer Warranty', sub: 'Full warranty included' },
                { icon: Truck, title: 'Pan-India Delivery', sub: '3–5 business days' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '10px 12px', background: '#fff', border: `1.5px solid #e8f0e8`, borderRadius: 8 }}>
                  <item.icon style={{ width: 14, height: 14, color: GREEN, flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 700, color: DARK, marginBottom: 1 }}>{item.title}</p>
                    <p style={{ fontSize: 11, color: 'rgba(15,17,23,0.45)' }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <Tabs product={product} />
          </div>
        </div>

        {/* Video Gallery */}
        {product.videos && product.videos.length > 0 && (
          <VideoGallery videos={product.videos} />
        )}

        {/* Reviews */}
        <div ref={reviewsRef} style={{ marginTop: 80, scrollMarginTop: 96 }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN, fontWeight: 600, display: 'block', marginBottom: 12 }}>◆ Verified Reviews</span>
            <h2 style={{ fontSize: 'clamp(32px,4vw,56px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1 }}>
              WHAT CUSTOMERS<br /><span style={{ color: GREEN }}>ARE SAYING.</span>
            </h2>
          </div>
          <ProductReviews productId={product.id} productName={product.name} />
        </div>

        {/* FAQ */}
        <div style={{ marginTop: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN, fontWeight: 600, display: 'block', marginBottom: 12 }}>◆ Got Questions?</span>
            <h2 style={{ fontSize: 'clamp(32px,4vw,56px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1 }}>
              FREQUENTLY ASKED<br /><span style={{ color: GREEN }}>QUESTIONS.</span>
            </h2>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <ProductFAQ productSlug={product.slug} productName={product.name} />
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div style={{ marginTop: 80 }}>
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <span style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN, fontWeight: 600, display: 'block', marginBottom: 12 }}>◆ You May Also Like</span>
              <h2 style={{ fontSize: 'clamp(32px,4vw,56px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1 }}>
                RELATED<br /><span style={{ color: GREEN }}>PRODUCTS.</span>
              </h2>
            </div>
            <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, maxWidth: 900, margin: '0 auto' }}>
              {relatedProducts.map((p) => <RelatedCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Sticky Bottom CTA */}
      <div className="mobile-cta-outer" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: `2px solid #e8f0e8`, padding: '10px 12px', zIndex: 500, boxShadow: '0 -4px 16px rgba(0,0,0,0.08)', display: 'none' }}>
        <div style={{ display: 'flex', gap: 8, maxWidth: 600, margin: '0 auto' }}>
          <button
            onClick={handleAddToCart}
            disabled={isAddingToCart}
            style={{ flex: '0 0 auto', padding: '13px 14px', background: '#fff', color: DARK, border: `2px solid #e8f0e8`, borderRadius: 10, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}
          >
            {isAddingToCart ? '✓ ADDED' : 'ADD TO CART'}
          </button>
          <button
            onClick={handleBuyNow}
            disabled={isBuyingNow}
            style={{ flex: 1, background: GREEN, color: '#fff', padding: '13px 12px', border: 'none', borderRadius: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontFamily: 'inherit', boxShadow: `0 4px 14px rgba(61,170,53,0.3)`, minWidth: 0 }}
          >
            <Zap style={{ width: 13, height: 13, flexShrink: 0 }} />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {isBuyingNow ? 'PROCESSING...' : `BUY NOW — ₹${product.price.toLocaleString('en-IN')}`}
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-cta-outer { display: block !important; }
          .product-container { padding: 16px 14px 100px !important; }
          .product-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .product-image-sticky { position: relative !important; top: auto !important; }
          .related-grid { grid-template-columns: 1fr 1fr !important; }
          .video-tabs { justify-content: flex-start !important; }
        }
        @media (max-width: 480px) {
          .related-grid { grid-template-columns: 1fr !important; }
          .product-container { padding: 12px 12px 100px !important; }
          .trust-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
