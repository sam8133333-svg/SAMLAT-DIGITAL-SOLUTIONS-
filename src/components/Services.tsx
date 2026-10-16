import React from 'react';
import { 
  Code2, 
  Palette, 
  Sparkles, 
  ShoppingBag, 
  Wrench, 
  TrendingUp, 
  Lightbulb,
  ArrowRight,
  Check
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

interface ServicesProps {
  onInquireService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onInquireService }) => {
  // Mapping icons dynamically
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6" />;
      case 'Palette':
        return <Palette className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6" />;
      default:
        return <Code2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0B1020] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
            Comprehensive Digital Services Tailored for Real Growth.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            From modern responsive websites and high-converting e-commerce shops to memorable brand identities and strategic consulting, explore our full spectrum of digital capabilities.
          </p>
        </div>

        {/* Services Grid (7 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const isFeatured = index === 0 || index === 3; // Web Dev and E-commerce get a subtle visual accent

            return (
              <div
                key={service.id}
                className={`p-7 rounded-xl bg-[#151D30] border transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1 ${
                  isFeatured 
                    ? 'border-blue-500/40 hover:border-cyan-400/60 shadow-lg shadow-blue-900/10' 
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Top Icon and index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {service.name}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Feature highlights */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Working Inquiry Button */}
                <div className="pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => onInquireService(service.name)}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-slate-200 bg-[#0B1020] hover:bg-blue-600 hover:text-white border border-slate-800 hover:border-blue-500 transition-all cursor-pointer group/btn"
                  >
                    <span>Inquire for {service.name}</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover/btn:text-white transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
