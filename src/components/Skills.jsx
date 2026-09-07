import React from "react";
import { technicalSkills } from "../data/portfolioData";
import { Cpu, Terminal, Server, Wrench, Shield } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Terminal,
      skills: technicalSkills.languages,
    },
    {
      title: "Embedded & IoT",
      icon: Cpu,
      skills: technicalSkills.embedded,
    },
    {
      title: "Backend & Cloud",
      icon: Server,
      skills: technicalSkills.backend,
    },
    {
      title: "Architecture & Systems",
      icon: Shield,
      skills: technicalSkills.architecture,
    },
    {
      title: "Developer Tools & Testing",
      icon: Wrench,
      skills: technicalSkills.tools,
    },
  ];

  return (
    <section id="skills" className="py-12 border-t border-slate-800/80">
      <div className="space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 text-teal-400 font-mono text-xs font-semibold tracking-wider uppercase mb-1">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <span>Skills & Tooling</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3 text-slate-200">
                    <div className="p-1.5 rounded-lg bg-teal-950/60 border border-teal-800/50 text-teal-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-semibold tracking-wide text-white">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.skills.map((skill, sIdx) => {
                      const name = typeof skill === "string" ? skill : skill.name;
                      const isHighlighted = typeof skill === "object" && skill.highlight;

                      return (
                        <span
                          key={sIdx}
                          className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all ${
                            isHighlighted
                              ? "bg-slate-800 text-teal-300 border border-teal-800/50 shadow-[0_0_10px_rgba(20,184,166,0.1)]"
                              : "bg-slate-800/60 text-slate-300 border border-slate-700/40"
                          }`}
                        >
                          {name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
