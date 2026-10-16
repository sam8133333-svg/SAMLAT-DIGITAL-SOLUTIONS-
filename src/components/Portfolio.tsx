import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { PortfolioCategory, PortfolioProject } from '../types';
import { ProjectModal } from './ProjectModal';
import { Eye, Sparkles, ExternalLink } from 'lucide-react';

interface PortfolioProps {
  onInquireProject: (projectTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onInquireProject }) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories: { id: PortfolioCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Design' },
    { id: 'graphic', label: 'Graphic Design' },
    { id: 'branding', label: 'Branding' },
    { id: 'concepts', label: 'Digital Concepts' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#0B1020] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
            <span>Portfolio & Concepts</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Prototype Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
            Explore Our Digital Work & Architectural Concepts.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Every sample below represents our actual design and code capabilities. In keeping with complete transparency, all sample projects are original design concepts and technical prototypes crafted to demonstrate our standards.
          </p>
        </div>

        {/* Filter Controls (interactive segmented buttons) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-[#151D30] border border-slate-800 rounded-xl w-fit">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-[#151D30] rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20"
            >
              <div>
                {/* Image Container with Fallback and Aspect Ratio */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback in case local asset path fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151D30] via-transparent to-transparent opacity-80" />
                  
                  {/* Concept Badge (Clear & explicit, no fake client claims) */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[11px] font-semibold bg-[#0B1020]/90 text-cyan-300 border border-cyan-500/30 rounded-md backdrop-blur-sm">
                      Concept Showcase
                    </span>
                  </div>

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-blue-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-3.5 py-1.5 rounded-lg bg-[#0B1020]/90 text-xs font-medium text-white border border-slate-700 flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3.5 h-3.5 text-cyan-400" />
                      <span>View Specifications</span>
                    </div>
                  </div>
                </div>

                {/* Content details */}
                <div className="p-6">
                  {/* Category text separator (Zero pill discipline) */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="text-cyan-400 font-medium">{project.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>Prototype Design</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-2 mb-4">
                    {project.shortDesc}
                  </p>

                  {/* Tools List */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 3).map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono text-slate-400 bg-[#0B1020] px-2 py-0.5 rounded border border-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="text-[11px] font-mono text-slate-400 bg-[#0B1020] px-1.5 py-0.5 rounded border border-slate-800">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 border-t border-slate-800/80 bg-[#12192c] flex items-center justify-between text-xs font-medium text-slate-300">
                <span className="text-cyan-400 group-hover:underline">Explore Architecture</span>
                <Eye className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal Dialog for Concept Details */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireProject={onInquireProject}
      />
    </section>
  );
};
