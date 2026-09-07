import React, { useState } from "react";
import { projects } from "../data/portfolioData";
import { 
  ArrowUpRight, 
  Code2, 
  Cpu, 
  ExternalLink, 
  Layers, 
  Server, 
  Terminal 
} from "lucide-react";
import { GithubIcon } from "./Icons";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const categories = ["All", "Embedded & RTOS", "Backend & Cloud"];

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Embedded & RTOS") {
      return p.category.includes("Embedded") || p.category.includes("Systems");
    }
    if (selectedCategory === "Backend & Cloud") {
      return p.category.includes("Backend") || p.category.includes("Cloud");
    }
    return true;
  });

  return (
    <section id="projects" className="py-14 border-t border-slate-800/80">
      <div className="space-y-8">
        {/* Section Title & Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-teal-400 font-mono text-xs font-semibold tracking-wider uppercase mb-1">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Focus & Engineering Systems</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <span>Featured Projects</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center p-1 rounded-xl bg-slate-900/80 border border-slate-800 self-start">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-teal-500/20 text-teal-300 border border-teal-500/30 shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;

            return (
              <div
                key={project.id}
                className={`group relative rounded-2xl bg-slate-900/60 border transition-all duration-300 flex flex-col justify-between overflow-hidden p-6 hover:translate-y-[-2px] ${
                  isFeatured
                    ? "border-slate-800 hover:border-teal-500/40 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]"
                    : "border-slate-800/70 hover:border-slate-700"
                }`}
              >
                {/* Subtle top glow line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  {/* Top metadata */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-slate-800 text-teal-300 border border-teal-900/50">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.timeline}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Key Highlights list (first 3) */}
                  <ul className="space-y-1.5 pt-1">
                    {project.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-teal-400 font-bold shrink-0 mt-0.5">•</span>
                        <span className="line-clamp-2">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="text-xs font-semibold text-teal-400 hover:text-teal-300 flex items-center gap-1.5 group/btn cursor-pointer py-1"
                  >
                    <span>Architecture & Deep Dive</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Deep Dive Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}