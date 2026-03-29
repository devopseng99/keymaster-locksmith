import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#DAA520] to-[#B8860B] flex items-center justify-center font-bold text-[#1C1917] text-sm">K</div>
            <span className="font-bold text-lg">KeyMaster</span>
          </div>
          <p className="text-sm text-gray-400">24/7 mobile locksmith service. Residential, commercial, and automotive lockouts with smart lock installation.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-[#DAA520]">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/services" className="hover:text-white">Residential</Link></li>
            <li><Link href="/services" className="hover:text-white">Commercial</Link></li>
            <li><Link href="/services" className="hover:text-white">Automotive</Link></li>
            <li><Link href="/services" className="hover:text-white">Smart Locks</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-[#DAA520]">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-[#DAA520]">Emergency?</h3>
          <p className="text-sm text-gray-400 mb-2">Locked out? We&apos;re available 24/7.</p>
          <a href="tel:+15551234567" className="text-[#DAA520] font-bold text-lg hover:text-[#B8860B]">(555) 123-4567</a>
          <p className="text-sm text-gray-400 mt-4">info@keymasterlocksmith.com</p>
          <p className="text-sm text-gray-400">123 Lock Street, Metro City, MC 10001</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} KeyMaster Locksmith. All rights reserved.
      </div>
    </footer>
  );
}
