export type Project = {
    title: string;
    tag: string;
    desc: string;
    github: string;
    stack: string[];
    points: string[];
};

export type Role = {
    id: 'software' | 'ai' | 'data';
    shortLabel: string;
    label: string;
    eyebrow: string;
    tagline: string;
    resume: string;
    resumeLabel: string;
    sectionId: string;
};


export const roles: Role[] = [
    {
        id: 'software',
        shortLabel: 'Software Engineer',
        label: 'Software Engineer',
        eyebrow: 'BACKEND · SYSTEMS · APIS',
        tagline: 'Backend systems, distributed infrastructure, and production-grade APIs built for reliability at scale.',
        resume: '/resumes/Umar_Farooque_Software_Engineer_Resume.pdf',
        resumeLabel: 'Software Engineer Resume',
        sectionId: 'software'
    },
    {
        id: 'ai',
        shortLabel: 'AI/ML Engineer',
        label: 'AI/ML Engineer',
        eyebrow: 'AGENTS · LLMS · MACHINE LEARNING',
        tagline: 'Multi-agent orchestration, LLM-integrated applications, and evidence-grounded retrieval systems.',
        resume: '/resumes/Umar_Farooque_AI_ML_Engineer_Resume.pdf',
        resumeLabel: 'AI/ML Engineer Resume',
        sectionId: 'ai'
    },
    {
        id: 'data',
        shortLabel: 'Data Analyst',
        label: 'Data Analyst',
        eyebrow: 'SQL · PYTHON · DASHBOARDS',
        tagline: 'End-to-end analytics — data cleaning, forecasting, segmentation, and decision-focused reporting.',
        resume: '/resumes/Umar_Farooque_Data_Analyst_Resume..pdf',
        resumeLabel: 'Data Analyst Resume',
        sectionId: 'data'
    }
];


export const softwareProjects: Project[] = [
    {
        title: 'MiniRedis — Redis-Compatible Data Store',
        tag: 'BACKEND · SYSTEMS',
        desc: 'A Redis-compatible in-memory data store built from scratch in Python/AsyncIO, with an incremental RESP protocol parser and crash-safe persistence.',
        github: 'https://github.com/umar80643/Mini-Redis',
        stack: ['Python', 'AsyncIO', 'RESP Protocol', 'Replication', 'AOF Persistence', 'Prometheus', 'Grafana'],
        points: [
            'Built TTL min-heap expiration and LRU/LFU/no-eviction policies',
            'Implemented AOF persistence with configurable fsync policies and crash-safe recovery',
            'Added primary-replica replication (PSYNC), validated with 61 tests covering fuzzing and concurrency races'
        ]
    },
    {
        title: 'L7 Load Balancer',
        tag: 'BACKEND · SYSTEMS',
        desc: 'Production-grade Layer 7 HTTP load balancer built from scratch with asynchronous networking, pluggable routing algorithms, fault tolerance and observability.',
        github: 'https://github.com/umar80643/l7-load-balancer',
        stack: ['Python', 'AsyncIO', 'AioHTTP', 'Docker', 'Prometheus', 'Grafana', 'k6'],
        points: [
            'Built 6 pluggable load-balancing algorithms and sustained ~2,009 req/s at 0% error rate with 35.42ms p95 latency',
            'Implemented health checks, circuit breaker, exponential-backoff retries, rate limiting and sticky sessions',
            'Built 133 unit + integration tests with 97% line coverage and GitHub Actions CI'
        ]
    }
];


export const aiProjects: Project[] = [
    {
        title: 'Enterprise AI Incident Resolution Agent',
        tag: 'AI AGENTS · LANGGRAPH',
        desc: 'An evidence-grounded incident-investigation system coordinating planner, retrieval, debugging and reviewer agents through a resumable state machine.',
        github: 'https://github.com/umar80643/enterprise-ai-incident-response-agent',
        stack: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'Qdrant', 'PostgreSQL', 'Redis', 'Docker'],
        points: [
            'Orchestrated planner, retrieval, debugging, root-cause and reviewer agents with bounded retries',
            'Implemented hybrid lexical + vector retrieval with reciprocal-rank fusion, returning INSUFFICIENT_EVIDENCE instead of guessing',
            'Designed MCP-style permissioned tool boundaries with mandatory human approval before repository writes'
        ]
    },
    {
        title: 'Product Launch Intelligence Agent',
        tag: 'AI AGENTS · LLM',
        desc: 'Multi-agent workflow with specialist agents for competitor analysis, sentiment and launch metrics, using Firecrawl-backed research.',
        github: 'https://github.com/umar80643/PRODUCT-LAUNCH-INTELLIGENCE-AGENT',
        stack: ['Python', 'Agno', 'OpenAI', 'Firecrawl', 'FastAPI', 'Streamlit', 'SQLAlchemy', 'Docker'],
        points: [
            'Architected 3 Agno specialist agents generating evidence-tagged intelligence reports',
            'Built a layered FastAPI service with API-key auth and SQLAlchemy persistence',
            'Decoupled the Streamlit UI via REST APIs, with 22 credential-free tests and CI'
        ]
    },
    {
        title: 'Plagiarism & AI-Content Detector',
        tag: 'NLP · MACHINE LEARNING',
        desc: 'Production-style plagiarism and AI-text detection platform combining semantic retrieval, vector search and machine-learning detection.',
        github: 'https://github.com/umar80643/plagiarism-ai-detector',
        stack: ['Python', 'FastAPI', 'Streamlit', 'FAISS', 'Scikit-learn', 'Transformers', 'Docker'],
        points: [
            'Designed TF-IDF/Sentence-Transformer retrieval with FAISS search and a 3-tier AI-text detector',
            'Evaluated results on accuracy, precision, recall, F1, and ROC-AUC',
            'Added confidence calibration with independently tested temperature-scaling logic'
        ]
    }
];


export const dataProjects: Project[] = [
    {
        title: 'Smart E-Commerce Operations Analytics Platform',
        tag: 'DATA · SQL · POWER BI',
        desc: 'A two-fact-table star schema for order economics and returns, with forecasting, segmentation and a DAX-driven Excel workbook.',
        github: '',
        stack: ['SQL Server', 'Python', 'Excel', 'Power BI'],
        points: [
            'Modeled 15,000 orders, 25,426 line items, 3,000 customers, 500 products and 1,277 returns',
            'Built a Faker-based synthetic data generator and a cleaning pipeline with fully audited fixes',
            'Delivered an ARIMA revenue forecast validated at 14% holdout MAPE, with 16 schema-matched DAX measures'
        ]
    },
    {
        title: 'FinOps Cost Anomaly Detection',
        tag: 'DATA · STATISTICS',
        desc: 'A cloud cost anomaly detector across 60 daily spend series, accounting for seasonality, trend and multiple comparisons.',
        github: 'https://github.com/umar80643/finops-cost-anomaly-detector.git',
        stack: ['Python', 'Statistical Monitoring', 'Root-Cause Analysis'],
        points: [
            'Applied Benjamini-Hochberg correction across 60 spend series over 730 days',
            'Improved precision on injected anomalies from 26% to 56% via calibration fixes and bootstrap validation',
            'Built root-cause attribution, catching 100% of injected events at least once'
        ]
    },
    {
        title: 'Churn Retention Uplift Modeling',
        tag: 'DATA · CAUSAL INFERENCE',
        desc: 'A causal uplift modeling pipeline on a 40,000-customer randomized retention experiment.',
        github: 'https://github.com/umar80643/customer-retention-uplift-modeling.git',
        stack: ['Python', 'EconML', 'Causal Inference'],
        points: [
            'Compared S-learner, T-learner and X-learner approaches on a 40,000-customer experiment',
            'Showed uplift-based targeting adds ~$16,519 in expected retained revenue per 3,600 customers targeted',
            'Validated with Qini evaluation, bootstrap confidence intervals and population-sensitivity checks'
        ]
    },
    {
        title: 'Twitter Sentiment Analysis',
        tag: 'DATA · NLP',
        desc: 'Large-scale sentiment analysis using the 1.6M-tweet Sentiment140 dataset to transform raw social-media data into measurable insights.',
        github: 'https://github.com/umar80643/Sentiment-Analysis-Twitter',
        stack: ['Python', 'pandas', 'Scikit-learn', 'NLTK', 'TF-IDF'],
        points: [
            'Processed and analyzed the 1.6M-tweet Sentiment140 dataset',
            'Compared Naive Bayes, Logistic Regression and Linear SVM models',
            'Achieved 79.17% accuracy using Logistic Regression with TF-IDF features'
        ]
    }
];


export const skills = {
    'Software Development': [
        'Java', 'Python', 'JavaScript', 'HTML/CSS', 'FastAPI', 'AioHTTP',
        'REST APIs', 'Async Programming', 'OOP & SOLID', 'Data Structures & Algorithms'
    ],
    'AI & Machine Learning': [
        'LangGraph', 'LangChain', 'Agno', 'Multi-Agent Systems', 'Google Gemini',
        'OpenAI', 'Ollama', 'Prompt Engineering', 'Scikit-learn', 'Transformers', 'FAISS', 'NLP'
    ],
    'Data & Analytics': [
        'SQL', 'Microsoft SQL Server', 'Power BI', 'Excel', 'pandas', 'NumPy',
        'statsmodels', 'A/B Testing', 'Forecasting', 'Data Visualization'
    ],
    'DevOps & Engineering Tools': [
        'Git', 'GitHub', 'Docker', 'Docker Compose', 'GitHub Actions',
        'Pytest', 'Prometheus', 'Grafana', 'k6'
    ],
    'Core Computer Science': [
        'DBMS', 'Software Testing', 'Complexity Analysis', 'Load Balancing',
        'Rate Limiting', 'Circuit Breakers', 'CI/CD'
    ]
};


export type Certification = {
    title: string;
    issuer: string;
    date: string;
    file: string;
};

export const certifications: Certification[] = [
    {
        title: 'Discover Data Analysis',
        issuer: 'Microsoft Learn',
        date: 'Aug 2026',
        file: '/certificates/Microsoft_Discover_Data_Analysis.pdf'
    },
    {
        title: 'Design and Implement Database Objects with SQL',
        issuer: 'Microsoft Learn',
        date: 'Aug 2026',
        file: '/certificates/Microsoft_Design_Implement_Database_Objects_SQL.pdf'
    },
    {
        title: 'Introduction to Generative AI and Agents',
        issuer: 'Microsoft Learn',
        date: 'Aug 2026',
        file: '/certificates/Microsoft_Intro_Generative_AI_and_Agents.pdf'
    },
    {
        title: 'Git For Beginners',
        issuer: 'Udemy',
        date: 'Aug 2026',
        file: '/certificates/Udemy_Git_For_Beginners.pdf'
    },
    {
        title: 'Python for Beginners',
        issuer: 'Udemy',
        date: 'Aug 2026',
        file: '/certificates/Udemy_Python_For_Beginners.pdf'
    }
];
