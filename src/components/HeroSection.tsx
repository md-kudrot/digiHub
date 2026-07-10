import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative h-[716px] flex items-center overflow-hidden">
      <div className="relative px-[32px] max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-[24px] items-center">
        <div className="flex flex-col gap-[24px]">
          <span className="px-4 py-1.5 bg-[#8083ff]/10 text-[#8083ff] rounded-full font-['Geist'] text-[14px] leading-[1.4] tracking-[0.05em] font-semibold w-fit">
            The World's #1 Digital Marketplace
          </span>
          <h1 className="font-['Geist'] text-[48px] md:text-[64px] font-bold leading-[1.1] tracking-[-0.02em] text-[#e4e1ed]">
            Scale Your Business with Premium <span className="bg-gradient-to-br from-[#4648d4] to-[#2170e4] bg-clip-text text-transparent">Products</span> Delivered Instantly.
          </h1>
          <p className="text-[#c7c4d7] font-['Inter'] text-[18px] leading-[1.6] max-w-lg">
            Unlock access to thousands of high-quality digital accounts, software keys, and subscription services with automatic delivery within 30 seconds.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-br from-[#4648d4] to-[#2170e4] text-white font-bold text-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(15,23,42,0.1)] shadow-md">Login to Buy Now</button>
            <button className="px-8 py-4 rounded-xl border-2 border-[#464554] text-[#e4e1ed] font-bold text-lg hover:bg-[#1f1f27] transition-all">Create Account</button>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 bg-[#34343d]">
            <img className="w-full h-full object-cover" alt="A professional high-fidelity 3D render" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBve-X-42U5bOw4dGHM_M_yzhgLuE28QRPd3BgmYfPpn-N_g7X9iLIJpP_rFazTACREspKFNv83cy2AiDtHN0xVspK3yid5chnK4mixLm6odletSxV8rgV3LN3VWQ5otm56CKxmLHtOrd7U45R5D3ik_ACpK72i5gE2I3u9ITJ8qBrQsJwaLl7-f0qvHSWTu7EMLGRBNYICPUu79NiKgckPr4yVcqHLR5Fh7MQWbZD2RUeLWS6d-Oux9A" />
          </div>
        </div>
      </div>
    </section>
  );
}
