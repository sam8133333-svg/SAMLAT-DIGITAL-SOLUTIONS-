import React, { useState, forwardRef } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  AlertCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactProps {
  selectedServiceFromCard?: string;
}

export const Contact = forwardRef<HTMLDivElement, ContactProps>(({ selectedServiceFromCard }, ref) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: selectedServiceFromCard || 'Website Development',
    projectDescription: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [copied, setCopied] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  // Sync if selectedServiceFromCard changes
  React.useEffect(() => {
    if (selectedServiceFromCard) {
      setFormData(prev => ({ ...prev, service: selectedServiceFromCard }));
    }
  }, [selectedServiceFromCard]);

  const serviceOptions = [
    'Website Development',
    'Graphic Design',
    'Logo Design and Branding',
    'E-commerce Websites',
    'Website Maintenance',
    'Fintech and Digital Services',
    'Digital Consultation',
    'Other / General Inquiry'
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please describe your project or inquiry.';
    } else if (formData.projectDescription.trim().length < 10) {
      newErrors.projectDescription = 'Project description must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructWhatsAppMessage = (): string => {
    return `Hello SAMLAT DIGITAL SOLUTIONS,\n\nI would like to make an inquiry regarding your services.\n\n👤 Name: ${formData.name.trim()}\n✉️ Email: ${formData.email.trim()}\n💼 Service Required: ${formData.service}\n\n📝 Project Description:\n${formData.projectDescription.trim()}\n\nLooking forward to your response!`;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const message = constructWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2349132614108?text=${encodedMessage}`;

    setSubmittedStatus('WhatsApp opened with your prefilled inquiry. You can send the message now.');
    
    // Open WhatsApp in new tab / mobile app
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    if (!validate()) {
      return;
    }
    const message = constructWhatsAppMessage();
    navigator.clipboard.writeText(message).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <section id="contact" ref={ref} className="py-20 md:py-28 bg-[#0B1020] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
            Let’s Discuss Your Next Digital Project.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Have a project in mind or need a reliable technical and creative partner? Contact us directly or submit your inquiry below to connect immediately on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          
          {/* Direct Contact Channels (Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            
            <h3 className="text-xl font-bold text-white mb-4">
              Direct Contact Channels
            </h3>

            {/* Direct Cards */}
            <div className="space-y-4">
              
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/2349132614108"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-[#151D30] border border-emerald-500/30 hover:border-emerald-500/60 transition-all flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-950/70 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                      WhatsApp Chat & Fast Response
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </div>
                  <div className="text-lg font-mono font-bold text-white mt-0.5">
                    09132614108
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Direct instant messaging for quick project inquiries and quotes.
                  </p>
                </div>
              </a>

              {/* Phone Call Card */}
              <a
                href="tel:+2348132927484"
                className="p-5 rounded-xl bg-[#151D30] border border-blue-500/30 hover:border-blue-500/60 transition-all flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-950/70 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                      Direct Phone Call
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </div>
                  <div className="text-lg font-mono font-bold text-white mt-0.5">
                    08132927484
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Available for phone consultations and verbal project discussions.
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:solatunde410@gmail.com"
                className="p-5 rounded-xl bg-[#151D30] border border-slate-800 hover:border-cyan-500/50 transition-all flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-950/70 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      Official Email
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </div>
                  <div className="text-base sm:text-lg font-medium text-white mt-0.5 break-all">
                    solatunde410@gmail.com
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Send detailed briefs, RFPs, design attachments, and project outlines.
                  </p>
                </div>
              </a>

            </div>

            {/* Availability Notice */}
            <div className="p-4 rounded-xl bg-[#0B1020] border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Prompt reply guaranteed within regular business hours.</span>
            </div>

          </div>

          {/* Inquiry Form (Right Column) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#151D30] border border-slate-800 shadow-xl shadow-black/40">
              
              <div className="mb-6 pb-4 border-b border-slate-800">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-950/80 border border-blue-500/40 text-[11px] font-semibold text-cyan-300 mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Interactive Quick Quote Builder</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Configure Your Project & Get Instant Quote
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Select your service requirements, timeline urgency, and project details below to launch a pre-formatted inquiry directly on WhatsApp.
                </p>
              </div>

              {/* Quick Project Urgency Selector */}
              <div className="mb-6 p-4 rounded-xl bg-[#0B1020] border border-slate-800">
                <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                  1. Desired Turnaround Urgency
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {['Express (3-5 Days)', 'Standard (1-2 Weeks)', 'Flexible'].map((timeline) => (
                    <button
                      key={timeline}
                      type="button"
                      onClick={() => {
                        const currentDesc = formData.projectDescription;
                        const timelineTag = `[Turnaround: ${timeline}]`;
                        const cleaned = currentDesc.replace(/\[Turnaround: [^\]]+\]\s*/g, '');
                        setFormData({
                          ...formData,
                          projectDescription: `${timelineTag} ${cleaned}`.trim()
                        });
                      }}
                      className="px-2.5 py-2 text-xs font-medium rounded-lg border border-slate-700/80 bg-[#151D30] text-slate-300 hover:text-white hover:border-cyan-400 transition-colors text-center cursor-pointer"
                    >
                      {timeline}
                    </button>
                  ))}
                </div>
              </div>

              {submittedStatus && (
                <div className="mb-6 p-4 rounded-lg bg-emerald-950/60 border border-emerald-500/50 flex items-start gap-3 text-emerald-300 text-xs sm:text-sm">
                  <Check className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-semibold text-emerald-200">Inquiry Prepared Successfully</p>
                    <p className="mt-0.5 text-emerald-300/90">{submittedStatus}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. John Doe or Acme Corp"
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#0B1020] text-sm text-white border transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                      errors.name ? 'border-rose-500' : 'border-slate-800 hover:border-slate-700'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. john@example.com"
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#0B1020] text-sm text-white border transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                      errors.email ? 'border-rose-500' : 'border-slate-800 hover:border-slate-700'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="contact-service" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Select Required Service <span className="text-cyan-400">*</span>
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => {
                      setFormData({ ...formData, service: e.target.value });
                      if (errors.service) setErrors({ ...errors, service: undefined });
                    }}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0B1020] text-sm text-white border border-slate-800 hover:border-slate-700 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0B1020] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="contact-desc" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Project Description & Requirements <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-desc"
                    rows={4}
                    value={formData.projectDescription}
                    onChange={(e) => {
                      setFormData({ ...formData, projectDescription: e.target.value });
                      if (errors.projectDescription) setErrors({ ...errors, projectDescription: undefined });
                    }}
                    placeholder="Briefly describe what you want built, your timeline, or any specific design preferences..."
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#0B1020] text-sm text-white border transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                      errors.projectDescription ? 'border-rose-500' : 'border-slate-800 hover:border-slate-700'
                    }`}
                  />
                  {errors.projectDescription && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.projectDescription}</span>
                    </p>
                  )}
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 shadow-lg shadow-emerald-700/25 transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp (09132614108)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-medium text-slate-300 bg-[#0B1020] hover:bg-slate-800 border border-slate-700 transition-colors cursor-pointer"
                    title="Copy formatted message to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied!' : 'Copy Text'}</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center sm:text-left pt-2 leading-relaxed">
                  * Note: Clicking "Send via WhatsApp" opens WhatsApp with your prefilled message addressed to SAMLAT DIGITAL SOLUTIONS (09132614108).
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
