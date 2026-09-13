export interface ProductIngredient {
  name: string;
  dose: string;
  benefit: string;
}

export interface ProductVideo {
  id: string;
  title: string;
}

export interface StaticProduct {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  price: number;
  regularPrice: number;
  images: string[];
  benefits: string[];
  ingredients: ProductIngredient[];
  howToUse: string;
  category: string;
  badge?: string;
  capsules: number;
  videos?: ProductVideo[];
}

export const PRODUCTS: StaticProduct[] = [
  {
    id: 1,
    slug: 'longfian-jay-5-5-litres-medical-grade-oxygen-concentrator',
    name: 'Longfian JAY-5',
    shortName: 'Longfian JAY-5',
    tagline: '5 LPM medical-grade oxygen concentrator — reliable, quiet & 24/7 capable',
    price: 24900,
    regularPrice: 24900,
    images: [
      'https://sachdevamedline.com/wp-content/uploads/2023/12/lj5-1.webp',
      'https://sachdevamedline.com/wp-content/uploads/2023/12/lj5-2.webp',
    ],
    benefits: [
      'Delivers 93±3% pure medical-grade oxygen at up to 5 litres per minute',
      'Ultra-quiet operation — under 45 dB, safe for bedroom use',
      'Built-in safety alarms for low purity, power failure & over-temperature',
      'Continuous 24/7 operation without service interruption',
      'Compact, lightweight design — easy to move between rooms',
    ],
    ingredients: [
      { name: 'Flow Rate', dose: '1–5 LPM', benefit: 'Adjustable for mild to moderate therapy' },
      { name: 'Oxygen Purity', dose: '93±3%', benefit: 'Medical-grade oxygen output' },
      { name: 'Noise Level', dose: '≤45 dB', benefit: 'Silent enough for bedroom use' },
      { name: 'Power Supply', dose: '110V / 220V', benefit: 'Works on standard Indian power' },
      { name: 'Consumption', dose: '280W', benefit: 'Energy-efficient round-the-clock use' },
    ],
    howToUse:
      'Place on a flat surface with at least 20 cm clearance on all sides. Connect the nasal cannula or mask. Set the prescribed flow rate using the dial. Use as directed by your physician. Clean the external filter every 2 weeks with mild soap and allow to dry completely before reinserting.',
    category: 'Oxygen Concentrator',
    badge: 'Best Seller',
    capsules: 0,
  },
  {
    id: 2,
    slug: 'longfian-jay-5aw-5-litres-medical-grade-oxygen-concentrator',
    name: 'Longfian JAY-5AW',
    shortName: 'Longfian JAY-5AW',
    tagline: '5 LPM concentrator with built-in wheels & humidifier — mobility meets comfort',
    price: 24900,
    regularPrice: 24900,
    images: [
      '/products/jay-5aw/01.jpg',
      '/products/jay-5aw/02.jpg',
      '/products/jay-5aw/03.jpg',
    ],
    benefits: [
      'Integrated trolley wheels and handle for easy room-to-room movement',
      '5 LPM medical-grade oxygen at 93±3% consistent purity',
      'Built-in humidifier bottle for comfortable, moisture-rich therapy',
      'Minimal noise output — designed for home and recovery environments',
      'Safety alarms for oxygen purity drop and power fault',
    ],
    ingredients: [
      { name: 'Flow Rate', dose: '1–5 LPM', benefit: 'Ideal for home & recovery use' },
      { name: 'Oxygen Purity', dose: '93±3%', benefit: 'Medical-grade output at all flow rates' },
      { name: 'Mobility', dose: 'Wheels + Handle', benefit: 'Move easily across rooms without lifting' },
      { name: 'Humidifier', dose: 'Built-in', benefit: 'Prevents dryness and nasal irritation' },
      { name: 'Design', dose: 'Compact', benefit: 'Lightweight and space-efficient' },
    ],
    howToUse:
      'Fill the humidifier bottle with distilled water to the marked fill line. Connect nasal cannula or mask to the outlet port. Set the flow rate as prescribed. Use the wheel handle to move between rooms. Clean the filter every 2 weeks — wash gently and allow to fully dry before reinserting.',
    category: 'Oxygen Concentrator',
    badge: 'Most Convenient',
    capsules: 0,
  },
  {
    id: 3,
    slug: 'patient-recliner-bed',
    name: 'Patient Recliner Bed',
    shortName: 'Recliner Bed',
    tagline: 'Motorised recliner bed — maximum comfort for home patient care',
    price: 16499,
    regularPrice: 16499,
    images: [
      'https://sachdevamedline.com/wp-content/uploads/2023/12/bed-1.webp',
      'https://sachdevamedline.com/wp-content/uploads/2023/12/bed-2.webp',
    ],
    benefits: [
      'Motorised backrest adjustable up to 80° with wireless remote control',
      'Transforms any standard bed into a full recliner in under 5 minutes',
      'Heavy-duty imported motor with durable powder-coated steel frame',
      'Weight capacity up to 150 kg — suitable for most adult patients',
      'Compatible with inverters — works during power cuts',
    ],
    ingredients: [
      { name: 'Backrest Angle', dose: '0°–80°', benefit: 'Multiple comfortable resting positions' },
      { name: 'Load Capacity', dose: '150 kg', benefit: 'Suitable for most adult patients' },
      { name: 'Control', dose: 'Wireless Remote', benefit: 'Easy operation by patient or caregiver' },
      { name: 'Frame', dose: 'Steel + Epoxy', benefit: 'Rust-proof, long-lasting build' },
      { name: 'Setup Time', dose: '< 5 mins', benefit: 'No tools needed for assembly' },
    ],
    howToUse:
      'Place the recliner mechanism on your existing bed frame. Assemble using the included guide — no tools required, takes under 5 minutes. Plug into a standard 220V socket (also compatible with inverter). Use the wireless remote to raise or lower the backrest as needed. Keep the motor area dry and clean monthly.',
    category: 'Patient Beds',
    badge: 'Trending',
    capsules: 0,
  },
  {
    id: 4,
    slug: 'longfian-jay-1000p-portable-oxygen-concentrator',
    name: 'Longfian JAY-1000P',
    shortName: 'JAY-1000P',
    tagline: 'FDA & FAA approved portable oxygen concentrator — 1.98 kg, fly anywhere, up to 10 hours of battery backup',
    price: 95000,
    regularPrice: 149000,
    images: [
      // Product shots
      'https://drive.google.com/thumbnail?id=1PMlRVzIuLxUaFu6tC-GPJL8H8tolqD0T&sz=w1200',
      'https://drive.google.com/thumbnail?id=13InsWquc7HhRHUt2P9A0gVgpvviOUsP6&sz=w1200',
      'https://drive.google.com/thumbnail?id=17wYaPDQbETH7AFSaZUxe_lR-HUYSdIPz&sz=w1200',
      'https://drive.google.com/thumbnail?id=1werhzIak53KRDx7bLagADW-IAFIgVaQ1&sz=w1200',
      // Creatives
      'https://drive.google.com/thumbnail?id=1pqGeZ8S5x7jKljkdL4387r0hqV9_u9cG&sz=w1200',
      'https://drive.google.com/thumbnail?id=1Ko3sVyiDCrpeqBlaXgzsAAOVww1YZfTC&sz=w1200',
    ],
    benefits: [
      'Ultra-portable at just 1.98 kg — lighter than most laptops, fits in the included shoulder bag',
      'FDA & FAA approved — legally permitted on all commercial flights worldwide, no airline hassle',
      'Up to 11 hours on double battery — go through a full day without any power outlet',
      'PSA pulse-dose technology delivers 93%±3% pure oxygen synchronised to your every breath',
      'CDSCO approved for India — authorised by Sachdeva Medline with 2-year full warranty',
      'LCD display shows battery level, flow setting & running hours at a glance',
      'Whisper-quiet at ≤48 dB — use comfortably in meetings, flights or while sleeping',
    ],
    ingredients: [
      { name: 'Oxygen Purity', dose: '93±3%', benefit: 'Medical-grade output via PSA technology' },
      { name: 'Flow Settings', dose: '1–5 Pulse', benefit: 'Adjustable breath-synchronised delivery' },
      { name: 'Weight', dose: '1.98 kg', benefit: 'Ultra-portable — lighter than most laptops' },
      { name: 'Battery Life', dose: '5.5 / 11 hrs', benefit: 'Single / double battery at Flow Setting 1' },
      { name: 'Charge Time', dose: '2 hours', benefit: 'Fast recharge — minimal downtime' },
      { name: 'Dimensions', dose: '183×86×199 mm', benefit: 'Compact, fits comfortably in a bag' },
      { name: 'Noise Level', dose: '≤48 dB', benefit: 'Library-quiet, suitable for any setting' },
      { name: 'Certifications', dose: 'FDA · FAA · CE · ISO · CDSCO', benefit: 'Globally approved + India registered' },
    ],
    howToUse:
      'Press the power button to switch on. Use the + / – buttons to select your prescribed flow level (1–5). Attach the nasal cannula to the oxygen outlet port and breathe normally — the device delivers a pulse of oxygen automatically with each inhalation. For travel, keep the device in the included shoulder bag (the bag has built-in air vents so it can operate while inside). To charge, connect the AC adapter and allow 2 hours for a full charge; the car charger can also be used for vehicle charging. Replace the air filter at home as needed; contact Sachdeva Medline for molecular sieve maintenance.',
    category: 'Portable Oxygen Concentrator',
    badge: 'Flight Safe',
    capsules: 0,
    videos: [
      { id: '15m-J_sUB_MMHmnJSG399tm6tYW9oJZCj', title: 'JAY-1000P Product Video (HD)' },
      { id: '1qUxGfQL_dFZ145J1sUh-_DfmA45Oao0N', title: 'MEDICA 2025 Demo — FDA & FAA Approved' },
      { id: '19Jpj6asBolaWH_fY5kDd7C5KyOBWCYGV', title: 'Pulse Mode Demonstration' },
      { id: '1WRGiADRDTkPlGWGy_6_5KrGbdYWU-OrL', title: 'Filter Replacement Guide' },
      { id: '1w-PUSdr2Sh8v6HkcsH800y1tNmC4fBwr', title: 'Longfian Manufacturing Facility' },
      { id: '1xxsGDkQqq2bPZ8ToXjGDcuGwwEdhTM8-', title: 'Production Line Tour' },
      { id: '1O3R2ywXX-LyZf3Wv-akB_1druXA3j-tJ', title: 'JAY-1000P in Action' },
      { id: '13ywqxTXsAkkDtDM1CT1eLchspSfpel89', title: 'Product Showcase' },
      { id: '1hLbQBO8PV8AfX9CdRHyb7kYok1AoPPdF', title: 'Device Overview' },
      { id: '1jWb-4XvHfzsCSDmhJ7D_op54v-KPd4-v', title: 'Usage Demonstration' },
      { id: '11jv5KOMBLB0QR077pPHOJzK9ZCzG9GxS', title: 'Product in Action' },
      { id: '1GEW--Dc2G_98oxHJbQbkTe6posEk0VgO', title: 'Feature Highlight' },
      { id: '1ZlfHxf-QVVRQp5E1cFg7EoqKNlxEAc6B', title: 'JAY-1000P Video' },
    ],
  },
  {
    id: 5,
    slug: 'longfian-jay-5cw-oxygen-concentrator',
    name: 'Longfian JAY-5CW',
    shortName: 'Longfian JAY-5CW',
    tagline: '5 LPM concentrator with nebulizer outlet and full lithium sieve beds — only 16 kg',
    price: 0,
    regularPrice: 0,
    images: [
      '/products/jay-5cw/01.jpg',
      '/products/jay-5cw/02.jpg',
      '/products/jay-5cw/03.jpg',
    ],
    benefits: [
      'Above 93% oxygen concentration at up to 5 litres per minute',
      'Built-in nebulizer outlet — take nebulised medication without a second machine',
      'Full lithium sieve beds, the same grade used by Philips units',
      'Only 16 kg with castor wheels — easy to move room to room',
      'Low noise under 43 dB and low power consumption of 350W',
    ],
    ingredients: [
      { name: 'Flow Rate', dose: '0–5 LPM', benefit: 'Adjustable to the prescribed rate' },
      { name: 'Oxygen Purity', dose: 'Above 93%', benefit: 'Medical-grade oxygen output' },
      { name: 'Net Weight', dose: '16 kg', benefit: 'Lighter than most 5 litre units' },
      { name: 'Noise Level', dose: 'Under 43 dB', benefit: 'Quiet enough for bedroom use' },
      { name: 'Product Life', dose: '25,000 hrs', benefit: 'Years of continuous daily therapy' },
    ],
    howToUse:
      'Place on a flat surface with at least 20 cm clearance on all sides. Fill the humidifier bottle to the marked line with distilled water. Connect the nasal cannula and set the prescribed flow rate on the flowmeter. Clean the external filter every 2 weeks and allow it to dry fully before reinserting.',
    category: 'Oxygen Concentrator',
    badge: 'Latest Model',
    capsules: 0,
  },
  {
    id: 6,
    slug: 'longfian-jay-5hw-oxygen-concentrator',
    name: 'Longfian JAY-5HW',
    shortName: 'Longfian JAY-5HW',
    tagline: '5 LPM concentrator with live purity display, inbuilt HEPA filter and nebuliser',
    price: 0,
    regularPrice: 0,
    images: [
      '/products/jay-5hw/09.png',
      '/products/jay-5hw/01.jpg',
      '/products/jay-5hw/02.jpg',
    ],
    benefits: [
      'Live oxygen concentration, flow rate and running hours shown on the LED display',
      'Inbuilt HEPA filter and nebuliser feature in a single unit',
      '93% ± 3% oxygen purity at every flow rate',
      'Whisper quiet at 38 dB(A) — among the quietest 5 litre units available',
      'Full alarm set: low purity, high/low pressure, power failure, overheat',
    ],
    ingredients: [
      { name: 'Flow Rate', dose: '0–5 L/min', benefit: 'Adjustable to the prescribed rate' },
      { name: 'Oxygen Purity', dose: '93% ± 3%', benefit: 'Consistent at all flow rates' },
      { name: 'Noise Level', dose: '38 dB(A)', benefit: 'Quieter than a library' },
      { name: 'Dimensions', dose: '36 × 28 × 65 cm', benefit: 'Compact floor footprint' },
      { name: 'Warranty', dose: '2 Years', benefit: 'Or 8,000 working hours' },
    ],
    howToUse:
      'Place on a flat surface with at least 20 cm clearance on all sides. Fill the humidifier bottle with distilled water. Connect the nasal cannula and set the prescribed flow rate. The display shows live oxygen purity so you can confirm therapy at a glance. Clean the filter every 2 weeks.',
    category: 'Oxygen Concentrator',
    badge: 'Purity On Display',
    capsules: 0,
  },
  {
    id: 7,
    slug: 'longfian-b-1-oxygen-concentrator',
    name: 'Longfian B-1',
    shortName: 'Longfian B-1',
    tagline: 'Compact 6.3 kg concentrator with 1–7 litre adjustable flow — just 90W',
    price: 0,
    regularPrice: 0,
    images: [
      '/products/b-1/08.jpg',
      '/products/b-1/07.jpg',
      '/products/b-1/01.jpg',
    ],
    benefits: [
      'Only 6.3 kg and 275 × 215 × 315 mm — fits on a bedside table',
      'Flow adjustable from 1 to 7 litres as per requirement',
      '93% oxygen concentration at the 1 litre setting',
      'Draws under 90W — runs comfortably on a home inverter',
      'Low noise operation, suitable for home, outdoor and travel use',
    ],
    ingredients: [
      { name: 'Flow Rate', dose: '1–7 L/min', benefit: 'Wide adjustable range' },
      { name: 'Oxygen Purity', dose: '93% at 1 L', benefit: 'Highest at the lower settings' },
      { name: 'Net Weight', dose: '6.3 kg', benefit: 'Lightest in the Longfian range' },
      { name: 'Power Draw', dose: '90 W', benefit: 'Inverter and generator friendly' },
      { name: 'Dimensions', dose: '275 × 215 × 315 mm', benefit: 'Tabletop footprint' },
    ],
    howToUse:
      'Place on a firm, flat surface with clear space around the air intake. Connect the nasal cannula to the outlet port and set the flow using the control dial as prescribed by your doctor. Oxygen concentration is highest at the lower flow settings. Clean the filter every 2 weeks.',
    category: 'Oxygen Concentrator',
    badge: 'Most Compact',
    capsules: 0,
  },
];

export function getProductBySlug(slug: string): StaticProduct | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
