import React from "react";
import { experience } from "../data/portfolioData";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-12 border-t border-slate-800/80">
      <div className="space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 text-teal-400 font-mono text-xs font-semibold tracking-wider uppercase mb-1">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Systems Development</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <span>Engineering Experience</span>
          </h2>
        </div>

        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  {/* Circular Avatar badge */}
                  <div className="w-12 h-12 rounded-full bg-slate-800/90 border border-teal-500/30 text-teal-300 font-bold font-mono text-xs flex items-center justify-center shrink-0 shadow-sm">
                    UAV
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-teal-400">
                      {exp.organization}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 mt-1 font-mono">
                      <span className="text-slate-400">{exp.location}</span>
                      <span>•</span>
                      <span className="text-slate-400">{exp.type}</span>
                    </div>
                  </div>
                </div>

                <div className="sm:text-right font-mono text-xs text-slate-400 shrink-0 self-start sm:self-auto bg-slate-800/50 px-3 py-1 rounded-md border border-slate-700/50">
                  <Calendar className="w-3.5 h-3.5 inline mr-1 text-teal-400" />
                  {exp.period}
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                {exp.summary}
              </p>

              {/* Responsibilities list */}
              <div className="mt-4 space-y-2">
                {exp.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-800">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-800/80 text-teal-300/90 border border-slate-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}