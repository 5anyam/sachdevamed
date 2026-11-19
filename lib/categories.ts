import { PRODUCTS, type StaticProduct } from './products-data';

/** A model we sell that has no product page yet — shown as an enquiry card. */
export interface UpcomingModel {
  name: string;
  badge: string;
  category: string;
}

export type CategoryItem = { product: StaticProduct } | { upcoming: UpcomingModel };

export interface Category {
  slug: string;
  name: string;
  intro: string;
  /** Product slugs and upcoming models, in display order. */
  items: (string | UpcomingModel)[];
}

export const CATEGORIES: Category[] = [
  {
    slug: 'oxygen-concentrators',
    name: 'Oxygen Concentrators',
    intro: 'Longfian oxygen concentrators for home, car and travel — from the exclusive importer partner in India.',
    items: [
      'longfian-jay-1000p-portable-oxygen-concentrator',
      'longfian-b-1-oxygen-concentrator',
      'longfian-jay-3ew-oxygen-concentrator',
      'longfian-jay-5-5-litres-medical-grade-oxygen-concentrator',
      'longfian-jay-5aw-5-litres-medical-grade-oxygen-concentrator',
      'longfian-jay-5cw-oxygen-concentrator',
      'longfian-jay-5hw-oxygen-concentrator',
      'longfian-jay-10-oxygen-concentrator',
    ],
  },
  {
    slug: 'bipap-cpap',
    name: 'BiPAP / CPAP Machines',
    intro: 'BMC BiPAP and CPAP machines for sleep apnea and respiratory support at home.',
    items: [
      { name: 'BMC BiPAP - G2S B25VT', badge: 'BiPAP', category: 'BiPAP Machine' },
      { name: 'BMC BiPAP - G2S B30VT', badge: 'BiPAP', category: 'BiPAP Machine' },
      { name: 'BMC AutoCPAP - G2S A20', badge: 'CPAP', category: 'CPAP Machine' },
    ],
  },
  {
    slug: 'patient-recliner-mattress',
    name: 'Patient Recliner Mattress',
    intro: 'Motorised recliner mattress for comfortable home patient care.',
    items: ['patient-recliner-bed'],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getCategoryItems(cat: Category): CategoryItem[] {
  return cat.items.flatMap((item): CategoryItem[] => {
    if (typeof item !== 'string') return [{ upcoming: item }];
    const product = PRODUCTS.find((p) => p.slug === item);
    return product ? [{ product }] : [];
  });
}
