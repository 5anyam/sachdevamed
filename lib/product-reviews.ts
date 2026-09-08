/**
 * Curated customer reviews shown alongside the ones fetched from WooCommerce.
 *
 * These must be REAL reviews from actual customers — transcribed WhatsApp
 * feedback, call-back notes, Google Business reviews, emailed testimonials.
 * Get the customer's consent before publishing their words and name.
 *
 * Publishing invented reviews (or reviews written by staff) as genuine customer
 * feedback is prohibited under the Consumer Protection Act 2019 and BIS
 * IS 19000:2022, and it is grounds for delisting on Google Shopping.
 *
 * Anything added here is displayed immediately and does not depend on the CMS
 * being reachable. To also push these into WooCommerce so they are managed in
 * one place, run:  node scripts/import-reviews.mjs --dry-run
 */

export interface CuratedReview {
  /** Local id. Keep negative so it can never collide with a WooCommerce review id. */
  id: number;
  /** Matches the `id` in lib/products-data.ts (1 = JAY-5, 2 = JAY-5AW, 3 = Recliner Bed, 4 = JAY-1000P). */
  productId: number;
  reviewer: string;
  /** 1–5 */
  rating: number;
  review: string;
  /** ISO date, e.g. '2026-07-14'. Shown for ordering; optional. */
  date_created?: string;
  /** City/state, e.g. 'Jaipur, Rajasthan'. Optional. */
  location?: string;
}

export const CURATED_REVIEWS: CuratedReview[] = [
  // Paste real customer reviews here, e.g.:
  // {
  //   id: -1,
  //   productId: 4,
  //   reviewer: 'R. Sharma',
  //   rating: 5,
  //   review: 'Carried it on an IndiGo flight to Chennai without any issue...',
  //   date_created: '2026-07-14',
  //   location: 'Delhi',
  // },
];

export function getCuratedReviews(productId: number): CuratedReview[] {
  return CURATED_REVIEWS.filter((r) => r.productId === productId);
}
