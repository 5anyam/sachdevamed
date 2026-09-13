'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const GREEN = '#3DAA35';
const DARK = '#0F1117';
const BG = '#F5FAF4';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 16px', border: `1.5px solid #e8f0e8`, background: '#fff',
    color: DARK, fontSize: 13, outline: 'none', boxSizing: 'border-box',
    fontFamily: 'inherit', borderRadius: 8, transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
    textTransform: 'uppercase', color: 'rgba(15,17,23,0.45)', marginBottom: 7,
  };

  return (
    <main style={{ minHeight: '100vh', background: BG }}>

      {/* Hero */}
      <section style={{ background: DARK, padding: '72px 32px', borderBottom: `4px solid ${GREEN}`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(61,170,53,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(61,170,53,0.05) 1px, transparent 1px)`, backgroundSize: '48px 48px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: GREEN, display: 'block', marginBottom: 18 }}>◆ We&apos;re Here to Help</span>
          <h1 style={{ fontSize: 'clamp(56px,9vw,110px)', fontWeight: 900, color: '#fff', lineHeight: 0.9, marginBottom: 24, letterSpacing: '-0.02em' }}>
            GET IN<br /><span style={{ color: GREEN }}>TOUCH.</span>
          </h1>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.55)', maxWidth: 500, margin: '0 auto', lineHeight: 1.85 }}>
            Have a question about our products or delivery, or need expert guidance on choosing the right equipment? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <div className="contact-container" style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px' }}>

        {/* Contact Cards */}
        <section className="contact-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginBottom: 64 }}>
          {[
            { icon: <Phone size={22} />, title: 'CALL US', sub: 'Mon – Sat · 9 AM – 7 PM', value: '+91 98915 21090', href: 'tel:+919891521090', sub2: '+91 99110 06187', href2: 'tel:+919911006187' },
            { icon: <Mail size={22} />, title: 'EMAIL US', sub: 'Response within 24 hours', value: 'info@sachdevamedline.com', href: 'mailto:info@sachdevamedline.com', sub2: null, href2: null },
            { icon: <MapPin size={22} />, title: 'VISIT US', sub: 'Near Railway Crossing, Sultanpuri', value: 'House No. 9B/4, Friends Enclave,\nSultanpuri, Delhi – 110041', href: null, sub2: null, href2: null },
          ].map((card, i) => (
            <div key={i} style={{ background: i === 0 ? DARK : '#fff', border: `1.5px solid ${i === 0 ? 'transparent' : '#e8f0e8'}`, borderRadius: 16, padding: '36px 28px', textAlign: 'center', boxShadow: i === 0 ? `0 6px 24px rgba(61,170,53,0.2)` : '0 2px 10px rgba(61,170,53,0.06)' }}>
              <div style={{ width: 56, height: 56, background: `rgba(61,170,53,${i === 0 ? '0.15' : '0.1'})`, border: `1.5px solid rgba(61,170,53,0.25)`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: GREEN }}>
                {card.icon}
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 800, letterSpacing: '0.1em', color: i === 0 ? GREEN : DARK, marginBottom: 6 }}>{card.title}</h3>
              <p style={{ fontSize: 12, color: i === 0 ? 'rgba(255,255,255,0.4)' : 'rgba(15,17,23,0.4)', marginBottom: 14 }}>{card.sub}</p>
              {card.href
                ? <><a href={card.href} style={{ display: 'block', fontSize: 14, fontWeight: 700, color: GREEN, textDecoration: 'none', marginBottom: 4 }}>{card.value}</a>
                  {card.href2 && <a href={card.href2} style={{ display: 'block', fontSize: 14, fontWeight: 700, color: GREEN, textDecoration: 'none' }}>{card.sub2}</a>}</>
                : <address style={{ fontSize: 13, color: i === 0 ? 'rgba(255,255,255,0.55)' : 'rgba(15,17,23,0.6)', fontStyle: 'normal', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{card.value}</address>
              }
            </div>
          ))}
        </section>

        {/* Form + Office Info */}
        <section className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 32, marginBottom: 64 }}>

          {/* Form */}
          <div style={{ background: '#fff', border: `1.5px solid #e8f0e8`, borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(61,170,53,0.06)' }}>
            <div style={{ padding: '18px 28px', borderBottom: `1px solid #e8f0e8`, background: BG }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, color: DARK, letterSpacing: '-0.01em' }}>Send Us a Message</h2>
              <p style={{ fontSize: 12, color: 'rgba(15,17,23,0.45)', marginTop: 4 }}>We usually respond within a few hours during business days.</p>
            </div>
            <div style={{ padding: 28 }}>
              <div className="contact-form-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your full name" style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = GREEN)} onBlur={e => (e.currentTarget.style.borderColor = '#e8f0e8')} />
                </div>
                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = GREEN)} onBlur={e => (e.currentTarget.style.borderColor = '#e8f0e8')} />
                </div>
              </div>
              <div className="contact-form-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = GREEN)} onBlur={e => (e.currentTarget.style.borderColor = '#e8f0e8')} />
                </div>
                <div>
                  <label style={labelStyle}>Subject</label>
                  <select name="subject" value={formData.subject} onChange={handleInputChange}
                    style={{ ...inputStyle, cursor: 'pointer', appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' fill=\'%230f1117\' viewBox=\'0 0 16 16\'%3E%3Cpath d=\'M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' }}
                    onFocus={e => (e.currentTarget.style.borderColor = GREEN)} onBlur={e => (e.currentTarget.style.borderColor = '#e8f0e8')}
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="order-support">Order / Delivery Support</option>
                    <option value="service">After-Sales Service</option>
                    <option value="bulk">Bulk / Institutional Order</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Message</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows={5}
                  placeholder="Tell us which product you need, your location, or any specific requirements..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => (e.currentTarget.style.borderColor = GREEN)} onBlur={e => (e.currentTarget.style.borderColor = '#e8f0e8')} />
              </div>
              <button onClick={handleSubmit}
                style={{ width: '100%', background: isSubmitted ? '#2e9128' : GREEN, color: '#fff', padding: '14px 20px', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'background 0.2s', boxShadow: `0 4px 14px rgba(61,170,53,0.3)` }}
                onMouseEnter={e => { if (!isSubmitted) (e.currentTarget as HTMLElement).style.background = '#2e9128'; }}
                onMouseLeave={e => { if (!isSubmitted) (e.currentTarget as HTMLElement).style.background = GREEN; }}
              >
                {isSubmitted ? (<><CheckCircle size={16} /> MESSAGE SENT!</>) : (<><Send size={16} /> SEND MESSAGE →</>)}
              </button>
            </div>
          </div>

          {/* Office Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ background: '#fff', border: `1.5px solid #e8f0e8`, borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 10px rgba(61,170,53,0.06)' }}>
              <div style={{ padding: '16px 24px', borderBottom: `1px solid #e8f0e8`, background: BG }}>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: DARK }}>Our Office</h3>
              </div>
              <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 22 }}>
                {[
                  { icon: <MapPin size={16} />, label: 'Address', content: 'House No. 9B/4, Friends Enclave,\nNear Railway Crossing,\nSultanpuri, Delhi – 110041' },
                  { icon: <Phone size={16} />, label: 'Phone', content: '+91 98915 21090\n+91 99110 06187' },
                  { icon: <Mail size={16} />, label: 'Email', content: 'info@sachdevamedline.com' },
                  { icon: <Clock size={16} />, label: 'Business Hours', content: 'Mon – Sat: 9:00 AM – 7:00 PM\nSunday: Closed' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 34, height: 34, background: `rgba(61,170,53,0.1)`, border: `1.5px solid rgba(61,170,53,0.2)`, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: GREEN }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(15,17,23,0.35)', marginBottom: 5 }}>{item.label}</p>
                      <p style={{ fontSize: 13, color: 'rgba(15,17,23,0.7)', lineHeight: 1.75, whiteSpace: 'pre-line' }}>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map embed placeholder */}
            <div style={{ background: DARK, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '36px 24px', flex: 1, boxShadow: `0 4px 16px rgba(61,170,53,0.12)` }}>
              <div style={{ textAlign: 'center' }}>
                <MapPin size={36} style={{ color: GREEN, marginBottom: 14 }} />
                <h4 style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 8 }}>Sultanpuri, Delhi</h4>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>House No. 9B/4, Friends Enclave<br />Near Railway Crossing, Delhi – 110041</p>
                <a href="https://maps.google.com?q=Sultanpuri+Delhi+110041" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-block', marginTop: 16, fontSize: 11, fontWeight: 700, color: GREEN, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: `1px solid rgba(61,170,53,0.4)`, paddingBottom: 2 }}
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN, display: 'block', marginBottom: 12 }}>◆ Quick Answers</span>
            <h2 style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: 900, letterSpacing: '-0.02em', color: DARK, lineHeight: 1 }}>COMMON<br /><span style={{ color: GREEN }}>QUESTIONS</span></h2>
          </div>
          <div className="contact-faq-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { q: 'How quickly will I receive a response?', a: 'We typically respond to emails within 24 hours. Phone calls are answered Mon–Sat between 9 AM and 7 PM.' },
              { q: 'Do you deliver outside Delhi?', a: 'Yes — we deliver pan-India to 500+ cities. All orders are dispatched within 24 hours of confirmation.' },
              { q: 'Do your products come with a warranty?', a: 'All Longfian oxygen concentrators come with a full manufacturer’s warranty. We assist with claims from day one.' },
              { q: 'Can I get a bulk / institutional quote?', a: 'Yes. Select "Bulk / Institutional Order" in the contact form or call us directly for customised pricing.' },
            ].map((faq, i) => (
              <div key={i} style={{ background: '#fff', border: `1.5px solid #e8f0e8`, borderRadius: 12, padding: '24px 28px', boxShadow: '0 2px 8px rgba(61,170,53,0.05)' }}>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: DARK, marginBottom: 10, lineHeight: 1.3 }}>{faq.q}</h3>
                <p style={{ fontSize: 13, color: 'rgba(15,17,23,0.6)', lineHeight: 1.75 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: DARK, borderRadius: 20, padding: '72px 56px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(61,170,53,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(61,170,53,0.05) 1px, transparent 1px)`, backgroundSize: '40px 40px', pointerEvents: 'none', borderRadius: 20 }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN, display: 'block', marginBottom: 18 }}>◆ Prefer Calling?</span>
            <h2 style={{ fontSize: 'clamp(44px,6.5vw,80px)', fontWeight: 900, color: '#fff', lineHeight: 0.92, marginBottom: 20, letterSpacing: '-0.02em' }}>
              CALL US<br /><span style={{ color: GREEN }}>TODAY.</span><br />WE&apos;RE READY.
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', maxWidth: 460, margin: '0 auto 36px', lineHeight: 1.85 }}>
              Our team is available Monday to Saturday, 9 AM to 7 PM, to guide you to the right equipment for your needs.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+919891521090"
                style={{ display: 'inline-block', background: GREEN, color: '#fff', padding: '14px 32px', borderRadius: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: `0 4px 18px rgba(61,170,53,0.4)`, transition: 'background 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#2e9128')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = GREEN)}
              >
                +91 98915 21090 →
              </a>
              <a href="mailto:info@sachdevamedline.com"
                style={{ display: 'inline-block', color: '#fff', padding: '14px 32px', border: `1.5px solid rgba(255,255,255,0.25)`, borderRadius: 10, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'border-color 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = `rgba(61,170,53,0.5)`)}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = `rgba(255,255,255,0.25)`)}
              >
                EMAIL US →
              </a>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .contact-form-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          .contact-container { padding: 40px 16px !important; }
          .contact-cards { grid-template-columns: 1fr !important; }
          .contact-faq-grid { grid-template-columns: 1fr !important; }
          .contact-form-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
