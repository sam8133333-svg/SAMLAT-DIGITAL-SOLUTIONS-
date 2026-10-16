import React from 'react';
import { Lightbulb, Layout, Smartphone, ZoomIn, Users2, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: 'Creativity',
      description: 'We reject cookie-cutter templates. Every project begins with an original aesthetic vision tailored to your brand personality and industry context.',
      icon: <Lightbulb className="w-6 h-6 text-cyan-400" />,
      tagline: 'Distinctive Visual Expression'
    },
    {
      title: 'Modern Design',
      description: 'We follow current UI/UX principles: generous whitespace, elegant dark modes, refined typography, and purposeful micro-interactions.',
      icon: <Layout className="w-6 h-6 text-blue-400" />,
      tagline: 'Contemporary Digital Polish'
    },
    {
      title: 'Mobile Responsiveness',
      description: 'With over 70% of web traffic happening on mobile devices, our interfaces adapt fluidly across handheld screens, tablets, and ultra-wide desktops.',
      icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
      tagline: 'Flawless Fluid Layouts'
    },
    {
      title: 'Attention to Detail',
      description: 'From micro-typography kerning to asset compression and accessibility contrast, we obsess over every pixel so your brand looks world-class.',
      icon: <ZoomIn className="w-6 h-6 text-blue-400" />,
      tagline: 'Precision in Execution'
    },
    {
      title: 'Customer-Focused Service',
      description: 'You get direct personal contact via WhatsApp and phone. We listen to your goals, provide rapid updates, and treat your business as our priority.',
      icon: <Users2 className="w-6 h-6 text-cyan-400" />,
      tagline: 'Direct, Attentive Support'
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#0B1020] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
            The SAMLAT Advantage
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
            Why Businesses Choose SAMLAT DIGITAL SOLUTIONS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            We focus on work that produces real-world confidence: websites that load fast and look pristine, graphics that capture genuine interest, and communication you can count on.
          </p>
        </div>

        {/* 5 Points Bento / Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => {
            const isWide = index === 0 || index === 4;
            return (
              <div
                key={point.title}
                className={`p-8 rounded-xl bg-[#151D30] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between ${
                  isWide ? 'lg:col-span-1 md:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#0B1020] border border-slate-800 flex items-center justify-center mb-6">
                    {point.icon}
                  </div>
                  
                  <div className="text-xs font-mono text-cyan-400 mb-1">
                    0{index + 1}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {point.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  <span className="text-xs text-slate-400 font-medium">
                    {point.tagline}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Quick Assurance Summary Card */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-blue-950/60 to-[#151D30] border border-blue-500/30 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center mb-6 text-blue-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Guaranteed Satisfaction
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We work iteratively with milestone reviews. You will see progress drafts, test builds, and have full revision rounds before project sign-off.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-blue-800/40 text-xs text-cyan-300 font-medium">
              Reliable Delivery Every Time
            </div>
          </div>

        </div>

        {/* Illustrative Proof Showcases Illustrating The Text */}
        <div className="mt-16 pt-16 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
              Visual Demonstration
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Our Craftsmanship in Action
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              Representative examples showing how our focus on responsive engineering and creative detail delivers real-world results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Visual 1: Mobile Responsiveness Illustrated */}
            <div className="rounded-xl overflow-hidden bg-[#151D30] border border-slate-800 hover:border-cyan-500/40 transition-all group">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src="/src/assets/images/service_web_responsive_1792184156347.jpg"
                  alt="Multi-device synchronized responsive website illustrating mobile responsiveness"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151D30] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[11px] font-semibold bg-[#0B1020]/90 text-cyan-300 border border-cyan-500/30 rounded-md backdrop-blur-sm">
                    Mobile Responsiveness Illustrated
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-2">
                  Unified Cross-Device Adaptation
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Every interface we code is designed to load quickly and format harmoniously across handheld smartphones, tablets, and wide monitors.
                </p>
              </div>
            </div>

            {/* Visual 2: Creativity & Attention to Detail Illustrated */}
            <div className="rounded-xl overflow-hidden bg-[#151D30] border border-slate-800 hover:border-blue-500/40 transition-all group">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src="/src/assets/images/service_branding_craft_1792184156656.jpg"
                  alt="Brand identity book, vector software, and color swatches illustrating attention to detail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151D30] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[11px] font-semibold bg-[#0B1020]/90 text-blue-300 border border-blue-500/30 rounded-md backdrop-blur-sm">
                    Creativity & Precision Illustrated
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-2">
                  Meticulous Identity & Graphic Systems
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  From mathematical logo kerning to curated color harmony and print collateral, we build visual systems that command authority.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
