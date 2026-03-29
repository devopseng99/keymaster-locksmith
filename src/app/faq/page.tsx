'use client';

import { useState } from 'react';
import Link from 'next/link';

const sections = [
  {
    title: 'Emergency Services',
    items: [
      { q: 'How fast can you get to me in an emergency?', a: 'Our average response time is 15 minutes. We have mobile units stationed throughout the Metro City area to ensure rapid response 24/7, including holidays and weekends.' },
      { q: 'Do you charge extra for emergency or after-hours calls?', a: 'Emergency calls have a 50% urgency surcharge, which is disclosed upfront before we dispatch. Same-day service has a 20% surcharge. Scheduled appointments have no additional fees.' },
      { q: 'What should I do if I\'m locked out of my car late at night?', a: 'Stay in a safe, well-lit area and call us at (555) 123-4567. Our automotive specialists are available 24/7 and can unlock most vehicles in 10-20 minutes without damage.' },
    ],
  },
  {
    title: 'Services & Pricing',
    items: [
      { q: 'How much does a typical lockout service cost?', a: 'Residential lockouts start at $65, automotive at $55, and commercial at $85. These are base prices — exact cost depends on lock type and complexity. We always provide an upfront quote before starting work.' },
      { q: 'Do you offer free estimates?', a: 'Yes! All estimates are free with no obligation. For on-site estimates, we waive the trip charge if you proceed with the service.' },
      { q: 'What payment methods do you accept?', a: 'We accept cash, all major credit cards, debit cards, and mobile payments (Apple Pay, Google Pay). Payment is collected after service completion.' },
    ],
  },
  {
    title: 'Smart Locks & Technology',
    items: [
      { q: 'Can you install smart locks on my existing door?', a: 'In most cases, yes. Smart locks are designed to fit standard door preparations. We\'ll assess your door during installation and let you know if any modifications are needed (rare cases with very old or non-standard doors).' },
      { q: 'Which smart lock brands do you recommend?', a: 'We\'re certified installers for major brands including Schlage, Yale, August, and Kwikset. We recommend brands based on your specific needs — Wi-Fi vs Bluetooth, keypad vs fingerprint, and integration with your smart home system.' },
      { q: 'What happens if my smart lock battery dies?', a: 'Most smart locks have a physical key backup or emergency power port. We set up all backup options during installation and provide instructions. Battery life is typically 6-12 months, and most locks send low-battery alerts.' },
    ],
  },
  {
    title: 'Commercial Services',
    items: [
      { q: 'Can you set up a master key system for my building?', a: 'Absolutely. We design custom master key systems for multi-tenant buildings, offices, and facilities. This allows different access levels — master keys for management, zone keys for departments, and individual keys for tenants.' },
      { q: 'Do you handle access control systems?', a: 'Yes, we install and maintain keycard, key fob, and biometric access control systems. We can integrate with existing security infrastructure and provide training for your team.' },
      { q: 'Do you offer service contracts for businesses?', a: 'Yes, our Enterprise tier includes a dedicated account manager, priority response, annual security audits, and volume discounts. Contact us for a custom quote based on your business needs.' },
    ],
  },
  {
    title: 'Credentials & Trust',
    items: [
      { q: 'Are your locksmiths licensed and insured?', a: 'Yes. Every KeyMaster technician is fully licensed, bonded, and insured. We\'re members of ALOA (Associated Locksmiths of America) and maintain a BBB A+ rating. All techs undergo background checks.' },
      { q: 'Do you offer warranties on your work?', a: 'Yes. Basic services include a 90-day warranty, Professional services include 6 months, and Enterprise services include a full 1-year warranty covering both parts and labor.' },
      { q: 'What areas do you serve?', a: 'We serve the entire Metro City area including downtown, suburbs, North County, South Bay, and surrounding communities within a 30-mile radius. We\'re expanding — check our service areas page for the latest coverage.' },
    ],
  },
];

function Accordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center py-4 text-left gap-4">
        <span className="font-medium">{q}</span>
        <svg className={`w-5 h-5 shrink-0 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <p className="text-gray-600 text-sm pb-4">{a}</p>}
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1C1917] to-[#292524] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-300 max-w-2xl">Find answers to common questions about our locksmith services, pricing, and policies.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1 h-6 bg-[#DAA520] rounded-full" />
                {section.title}
              </h2>
              <div className="bg-white rounded-xl px-6 shadow-sm border border-gray-100">
                {section.items.map((item) => (
                  <Accordion key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6">Our team is happy to help. Reach out anytime.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#1C1917] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#292524] transition-colors">
              Contact Us
            </Link>
            <a href="tel:+15551234567" className="border-2 border-[#1C1917] text-[#1C1917] px-8 py-3 rounded-lg font-semibold hover:bg-[#1C1917]/5 transition-colors">
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
