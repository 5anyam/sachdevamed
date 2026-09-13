'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { PRODUCTS } from '../../../lib/products-data';

function getQuery(): string {
  if (typeof window === 'undefined') return '';
  const p = new URLSearchParams(window.location.search);
  return p.get('q')?.trim() || '';
}

export default function SearchPage() {
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    setQuery(getQuery());
    const onPop = () => setQuery(getQuery());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const results = useMemo(() => {
    if (!query) return PRODUCTS;
    // Every word must match somewhere, so "jay 5" and "portable oxygen" both work.
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    const escape = (w: string) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return PRODUCTS.filter((p) => {
      const title = `${p.name} ${p.slug} ${p.category}`.toLowerCase();
      const tagline = p.tagline.toLowerCase();
      return words.every((w) => title.includes(w) || new RegExp(`\\b${escape(w)}\\b`).test(tagline));
    });
  }, [query]);

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      <p className="text-gray-600 mb-6">
        Showing results for: <span className="font-semibold">{query || 'All products'}</span>
      </p>

      {results.length === 0 ? (
        <div className="py-10">
          <p className="text-gray-500 mb-4">No products found for &ldquo;{query}&rdquo;.</p>
          <Link href="/shop" className="text-sm font-semibold text-gray-900 underline">
            View all products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {results.map((p) => (
            <article key={p.id} className="border rounded-xl overflow-hidden hover:shadow-lg transition bg-white">
              <Link href={`/product/${p.slug}`} className="block">
                <div className="aspect-[4/3] bg-gray-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-contain p-3" loading="lazy" />
                </div>
                <div className="p-3">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">{p.category}</p>
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">{p.name}</h3>
                  <div className="text-gray-900 font-semibold text-sm mt-1">
                    {p.price > 0 ? `₹${p.price.toLocaleString('en-IN')}` : 'Price on Request'}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
