/**
 * Page content for the stationary Longfian concentrators, rendered by
 * components/ConcentratorProductPage.tsx on the same layout as the JAY-1000P.
 *
 * Every spec below is taken from the manufacturer artwork in the shared Drive
 * folder — do not change a value unless the artwork or datasheet changes.
 *
 * PRICES ARE NOT SET YET. `price: 0` makes the page render an "on request"
 * block with a WhatsApp/call CTA instead of Buy Now. Fill in `price` and `mrp`
 * (both in ₹) to switch a product over to normal checkout.
 */

export interface SpecGroup {
  group: string;
  rows: [string, string][];
}

export interface Highlight {
  icon: string;
  title: string;
  sub?: string;
}

export interface Benefit {
  icon: string;
  title: string;
  accent?: string;
  text: string;
}

export interface Stat {
  val: string;
  lbl: string;
  sub: string;
}

export interface BoxItem {
  icon: string;
  item: string;
  desc: string;
}

export interface ConcentratorProduct {
  id: number;
  slug: string;
  name: string;
  subtitle: string;
  /** ₹. 0 = price not set yet; the page shows an enquiry CTA instead of checkout. */
  price: number;
  /** ₹ MRP for the strike-through. Ignored when price is 0. */
  mrp: number;
  badge: string;
  /** Public paths. All images in one product share an aspect ratio. */
  gallery: string[];
  /** 'square' for 1:1 artwork, 'wide' for 970x600 artwork. */
  frame: 'square' | 'wide';
  highlights: Highlight[];
  notes: string[];
  tagline: string;
  stats: Stat[];
  benefits: Benefit[];
  specs: SpecGroup[];
  box: BoxItem[];
  seoDescription: string;
  keywords: string[];
}

const g = (dir: string, files: string[]) => files.map((f) => `/products/${dir}/${f}`);

export const CONCENTRATORS: ConcentratorProduct[] = [
  /* ──────────────────────────── JAY-5 ──────────────────────────── */
  {
    id: 1,
    slug: 'longfian-jay-5-5-litres-medical-grade-oxygen-concentrator',
    name: 'Oxygen Concentrator JAY-5',
    subtitle: 'Longfian 5 Litre Medical Grade Oxygen Concentrator',
    price: 24900,
    mrp: 24900,
    badge: 'Best Seller',
    frame: 'square',
    gallery: g('jay-5', ['01.jpg', '02.jpg']),
    highlights: [
      { icon: '💨', title: '0.5 – 5 L/min Flow', sub: 'Above 93% oxygen concentration at all flow rates' },
      { icon: '🔇', title: 'Under 42 dB', sub: 'Quiet enough for bedroom use' },
      { icon: '🌬️', title: 'Inbuilt Nebuliser & HEPA Filter', sub: 'With digital display and all safety alarms' },
    ],
    notes: [
      '*0.5–5 L/min adjustable flow to meet different oxygen needs',
      '*Above 93% oxygen concentration at all flow rates',
      '*Low-noise operation: less than 42 dB',
      '*Compact and elegant design that blends perfectly with your home',
      '*Reliable performance: your trust, our commitment',
      '*Easy mobility: smooth-rolling wheels for greater freedom and convenience',
      '*Inbuilt nebuliser and HEPA filter',
      '*Digital display with all safety alarms',
    ],
    tagline: 'Reliable, quiet 5 litre oxygen concentrator for round-the-clock home therapy',
    stats: [
      { val: '25+', lbl: 'Years of Experience', sub: 'Longfian — established 1999' },
      { val: '#1', lbl: 'Oxygen Concentrator Manufacturer in the World', sub: "Longfian is the world's biggest manufacturer of oxygen concentrators" },
      { val: '93%+', lbl: 'Oxygen Purity', sub: 'At all flow rates' },
      { val: '<42 dB', lbl: 'Noise Level', sub: 'Quiet enough for bedroom use' },
    ],
    benefits: [
      { icon: '🎚️', title: 'Flow Adjustable 0.5 – 5 L', text: 'Adjustable flow to meet different oxygen needs — set it to the rate your doctor has prescribed.' },
      { icon: '💧', title: 'Above 93% Oxygen', text: 'Above 93% oxygen concentration at all flow rates through PSA molecular sieve technology.' },
      { icon: '🔇', title: 'Under 42 dB', accent: 'Low-Noise Operation', text: 'Quiet enough to run beside a bed at night without disturbing sleep.' },
      { icon: '🌬️', title: 'Inbuilt Nebuliser & HEPA Filter', text: 'Take nebulised medication without a second machine, with a HEPA filter cleaning the incoming air.' },
      { icon: '📊', title: 'Digital Display', text: 'Clear digital readout with all safety alarms built in — no complicated menus to learn.' },
      { icon: '🛞', title: 'Easy Mobility', text: 'Smooth-rolling wheels for greater freedom and convenience when moving between rooms.' },
      { icon: '🏠', title: 'Compact & Elegant', text: 'A compact, elegant design that blends perfectly with your home.' },
      { icon: '⏱️', title: '24/7 Operation', text: 'Built for continuous round-the-clock use at home — reliable performance you can count on.' },
      { icon: '🛠️', title: '15+ Service Centres', text: 'Backed by Sachdeva Medline, the exclusive importer, with service support across India.' },
    ],
    specs: [
      {
        group: 'Performance',
        rows: [
          ['Oxygen Flow Rate', '0.5 – 5 L/min'],
          ['Oxygen Purity', 'Above 93% (at all flow rates)'],
          ['Technology', 'PSA Molecular Sieve'],
          ['Noise Level', '< 42 dB'],
        ],
      },
      {
        group: 'Physical & Power',
        rows: [
          ['Power Supply', '110V / 220V'],
          ['Power Consumption', '280 W'],
          ['Display', 'Digital display with safety alarms'],
          ['Mobility', 'Smooth-rolling wheels'],
        ],
      },
      {
        group: 'Features',
        rows: [
          ['Nebuliser & HEPA Filter', 'Inbuilt'],
          ['Humidifier Bottle', 'Included'],
          ['Operation', 'Continuous 24/7'],
          ['Alarms', 'Low purity, power failure, over-temperature'],
        ],
      },
      {
        group: 'Compliance & Support',
        rows: [
          ['Warranty', '2 Years'],
          ['Manufacturer', 'LONGFIAN'],
          ['India Partner', 'SACHDEVA MEDLINE (9891521090)'],
          ['Service', '15+ centres across India'],
        ],
      },
    ],
    box: [
      { icon: '🔬', item: 'JAY-5 Unit', desc: 'The main concentrator device' },
      { icon: '💧', item: 'Humidifier Bottle', desc: 'For moisture-rich therapy' },
      { icon: '🔌', item: 'Power Cable', desc: 'Standard Indian mains cable' },
      { icon: '👃', item: 'Nasal Cannula', desc: 'For oxygen delivery' },
      { icon: '🌬️', item: 'Nebuliser Mask', desc: 'For nebulised medication' },
      { icon: '🔧', item: 'Spare Filter', desc: 'Replacement air filter' },
      { icon: '📖', item: 'User Manual', desc: 'Setup and operating guide' },
      { icon: '📋', item: 'Warranty Card', desc: 'Registered by Sachdeva Medline' },
    ],
    seoDescription:
      'Buy the Longfian JAY-5 5 litre medical grade oxygen concentrator in India. 0.5–5 L/min adjustable flow, above 93% oxygen at all flow rates, under 42 dB, inbuilt nebuliser and HEPA filter, digital display with safety alarms. Sachdeva Medline — free pan-India delivery.',
    keywords: [
      'Longfian JAY-5',
      'oxygen concentrator 5 litre',
      '5 LPM oxygen concentrator',
      'home oxygen concentrator India',
      'oxygen concentrator with nebuliser',
      'Sachdeva Medline',
    ],
  },

  /* ─────────────────────────── JAY-5CW ─────────────────────────── */
  {
    id: 5,
    slug: 'longfian-jay-5cw-oxygen-concentrator',
    name: 'Oxygen Concentrator JAY-5CW',
    subtitle: 'Longfian 5 Litre Medical Oxygen Concentrator',
    price: 0, // TODO: selling price in ₹
    mrp: 0, // TODO: MRP in ₹
    badge: 'Latest Model',
    frame: 'square',
    gallery: g('jay-5cw', ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '05.jpg']),
    highlights: [
      { icon: '💨', title: '0.5 – 5 L/min Flow', sub: 'Above 93% oxygen concentration at all flow rates' },
      { icon: '⚖️', title: 'Only 16 kg', sub: 'Smaller size, easier to carry' },
      { icon: '🌬️', title: 'Inbuilt Nebuliser & HEPA Filter', sub: 'The latest improved model' },
    ],
    notes: [
      '*0.5–5 L/min adjustable flow to meet different oxygen needs',
      '*Above 93% oxygen concentration at all flow rates',
      '*Low-noise operation: less than 42 dB',
      '*Compact and elegant design that blends perfectly with your home',
      '*Reliable performance: your trust, our commitment',
      '*Easy mobility: smooth-rolling wheels for greater freedom and convenience',
      '*Inbuilt nebuliser and HEPA filter',
      '*Digital display with all safety alarms',
    ],
    tagline: 'The latest 5 litre Longfian model — now with a nebulizer outlet and full lithium sieve beds',
    stats: [
      { val: '25+', lbl: 'Years of Experience', sub: 'Longfian — established 1999' },
      { val: '#1', lbl: 'Oxygen Concentrator Manufacturer in the World', sub: "Longfian is the world's biggest manufacturer of oxygen concentrators" },
      { val: '93%+', lbl: 'Oxygen Purity', sub: 'Medical-grade PSA technology' },
      { val: '25,000 hrs', lbl: 'Product Life', sub: 'Built for years of daily use' },
    ],
    benefits: [
      { icon: '🔬', title: 'Full Lithium Sieve Beds', text: 'Uses the same grade of lithium molecular sieve as Philips units — better oxygen yield and a longer service life than standard zeolite beds.' },
      { icon: '🌬️', title: 'Built-in Nebulizer Outlet', text: 'The latest improved model adds a dedicated nebulizer port, so you can take nebulised medication without a separate machine.' },
      { icon: '⚖️', title: 'Only 16 kg', accent: 'Light & Compact', text: 'Smaller and lighter than most 5 litre concentrators, with castor wheels, so it moves from room to room without lifting.' },
      { icon: '⏱️', title: 'Up to 25,000 Hours', text: 'Rated for a product life of 25,000 working hours — years of continuous daily therapy.' },
      { icon: '📊', title: 'Digital Display', text: 'Clear digital readout with all safety alarms built in — no complicated menus to learn.' },
      { icon: '🔇', title: 'Under 42 dB', text: 'Quiet enough to run beside a bed at night without disturbing sleep.' },
      { icon: '⚡', title: 'Just 350W', text: 'Low power consumption keeps running costs down even with round-the-clock use.' },
      { icon: '🏅', title: 'CE · ISO · CDSCO', text: 'CDSCO Licence IMP/MD/2025/000509 — legally imported and registered for sale in India.' },
      { icon: '🛠️', title: '15+ Service Centres', text: 'After-sales support from more than 15 service centres across India, backed by Sachdeva Medline.' },
    ],
    specs: [
      {
        group: 'Performance',
        rows: [
          ['Oxygen Flow Rate', '0.5 – 5 L/min'],
          ['Oxygen Purity', 'Above 93%'],
          ['Technology', 'PSA — Full Lithium Sieve Beds'],
          ['Noise Level', '< 42 dB'],
        ],
      },
      {
        group: 'Physical & Power',
        rows: [
          ['Net Weight', '16 kg'],
          ['Power Consumption', '350 W'],
          ['Display', 'Digital display with safety alarms'],
          ['Product Life', 'Up to 25,000 hours'],
        ],
      },
      {
        group: 'Features',
        rows: [
          ['Nebuliser & HEPA Filter', 'Inbuilt'],
          ['Humidifier Bottle', 'Included'],
          ['Mobility', 'Castor wheels + carry handle'],
          ['Alarms', 'Low purity, pressure, power failure'],
        ],
      },
      {
        group: 'Compliance & Support',
        rows: [
          ['Certifications', 'CE · ISO · CDSCO'],
          ['CDSCO Licence', 'IMP/MD/2025/000509'],
          ['Manufacturer', 'LONGFIAN'],
          ['India Partner', 'SACHDEVA MEDLINE (9891521090)'],
        ],
      },
    ],
    box: [
      { icon: '🔬', item: 'JAY-5CW Unit', desc: 'The main concentrator device' },
      { icon: '💧', item: 'Humidifier Bottle', desc: 'For moisture-rich therapy' },
      { icon: '🔌', item: 'Power Cable', desc: 'Standard Indian mains cable' },
      { icon: '👃', item: 'Nasal Cannula', desc: 'For oxygen delivery' },
      { icon: '🌬️', item: 'Nebuliser Mask', desc: 'Works with the nebulizer outlet' },
      { icon: '🔧', item: 'Spare Filter', desc: 'Replacement air filter' },
      { icon: '📖', item: 'User Manual', desc: 'Setup and operating guide' },
      { icon: '📋', item: 'Warranty Card', desc: 'Registered by Sachdeva Medline' },
    ],
    seoDescription:
      'Buy the Longfian JAY-5CW 5 litre medical oxygen concentrator in India. Above 93% oxygen purity, nebulizer outlet, full lithium sieve beds, only 16 kg, under 42 dB, 350W. CDSCO registered, CE and ISO certified. Exclusive importer Sachdeva Medline — free pan-India delivery.',
    keywords: [
      'Longfian JAY-5CW',
      'oxygen concentrator 5 litre',
      '5 LPM oxygen concentrator',
      'oxygen concentrator with nebulizer',
      'home oxygen concentrator India',
      'CDSCO oxygen concentrator',
      'Sachdeva Medline',
    ],
  },

  /* ─────────────────────────── JAY-5HW ─────────────────────────── */
  {
    id: 6,
    slug: 'longfian-jay-5hw-oxygen-concentrator',
    name: 'Oxygen Concentrator JAY-5HW',
    subtitle: 'Longfian 5 Litre Oxygen Concentrator with HEPA Filter & Nebuliser',
    price: 0, // TODO: selling price in ₹
    mrp: 0, // TODO: MRP in ₹
    badge: 'Purity On Display',
    frame: 'square',
    gallery: g('jay-5hw', ['09.png', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '08.jpg', '07.jpg']),
    highlights: [
      { icon: '💨', title: '0.5 – 5 L/min Flow', sub: 'Above 93% purity at all flow rates' },
      { icon: '📟', title: 'Purity & Flow On Display', sub: 'Live oxygen concentration readout' },
      { icon: '🌬️', title: 'HEPA Filter + Nebuliser', sub: 'Both built into the unit' },
    ],
    notes: [
      '*0.5–5 L/min adjustable flow to meet different oxygen needs',
      '*Above 93% oxygen concentration at all flow rates',
      '*Big display showing the oxygen flow rate and oxygen concentration',
      '*Low-noise operation: less than 39 dB',
      '*Compact and elegant design that blends perfectly with your home',
      '*Reliable performance: your trust, our commitment',
      '*Easy mobility: smooth-rolling wheels for greater freedom and convenience',
      '*Inbuilt nebuliser and HEPA filter',
      '*All safety alarms',
    ],
    tagline: 'High-purity oxygen for home and clinical use — with live purity readout, HEPA filter and nebuliser',
    stats: [
      { val: '25+', lbl: 'Years of Experience', sub: 'Longfian — established 1999' },
      { val: '#1', lbl: 'Oxygen Concentrator Manufacturer in the World', sub: "Longfian is the world's biggest manufacturer of oxygen concentrators" },
      { val: '93% ± 3%', lbl: 'Oxygen Purity', sub: 'At every flow rate' },
      { val: '<39 dB', lbl: 'Noise Level', sub: 'Quieter than a library' },
    ],
    benefits: [
      { icon: '📟', title: 'Purity Visible On Display', text: 'The LED panel shows live oxygen concentration, flow rate and a timing function — you can confirm the therapy is working at a glance.' },
      { icon: '🌬️', title: 'HEPA Filter & Nebuliser', text: 'An inbuilt HEPA filter cleans incoming air, and the nebuliser feature lets you take medication without a separate machine.' },
      { icon: '💧', title: '93% ± 3% Oxygen Purity', text: 'Delivers 93% ± 3% oxygen consistently at all flow rates, using advanced PSA molecular sieve technology.' },
      { icon: '🔇', title: 'Under 39 dB', accent: 'Whisper Quiet', text: 'Quiet performance at less than 39 dB — one of the quietest 5 litre concentrators, ideal for overnight use.' },
      { icon: '🔔', title: 'Safety First', text: 'Built-in alarms for low purity, high and low pressure, power failure, overheating and system failure.' },
      { icon: '👆', title: 'User-Friendly Design', text: 'Intuitive control panel, large display and an easy-to-read flowmeter — simple for elderly patients and caregivers.' },
      { icon: '🌱', title: 'Efficient & Durable', text: 'Advanced PSA technology for stable output, lower power consumption and a longer working life.' },
      { icon: '🏅', title: 'CE · CDSCO · FDA · ISO', text: 'Certified to international standards and registered with CDSCO for import and sale in India.' },
      { icon: '🛡️', title: '2 Years Warranty', text: '2 years or 8,000 working hours, whichever is earlier — supported by 15+ service centres across India.' },
    ],
    specs: [
      {
        group: 'Performance',
        rows: [
          ['Oxygen Flow Rate', '0.5 – 5 L/min'],
          ['Oxygen Purity', '93% ± 3% (at all flow rates)'],
          ['Outlet Pressure', '0.04 – 0.07 MPa'],
          ['Noise Level', '< 39 dB'],
        ],
      },
      {
        group: 'Physical & Power',
        rows: [
          ['Net Weight', '16 kg'],
          ['Dimensions (L × W × H)', '36 × 28 × 65 cm'],
          ['Power Supply', 'AC 230V, 50 Hz'],
          ['Power Consumption', '350 W'],
        ],
      },
      {
        group: 'Features',
        rows: [
          ['Display', 'LED display with timing function'],
          ['HEPA Filter', 'Inbuilt'],
          ['Nebuliser', 'Inbuilt'],
          ['Alarms', 'Low purity, high/low pressure, power failure, overheat, system failure'],
        ],
      },
      {
        group: 'Compliance & Support',
        rows: [
          ['Certifications', 'CE · CDSCO · FDA · ISO'],
          ['Warranty', '2 Years or 8,000 working hours'],
          ['Manufacturer', 'LONGFIAN'],
          ['India Partner', 'SACHDEVA MEDLINE (9891521090)'],
        ],
      },
    ],
    box: [
      { icon: '🔬', item: 'JAY-5HW Unit', desc: 'The main concentrator device' },
      { icon: '💧', item: 'Humidifier Bottle', desc: 'For moisture-rich therapy' },
      { icon: '🔌', item: 'Power Cable', desc: 'Standard Indian mains cable' },
      { icon: '👃', item: 'Nasal Cannula', desc: 'For oxygen delivery' },
      { icon: '🌬️', item: 'Nebuliser Mask', desc: 'Works with the nebuliser feature' },
      { icon: '🔧', item: 'Spare Filter', desc: 'Replacement air filter' },
      { icon: '📖', item: 'User Manual', desc: 'Setup and operating guide' },
      { icon: '📋', item: 'Warranty Card', desc: 'Registered by Sachdeva Medline' },
    ],
    seoDescription:
      'Buy the Longfian JAY-5HW 5 litre oxygen concentrator in India. 93%±3% purity shown live on the display, inbuilt HEPA filter and nebuliser, under 39 dB, 16 kg, 350W. CE, CDSCO, FDA and ISO certified. 2-year warranty from Sachdeva Medline with free pan-India delivery.',
    keywords: [
      'Longfian JAY-5HW',
      'oxygen concentrator with HEPA filter',
      'oxygen concentrator with nebuliser',
      '5 LPM oxygen concentrator',
      'oxygen concentrator purity display',
      'CDSCO oxygen concentrator',
      'Sachdeva Medline',
    ],
  },

  /* ─────────────────────────── JAY-5AW ─────────────────────────── */
  {
    id: 2,
    slug: 'longfian-jay-5aw-5-litres-medical-grade-oxygen-concentrator',
    name: 'Oxygen Concentrator JAY-5AW',
    subtitle: 'Longfian 5 Litre Medical Grade Oxygen Concentrator',
    price: 24900,
    mrp: 24900,
    badge: 'Most Convenient',
    frame: 'wide',
    gallery: g('jay-5aw', ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg']),
    highlights: [
      { icon: '💨', title: '0.5 – 5 L/min Flow', sub: 'Above 93% oxygen concentration at all flow rates' },
      { icon: '🔇', title: 'Under 42 dB', sub: 'Oil-free compressor — no disturbance at night' },
      { icon: '🌬️', title: 'Inbuilt Nebuliser & HEPA Filter', sub: 'Complete home oxygen setup in the box' },
    ],
    notes: [
      '*0.5–5 L/min adjustable flow to meet different oxygen needs',
      '*Above 93% oxygen concentration at all flow rates',
      '*Low-noise operation: less than 42 dB',
      '*Compact and elegant design that blends perfectly with your home',
      '*Reliable performance: your trust, our commitment',
      '*Easy mobility: smooth-rolling wheels for greater freedom and convenience',
      '*Inbuilt nebuliser and HEPA filter',
      '*Digital display with all safety alarms',
    ],
    tagline: 'Designed for stable, long-duration oxygen therapy in home and clinical settings',
    stats: [
      { val: '25+', lbl: 'Years of Experience', sub: 'Longfian — established 1999' },
      { val: '#1', lbl: 'Oxygen Concentrator Manufacturer in the World', sub: "Longfian is the world's biggest manufacturer of oxygen concentrators" },
      { val: '93%+', lbl: 'Oxygen Purity', sub: 'Above 93% concentration always' },
      { val: '<42 dB', lbl: 'Noise Level', sub: 'Oil-free compressor' },
    ],
    benefits: [
      { icon: '🔇', title: 'No Disturbance At Night', accent: 'Under 42 dB', text: 'A powerful oil-free air compressor keeps the unit under 42 dB — quieter than a library, so it can run beside a bed all night.' },
      { icon: '💧', title: 'Above 93% Oxygen', text: 'Delivers above 93% oxygen concentration at all times through advanced PSA molecular sieve technology.' },
      { icon: '🎚️', title: 'Flow Adjustable 0.5 – 5 L', text: "The flow meter can easily be adjusted from 0.5 to 5 litres as per the patient's prescribed requirement." },
      { icon: '🔔', title: 'Smart Safety Monitoring', text: 'Power failure alarm, high/low pressure alert, low oxygen purity alert, temperature protection and LCD status indicators.' },
      { icon: '📊', title: 'LCD Status Display', text: 'Clear LCD panel showing status and alerts at a glance — easy for elderly patients and caregivers to read.' },
      { icon: '🧳', title: 'Compact & Space-Friendly', text: 'Sturdy, durable build in a compact footprint with castor wheels — easy to position and move around the home.' },
      { icon: '🌬️', title: 'Nebuliser Mask In The Box', text: 'Ships as a complete home oxygen setup — humidifier bottle, nasal cannula, nebuliser mask and a spare filter included.' },
      { icon: '🏅', title: 'CE · ISO · CDSCO · FDA', text: 'Approved to international standards and registered with CDSCO for import and sale in India.' },
      { icon: '🛠️', title: '15+ Service Centres', text: 'Backed by Sachdeva Medline, the exclusive importer, with service support across India.' },
    ],
    specs: [
      {
        group: 'Performance',
        rows: [
          ['Oxygen Flow Rate', '0.5 – 5 L/min'],
          ['Oxygen Purity', 'Above 93%'],
          ['Technology', 'PSA Molecular Sieve'],
          ['Noise Level', '< 42 dB'],
        ],
      },
      {
        group: 'Physical & Power',
        rows: [
          ['Compressor', 'Oil-free air compressor'],
          ['Display', 'LCD status indicators'],
          ['Mobility', 'Castor wheels + carry handle'],
          ['Nebuliser & HEPA Filter', 'Inbuilt'],
        ],
      },
      {
        group: 'Safety',
        rows: [
          ['Power Failure', 'Audible alarm'],
          ['Pressure', 'High / low pressure alert'],
          ['Purity', 'Low oxygen purity alert'],
          ['Temperature', 'Over-temperature protection'],
        ],
      },
      {
        group: 'Compliance & Support',
        rows: [
          ['Certifications', 'CE · ISO · CDSCO · FDA'],
          ['Warranty', '2 Years'],
          ['Manufacturer', 'LONGFIAN'],
          ['India Partner', 'SACHDEVA MEDLINE (9891521090)'],
        ],
      },
    ],
    box: [
      { icon: '🔬', item: 'Oxygen Concentrator Unit', desc: 'The main JAY-5AW device' },
      { icon: '💧', item: 'Humidifier Bottle', desc: 'For moisture-rich therapy' },
      { icon: '🔌', item: 'Power Cable', desc: 'Standard Indian mains cable' },
      { icon: '📖', item: 'User Manual', desc: 'Setup and operating guide' },
      { icon: '👃', item: 'Nasal Cannula', desc: 'For oxygen delivery' },
      { icon: '🔧', item: 'Black Spare Filter', desc: 'Replacement air filter' },
      { icon: '🌬️', item: 'Nebuliser Mask', desc: 'For nebulised medication' },
      { icon: '📋', item: 'Warranty Card', desc: 'Registered by Sachdeva Medline' },
    ],
    seoDescription:
      'Buy the Longfian JAY-5AW 5 litre medical grade oxygen concentrator in India. Above 93% oxygen purity, oil-free compressor under 42 dB, flow adjustable 0.5–5 litres, LCD status display and full safety alarms. CE, ISO, CDSCO and FDA approved. Sachdeva Medline — free pan-India delivery.',
    keywords: [
      'Longfian JAY-5AW',
      'oxygen concentrator 5 litre',
      '5 LPM oxygen concentrator',
      'home oxygen concentrator India',
      'silent oxygen concentrator',
      'CDSCO oxygen concentrator',
      'Sachdeva Medline',
    ],
  },

  /* ──────────────────────────── B-1 ────────────────────────────── */
  {
    id: 7,
    slug: 'longfian-b-1-oxygen-concentrator',
    name: 'Longfian B-1',
    subtitle: 'Compact Adjustable-Flow Oxygen Concentrator',
    price: 0, // TODO: selling price in ₹
    mrp: 0, // TODO: MRP in ₹
    badge: 'Most Compact',
    frame: 'square',
    gallery: g('b-1', ['08.jpg', '07.jpg', '01.jpg', '04.jpg', '02.jpg', '05.jpg', '06.jpg', '03.jpg']),
    highlights: [
      { icon: '⚖️', title: 'Only 6.3 kg', sub: 'The lightest concentrator in the range' },
      { icon: '🎚️', title: '1 – 7 L Adjustable Flow', sub: '93% oxygen purity at the 1 L setting' },
      { icon: '⚡', title: 'Just 90W', sub: 'Very low running cost' },
    ],
    notes: [
      '*Flow adjustable from 1 to 7 litres as required',
      '*Oxygen purity reaches 93% at the 1 litre setting and reduces as flow increases',
      '*Only 6.3 kg and 275 × 215 × 315 mm — fits on a bedside table',
      '*Power consumption of just 90W — runs comfortably on an inverter',
      '*Low-noise operation, suitable for home and outdoor use',
    ],
    tagline: 'The smallest and lightest Longfian concentrator — for home, outdoor and travel use',
    stats: [
      { val: '25+', lbl: 'Years of Experience', sub: 'Longfian — established 1999' },
      { val: '#1', lbl: 'Oxygen Concentrator Manufacturer in the World', sub: "Longfian is the world's biggest manufacturer of oxygen concentrators" },
      { val: '6.3 kg', lbl: 'Net Weight', sub: 'Lightest in the Longfian range' },
      { val: '90W', lbl: 'Power Draw', sub: 'Inverter- and generator-friendly' },
    ],
    benefits: [
      { icon: '⚖️', title: 'Only 6.3 kg', accent: 'Small & Light', text: 'At 275 × 215 × 315 mm, it sits comfortably on a bedside table or shelf — a fraction of the size of a standard home concentrator.' },
      { icon: '🎚️', title: 'Flow Adjustable 1 – 7 L', text: 'A wide adjustment range lets you match the output to the prescribed flow. Oxygen concentration is highest at the lower settings.' },
      { icon: '⚡', title: 'Just 90W', text: 'Draws under 90W — far less than a standard concentrator, so it runs comfortably on a home inverter during power cuts.' },
      { icon: '🏠', title: 'Home, Outdoor or Travel', text: 'Compact enough to carry between rooms, take to a relative\'s house, or use while travelling by car.' },
      { icon: '🔇', title: 'Low Noise', text: 'Quiet operation makes it comfortable to use in a bedroom or a shared living space.' },
      { icon: '📟', title: 'Simple Controls', text: 'A single control dial and clear indicator — nothing complicated for an elderly patient to operate.' },
      { icon: '💧', title: '93% At 1 L Setting', text: 'Delivers 93% oxygen concentration at the 1 litre setting through PSA molecular sieve technology.' },
      { icon: '🏅', title: 'Longfian Build Quality', text: 'Made by the world\'s largest oxygen concentrator manufacturer, with over 25 years of experience.' },
      { icon: '🛠️', title: 'Supported In India', text: 'Imported and serviced by Sachdeva Medline with support across India.' },
    ],
    specs: [
      {
        group: 'Performance',
        rows: [
          ['Flow Rate', '1 – 7 L/min (adjustable)'],
          ['Oxygen Concentration', '93% at 1 L, reducing as flow increases'],
          ['Outlet Pressure', '6 – 10 Psi (0.04 – 0.07 MPa)'],
          ['Technology', 'PSA Molecular Sieve'],
        ],
      },
      {
        group: 'Physical & Power',
        rows: [
          ['Net Weight', '6.3 kg'],
          ['Dimensions (L × W × H)', '275 × 215 × 315 mm'],
          ['Power Consumption', '≤ 90 W'],
          ['Noise Level', 'Low-noise operation'],
        ],
      },
      {
        group: 'Use',
        rows: [
          ['Suitable For', 'Home, outdoor and travel use'],
          ['Controls', 'Single dial with indicator'],
          ['Inverter Friendly', 'Yes — low 90W draw'],
          ['Placement', 'Tabletop or floor'],
        ],
      },
      {
        group: 'Compliance & Support',
        rows: [
          ['Manufacturer', 'LONGFIAN'],
          ['India Partner', 'SACHDEVA MEDLINE (9891521090)'],
          ['Warranty', 'As per warranty card'],
          ['Service', 'Pan-India support'],
        ],
      },
    ],
    box: [
      { icon: '🔬', item: 'B-1 Unit', desc: 'The main concentrator device' },
      { icon: '🔌', item: 'Power Adapter', desc: 'Standard household charger' },
      { icon: '👃', item: 'Nasal Cannula', desc: 'For oxygen delivery' },
      { icon: '🔧', item: 'Spare Filter', desc: 'Replacement air filter' },
      { icon: '📖', item: 'User Manual', desc: 'Setup and operating guide' },
      { icon: '📋', item: 'Warranty Card', desc: 'Registered by Sachdeva Medline' },
    ],
    seoDescription:
      'Buy the Longfian B-1 compact oxygen concentrator in India. Only 6.3 kg, adjustable 1–7 litre flow, 93% oxygen at the 1 L setting, just 90W power draw and low noise. Suitable for home, outdoor and travel use. Imported by Sachdeva Medline with free pan-India delivery.',
    keywords: [
      'Longfian B-1',
      'compact oxygen concentrator',
      'lightweight oxygen concentrator',
      'oxygen concentrator for home',
      'low power oxygen concentrator',
      'oxygen concentrator India',
      'Sachdeva Medline',
    ],
  },
];

export function getConcentratorBySlug(slug: string): ConcentratorProduct | undefined {
  return CONCENTRATORS.find((c) => c.slug === slug);
}
