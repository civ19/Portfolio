import React from "react";
import { education } from "../data/portfolioData";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-12 border-t border-slate-800/80">
      <div className="space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 text-teal-400 font-mono text-xs font-semibold tracking-wider uppercase mb-1">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <span>Education</span>
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-800/90 border border-teal-500/30 text-teal-300 font-bold font-mono text-base flex items-center justify-center shrink-0">
                CU
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  {education.institution}
                </h3>
                <p className="text-sm font-semibold text-teal-400">
                  {education.degree}
                </p>
                <p className="text-xs text-slate-300 font-mono mt-0.5">
                  {education.minor}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

            <div className="sm:text-right font-mono text-xs text-slate-400 shrink-0 self-start sm:self-auto bg-slate-800/50 px-3 py-1 rounded-md border border-slate-700/50">
              <Calendar className="w-3.5 h-3.5 inline mr-1 text-teal-400" />
              {education.period}
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-800 space-y-2">
            {education.details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <BookOpen className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
