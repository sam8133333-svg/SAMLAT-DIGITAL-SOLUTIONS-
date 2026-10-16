import React from 'react';
import { Phone, MessageSquare, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavClick: (href: string) => void;
  onServiceSelect: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onServiceSelect }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'Website Development',
    'Graphic Design',
    'Logo Design and Branding',
    'E-commerce Websites',
    'Website Maintenance',
    'Fintech and Digital Services',
    'Digital Consultation',
  ];

  const quickLinks = [
    { name: 'About Brand', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Package Deals', href: '#packages' },
    { name: 'Portfolio & Concepts', href: '#portfolio' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Working Process', href: '#how-it-works' },
    { name: 'Get In Touch', href: '#contact' },
  ];

  return (
    <footer className="bg-[#070b16] border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#0B1020] rounded-[6px] flex items-center justify-center">
                  <span className="font-bold text-xs text-cyan-400">SDS</span>
                </div>
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                SAMLAT <span className="text-cyan-400 font-semibold">DIGITAL SOLUTIONS</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Building digital experiences that move your business forward. We create modern websites, stunning graphics, and practical digital solutions.
            </p>
            <div className="pt-2 text-xs text-slate-300">
              <span className="text-slate-400">Direct consultation:</span>{' '}
              <a href="tel:+2348132927484" className="text-cyan-400 hover:underline font-mono">
                08132927484
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick(link.href);
                    }}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => onServiceSelect(service)}
                    className="hover:text-cyan-400 transition-colors text-left cursor-pointer"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="text-slate-400">Phone:</span>
                <a href="tel:+2348132927484" className="font-mono text-slate-200 hover:text-cyan-400">
                  08132927484
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-slate-400">WhatsApp:</span>
                <a 
                  href="https://wa.me/2349132614108" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-mono text-slate-200 hover:text-emerald-400"
                >
                  09132614108
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="text-slate-400">Email:</span>
                <a href="mailto:solatunde410@gmail.com" className="text-slate-200 hover:text-cyan-400 break-all">
                  solatunde410@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400">
            © {currentYear} SAMLAT DIGITAL SOLUTIONS. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#151D30] text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
