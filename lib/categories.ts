import { PRODUCTS, type StaticProduct } from './products-data';

export interface SubCategory {
  id: string;
  name: string;
  /** Model names shown when no product page exists yet. */
  models: string[];
  productSlugs: string[];
}

export interface Category {
  slug: string;
  name: string;
  intro: string;
  subcategories: SubCategory[];
}

export const CATEGORIES: Category[] = [
  {
    slug: 'oxygen-concentrators',
    name: 'Oxygen Concentrators',
    intro: 'Genuine Longfian oxygen concentrators for home, car and travel — from the exclusive importer partner in India.',
    subcategories: [
      {
        id: 'portable',
        name: 'Battery Operated Portable Oxygen Concentrator',
        models: ['JAY-1000P'],
        productSlugs: ['longfian-jay-1000p-portable-oxygen-concentrator'],
      },
      {
        id: 'mini',
        name: 'Longfian Oxygen Concentrator - Mini',
        models: ['B-1'],
        productSlugs: ['longfian-b-1-oxygen-concentrator'],
      },
      {
        id: '3l',
        name: 'Longfian Oxygen Concentrator - 3 Litres',
        models: ['JAY-3EW'],
        productSlugs: [],
      },
      {
        id: '5l',
        name: 'Longfian Oxygen Concentrator - 5 Litres',
        models: ['JAY-5', 'JAY-5AW', 'JAY-5CW', 'JAY-5HW'],
        productSlugs: [
          'longfian-jay-5-5-litres-medical-grade-oxygen-concentrator',
          'longfian-jay-5aw-5-litres-medical-grade-oxygen-concentrator',
          'longfian-jay-5cw-oxygen-concentrator',
          'longfian-jay-5hw-oxygen-concentrator',
        ],
      },
      {
        id: '10l',
        name: 'Longfian Oxygen Concentrator - 10 Litres',
        models: ['JAY-10'],
        productSlugs: [],
      },
    ],
  },
  {
    slug: 'bipap-cpap',
    name: 'BiPAP CPAP',
    intro: 'BiPAP and CPAP machines for sleep apnea and respiratory support at home.',
    subcategories: [
      {
        id: 'bipap-cpap',
        name: 'BiPAP & CPAP Machines',
        models: ['BiPAP', 'CPAP'],
        productSlugs: [],
      },
    ],
  },
  {
    slug: 'patient-beds',
    name: 'Patient Beds',
    intro: 'Motorised recliner beds for comfortable home patient care.',
    subcategories: [
      {
        id: 'recliner',
        name: 'Recliner Beds',
        models: ['Patient Recliner Bed'],
        productSlugs: ['patient-recliner-bed'],
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getSubCategoryProducts(sub: SubCategory): StaticProduct[] {
  return sub.productSlugs
    .map((slug) => PRODUCTS.find((p) => p.slug === slug))
    .filter((p): p is StaticProduct => Boolean(p));
}
