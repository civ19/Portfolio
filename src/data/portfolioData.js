export const personalInfo = {
  name: ".cv",
  initials: ".cv",
  title: "Systems & Software Developer",
  subtitle: "Computer Science & Mathematics • Embedded Systems, RTOS, IoT & Distributed Backend Infrastructure",
  email: "civ19.dev@proton.me",
  github: "https://github.com/civ19",
  githubUsername: "civ19",
  bio: "A developer showcase exploring low-level systems and embedded firmware—such as autonomous firmware recovery engines, DMA-driven Quad-SPI streaming, and multi-threaded sensor drivers—alongside containerized backend microservices built with Java, Spring Boot, and PostgreSQL. Also engineering autonomous mission logic, SITL simulation pipelines, and MAVLink telemetry integrations for an autonomous UAV design team."
};

export const education = {
  institution: "Computer Science Background",
  degree: "Algorithms & Systems Focus",
  minor: "Mathematics Minor",
  period: "Foundational Systems & Mathematics",
  details: [
    "Focus areas: Algorithmic Complexity, Discrete Mathematics, Data Structures, Low-Level Systems, Real-Time Operating Systems",
    "Active contributor and Software Developer on an autonomous UAV Design Team"
  ]
};

export const experience = [
  {
    role: "Software Developer",
    organization: "UAV Design Team",
    location: "Flight Software Division",
    period: "May 2026 – Present",
    type: "Autonomous Systems Team",
    summary: "Developing autonomous flight mission logic, real-time telemetry protocols, and Linux companion computer automation for unmanned aerial vehicles.",
    points: [
      "Engineered Python automation scripts deployed on Linux-based Raspberry Pi companion computers to orchestrate real-time mission logic and waypoint execution.",
      "Architected telemetry pipelines using MAVLink protocol to bridge Mission Planner with onboard Python runtimes, enabling dynamic autonomous command injection.",
      "Implemented Software-in-the-Loop (SITL) simulation workflows to validate script stability, memory usage, and execution permissions before airfield deployment.",
      "Hardened onboard Linux environments by configuring system properties and shell permissions, eliminating resource bottlenecks in high-latency telemetry streams."
    ],
    skills: ["Python", "MAVLink", "Raspberry Pi", "Linux Hardening", "Mission Planner", "SITL Simulation", "Real-Time Telemetry"]
  }
];

export const projects = [
  {
    id: "sentinel",
    title: "Sentinel: ESP32 Fault Recovery Engine",
    category: "Embedded & RTOS",
    timeline: "July 2026 – Aug 2026",
    tagline: "Autonomous firmware recovery & HTTPS OTA engine ensuring bricked ESP32 devices recover without physical intervention.",
    overview: "Sentinel is an embedded reliability platform designed for remote ESP32 applications where firmware crashes, boot loops, or corrupted deployments would otherwise require manual physical retrieval or serial reflashing. Sentinel runs as an independent recovery layer beneath the application, autonomously detecting crash loops and restoring functional firmware over secure HTTPS OTA.",
    tags: ["C", "ESP-IDF", "FreeRTOS", "NimBLE", "HTTPS", "Spring Boot", "NVS", "SHA-256", "Unity"],
    github: "https://github.com/civ19/Sentinel-Engine",
    featured: true,
    highlights: [
      "Autonomous boot loop detection utilizing NVS-persisted crash and boot counters surviving device resets",
      "Dedicated Safe-Mode recovery environment with a custom interactive CLI / REPL (`clear`, `crash_report`, `ota_force`, `reset`)",
      "Custom dual-partition A/B OTA layout (`partitions.csv`) with SHA-256 binary validation and automatic rollback protection",
      "Spring Boot HTTPS firmware server featuring chunked 8KB binary streaming to eliminate memory exhaustion",
      "Out-of-band NimBLE BLE GATT provisioning for Wi-Fi credentials and OTA server configuration",
      "Unity/CMock test suite validating state transitions, safe-mode entries, and OTA edge cases"
    ],
    architecture: {
      type: "flow",
      diagram: `
+-------------------------------------------------------------------------+
|                              SENTINEL ENGINE                            |
|                                                                         |
|  [ Device Reset / Power On ]                                            |
|                |                                                        |
|                v                                                        |
|  [ Boot Monitor & NVS State Check ]                                     |
|         /                            \\                                  |
|        / (Boot count <= threshold)    \\ (Crash threshold exceeded)      |
|       v                                v                                |
|  [ Launch User Application ]    [ ENTER SAFE MODE ]                     |
|                                        |                                |
|                        +---------------+---------------+                |
|                        |               |               |                |
|                        v               v               v                |
|                   [ CLI / REPL ]  [ Diagnostics ] [ FORCED OTA ]        |
|                                                        |                |
|                                                        v                |
|                                             [ Read NVS Credentials ]    |
|                                                        |                |
|                                                        v                |
|                                             [ Connect HTTPS Server ]    |
|                                                        |                |
|                                                        v                |
|                                             [ Stream 8KB Chunks ]       |
|                                                        |                |
|                                                        v                |
|                                             [ Write Inactive OTA Slot]  |
|                                                        |                |
|                                                        v                |
|                                             [ Verify SHA-256 Hash ]     |
|                                                        |                |
|                                                        v                |
|                                             [ Switch Partition & Reboot]|
+-------------------------------------------------------------------------+
      `,
      details: [
        "Recovery Layer Separation: Positioned directly beneath application code so broken user tasks cannot prevent device recovery.",
        "Chunked Binary Streaming: Firmware is streamed in 8KB buffers, preventing the backend and edge device from running out of heap.",
        "Zero-Physical-Touch: If an OTA update fails or crashes immediately, the device falls back into Safe Mode using stored NVS credentials."
      ]
    },
    cliCommands: [
      { cmd: "ota_force", desc: "Forces an immediate safe-mode HTTPS firmware download, validation, and flash reboot." },
      { cmd: "crash_report", desc: "Dumps persistent core-dump summaries, reset reasons, and boot failure diagnostics." },
      { cmd: "clear", desc: "Resets persistent boot counters and error states back to zero." },
      { cmd: "reset", desc: "Triggers a controlled MCU software restart." }
    ]
  },
  {
    id: "streamforge",
    title: "StreamForge: Quad-SPI DMA Streaming Engine",
    category: "Embedded & Systems",
    timeline: "Aug 2026 – Present",
    tagline: "High-throughput DMA-driven Quad-SPI concurrent data streaming engine on the ESP32-S3 with FreeRTOS double buffering.",
    overview: "High-throughput streaming over serial buses often suffers from severe CPU contention and buffer overruns when transactions are handled synchronously. StreamForge implements a DMA-driven Quad-SPI engine on the ESP32-S3 that transfers 4KB data blocks continuously with minimal CPU intervention, utilizing synchronized double-buffering.",
    tags: ["C", "ESP-IDF", "FreeRTOS", "DMA", "Quad-SPI", "Unity", "CMock", "ESP32-S3"],
    github: "https://github.com/civ19/StreamForge",
    featured: true,
    highlights: [
      "Engineered a DMA-driven Quad-SPI streaming engine on ESP32-S3 delivering continuous 4KB transfers",
      "Employed FreeRTOS synchronization primitives (semaphores, task notifications) with double buffering",
      "Designed reusable buffer allocation interfaces handling pointer-to-pointer ownership and dynamic memory bounds",
      "Eliminated CPU bottlenecks by executing background direct memory access transfers concurrently with producer logic",
      "Built rigorous unit and mocked hardware test suites using Unity and CMock to validate SPI/DMA flow and failure paths"
    ],
    architecture: {
      type: "flow",
      diagram: `
+-------------------------------------------------------------------------+
|                     STREAMFORGE DMA ARCHITECTURE                        |
|                                                                         |
|   +-----------------------+              +--------------------------+   |
|   |  Data Producer Task   |              |   Quad-SPI DMA Engine    |   |
|   +-----------+-----------+              +------------+-------------+   |
|               |                                       |                 |
|               | Fills Buffer A                        | Transmits B     |
|               v                                       v                 |
|   +-----------------------+              +--------------------------+   |
|   |  Ping Buffer (4 KB)   | <=== SWAP ==>|   Pong Buffer (4 KB)     |   |
|   |   [DMA-Capable SRAM]  |   (Semaphore)|    [DMA-Capable SRAM]    |   |
|   +-----------------------+              +--------------------------+   |
|               |                                       |                 |
|               +-------------------+-------------------+                 |
|                                   |                                     |
|                                   v                                     |
|                     [ Quad-SPI Bus (4 Data Lines) ]                     |
|                                   |                                     |
|                                   v                                     |
|                 [ Continuous 4KB High-Speed Stream ]                    |
+-------------------------------------------------------------------------+
      `,
      details: [
        "DMA Offloading: Transfers occur directly from internal DMA-capable SRAM to the hardware Quad-SPI peripheral.",
        "Zero-Copy Ownership: Strict pointer-to-pointer ownership passing avoids expensive memory duplications across function layers.",
        "Synchronized Ping-Pong: While DMA drains Buffer B onto the wire, the producer concurrently prepares Buffer A."
      ]
    }
  },
  {
    id: "ares-32",
    title: "ARES-32: Distributed IoT Telemetry & Backend Pipeline",
    category: "Embedded & Backend",
    timeline: "June 2026 – July 2026",
    tagline: "Full-vertical IoT telemetry platform integrating ESP32-S3 firmware, custom I2C drivers, and containerized Spring Boot backend.",
    overview: "ARES-32 (Asynchronous Remote Environmental Sensing) is a distributed telemetry pipeline engineered for high-concurrency sensor acquisition and sub-second ingestion latency. The project bridges low-level C firmware, register-level hardware drivers, FreeRTOS multi-threading, and containerized cloud services.",
    tags: ["C", "ESP-IDF", "FreeRTOS", "Java 17/21", "Spring Boot", "MQTT", "PostgreSQL", "Docker", "NimBLE", "JUnit 5"],
    github: "https://github.com/civ19/ARES-32-Platform",
    featured: true,
    highlights: [
      "Custom C-based I2C driver for the Bosch BME280 implementing manual register mapping and factory calibration compensation logic",
      "Multi-threaded FreeRTOS firmware architecture using Queues for thread-safe IPC and Task Notifications for event loops",
      "Mutex-guarded hardware abstraction layer ensuring thread-safe logging and UART access across dual-core tasks",
      "Low-latency telemetry transmission pipeline utilizing MQTT with cJSON payload serialization",
      "Custom NimBLE BLE GATT profile for secure out-of-band Wi-Fi and MQTT broker configuration",
      "Containerized Spring Boot backend with PostgreSQL persistence and JUnit 5/Mockito/H2 integration test coverage"
    ],
    architecture: {
      type: "flow",
      diagram: `
+-------------------------------------------------------------------------+
|                          ARES-32 SYSTEM PIPELINE                        |
|                                                                         |
|  [ Bosch BME280 ] === I2C ===> [ Custom C Register Driver ]             |
|                                                |                        |
|                                                v                        |
|                     +---------------------------------------+           |
|                     |       ESP32-S3 FreeRTOS Firmware      |           |
|                     |   - Acquisition Task (Core 0)         |           |
|                     |   - FreeRTOS Queues & Mutexes (IPC)   |           |
|                     |   - Network & MQTT Task (Core 1)      |           |
|                     +------------------+--------------------+           |
|                                        |                                |
|                                   cJSON over MQTT                       |
|                                        v                                |
|                     +---------------------------------------+           |
|                     |   Dockerized Ingestion Infrastructure |           |
|                     |   - Eclipse Mosquitto MQTT Broker     |           |
|                     |   - Spring Boot Telemetry Service     |           |
|                     |   - PostgreSQL Relational Database    |           |
|                     +------------------+--------------------+           |
|                                        |                                |
|                                        v                                |
|                           [ Real-Time REST APIs ]                       |
+-------------------------------------------------------------------------+
      `,
      details: [
        "Datasheet-to-Silicon: Sensor driver written from raw register specs, calculating pressure and temperature compensation natively.",
        "Decoupled Ingestion: Edge devices stream structured JSON over MQTT, ensuring sub-second response without holding HTTP connections.",
        "Reproducible Deployment: Complete backend and broker stack orchestrated via a single Docker Compose environment."
      ]
    }
  },
  {
    id: "coffee-api",
    title: "Coffee API: Layered REST & Dynamic Pricing Engine",
    category: "Backend & Cloud",
    timeline: "2026",
    tagline: "Realistic Spring Boot REST backend with JWT authentication, dynamic discount pricing logic, and Testcontainers PostgreSQL.",
    overview: "Built as an architectural demonstration of a production-grade backend system rather than a simple database CRUD project. Implements a clean layered architecture, dynamic non-mutating pricing algorithms, stateless authentication with Spring Security and JWT, and Testcontainers integration testing.",
    tags: ["Java", "Spring Boot 3.x", "Spring Security", "JWT", "BCrypt", "PostgreSQL", "Testcontainers", "JUnit 5", "Mockito"],
    github: "https://github.com/civ19/coffee-api",
    featured: false,
    highlights: [
      "Layered architecture strictly segregating Controllers, Services, Repositories, Entities, and DTOs",
      "Dynamic discount calculation engine computing applied savings on catalog items without mutating underlying database values",
      "Stateless JWT authentication with BCrypt password hashing and custom Spring Security filters",
      "Centralized `@ControllerAdvice` global exception handling for missing resources, validation errors, and unauthorized access",
      "Full unit test suite with JUnit 5/Mockito and database integration testing using Testcontainers with real PostgreSQL"
    ],
    architecture: {
      type: "flow",
      diagram: `
[ Client Request ] -> [ Spring Security / JWT Filter ] -> [ Coffee Controller ]
                                                                 |
                                                                 v
                                                     [ Pricing & Catalog Service ]
                                                                 |
                                                                 v
                                                     [ Spring Data JPA Repository ]
                                                                 |
                                                                 v
                                                     [ PostgreSQL Database ]
      `,
      details: [
        "Layered Separation: HTTP transport, business calculations, and database access are decoupled for maintainability.",
        "Real Database Testing: Testcontainers spins up a real PostgreSQL container during builds to catch SQL/schema defects."
      ]
    }
  },
  {
    id: "book-api",
    title: "Book API: Secure Library Catalog & Access Management",
    category: "Backend & Cloud",
    timeline: "2026",
    tagline: "Spring Boot library catalog with JWT Bearer authentication, DTO validation, and JaCoCo test coverage enforcement.",
    overview: "A secure backend service designed for library catalog operations with authenticated role-based endpoints. Features rigorous test coverage with JaCoCo, stateless JWT Bearer authorization, PostgreSQL persistence, and containerized integration testing.",
    tags: ["Java", "Spring Boot 3.x", "Spring Security", "JWT", "PostgreSQL", "JaCoCo", "Testcontainers", "JUnit 5", "Mockito"],
    github: "https://github.com/civ19/book-api",
    featured: false,
    highlights: [
      "RESTful resource management with protected mutating endpoints secured via Spring Security and JWT Bearer tokens",
      "Data isolation using DTO request/response contracts preventing domain entity leakage",
      "Comprehensive test coverage pipeline using JaCoCo, JUnit 5, and Mockito for isolated service unit tests",
      "Automated integration tests executed against ephemeral PostgreSQL containers via Testcontainers",
      "Centralized error handling with customized error envelopes and status mapping"
    ],
    architecture: {
      type: "flow",
      diagram: `
[ Request with Bearer Token ] -> [ JWT Validation ] -> [ Book Controller ] -> [ Library Service ] -> [ PostgreSQL JPA ]
      `,
      details: [
        "Tested Coverage: Integrated JaCoCo metric reporting to guarantee automated validation of critical business logic.",
        "Safe Persistence: Domain entities never cross the controller boundary; all input/output is strongly validated through DTOs."
      ]
    }
  }
];

export const technicalSkills = {
  languages: [
    { name: "C", level: "Core", highlight: true },
    { name: "C++", level: "Proficient", highlight: true },
    { name: "Java (17/21)", level: "Core", highlight: true },
    { name: "Python", level: "Proficient", highlight: true },
    { name: "SQL (PostgreSQL)", level: "Proficient", highlight: false },
    { name: "Lua", level: "Working", highlight: false },
    { name: "JavaScript", level: "Working", highlight: false },
    { name: "HTML / CSS", level: "Working", highlight: false }
  ],
  embedded: [
    { name: "ESP-IDF", highlight: true },
    { name: "FreeRTOS (RTOS)", highlight: true },
    { name: "Quad-SPI & SPI", highlight: true },
    { name: "DMA (Direct Memory Access)", highlight: true },
    { name: "I2C Register Drivers", highlight: true },
    { name: "NimBLE (BLE GATT)", highlight: true },
    { name: "HTTPS OTA Firmware Updates", highlight: true },
    { name: "NVS Persistence", highlight: false },
    { name: "UART & MAVLink", highlight: true },
    { name: "MQTT Protocols", highlight: false },
    { name: "Core-Dump Diagnostics", highlight: false }
  ],
  backend: [
    { name: "Spring Boot 3.x", highlight: true },
    { name: "Spring Security", highlight: true },
    { name: "REST API Architecture", highlight: true },
    { name: "JWT & BCrypt", highlight: false },
    { name: "Hibernate / JPA", highlight: false },
    { name: "cJSON", highlight: false },
    { name: "FastMCP (MCP)", highlight: false },
    { name: "JUnit 5 & Mockito", highlight: true },
    { name: "Testcontainers", highlight: true },
    { name: "JaCoCo Coverage", highlight: false }
  ],
  tools: [
    { name: "Docker & Docker Compose", highlight: true },
    { name: "Git & GitHub", highlight: true },
    { name: "Linux / Raspberry Pi OS", highlight: true },
    { name: "GDB Debugger", highlight: false },
    { name: "IntelliJ IDEA", highlight: false },
    { name: "VS Code", highlight: false },
    { name: "Mission Planner & SITL", highlight: true }
  ],
  architecture: [
    { name: "Multi-threaded IPC (Queues, Task Notifications)", highlight: true },
    { name: "Mutex & Semaphore Synchronization", highlight: true },
    { name: "Double Buffering / DMA Transfers", highlight: true },
    { name: "Finite State Machines", highlight: false },
    { name: "Data Structures & Algorithms", highlight: true },
    { name: "Defensive Programming & Fail-Safes", highlight: true },
    { name: "Layered Microservice Architecture", highlight: false }
  ]
};