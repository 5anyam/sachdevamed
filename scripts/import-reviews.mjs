#!/usr/bin/env node
/**
 * Pushes the reviews in lib/product-reviews.ts into WooCommerce, so they are
 * managed in the CMS alongside reviews submitted through the site.
 *
 *   node --experimental-strip-types scripts/import-reviews.mjs --dry-run
 *   node --experimental-strip-types scripts/import-reviews.mjs
 *
 * Config (env or .env.local):
 *   CMS_URL           default https://cms.sachdevamedline.com
 *   CONSUMER_KEY      WooCommerce REST key
 *   CONSUMER_SECRET   WooCommerce REST secret
 *
 * Reviews already present on the product (same reviewer + opening text) are
 * skipped, so the script is safe to re-run.
 */

import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DRY_RUN = process.argv.includes('--dry-run');

/* .env.local -> process.env (without adding a dotenv dependency) */
const envPath = join(ROOT, '.env.local');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

const CMS_URL = (process.env.CMS_URL || process.env.API_BASE || 'https://cms.sachdevamedline.com').replace(/\/$/, '');
const KEY = process.env.CONSUMER_KEY;
const SECRET = process.env.CONSUMER_SECRET;

if (!KEY || !SECRET) {
  console.error('✗ CONSUMER_KEY / CONSUMER_SECRET missing. Set them in .env.local or the environment.');
  process.exit(1);
}

const API = `${CMS_URL}/wp-json/wc/v3`;
const auth = `consumer_key=${KEY}&consumer_secret=${SECRET}`;

const { CURATED_REVIEWS } = await import('../lib/product-reviews.ts');

if (!CURATED_REVIEWS.length) {
  console.log('Nothing to import — lib/product-reviews.ts is empty.');
  console.log('Add real customer reviews there first, then re-run.');
  process.exit(0);
}

console.log(`CMS      : ${CMS_URL}`);
console.log(`Reviews  : ${CURATED_REVIEWS.length}${DRY_RUN ? '  (dry run — nothing will be written)' : ''}\n`);

/* Fail fast with a clear message if the CMS host is not live yet. */
try {
  const ping = await fetch(`${API}/products?${auth}&per_page=1`);
  if (!ping.ok) throw new Error(`HTTP ${ping.status} — check the REST key/secret`);
} catch (err) {
  console.error(`✗ Cannot reach ${CMS_URL}\n  ${err.message}`);
  console.error('  Point CMS_URL at the live WooCommerce install and try again.');
  process.exit(1);
}

const fingerprint = (reviewer, review) => `${reviewer}|${String(review).replace(/<[^>]+>/g, '').slice(0, 60)}`;

const existingByProduct = new Map();
async function existingFor(productId) {
  if (!existingByProduct.has(productId)) {
    const res = await fetch(`${API}/products/reviews?product=${productId}&${auth}&per_page=100`);
    const list = res.ok ? await res.json() : [];
    existingByProduct.set(productId, new Set(list.map((r) => fingerprint(r.reviewer, r.review || ''))));
  }
  return existingByProduct.get(productId);
}

let created = 0;
let skipped = 0;
let failed = 0;

for (const r of CURATED_REVIEWS) {
  const label = `[product ${r.productId}] ${r.reviewer} (${r.rating}★)`;
  const seen = await existingFor(r.productId);

  if (seen.has(fingerprint(r.reviewer, r.review))) {
    console.log(`· skip    ${label} — already in CMS`);
    skipped++;
    continue;
  }

  if (DRY_RUN) {
    console.log(`+ would create ${label}`);
    created++;
    continue;
  }

  const body = {
    product_id: r.productId,
    reviewer: r.reviewer,
    reviewer_email: r.reviewer_email || 'reviews@sachdevamedline.com',
    review: r.review,
    rating: r.rating,
    status: 'approved',
  };
  if (r.date_created) body.date_created = `${r.date_created}T10:00:00`;

  const res = await fetch(`${API}/products/reviews?${auth}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (res.ok) {
    console.log(`✓ created ${label}`);
    seen.add(fingerprint(r.reviewer, r.review));
    created++;
  } else {
    console.error(`✗ failed  ${label} — HTTP ${res.status}: ${(await res.text()).slice(0, 160)}`);
    failed++;
  }
}

console.log(`\n${DRY_RUN ? 'Would create' : 'Created'}: ${created}   Skipped: ${skipped}   Failed: ${failed}`);
process.exit(failed ? 1 : 0);
