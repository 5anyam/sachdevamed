export interface FAQ {
  question: string;
  answer: string;
}

/* Portable / battery-operated units (JAY-1000P). Kept separate from the mains-powered
   home concentrators — the battery, flight and pulse-dose answers do not apply to those. */
const portableOxygenConcentrator: FAQ[] = [
  {
    question: 'What is a portable oxygen concentrator and how is it different from a home concentrator?',
    answer:
      'A portable oxygen concentrator (POC) draws in room air, filters out nitrogen through a molecular sieve and delivers concentrated oxygen — the same principle as a home unit, but in a device you can carry. The Longfian JAY-1000P weighs just 1.98 kg and runs on rechargeable batteries, so it works away from a power socket. A home concentrator is larger, heavier, mains-powered only, and delivers a continuous flow, whereas the JAY-1000P is a pulse-dose unit that releases oxygen in sync with your breath.',
  },
  {
    question: 'Is the JAY-1000P a flight approved oxygen concentrator? Can I carry it on a plane?',
    answer:
      'Yes. The JAY-1000P is an FAA approved oxygen concentrator, which means it meets the US Federal Aviation Administration standards for use on board an aircraft and is permitted on commercial flights worldwide, including domestic Indian airlines. As a flight approved oxygen concentrator it can be carried into the cabin as a medical device. Airlines usually ask for prior intimation (typically 48 hours before departure) and a doctor\'s fitness-to-fly certificate, and require you to carry enough charged batteries for roughly 1.5 times the flight duration — so please inform your airline while booking.',
  },
  {
    question: 'How long does the battery last on a single charge?',
    answer:
      'As a battery operated oxygen concentrator, backup depends on your pulse flow setting. On a single battery you get approximately 5 hours at Flow 1, 3 hours 50 minutes at Flow 2, 3 hours at Flow 3, 2 hours at Flow 4 and 1 hour 40 minutes at Flow 5. Two batteries are included in the box, which doubles these timings — up to about 10 hours at Flow Setting 1. Values are approximate and vary with usage pattern and battery age.',
  },
  {
    question: 'Is it a rechargeable oxygen concentrator? How long does charging take?',
    answer:
      'Yes, the JAY-1000P is a fully rechargeable oxygen concentrator. Each lithium-ion battery takes approximately 2 hours for a full charge. Two rechargeable batteries are supplied in the box, so you can keep one charging while the other is in use. The unit can also be run directly from the AC adapter at home or from the DC car charger while driving.',
  },
  {
    question: 'Can I use it while travelling by car, train or bus?',
    answer:
      'Yes — this is exactly what a portable oxygen concentrator for travel is built for. The JAY-1000P comes with a DC car charger so it can run continuously from a vehicle socket on long road trips, and it fits in the supplied air-vented shoulder bag for train and bus journeys. Because it is a battery operated oxygen concentrator for travelling, you are not dependent on finding a power point along the way.',
  },
  {
    question: 'What is pulse dose, and which flow setting should I use?',
    answer:
      'A pulse dose model senses when you begin to inhale and releases a measured bolus of oxygen at that moment, rather than flowing continuously. This makes the oxygen supply far more efficient, which is what allows the device to be this small and light. The JAY-1000P offers settings 1 to 5. Your flow setting must be decided by your treating doctor — please do not change it on your own.',
  },
  {
    question: 'Do I need a doctor\'s prescription to buy it?',
    answer:
      'Yes. An oxygen concentrator is a prescription medical device and should be used only under the guidance of a qualified physician. Your doctor will confirm whether pulse-dose delivery is appropriate for you and specify the flow setting and duration of use. Patients who need a fixed continuous flow (for example during sleep, or at higher oxygen requirements) may be advised a stationary home concentrator instead.',
  },
  {
    question: 'What oxygen purity does it deliver?',
    answer:
      'The JAY-1000P delivers 93% ± 3% oxygen concentration at all five flow settings, using advanced PSA (Pressure Swing Adsorption) molecular sieve technology. This is the medical-grade standard for oxygen concentrators.',
  },
  {
    question: 'How noisy is it? Can I use it at night or in an office?',
    answer:
      'The unit operates at under 48 dB, which is quieter than a normal conversation and roughly comparable to a library. It is discreet enough to use in an office, a place of worship, on a flight or in a bedroom without disturbing people around you.',
  },
  {
    question: 'Which certifications and approvals does it carry?',
    answer:
      'The JAY-1000P is CE certified, ISO 9001 manufactured, US FDA 510(k) cleared (K243833), CDSCO registered for import and sale in India, and FAA approved for in-flight use. Longfian is the world\'s largest manufacturer of oxygen concentrators with over 25 years of experience.',
  },
  {
    question: 'What is included in the box?',
    answer:
      'Every JAY-1000P ships with the concentrator unit, 2 rechargeable batteries, AC power adapter, DC car charger, nasal cannula, shoulder carry bag, 2 spare filters and the user manual. The warranty is registered by Sachdeva Medline, the exclusive importer for Longfian in India.',
  },
  {
    question: 'What warranty and after-sales service do I get?',
    answer:
      'The unit carries a 2-year warranty on the main concentrator, and 1 year on the batteries and molecular sieve beds. Sachdeva Medline is the exclusive importer and authorised service partner for Longfian in India, with 15+ service centres across the country. For any support, call or WhatsApp us on +91 98915 21090.',
  },
  {
    question: 'How is it delivered, and do you offer Cash on Delivery?',
    answer:
      'We offer free delivery across India, usually dispatched within 24 hours and delivered in 3–5 business days. Please note we do not offer a COD (Cash on Delivery) option on this product — payment is made online at checkout. Returns are accepted within 7 days of delivery for damaged, defective or incorrect items.',
  },
];

/* Mains-powered home units (JAY-5, JAY-5AW, JAY-10). */
const homeOxygenConcentrator: FAQ[] = [
  {
    question: 'What is an oxygen concentrator and how does it work?',
    answer:
      'An oxygen concentrator is a medical device that filters ambient air to deliver concentrated oxygen (typically 90–96% purity) to patients who require supplemental oxygen therapy. It uses a molecular sieve (zeolite) to separate oxygen from nitrogen and other gases, delivering a continuous supply without the need for oxygen cylinders or refills.',
  },
  {
    question: "Do I need a doctor's prescription to buy an oxygen concentrator?",
    answer:
      "Yes. Oxygen concentrators are medical devices and should only be used under the guidance of a qualified healthcare professional. A doctor's prescription specifying the required flow rate (LPM) and duration of use is recommended before purchase.",
  },
  {
    question: 'What flow rate do I need — 5 LPM or 10 LPM?',
    answer:
      "Flow rate depends on your doctor's prescription. For most patients with mild to moderate hypoxia, a 5 LPM concentrator is sufficient. Patients with higher oxygen requirements (for example severe COPD or post-COVID lung fibrosis) may need a 10 LPM model. Always follow your physician's recommendation.",
  },
  {
    question: 'How long can I run the concentrator continuously?',
    answer:
      'Longfian home oxygen concentrators are designed for continuous 24/7 operation and are built for long-term home use and clinical settings. Cleaning the external filter every 1–2 weeks is recommended to maintain performance.',
  },
  {
    question: 'What is the oxygen purity delivered?',
    answer:
      'At rated flow, Longfian concentrators deliver 93% ± 3% oxygen purity — meeting medical-grade standards. Purity may decrease slightly at flow rates above the rated output, which is normal behaviour for all concentrators.',
  },
  {
    question: 'Does it work during power cuts?',
    answer:
      'No. Home oxygen concentrators require a stable electricity supply and do not have a built-in battery. For power-cut scenarios we recommend keeping an oxygen cylinder as backup, or running the unit on an inverter/UPS rated for its power draw. If you need oxygen away from a power socket, consider a battery operated portable oxygen concentrator such as the Longfian JAY-1000P instead.',
  },
  {
    question: 'Can I take a home concentrator on a flight?',
    answer:
      'No. Home concentrators are not permitted on aircraft. Only a flight approved oxygen concentrator — an FAA approved portable model such as the Longfian JAY-1000P — may be carried into the cabin and used in the air.',
  },
  {
    question: 'Is the warranty included?',
    answer:
      "Yes. All Longfian oxygen concentrators sold by Sachdeva Medline come with the manufacturer's warranty covering manufacturing defects, and we assist with all warranty claims from day one. Please retain the warranty card included with your product.",
  },
  {
    question: 'Do you provide after-sale support and servicing?',
    answer:
      'Yes. Sachdeva Medline provides comprehensive after-sale support including setup guidance, usage training and service assistance through 15+ service centres across India. You can reach us at +91 98915 21090 or +91 99110 06187.',
  },
  {
    question: 'Can I use it for multiple family members?',
    answer:
      "An oxygen concentrator can be used by different patients provided the flow rate is adjusted as per each individual's prescription. A separate nasal cannula or mask should always be used per patient to maintain hygiene.",
  },
  {
    question: 'How is the product delivered and what is included in the box?',
    answer:
      'We dispatch orders within 24 hours across India via reliable courier partners. The box typically includes the concentrator unit, nasal cannula, power cord, humidifier bottle, air filter and user manual. Delivery usually takes 3–5 business days.',
  },
];

const reclinerBed: FAQ[] = [
  {
    question: 'What is a patient recliner bed used for?',
    answer:
      'A patient recliner bed (also called a fowler bed or hospital-type bed) is designed for home-care patients who need adjustable positioning — including head elevation, knee break and flat positions. It is commonly used for post-surgery recovery, long-term illness, COPD patients and elderly care.',
  },
  {
    question: 'How does the recliner mechanism work?',
    answer:
      'The backrest and knee rest adjust to various angles via a wireless remote, allowing caregivers to position the patient safely for eating, resting, breathing or medical procedures without lifting them.',
  },
  {
    question: 'What is the weight capacity?',
    answer:
      'The bed supports a load capacity of up to 150 kg, which is suitable for most adult patients. Please contact us if you need to confirm suitability for a specific requirement.',
  },
  {
    question: 'Is a mattress included?',
    answer:
      'Please check the product listing or contact us to confirm whether a mattress is included with your order. We can also recommend compatible anti-decubitus (anti-bedsore) air mattresses separately.',
  },
  {
    question: 'How is it delivered given the size?',
    answer:
      'The recliner bed is dispatched semi-assembled to facilitate shipping, and setup takes under 5 minutes with no tools required. Detailed instructions are included. Delivery takes 5–7 business days depending on the location.',
  },
  {
    question: 'Do you offer return or replacement for this product?',
    answer:
      'Returns are accepted within 7 days of delivery for manufacturing defects, wrong product delivered or a damaged unit. Please contact us within 7 days with photos of the issue at info@sachdevamedline.com or +91 98915 21090.',
  },
];

const defaultFAQs: FAQ[] = [
  {
    question: 'Is this product covered under warranty?',
    answer:
      "Yes. All products sold by Sachdeva Medline include the manufacturer's warranty covering manufacturing defects. We assist with warranty claims at no additional cost.",
  },
  {
    question: 'Do you deliver pan-India?',
    answer:
      'Yes. We deliver across India. Most orders are dispatched within 24 hours and delivered within 3–5 business days depending on the location.',
  },
  {
    question: 'Can I get expert guidance before purchasing?',
    answer:
      "Absolutely. Call or WhatsApp us at +91 98915 21090 and our team will help you choose the right product based on your medical requirement and doctor's prescription.",
  },
  {
    question: 'What is your return policy?',
    answer:
      'We accept returns within 7 days of delivery for damaged, defective or incorrect products. Change of mind returns are not accepted for medical equipment. Contact us at info@sachdevamedline.com to initiate a return.',
  },
];

export function getFAQsForProduct(productSlug: string): FAQ[] {
  const slug = productSlug.toLowerCase();
  if (slug.includes('recliner') || slug.includes('bed')) return reclinerBed;
  if (slug.includes('1000p') || slug.includes('portable')) return portableOxygenConcentrator;
  if (slug.includes('oxygen') || slug.includes('concentrator') || slug.includes('longfian') || slug.includes('jay')) {
    return homeOxygenConcentrator;
  }
  return defaultFAQs;
}

/* FAQPage structured data — lets Google show these as rich results under the listing. */
export function buildFAQJsonLd(productSlug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: getFAQsForProduct(productSlug).map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}
