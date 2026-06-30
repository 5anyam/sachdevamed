'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const GREEN = '#2D3748';
const DARK = '#0F1117';

export default function Footer() {
  return (
    <footer style={{ background: DARK, borderTop: `4px solid ${GREEN}` }}>

      {/* ── Marquee belt ── */}
      <div style={{ overflow: 'hidden', borderBottom: '2px solid rgba(255,255,255,0.06)', padding: '12px 0' }}>
        <div style={{ display: 'inline-flex', whiteSpace: 'nowrap', animation: 'mq-fwd 24s linear infinite' }}>
          {[...Array(2)].map((_, r) => (
            <span key={r} style={{ display: 'inline-flex' }}>
              {['AUTHORISED LONGFIAN DEALER', 'TRUSTED SINCE 1981', 'PAN-INDIA DELIVERY', 'GENUINE PRODUCTS ONLY', 'EXPERT AFTER-SALE SERVICE'].map((t) => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 16, padding: '0 24px', fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
                  {t}
                  <span style={{ color: GREEN, fontSize: 6 }}>◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Main content ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '56px 32px 40px' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', gap: '40px 32px' }}>

          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: 20 }}>
              <div style={{ background: '#fff', borderRadius: 8, padding: '10px 16px', display: 'inline-block' }}>
                <Image src="/sachdeva-logo.jpeg" alt="Sachdeva Medline" width={180} height={56} style={{ height: 46, width: 'auto', objectFit: 'contain', display: 'block' }} />
              </div>
            </Link>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.45)', lineHeight: 1.85, marginBottom: 24, maxWidth: 260 }}>
              Authorised dealer for Longfian oxygen concentrators and medical equipment. Serving India since 1981 with genuine products and expert service.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { href: '#', icon: <FaFacebookF size={13} /> },
                { href: '#', icon: <FaInstagram size={13} /> },
                { href: '#', icon: <FaYoutube size={13} /> },
                { href: 'https://wa.me/919891521090', icon: <FaWhatsapp size={13} /> },
              ].map(({ href, icon }, i) => (
                <Link key={i} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ width: 34, height: 34, border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s, background 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = GREEN; e.currentTarget.style.color = GREEN; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: GREEN, marginBottom: 20, fontWeight: 700 }}>PRODUCTS</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { name: 'Longfian JAY-5 (5 LPM)', to: '/product/longfian-jay-5' },
                { name: 'Longfian JAY-10 (10 LPM)', to: '/product/longfian-jay-10' },
                { name: 'Longfian JAY-5W (Wheels)', to: '/product/longfian-jay-5w' },
                { name: 'Electric Recliner Bed', to: '/product/electric-recliner-bed' },
                { name: 'All Products', to: '/shop' },
              ].map(({ name, to }) => (
                <li key={name}>
                  <Link href={to} style={{ fontSize: 13, fontWeight: 400, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: GREEN, marginBottom: 20, fontWeight: 700 }}>LEGAL</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { name: 'Privacy Policy', to: '/privacy-policy' },
                { name: 'Terms & Conditions', to: '/terms-and-conditions' },
                { name: 'Returns & Refunds', to: '/returns-and-refunds-policy' },
                { name: 'Disclaimer', to: '/disclaimer' },
                { name: 'About Us', to: '/about' },
              ].map(({ name, to }) => (
                <li key={name}>
                  <Link href={to} style={{ fontSize: 13, fontWeight: 400, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: GREEN, marginBottom: 20, fontWeight: 700 }}>CONTACT</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { label: 'Email', val: 'info@sachdevamedline.com' },
                { label: 'Phone', val: '+91 98915 21090' },
                { label: 'WhatsApp', val: '+91 98915 21090' },
                { label: 'Address', val: 'Sultanpuri, Delhi – 110041' },
              ].map((item) => (
                <li key={item.label}>
                  <span style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', display: 'block', marginBottom: 2 }}>{item.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{item.val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '18px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
        <p style={{ fontSize: 11, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.2)' }}>
          © {new Date().getFullYear()} Sachdeva Medline. All rights reserved.
        </p>
        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.04em' }}>
          Developed by{' '}
          <Link
            href="https://proshala.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
          >
            Proshala
          </Link>
        </p>
        <p style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: `rgba(255,255,255,0.2)` }}>
          AUTHORISED DEALER · SINCE 1981 ◆
        </p>
      </div>

      <style>{`
        @keyframes mq-fwd { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
