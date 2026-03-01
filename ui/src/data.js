// Shared data for the portfolio
export const personalInfo = {
    name: "Keerthieswaran",
    roles: ["AI Engineer", "SAP BTP Specialist"],
    email: "keerthiprathap19@gmail.com",
    github: "https://github.com/keerthieswaran19",
    linkedin: "https://www.linkedin.com/in/keerthieswaran-prathaban-87a809273"
};

export const resumeData = {
    skills: [
        { category: "AI & ML", items: ["Generative AI", "LangChain", "RAG", "Python", "PyTorch", "TensorFlow"] },
        { category: "SAP Ecosystem", items: ["SAP BTP", "SAP CAP", "SAP Fiori / UI5", "HANA Cloud"] },
        { category: "Web Development", items: ["React", "Node.js", "Modern CSS", "Framer Motion"] }
    ],
    experience: [
        {
            company: "Nohitatu Technologies",
            role: "AI Developer",
            period: "11/2025 - 03/2026"
        },
        {
            company: "IT Resonance Inc",
            role: "Gen AI with SAP BTP Program",
            period: "04/2025 - 08/2025"
        },
        {
            company: "Williams Lea",
            role: "Infographics & Presentation Design",
            period: "12/2024 - 03/2025"
        }
    ],
    projects: [
        {
            title: "Intelligent Internal Job Mobility Advisor",
            subtitle: "Generative AI & SAP BTP Project",
            description: "AI-driven decision support for employee internal job mobility on SAP BTP.",
            fullDescription: "Developed on SAP BTP using SAP UI5, SAP CAP, and SAP HANA Cloud. Integrated Generative AI to deliver 7 intelligent features including Career Path Advisor, Smart Job Match, and Resume Enhancer.",
            tech: ["SAP BTP", "SAP UI5", "SAP CAP", "Gen AI", "HANA Cloud"],
            featured: true,
            themeColor: "#ffd700", // Gold
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
            video: "https://videos.pexels.com/video-files/4492582/4492582-uhd_2560_1440_24fps.mp4", // AI/Data interface
            features: [
                "Personalized Career Path Advisor",
                "Smart Job Match Scoring",
                "Resume Enhancer & Interview Question Generator",
                "Conversational Job Bot"
            ],
            challenges: "Optimizing prompt engineering and processing real-time enterprise data for job alignment.",
            link: "#"
        },
        {
            title: "AI Story Adventure Builder",
            subtitle: "Generative AI Web Application",
            description: "Full-stack web application for real-time narrative generation using LLMs.",
            fullDescription: "Engineered a React interface integrating LLMs via API for dynamic story generation. Features modular components for hero name, genre, and tone configuration.",
            tech: ["React", "Generative AI", "LLM API", "State Management"],
            featured: true,
            themeColor: "#4cc9f0", // Light Blue
            image: "/ai-story-v2.jpg",
            video: "https://videos.pexels.com/video-files/3209298/3209298-uhd_2560_1440_25fps.mp4", // Abstract digital flow
            features: [
                "Real-time Narrative Generation",
                "Modular Story Configuration",
                "Asynchronous AI Service Integration"
            ],
            challenges: "Ensuring story coherence and genre consistency through optimized prompt engineering.",
            link: "https://adorable-piroshki-7ceada.netlify.app"
        },
        {
            title: "Amazon Interactive Tableau Dashboard",
            subtitle: "Data Analytics & Visualization",
            description: "E-commerce sales and profit analysis dashboard for Amazon India.",
            fullDescription: "Interactive dashboard visualizing Amazon sales and profits worldwide. Includes world maps, stacked bar charts, and sales highlight tables.",
            tech: ["Tableau", "Data Analysis", "SQL", "Visualization"],
            featured: false,
            themeColor: "#ff9900", // Amazon Orange
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            video: "https://videos.pexels.com/video-files/3130182/3130182-uhd_2560_1440_30fps.mp4", // Analytics/Growth
            features: [
                "Interactive World Sales Map",
                "Stacked Bar & Donut Chart Visuals",
                "Sales Highlight & Trend Analysis"
            ],
            challenges: "Exploring and clean large datasets to extract meaningful global sales insights.",
            link: "#"
        },
        {
            title: "Building Chat Tool using Python",
            subtitle: "Real-time Messaging App",
            description: "Instant messaging application supporting text, images, and videos.",
            fullDescription: "Real-time chat tool enabling users to transmit multimedia content. Built with Python and Flask, utilizing Ngrok for public URL tunneling.",
            tech: ["Python 3.9", "Flask", "Ngrok", "Twilio"],
            featured: false,
            themeColor: "#25d366", // WhatsApp Green
            image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800",
            video: "https://v1.bg.ot7.me/static/backgrounds/particles.mp4", // Mobile/Digital
            features: [
                "Real-time Multimedia Messaging",
                "Twilio WhatsApp API Integration",
                "Flask-based Web Application"
            ],
            challenges: "Setting up secure webhooks and handling diverse multimedia content types.",
            link: "#"
        }
    ],
    certifications: [
        { name: "SAP Certified Associate - Backend Developer (CAP)" },
        { name: "DeepLearning.AI - Generative AI with LLMs" }
    ]
};

export const allShowcaseProjects = [
    {
        title: "Intelligent Internal Job Mobility Advisor",
        subtitle: "Generative AI & SAP BTP",
        description: "AI-driven decision support for employee internal job mobility on SAP BTP with 7 intelligent features.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        tech: ["SAP BTP", "SAP UI5", "Gen AI", "HANA Cloud"],
        status: "Completed",
        themeColor: "#ffd700"
    },
    {
        title: "AI Story Adventure Builder",
        subtitle: "Generative AI Web App",
        description: "Full-stack web application for real-time narrative generation using LLMs with modular configuration.",
        image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=800",
        tech: ["React", "Gen AI", "LLM API"],
        status: "Completed",
        themeColor: "#4cc9f0"
    },
    {
        title: "Amazon Interactive Tableau Dashboard",
        subtitle: "Data Analytics & Visualization",
        description: "E-commerce sales and profit analysis dashboard for Amazon India with interactive maps.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        tech: ["Tableau", "SQL", "Data Analysis"],
        status: "Completed",
        themeColor: "#ff9900"
    },
    {
        title: "Building Chat Tool using Python",
        subtitle: "Real-time Messaging",
        description: "Instant messaging application supporting text, images, and videos via Twilio WhatsApp API.",
        image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800",
        tech: ["Python", "Flask", "Twilio"],
        status: "Completed",
        themeColor: "#25d366"
    },
    {
        title: "CRM Workflow Automation Engine",
        subtitle: "n8n & AI Integration",
        description: "Automated CRM pipelines using n8n to cut manual data processing by 60% with intelligent routing.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        tech: ["n8n", "CRM", "Automation"],
        status: "Completed",
        themeColor: "#e74c3c"
    },
    {
        title: "RAG Task Management System",
        subtitle: "AI-Powered Retrieval",
        description: "Context-aware task management powered by Retrieval-Augmented Generation for semantic search.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        tech: ["RAG", "LangChain", "Python"],
        status: "Completed",
        themeColor: "#9b59b6"
    },
    {
        title: "Power BI Sales Intelligence",
        subtitle: "Business Intelligence",
        description: "Integrated Power BI dashboards with Salesforce, TCS ION, and OMS for real-time business insights.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        tech: ["Power BI", "Salesforce", "SQL"],
        status: "Completed",
        themeColor: "#f39c12"
    },
    {
        title: "Corporate Infographics Suite",
        subtitle: "Design & Communication",
        description: "Professional infographics and presentation materials for corporate branding and storytelling.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
        tech: ["Figma", "Adobe Suite", "Branding"],
        status: "Completed",
        themeColor: "#1abc9c"
    },
    {
        title: "Portfolio Website",
        subtitle: "React & Framer Motion",
        description: "Premium dark-themed personal portfolio with 3D elements, animated backgrounds, and ChatBot integration.",
        image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&q=80&w=800",
        tech: ["React", "Framer Motion", "CSS"],
        status: "Completed",
        themeColor: "#ffffff"
    },
    {
        title: "Client Data Governance Platform",
        subtitle: "Security & Compliance",
        description: "Built secure data handling protocols for healthcare claims processing with privacy-first architecture.",
        image: "/data-governance.png",
        tech: ["Data Privacy", "Claims Processing", "Compliance"],
        status: "Completed",
        themeColor: "#2ecc71"
    },
    {
        title: "Enterprise Knowledge Agent",
        subtitle: "Agentic AI System",
        description: "Autonomous agent for deep organizational knowledge retrieval using graph databases and advanced RAG.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
        tech: ["Graph DB", "RAG", "LangChain"],
        status: "Upcoming",
        themeColor: "#e91e63"
    },
    {
        title: "SAP BTP Automation Suite",
        subtitle: "ML-Powered Workflows",
        description: "Comprehensive suite leveraging machine learning to automate complex SAP enterprise workflows.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        tech: ["SAP BTP", "ML", "Automation"],
        status: "Upcoming",
        themeColor: "#00bcd4"
    },
    {
        title: "Predictive Analytics Engine",
        subtitle: "Forecasting Platform",
        description: "Real-time data processing engine for e-commerce trends forecasting and business intelligence.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
        tech: ["Python", "ML", "Data Pipelines"],
        status: "Upcoming",
        themeColor: "#ff5722"
    }
];

export const companiesTimeline = [
    {
        company: "Nohitatu Technologies",
        role: "AI Developer",
        period: "11/2025 - 03/2026",
        color: "#ffd700",
        type: "Full-time",
        description: "Spearheaded AI-driven workflow automation and RAG-based intelligent retrieval systems for CRM platforms.",
        highlights: ["n8n Automation", "RAG Systems", "Data Security"]
    },
    {
        company: "IT Resonance Inc",
        role: "Gen AI / SAP BTP",
        period: "04/2025 - 08/2025",
        color: "#4cc9f0",
        type: "Internship",
        description: "Researched and developed innovative Gen AI use cases for enterprise applications on SAP BTP.",
        highlights: ["SAP CAP", "Prompt Engineering", "HANA Cloud"]
    },
    {
        company: "Williams Lea",
        role: "Infographics Design",
        period: "12/2024 - 03/2025",
        color: "#ff9900",
        type: "Internship",
        description: "Created professional infographics and impactful presentation materials for corporate communication.",
        highlights: ["Branding", "Visual Design", "Storytelling"]
    },
    {
        company: "Access Healthcare",
        role: "Asst Client Partner",
        period: "07/2022 - 06/2023",
        color: "#25d366",
        type: "Full-time",
        description: "Managed client data with privacy protocols and processed healthcare claims with accurate flows.",
        highlights: ["Claims Processing", "Risk Management", "Client Relations"]
    },
    {
        company: "Transteel Seating Technologies",
        role: "Consultant / BI",
        period: "08/2021 - 02/2022",
        color: "#9d4edd",
        type: "Full-time",
        description: "Collaborated with stakeholders and integrated Power BI with Salesforce and OMS for business intelligence.",
        highlights: ["Power BI", "Salesforce", "Data Integration"]
    }
];

export const certificationsDetails = [
    {
        name: "SAP Certified Associate",
        issuer: "SAP",
        date: "2024",
        type: "Backend Developer (CAP)",
        badge: "🥇",
        description: "Certified in SAP Cloud Application Programming model for building enterprise-grade backend services.",
        credentialId: "SAP-CAP-2024"
    },
    {
        name: "Generative AI with LLMs",
        issuer: "DeepLearning.AI",
        date: "2024",
        type: "Specialization",
        badge: "🎓",
        description: "Comprehensive specialization covering LLM training, fine-tuning, and deployment strategies.",
        credentialId: "DLAI-GENAI-2024"
    },
    {
        name: "Cloud Architecture Foundations",
        issuer: "AWS",
        date: "2023",
        type: "Cloud Computing",
        badge: "☁️",
        description: "Foundation-level certification in AWS cloud infrastructure, services, and architecture best practices.",
        credentialId: "AWS-CAF-2023"
    },
    {
        name: "Python for Data Science",
        issuer: "IBM",
        date: "2023",
        type: "Data Science",
        badge: "🐍",
        description: "Applied Python programming for data analysis, visualization, and machine learning pipelines.",
        credentialId: "IBM-PDS-2023"
    },
    {
        name: "Power BI Data Analytics",
        issuer: "Microsoft",
        date: "2022",
        type: "Business Intelligence",
        badge: "📊",
        description: "Professional certification in creating interactive dashboards and data-driven business reports.",
        credentialId: "MS-PBI-2022"
    }
];
