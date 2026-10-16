import React from 'react';
import { MessageSquareText, MessagesSquare, CheckSquare, Rocket } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Contact',
      icon: <MessageSquareText className="w-5 h-5 text-cyan-400" />,
      desc: 'Send us an inquiry using the online project form, WhatsApp (09132614108), or phone call (08132927484) outlining your goals and requirements.'
    },
    {
      step: '02',
      title: 'Discuss',
      icon: <MessagesSquare className="w-5 h-5 text-blue-400" />,
      desc: 'We review your needs in detail, explore design directions, define project scope, discuss budgets, and align on exact milestones.'
    },
    {
      step: '03',
      title: 'Confirm',
      icon: <CheckSquare className="w-5 h-5 text-cyan-400" />,
      desc: 'We finalize project deliverables, agree on the timeline and milestones, and confirm the project launch plan with full clarity.'
    },
    {
      step: '04',
      title: 'Deliver',
      icon: <Rocket className="w-5 h-5 text-blue-400" />,
      desc: 'We design, engineer, and refine your website or graphics with review rounds, delivering polished, launch-ready assets to your satisfaction.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#0B1020] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
            Our Proven Process
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
            Simple, Transparent Four-Step Workflow.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            From your very first message to project handover, here is how we bring your digital project to life with zero friction.
          </p>
        </div>

        {/* 4 Steps Timeline / Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="p-7 rounded-xl bg-[#151D30] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Step indicator header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#0B1020] border border-slate-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-mono text-2xl font-bold text-slate-600 group-hover:text-cyan-400/80 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Step {index + 1} of 4</span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
