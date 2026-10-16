import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export const FloatingContactButtons: React.FC = () => {
  return (
    <aside
      aria-label="Quick Contact Actions"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto"
    >
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/2349132614108"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with SAMLAT DIGITAL SOLUTIONS at 09132614108"
        className="group flex items-center gap-2.5 pl-3.5 pr-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-black/50 hover:shadow-emerald-600/40 border border-emerald-400/40 transition-all duration-200 active:scale-95 cursor-pointer"
      >
        <div className="w-5 h-5 flex items-center justify-center shrink-0">
          <MessageSquare className="w-5 h-5 fill-white text-emerald-600" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-bold tracking-wider leading-none text-emerald-100">
            WhatsApp
          </span>
          <span className="font-mono text-xs font-semibold leading-tight text-white whitespace-nowrap">
            09132614108
          </span>
        </div>
      </a>

      {/* Call Floating Button */}
      <a
        href="tel:+2348132927484"
        aria-label="Call SAMLAT DIGITAL SOLUTIONS at 08132927484"
        className="group flex items-center gap-2.5 pl-3.5 pr-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-black/50 hover:shadow-blue-600/40 border border-blue-400/40 transition-all duration-200 active:scale-95 cursor-pointer"
      >
        <div className="w-5 h-5 flex items-center justify-center shrink-0">
          <Phone className="w-5 h-5 fill-white text-blue-600" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-bold tracking-wider leading-none text-blue-100">
            Call
          </span>
          <span className="font-mono text-xs font-semibold leading-tight text-white whitespace-nowrap">
            08132927484
          </span>
        </div>
      </a>
    </aside>
  );
};
