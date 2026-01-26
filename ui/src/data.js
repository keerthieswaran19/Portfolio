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
