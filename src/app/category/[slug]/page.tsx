import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CATEGORIES, getCategoryBySlug, getCategoryItems } from '../../../../lib/categories';
import { ProductCard } from '../../shop/shopPageClient';

const ACC = '#2D3748';
const GREY = '#6B7280';
const DARK = '#0F1117';
const BG = '#F8F9FA';

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};
  const title = `${cat.name} | Sachdeva Medline`;
  return {
    title,
    description: cat.intro,
    alternates: { canonical: `https://sachdevamedline.com/category/${cat.slug}` },
    openGraph: { title, description: cat.intro, url: `https://sachdevamedline.com/category/${cat.slug}`, siteName: 'Sachdeva Medline' },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  const [first, ...rest] = cat.name.toUpperCase().split(' ');
  const items = getCategoryItems(cat);

  return (
    <div style={{ minHeight: '100vh', background: BG }}>

      {/* Hero */}
      <section style={{ background: DARK, padding: 'clamp(44px,8vw,64px) 16px', borderBottom: `4px solid ${ACC}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(34px,8vw,96px)', fontWeight: 900, color: '#fff', lineHeight: 0.95, marginBottom: 16, letterSpacing: '-0.02em', overflowWrap: 'anywhere' }}>
            {first}{rest.length > 0 && <><br /><span style={{ color: 'rgba(255,255,255,0.6)' }}>{rest.join(' ')}.</span></>}
          </h1>
          <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.55)', maxWidth: 520, margin: '0 auto', lineHeight: 1.85 }}>{cat.intro}</p>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(32px,5vw,48px) clamp(16px,4vw,32px)' }}>
        <div className="cat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {items.map((item) =>
            'product' in item ? (
              <ProductCard key={item.product.id} product={item.product} />
            ) : (
              <div key={item.upcoming.name} style={{ display: 'flex', flexDirection: 'column', background: '#fff', border: '1.5px solid #E5E7EB', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 10px rgba(45,55,72,0.07)' }}>
                <div style={{ position: 'relative', aspectRatio: '4/3', background: '#F8F9FA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ position: 'absolute', top: 12, left: 12, background: ACC, color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', padding: '4px 10px', borderRadius: 4 }}>{item.upcoming.badge}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: GREY, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Images coming soon</span>
                </div>
                <div style={{ padding: '18px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: DARK, marginBottom: 6, lineHeight: 1.2, letterSpacing: '-0.01em' }}>{item.upcoming.name}</h3>
                  <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACC, marginBottom: 12, fontWeight: 600 }}>{item.upcoming.category}</p>
                  <div style={{ marginTop: 'auto' }}>
                    <p style={{ fontSize: 17, fontWeight: 800, color: DARK, marginBottom: 12 }}>Price on Request</p>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <a href="tel:+919891521090" style={{ flex: 1, textAlign: 'center', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: DARK, border: `2px solid ${ACC}`, borderRadius: 8, padding: '9px 12px', textDecoration: 'none' }}>Call Us</a>
                      <a href="https://wa.me/919891521090" target="_blank" rel="noopener noreferrer" style={{ flex: 1, textAlign: 'center', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', background: ACC, borderRadius: 8, padding: '11px 12px', textDecoration: 'none' }}>WhatsApp</a>
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .cat-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .cat-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
