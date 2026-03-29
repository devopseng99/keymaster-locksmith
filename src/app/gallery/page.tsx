'use client';

import { useState } from 'react';

const categories = ['All', 'Residential', 'Commercial', 'Automotive', 'Smart Locks'];

const projects = [
  { title: 'Modern Smart Deadbolt Install', category: 'Smart Locks', gradient: 'from-amber-600 to-yellow-400' },
  { title: 'Office Master Key System', category: 'Commercial', gradient: 'from-slate-700 to-slate-400' },
  { title: 'Emergency Car Lockout', category: 'Automotive', gradient: 'from-blue-700 to-blue-400' },
  { title: 'High-Security Deadbolt', category: 'Residential', gradient: 'from-stone-700 to-stone-400' },
  { title: 'Keypad Entry Install', category: 'Smart Locks', gradient: 'from-amber-700 to-amber-400' },
  { title: 'Storefront Lock Upgrade', category: 'Commercial', gradient: 'from-gray-700 to-gray-400' },
  { title: 'Home Rekey After Move', category: 'Residential', gradient: 'from-stone-600 to-stone-300' },
  { title: 'Transponder Key Program', category: 'Automotive', gradient: 'from-blue-800 to-blue-500' },
  { title: 'Panic Bar Installation', category: 'Commercial', gradient: 'from-slate-800 to-slate-500' },
  { title: 'Video Doorbell + Smart Lock', category: 'Smart Locks', gradient: 'from-yellow-700 to-yellow-400' },
  { title: 'Condo Lock Replacement', category: 'Residential', gradient: 'from-stone-800 to-stone-500' },
  { title: 'Fleet Van Key Service', category: 'Automotive', gradient: 'from-blue-600 to-cyan-400' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="bg-gradient-to-br from-[#1C1917] to-[#292524] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Work</h1>
          <p className="text-gray-300 max-w-2xl">Browse our portfolio of completed locksmith projects across residential, commercial, and automotive services.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? 'bg-[#1C1917] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div key={p.title} className="group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className={`h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs text-[#B8860B] font-medium">{p.category}</span>
                  <h3 className="font-semibold mt-1">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-12">No projects found for this category.</p>
          )}
        </div>
      </section>
    </>
  );
}
