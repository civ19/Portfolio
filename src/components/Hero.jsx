import React from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowUpRight, FileText, MapPin, Terminal } from "lucide-react";

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative pt-12 pb-14 md:pt-20 md:pb-20">
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
        {/* Left column: Text info */}
        <div className="flex-1 space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/40 border border-teal-800/40 text-teal-300 text-xs font-mono tracking-wide">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span>Firmware & Backend Systems</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Hi, I'm {personalInfo.name}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
            {personalInfo.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-teal-400" />
              <span>{personalInfo.location}</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-teal-400" />
              <span>github.com/{personalInfo.githubUsername}</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("projects");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-5 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-space-950 font-semibold text-sm transition-all duration-200 shadow-[0_0_20px_rgba(20,184,166,0.35)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onOpenResume}
              className="px-5 py-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-medium text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-teal-400" />
              <span>View Resume</span>
            </button>
          </div>
        </div>

        {/* Right column: Glowing Avatar Circle matching reference.png */}
        <div className="relative flex items-center justify-center self-start md:self-center">
          {/* Cyan / Teal radiant aura glow */}
          <div 
            aria-hidden="true"
            className="absolute -inset-6 rounded-full bg-gradient-to-br from-teal-500/40 via-cyan-500/30 to-emerald-500/10 blur-2xl pointer-events-none transform -scale-105 animate-pulse-slow"
          />
          <div 
            aria-hidden="true"
            className="absolute -inset-10 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none"
          />

          {/* Avatar Disc */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-b from-teal-900/70 to-slate-950 border border-teal-500/50 shadow-[0_0_30px_rgba(20,184,166,0.4)] flex items-center justify-center group overflow-hidden">
            <div className="absolute inset-0 bg-radial-gradient from-teal-500/20 to-transparent pointer-events-none" />
            <span className="text-3xl sm:text-4xl font-bold font-mono tracking-wider text-teal-200 select-none drop-shadow-[0_0_12px_rgba(45,212,191,0.6)]">
              {personalInfo.initials}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}