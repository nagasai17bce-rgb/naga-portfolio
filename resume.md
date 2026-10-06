# Yasho Ramith

9566054524 · yashoramith@gmail.com · linkedin.com/in/yasho-ramith-a662622ab

## Education

**Birla Institute of Technology and Science, Pilani — Goa Campus**  
Bachelor of Technology, Computer Science and Engineering  
2017 – 2021

## Projects

### Inference Engineering Platform
Python · FastAPI · PyTorch · RAG

- Designed a production-oriented LLM inference layer focused on reducing serving overhead through model routing, request batching, response caching, concurrency controls, and token-aware execution.
- Built asynchronous inference paths separating request acceptance from model execution, allowing concurrent workloads to scale independently while supporting streaming responses and controlled backpressure.
- Optimized retrieval-to-generation execution using vector retrieval, context filtering, caching, and output validation, reducing unnecessary model work while maintaining grounded responses.
- Added execution telemetry covering latency, token consumption, model usage, cache behavior, throughput, and failure modes to analyze performance and cost characteristics of model-backed workloads.

### Harness Bench
Python · MCP · LLM Evaluation · Tracing

- Built an agent evaluation harness that replays production-like tasks and evaluates complete execution traces rather than scoring only final LLM responses.
- Implemented evaluation across tool selection, retrieval quality, groundedness, task completion, response quality, latency, and failure modes for MCP-enabled agent workflows.
- Converted individual agent failures into repeatable regression cases for prompts, tools, retrieval configuration, and execution logic through structured scorecards and trace analysis.
- Improved evaluation quality from approximately 0.79 to 0.93 through iterative evaluation, failure analysis, and targeted changes to prompts, tool definitions, and agent context.

### Jevis AI – Enterprise Agent Platform
FastAPI · RAG · MCP · LLMs

- Built an enterprise AI agent platform that converts natural-language requests into multi-step operational workflows using LLM reasoning, retrieval, MCP tools, and structured backend actions.
- Designed execution around retrieval, planning, tool selection, validation, permissions, and human approval, keeping agent behavior decoupled from underlying service implementations.
- Implemented RAG and vector retrieval to ground agent decisions in application data and assemble task-specific context before invoking downstream tools.
- Added streaming execution, audit trails, tool permissions, failure recovery, and evaluation hooks, making multi-step agent behavior observable and controllable.

## Technical Skills

**Languages:** Python, Java, TypeScript, JavaScript, SQL, C++

**AI / LLM:** LLMs, RAG, AI Agents, Agentic AI, Claude, Prompt Engineering, Context Engineering, Structured Outputs

**Agent Systems:** MCP, Tool Calling, Function Calling, Planning, Memory, Guardrails, Human-in-the-Loop

**Inference / Evaluation:** Inference Optimization, Model Routing, Token Optimization, LLM Evaluation, Groundedness, Retrieval Evaluation

**Backend / Distributed Systems:** Java, Spring Boot, Spring Cloud, FastAPI, Node.js, REST, GraphQL, Microservices, Kafka, Asynchronous Processing

**Data Platforms:** Apache Spark, Databricks, BigQuery, SQL Optimization, ETL, Data Pipelines, Data Migration, Data Quality

## Experience

### Salesforce — Senior Member of Technical Staff (SMTS), AI Platform Engineering
Aug 2024 – Present · Bangalore, India

- Reduced backend latency by approximately 35% for the enterprise AI execution platform by optimizing model-backed workflows through model routing, request caching, concurrency controls, and token-aware execution.
- Increased processing throughput approximately 3× for asynchronous AI operations by separating long-running agent execution from synchronous API traffic and coordinating work through Kafka, Redis, GraphQL, and asynchronous worker services.
- Designed the platform’s agent execution pipeline around planning, retrieval, tool selection, validation, retries, and approval, turning natural-language requests into controlled operations against enterprise backend capabilities.
- Built reusable MCP interfaces over enterprise APIs and data sources, giving agents standardized contracts for discovering and invoking business operations without coupling agent logic to individual service implementations.
- Built the evaluation and observability layer for these workflows, measuring retrieval relevance, groundedness, task completion, tool-selection behavior, latency, token consumption, and failure categories across agent executions.
- Connected streaming AI interfaces to the same asynchronous execution pipeline, exposing task state and execution progress while backend workers continued processing long-running operations.
- Productionized the platform using Docker, Kubernetes, GitHub Actions, and ArgoCD, adding unit, integration, API, and AI-evaluation gates to the deployment path.

### Salesforce — Member of Technical Staff (MTS), Backend & Distributed Systems
Jun 2023 – Aug 2024 · Bangalore, India

- Owned backend processing for an enterprise event-driven workflow, where synchronous service requests initiated downstream processing through Kafka; redesigned the ingestion-to-processing boundary and improved throughput approximately 60%.
- Separated event ingestion, downstream processing, and failure recovery so processing stages could scale independently and transient downstream failures would not block upstream service traffic.
- Implemented the service layer with Java 17, Spring Boot, and Spring Cloud, connecting REST APIs to event contracts, asynchronous workers, processing state, and downstream enterprise services.
- Reduced AWS Lambda cold-start latency approximately 40% by restructuring initialization and integration boundaries within frequently invoked backend execution paths.
- Built validation for AI-enabled backend workflows, using prompt variants, multi-turn scenarios, response scoring, regression cases, and reliability checks to detect behavior changes before production releases.
- Instrumented the same request-to-processing path with OpenTelemetry and CloudWatch, correlating service telemetry and downstream dependencies to isolate latency buildup and failure boundaries.
- Owned changes across API design, event-flow design, implementation, automated testing, deployment, and production troubleshooting, taking backend workflows from requirements to operational production systems.

### Walmart — Software Engineer, Data Platform, Fraud Analytics & Backend
Jun 2021 – Jun 2023 · India

- Engineered distributed processing for transaction and fraud analytics workloads, using Spark-based transformations, partitioning, and query optimization across datasets containing hundreds of millions of records.
- For telemetry retention and cloud-cost optimization, designed an archival pipeline handling 69.8M+ AppTraces records across 180 days, moving historical telemetry from Log Analytics into Blob Storage.
- Built 50K–100K record extraction batches with offset tracking, checkpointing, deterministic sequencing, validation, and retry handling, making large exports restartable instead of restarting the complete workload after a failed batch.
- Designed the archival workflow for ∼1 TB-scale data movement, separating query execution, batch persistence, validation, and retention to isolate failures and maintain incremental progress.
- Rebuilt the fraud-reporting data path around T360 transaction datasets, replacing legacy ECOMM sources across orders, order lines, hold types, and release states and feeding the migrated data into downstream Tableau reporting.
- Converted existing distributed-processing logic into BigQuery-native transformations, validating source-to-target relationships and downstream reporting behavior before switching the reporting workflow to the migrated source.
- Worked across data processing, cloud storage, service integration, access control, and CI/CD, resolving production issues that crossed application, data, and infrastructure boundaries.

## Cloud / Infrastructure

AWS, Azure, GCP, Docker, Kubernetes, GitHub Actions, ArgoCD, CI/CD

## Storage / Services

Azure Blob Storage, Log Analytics, Cosmos DB, Redis, PostgreSQL, MongoDB, DynamoDB

## Observability

KQL, OpenTelemetry, CloudWatch, Distributed Tracing, Production Monitoring
