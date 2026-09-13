'use client';

import React from 'react';

const GREEN = '#3DAA35';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontSize: 18, fontWeight: 800, color: '#1A1A1A', borderLeft: `4px solid ${GREEN}`, paddingLeft: 14, marginBottom: 14 }}>{title}</h2>
      <div style={{ fontSize: 14, color: '#444', lineHeight: 1.85 }}>{children}</div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div style={{ background: '#F5FAF4', minHeight: '100vh', padding: '48px 16px' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', background: '#fff', borderRadius: 16, padding: '48px 52px', boxShadow: '0 4px 24px rgba(61,170,53,0.08)', border: '1.5px solid #e8f0e8' }}>

        <h1 style={{ fontSize: 36, fontWeight: 900, color: GREEN, marginBottom: 8, letterSpacing: '-0.02em' }}>Privacy Policy</h1>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 40 }}>Effective Date: 1st January 2024 · sachdevamedline.com</p>

        <Section title="1. Introduction">
          <p>Sachdeva Medline (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information through our platform <strong>www.sachdevamedline.com</strong> when you browse, access, or purchase from us.</p>
          <p style={{ marginTop: 12 }}>We do not publish, sell, or rent client details to third parties for marketing purposes without explicit consent. By accessing or using our Platform, you agree to the terms of this Privacy Policy.</p>
        </Section>

        <Section title="2. Information We Collect">
          <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li>Name, contact details (email, phone), shipping &amp; billing address</li>
            <li>Order history and product preferences</li>
            <li>Payment information (processed via secure third-party services — we do not store card details)</li>
            <li>Device and browser information collected via cookies</li>
            <li>Communications you send us (enquiry forms, emails)</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li>To process and fulfil your orders</li>
            <li>To contact you regarding your order status or delivery</li>
            <li>To provide after-sales support and service reminders</li>
            <li>To improve our website and product offerings</li>
            <li>To send promotional communications (with your consent — you can opt out at any time)</li>
          </ul>
        </Section>

        <Section title="4. Information Sharing">
          <p>We may share your information with:</p>
          <ul style={{ paddingLeft: 20, marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li>Delivery and logistics partners (to fulfil your order)</li>
            <li>Payment gateway providers (under strict confidentiality agreements)</li>
            <li>Law enforcement or regulatory authorities, when required by law</li>
          </ul>
          <p style={{ marginTop: 12 }}>We do not sell or rent your personal data to third parties.</p>
        </Section>

        <Section title="5. Cookies">
          <p>We use cookies to improve your browsing experience and analyse site traffic. You can disable cookies through your browser settings, though some features of the site may not function correctly without them.</p>
        </Section>

        <Section title="6. Children's Privacy">
          <p>Our platform is not intended for use by minors under 18 years of age. We do not knowingly collect personal information from children.</p>
        </Section>

        <Section title="7. Data Security">
          <p>We employ SSL encryption and comply with the Information Technology Act, 2000 to protect your personal data. However, no transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
        </Section>

        <Section title="8. Your Rights">
          <p>You may request access to, correction of, or deletion of your personal data by contacting us at <strong>info@sachdevamedline.com</strong>. We will respond within 30 days.</p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with a revised effective date. Continued use of the platform constitutes acceptance of the updated policy.</p>
        </Section>

        <Section title="10. Contact Us">
          <p>For privacy-related queries, contact us at:</p>
          <ul style={{ paddingLeft: 20, marginTop: 10, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <li><strong>Email:</strong> info@sachdevamedline.com</li>
            <li><strong>Phone:</strong> +91 98915 21090</li>
            <li><strong>Address:</strong> House No. 9B/4, Friends Enclave, Sultanpuri, Delhi – 110041</li>
          </ul>
        </Section>

      </div>
    </div>
  );
}
