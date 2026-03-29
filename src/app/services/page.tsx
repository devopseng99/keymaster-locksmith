import Link from 'next/link';

const services = [
  {
    category: 'Residential',
    items: [
      { name: 'House Lockout', price: '$65–$95', desc: 'Non-destructive entry for homes and apartments. Available 24/7.', time: '15–30 min' },
      { name: 'Lock Rekeying', price: '$25–$50/lock', desc: 'Change your lock combination without replacing the hardware.', time: '10–20 min' },
      { name: 'Lock Replacement', price: '$75–$200', desc: 'High-security deadbolts, knob sets, and lever handles installed.', time: '20–40 min' },
      { name: 'Smart Lock Install', price: '$150–$350', desc: 'Keyless entry setup with app integration and programming.', time: '30–60 min' },
    ],
  },
  {
    category: 'Commercial',
    items: [
      { name: 'Office Lockout', price: '$85–$120', desc: 'Gain entry to offices, storefronts, and warehouses.', time: '15–30 min' },
      { name: 'Master Key System', price: '$200–$500', desc: 'Hierarchical key systems for multi-tenant buildings.', time: '1–3 hours' },
      { name: 'Access Control', price: '$500–$2000', desc: 'Keycard, fob, and biometric access system installation.', time: '2–6 hours' },
      { name: 'Panic Bar Install', price: '$300–$600', desc: 'Emergency exit hardware for commercial code compliance.', time: '1–2 hours' },
    ],
  },
  {
    category: 'Automotive',
    items: [
      { name: 'Car Lockout', price: '$55–$85', desc: 'Unlock any vehicle without damage. All makes and models.', time: '10–20 min' },
      { name: 'Key Duplication', price: '$5–$25', desc: 'Standard and high-security automotive key cutting.', time: '5–15 min' },
      { name: 'Transponder Program', price: '$75–$200', desc: 'Chip key and remote fob programming for modern vehicles.', time: '15–45 min' },
      { name: 'Ignition Repair', price: '$150–$350', desc: 'Ignition cylinder repair and replacement services.', time: '30–90 min' },
    ],
  },
  {
    category: 'Smart Locks & Security',
    items: [
      { name: 'Smart Deadbolt', price: '$200–$400', desc: 'Wi-Fi/Bluetooth deadbolts with remote access control.', time: '30–45 min' },
      { name: 'Keypad Locks', price: '$150–$300', desc: 'Code-based entry systems for homes and businesses.', time: '20–40 min' },
      { name: 'Video Doorbell + Lock', price: '$350–$600', desc: 'Integrated smart lock and video doorbell package.', time: '45–90 min' },
      { name: 'Security Audit', price: '$100–$200', desc: 'Full property security assessment with recommendations.', time: '1–2 hours' },
    ],
  },
];

export default function Services() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1C1917] to-[#292524] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-300 max-w-2xl">Comprehensive locksmith solutions for every situation. All services include a free estimate and our satisfaction guarantee.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {services.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-[#DAA520] rounded-full" />
                {cat.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.items.map((item) => (
                  <div key={item.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                      <p className="text-xs text-gray-400 mt-2">Est. time: {item.time}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-[#B8860B] font-bold">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Service Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[#1C1917]">
                  <th className="text-left py-3 px-4">Feature</th>
                  <th className="text-center py-3 px-4">Residential</th>
                  <th className="text-center py-3 px-4">Commercial</th>
                  <th className="text-center py-3 px-4">Automotive</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['24/7 Emergency', '✓', '✓', '✓'],
                  ['Mobile Service', '✓', '✓', '✓'],
                  ['Smart Lock Support', '✓', '✓', '—'],
                  ['Master Key Systems', '—', '✓', '—'],
                  ['Transponder Program', '—', '—', '✓'],
                  ['Free Estimate', '✓', '✓', '✓'],
                  ['Warranty', '90 days', '1 year', '90 days'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">{row[0]}</td>
                    <td className="py-3 px-4 text-center">{row[1]}</td>
                    <td className="py-3 px-4 text-center">{row[2]}</td>
                    <td className="py-3 px-4 text-center">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#1C1917] to-[#292524] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need Service Now?</h2>
          <p className="text-gray-300 mb-8">Our locksmiths are standing by 24/7 for emergency dispatch.</p>
          <Link href="/booking" className="bg-[#DAA520] text-[#1C1917] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#B8860B] transition-colors inline-block">
            Book a Service
          </Link>
        </div>
      </section>
    </>
  );
}
