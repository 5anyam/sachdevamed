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

export default function DisclaimerPage() {
  return (
    <div style={{ background: '#F5FAF4', minHeight: '100vh', padding: '48px 16px' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', background: '#fff', borderRadius: 16, padding: '48px 52px', boxShadow: '0 4px 24px rgba(61,170,53,0.08)', border: '1.5px solid #e8f0e8' }}>

        <h1 style={{ fontSize: 36, fontWeight: 900, color: GREEN, marginBottom: 8, letterSpacing: '-0.02em' }}>Disclaimer</h1>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 40 }}>sachdevamedline.com · Medical Equipment Dealer</p>

        <div style={{ background: `rgba(232,23,93,0.04)`, border: `1.5px solid rgba(232,23,93,0.15)`, borderRadius: 10, padding: '16px 20px', marginBottom: 36 }}>
          <p style={{ fontSize: 14, color: '#c01248', fontWeight: 600 }}>Important: All medical equipment sold by Sachdeva Medline is intended for use under the guidance of a qualified healthcare professional. Do not use medical equipment without a valid prescription or physician recommendation.</p>
        </div>

        <Section title="1. Medical Advice Disclaimer">
          <p>The information provided on www.sachdevamedline.com is for general informational purposes only and does not constitute medical advice. Product descriptions, specifications, and use-case information are provided by manufacturers and should not replace consultation with a licensed physician or healthcare provider.</p>
          <p style={{ marginTop: 12 }}>Always consult your doctor before purchasing or using oxygen therapy equipment, patient aids, or any other medical device listed on our platform.</p>
        </Section>

        <Section title="2. Product Use Disclaimer">
          <p>Sachdeva Medline is an authorised dealer and reseller of medical equipment. We are not the manufacturer. Product performance, safety certifications, and clinical claims are the responsibility of the respective manufacturers (e.g., Longfian Scitech Co., Ltd.).</p>
          <p style={{ marginTop: 12 }}>Sachdeva Medline is not liable for any harm or adverse effects resulting from improper use, self-medication, or use without medical supervision.</p>
        </Section>

        <Section title="3. Accuracy of Information">
          <p>While we strive to keep product information, pricing, and availability accurate, we do not warrant that all content on the website is error-free. Prices, specifications, and availability are subject to change without notice. Images on the website are for illustration purposes and may differ slightly from the actual product.</p>
        </Section>

        <Section title="4. Third-Party Links">
          <p>Our website may contain links to third-party websites for reference purposes. Sachdeva Medline does not endorse or take responsibility for the content or practices of any linked external sites.</p>
        </Section>

        <Section title="5. Limitation of Liability">
          <p>To the maximum extent permitted by law, Sachdeva Medline shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use of products purchased through our platform beyond the purchase value of the product.</p>
        </Section>

        <Section title="6. Contact">
          <p>If you have any questions about this disclaimer, please contact us:</p>
          <ul style={{ paddingLeft: 20, marginTop: 10, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <li><strong>Email:</strong> info@sachdevamedline.com</li>
            <li><strong>Phone:</strong> +91 98915 21090</li>
          </ul>
        </Section>

      </div>
    </div>
  );
}
