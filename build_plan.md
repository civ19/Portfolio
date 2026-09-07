# Master Build Specification: Ronaldo Ross Portfolio

## 1. Project Objectives
- Build a fast, production-ready, dark-themed personal portfolio website for **Ronaldo Ross**, an embedded firmware and backend software developer studying Computer Science (Algorithms & Mathematics) at Carleton University.
- Visual appearance and ambiance modeled after `reference.png`: deep space dark navy/slate theme, subtle interactive starry background, glowing cyan/teal avatar aura, clean minimalist typography, and a floating glassmorphic bottom navigation dock.
- Content must strictly adhere to `READMEs.md` and `Ronaldo_Ross_Resume.pdf` without inventing technologies, metrics, or experiences.
- Project-first focus: Since work experience is focused on technical design teams (BlackBird UAV), the portfolio spotlights deep technical projects (Sentinel, StreamForge, ARES-32, Coffee API, Book API) with architectural breakdowns, engineering challenges, and interactive views.

## 2. Design Direction & Visual Identity
- **Color Palette**:
  - Background: Deep space dark `#070a12`, `#0a0e17`, `#0f172a`
  - Accents: Radiant cyan `#06b6d4`, electric teal `#14b8a6`, glow teal `#0d9488`
  - Card & Glass Surface: `rgba(15, 23, 42, 0.75)` with subtle `1px solid rgba(255, 255, 255, 0.08)` and hover border glow `rgba(20, 184, 166, 0.3)`
  - Typography: Crisp white `#f8fafc`, light slate `#94a3b8`, muted gray `#64748b`
- **Hero & Avatar**:
  - Greeting: "Hi, I'm Ronaldo Ross"
  - Subtitle: "Computer Science @ Carleton University • Embedded Systems, RTOS & Backend Infrastructure"
  - Avatar Badge: Glowing circular badge with initials "RR" featuring a soft teal/cyan radial aura halo matching `reference.png`.
- **Canvas Starfield**:
  - Dynamic, subtle twinkling starfield rendered on an HTML5 canvas layer behind all content, optimized for 60fps with low CPU/GPU overhead.
- **Floating Bottom Dock**:
  - Floating pill-shaped dock fixed at bottom-center with subtle cyan glow.
  - Quick-nav icons: Home, Projects, Experience, Education/Skills, Resume, GitHub, LinkedIn, Contact.

## 3. Technical Requirements
- **Framework**: React 18+ with Vite for instant builds, type safety, and optimized static asset generation.
- **Styling**: Tailwind CSS with custom extensions for glows, glassmorphism, animations, and typography.
- **Icons**: Lucide React for consistent, lightweight vector iconography.
- **Performance**: Zero external API dependencies required for core functionality; fast bundle size; instant load.
- **Accessibility & Responsiveness**: Mobile-first responsive layout, semantic HTML5, aria-labels for dock and buttons, high contrast ratios.
- **Production Readiness**: Clean code architecture, TypeScript or clean modular JavaScript, lint-clean, production build test.

## 4. Content Architecture & Rules
- **Profile / About**:
  - Education: Carleton University, BCS Algorithms, Minor in Mathematics (2025–2029).
  - Background: Low-level firmware (C, ESP-IDF, FreeRTOS), telemetry systems, and robust backend microservices (Java, Spring Boot, PostgreSQL, Docker).
- **Work & Team Experience**:
  - BlackBird UAV (BBUAV) – Software Developer (May 2026 – Present, Ottawa, ON).
  - SITL simulations, MAVLink autonomous telemetry command injection, Raspberry Pi companion computer Python automation, Linux OS hardening.
- **Featured Projects**:
  1. **Sentinel: ESP32 Fault Recovery Engine** (C, ESP-IDF, FreeRTOS, BLE, HTTPS, Spring Boot, NVS, SHA-256)
  2. **StreamForge: High-Throughput Quad-SPI Streaming Engine** (C, ESP-IDF, FreeRTOS, DMA, SPI, Unity, CMock)
  3. **ARES-32: Distributed IoT Telemetry & Backend Pipeline** (C, Java, Spring Boot, FreeRTOS, Bosch BME280, MQTT, PostgreSQL, Docker)
  4. **Coffee API: Layered REST & Pricing Service** (Java 21, Spring Boot 3, Spring Security, JWT, BCrypt, PostgreSQL, Testcontainers)
  5. **Book API: Authenticated Library Backend** (Java 21, Spring Boot 3, Spring Security, JWT, PostgreSQL, JaCoCo, Testcontainers)
- **Technical Skills**:
  - Organized into Languages, Embedded & IoT, Backend & Cloud, Developer Tools, and Systems Architecture.
- **Interactive Deep Dive**:
  - Project modal or expander showing architectural diagrams (Safe Mode state machine, dual OTA partition layouts, DMA buffer flow, backend data flow) and key technical challenges.
- **Resume Integration**:
  - Direct PDF preview modal and download link for `Ronaldo_Ross_Resume.pdf`.

## 5. Git & Delivery Strategy
- Initialize Git repository in root folder.
- Create atomic, well-formatted commits detailing initial site setup, implementation, styling, and verification.
- Test production build (`npm run build`).
