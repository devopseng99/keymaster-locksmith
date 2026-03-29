'use client';

import { useState } from 'react';

const serviceTypes = [
  { id: 'residential-lockout', label: 'Residential Lockout', base: 80 },
  { id: 'commercial-lockout', label: 'Commercial Lockout', base: 100 },
  { id: 'car-lockout', label: 'Car Lockout', base: 70 },
  { id: 'lock-rekey', label: 'Lock Rekeying', base: 35 },
  { id: 'lock-replace', label: 'Lock Replacement', base: 125 },
  { id: 'smart-lock', label: 'Smart Lock Install', base: 250 },
  { id: 'master-key', label: 'Master Key System', base: 350 },
  { id: 'security-audit', label: 'Security Audit', base: 150 },
];

const urgencies = [
  { id: 'emergency', label: 'Emergency (ASAP)', mult: 1.5 },
  { id: 'same-day', label: 'Same Day', mult: 1.2 },
  { id: 'scheduled', label: 'Scheduled', mult: 1.0 },
];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState('');
  const [urgency, setUrgency] = useState('');
  const [locks, setLocks] = useState(1);
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const selectedService = serviceTypes.find((s) => s.id === service);
  const selectedUrgency = urgencies.find((u) => u.id === urgency);
  const estimate = selectedService && selectedUrgency
    ? Math.round(selectedService.base * selectedUrgency.mult * locks)
    : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
          <p className="text-gray-600 mb-2">We&apos;ve received your service request.</p>
          <p className="text-gray-600 mb-6">A locksmith will contact you shortly at <strong>{form.phone}</strong>.</p>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-left">
            <h3 className="font-semibold mb-3">Booking Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Service:</span><span>{selectedService?.label}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Urgency:</span><span>{selectedUrgency?.label}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Locks:</span><span>{locks}</span></div>
              <div className="flex justify-between font-bold border-t pt-2"><span>Estimated Total:</span><span className="text-[#B8860B]">${estimate}</span></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-br from-[#1C1917] to-[#292524] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Book a Service</h1>
          <p className="text-gray-300">Schedule your locksmith service in 3 easy steps. Emergency dispatch available 24/7.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          {/* Progress */}
          <div className="flex items-center justify-center mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                  step >= s ? 'bg-[#1C1917] text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {s}
                </div>
                {s < 3 && <div className={`w-16 h-0.5 ${step > s ? 'bg-[#1C1917]' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>

          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Select Your Service</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {serviceTypes.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setService(s.id)}
                    className={`p-4 rounded-xl text-left border-2 transition-colors ${
                      service === s.id ? 'border-[#1C1917] bg-[#1C1917]/5' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium">{s.label}</div>
                    <div className="text-sm text-[#B8860B]">From ${s.base}</div>
                  </button>
                ))}
              </div>

              <h3 className="font-semibold mb-3">Urgency</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {urgencies.map((u) => (
                  <button
                    key={u.id}
                    onClick={() => setUrgency(u.id)}
                    className={`px-5 py-3 rounded-lg border-2 text-sm font-medium transition-colors ${
                      urgency === u.id ? 'border-[#1C1917] bg-[#1C1917]/5' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {u.label}
                    {u.mult > 1 && <span className="text-[#B8860B] ml-1">+{Math.round((u.mult - 1) * 100)}%</span>}
                  </button>
                ))}
              </div>

              <h3 className="font-semibold mb-3">Number of Locks</h3>
              <div className="flex items-center gap-4 mb-8">
                <button onClick={() => setLocks(Math.max(1, locks - 1))} className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center font-bold hover:bg-gray-300">-</button>
                <span className="text-xl font-bold w-8 text-center">{locks}</span>
                <button onClick={() => setLocks(Math.min(20, locks + 1))} className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center font-bold hover:bg-gray-300">+</button>
              </div>

              {estimate > 0 && (
                <div className="bg-[#1C1917] text-white rounded-xl p-6 mb-8">
                  <div className="text-sm text-gray-400 mb-1">Estimated Price</div>
                  <div className="text-3xl font-bold text-[#DAA520]">${estimate}</div>
                  <div className="text-xs text-gray-400 mt-1">Final price may vary based on complexity</div>
                </div>
              )}

              <button
                onClick={() => setStep(2)}
                disabled={!service || !urgency}
                className="w-full bg-[#1C1917] text-white py-3 rounded-lg font-semibold disabled:opacity-40 hover:bg-[#292524] transition-colors"
              >
                Continue to Details
              </button>
            </div>
          )}

          {/* Step 2: Contact Info */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Your Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DAA520]" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DAA520]" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DAA520]" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Service Address</label>
                  <input type="text" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DAA520]" placeholder="123 Main St, City, State" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Additional Notes</label>
                  <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DAA520] h-24 resize-none" placeholder="Any details about your situation..." />
                </div>
              </div>
              <div className="flex gap-3 mt-8">
                <button onClick={() => setStep(1)} className="px-6 py-3 rounded-lg border border-gray-300 font-medium hover:bg-gray-50 transition-colors">Back</button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!form.name || !form.phone || !form.address}
                  className="flex-1 bg-[#1C1917] text-white py-3 rounded-lg font-semibold disabled:opacity-40 hover:bg-[#292524] transition-colors"
                >
                  Review Booking
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Review & Confirm */}
          {step === 3 && (
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold mb-6">Review & Confirm</h2>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4 mb-8">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><span className="text-gray-500">Service:</span><br /><strong>{selectedService?.label}</strong></div>
                  <div><span className="text-gray-500">Urgency:</span><br /><strong>{selectedUrgency?.label}</strong></div>
                  <div><span className="text-gray-500">Locks:</span><br /><strong>{locks}</strong></div>
                  <div><span className="text-gray-500">Estimate:</span><br /><strong className="text-[#B8860B]">${estimate}</strong></div>
                </div>
                <hr />
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><span className="text-gray-500">Name:</span><br /><strong>{form.name}</strong></div>
                  <div><span className="text-gray-500">Phone:</span><br /><strong>{form.phone}</strong></div>
                  <div><span className="text-gray-500">Email:</span><br /><strong>{form.email || '—'}</strong></div>
                  <div><span className="text-gray-500">Address:</span><br /><strong>{form.address}</strong></div>
                </div>
                {form.notes && (
                  <>
                    <hr />
                    <div className="text-sm"><span className="text-gray-500">Notes:</span><br />{form.notes}</div>
                  </>
                )}
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(2)} className="px-6 py-3 rounded-lg border border-gray-300 font-medium hover:bg-gray-50 transition-colors">Back</button>
                <button type="submit" className="flex-1 bg-[#DAA520] text-[#1C1917] py-3 rounded-lg font-bold text-lg hover:bg-[#B8860B] transition-colors">
                  Confirm Booking
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
