'use client';

import { useState } from 'react';
import Link from 'next/link';

const sidebarLinks = [
  { label: 'Overview', id: 'overview' },
  { label: 'Jobs', id: 'jobs' },
  { label: 'Customers', id: 'customers' },
  { label: 'Inventory', id: 'inventory' },
  { label: 'Reports', id: 'reports' },
];

const stats = [
  { label: 'Active Jobs', value: '12', change: '+3 today', color: 'bg-blue-50 text-blue-700' },
  { label: 'Revenue (MTD)', value: '$18,450', change: '+12% vs last month', color: 'bg-green-50 text-green-700' },
  { label: 'Avg Response', value: '14 min', change: '-2 min vs last week', color: 'bg-amber-50 text-amber-700' },
  { label: 'Customer Rating', value: '4.9', change: '256 reviews', color: 'bg-purple-50 text-purple-700' },
];

const recentJobs = [
  { id: 'JOB-1247', customer: 'Sarah Mitchell', type: 'Residential Lockout', status: 'Completed', time: '2:30 PM', tech: 'Mike R.' },
  { id: 'JOB-1248', customer: 'David Kim', type: 'Smart Lock Install', status: 'In Progress', time: '3:15 PM', tech: 'Alex T.' },
  { id: 'JOB-1249', customer: 'Jennifer Lopez', type: 'Car Lockout', status: 'Dispatched', time: '3:45 PM', tech: 'Chris B.' },
  { id: 'JOB-1250', customer: 'Robert Chen', type: 'Lock Rekey', status: 'Pending', time: '4:00 PM', tech: 'Unassigned' },
  { id: 'JOB-1251', customer: 'Amy Watson', type: 'Office Lockout', status: 'Completed', time: '1:15 PM', tech: 'Mike R.' },
  { id: 'JOB-1252', customer: 'Tom Bradley', type: 'Panic Bar Install', status: 'Scheduled', time: 'Tomorrow', tech: 'Alex T.' },
];

const statusColors: Record<string, string> = {
  Completed: 'bg-green-100 text-green-800',
  'In Progress': 'bg-blue-100 text-blue-800',
  Dispatched: 'bg-amber-100 text-amber-800',
  Pending: 'bg-gray-100 text-gray-800',
  Scheduled: 'bg-purple-100 text-purple-800',
};

const weeklyData = [
  { day: 'Mon', jobs: 8, revenue: 2100 },
  { day: 'Tue', jobs: 12, revenue: 3200 },
  { day: 'Wed', jobs: 6, revenue: 1800 },
  { day: 'Thu', jobs: 15, revenue: 4100 },
  { day: 'Fri', jobs: 11, revenue: 2900 },
  { day: 'Sat', jobs: 9, revenue: 2400 },
  { day: 'Sun', jobs: 5, revenue: 1950 },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const maxRevenue = Math.max(...weeklyData.map((d) => d.revenue));

  return (
    <div className="flex min-h-[calc(100vh-140px)]">
      {/* Sidebar */}
      <aside className="w-56 bg-[#1C1917] text-white p-4 hidden md:block shrink-0">
        <div className="mb-8">
          <h2 className="text-[#DAA520] font-bold text-sm uppercase tracking-wider">Dashboard</h2>
        </div>
        <nav className="space-y-1">
          {sidebarLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                activeTab === link.id ? 'bg-white/10 text-[#DAA520]' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="mt-8 pt-4 border-t border-white/10">
          <Link href="/booking" className="block text-center bg-[#DAA520] text-[#1C1917] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#B8860B] transition-colors">
            + New Job
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Welcome back, Admin</h1>
          <p className="text-gray-500 text-sm">Here&apos;s what&apos;s happening with your locksmith business today.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="text-sm text-gray-500 mb-1">{s.label}</div>
              <div className="text-2xl font-bold">{s.value}</div>
              <div className={`inline-block px-2 py-0.5 rounded text-xs font-medium mt-2 ${s.color}`}>{s.change}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold mb-4">Weekly Revenue</h3>
            <div className="flex items-end gap-3 h-48">
              {weeklyData.map((d) => (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-xs text-gray-500">${(d.revenue / 1000).toFixed(1)}k</span>
                  <div
                    className="w-full bg-gradient-to-t from-[#B8860B] to-[#DAA520] rounded-t"
                    style={{ height: `${(d.revenue / maxRevenue) * 140}px` }}
                  />
                  <span className="text-xs text-gray-500">{d.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold mb-4">Job Types Today</h3>
            <div className="space-y-3">
              {[
                { type: 'Lockouts', count: 5, pct: 42 },
                { type: 'Installations', count: 3, pct: 25 },
                { type: 'Rekeying', count: 2, pct: 17 },
                { type: 'Other', count: 2, pct: 16 },
              ].map((item) => (
                <div key={item.type}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{item.type}</span>
                    <span className="text-gray-500">{item.count} ({item.pct}%)</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full">
                    <div className="h-full bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Jobs Table */}
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h3 className="font-semibold">Recent Jobs</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-gray-500">
                  <th className="text-left py-3 px-6 font-medium">Job ID</th>
                  <th className="text-left py-3 px-6 font-medium">Customer</th>
                  <th className="text-left py-3 px-6 font-medium">Type</th>
                  <th className="text-left py-3 px-6 font-medium">Status</th>
                  <th className="text-left py-3 px-6 font-medium">Time</th>
                  <th className="text-left py-3 px-6 font-medium">Technician</th>
                </tr>
              </thead>
              <tbody>
                {recentJobs.map((job) => (
                  <tr key={job.id} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-3 px-6 font-mono text-xs">{job.id}</td>
                    <td className="py-3 px-6">{job.customer}</td>
                    <td className="py-3 px-6">{job.type}</td>
                    <td className="py-3 px-6">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[job.status]}`}>{job.status}</span>
                    </td>
                    <td className="py-3 px-6 text-gray-500">{job.time}</td>
                    <td className="py-3 px-6 text-gray-500">{job.tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
