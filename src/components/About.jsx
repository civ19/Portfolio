import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Cpu, Server, ShieldCheck, Zap } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Cpu,
      title: "Real-Time Embedded Systems",
      desc: "Bare-metal & RTOS firmware in C on ESP32-S3, custom register-level I2C drivers, and Quad-SPI DMA pipelines."
    },
    {
      icon: ShieldCheck,
      title: "Fault Recovery & Reliability",
      desc: "Autonomous boot-loop mitigation, safe-mode environments, and fail-safe over-the-air (OTA) updates."
    },
    {
      icon: Server,
      title: "Distributed Backend Pipelines",
      desc: "Java 21, Spring Boot microservices, MQTT telemetry ingestion, and containerized PostgreSQL environments."
    },
    {
      icon: Zap,
      title: "Autonomous Mission Software",
      desc: "MAVLink command injection, Python companion computer automation, and SITL simulations for BlackBird UAV."
    }
  ];

  return (
    <section id="about" className="py-12 border-t border-slate-800/80">
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
          <span>About</span>
          <div className="h-px flex-1 bg-gradient-to-r from-teal-500/30 via-slate-800 to-transparent" />
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
          {personalInfo.bio}
        </p>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-teal-500/30 transition-colors duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal-950/60 border border-teal-800/50 text-teal-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-normal">
                      {item.desc}
                    </p>
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
