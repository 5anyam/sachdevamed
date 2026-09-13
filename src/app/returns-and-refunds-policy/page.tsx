'use client';

import React from 'react';

const GREEN = '#3DAA35';
const PINK = '#E8175D';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontSize: 18, fontWeight: 800, color: '#1A1A1A', borderLeft: `4px solid ${GREEN}`, paddingLeft: 14, marginBottom: 14 }}>{title}</h2>
      <div style={{ fontSize: 14, color: '#444', lineHeight: 1.85 }}>{children}</div>
    </div>
  );
}

export default function ReturnsRefundPolicyPage() {
  return (
    <div style={{ background: '#F5FAF4', minHeight: '100vh', padding: '48px 16px' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', background: '#fff', borderRadius: 16, padding: '48px 52px', boxShadow: '0 4px 24px rgba(61,170,53,0.08)', border: '1.5px solid #e8f0e8' }}>

        <h1 style={{ fontSize: 36, fontWeight: 900, color: GREEN, marginBottom: 8, letterSpacing: '-0.02em' }}>Returns & Refunds Policy</h1>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 40 }}>Please read carefully · sachdevamedline.com</p>

        <div style={{ background: `rgba(61,170,53,0.06)`, border: `1.5px solid rgba(61,170,53,0.2)`, borderRadius: 10, padding: '16px 20px', marginBottom: 36 }}>
          <p style={{ fontSize: 14, color: '#2e7a28', fontWeight: 600 }}>All shipments are carefully inspected before dispatch. If you receive a defective or incorrect product, please contact us within 7 days of delivery.</p>
        </div>

        <Section title="1. Acceptable Reasons for Returns">
          <p style={{ marginBottom: 10 }}>We accept returns only under the following circumstances:</p>
          <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><strong>Damaged / Broken Product:</strong> Visibly damaged unit or packaging upon delivery</li>
            <li><strong>Wrong Product Delivered:</strong> You received a different model than what was ordered</li>
            <li><strong>Manufacturing Defect:</strong> Device fails to function as described on first use</li>
            <li><strong>Incomplete Order:</strong> Missing accessories or components as listed in the box contents</li>
          </ul>
        </Section>

        <Section title="2. Non-Returnable Conditions">
          <div style={{ background: `rgba(232,23,93,0.04)`, border: `1.5px solid rgba(232,23,93,0.15)`, borderRadius: 8, padding: '14px 18px', marginBottom: 12 }}>
            <p style={{ fontSize: 13, color: PINK, fontWeight: 600, marginBottom: 8 }}>The following situations are NOT eligible for return or refund:</p>
            <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>Products that have been used, modified, or tampered with</li>
              <li>Damage caused by improper use, voltage fluctuations, or accidents</li>
              <li>Returns requested more than 7 days after delivery</li>
              <li>Change of mind after delivery</li>
              <li>Products without original packaging, accessories, and documentation</li>
            </ul>
          </div>
        </Section>

        <Section title="3. How to Initiate a Return">
          <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li>Contact us within <strong>7 days</strong> of delivery at <strong>info@sachdevamedline.com</strong> or call <strong>+91 98915 21090</strong></li>
            <li>Share your order number, a description of the issue, and clear photographs of the product and packaging</li>
            <li>Our team will review and respond within 48 hours</li>
            <li>If approved, we will arrange a pickup or guide you on returning the item</li>
          </ol>
        </Section>

        <Section title="4. Refund Process">
          <p>Once the returned product is received and inspected:</p>
          <ul style={{ paddingLeft: 20, marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li>Approved refunds are processed within <strong>7–10 business days</strong></li>
            <li>Refunds are credited to the original payment method (bank account, UPI, or card)</li>
            <li>Shipping charges are non-refundable unless the return is due to our error</li>
          </ul>
        </Section>

        <Section title="5. Warranty Claims">
          <p>Manufacturing defects within the warranty period are handled directly through the manufacturer&apos;s warranty process. We assist you with the paperwork and coordination at no additional cost. Please retain the warranty card included with your product.</p>
        </Section>

        <Section title="6. Contact for Returns">
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
