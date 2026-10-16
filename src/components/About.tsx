import React from 'react';
import { Target, Layers, Compass, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#0B1020] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Illustrative Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              About Our Brand
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
              Dedicated to Modern Digital Craftsmanship and Tangible Business Impact.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              SAMLAT DIGITAL SOLUTIONS is a versatile digital services brand. We bridge the gap between creative visual artistry and dependable technology, creating websites and design assets that help brands build authority, engage audiences, and scale.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-cyan-400">
              <span className="px-3 py-1.5 rounded-lg bg-[#151D30] border border-slate-800">· Pixel-Precise Typography</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#151D30] border border-slate-800">· Clean Responsive Code</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#151D30] border border-slate-800">· Vector Identity Kits</span>
            </div>
          </div>

          {/* Illustrative Image Representative of the Text */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#151D30] shadow-xl group">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img
                  src="/src/assets/images/about_creative_technology_1792184156477.jpg"
                  alt="Digital artisan illustrating code and design harmony at workstation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-[#12192c] border-t border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white">Visual Artistry × Practical Tech</p>
                  <p className="text-[11px] text-slate-400">Design systems translated directly into production code</p>
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  Craft
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Pillar 1 */}
          <div className="p-8 rounded-xl bg-[#151D30] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Core Mission</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                To equip growing businesses, startups, and established enterprises with high-caliber digital assets—from responsive websites to cohesive brand collateral—that communicate quality and convert interest into action.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80">
              <span className="text-xs text-cyan-400 font-medium">Outcome-Driven Methodology</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-xl bg-[#151D30] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Holistic Expertise</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We combine website development, branding, graphic design, and digital consulting under one roof. This guarantees complete visual coherence and technical consistency across all your customer touchpoints.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80">
              <span className="text-xs text-cyan-400 font-medium">Design & Code Harmony</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-xl bg-[#151D30] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Direct & Transparent Service</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                No corporate jargon or hidden layers. You work directly with a dedicated digital practitioner who understands your business vision, answers your questions promptly, and respects your timelines.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80">
              <span className="text-xs text-cyan-400 font-medium">Direct One-on-One Collaboration</span>
            </div>
          </div>

        </div>

        {/* Brand Commitments strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#151D30]/60 border border-slate-800">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Our Standard Commitments to Every Client
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-slate-300">
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Mobile-first fluid responsiveness across all screens</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Clean, standard-compliant semantic code structure</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Original graphic and branding assets built to order</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Direct WhatsApp and phone access for swift communication</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
