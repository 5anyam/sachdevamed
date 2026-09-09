import { notFound } from 'next/navigation';
import ConcentratorProductPage from '../../../../components/ConcentratorProductPage';
import { getConcentratorBySlug } from '../../../../lib/concentrator-products';
import { buildConcentratorMetadata, buildConcentratorJsonLd, buildConcentratorFAQJsonLd } from '../../../../lib/concentrator-seo';

const SLUG = 'longfian-jay-5aw-5-litres-medical-grade-oxygen-concentrator';

export const metadata = buildConcentratorMetadata(SLUG);

export default function Page() {
  const product = getConcentratorBySlug(SLUG);
  if (!product) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildConcentratorJsonLd(SLUG)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildConcentratorFAQJsonLd(SLUG)) }}
      />
      <ConcentratorProductPage product={product} />
    </>
  );
}
