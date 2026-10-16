import React from 'react';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';

interface PromoBannerProps {
  onClaimOffer: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onClaimOffer }) => {
  return (
    <aside
      aria-label="Brand Header and Contact Hotlines"
      className="bg-gradient-to-r from-blue-950 via-slate-900 to-[#0B1020] text-white text-xs py-2.5 px-4 border-b border-cyan-500/40 sticky top-0 z-50 shadow-lg shadow-black/60"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* VERY BIG & VERY BOLD Business Name at the Very Top */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-md shadow-cyan-400 shrink-0 animate-pulse"></span>
            <span className="font-black text-base sm:text-lg md:text-xl tracking-wider text-white uppercase drop-shadow-md font-['Space_Grotesk'] leading-none">
              SAMLAT <span className="text-cyan-400 font-black">DIGITAL SOLUTIONS</span>
            </span>
          </div>
          <span className="hidden lg:inline text-slate-600">|</span>
          <span className="hidden lg:inline text-xs font-bold text-slate-300">
            Web Development · Graphic Design · Digital Branding
          </span>
        </div>

        {/* Right: Direct Hotlines & Quick Action */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 text-xs font-bold">
          <a
            href="https://wa.me/2349132614108"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp SAMLAT DIGITAL SOLUTIONS at 09132614108"
            className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-emerald-400 text-emerald-950" />
            <span className="font-mono">09132614108</span>
          </a>

          <a
            href="tel:+2348132927484"
            aria-label="Call SAMLAT DIGITAL SOLUTIONS at 08132927484"
            className="hidden sm:inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 fill-cyan-400 text-cyan-950" />
            <span className="font-mono">08132927484</span>
          </a>

          <button
            onClick={onClaimOffer}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all cursor-pointer shadow-md shadow-blue-700/40 text-xs uppercase tracking-wide"
          >
            <span>Get Quote</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </aside>
  );
};
