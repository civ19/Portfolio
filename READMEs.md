Coffee API:


\# Coffee API



A complete backend system for managing a coffee catalog, user accounts, and pricing operations.



The API allows users to create, browse, update, delete, and filter coffee products, while also providing secure account authentication and pricing functionality such as discount calculations.



The project was built as a realistic REST API rather than a simple database demonstration. It uses a layered Spring Boot architecture with Spring Security, JWT authentication, PostgreSQL, automated testing, and centralized error handling.



\---



\## What It Does



\### ☕ Coffee Catalog



The API provides full management of coffee products:



\* Create new coffee products

\* View an individual coffee by ID

\* Browse the complete catalog

\* Filter coffees by price

\* Update coffee information

\* Update stored prices

\* Delete coffee products



\### 💰 Pricing Operations



The API supports pricing operations beyond basic CRUD.



A discount can be calculated for a coffee without modifying its stored database price.



For example, a `$20` coffee with a `20%` discount returns a calculated price of `$16`.



The API validates discount rates and handles cases where the requested coffee does not exist.



\---



\## 🔐 User Authentication



Users can create accounts and securely authenticate with the API.



Authentication is implemented using \*\*Spring Security\*\* and \*\*JSON Web Tokens (JWT)\*\*.



The authentication flow is:



```text

Register

&#x20;  ↓

Password hashed with BCrypt

&#x20;  ↓

User stored in PostgreSQL

&#x20;  ↓

Login

&#x20;  ↓

Spring Security authenticates credentials

&#x20;  ↓

JWT issued

&#x20;  ↓

JWT used for authenticated requests

```



Passwords are never stored as plain text. \*\*BCrypt\*\* is used to securely hash passwords before they are stored.



JWT authentication allows the API to maintain a stateless authentication model, with the token carrying the user's authenticated identity between requests.



\---



\## 🏗️ Backend Architecture



The application follows a layered architecture that separates the responsibilities of the API.



```text

Client

&#x20; │

&#x20; ▼

Spring Boot REST API

&#x20; │

&#x20; ▼

Spring Security / JWT

&#x20; │

&#x20; ▼

Controllers

&#x20; │

&#x20; ▼

Services / Business Logic

&#x20; │

&#x20; ▼

Repositories

&#x20; │

&#x20; ▼

PostgreSQL

```



The main responsibilities are separated across:



\* \*\*Controllers\*\* — handle incoming API requests and responses

\* \*\*Services\*\* — contain business logic and application behavior

\* \*\*Repositories\*\* — handle database persistence

\* \*\*Entities\*\* — represent persisted application data

\* \*\*DTOs\*\* — define data transferred through the API

\* \*\*Security\*\* — manages authentication and authorization



\### Project Structure



```text

src/main/java

├── config

├── security

├── controller

├── service

├── repository

├── entity

└── dto

```



This separation keeps HTTP handling, business logic, security, and database access from becoming tightly coupled.



\---



\## 🗄️ Data Persistence



The application uses \*\*PostgreSQL\*\* as its relational database.



Coffee products and user information are persisted in the database, with the Spring Boot application communicating with PostgreSQL through the repository layer.



This provides persistent storage rather than relying on in-memory application data.



\---



\## 🛡️ Error Handling



The API uses centralized exception handling through a global exception handler.



Instead of placing error-handling logic throughout individual controllers, application errors are handled consistently in one location.



Examples include:



\* Coffee not found

\* Invalid input

\* Invalid discount rates

\* Authentication-related errors

\* Application-level exceptions



Custom exceptions such as `CoffeeNotFoundException` are used where appropriate.



\---



\## 🧪 Testing



Testing is built into the project at both the unit and integration levels.



\### Unit Testing



\*\*JUnit 5\*\* and \*\*Mockito\*\* are used to test individual components and business logic in isolation.



\### Integration Testing



\*\*Testcontainers\*\* is used for integration testing against a real PostgreSQL database running inside a container.



This allows database-related behavior to be tested against an actual PostgreSQL environment rather than relying entirely on mocks.



\---



\## 🚧 Next Release



The current release focuses on the core backend functionality and engineering fundamentals.



The next release, \*\*v1.0.1\*\*, is planned to add:



\### 🐳 Docker



The application and its supporting services will be containerized using Docker to make the project easier to build and run consistently across environments.



\### 🔄 CI/CD



A CI/CD pipeline will be added to automate parts of the development workflow, including building and testing the application whenever changes are made.



These additions are planned as part of the project's next iteration rather than being represented as features of the current release.



\---



\## Technology Stack



| Area                   | Technology       |

| ---------------------- | ---------------- |

| Language               | Java             |

| Backend                | Spring Boot 3.x  |

| API                    | REST             |

| Security               | Spring Security  |

| Authentication         | JWT              |

| Password Hashing       | BCrypt           |

| Database               | PostgreSQL       |

| Testing                | JUnit 5, Mockito |

| Integration Testing    | Testcontainers   |

| Planned Infrastructure | Docker           |

| Planned Automation     | CI/CD            |



\---



\## Engineering Highlights



This project demonstrates experience with:



\* Designing REST APIs

\* CRUD operations and data management

\* Business logic and pricing operations

\* Input validation

\* Layered backend architecture

\* Spring Security

\* Stateless JWT authentication

\* Secure password handling with BCrypt

\* PostgreSQL persistence

\* Centralized exception handling

\* Unit testing with JUnit 5 and Mockito

\* Integration testing with Testcontainers

\* Iterative project development

\* Planning deployment and CI/CD automation



\---



\## Why I Built It



The goal was to build more than a basic CRUD application.



The coffee catalog provides the user-facing functionality, while the underlying system demonstrates how a backend application handles authentication, business logic, persistence, error handling, and testing as a cohesive system.



The project is also being developed incrementally, with containerization and CI/CD planned for the next release.



\---



\# Book API



A backend system for managing a library book catalog, user accounts, and authenticated access to book management operations.



The API allows users to browse and manage books while providing secure user registration and login through Spring Security and JWT authentication.



The project was built to demonstrate the structure of a real backend application, including REST API design, layered architecture, secure authentication, PostgreSQL persistence, centralized error handling, automated testing, and code coverage.



\---



\## What It Does



\### 📚 Book Catalog



The API provides functionality for managing a library's book catalog.



Current functionality includes:



\* Browse available books

\* Create new books

\* Retrieve book information

\* Update book information

\* Delete books

\* Manage book resources through REST endpoints



Book creation and other protected operations require authenticated access.



\---



\## 🔐 User Authentication



Users can register and securely log into the application.



Authentication is implemented using \*\*Spring Security\*\* and \*\*JSON Web Tokens (JWT)\*\*.



The authentication flow is:



```text

Register

&#x20;  ↓

Password hashed with BCrypt

&#x20;  ↓

User stored in PostgreSQL

&#x20;  ↓

Login

&#x20;  ↓

Spring Security authenticates credentials

&#x20;  ↓

JWT issued

&#x20;  ↓

JWT Bearer token used for protected requests

```



Passwords are never stored as plain text. \*\*BCrypt\*\* is used to hash passwords before they are persisted.



The application uses stateless authentication, with Spring Security validating the JWT included with authenticated requests.



\---



\## 🏗️ Backend Architecture



The application follows a layered architecture that separates the major responsibilities of the backend.



```text

Client

&#x20; │

&#x20; ▼

Spring Boot REST API

&#x20; │

&#x20; ▼

Spring Security / JWT

&#x20; │

&#x20; ▼

Controllers

&#x20; │

&#x20; ▼

Services / Business Logic

&#x20; │

&#x20; ▼

Repositories

&#x20; │

&#x20; ▼

PostgreSQL

```



The project is organized into distinct layers:



```text

config/          Application and security configuration

security/        JWT authentication and security infrastructure

controller/      HTTP request handling and REST endpoints

service/         Business logic

repository/      PostgreSQL data access

entity/          Persistent domain models

dto/             Request and response objects

```



This separation keeps HTTP handling, business logic, persistence, authentication, and data-transfer concerns independent from one another.



\---



\## 🗄️ Data Persistence



The application uses \*\*PostgreSQL\*\* for persistent storage.



Book and user data are stored in the relational database, with the repository layer responsible for communicating with the database.



This provides persistent application data rather than relying on temporary in-memory storage.



\---



\## 🛡️ Error Handling



The application uses centralized exception handling to provide consistent responses when errors occur.



Rather than handling every application error individually inside controllers, exceptions are handled through a central mechanism.



This allows cases such as invalid requests, missing resources, and application-level errors to be handled consistently.



\---



\## 🧪 Testing \& Code Coverage



Testing is implemented at both the unit and integration levels.



\### Unit Testing



\*\*JUnit 5\*\* and \*\*Mockito\*\* are used to test business logic independently from infrastructure dependencies.



Services can be tested using mocked repositories and other dependencies, allowing application behavior to be verified in isolation.



\### Integration Testing



\*\*Testcontainers\*\* is used to run PostgreSQL in a temporary Docker container during integration tests.



This allows database interaction and persistence behavior to be tested against a real PostgreSQL instance rather than relying entirely on mocks.



\### Code Coverage



\*\*JaCoCo\*\* is used to measure test coverage across the application.



This provides visibility into which parts of the codebase are exercised by the automated test suite.



\---



\## 🚧 Next Release — v1.0.1



The current release focuses on the core backend functionality, authentication, persistence, and testing.



The next release is planned to expand the project's deployment and development workflow.



\### 🐳 Docker



A dedicated \*\*Dockerfile\*\* and \*\*Docker Compose\*\* configuration will be added to make the application and its database environment easier to build and run consistently.



\### 🔄 CI/CD



A \*\*CI/CD pipeline\*\* will also be introduced to automate the development workflow, including building and testing the application when changes are made.



These features are planned for \*\*v1.0.1\*\* and are not represented as capabilities of the current release.



\---



\## Technology Stack



| Area                   | Technology             |

| ---------------------- | ---------------------- |

| Language               | Java                   |

| Backend                | Spring Boot 3.x        |

| API                    | REST                   |

| Security               | Spring Security        |

| Authentication         | JWT                    |

| Password Hashing       | BCrypt                 |

| Database               | PostgreSQL             |

| Unit Testing           | JUnit 5, Mockito       |

| Integration Testing    | Testcontainers         |

| Code Coverage          | JaCoCo                 |

| Planned Infrastructure | Docker, Docker Compose |

| Planned Automation     | CI/CD                  |



\---



\## Engineering Highlights



This project demonstrates experience with:



\* REST API design

\* CRUD operations

\* Layered backend architecture

\* Spring Boot

\* Spring Security

\* Stateless JWT authentication

\* Secure password handling with BCrypt

\* PostgreSQL persistence

\* DTO-based API design

\* Centralized exception handling

\* Unit testing with JUnit 5 and Mockito

\* Integration testing with Testcontainers

\* Code coverage with JaCoCo

\* Iterative backend development

\* Planned containerization and CI/CD automation



\---



\## Why I Built It



The goal was to build a backend that goes beyond basic database operations.



The library catalog provides the user-facing functionality, while the underlying architecture demonstrates how a backend application handles authentication, business logic, persistence, error handling, automated testing, and code coverage as a cohesive system.



The project is being developed incrementally, with Docker-based deployment and CI/CD automation planned for the next release.



\---





\# ARES-32: Distributed IoT Telemetry Engine



\[!\[Platform: ESP-IDF](https://img.shields.io/badge/Platform-ESP--IDF-red)](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/)

\[!\[RTOS: FreeRTOS](https://img.shields.io/badge/RTOS-FreeRTOS-blue)](https://www.freertos.org/)

\[!\[Backend: Spring Boot](https://img.shields.io/badge/Backend-Spring--Boot-green)](https://spring.io/projects/spring-boot)

\[!\[Infrastructure: Docker](https://img.shields.io/badge/Infrastructure-Docker-blue)](https://www.docker.com/)



\*\*ARES-32\*\* (Asynchronous Remote Environmental Sensing) is a distributed telemetry platform designed for high-concurrency data acquisition in real time. This project features a full-vertical stack: a custom I2C driver in C for Bosch sensors, a multi-core FreeRTOS firmware architecture, and a containerized Spring Boot backend.



<img width="1600" height="756" alt="image" src="https://github.com/user-attachments/assets/a6e501f4-8f5a-4244-9db8-a453a97e5bab" />



\---



\## System Architecture



The platform is architected as a decoupled, multi-service environment:



1\.  \*\*Firmware Layer (`/firmware`):\*\* C-based ESP-IDF application managing sensor acquisition and NimBLE provisioning.

2\.  \*\*Backend Layer (`/backend`):\*\* Java Spring Boot microservice providing RESTful endpoints, PostgreSQL persistence, and MQTT data ingestion..

3\.  \*\*Orchestration (`/`):\*\* Unified Docker-Compose environment for reproducible, sandbox-ready deployment.



\---



\## Technical Features



\### 1. Embedded Systems \& Concurrency

\*   \*\*Custom Sensor Driver:\*\* Developed a C-based I2C driver for the Bosch BME280, implementing manual register mapping and factory calibration coefficient compensation logic directly from the datasheet.

\*   \*\*FreeRTOS Task Management:\*\* Leveraged a multi-threaded architecture using \*\*Task Notifications\*\* for event-driven synchronization and \*\*Queues\*\* for thread-safe IPC between acquisition and network tasks.

\*   \*\*Resource Protection:\*\* Implemented \*\*Mutex-guarded hardware abstraction\*\* for thread-safe logging and UART access across dual-core execution environments.



<img width="414" alt="image" src="https://github.com/user-attachments/assets/deedbe0d-5c37-43ea-bb0b-4db21c4fe29c" />



\### 2. Network \& Industrial Protocols

\*   \*\*MQTT Pipeline:\*\* Architected a robust telemetry pipeline using \*\*MQTT and cJSON\*\* for structured data serialization, enabling low-latency communication between edge nodes and the backend.

\*   \*\*NimBLE Provisioning:\*\* Developed a custom \*\*BLE GATT Profile\*\* for secure, out-of-band WiFi credential handoff and MQTT broker URI configuration.

\*   \*\*Event-Driven Connectivity:\*\* Utilized \*\*FreeRTOS Event Groups\*\* to manage complex network states (WiFi/MQTT) and automated reconnection logic.



<img width="1914" height="980" alt="image" src="https://github.com/user-attachments/assets/8883707c-450c-46d3-91d1-1d7a82a7d98a" />



\### 3. Testing/Quality Assurance

\* Persistence: Built a Spring Boot API with PostgreSQL to persist sensor readings. Environment variables for broker configuration instead of hardcoding it.

\* Testing: Used JUnit 5 and Mockito for Unit testing the service layer logic, along with Integration testing for the REST controllers. With H2 in-memory database for Integration test environment.



\### 4. Containerization

\*   \*\*Dockerized Infrastructure:\*\* Full containerization of the backend and gateway services to ensure stability and reproducibility in isolated sandbox environments.



<img width="1248" height="630" alt="image" src="https://github.com/user-attachments/assets/148d86ae-78d3-4c78-b3a1-70940897ae57" />



\---



\# Sentinel



\*\*ESP32 Fault Recovery Engine — a standalone firmware recovery and OTA engine designed to keep ESP32 applications recoverable without physical access to the device.\*\*



Sentinel is an embedded reliability system designed for ESP32 applications where firmware failures, crash loops, and failed deployments can otherwise leave a device requiring physical recovery.



The goal is simple:



> \\\*\\\*If an ESP32 application breaks, the device should still have a way to recover itself.\\\*\\\*



Sentinel runs as a background recovery engine alongside the user's application. It monitors boot/crash state, provides a recovery environment, stores persistent diagnostic information, provisions networking credentials, and can perform OTA firmware updates even when the main application cannot boot successfully.



The project was designed as a reusable foundation that can eventually be integrated into other ESP32-based IoT applications rather than being tied to one specific application.



\---



\## Overview



A typical embedded IoT device might look like:



```text

\&#x20;                Device Boot

\&#x20;                     │

\&#x20;                     ▼

\&#x20;             ┌───────────────┐

\&#x20;             │    Sentinel   │

\&#x20;             │ Recovery Engine│

\&#x20;             └───────┬───────┘

\&#x20;                     │

\&#x20;             Boot/Crash Check

\&#x20;                     │

\&#x20;           ┌─────────┴─────────┐

\&#x20;           │                   │

\&#x20;      Normal Boot          Crash Loop

\&#x20;           │                   │

\&#x20;           ▼                   ▼

\&#x20;    User Application       Safe Mode

\&#x20;                               │

\&#x20;             ┌─────────────────┼─────────────────┐

\&#x20;             │                 │                 │

\&#x20;          Diagnostics        CLI             Forced OTA

\&#x20;             │                 │                 │

\&#x20;             └─────────────────┴─────────────────┘

\&#x20;                               │

\&#x20;                               ▼

\&#x20;                        Recovered Device

```



Sentinel is designed so that the recovery system remains available even when the primary application is not.



\---



\## Why Sentinel?



Firmware failures are fundamentally different from failures in ordinary software.



If a deployed web application crashes, you can usually redeploy it remotely.



If an embedded device enters a permanent boot loop, the device may become inaccessible.



That can mean:



\- Physical retrieval

\- Serial connection

\- Manual reflashing

\- Replacing the device

\- An unhappy customer



Sentinel addresses this problem by putting a recovery mechanism below the application layer.



The application can fail.



This is where sentinel comes in.



\---

\### Key Features

\- Autonomous boot-loop detection

\- Persistent crash and boot counters

\- Safe-mode recovery environment

\- Forced OTA recovery

\- HTTPS firmware updates

\- SHA-256 firmware hashing

\- A/B OTA partitioning

\- NVS-based persistent configuration

\- NimBLE BLE provisioning

\- Custom BLE GATT profile

\- Wi-Fi provisioning

\- Custom recovery CLI / REPL

\- Core-dump diagnostics

\- Reset/reboot controls

\- OTA force command

\- Custom ESP-IDF partition layout

\- Unity test suite

\- OTA backend built with Spring Boot

\- Spring Security

\- Binary firmware streaming

\- Docker-based backend deployment



\---



\## Architecture



Sentinel is divided into several major components.

```

┌───────────────────────────────────────────────────────┐

│                     Sentinel                          │

│                                                       │

│  ┌─────────────┐       ┌──────────────────────────┐  │

│  │ Boot Monitor│──────▶│    Recovery Manager      │  │

│  └─────────────┘       └────────────┬─────────────┘  │

│                                     │                │

│              ┌──────────────────────┼────────────┐   │

│              │                      │            │   │

│              ▼                      ▼            ▼   │

│          Safe Mode              OTA Engine      CLI  │

│              │                      │            │   │

│              ▼                      ▼            ▼   │

│             NVS                  HTTPS        Diagnostics

│                                     │                │

│                                     ▼                │

│                               Spring Boot Server     │

└───────────────────────────────────────────────────────┘

```

\### Boot Loop Detection



Sentinel checks persistent boot state immediately after startup.



Boot and crash counters are stored in NVS so the information survives resets and power cycles.



Conceptually:



```Boot

\&#x20;│

\&#x20;▼

Read boot count

\&#x20;│

\&#x20;├── Normal boot history ──────▶ Start application

\&#x20;│

\&#x20;└── Crash/boot-loop threshold ▶ Safe Mode



```

This allows Sentinel to distinguish between an ordinary reboot and a device that repeatedly fails to start.



Persistent state includes:



\- Boot count

\- Crash count

\- Wi-Fi credentials

\- Server address



This information remains available across device resets.



\---

\### Safe Mode



Safe Mode is the primary recovery environment.



If Sentinel detects that the main application is repeatedly failing, it can prevent the device from continuously restarting the broken application and instead expose a recovery interface.



The Safe Mode environment provides:



\- Device diagnostics

\- Boot/reset information

\- Crash information

\- Recovery commands

\- Forced OTA updates



The objective is to make the device recoverable even when the main application is not.



\---

\### Safe Mode Main Menu



The recovery menu displays information useful for diagnosing the device.



Example information includes:

```

Wake Reason

Reset Reason

Boot Count

Crash Count

```

This allows the user to determine why the device entered recovery.



\---

\### Recovery CLI



Sentinel includes a custom CLI/REPL for recovery operations.



Example commands include:

```

clear

crash\\\_report

ota\\\_force

reset



```

`clear`



Clears persistent boot and crash counters.



`crash\\\_report`



Triggers/display a core-dump summary for debugging.



`ota\\\_force`



Starts a firmware update directly from Safe Mode.



`reset`



Reboots the device.



The CLI is intentionally lightweight so recovery operations remain accessible even when the main application is unavailable.

\---



\###Forced OTA Recovery



This is one of Sentinel's most important features.



Normally, an OTA update would be initiated by the running application.



But what happens when the application cannot run?



Sentinel provides a separate recovery path.

```

Application

\&#x20;   │

\&#x20;   │ crash loop

\&#x20;   ▼

Safe Mode

\&#x20;   │

\&#x20;   ▼

Read stored credentials from NVS

\&#x20;   │

\&#x20;   ▼

Initialize Wi-Fi

\&#x20;   │

\&#x20;   ▼

Connect to OTA server

\&#x20;   │

\&#x20;   ▼

Download firmware

\&#x20;   │

\&#x20;   ▼

Write inactive OTA partition

\&#x20;   │

\&#x20;   ▼

Verify firmware

\&#x20;   │

\&#x20;   ▼

Switch boot partition

\&#x20;   │

\&#x20;   ▼

Reboot

\&#x20;   │

\&#x20;   ▼

Recovered application

```

The key property is that this process does not require:



\- The main application to boot

\- The normal application task system

\- Re-provisioning the device

\- A physical serial connection



Previously stored credentials allow Sentinel to establish connectivity directly from Safe Mode.



This provides an autonomous recovery path for devices stuck in a crash or boot loop.



\---



\### OTA Engine



Sentinel implements the OTA update path directly on the ESP32 side.



The OTA process:



1\. Configures the HTTPS client

2\. Connects to the Spring Boot server

3\. Requests the latest firmware

4\. Streams the firmware binary

5\. Writes the binary to the inactive OTA partition

6\. Validates the downloaded image

7\. Switches the active OTA slot

8\. Reboots the device



Conceptually:

```

HTTPS Server

\&#x20;    │

\&#x20;    │ firmware binary

\&#x20;    ▼

┌─────────────┐

│ HTTPS Client│

└──────┬──────┘

\&#x20;      │

\&#x20;      ▼

\&#x20;Firmware Stream

\&#x20;      │

\&#x20;      ▼

┌───────────────┐

│ Inactive OTA  │

│   Partition   │

└──────┬────────┘

\&#x20;      │

\&#x20;      ▼

\&#x20;Image Validation

\&#x20;      │

\&#x20;      ▼

\&#x20;Switch OTA Slot

\&#x20;      │

\&#x20;      ▼

\&#x20;    Reboot

```

\---

\### Firmware Integrity



Firmware integrity is checked using SHA-256 hashing.



The backend can calculate a hash for the available firmware binary, while the device can use the expected hash to verify the downloaded image.



This provides an additional integrity check before deploying a new firmware image.



The purpose is to ensure that the firmware being written is the expected binary rather than an incomplete or corrupted download.

\---

\### OTA Partitioning



Sentinel uses a custom partitions.csv configuration.



The partition layout provides dedicated space for:



\- Factory application

\- OTA application slot 1

\- OTA application slot 2

\- NVS

\- Core dumps

\- Additional application/recovery storage



The A/B OTA layout allows the device to maintain an alternate firmware image while updating the inactive slot.



Conceptually:

```

Flash

┌───────────────────────────────┐

│ Bootloader                    │

├───────────────────────────────┤

│ Partition Table               │

├───────────────────────────────┤

│ NVS                           │

├───────────────────────────────┤

│ Factory Application           │

├───────────────────────────────┤

│ OTA Slot 0                    │

├───────────────────────────────┤

│ OTA Slot 1                    │

├───────────────────────────────┤

│ Core Dump / Recovery Storage  │

└───────────────────────────────┘

```

\---

\### NVS Persistence



Sentinel uses ESP32 NVS for persistent device state.



Stored information includes:



\- Wi-Fi SSID

\- Wi-Fi password

\- OTA server address

\- Boot count

\- Crash count



Because this information survives resets, Sentinel can use previous configuration to recover a device without requiring the user to provision it again.



This is particularly important for forced OTA recovery.



\---



\### BLE Provisioning



Initial configuration uses Bluetooth Low Energy provisioning through NimBLE.



Sentinel implements a custom BLE GATT profile for transferring configuration information.



The provisioning flow is:

```

Phone

\&#x20;│

\&#x20;│ BLE

\&#x20;▼

NimBLE GATT

\&#x20;│

\&#x20;▼

Sentinel Provisioning

\&#x20;│

\&#x20;├── Wi-Fi SSID

\&#x20;├── Wi-Fi Password

\&#x20;└── Server Address

\&#x20;│

\&#x20;▼

NVS

```



The configuration is then persisted so that future recovery sessions can reuse the stored credentials.



The BLE provisioning subsystem was based on experience from ARES-32, allowing the implementation to focus more heavily on integration with the recovery architecture.

\---

\### Backend



Sentinel includes a Spring Boot backend responsible for firmware delivery.



The backend provides the OTA endpoint used by the ESP32 to retrieve firmware binaries.



The backend includes:



\- Spring Boot

\- Spring Security

\- Firmware discovery

\- Binary streaming

\- SHA-256 hashing

\- HTTP endpoint authorization



Firmware binaries are streamed in chunks rather than loading the entire firmware image into memory at once.



Firmware Streaming



The backend locates the latest firmware binary and streams it through the OTA endpoint.



Conceptually:

```

Firmware Directory

\&#x20;      │

\&#x20;      ▼

Latest Binary

\&#x20;      │

\&#x20;      ▼

8 KB Chunks

\&#x20;      │

\&#x20;      ▼

HTTP Response Stream

\&#x20;      │

\&#x20;      ▼

ESP32 HTTPS Client

```

This allows large firmware images to be transferred without requiring the backend to load the entire binary into memory.



\---

\### Security



Sentinel's OTA communication uses HTTPS.



The backend also includes Spring Security configuration for controlling access to the OTA endpoint.



Firmware integrity is additionally checked using SHA-256 hashing.



The security architecture is intended to prevent the OTA system from becoming an unauthenticated firmware distribution endpoint.

\---



\### Testing



Sentinel includes a Unity-based firmware test suite for testing important engine behavior.



Testing focuses on both normal and failure paths.



Examples include:



\- Boot-loop detection

\- Recovery behavior

\- Configuration handling

\- OTA behavior

\- Error handling

\- Recovery-state transitions



Additional mocking and test coverage are planned for future versions.



\---



\### Development Roadmap



Sentinel is being developed incrementally.



v1.0.0



Initial recovery engine:



\- Boot-loop detection

\- NVS persistence

\- Safe Mode

\- Recovery CLI

\- BLE provisioning

\- Wi-Fi configuration

\- HTTPS OTA

\- Forced OTA recovery

\- Spring Boot OTA backend

\- SHA-256 firmware validation

\- v1.1.0



Backend and deployment improvements:



\- Docker

\- Improved server deployment

\- CI/CD

\- Additional reliability work



v1.2.0



Testing improvements:



\- Expanded Unity test coverage

\- More edge-case testing

\- Additional recovery-path validation



v1.3.0



Firmware quality improvements:



\- CMock

\- More extensive component isolation

\- Expanded failure-path testing

\- Additional edge cases



The roadmap intentionally prioritizes reliability and maintainability over continuously adding new features.



\---



\###Example Recovery Flow



A device experiencing repeated crashes might follow this sequence:

```

1\\. Device boots

\&#x20;       │

2\\. Sentinel checks persistent boot state

\&#x20;       │

3\\. Boot loop detected

\&#x20;       │

4\\. Main application is not started

\&#x20;       │

5\\. Safe Mode launches

\&#x20;       │

6\\. User selects `sentinel ota force`

\&#x20;       │

7\\. Sentinel retrieves stored credentials

\&#x20;       │

8\\. Wi-Fi starts

\&#x20;       │

9\\. HTTPS connection established

\&#x20;       │

10\\. Firmware downloaded

\&#x20;       │

11\\. Firmware written to inactive OTA slot

\&#x20;       │

12\\. Firmware validated

\&#x20;       │

13\\. OTA slot switched

\&#x20;       │

14\\. Device reboots

\&#x20;       │

15\\. New firmware starts

```

The important property is that the broken application never needs to participate in its own recovery.

\---

\### Why This Project Exists



Sentinel was designed around a problem common to remotely deployed embedded systems:



What happens when the firmware responsible for running the device is the exact firmware that has failed?



The solution is to move recovery functionality into a separate layer that can survive application failures.



Sentinel therefore treats recovery as a first-class embedded system rather than as an afterthought.

\---

\### Technology

| Area               | Technology               |

| ------------------ | ------------------------ |

| MCU                | ESP32-S3                 |

| Language           | C                        |

| Framework          | ESP-IDF                  |

| RTOS               | FreeRTOS                 |

| Provisioning       | NimBLE / BLE             |

| Networking         | Wi-Fi                    |

| OTA Transport      | HTTPS                    |

| Persistence        | NVS                      |

| Firmware Integrity | SHA-256                  |

| Testing            | Unity                    |

| Backend            | Java / Spring Boot       |

| Backend Security   | Spring Security          |

| Firmware Streaming | HTTP chunked streaming   |

| Deployment         | Docker / CI/CD (roadmap) |



\---



\### Design Philosophy



Sentinel is intentionally designed as a standalone recovery engine.



The ideal future workflow is:

```

Developer's ESP32 Application

\&#x20;            │

\&#x20;            ▼

\&#x20;       Add Sentinel

\&#x20;            │

\&#x20;            ▼

\&#x20;  Configure device/server

\&#x20;            │

\&#x20;            ▼

\&#x20;     Build Application

\&#x20;            │

\&#x20;            ▼

\&#x20;      Deploy Firmware

```

The application developer should not need to implement their own:



\- Boot-loop detection

\- Recovery environment

\- Persistent crash tracking

\- OTA recovery

\- Firmware retrieval

\- Safe-mode networking

\- Recovery CLI



Sentinel should handle those responsibilities independently.



\---

\### Future Tooling



A future development goal is to simplify firmware deployment with a small command-line or Python utility.



For example:



`python sentinel.py add-firmware build/app.bin`



The tool could automatically:



\- Locate the firmware binary

\- Copy it into the appropriate server directory

\- Calculate the expected hash

\- Update firmware metadata

\- Prepare the OTA server for deployment



The goal is to make Sentinel usable as a reusable developer tool rather than requiring users to understand its internal firmware-distribution structure.



\---





