import React from 'react';
import { MessageSquare, Phone, CheckCircle2, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';

interface AdvertisingBillboardProps {
  onStartInquiry: () => void;
}

export const AdvertisingBillboard: React.FC<AdvertisingBillboardProps> = ({ onStartInquiry }) => {
  return (
    <section className="py-20 bg-[#080d1c] relative overflow-hidden border-t border-b border-cyan-500/20">
      {/* Background glow highlights */}
      <div 
        className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-10 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Advertising Media Billboard (Left/Top) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-2xl shadow-cyan-950/50 group">
              <div className="aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src="/src/assets/images/promo_advertising_campaign_1792184821534.jpg"
                  alt="High-impact digital marketing and website conversion analytics display"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d1c] via-black/30 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-bold bg-blue-600 text-white rounded-md uppercase tracking-wider shadow-lg">
                  Conversion Driven
                </span>
              </div>

              {/* Bottom Metrics Pill Strip */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#0B1020]/90 backdrop-blur-md border border-slate-700 flex items-center justify-between text-xs">
                <div className="text-left">
                  <p className="font-semibold text-white">Conversion & Lead Architecture</p>
                  <p className="text-[11px] text-cyan-300">Fast load times, clear CTAs & clean UI</p>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <TrendingUp className="w-4 h-4" />
                  <span>ROI Focused</span>
                </div>
              </div>
            </div>
          </div>

          {/* Advertising Pitch & Immediate CTAs (Right) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold">
              <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>Drive Real Business Results</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
              Stop Losing High-Value Clients to Weak Digital Presence.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Your website is your 24/7 digital storefront. An outdated layout, broken mobile experience, or pixelated graphics drives ready-to-buy customers straight to your competitors.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              At <strong className="text-white">SAMLAT DIGITAL SOLUTIONS</strong>, we engineer modern, lightning-fast websites and eye-catching graphic collateral that build immediate consumer trust and compel action.
            </p>

            {/* Core Value Deliverables */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>100% Mobile & Handheld Optimized</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Rapid 3–7 Day Fast Turnaround</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Direct Lead Developer Communication</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Zero Hidden Fees or Middleware Bloat</span>
              </div>
            </div>

            {/* Direct Instant Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3.5">
              <a
                href="https://wa.me/2349132614108?text=Hello%20SAMLAT%20DIGITAL%20SOLUTIONS%2C%20I%20want%20to%20discuss%20a%20project%20and%20get%20a%20quote!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 shadow-xl shadow-emerald-700/30 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us Now (09132614108)</span>
              </a>

              <a
                href="tel:+2348132927484"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-200 bg-[#151D30] hover:bg-[#1f2b48] border border-slate-700 hover:border-cyan-400/50 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call 08132927484</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
