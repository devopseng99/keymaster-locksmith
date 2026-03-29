import Link from 'next/link';

const categories = ['All', 'Security Tips', 'Smart Locks', 'Industry News', 'How-To Guides'];

const posts = [
  {
    title: '5 Signs You Need to Rekey Your Locks Immediately',
    excerpt: 'Moving into a new home? Lost your keys? Here are the top situations where rekeying is essential for your safety.',
    category: 'Security Tips',
    date: 'Mar 25, 2026',
    readTime: '4 min read',
    gradient: 'from-stone-600 to-stone-400',
  },
  {
    title: 'Smart Lock Buying Guide: What to Look For in 2026',
    excerpt: 'Wi-Fi vs Bluetooth, keypad vs fingerprint — we break down everything you need to know before upgrading.',
    category: 'Smart Locks',
    date: 'Mar 20, 2026',
    readTime: '7 min read',
    gradient: 'from-amber-600 to-amber-400',
  },
  {
    title: 'How Emergency Lockout Services Actually Work',
    excerpt: 'Ever wonder what happens after you call a locksmith at 3am? Here\'s a behind-the-scenes look at our dispatch process.',
    category: 'How-To Guides',
    date: 'Mar 15, 2026',
    readTime: '5 min read',
    gradient: 'from-slate-600 to-slate-400',
  },
  {
    title: 'New Regulations for Commercial Lock Systems in 2026',
    excerpt: 'Updated fire codes and ADA requirements are changing how businesses approach their entry systems.',
    category: 'Industry News',
    date: 'Mar 10, 2026',
    readTime: '6 min read',
    gradient: 'from-gray-600 to-gray-400',
  },
  {
    title: 'DIY Lock Maintenance: Keep Your Locks Working Smoothly',
    excerpt: 'Simple maintenance tips that can extend the life of your locks and prevent emergency lockouts.',
    category: 'How-To Guides',
    date: 'Mar 5, 2026',
    readTime: '3 min read',
    gradient: 'from-yellow-700 to-yellow-500',
  },
  {
    title: 'The Rise of Biometric Locks: Are They Worth It?',
    excerpt: 'Fingerprint and facial recognition locks are getting cheaper. We evaluate the pros, cons, and security implications.',
    category: 'Smart Locks',
    date: 'Feb 28, 2026',
    readTime: '8 min read',
    gradient: 'from-amber-700 to-amber-500',
  },
  {
    title: 'How to Secure Your Home While on Vacation',
    excerpt: 'Going on a trip? These locksmith-approved tips will keep your home safe while you\'re away.',
    category: 'Security Tips',
    date: 'Feb 22, 2026',
    readTime: '5 min read',
    gradient: 'from-stone-700 to-stone-500',
  },
  {
    title: 'Master Key Systems Explained: A Business Owner\'s Guide',
    excerpt: 'Simplify access management for your commercial property with a properly designed master key system.',
    category: 'How-To Guides',
    date: 'Feb 15, 2026',
    readTime: '6 min read',
    gradient: 'from-slate-700 to-slate-500',
  },
  {
    title: 'KeyMaster Expands Service Area to North County',
    excerpt: 'We\'re excited to announce our 24/7 emergency locksmith service is now available in the North County region.',
    category: 'Industry News',
    date: 'Feb 10, 2026',
    readTime: '2 min read',
    gradient: 'from-blue-600 to-blue-400',
  },
];

export default function Blog() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1C1917] to-[#292524] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-gray-300 max-w-2xl">Security tips, industry news, and guides from our expert locksmiths.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  cat === 'All' ? 'bg-[#1C1917] text-white' : 'bg-white text-gray-700 border border-gray-200'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-12 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2">
            <div className={`h-64 lg:h-auto bg-gradient-to-br ${posts[0].gradient} flex items-center justify-center`}>
              <svg className="w-16 h-16 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <div className="p-8">
              <span className="text-xs font-medium text-[#B8860B]">{posts[0].category}</span>
              <h2 className="text-2xl font-bold mt-2 mb-3">{posts[0].title}</h2>
              <p className="text-gray-600 mb-4">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{posts[0].date}</span>
                <span>{posts[0].readTime}</span>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.title} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className={`h-40 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                  <svg className="w-10 h-10 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-[#B8860B]">{post.category}</span>
                  <h3 className="font-semibold mt-1 mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Need Help Now?</h2>
          <p className="text-gray-600 mb-6">Don&apos;t wait — our locksmiths are available 24/7 for emergencies.</p>
          <Link href="/booking" className="bg-[#1C1917] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#292524] transition-colors inline-block">
            Book Emergency Service
          </Link>
        </div>
      </section>
    </>
  );
}
