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
  rating: number;
  reviewCount: number;
  capsules: number;
  videos?: ProductVideo[];
}

export const PRODUCTS: StaticProduct[] = [
  {
    id: 1,
    slug: 'longfian-jay-5-5-litres-medical-grade-oxygen-concentrator',
    name: 'Longfian Jay-5',
    shortName: 'Longfian Jay-5',
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
    rating: 4.8,
    reviewCount: 214,
    capsules: 0,
  },
  {
    id: 2,
    slug: 'longfian-jay-5aw-5-litres-medical-grade-oxygen-concentrator',
    name: 'Longfian Jay-5AW',
    shortName: 'Longfian Jay-5AW',
    tagline: '5 LPM concentrator with built-in wheels & humidifier — mobility meets comfort',
    price: 24900,
    regularPrice: 24900,
    images: [
      'https://sachdevamedline.com/wp-content/uploads/2023/12/j1.webp',
      'https://sachdevamedline.com/wp-content/uploads/2023/12/j2.webp',
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
    rating: 4.7,
    reviewCount: 156,
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
    rating: 4.6,
    reviewCount: 87,
    capsules: 0,
  },
  {
    id: 4,
    slug: 'longfian-jay-1000p-portable-oxygen-concentrator',
    name: 'Longfian JAY-1000P',
    shortName: 'JAY-1000P',
    tagline: 'FDA & FAA approved portable oxygen concentrator — 1.98 kg, fly anywhere, all-day battery',
    price: 45000, // TODO: update price
    regularPrice: 52000, // TODO: update MRP
    images: [
      'https://lh3.googleusercontent.com/d/1PMlRVzIuLxUaFu6tC-GPJL8H8tolqD0T',
      'https://lh3.googleusercontent.com/d/13InsWquc7HhRHUt2P9A0gVgpvviOUsP6',
      'https://lh3.googleusercontent.com/d/1lHZgYeBKTaAxb4BFJ6tMmCT1X7iscDp_V',
      'https://lh3.googleusercontent.com/d/17wYaPDQbETH7AFSaZUxe_lR-HUYSdIPz',
      'https://lh3.googleusercontent.com/d/1werhzIak53KRDx7bLagADW-IAFIgVaQ1',
      'https://lh3.googleusercontent.com/d/1NAPkRJzfHgJrWyksxfs8mC-mK5QHlQ0z',
      'https://lh3.googleusercontent.com/d/1-6kyNI9X30yQ06tZrFNvqWY-ERvCIntE',
      'https://lh3.googleusercontent.com/d/1j4yv-keHNJ-rz4qdLNgMywkRJOw7WAgz',
      'https://lh3.googleusercontent.com/d/1cdohUwiE2rzGrGDra6De6tI2axEX-KfM',
      'https://lh3.googleusercontent.com/d/1pqGeZ8S5x7jKljkdL4387r0hqV9_u9cG',
      'https://lh3.googleusercontent.com/d/19TuhztMDIbmhhfbXB2T0sQetF6jKbI6l',
      'https://lh3.googleusercontent.com/d/1B06Sty1CqnXid9SdRZUuWZDH-6MB8rG3',
      'https://lh3.googleusercontent.com/d/1uQ-rkzLU-qsyKq-MBwPKtQRNrefg5Y4b',
      'https://lh3.googleusercontent.com/d/1oFtvBMOJnj8zZhtO8fBoCkHwmNJiuFv4',
      'https://lh3.googleusercontent.com/d/1UOSUHbo_zMzNhPoR7OLoVNNifTOFpv4V',
      'https://lh3.googleusercontent.com/d/1Ko3sVyiDCrpeqBlaXgzsAAOVww1YZfTC',
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
    rating: 4.9,
    reviewCount: 47,
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
];

export function getProductBySlug(slug: string): StaticProduct | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
