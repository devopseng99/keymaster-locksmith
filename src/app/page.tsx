import Link from 'next/link';

const stats = [
  { value: '15K+', label: 'Lockouts Resolved' },
  { value: '24/7', label: 'Emergency Service' },
  { value: '15min', label: 'Avg Response Time' },
  { value: '4.9★', label: 'Customer Rating' },
];

const services = [
  { title: 'Residential Lockouts', desc: 'Locked out of your home? We arrive fast with non-destructive entry techniques.', icon: '🏠' },
  { title: 'Commercial Security', desc: 'Master key systems, access control, and high-security lock installation for businesses.', icon: '🏢' },
  { title: 'Automotive Lockouts', desc: 'Car lockouts, key duplication, transponder programming, and ignition repair.', icon: '🚗' },
  { title: 'Smart Lock Install', desc: 'Upgrade to keyless entry with professional smart lock installation and setup.', icon: '📱' },
  { title: 'Emergency Dispatch', desc: 'Immediate dispatch for urgent lockouts, break-in repairs, and lock changes.', icon: '🚨' },
  { title: 'Lock Rekeying', desc: 'New home or lost keys? Rekey your locks for fraction of replacement cost.', icon: '🔑' },
];

const testimonials = [
  { name: 'Sarah M.', text: 'Locked out at 2am and they were here in 12 minutes. Professional and affordable!', rating: 5 },
  { name: 'David K.', text: 'Installed smart locks on our entire office. Seamless setup and great training.', rating: 5 },
  { name: 'Jennifer L.', text: 'Rekeyed my new house the same day I called. Fair pricing, no hidden fees.', rating: 5 },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1C1917] via-[#292524] to-[#1C1917] text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-[#DAA520]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#DAA520]/20 text-[#DAA520] px-3 py-1 rounded-full text-sm font-medium mb-4">
              24/7 Emergency Locksmith
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Locked Out? We&apos;ll Get You <span className="text-[#DAA520]">Back In Fast</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Professional mobile locksmith service for homes, businesses, and vehicles.
              Average 15-minute response time with no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/booking" className="bg-[#DAA520] text-[#1C1917] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#B8860B] transition-colors text-center">
                Request Emergency Service
              </Link>
              <a href="tel:+15551234567" className="border-2 border-[#DAA520] text-[#DAA520] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#DAA520]/10 transition-colors text-center">
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1C1917]">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Locksmith Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From emergency lockouts to smart lock installations, we handle all your security needs with precision and care.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="text-[#B8860B] font-semibold hover:underline">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Call or Book Online', desc: 'Reach us 24/7 by phone or submit a booking request through our website.' },
              { step: '2', title: 'We Dispatch Immediately', desc: 'A certified locksmith is dispatched to your location within minutes.' },
              { step: '3', title: 'Problem Solved', desc: 'We resolve your lockout or complete your installation on the spot.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#DAA520] to-[#B8860B] flex items-center justify-center text-[#1C1917] font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-[#DAA520] mb-3">{'★'.repeat(t.rating)}</div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <p className="font-semibold text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1C1917] to-[#292524] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Locksmith Right Now?</h2>
          <p className="text-gray-300 mb-8 text-lg">Don&apos;t wait — our mobile locksmiths are ready to help 24/7.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="bg-[#DAA520] text-[#1C1917] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#B8860B] transition-colors">
              Book Now
            </Link>
            <Link href="/pricing" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
