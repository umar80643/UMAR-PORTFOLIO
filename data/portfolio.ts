export const softwareProjects = [
    {
        title: 'L7 Load Balancer',
        tag: 'BACKEND · SYSTEMS',
        desc: 'Production-grade Layer 7 HTTP load balancer built from scratch with asynchronous networking, pluggable routing algorithms, fault tolerance and observability.',
        github: 'https://github.com/umar80643/l7-load-balancer',
        stack: [
            'Python',
            'AsyncIO',
            'AioHTTP',
            'Docker',
            'Prometheus',
            'Grafana',
            'k6'
        ],
        points: [
            'Built 6 pluggable load-balancing algorithms and sustained ~2,009 req/s at 0% error rate with 35.42ms p95 latency',
            'Implemented health checks, circuit breaker, exponential-backoff retries, rate limiting and sticky sessions',
            'Built 133 unit + integration tests with 97% line coverage and GitHub Actions CI',
            'Added REST admin APIs, Prometheus metrics, Grafana dashboards and Docker-based autoscaling'
        ]
    }
];


export const aiProjects = [
    {
        title: 'Multi-Agent AI Researcher',
        tag: 'AI AGENTS · LLM',
        desc: 'Agentic research system coordinating specialized AI agents for web research, article analysis, fact checking and evidence-aware report generation.',
        github: 'https://github.com/umar80643/MULTI-AGENT-AI-RESEARCHER',
        stack: [
            'Python',
            'Agno',
            'Streamlit',
            'Gemini',
            'OpenAI',
            'Ollama',
            'DDGS',
            'Newspaper4k'
        ],
        points: [
            'Built 4 specialized agents — Web Researcher, Hacker News Researcher, Article Reader and Fact Checker',
            'Created a provider-agnostic LLM layer supporting Gemini, OpenAI and local Ollama models',
            'Implemented query decomposition, claim cross-checking, contradiction detection and source-quality classification',
            'Built Quick, Standard and Deep research modes with activity visibility, history and Markdown report export'
        ]
    },

    {
        title: 'Plagiarism & AI-Content Detector',
        tag: 'NLP · MACHINE LEARNING',
        desc: 'Production-style plagiarism and AI-text detection platform combining semantic retrieval, vector search and machine-learning detection.',
        github: 'https://github.com/umar80643/plagiarism-ai-detector',
        stack: [
            'Python',
            'FastAPI',
            'Streamlit',
            'FAISS',
            'Scikit-learn',
            'Transformers',
            'Sentence-Transformers',
            'Docker'
        ],
        points: [
            'Designed TF-IDF + LSA and Sentence-Transformers embedding backends with optional cross-encoder reranking',
            'Built a 3-tier AI-text detection pipeline using heuristic, Scikit-learn and fine-tuned Transformer approaches',
            'Implemented FAISS vector search with incremental corpus updates, API-key authentication and rate limiting',
            'Added confidence calibration with independently tested temperature-scaling logic'
        ]
    },
    {
        title: 'AI Health & Fitness Planner',
        tag: 'AI APPLICATION · GEMINI',
        desc: 'Modular AI-powered health and fitness planning application combining deterministic health calculations with Gemini-generated personalized responses.',
        github: 'https://github.com/umar80643/ai-health-fitness-planner',
        stack: [
            'Python',
            'Streamlit',
            'Gemini API',
            'REST API',
            'OOP',
            'Git'
        ],
        points: [
            'Built reusable BMI, BMR and TDEE calculation modules with input validation',
            'Integrated Google Gemini through structured REST API requests for AI-generated recommendations',
            'Applied OOP and SOLID principles with clear separation between calculation, AI and UI layers',
            'Built an interactive Streamlit interface for generating personalized health and fitness plans'
        ]
    }
];


export const dataProjects = [
    {
        title: 'Twitter Sentiment Analysis',
        tag: 'DATA · NLP',
        desc: 'Large-scale sentiment analysis project using the 1.6M-tweet Sentiment140 dataset to transform raw social-media data into measurable sentiment insights.',
        github: 'https://github.com/umar80643/Sentiment-Analysis-Twitter',
        stack: [
            'Python',
            'pandas',
            'Scikit-learn',
            'NLTK',
            'Matplotlib',
            'TF-IDF'
        ],
        points: [
            'Processed and analyzed the 1.6M-tweet Sentiment140 dataset',
            'Compared Naive Bayes, Logistic Regression and Linear SVM models',
            'Achieved 79.17% accuracy using Logistic Regression with TF-IDF features',
            'Evaluated results using confusion matrices, ROC/PR curves and confidence scores'
        ]
    }
];


export const skills = {
    'Software Development': [
        'Java',
        'Python',
        'JavaScript',
        'HTML/CSS',
        'React',
        'Node.js',
        'FastAPI',
        'AioHTTP',
        'REST APIs',
        'Async Programming',
        'OOP & SOLID',
        'Data Structures & Algorithms'
    ],

    'AI & Machine Learning': [
        'Multi-Agent Systems',
        'Agent Orchestration',
        'Agno',
        'Google Gemini',
        'OpenAI',
        'Ollama',
        'Prompt Engineering',
        'Scikit-learn',
        'Transformers',
        'Sentence-Transformers',
        'FAISS',
        'NLP'
    ],

    'Data & Analytics': [
        'SQL',
        'Microsoft SQL Server',
        'pandas',
        'NumPy',
        'Matplotlib',
        'Data Analysis',
        'Data Visualization',
        'Machine Learning'
    ],

    'DevOps & Engineering Tools': [
        'Git',
        'GitHub',
        'Docker',
        'Docker Compose',
        'GitHub Actions',
        'Pytest',
        'Prometheus',
        'Grafana',
        'k6'
    ],

    'Core Computer Science': [
        'DBMS',
        'Operating Systems',
        'Software Testing',
        'Complexity Analysis',
        'Load Balancing',
        'Rate Limiting',
        'Circuit Breakers',
        'Health Checks',
        'CI/CD'
    ]
};