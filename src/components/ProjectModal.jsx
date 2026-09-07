import React, { useEffect } from "react";
import { 
  X, 
  ExternalLink, 
  Cpu, 
  Server, 
  Layers, 
  Terminal, 
  CheckCircle2, 
  Flame, 
  Code2 
} from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-900/90 sticky top-0 z-20 backdrop-blur-md">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-teal-950/80 text-teal-300 border border-teal-800/50">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {project.timeline}
              </span>
            </div>
            <h2 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h2>
          </div>
          
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 space-y-6 overflow-y-auto custom-scrollbar">
          {/* Tagline & Overview */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400 font-mono">
              Overview & Problem Statement
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.overview}
            </p>
          </div>

          {/* Architecture Diagram */}
          {project.architecture && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400 font-mono flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                <span>Architecture & Data Flow</span>
              </h3>
              
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 overflow-x-auto">
                <pre className="font-mono text-xs sm:text-sm text-teal-300/90 whitespace-pre leading-relaxed">
                  {project.architecture.diagram.trim()}
                </pre>
              </div>

              {project.architecture.details && (
                <ul className="space-y-2 mt-2">
                  {project.architecture.details.map((detail, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                      <span className="text-teal-400 font-bold mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Key Engineering Highlights */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400 font-mono flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Key Technical Highlights</span>
            </h3>
            <div className="space-y-2.5">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-850/60 border border-slate-800 flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CLI Commands if applicable */}
          {project.cliCommands && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400 font-mono flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>Safe Mode REPL / CLI Commands</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.cliCommands.map((cmd, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <code className="text-xs font-mono font-semibold text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                      {cmd.cmd}
                    </code>
                    <p className="text-xs text-slate-400 mt-1.5">
                      {cmd.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400 font-mono">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-slate-800/80 text-slate-200 border border-slate-700/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-900/95 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 text-sm font-medium transition-colors cursor-pointer"
          >
            Close
          </button>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-space-950 font-semibold text-sm transition-all duration-200 shadow-[0_0_15px_rgba(20,184,166,0.3)] flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}