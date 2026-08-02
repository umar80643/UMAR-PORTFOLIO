export const projects = [
    {
        title: 'L7 Load Balancer',
        tag: 'FLAGSHIP · SYSTEMS',
        desc: 'Production-grade Layer 7 HTTP load balancer with multiple routing strategies, resilience mechanisms and observability.',
        stack: [
            'Python',
            'AsyncIO',
            'AioHTTP',
            'Docker',
            'Prometheus',
            'Grafana'
        ],
        points: [
            'Round Robin, Least Connections, Weighted RR, IP Hash & Power of Two Choices',
            'Health checks, circuit breaker, retries, rate limiting & sticky sessions',
            'REST APIs plus Prometheus/Grafana observability'
        ]
    },

    {
        title: 'Plagiarism & AI-Content Detector',
        tag: 'AI · BACKEND',
        desc: 'Production-style plagiarism and AI-text detection platform with semantic retrieval, vector search and a decoupled FastAPI + Streamlit architecture.',
        stack: [
            'Python',
            'FastAPI',
            'Streamlit',
            'FAISS',
            'Scikit-learn',
            'Transformers',
            'Docker'
        ],
        points: [
            'Pluggable TF-IDF + LSA and Sentence-Transformers embedding architecture with optional cross-encoder reranking',
            '3-tier AI-text detection pipeline: heuristic, Scikit-learn classifier and fine-tuned Transformer',
            'FAISS vector search with incremental corpus updates, API-key authentication and rate limiting'
        ]
    },

    {
        title: 'Twitter Sentiment Analysis',
        tag: 'MACHINE LEARNING',
        desc: 'End-to-end sentiment prediction system trained on the 1.6M-tweet Sentiment140 dataset.',
        stack: [
            'Python',
            'Scikit-learn',
            'NLTK',
            'Streamlit'
        ],
        points: [
            'Compared Naive Bayes, Logistic Regression and Linear SVM',
            '79.17% accuracy with Logistic Regression + TF-IDF',
            'Batch prediction, confidence scores, confusion matrix and ROC/PR curves'
        ]
    },

    {
        title: 'AI Health & Fitness Planner',
        tag: 'AI APPLICATION',
        desc: 'Modular health and fitness planning application with deterministic calculation modules and Gemini-powered responses.',
        stack: [
            'Python',
            'Streamlit',
            'Gemini API',
            'Git'
        ],
        points: [
            'Reusable BMI, BMR and TDEE modules with validation',
            'Structured Gemini REST API integration',
            'OOP, SOLID principles and separation of concerns'
        ]
    }
];


export const skills = {
    Languages: [
        'Java',
        'Python',
        'SQL',
        'JavaScript',
        'HTML/CSS'
    ],

    Engineering: [
        'Data Structures & Algorithms',
        'OOP',
        'DBMS',
        'Operating Systems',
        'Software Testing',
        'REST APIs'
    ],

    Frameworks: [
        'React',
        'Node.js',
        'FastAPI',
        'Streamlit'
    ],

    DataML: [
        'pandas',
        'NumPy',
        'Matplotlib',
        'Scikit-learn',
        'Transformers',
        'FAISS',
        'Joblib'
    ],

    Tools: [
        'Git',
        'GitHub',
        'VS Code',
        'PyCharm',
        'IntelliJ',
        'Docker',
        'Prometheus',
        'Grafana'
    ]
};