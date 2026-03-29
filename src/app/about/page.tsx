import Link from 'next/link';

const team = [
  { name: 'Marcus Johnson', role: 'Founder & Master Locksmith', years: '20+ years', gradient: 'from-stone-600 to-stone-400' },
  { name: 'Elena Rodriguez', role: 'Operations Manager', years: '12 years', gradient: 'from-amber-600 to-amber-400' },
  { name: 'Michael Chen', role: 'Lead Automotive Specialist', years: '15 years', gradient: 'from-slate-600 to-slate-400' },
  { name: 'Sarah Williams', role: 'Smart Security Expert', years: '8 years', gradient: 'from-yellow-600 to-yellow-400' },
];

const values = [
  { title: 'Rapid Response', desc: 'We commit to 15-minute average response times because we know every minute counts when you\'re locked out.' },
  { title: 'Transparent Pricing', desc: 'No hidden fees, no surge pricing. You get an upfront quote before any work begins.' },
  { title: 'Licensed & Insured', desc: 'Every technician is fully licensed, bonded, and insured for your peace of mind.' },
  { title: 'Continuous Training', desc: 'Our team stays current with the latest lock technology and security innovations.' },
];

const certs = [
  'ALOA Certified Locksmith',
  'Safe & Vault Technician',
  'Licensed & Bonded',
  'BBB A+ Rating',
  'Smart Lock Certified',
  'Background Checked',
];

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1C1917] to-[#292524] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About KeyMaster</h1>
          <p className="text-gray-300 max-w-2xl">Trusted by thousands of customers since 2005. We&apos;re the locksmith service you can count on.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                KeyMaster Locksmith started in 2005 when founder Marcus Johnson saw a need for reliable, honest locksmith services in the Metro City area. Too many people were being overcharged by fly-by-night operators with no credentials and no accountability.
              </p>
              <p>
                Starting with a single van and a commitment to fair pricing, Marcus built KeyMaster into the region&apos;s most trusted locksmith service. Today, we operate a fleet of fully-equipped mobile units staffed by certified technicians available around the clock.
              </p>
              <p>
                We&apos;ve resolved over 15,000 lockouts, installed thousands of smart locks, and secured hundreds of businesses. Our 4.9-star rating reflects our dedication to getting the job done right — every single time.
              </p>
            </div>
          </div>
          <div className="h-80 rounded-xl bg-gradient-to-br from-[#1C1917] via-[#292524] to-[#B8860B] flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl font-bold text-[#DAA520]">20+</div>
              <div className="text-lg mt-2">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#DAA520] to-[#B8860B] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#1C1917]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className={`h-48 bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-[#B8860B]">{member.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{member.years} experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Certifications & Trust</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certs.map((cert) => (
              <div key={cert} className="bg-[#F5F5F4] rounded-xl p-4 text-center border border-gray-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#DAA520] to-[#B8860B] mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-xs font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#1C1917] to-[#292524] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-300 mb-8">Experience the KeyMaster difference — fast, reliable, and honest locksmith service.</p>
          <Link href="/booking" className="bg-[#DAA520] text-[#1C1917] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#B8860B] transition-colors inline-block">
            Book a Service
          </Link>
        </div>
      </section>
    </>
  );
}
