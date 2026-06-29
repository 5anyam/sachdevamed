import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductClient from './product-client';
import { PRODUCTS, getProductBySlug } from '../../../../lib/products-data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | Sachdeva Medline',
      robots: { index: false, follow: false },
    };
  }

  const title = `${product.name} – ${product.tagline} | Sachdeva Medline`;
  const description = `Buy ${product.name} online at ₹${product.price}. ${product.tagline}. CE, ISO, FDA, CDSCO & FAA certified. Free pan-India delivery. 2-year warranty.`;
  const imageUrl = product.images[0];
  const canonical = `https://sachdevamedline.com/product/${product.slug}`;

  return {
    title,
    description,
    keywords: [product.name, product.category, 'oxygen concentrator', 'India', 'buy online', 'Sachdeva Medline', 'Longfian'],
    alternates: { canonical },
    openGraph: {
      type: 'website',
      title,
      description,
      url: canonical,
      siteName: 'Sachdeva Medline',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: product.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: { index: true, follow: true },
    metadataBase: new URL('https://sachdevamedline.com'),
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const canonical = `https://sachdevamedline.com/product/${product.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    description: `${product.tagline}. CE, ISO, FDA, CDSCO & FAA certified. Free pan-India delivery.`,
    image: product.images,
    url: canonical,
    sku: `SM-${product.id}`,
    brand: {
      '@type': 'Brand',
      name: 'Longfian',
    },
    seller: {
      '@type': 'Organization',
      name: 'Sachdeva Medline',
      url: 'https://sachdevamedline.com',
    },
    offers: {
      '@type': 'Offer',
      url: canonical,
      priceCurrency: 'INR',
      price: product.price.toString(),
      priceValidUntil: '2026-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
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
      ratingValue: product.rating.toString(),
      reviewCount: product.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductClient product={product} />
    </>
  );
}
