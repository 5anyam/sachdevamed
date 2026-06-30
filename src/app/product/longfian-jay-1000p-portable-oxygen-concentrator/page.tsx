import type { Metadata } from 'next';
import Jay1000PClient from './client';

const TITLE = 'Longfian JAY-1000P Portable Oxygen Concentrator | FDA & FAA Approved | Sachdeva Medline';
const DESCRIPTION =
  'Buy Longfian JAY-1000P portable oxygen concentrator in India at ₹95,000. 1.98 kg, FDA cleared, FAA approved for flights, CDSCO registered. 93%±3% pure oxygen, 11-hour battery (2 batteries included). Exclusive importer — Sachdeva Medline. Free pan-India delivery. 2-year warranty.';
const CANONICAL = 'https://sachdevamedline.com/product/longfian-jay-1000p-portable-oxygen-concentrator';
const IMAGE = 'https://drive.google.com/thumbnail?id=1PMlRVzIuLxUaFu6tC-GPJL8H8tolqD0T&sz=w2000';
const PRICE = '95000';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Longfian JAY-1000P',
    'portable oxygen concentrator India',
    'FAA approved oxygen concentrator',
    'FDA cleared oxygen concentrator',
    'CDSCO oxygen concentrator',
    'oxygen concentrator for travel',
    'oxygen concentrator flight safe',
    'oxygen concentrator buy online India',
    'portable oxygen COPD',
    'Sachdeva Medline',
    'Longfian oxygen concentrator',
    'oxygen concentrator 1.98 kg',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'Sachdeva Medline',
    images: [{ url: IMAGE, width: 1200, height: 630, alt: 'Longfian JAY-1000P Portable Oxygen Concentrator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://sachdevamedline.com'),
};

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: 'Longfian JAY-1000P Portable Oxygen Concentrator',
  description:
    'FDA cleared, FAA approved, CDSCO registered portable oxygen concentrator. 1.98 kg, 93%±3% oxygen purity, up to 11 hours battery. CE and ISO certified.',
  image: [
    'https://drive.google.com/thumbnail?id=1PMlRVzIuLxUaFu6tC-GPJL8H8tolqD0T&sz=w2000',
    'https://drive.google.com/thumbnail?id=13InsWquc7HhRHUt2P9A0gVgpvviOUsP6&sz=w2000',
    'https://drive.google.com/thumbnail?id=17wYaPDQbETH7AFSaZUxe_lR-HUYSdIPz&sz=w2000',
    'https://drive.google.com/thumbnail?id=1werhzIak53KRDx7bLagADW-IAFIgVaQ1&sz=w2000',
  ],
  url: CANONICAL,
  sku: 'SM-JAY1000P',
  mpn: 'JAY-1000P',
  brand: { '@type': 'Brand', name: 'Longfian' },
  manufacturer: {
    '@type': 'Organization',
    name: 'Longfian Scitech Co., Ltd',
    url: 'https://www.longfian.com',
  },
  seller: {
    '@type': 'Organization',
    name: 'Sachdeva Medline',
    url: 'https://sachdevamedline.com',
    telephone: '+91-XXXXXXXXXX',
    address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  },
  category: 'Portable Oxygen Concentrator',
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'Weight', value: '1.98 kg' },
    { '@type': 'PropertyValue', name: 'Oxygen Purity', value: '93%±3%' },
    { '@type': 'PropertyValue', name: 'Flow Settings', value: '1-5 Pulse Dose' },
    { '@type': 'PropertyValue', name: 'Battery Life', value: 'Up to 11 hours' },
    { '@type': 'PropertyValue', name: 'FAA Approved', value: 'Yes' },
    { '@type': 'PropertyValue', name: 'FDA Cleared', value: 'Yes (K243833)' },
    { '@type': 'PropertyValue', name: 'Certifications', value: 'CE, ISO, FDA, CDSCO, FAA' },
  ],
  offers: {
    '@type': 'Offer',
    url: CANONICAL,
    priceCurrency: 'INR',
    price: PRICE,
    priceValidUntil: '2026-12-31',
    itemCondition: 'https://schema.org/NewCondition',
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'Sachdeva Medline' },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: 'INR' },
      shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'IN' },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 1, unitCode: 'DAY' },
        transitTime: { '@type': 'QuantitativeValue', minValue: 3, maxValue: 5, unitCode: 'DAY' },
      },
    },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
  award: 'CE Certified · ISO 9001 · FDA Cleared · CDSCO Registered · FAA Approved',
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Jay1000PClient />
    </>
  );
}
