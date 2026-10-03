import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CATEGORIES, getCategoryBySlug, getSubCategoryProducts } from '../../../../lib/categories';
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
  const showNav = cat.subcategories.length > 1;

  return (
    <div style={{ minHeight: '100vh', background: BG }}>

      {/* Hero */}
      <section style={{ background: DARK, padding: '64px 32px', borderBottom: `4px solid ${ACC}` }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: 16 }}>◆ Category</span>
          <h1 style={{ fontSize: 'clamp(44px,8vw,96px)', fontWeight: 900, color: '#fff', lineHeight: 0.92, marginBottom: 16, letterSpacing: '-0.02em' }}>
            {first}{rest.length > 0 && <><br /><span style={{ color: 'rgba(255,255,255,0.6)' }}>{rest.join(' ')}.</span></>}
          </h1>
          <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.55)', maxWidth: 520, margin: '0 auto', lineHeight: 1.85 }}>{cat.intro}</p>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(32px,5vw,48px) clamp(16px,4vw,32px)' }}>

        {/* Sub-category jump links */}
        {showNav && (
          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 48 }}>
            {cat.subcategories.map((sub) => (
              <a key={sub.id} href={`#${sub.id}`} style={{ fontSize: 12, fontWeight: 700, color: ACC, background: '#fff', border: '1.5px solid #CBD5E0', borderRadius: 999, padding: '8px 16px', textDecoration: 'none' }}>
                {sub.name}
              </a>
            ))}
          </nav>
        )}

        {cat.subcategories.map((sub) => {
          const items = getSubCategoryProducts(sub);
          return (
            <section key={sub.id} id={sub.id} style={{ marginBottom: 56, scrollMarginTop: 96 }}>
              <div style={{ borderBottom: '2px solid #E5E7EB', paddingBottom: 12, marginBottom: 24 }}>
                <h2 style={{ fontSize: 'clamp(20px,2.6vw,28px)', fontWeight: 900, color: DARK, letterSpacing: '-0.01em', lineHeight: 1.15 }}>{sub.name}</h2>
                <p style={{ fontSize: 12, fontWeight: 600, color: GREY, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 6 }}>
                  {sub.models.join(' · ')}
                </p>
              </div>

              {items.length > 0 ? (
                <div className="cat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
                  {items.map((p) => <ProductCard key={p.id} product={p} />)}
                </div>
              ) : (
                <div style={{ background: '#fff', border: '1.5px dashed #CBD5E0', borderRadius: 12, padding: '28px 24px', textAlign: 'center' }}>
                  <p style={{ fontSize: 15, fontWeight: 700, color: DARK, marginBottom: 6 }}>Longfian {sub.models.join(', ')}</p>
                  <p style={{ fontSize: 13, color: GREY, marginBottom: 16 }}>Call or WhatsApp us for price and availability.</p>
                  <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="tel:+919891521090" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: DARK, border: `2px solid ${ACC}`, borderRadius: 8, padding: '10px 18px', textDecoration: 'none' }}>Call Us</a>
                    <a href="https://wa.me/919891521090" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', background: DARK, borderRadius: 8, padding: '10px 18px', textDecoration: 'none' }}>WhatsApp</a>
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 900px) { .cat-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .cat-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
