import type { Metadata } from 'next';
import { getConcentratorBySlug } from './concentrator-products';
import { buildFAQJsonLd } from './product-faqs';
import { getReviewStats } from './product-reviews';

const SITE = 'https://sachdevamedline.com';

export function buildConcentratorMetadata(slug: string): Metadata {
  const p = getConcentratorBySlug(slug);
  if (!p) return { title: 'Product Not Found | Sachdeva Medline', robots: { index: false, follow: false } };

  const title = `${p.name} ${p.subtitle} | Sachdeva Medline`;
  const canonical = `${SITE}/product/${p.slug}`;
  const image = `${SITE}${p.gallery[0]}`;

  return {
    title,
    description: p.seoDescription,
    keywords: p.keywords,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      title,
      description: p.seoDescription,
      url: canonical,
      siteName: 'Sachdeva Medline',
      images: [{ url: image, width: 1200, height: 630, alt: `${p.name} ${p.subtitle}` }],
    },
    twitter: { card: 'summary_large_image', title, description: p.seoDescription, images: [image] },
    robots: { index: true, follow: true },
    metadataBase: new URL(SITE),
  };
}

export function buildConcentratorJsonLd(slug: string) {
  const p = getConcentratorBySlug(slug);
  if (!p) return null;

  const canonical = `${SITE}/product/${p.slug}`;
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: `${p.name} ${p.subtitle}`,
    description: p.seoDescription,
    image: p.gallery.slice(0, 4).map((g) => `${SITE}${g}`),
    url: canonical,
    sku: `SM-${p.id}`,
    mpn: p.name.replace('Longfian ', ''),
    brand: { '@type': 'Brand', name: 'Longfian' },
    manufacturer: { '@type': 'Organization', name: 'Longfian Scitech Co., Ltd', url: 'https://www.longfian.com' },
    seller: { '@type': 'Organization', name: 'Sachdeva Medline', url: SITE },
    category: 'Oxygen Concentrator',
    additionalProperty: p.specs.flatMap((g) =>
      g.rows.map(([name, value]) => ({ '@type': 'PropertyValue', name, value })),
    ),
  };

  /* Offer is only advertised once a real price is set — Google rejects a
     zero-price offer and it would misrepresent availability. */
  if (p.price > 0) {
    jsonLd.offers = {
      '@type': 'Offer',
      url: canonical,
      priceCurrency: 'INR',
      price: p.price.toString(),
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
    };
  }

  /* Same rule as the other product pages: only claim a rating real reviews back. */
  const stats = getReviewStats(p.id);
  if (stats.count > 0) {
    jsonLd.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: stats.average.toString(),
      reviewCount: stats.count.toString(),
      bestRating: '5',
      worstRating: '1',
    };
  }

  return jsonLd;
}

export function buildConcentratorFAQJsonLd(slug: string) {
  return buildFAQJsonLd(slug);
}
