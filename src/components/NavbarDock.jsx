import React, { useState } from "react";
import { 
  Home, 
  Layers, 
  Briefcase, 
  Cpu, 
  FileText, 
  Mail 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";

export default function NavbarDock({ onOpenResume }) {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: Home,
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      id: "projects",
      label: "Projects",
      icon: Layers,
      action: () => scrollToSection("projects"),
    },
    {
      id: "experience",
      label: "Experience",
      icon: Briefcase,
      action: () => scrollToSection("experience"),
    },
    {
      id: "skills",
      label: "Skills",
      icon: Cpu,
      action: () => scrollToSection("skills"),
    },
    {
      id: "resume",
      label: "Resume (PDF)",
      icon: FileText,
      action: onOpenResume,
    },
    {
      id: "github",
      label: "GitHub",
      icon: GithubIcon,
      href: personalInfo.github,
      external: true,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: LinkedinIcon,
      href: personalInfo.linkedin,
      external: true,
    },
    {
      id: "email",
      label: "Contact",
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      external: false,
    },
  ];

  return (
    <nav 
      aria-label="Quick navigation dock"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center pointer-events-auto"
    >
      {/* Ambient background glow beneath dock matching reference */}
      <div 
        aria-hidden="true"
        className="absolute -inset-2 bg-gradient-to-r from-teal-500/20 via-cyan-500/30 to-teal-500/20 rounded-full blur-xl pointer-events-none opacity-80 animate-pulse-slow"
      />

      {/* Main glass pill container */}
      <div className="relative flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-slate-900/80 backdrop-blur-xl border border-slate-700/60 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isButton = !item.href;

          const content = (
            <div
              className="relative p-2 sm:p-2.5 text-slate-300 hover:text-white rounded-full hover:bg-slate-800/80 transition-all duration-200 group flex items-center justify-center"
              onMouseEnter={() => setActiveTooltip(item.id)}
              onMouseLeave={() => setActiveTooltip(null)}
              onFocus={() => setActiveTooltip(item.id)}
              onBlur={() => setActiveTooltip(null)}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:scale-110 group-hover:text-teal-400" />
              
              {/* Tooltip */}
              {activeTooltip === item.id && (
                <div 
                  role="tooltip"
                  className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium text-slate-200 bg-slate-800/95 border border-slate-700 rounded-md shadow-lg whitespace-nowrap pointer-events-none transition-all duration-150 animate-in fade-in zoom-in-95"
                >
                  {item.label}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-850" />
                </div>
              )}
            </div>
          );

          if (isButton) {
            return (
              <button
                key={item.id}
                type="button"
                onClick={item.action}
                aria-label={item.label}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-full cursor-pointer"
              >
                {content}
              </button>
            );
          }

          return (
            <a
              key={item.id}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              aria-label={item.label}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-full"
            >
              {content}
            </a>
          );
        })}
      </div>
    </nav>
  );
}