import React from 'react';
import { ArrowRight, Code, Sparkles, Layout, Smartphone, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreServices }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow accents */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Subtle tech background grid pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy (Left Column) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Massive Bold Business Name Banner */}
            <div className="space-y-4">
              <div className="text-center lg:text-left">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-cyan-400 block mb-2">
                  OFFICIAL BUSINESS PORTFOLIO
                </span>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white font-['Space_Grotesk'] leading-[0.95] uppercase drop-shadow-2xl">
                  SAMLAT <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300">
                    DIGITAL SOLUTIONS
                  </span>
                </h1>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/90 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                  <span>🔥 Fast 3–7 Day Turnarounds</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-500/40 text-blue-300 text-xs font-bold uppercase tracking-wider">
                  <span>⭐ Web · Graphics · Branding</span>
                </div>
              </div>
            </div>

            {/* Sub-Headline Required Text */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-100 leading-snug max-w-2xl mx-auto lg:mx-0 [text-wrap:balance]">
              Building Digital Experiences That Move Your Business Forward.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We create modern websites, stunning graphics, and practical digital solutions to help businesses build their online presence and grow.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4">
              <button
                onClick={onStartProject}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/2349132614108?text=Hello%20SAMLAT%20DIGITAL%20SOLUTIONS%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20my%20business!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 rounded-lg transition-all cursor-pointer"
              >
                <span>WhatsApp: 09132614108</span>
              </a>

              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-[#151D30] hover:bg-[#1c2742] border border-slate-700/80 rounded-lg transition-all cursor-pointer"
              >
                <span>Services</span>
              </button>
            </div>

            {/* Trust highlights strip */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">100% Responsive UI</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Fast Turnaround</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Clean Modern Code</span>
              </div>
            </div>

          </div>

          {/* Focal Visual Anchor (Right Column) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gradient border */}
              <div className="p-1 rounded-2xl bg-gradient-to-b from-blue-500/40 via-cyan-500/30 to-slate-800 shadow-2xl shadow-black/80">
                <div className="bg-[#151D30] rounded-[14px] overflow-hidden border border-slate-800/90 relative">
                  
                  {/* Visual Illustrative Media */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                    <img
                      src="/src/assets/images/hero_digital_craftsmanship_1792184155537.jpg"
                      alt="SAMLAT DIGITAL SOLUTIONS creative design and web engineering studio"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151D30] via-black/20 to-black/30" />
                    
                    {/* Top Studio Indicator */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 text-[11px] font-semibold bg-[#0B1020]/90 text-cyan-300 border border-cyan-500/40 rounded-md backdrop-blur-md">
                        Digital Production Studio
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-blue-600/80 backdrop-blur-sm flex items-center justify-center text-white shadow-sm">
                        <Code className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Bottom image caption */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-xs font-semibold text-white drop-shadow-md">
                        Code & Creative Engineering
                      </p>
                      <p className="text-[11px] text-slate-300 drop-shadow-sm">
                        High-performance responsive websites & digital graphics
                      </p>
                    </div>
                  </div>

                  {/* Card Content & Features */}
                  <div className="p-5 space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-left">
                      <div className="p-3 rounded-lg bg-[#0B1020]/90 border border-slate-800">
                        <div className="flex items-center gap-2 text-cyan-400 mb-1">
                          <Layout className="w-3.5 h-3.5" />
                          <span className="text-xs font-bold text-white">Full-Stack Web</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-tight">
                          Modern code built for speed, security & conversion.
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-[#0B1020]/90 border border-slate-800">
                        <div className="flex items-center gap-2 text-blue-400 mb-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span className="text-xs font-bold text-white">Brand Artistry</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-tight">
                          Vector logos, graphics & promotional collateral.
                        </p>
                      </div>
                    </div>

                    {/* Quick Direct Contact Footer Inside Card */}
                    <div className="pt-3 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
                      <span>Direct WhatsApp:</span>
                      <a 
                        href="https://wa.me/2349132614108"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-emerald-400 hover:text-emerald-300 font-semibold"
                      >
                        09132614108
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
