import React from 'react';

export default function CategoryPillBar() {
  const categories = [
    'All Categories',
    'Gmail Premium',
    'Capcut Pro',
    'Nord VPN',
    'Canva Team',
    'Netflix 4K',
    'Spotify Duo',
    'Adobe Cloud'
  ];

  return (
    <div className="py-8 bg-[#0d0d15] sticky top-20 z-40 border-b border-[#464554]/30">
      <div className="px-[32px] max-w-[1280px] mx-auto flex items-center gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-full whitespace-nowrap font-['Geist'] text-[14px] leading-[1.4] tracking-[0.05em] font-semibold transition-colors ${
              index === 0
                ? 'bg-[#c0c1ff] text-[#13131b] shadow-sm'
                : 'bg-[#1f1f27] border border-[#464554] text-[#c7c4d7] hover:border-[#c0c1ff]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
