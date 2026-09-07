import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Mail } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="pt-12 pb-28 border-t border-slate-900 text-center text-xs text-slate-400 font-mono space-y-4">
      <div className="flex items-center justify-center gap-5 text-slate-400">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400 transition-colors"
          aria-label="GitHub"
        >
          <GithubIcon className="w-4 h-4" />
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="hover:text-teal-400 transition-colors"
          aria-label="Email"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>

      <p className="text-slate-400">
        Designed & Built by {personalInfo.name} • Systems Engineering Showcase
      </p>
    </footer>
  );
}