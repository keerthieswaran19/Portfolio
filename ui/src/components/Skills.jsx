import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cpu, Cloud, Code, Database, Terminal, BarChart, Brain, Layers,
    Activity, Server
} from 'lucide-react';
import './Skills.css';

const skillsData = [
    {
        id: 'rag',
        title: 'RAG Systems',
        icon: Brain,
        description: 'Retrieval Augmented Generation',
        content: {
            overview: 'Designed high-performance RAG pipelines combining vector search with LLM reasoning.',
            points: [
                'Implemented document ingestion & chunking strategies',
                'Hybrid search (Vector + Keyword) integration',
                'Grounded LLM outputs with real-time enterprise data',
                'Context-aware retrieval optimization'
            ],
            tags: ['LangChain', 'Pinecone', 'OpenAI', 'Python']
        }
    },
    {
        id: 'sap',
        title: 'SAP BTP',
        icon: Cloud,
        description: 'Cloud Native Application Development',
        content: {
            overview: 'End-to-end development on SAP Business Technology Platform.',
            points: [
                'Built full-stack CAP (Cloud Application Programming) services',
                'Developed SAP UI5/Fiori frontends',
                'Managed BTP Security, Destinations & Connectivity',
                'HANA Cloud database modeling & integration'
            ],
            tags: ['CAP', 'UI5', 'HANA', 'BTP']
        }
    },
    {
        id: 'genai',
        title: 'Generative AI',
        icon: Cpu,
        description: 'Next-Gen Intelligent Features',
        content: {
            overview: 'Building intelligent agents and content generation systems.',
            points: [
                'Automated content insight generation',
                'Custom fine-tuning of small language models',
                'Agentic workflows for autonomous tasks',
                'Responsible AI implementation (Guardrails)'
            ],
            tags: ['GPT-4', 'Llama 3', 'HuggingFace', 'Agents']
        }
    },
    {
        id: 'python',
        title: 'Python Core',
        icon: Code,
        description: 'Backend Logic & AI Orchestration',
        content: {
            overview: 'Robust Python development for backend and AI logic.',
            points: [
                'FastAPI/Flask backend development',
                'Data processing automation scripts',
                'Asynchronous task handling (Celery)',
                'Modular, maintainable code architecture'
            ],
            tags: ['FastAPI', 'Pandas', 'NumPy', 'AsyncIO']
        }
    },
    {
        id: 'llm',
        title: 'LLMs',
        icon: Layers,
        description: 'Large Language Model Integration',
        content: {
            overview: 'Deep expertise in integrating and optimizing LLMs.',
            points: [
                'Context window optimization',
                'Prompt caching and latency reduction',
                'Structured output generation (JSON mode)',
                'Model evaluation & A/B testing'
            ],
            tags: ['Prompting', 'Tokens', 'Embeddings', 'Fine-tuning']
        }
    },
    {
        id: 'sql',
        title: 'Data & SQL',
        icon: Database,
        description: 'Database Design & Optimization',
        content: {
            overview: 'Efficient data modeling and complex querying.',
            points: [
                'Complex joins and aggregations',
                'Query performance optimization',
                'Relational schema design',
                'Data integrity and migration strategies'
            ],
            tags: ['PostgreSQL', 'HANA', 'MySQL', 'Optimization']
        }
    },
    {
        id: 'viz',
        title: 'Visualization',
        icon: BarChart,
        description: 'Data Storytelling & Dashboards',
        content: {
            overview: 'Transforming raw data into actionable visual insights.',
            points: [
                'Interactive dashboards in Tableau/Power BI',
                'User-centric visual hierarchy',
                'Real-time data visualization components',
                'Cross-platform reporting solutions'
            ],
            tags: ['Tableau', 'Power BI', 'D3.js', 'Charts']
        }
    },
    {
        id: 'ml',
        title: 'Machine\nLearning (ML)',
        icon: Activity,
        description: 'Predictive Modeling & Analytics',
        content: {
            overview: 'Building robust predictive models from structured data.',
            points: [
                'Built predictive models using structured and semi-structured data',
                'Performed data preprocessing, feature engineering, and model training',
                'Applied supervised and unsupervised learning techniques',
                'Evaluated models using appropriate performance metrics',
                'Used ML outputs to support intelligent application decisions'
            ],
            tags: ['Scikit-learn', 'XGBoost', 'Pandas', 'Classification']
        }
    },
    {
        id: 'dl',
        title: 'Deep\nLearning (DL)',
        icon: Brain,
        description: 'Neural Networks & Complex Patterns',
        content: {
            overview: 'Advanced neural network architectures for complex data.',
            points: [
                'Worked with neural network architectures for complex data patterns',
                'Applied deep learning concepts for image and text-based use cases',
                'Designed and trained models using multiple hidden layers',
                'Tuned hyperparameters to improve model accuracy and stability',
                'Integrated DL insights into AI-driven applications'
            ],
            tags: ['TensorFlow', 'PyTorch', 'CNNs', 'Transformers']
        }
    }
];

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);
    const scrollContainerRef = React.useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="section skills-section" id="skills">
            <div className="container">
                <motion.div
                    className="skills-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Technical Expertise</h2>
                    <p className="section-subtitle">Click on a node to explore my capabilities</p>
                </motion.div>

                <div className="skills-scroll-wrapper">
                    <button className="scroll-btn left" onClick={() => scroll('left')}>&lt;</button>

                    <div className="skills-horizontal-container" ref={scrollContainerRef}>
                        <div className="skills-track">
                            {skillsData.map((skill, index) => {
                                const Icon = skill.icon;
                                const isActive = selectedSkill.id === skill.id;

                                return (
                                    <div key={skill.id} className="skill-node-wrapper">
                                        {/* Visual Connector Line (CSS controls display:none for first-child) */}
                                        <div className="node-line"></div>

                                        <motion.div
                                            className={`skill-node ${isActive ? 'active' : ''}`}
                                            onClick={() => setSelectedSkill(skill)}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Icon size={24} />
                                            <span className="skill-node-label">
                                                {skill.title.split('\n').map((line, i) => (
                                                    <React.Fragment key={i}>
                                                        {line}
                                                        {i < skill.title.split('\n').length - 1 && <br />}
                                                    </React.Fragment>
                                                ))}
                                            </span>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <button className="scroll-btn right" onClick={() => scroll('right')}>&gt;</button>
                </div>

                <div className="skill-detail-panel">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedSkill.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="detail-content"
                        >
                            <div className="detail-header">
                                <div className="detail-icon-large">
                                    {React.createElement(selectedSkill.icon, { size: 48 })}
                                </div>
                                <div>
                                    <h3 className="detail-title">{selectedSkill.title}</h3>
                                    <p className="detail-subtitle">{selectedSkill.description}</p>
                                </div>
                            </div>

                            <div className="detail-body">
                                <p className="detail-overview">{selectedSkill.content.overview}</p>
                                <div className="detail-points-grid">
                                    {selectedSkill.content.points.map((point, idx) => (
                                        <div key={idx} className="detail-point">
                                            <span className="point-bullet">▹</span>
                                            {point}
                                        </div>
                                    ))}
                                </div>
                                <div className="detail-tags">
                                    {selectedSkill.content.tags.map((tag, idx) => (
                                        <span key={idx} className="tech-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default Skills;
