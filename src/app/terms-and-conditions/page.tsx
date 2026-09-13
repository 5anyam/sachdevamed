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

export default function TermsAndConditionsPage() {
  return (
    <div style={{ background: '#F5FAF4', minHeight: '100vh', padding: '48px 16px' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', background: '#fff', borderRadius: 16, padding: '48px 52px', boxShadow: '0 4px 24px rgba(61,170,53,0.08)', border: '1.5px solid #e8f0e8' }}>

        <h1 style={{ fontSize: 36, fontWeight: 900, color: GREEN, marginBottom: 8, letterSpacing: '-0.02em' }}>Terms & Conditions</h1>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 40 }}>Last Updated: 1st January 2024 · sachdevamedline.com</p>

        <Section title="1. Agreement to Terms">
          <p>This website is owned and managed by <strong>Sachdeva Medline</strong>. By accessing or using <strong>www.sachdevamedline.com</strong>, you agree to be legally bound by these Terms &amp; Conditions. These terms may be updated at any time without prior notice. Continued use of the site constitutes acceptance of the updated terms.</p>
        </Section>

        <Section title="2. Products & Pricing">
          <p>All prices listed on our website are in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise. We reserve the right to modify product prices at any time. Product descriptions, images, and specifications are provided in good faith and may vary slightly from the physical product.</p>
        </Section>

        <Section title="3. Order Placement & Confirmation">
          <p>Placing an order does not constitute a confirmed sale until we send you an order confirmation. We reserve the right to cancel any order in case of pricing errors, out-of-stock situations, or suspected fraudulent activity. We do not offer Cash on Delivery (COD); all orders are prepaid online.</p>
        </Section>

        <Section title="4. Delivery">
          <p>We endeavour to dispatch all orders within 24 hours of confirmation. Delivery timelines of 3–5 business days apply to most locations across India and are estimates only. Sachdeva Medline is not liable for delays caused by logistics partners, natural disasters, or circumstances beyond our control.</p>
        </Section>

        <Section title="5. Warranty">
          <p>All Longfian oxygen concentrators come with the manufacturer&apos;s warranty. Warranty terms are subject to the manufacturer&apos;s conditions and cover manufacturing defects only. Physical damage, misuse, or tampering voids the warranty. Contact us for warranty claims — we assist from day one.</p>
        </Section>

        <Section title="6. Limitation of Liability">
          <p>Sachdeva Medline shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our liability is limited to the purchase value of the product in question. All medical equipment sold is intended for use under the guidance of a qualified healthcare professional.</p>
        </Section>

        <Section title="7. Intellectual Property">
          <p>All content on www.sachdevamedline.com — including text, images, logos, and design — is the intellectual property of Sachdeva Medline and may not be reproduced without written permission.</p>
        </Section>

        <Section title="8. Governing Law">
          <p>These Terms &amp; Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Delhi.</p>
        </Section>

        <Section title="9. Contact">
          <ul style={{ paddingLeft: 20, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <li><strong>Email:</strong> info@sachdevamedline.com</li>
            <li><strong>Phone:</strong> +91 98915 21090</li>
            <li><strong>Address:</strong> House No. 9B/4, Friends Enclave, Sultanpuri, Delhi – 110041</li>
          </ul>
        </Section>

      </div>
    </div>
  );
}
