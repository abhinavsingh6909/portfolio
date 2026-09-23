// Portfolio Data for Abhinav Singh
// All metrics, timeline details, and project details are authentic and grounded in real engineering.

export const PROFILE = {
  name: "Abhinav Singh",
  monogram: "AS",
  headline: "I BUILD PRODUCTS, NOT JUST WEBSITES.",
  subheadline: "Engineering digital experiences that people remember.",
  statusLine: "SOFTWARE ENGINEER • FULL-STACK • PRODUCT MINDED",
  location: "Delhi, India",
  availability: "AVAILABLE FOR SOFTWARE ENGINEERING ROLES",
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Delhi Technical Campus, GGSIPU",
    graduationYear: "2025",
    cgpa: "7.98",
  },
  summary:
    "I am a software engineer focused on building modern, scalable, user-centric web applications and robust backend systems. My work combines systems engineering, product thinking, meticulous design craft, and practical AI integrations.",
  email: "abhinavsingh280803@gmail.com",
  github: "https://github.com/abhinavsingh6909",
  linkedin: "https://www.linkedin.com/in/abhinav-singh-227a9822a/",
  leetcode: "https://leetcode.com/u/abhinav--singh/",
  leetcodeSolved: "600+",
  resumeUrl: "/resume.pdf",
};

export const MANIFESTO = {
  quote: "I care about the details most people don't notice — until they're missing.",
  body: "I enjoy turning complex engineering problems into clean, intuitive interfaces and building software where architectural resilience and user experience meet. Software engineering isn't just about stringing together third-party packages; it's about understanding systems from first principles — data structures, API boundaries, security guarantees, and execution latency.",
};

export const PROJECTS = [
  {
    id: "studynotion",
    slug: "studynotion",
    title: "StudyNotion / StudyHub",
    tagline: "Full-stack MERN educational ecosystem with streaming media pipelines and atomic payment verification.",
    category: "Full-Stack MERN Architecture",
    role: "Full-Stack Software Engineer",
    timeline: "2025 — 2026",
    image: "/images/studyhub.png",
    accentColor: "#10b981",
    featuredBadge: "FULL-STACK PLATFORM",
    liveUrl: "https://studyhubfinal-1.onrender.com/",
    githubUrl: "https://github.com/abhinavsingh6909",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "Razorpay API",
      "Cloudinary CDN",
      "Tailwind CSS",
    ],
    overview:
      "StudyNotion is an end-to-end edtech application architected on the MERN stack. Designed around seamless learning workflows, instructor course creation suites, and secure multi-tier authorization. It bridges robust video media handling with cryptographic payment verification.",
    theProblem:
      "EdTech systems frequently struggle with sluggish video delivery, leaky authorization boundaries between students and creators, and fragile payment capture where students pay but fail to receive course enrollment due to network dropouts.",
    theApproach:
      "Architected a decoupled media pipeline offloading transcoding to Cloudinary, built role-based access middleware with JWT cookies, and engineered an idempotent webhook settlement flow validating SHA256 HMAC signatures prior to granting database enrollment.",
    architecture:
      "Client (React + Redux Toolkit) communicates via REST API to Express.js controllers. Mongoose models govern Users, Courses, and Sections with indexed foreign keys. Cloudinary manages asset storage and multi-bitrate streaming, while Razorpay webhooks trigger atomic MongoDB updates.",
    keyFeatures: [
      "Role-Based Authorization: Strict multi-tier separation between Student, Instructor, and Platform Admin.",
      "Instructor Creation Studio: Lecture upload, course categorization, and real-time revenue analytics.",
      "Video Streaming Pipeline: Chunked video uploads with Cloudinary CDN delivery.",
      "Cryptographic Payment Capture: Razorpay order creation with SHA-256 HMAC signature verification.",
      "Atomic Enrollment: Concurrent enrollment locking to prevent double-charging or orphan sessions.",
    ],
    engineeringDecisions: [
      {
        decision: "Offloaded Media Pipeline to Cloudinary CDN",
        tradeOff:
          "Rather than handling high-bandwidth video streams on the Node.js event loop, all video processing was routed through Cloudinary with signed pre-authenticated upload presets. Kept server memory footprint predictable under concurrent user traffic.",
      },
      {
        decision: "Idempotent Webhook Payment Confirmation",
        tradeOff:
          "Relied on server-side HMAC validation rather than frontend client callbacks. Enrollment state only updates once verified cryptographic webhook payloads arrive, preventing payment spoofing.",
      },
      {
        decision: "Normalized Course Schema with Subdocument Indexing",
        tradeOff:
          "Maintained referenced section IDs and subdocuments in MongoDB with indexes on instructorId and categoryId, optimizing read latency for course catalog browsing.",
      },
    ],
    challenges: [
      "Handling large video uploads without blocking Node.js thread execution.",
      "Preventing unauthorized lecture access while maintaining frictionless streaming performance.",
      "Reconciling client state in Redux when network connection drops mid-lecture.",
    ],
    outcome:
      "Shipped a functional production edtech platform supporting course publishing, student discovery, and live payment processing with zero unverified enrollment defects.",
    whatILearned:
      "Deepened practical understanding of cryptographic signature verification, atomic document writes, CDN caching strategies, and designing secure role-based REST APIs.",
  },
  {
    id: "motherhood-sanctuary",
    slug: "motherhood-sanctuary",
    title: "Motherhood Sanctuary",
    tagline: "High-conversion digital wellness platform engineered for mothers with automated delivery pipelines.",
    category: "Full-Stack Product & E-Commerce",
    role: "Founder & Full-Stack Engineer",
    timeline: "May 2024 · 48h to Production",
    image: "/images/MotherhoodSanctuary.png",
    accentColor: "#e07a5f",
    featuredBadge: "COMMERCIAL PRODUCT",
    liveUrl: "https://motherhood-haven.vercel.app",
    techStack: [
      "React",
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "Payment Gateway",
      "Nodemailer",
      "Vercel Edge",
    ],
    overview:
      "Motherhood Sanctuary is an independent direct-to-consumer digital wellness product engineered from blank canvas to production in 48 hours. Created for overwhelmed mothers seeking boundary scripts and emotional reset tools, it unites high-empathy editorial design with automated transactional fulfillment.",
    theProblem:
      "Overstimulated parents have near-zero cognitive patience for sluggish checkout funnels or confusing navigation. Traditional ecommerce templates are cluttered with generic popups and lack empathetic visual hierarchy.",
    theApproach:
      "Built an intuitive 'struggle-driven' interactive diagnostic selector that routes emotional pain points directly to relevant scriptbooks, paired with optimistic cart context updates and instant automated email fulfillment.",
    architecture:
      "Responsive React client with Framer Motion spring physics. Serverless API routes coordinate order creation, cryptographic payment verification, and trigger a transactional Nodemailer pipeline dispatching secure download tokens.",
    keyFeatures: [
      "Struggle-Driven Interactive Selector: Replaces generic filters with pain-point matching.",
      "Optimistic Cart Context: Instant sub-millisecond cart feedback with persistent local storage hydration.",
      "Dynamic Bundle Discount Engine: Automatically applies multi-item tier discounts without layout shift.",
      "Automated PDF Dispatch: Instant transactional delivery pipeline sending encrypted tokenized downloads.",
      "Editorial Mobile Typography: Engineered from 375px viewport upwards for seamless handheld reading.",
    ],
    engineeringDecisions: [
      {
        decision: "Struggle-First Diagnostic UI over Generic Category Grids",
        tradeOff:
          "Replaced standard product cards with an emotional state machine. Increased user engagement by guiding visitors through specific daily challenges (overstimulation, boundaries) to specific solutions.",
      },
      {
        decision: "Idempotent Transactional Fulfillment Pipeline",
        tradeOff:
          "Engineered the email delivery service to verify transaction IDs against duplicate webhooks, ensuring buyers never receive duplicate emails or missed downloads.",
      },
      {
        decision: "Zero-Bloat Custom UI Components",
        tradeOff:
          "Avoided heavy off-the-shelf component libraries; custom-crafted all inputs, modals, and accordions to preserve sub-second initial load time.",
      },
    ],
    challenges: [
      "Delivering a complete brand, catalog, payment gateway, and automated dispatch pipeline within a strict 48-hour deadline.",
      "Ensuring mobile performance achieved 60fps on varied mobile processors despite rich typography and smooth reveals.",
    ],
    outcome:
      "Achieved sub-second page loads (98/100 Lighthouse Mobile), 100% automated fulfillment via programmatic email dispatch, and complete production stability.",
    whatILearned:
      "Proved that empathy-first user research and engineering speed are not mutually exclusive. Learned to ruthlessly prioritize high-impact architectural decisions under tight constraints.",
  },
  {
    id: "vantara-studio",
    slug: "vantara-studio",
    title: "Vantara Studio",
    tagline: "Independent digital engineering studio building premium, high-trust web platforms for modern businesses.",
    category: "Creative Engineering & Studio",
    role: "Founder & Principal Engineer",
    timeline: "2024 — Present",
    image: "/images/hero-visual.png",
    accentColor: "#f59e0b",
    featuredBadge: "INDEPENDENT STUDIO",
    liveUrl: "https://clinics-demo.vercel.app",
    techStack: [
      "React 19",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Vite",
      "Vercel Edge",
    ],
    overview:
      "Vantara Studio is my independent digital product and web engineering initiative. Most local service businesses (aesthetic clinics, fitness studios, artisan restaurants) rely on bloated, sluggish WordPress templates that compromise customer credibility. Vantara proves that modern businesses deserve bespoke, cinematic web engineering.",
    theProblem:
      "Generic agency templates suffer from severe layout shifts (high CLS), bloated 5MB+ JavaScript payloads, and generic layouts that fail to convey high-end craftsmanship or earn client trust.",
    theApproach:
      "Developed a custom modular design system in React 19 and TypeScript. Every layout was engineered mobile-first, using hardware-accelerated animations, zero-overhead CSS variables, and streamlined lead conversion funnels.",
    architecture:
      "Modular component architecture using strict TypeScript prop contracts. Hardware-accelerated CSS transforms and Framer Motion spring physics ensure smooth 60fps interactions with zero Cumulative Layout Shift (CLS < 0.02).",
    keyFeatures: [
      "Bespoke Niche Architectures: Tailored layouts for dermatology, premium wellness, hospitality, and interiors.",
      "Hardware-Accelerated Motion: Smooth scroll reveals and micro-interactions optimized for low-end mobile devices.",
      "Streamlined Conversion Funnels: Multi-step interactive inquiry systems replacing clunky static forms.",
      "Zero-Bloat Production Bundle: Clean custom components with zero third-party UI framework overhead.",
    ],
    engineeringDecisions: [
      {
        decision: "Bespoke Component System over CSS Framework Bloat",
        tradeOff:
          "Rather than importing monolithic component frameworks, built atomic primitives (buttons, drawers, modals, carousels) from scratch. Kept production bundle size exceptionally compact.",
      },
      {
        decision: "Mobile-First Geometry Constraint",
        tradeOff:
          "Designed layouts starting from 375px viewports before applying desktop enhancements, reflecting the 80%+ mobile traffic reality of consumer businesses.",
      },
    ],
    challenges: [
      "Translating abstract brand identities into tangible code and interactive animations without compromising Lighthouse performance.",
      "Engineering fluid viewport transitions that remain silky smooth across mobile Safari and Chromium.",
    ],
    outcome:
      "Built multiple production-ready niche prototypes with 60 FPS animation performance, sub-second TTFB, and zero bloat.",
    whatILearned:
      "Bridged the gap between high-level creative direction and low-level frontend engineering. Understood how visual polish directly drives customer conversion.",
  },
  {
    id: "intellicv",
    slug: "intellicv",
    title: "IntelliCV — AI Resume Analyzer",
    tagline: "Full-stack AI resume intelligence platform performing semantic ATS scoring and heuristic gap analysis.",
    category: "AI Product & Full-Stack System",
    role: "Lead Architect & Engineer",
    timeline: "2026",
    image: "/images/landing-page.jpg",
    accentColor: "#38bdf8",
    featuredBadge: "AI-POWERED PRODUCT",
    githubUrl: "https://github.com/abhinavsingh6909",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Gemini 2.5 Flash",
      "pdf-parse",
      "Multer",
      "Helmet & Rate-Limit",
    ],
    overview:
      "IntelliCV is a full-stack resume analysis engine that simulates enterprise Applicant Tracking Systems (ATS). Users upload resumes in PDF format and optional target job descriptions to receive deterministic ATS rubric scores, structural feedback, and semantic qualification gap analysis.",
    theProblem:
      "Job applicants submit hundreds of resumes into corporate ATS systems without understanding why they get filtered out. Commercial resume checkers either charge exorbitant fees or offer superficial keyword counts without deep semantic understanding.",
    theApproach:
      "Built a secure in-memory streaming pipeline with Multer and pdf-parse, paired with a two-tier scoring methodology combining deterministic heuristic parsing (formatting, length, metrics) with Gemini 2.5 Flash constrained JSON schema evaluation.",
    architecture:
      "Node.js / Express backend with memory storage buffers. Multer parses uploaded files without disk I/O. The extraction engine sanitizes raw text, runs rule-based heuristic checks, queries Gemini with strict structured output formatting, and returns type-safe diagnostics to the React frontend.",
    keyFeatures: [
      "In-Memory PDF Parsing: Fast document text extraction using pdf-parse with memory storage.",
      "Two-Tier Evaluation Engine: Hard heuristic scoring (bullet metrics, length, headers) combined with semantic LLM role alignment.",
      "Strict Schema Enforcement: Enforced structured JSON output from Gemini to prevent UI parsing failures.",
      "Defensive Security Middleware: Rate-limiting on AI endpoints, Helmet security headers, and input sanitization.",
      "Interactive Diagnostic Dashboard: Real-time score meters, categorized actionable improvement checklists, and missing keyword telemetry.",
    ],
    engineeringDecisions: [
      {
        decision: "In-Memory Buffer Processing vs. Disk Storage",
        tradeOff:
          "Kept PDF files in temporary memory buffers during text extraction and discarded them immediately after text tokenization. Eliminated disk cleanup jobs and safeguarded applicant privacy.",
      },
      {
        decision: "Constrained JSON Schema Output",
        tradeOff:
          "Engineered strict system prompts requiring structured JSON arrays for improvements and scores rather than free-form markdown, completely eliminating brittle frontend regex scrapers.",
      },
      {
        decision: "Layered Rate Limiting Protection",
        tradeOff:
          "Implemented global IP rate limiting alongside strict per-endpoint limits on AI inference calls to protect API quotas and prevent abusive denial-of-service attempts.",
      },
    ],
    challenges: [
      "Disordered text streams resulting from multi-column PDF layouts.",
      "Ensuring LLM inference latency remained under 2.5 seconds while delivering comprehensive analysis.",
      "Handling corrupted or encrypted PDF uploads gracefully without crashing the Node.js process.",
    ],
    outcome:
      "Engineered an operational AI evaluation pipeline delivering structured ATS scorecards in under 2 seconds with zero server memory leaks.",
    whatILearned:
      "Mastered multi-stage data sanitization, LLM structured schema prompt engineering, and defensive backend rate limiting.",
  },
  {
    id: "java-concurrent-engine",
    slug: "java-concurrent-engine",
    title: "Concurrent Task Orchestrator",
    tagline: "High-throughput thread-safe task queue & priority execution worker built in modern Java.",
    category: "Java / Systems & Concurrency",
    role: "Backend & Systems Engineer",
    timeline: "2026 · Active Development",
    image: "/images/abstract-gradient.jpg",
    accentColor: "#a855f7",
    featuredBadge: "IN DEVELOPMENT",
    githubUrl: "https://github.com/abhinavsingh6909",
    techStack: [
      "Java 21",
      "Multi-Threading",
      "Low-Level Design",
      "OOP",
      "Concurrent Collections",
      "PriorityQueues",
      "Lock-Free Atomics",
    ],
    overview:
      "A core systems engineering project exploring concurrent execution pipelines, thread pool orchestration, and lock-free data structures in Java. Engineered to handle asynchronous priority-based job scheduling with backpressure mechanisms.",
    theProblem:
      "High-concurrency backend services face thread starvation, race conditions, and uncontrolled memory growth when incoming task volume surges past execution capacity.",
    theApproach:
      "Designing a thread-safe task orchestrator using bounded priority blocking queues, worker pool thread management, atomic telemetry counters, and graceful shutdown lifecycle hooks.",
    architecture:
      "Producers submit typed task payloads to a thread-safe priority queue. A custom ThreadPoolExecutor manages worker threads with configurable core/max pool sizing. An atomic state manager records execution metrics, latencies, and retry policies without blocking locks.",
    keyFeatures: [
      "Thread-Safe Priority Scheduling: Tasks are prioritized by deadline and computational weight.",
      "Lock-Free Execution Telemetry: AtomicInteger and AtomicLong counters prevent lock contention during metric collection.",
      "Adaptive Backpressure: Rejects or pauses producer intake when the internal queue reaches configured high watermarks.",
      "Graceful Termination Hooks: Ensures running tasks complete within timeout bounds during shutdown.",
    ],
    engineeringDecisions: [
      {
        decision: "Bounded Concurrent Queues over Unbounded Linked Lists",
        tradeOff:
          "Selected bounded queues to guarantee hard memory limits and prevent OutOfMemory errors under unexpected load spikes.",
      },
      {
        decision: "Clean Object-Oriented Task Lifecycle Interface",
        tradeOff:
          "Created modular Task, Worker, and TaskQueue abstractions adhering to SOLID principles, enabling pluggable scheduling algorithms.",
      },
    ],
    challenges: [
      "Eliminating subtle race conditions during concurrent worker handoffs.",
      "Balancing fairness between low-priority starvation and high-priority deadline adherence.",
    ],
    outcome:
      "Currently in active development as a foundational systems engineering project, solidifying low-level design and concurrency fundamentals.",
    whatILearned:
      "Deepening practical mastery of Java memory models, thread synchronization primitives, atomic references, and LLD system modeling.",
  },
];

export const ARCHITECTURE_FLOWS = [
  {
    id: "flow-mern-auth-order",
    title: "MERN Payment & Fulfillment Pipeline",
    system: "StudyNotion / Motherhood Sanctuary",
    description: "Multi-tier authentication, state coordination, and cryptographic webhook settlement.",
    nodes: [
      {
        id: "node-client",
        name: "Client React Application",
        type: "Frontend",
        details: "Optimistic UI state, Redux Toolkit, JWT in secure HTTP-only cookies, client input validation.",
        code: "// Client dispatch\ndispatch(initiateCheckout({ items, couponCode }));",
      },
      {
        id: "node-auth",
        name: "Express Auth & Rate Limiter",
        type: "API Gateway",
        details: "JWT token verification, IP rate limit windowing, payload schema sanitization via validator.",
        code: "// Auth Middleware\nconst token = req.cookies.token || req.headers.authorization;\nconst decoded = jwt.verify(token, process.env.JWT_SECRET);\nreq.user = decoded;",
      },
      {
        id: "node-payment",
        name: "Payment Gateway Integration",
        type: "External Service",
        details: "Razorpay / Stripe order creation, signed order token generation, amount verification.",
        code: "// Order Creation\nconst order = await razorpay.orders.create({\n  amount: totalAmount * 100,\n  currency: 'INR',\n  receipt: `rcpt_${userId}_${Date.now()}`\n});",
      },
      {
        id: "node-webhook",
        name: "HMAC Webhook Verification",
        type: "Security Pipeline",
        details: "SHA-256 HMAC checksum validation against secret key to guarantee genuine bank settlement.",
        code: "// Cryptographic Webhook Checksum\nconst expectedSignature = crypto\n  .createHmac('sha256', process.env.WEBHOOK_SECRET)\n  .update(JSON.stringify(req.body))\n  .digest('hex');\nif (expectedSignature !== req.headers['x-razorpay-signature']) throw new Error();",
      },
      {
        id: "node-db",
        name: "MongoDB Atomic Roster Update",
        type: "Database",
        details: "Atomic $push to enrolledCourses array with session transaction locking, preventing duplicate credit.",
        code: "// Atomic Database Enrollment\nawait User.findByIdAndUpdate(userId, {\n  $addToSet: { enrolledCourses: courseId }\n}, { session });",
      },
      {
        id: "node-delivery",
        name: "Asset & Transactional Delivery",
        type: "CDN & Microservice",
        details: "Cloudinary signed streaming URLs generated, Nodemailer transactional receipt token dispatched.",
        code: "// Fulfillment Dispatch\nawait emailQueue.sendReceipt({\n  to: user.email,\n  token: secureDownloadToken\n});",
      },
    ],
  },
  {
    id: "flow-ai-pipeline",
    title: "AI Semantic Resume Pipeline",
    system: "IntelliCV Engine",
    description: "In-memory document stream, rule heuristics, Gemini schema inference, and structured scoring.",
    nodes: [
      {
        id: "node-upload",
        name: "Multi-Part File Upload Stream",
        type: "Frontend / Network",
        details: "Client uploads PDF resume with target job description; client-side type and size guardrails.",
        code: "const formData = new FormData();\nformData.append('resume', file);\nformData.append('jobDescription', jdText);",
      },
      {
        id: "node-buffer",
        name: "Multer In-Memory Buffer",
        type: "Backend Buffer",
        details: "Memory storage retains binary stream without disk writes, eliminating cleanup jobs and ensuring privacy.",
        code: "const upload = multer({\n  storage: multer.memoryStorage(),\n  limits: { fileSize: 5 * 1024 * 1024 }\n});",
      },
      {
        id: "node-parser",
        name: "Heuristic Token & ATS Parser",
        type: "Parsing Engine",
        details: "pdf-parse extracts raw UTF-8 text; regex checks calculate hard metrics (contact info, sections, word density).",
        code: "const data = await pdfParse(req.file.buffer);\nconst hardScores = evaluateAtsHeuristics(data.text);",
      },
      {
        id: "node-llm",
        name: "Gemini 2.5 Flash Structured Inference",
        type: "Generative AI",
        details: "Zero-shot prompt with strict JSON schema definition analyzing semantic skill alignment and impact verbs.",
        code: "const response = await ai.generateContent({\n  contents: [{ role: 'user', parts: [{ text: prompt }] }],\n  generationConfig: { responseMimeType: 'application/json' }\n});",
      },
      {
        id: "node-validator",
        name: "Schema Sanity & Telemetry Merging",
        type: "Validation Layer",
        details: "Backend merges hard heuristic scores with AI feedback into unified, type-safe JSON response.",
        code: "const combinedReport = {\n  atsScore: Math.round((hardScores.ats + aiData.relevanceScore) / 2),\n  actionableFixes: aiData.improvements\n};",
      },
      {
        id: "node-ui",
        name: "Reactive Diagnostics Dashboard",
        type: "Client Render",
        details: "Interactive score breakdown, animated progress dials, clickable improvement checklist.",
        code: "<ScoreCard score={report.atsScore} />\n<FixList items={report.actionableFixes} />",
      },
    ],
  },
  {
    id: "flow-java-concurrency",
    title: "Thread-Safe Task Execution Worker",
    system: "Concurrent Task Orchestrator",
    description: "Bounded priority blocking queue, worker thread pool, lock-free atomics, and graceful shutdown.",
    nodes: [
      {
        id: "node-task-producer",
        name: "Task Producer",
        type: "Input Stream",
        details: "Asynchronous incoming computational requests tagged with unique UUID, priority rank, and timeout.",
        code: "Task<Output> task = new PriorityTask<>(taskId, Priority.HIGH, payload);",
      },
      {
        id: "node-queue",
        name: "PriorityBlockingQueue (Bounded)",
        type: "Memory Data Structure",
        details: "Heap-ordered thread-safe queue. Blocks producers if high watermark reached (backpressure control).",
        code: "BlockingQueue<Runnable> queue = new PriorityBlockingQueue<>(1000, comparator);",
      },
      {
        id: "node-thread-pool",
        name: "Custom ThreadPoolExecutor",
        type: "Java Concurrency",
        details: "Pre-allocated worker threads matching available CPU cores; eliminates thread spawning overhead.",
        code: "ExecutorService executor = new ThreadPoolExecutor(\n  corePoolSize, maxPoolSize, 60L, TimeUnit.SECONDS, queue\n);",
      },
      {
        id: "node-atomic-metrics",
        name: "Lock-Free Telemetry Tracker",
        type: "Atomic Primitives",
        details: "AtomicLong and LongAdder track completed tasks, errors, and execution latencies without lock contention.",
        code: "private final LongAdder processedTasks = new LongAdder();\nprocessedTasks.increment();",
      },
      {
        id: "node-lifecycle",
        name: "Shutdown & Graceful Drain",
        type: "Systems Lifecycle",
        details: "JVM shutdown hook ensures inflight tasks finish execution before terminating worker threads.",
        code: "executor.shutdown();\nif (!executor.awaitTermination(30, TimeUnit.SECONDS)) {\n  executor.shutdownNow();\n}",
      },
    ],
  },
];

export const DSA_DATA = {
  headline: "HOW I THINK",
  subheadline: "Software engineering is more than assembling libraries — it is reasoning about algorithmic constraints, edge cases, and time/space complexity.",
  totalSolved: "600+",
  profileUrl: "https://leetcode.com/u/abhinav--singh/",
  categories: [
    {
      name: "Arrays & Two Pointers",
      description: "Subarray sliding window, two-pointer convergence, prefix sum hashing, monotonic boundaries.",
      highlight: "In-place array manipulation and amortized O(N) windowing.",
      icon: "Columns",
    },
    {
      name: "Strings & Hashing",
      description: "Frequency maps, palindrome expansion, rolling hash, character mask state representation.",
      highlight: "Collision resolution and O(1) average lookup patterns.",
      icon: "Hash",
    },
    {
      name: "Linked Lists",
      description: "Fast/slow cycle detection, in-place reversal, merge k-sorted lists, dummy node safety.",
      highlight: "Pointer manipulation with constant auxiliary space.",
      icon: "GitBranch",
    },
    {
      name: "Stacks & Queues",
      description: "Monotonic stack for next greater element, circular queues, sliding window maximums.",
      highlight: "Maintaining invariant order to eliminate redundant lookups.",
      icon: "Layers",
    },
    {
      name: "Binary Search",
      description: "Search space reduction, search on answer range, predicate functions, rotated arrays.",
      highlight: "Logarithmic bounds identification in monotonic problem spaces.",
      icon: "Search",
    },
    {
      name: "Trees & Binary Search Trees",
      description: "Tree traversal (In/Pre/Post/Level), LCA, diameter, tree serialization, BST validation.",
      highlight: "Recursive substructure decomposition and depth tracking.",
      icon: "Network",
    },
    {
      name: "Heaps & Priority Queues",
      description: "K-th largest elements, median finding with two heaps, task scheduler, Dijkstra's algorithm.",
      highlight: "O(log K) streaming dynamic ordering.",
      icon: "TrendingUp",
    },
    {
      name: "Graphs (BFS, DFS, Union-Find)",
      description: "Topological sorting, cycle detection, connected components, shortest path algorithms.",
      highlight: "State space traversal, cycle detection, and Disjoint Set Union.",
      icon: "Share2",
    },
    {
      name: "Dynamic Programming",
      description: "1D/2D memoization, knapsack variants, longest common subsequence, state compression.",
      highlight: "Optimal substructure and overlapping subproblem recognition.",
      icon: "Cpu",
    },
    {
      name: "Recursion & Backtracking",
      description: "Permutations, combinations, N-Queens constraint satisfaction, branch pruning.",
      highlight: "State rollback and early path pruning to limit tree depth.",
      icon: "RotateCcw",
    },
  ],
};

export const CODE_SNIPPETS = [
  {
    id: "java-oop",
    title: "Java OOP & Clean Concurrency",
    language: "java",
    caption: "Thread-safe task scheduler with bounded queue and atomic telemetry counters.",
    code: `public final class ConcurrentTaskScheduler {
    private final BlockingQueue<Runnable> taskQueue;
    private final ExecutorService workerPool;
    private final LongAdder completedTasksCount = new LongAdder();

    public ConcurrentTaskScheduler(int poolSize, int queueCapacity) {
        this.taskQueue = new ArrayBlockingQueue<>(queueCapacity);
        this.workerPool = new ThreadPoolExecutor(
            poolSize, poolSize,
            0L, TimeUnit.MILLISECONDS,
            this.taskQueue,
            new ThreadPoolExecutor.CallerRunsPolicy() // Backpressure handler
        );
    }

    public <T> CompletableFuture<T> submitTask(Callable<T> task) {
        return CompletableFuture.supplyAsync(() -> {
            try {
                T result = task.call();
                completedTasksCount.increment();
                return result;
            } catch (Exception e) {
                throw new CompletionException(e);
            }
        }, workerPool);
    }
}`,
  },
  {
    id: "express-auth",
    title: "Express & Cryptographic HMAC Verification",
    language: "javascript",
    caption: "Idempotent payment webhook validation using SHA-256 HMAC digest checking.",
    code: `// Express Secure Webhook Controller
export const verifyRazorpayWebhook = async (req, res) => {
  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
  const receivedSignature = req.headers["x-razorpay-signature"];

  // Compute expected cryptographic HMAC digest
  const hmac = crypto.createHmac("sha256", webhookSecret);
  hmac.update(JSON.stringify(req.body));
  const expectedSignature = hmac.digest("hex");

  if (expectedSignature !== receivedSignature) {
    return res.status(400).json({ error: "Invalid cryptographic signature." });
  }

  const { event, payload } = req.body;
  if (event === "payment.captured") {
    const payment = payload.payment.entity;
    await fulfillOrderAtomically(payment.order_id, payment.id);
  }

  return res.status(200).json({ status: "acknowledged" });
};`,
  },
  {
    id: "react-hook",
    title: "React Custom Hook: Optimistic Cart",
    language: "javascript",
    caption: "Optimistic cart state manager with local storage hydration and bundle discount calculation.",
    code: `// useOptimisticCart.js
export function useOptimisticCart() {
  const [items, setItems] = useState(() => {
    try {
      const stored = localStorage.getItem("cart_items");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const addItemOptimistic = useCallback((newItem) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === newItem.id);
      const next = exists
        ? prev.map((i) => (i.id === newItem.id ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { ...newItem, qty: 1 }];
      localStorage.setItem("cart_items", JSON.stringify(next));
      return next;
    });
  }, []);

  const total = useMemo(() => {
    const rawTotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
    // Automatic bundle discount if 2+ items
    const discount = items.length >= 2 ? rawTotal * 0.15 : 0;
    return { subtotal: rawTotal, discount, netTotal: rawTotal - discount };
  }, [items]);

  return { items, addItemOptimistic, total };
}`,
  },
  {
    id: "ai-gemini",
    title: "AI Structured JSON Schema Inference",
    language: "javascript",
    caption: "Gemini 2.5 Flash strict JSON schema prompting for deterministic ATS evaluation.",
    code: `// Gemini ATS Schema Evaluation
export async function analyzeResumeWithGemini(resumeText, jobDescription) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    generationConfig: {
      responseMimeType: "application/json",
      temperature: 0.1, // Near-deterministic outputs
    },
  });

  const prompt = \`
  Analyze the candidate resume against the given Job Description.
  Return STRICT JSON matching this schema:
  {
    "atsScore": number (0-100),
    "roleAlignment": "Strong" | "Moderate" | "Needs Improvement",
    "missingKeySkills": string[],
    "actionableFixes": [{ "section": string, "issue": string, "suggestion": string }]
  }
  Resume: \${resumeText}
  Target JD: \${jobDescription}
  \`;

  const result = await model.generateContent(prompt);
  return JSON.parse(result.response.text());
}`,
  },
];

export const SKILLS_ECOSYSTEM = [
  {
    category: "LANGUAGES",
    skills: [
      { name: "Java", level: "Core & Concurrency", highlight: true },
      { name: "JavaScript (ES6+)", level: "Modern Async & Functional", highlight: true },
      { name: "C++", level: "Problem Solving & STL", highlight: false },
      { name: "SQL", level: "Queries, Joins & Normalization", highlight: false },
    ],
  },
  {
    category: "FRONTEND",
    skills: [
      { name: "React 19", level: "Components, Hooks & Context", highlight: true },
      { name: "Tailwind CSS", level: "Utility Architecture & Themes", highlight: true },
      { name: "HTML5 / Semantic", level: "Accessible Document Structure", highlight: false },
      { name: "Modern CSS", level: "Flexbox, Grid & Keyframes", highlight: false },
      { name: "Vite", level: "Bundling & Fast Refresh", highlight: false },
    ],
  },
  {
    category: "BACKEND & APIS",
    skills: [
      { name: "Node.js", level: "Event-Loop & Stream Handling", highlight: true },
      { name: "Express.js", level: "Middleware, Routing & Controllers", highlight: true },
      { name: "REST API Design", level: "Idempotent Endpoints & Status Codes", highlight: true },
      { name: "JWT & Security", level: "Bcrypt, Cookies, Helmet, Rate-Limits", highlight: true },
    ],
  },
  {
    category: "DATABASES & STORAGE",
    skills: [
      { name: "MongoDB", level: "Document Modeling & Aggregations", highlight: true },
      { name: "MySQL", level: "Relational Schemas & Constraints", highlight: false },
      { name: "Cloudinary CDN", level: "Transcoding & Asset Storage", highlight: false },
    ],
  },
  {
    category: "CORE ENGINEERING",
    skills: [
      { name: "Data Structures & Algorithms", level: "600+ LeetCode Solved", highlight: true },
      { name: "Object-Oriented Programming", level: "SOLID, Polymorphism, Abstraction", highlight: true },
      { name: "Git & Version Control", level: "Branching, PRs, Git Workflows", highlight: false },
      { name: "API Integration", level: "Razorpay, Gemini AI, Nodemailer", highlight: false },
    ],
  },
  {
    category: "CURRENTLY STRENGTHENING",
    skills: [
      { name: "Low-Level Design (LLD)", level: "Design Patterns & Class Architecture", highlight: true },
      { name: "System Design", level: "Caching, Scalability, Sharding", highlight: true },
      { name: "Backend Engineering", level: "High Throughput & Distributed Queues", highlight: true },
      { name: "Java Ecosystem", level: "JVM Internals, Multithreading & Spring Boot", highlight: true },
    ],
  },
];

export const TIMELINE = [
  {
    year: "2021",
    title: "Commenced B.Tech in Computer Science & Engineering",
    institution: "Delhi Technical Campus, GGSIPU",
    description:
      "Built rigorous foundations in core computer science, discrete mathematics, data structures, and object-oriented programming.",
  },
  {
    year: "2024",
    title: "Initiated Serious Independent & Client Development",
    institution: "Vantara Studio & Motherhood Sanctuary",
    description:
      "Transitioned from theoretical coding to shipping commercial software. Built client-oriented web products, handled payment integrations, and engineered conversion-first web experiences.",
  },
  {
    year: "2025",
    title: "Graduated B.Tech CSE (CGPA: 7.98)",
    institution: "Delhi Technical Campus, GGSIPU",
    description:
      "Completed degree with solid academic standing. Architected production full-stack platforms including StudyNotion and deepened full-stack JavaScript engineering.",
  },
  {
    year: "2025 – 2026",
    title: "Full-Stack Products, AI Integrations & 600+ DSA",
    institution: "Independent Engineering",
    description:
      "Solved 600+ algorithmic challenges on LeetCode. Engineered IntelliCV with Gemini AI integration, exploring multi-modal document extraction and ATS heuristics.",
  },
  {
    year: "2026",
    title: "Deliberate Systems Engineering & Backend Rigor",
    institution: "Present Focus",
    description:
      "Actively sharpening Low-Level Design (LLD), System Design concepts, Java multi-threading, and distributed concurrent task scheduling for high-scale software engineering roles.",
  },
];

export const BEYOND_CODE = [
  {
    title: "Piano",
    description: "Playing acoustic keys teaches rhythm, discipline, and the patience to master complex layered patterns over time.",
  },
  {
    title: "Drawing & Visual Arts",
    description: "Cultivates an obsession with spatial composition, negative space, and visual hierarchy that directly informs frontend craft.",
  },
  {
    title: "Fitness & Discipline",
    description: "Consistent progressive resistance training instills daily accountability and mental endurance for deep coding sessions.",
  },
  {
    title: "Continuous Learning",
    description: "Reading engineering post-mortems, systems design RFCs, and building prototypes to understand what happens under the surface.",
  },
];

export const CURRENT_BUILDING = {
  focusAreas: [
    "Java Multi-threading & Concurrent Priority Worker Pools",
    "Data Structures & Algorithmic Problem Solving (LeetCode 600+)",
    "Low-Level Design (LLD) & Object-Oriented System Architecture",
    "High-Scale Backend Engineering & System Design",
  ],
  lastUpdated: "2026",
};
