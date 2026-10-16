import React from 'react';
import { Check, Zap, Rocket, Star, ArrowRight, MessageSquare, Clock } from 'lucide-react';

interface PromotionalPackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const PromotionalPackages: React.FC<PromotionalPackagesProps> = ({ onSelectPackage }) => {
  const packages = [
    {
      id: 'starter',
      badge: 'Fast Launch',
      name: 'Starter Business Presence',
      tagline: 'Ideal for local businesses & independent professionals needing a rapid online launch.',
      timeline: '3–5 Business Days',
      isPopular: false,
      features: [
        'Custom Responsive Single/Multi-Page Website',
        'Mobile & Tablet Fluid Optimization',
        'Direct WhatsApp & Call Integration',
        'Contact & Inquiry Form Setup',
        'Local Google Search & SEO Configuration',
        '1 Round of Polish & Revisions'
      ],
      whatsappPrefill: 'Hello SAMLAT DIGITAL SOLUTIONS, I want to book the Starter Business Presence Package.'
    },
    {
      id: 'growth-pro',
      badge: 'Most Popular · High Value',
      name: 'Complete Brand & Web Launch',
      tagline: 'The all-in-one digital growth suite for ambitious businesses wanting to dominate their niche.',
      timeline: '7–10 Business Days',
      isPopular: true,
      features: [
        'Custom High-Conversion Business Website',
        'Original Vector Logo Design & Color Guidelines',
        'Social Media Kit & Promotional Flyers',
        'Fast Page Speed & Performance Engineering',
        'Interactive Product/Service Showcase',
        'Full WhatsApp Lead Capture Architecture',
        'Priority Direct Communication & 2 Revision Rounds'
      ],
      whatsappPrefill: 'Hello SAMLAT DIGITAL SOLUTIONS, I want to book the Complete Brand & Web Launch Package.'
    },
    {
      id: 'ecommerce',
      badge: 'Revenue Generator',
      name: 'E-Commerce Storefront Engine',
      tagline: 'Turn digital browsers into paying customers with a seamless, high-speed shopping experience.',
      timeline: '10–14 Business Days',
      isPopular: false,
      features: [
        'Modern Responsive Online Store Layout',
        'Product Catalog & Inventory Filtering',
        'Mobile-First Cart & Checkout Experience',
        'Payment Gateway & Transfer Flow Readiness',
        'Promotional Store Banners & Graphic Assets',
        'Security Setup & 30-Day Support Period'
      ],
      whatsappPrefill: 'Hello SAMLAT DIGITAL SOLUTIONS, I want to book the E-Commerce Storefront Engine Package.'
    }
  ];

  const handleWhatsAppDirect = (packageName: string, prefill: string) => {
    const encoded = encodeURIComponent(prefill);
    window.open(`https://wa.me/2349132614108?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="packages" className="py-20 md:py-28 bg-[#070c18] relative border-t border-slate-800/80">
      {/* Background glow accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-cyan-300 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Turnkey Digital Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
            Promotional Packages Designed to Accelerate Your Business.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Choose a bundled package tailored to your goals. Transparent scopes, fast turnarounds, and direct lead developer collaboration with zero middlemen.
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.isPopular
                  ? 'bg-[#151D30] border-2 border-cyan-400 shadow-2xl shadow-cyan-950/40 lg:-translate-y-2'
                  : 'bg-[#111728] border border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Most popular ribbon */}
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                  Most Popular · Best ROI
                </div>
              )}

              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                    pkg.isPopular ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/30' : 'bg-[#0B1020] text-slate-400 border border-slate-800'
                  }`}>
                    {pkg.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{pkg.timeline}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {pkg.tagline}
                </p>

                {/* Features list */}
                <div className="space-y-3 pt-6 border-t border-slate-800/80 mb-8">
                  <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    Package Deliverables:
                  </p>
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => handleWhatsAppDirect(pkg.name, pkg.whatsappPrefill)}
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-bold transition-all shadow-lg cursor-pointer ${
                    pkg.isPopular
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-700/30'
                      : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/25'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Book via WhatsApp (09132614108)</span>
                </button>

                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-[#0B1020] hover:bg-slate-800/80 rounded-lg border border-slate-800 transition-colors cursor-pointer"
                >
                  <span>Customize in Project Form</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-blue-950/40 via-[#151D30] to-cyan-950/30 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                The SAMLAT Quality Guarantee
              </h4>
              <p className="text-xs text-slate-300">
                Direct lead engineer collaboration, full cross-device testing, and structured review rounds until you are 100% satisfied.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <a
              href="tel:+2348132927484"
              className="text-xs font-mono font-semibold text-cyan-400 hover:underline"
            >
              Questions? Call 08132927484
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
