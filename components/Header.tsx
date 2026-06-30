'use client';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import CartIcon from './CartIcon';
import { useIsMobile } from '../hooks/use-mobile';
import { useAuth } from '../lib/auth-context';
import React, { useState, useRef, useEffect } from 'react';
import { FiSearch, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { BiChevronDown } from 'react-icons/bi';

const GREEN = '#2D3748';

const navItems = [
  { name: 'Home', to: '/' },
  {
    name: 'Products',
    to: '/shop',
    submenu: [
      { name: 'Longfian JAY-5 (5 LPM)', to: '/product/longfian-jay-5' },
      { name: 'Longfian JAY-10 (10 LPM)', to: '/product/longfian-jay-10' },
      { name: 'Longfian JAY-5W (Wheels)', to: '/product/longfian-jay-5w' },
      { name: 'Electric Recliner Bed', to: '/product/electric-recliner-bed' },
    ],
  },
  { name: 'About Us', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

export default function Header() {
  const location = usePathname();
  const isMobile = useIsMobile();
  const [search, setSearch] = useState('');
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopSubmenuOpen, setShopSubmenuOpen] = useState(false);
  const [mobileShopSubmenuOpen, setMobileShopSubmenuOpen] = useState(false);
  const router = useRouter();
  const shopMenuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { user, logout } = useAuth();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shopMenuRef.current && !shopMenuRef.current.contains(event.target as Node)) {
        setShopSubmenuOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
  }, [mobileMenuOpen]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?q=${encodeURIComponent(search.trim())}`);
      setSearch('');
      setShowMobileSearch(false);
    }
  }

  const activeColor = GREEN;

  return (
    <>
      {/* ── DESKTOP HEADER ── */}
      <header style={{ borderBottom: `2px solid #E5E7EB`, background: '#ffffff', position: 'sticky', top: 0, zIndex: 500, boxShadow: '0 2px 12px rgba(45,55,72,0.06)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>

            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <Image
                src="/sachdeva-logo.jpeg"
                alt="Sachdeva Medline"
                width={200}
                height={56}
                style={{ height: 48, width: 'auto', objectFit: 'contain' }}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            {!isMobile && (
              <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {navItems.map((item) => (
                  <div key={item.name} style={{ position: 'relative' }} ref={item.name === 'Products' ? shopMenuRef : undefined}>
                    {item.submenu ? (
                      <div
                        onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setShopSubmenuOpen(true); }}
                        onMouseLeave={() => { timeoutRef.current = setTimeout(() => setShopSubmenuOpen(false), 200); }}
                      >
                        <button
                          style={{
                            display: 'flex', alignItems: 'center', gap: 4,
                            padding: '6px 14px', fontSize: 13, fontWeight: 600,
                            letterSpacing: '0.04em',
                            color: location.startsWith(item.to) ? activeColor : '#1A1A1A',
                            background: 'transparent', border: 'none', cursor: 'pointer',
                            borderBottom: location.startsWith(item.to) ? `2px solid ${activeColor}` : '2px solid transparent',
                            transition: 'color 0.2s, border-color 0.2s',
                          }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = activeColor; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = location.startsWith(item.to) ? activeColor : '#1A1A1A'; }}
                        >
                          {item.name}
                          <BiChevronDown style={{ transition: 'transform 0.2s', transform: shopSubmenuOpen ? 'rotate(180deg)' : 'none' }} />
                        </button>

                        {shopSubmenuOpen && (
                          <div style={{ position: 'absolute', top: '100%', left: 0, paddingTop: 8, zIndex: 100 }}>
                            <div style={{ background: '#ffffff', border: `1.5px solid #E5E7EB`, boxShadow: '0 8px 24px rgba(45,55,72,0.12)', minWidth: 220, borderRadius: 10, overflow: 'hidden' }}>
                              {item.submenu.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.to}
                                  style={{
                                    display: 'block', padding: '11px 18px', fontSize: 13,
                                    fontWeight: 500,
                                    color: location === sub.to ? activeColor : '#1A1A1A',
                                    textDecoration: 'none',
                                    borderBottom: '1px solid rgba(45,55,72,0.08)',
                                    transition: 'background 0.15s, color 0.15s',
                                    borderLeft: location === sub.to ? `3px solid ${activeColor}` : '3px solid transparent',
                                  }}
                                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#F8F9FA'; (e.currentTarget as HTMLElement).style.color = activeColor; }}
                                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = location === sub.to ? activeColor : '#1A1A1A'; }}
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.to}
                        style={{
                          display: 'block', padding: '6px 14px', fontSize: 13, fontWeight: 600,
                          letterSpacing: '0.04em', textDecoration: 'none',
                          color: location === item.to ? activeColor : '#1A1A1A',
                          borderBottom: location === item.to ? `2px solid ${activeColor}` : '2px solid transparent',
                          transition: 'color 0.2s, border-color 0.2s',
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = activeColor; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = location === item.to ? activeColor : '#1A1A1A'; }}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            )}

            {/* Right Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>

              {/* Desktop Search */}
              {!isMobile && (
                <form onSubmit={handleSearch} style={{ position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center', border: `1.5px solid #E5E7EB`, background: '#F8F9FA', padding: '7px 14px', gap: 8, width: 220, borderRadius: 8 }}>
                    <FiSearch style={{ color: '#555', flexShrink: 0 }} size={14} />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      style={{ background: 'transparent', border: 'none', outline: 'none', fontSize: 13, color: '#1A1A1A', width: '100%' }}
                    />
                  </div>
                </form>
              )}

              {/* User (Desktop) */}
              {!isMobile && (
                <div style={{ position: 'relative' }} ref={userMenuRef}>
                  {user ? (
                    <>
                      <button
                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                        style={{
                          width: 36, height: 36, background: GREEN, color: '#fff',
                          border: 'none', borderRadius: 8,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 14, fontWeight: 700, cursor: 'pointer',
                        }}
                      >
                        {user.name.charAt(0).toUpperCase()}
                      </button>
                      {userMenuOpen && (
                        <div style={{ position: 'absolute', top: '100%', right: 0, marginTop: 8, background: '#fff', border: `1.5px solid #E5E7EB`, boxShadow: '0 8px 24px rgba(45,55,72,0.12)', minWidth: 180, zIndex: 200, borderRadius: 10 }}>
                          <div style={{ padding: '10px 14px', borderBottom: `1px solid #E5E7EB` }}>
                            <p style={{ fontWeight: 700, fontSize: 13, color: '#1A1A1A' }}>{user.name}</p>
                            <p style={{ fontSize: 11, color: '#888', marginTop: 2 }}>{user.email}</p>
                          </div>
                          <Link href="/my-account" onClick={() => setUserMenuOpen(false)}
                            style={{ display: 'block', padding: '10px 14px', fontSize: 13, fontWeight: 500, color: '#1A1A1A', textDecoration: 'none', borderBottom: `1px solid rgba(45,55,72,0.08)` }}
                            onMouseEnter={e => (e.currentTarget.style.background = '#F8F9FA')}
                            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                          >
                            My Account
                          </Link>
                          <button onClick={() => { logout(); setUserMenuOpen(false); }}
                            style={{ display: 'block', width: '100%', padding: '10px 14px', fontSize: 13, fontWeight: 500, color: '#E8175D', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                            onMouseEnter={e => (e.currentTarget.style.background = '#fff5f7')}
                            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                          >
                            Sign Out
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href="/login" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, border: `1.5px solid #E5E7EB`, borderRadius: 8, color: '#1A1A1A', textDecoration: 'none', transition: 'background 0.15s, border-color 0.15s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#F8F9FA'; (e.currentTarget as HTMLElement).style.borderColor = GREEN; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#fff'; (e.currentTarget as HTMLElement).style.borderColor = '#E5E7EB'; }}
                    >
                      <FiUser size={16} />
                    </Link>
                  )}
                </div>
              )}

              {/* Cart */}
              <div style={{ borderLeft: `1px solid #E5E7EB`, paddingLeft: 12 }}>
                <CartIcon />
              </div>

              {/* Mobile Search toggle */}
              {isMobile && !showMobileSearch && (
                <button onClick={() => setShowMobileSearch(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1A1A1A', padding: 6 }}>
                  <FiSearch size={20} />
                </button>
              )}

              {/* Mobile Menu Toggle */}
              {isMobile && (
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  style={{ background: GREEN, color: '#fff', border: 'none', borderRadius: 8, padding: '7px 9px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <FiMenu size={20} />
                </button>
              )}
            </div>

            {/* Mobile Search Overlay */}
            {isMobile && showMobileSearch && (
              <div style={{ position: 'absolute', inset: 0, background: '#fff', zIndex: 50, display: 'flex', alignItems: 'center', padding: '0 16px', borderBottom: `2px solid #E5E7EB` }}>
                <form style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%' }} onSubmit={handleSearch}>
                  <FiSearch style={{ color: '#555' }} size={16} />
                  <input autoFocus type="text" placeholder="Search medical equipment..." value={search} onChange={(e) => setSearch(e.target.value)}
                    style={{ flex: 1, border: 'none', outline: 'none', fontSize: 14, color: '#1A1A1A', background: 'transparent' }} />
                  <button type="button" onClick={() => setShowMobileSearch(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1A1A1A' }}>
                    <FiX size={20} />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      {isMobile && (
        <>
          <div onClick={() => setMobileMenuOpen(false)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(15,17,23,0.5)', zIndex: 600, opacity: mobileMenuOpen ? 1 : 0, visibility: mobileMenuOpen ? 'visible' : 'hidden', transition: 'opacity 0.3s' }}
          />
          <div style={{
            position: 'fixed', top: 0, right: 0, bottom: 0, width: '82%', maxWidth: 340,
            background: '#fff', zIndex: 700, borderLeft: `2px solid #E5E7EB`,
            transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.32s cubic-bezier(.16,1,.3,1)',
            display: 'flex', flexDirection: 'column',
            boxShadow: '-4px 0 24px rgba(45,55,72,0.1)',
          }}>
            {/* Drawer header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: `2px solid #E5E7EB`, background: '#F8F9FA' }}>
              <Image src="/sachdeva-logo.jpeg" alt="Sachdeva Medline" width={160} height={44} style={{ height: 38, width: 'auto', objectFit: 'contain' }} />
              <button onClick={() => setMobileMenuOpen(false)} style={{ background: GREEN, border: 'none', color: '#fff', width: 34, height: 34, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <FiX size={17} />
              </button>
            </div>

            {/* Nav items */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div style={{ borderBottom: `1px solid #E5E7EB` }}>
                      <button onClick={() => setMobileShopSubmenuOpen(!mobileShopSubmenuOpen)}
                        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', fontSize: 16, fontWeight: 600, color: '#1A1A1A', background: 'none', border: 'none', cursor: 'pointer' }}
                      >
                        {item.name}
                        <BiChevronDown style={{ transition: 'transform 0.2s', transform: mobileShopSubmenuOpen ? 'rotate(180deg)' : 'none', color: GREEN }} />
                      </button>
                      {mobileShopSubmenuOpen && (
                        <div style={{ paddingLeft: 20, paddingBottom: 8 }}>
                          {item.submenu.map((sub) => (
                            <Link key={sub.name} href={sub.to} onClick={() => setMobileMenuOpen(false)}
                              style={{ display: 'block', padding: '9px 16px', fontSize: 13, fontWeight: 500, color: location === sub.to ? GREEN : '#555', textDecoration: 'none', borderLeft: `2px solid ${location === sub.to ? GREEN : '#E5E7EB'}`, marginBottom: 4 }}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.to} onClick={() => setMobileMenuOpen(false)}
                      style={{ display: 'block', padding: '14px 20px', fontSize: 16, fontWeight: 600, color: location === item.to ? GREEN : '#1A1A1A', textDecoration: 'none', borderBottom: `1px solid #E5E7EB`, borderLeft: location === item.to ? `3px solid ${GREEN}` : '3px solid transparent' }}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Auth footer */}
            <div style={{ padding: 20, borderTop: `2px solid #E5E7EB`, background: '#F8F9FA' }}>
              {user ? (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, padding: '10px 14px', background: '#fff', border: `1.5px solid #E5E7EB`, borderRadius: 8 }}>
                    <div style={{ width: 36, height: 36, background: GREEN, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700, flexShrink: 0, borderRadius: 8 }}>
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: 13, color: '#1A1A1A' }}>{user.name}</p>
                      <p style={{ fontSize: 11, color: '#888' }}>{user.email}</p>
                    </div>
                  </div>
                  <Link href="/my-account" onClick={() => setMobileMenuOpen(false)}
                    style={{ display: 'block', padding: '12px 16px', textAlign: 'center', fontSize: 13, fontWeight: 700, color: '#1A1A1A', textDecoration: 'none', border: `1.5px solid #E5E7EB`, borderRadius: 8, marginBottom: 10, background: '#fff' }}
                  >
                    My Account
                  </Link>
                  <button onClick={() => { logout(); setMobileMenuOpen(false); }}
                    style={{ width: '100%', padding: '12px 16px', fontSize: 13, fontWeight: 700, color: '#fff', background: GREEN, border: 'none', borderRadius: 8, cursor: 'pointer' }}
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}
                  style={{ display: 'block', padding: '14px 16px', textAlign: 'center', fontSize: 15, fontWeight: 700, color: '#fff', textDecoration: 'none', background: GREEN, borderRadius: 8 }}
                >
                  LOG IN / SIGN UP →
                </Link>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
