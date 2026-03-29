import Link from 'next/link';

const tiers = [
  {
    name: 'Basic',
    desc: 'Standard locksmith services for everyday needs',
    price: '$65',
    unit: 'starting at',
    features: [
      'Residential lockouts',
      'Standard lock rekeying',
      'Key duplication',
      'Basic lock replacement',
      '90-day warranty',
      'Phone support',
    ],
    missing: ['Smart lock installation', 'Priority dispatch', 'Annual security audit'],
    cta: 'Book Basic Service',
    highlight: false,
  },
  {
    name: 'Professional',
    desc: 'Enhanced security with smart lock support',
    price: '$150',
    unit: 'starting at',
    features: [
      'All Basic services',
      'Commercial lockouts',
      'Smart lock installation',
      'Keypad lock setup',
      'Priority dispatch',
      '6-month warranty',
      'Email & phone support',
    ],
    missing: ['Annual security audit', 'Master key systems'],
    cta: 'Book Pro Service',
    highlight: true,
  },
  {
    name: 'Enterprise',
    desc: 'Full-service security for businesses',
    price: '$350',
    unit: 'starting at',
    features: [
      'All Professional services',
      'Master key systems',
      'Access control install',
      'Panic bar installation',
      'Annual security audit',
      '1-year warranty',
      '24/7 priority support',
      'Dedicated account manager',
      'Volume discounts',
    ],
    missing: [],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const comparison = [
  { feature: 'Emergency Lockouts', basic: '✓', pro: '✓', enterprise: '✓' },
  { feature: 'Lock Rekeying', basic: '✓', pro: '✓', enterprise: '✓' },
  { feature: 'Key Duplication', basic: '✓', pro: '✓', enterprise: '✓' },
  { feature: 'Smart Lock Install', basic: '—', pro: '✓', enterprise: '✓' },
  { feature: 'Commercial Service', basic: '—', pro: '✓', enterprise: '✓' },
  { feature: 'Priority Dispatch', basic: '—', pro: '✓', enterprise: '✓' },
  { feature: 'Master Key Systems', basic: '—', pro: '—', enterprise: '✓' },
  { feature: 'Access Control', basic: '—', pro: '—', enterprise: '✓' },
  { feature: 'Security Audit', basic: '—', pro: '—', enterprise: '✓' },
  { feature: 'Warranty', basic: '90 days', pro: '6 months', enterprise: '1 year' },
  { feature: 'Response Time', basic: '30 min', pro: '20 min', enterprise: '15 min' },
  { feature: 'Support', basic: 'Phone', pro: 'Phone + Email', enterprise: '24/7 Priority' },
];

export default function Pricing() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1C1917] to-[#292524] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">No hidden fees, no surprise charges. Get upfront pricing for all our locksmith services.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl p-8 ${
                  tier.highlight
                    ? 'bg-[#1C1917] text-white shadow-xl ring-2 ring-[#DAA520] scale-[1.02]'
                    : 'bg-white shadow-sm border border-gray-100'
                }`}
              >
                {tier.highlight && (
                  <span className="inline-block bg-[#DAA520] text-[#1C1917] text-xs font-bold px-3 py-1 rounded-full mb-4">Most Popular</span>
                )}
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <p className={`text-sm mt-1 mb-4 ${tier.highlight ? 'text-gray-400' : 'text-gray-500'}`}>{tier.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className={`text-sm ml-1 ${tier.highlight ? 'text-gray-400' : 'text-gray-500'}`}>{tier.unit}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <svg className={`w-5 h-5 shrink-0 ${tier.highlight ? 'text-[#DAA520]' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                  {tier.missing.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${tier.highlight ? 'text-gray-600' : 'text-gray-400'}`}>
                      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/booking"
                  className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                    tier.highlight
                      ? 'bg-[#DAA520] text-[#1C1917] hover:bg-[#B8860B]'
                      : 'bg-[#1C1917] text-white hover:bg-[#292524]'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <h2 className="text-2xl font-bold text-center mb-8">Detailed Comparison</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[#1C1917]">
                  <th className="text-left py-4 px-6 font-semibold">Feature</th>
                  <th className="text-center py-4 px-6 font-semibold">Basic</th>
                  <th className="text-center py-4 px-6 font-semibold text-[#DAA520]">Professional</th>
                  <th className="text-center py-4 px-6 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-gray-50">
                    <td className="py-3 px-6 font-medium">{row.feature}</td>
                    <td className="py-3 px-6 text-center">{row.basic}</td>
                    <td className="py-3 px-6 text-center bg-[#DAA520]/5">{row.pro}</td>
                    <td className="py-3 px-6 text-center">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
