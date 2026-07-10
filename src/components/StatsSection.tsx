import React from 'react';

export default function StatsSection() {
  const stats = [
    { value: '50K+', label: 'Orders Delivered' },
    { value: '12K+', label: 'Active Customers' },
    { value: '450+', label: 'Products Available' },
    { value: '99.9%', label: 'System Uptime' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#4648d4] to-[#2170e4] text-white">
      <div className="px-[32px] max-w-[1280px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {stats.map((s, idx) => (
          <div key={idx}>
            <div className="font-['Geist'] text-[48px] font-bold leading-[1.1] tracking-[-0.02em] mb-2">{s.value}</div>
            <div className="font-['Geist'] text-[14px] font-semibold leading-[1.4] tracking-[0.05em] opacity-80 uppercase tracking-widest">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
