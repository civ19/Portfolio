import React, { useEffect } from "react";
import { X, Download, ExternalLink, FileText } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-4xl h-[85vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between gap-4 bg-slate-900/90 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-teal-950/60 border border-teal-800/50 text-teal-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="resume-modal-title" className="text-base sm:text-lg font-bold text-white">
                Ronaldo Ross — Resume
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                Computer Science (BCS Algorithms, Minor in Mathematics)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumePath}
              download="Ronaldo_Ross_Resume.pdf"
              className="px-3 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-space-950 font-semibold text-xs transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(20,184,166,0.3)]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Preview Frame */}
        <div className="flex-1 bg-slate-950 p-2 sm:p-4 overflow-hidden">
          <iframe
            src={`${personalInfo.resumePath}#toolbar=0`}
            title="Ronaldo Ross Resume Preview"
            className="w-full h-full rounded-lg border border-slate-800 bg-white"
          />
        </div>
      </div>
    </div>
  );
}
