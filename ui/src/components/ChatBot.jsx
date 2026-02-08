import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Code, Briefcase, FileText, Mail } from 'lucide-react';
import { resumeData } from '../data';
import './ChatBot.css';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [visitedTopics, setVisitedTopics] = useState(new Set());
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Hey! I'm Keerthieswaran. Happy to see you here! Want to check out my work?" }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const topics = {
        about: {
            label: "About Me",
            icon: <User size={16} />,
            keywords: ['about', 'who are you', 'profile', 'background', 'intro'],
            response: "I'm a Gen-AI & SAP BTP specialist. Love building smart stuff that actually helps people! 🚀",
            suggestion: "Want to see my **Skills** or some **Projects**?"
        },
        skills: {
            label: "Skills",
            icon: <Code size={16} />,
            keywords: ['skills', 'tech stack', 'technologies', 'tools', 'expertise'],
            response: "I'm deep into Python, React, LangChain & SAP BTP. Big on RAG & Gen-AI too! 🤖",
            suggestion: "Check my **Projects** or my **Resume**?"
        },
        projects: {
            label: "Projects",
            icon: <Briefcase size={16} />,
            keywords: ['projects', 'work', 'portfolio', 'showcase', 'built'],
            response: "Built everything from AI storytellers to enterprise RAG apps. All focused on real value! 📁",
            suggestion: "Need my **Contact** or want to see more **Skills**?"
        },
        resume: {
            label: "Resume",
            icon: <FileText size={16} />,
            keywords: ['resume', 'cv', 'experience', 'background', 'history'],
            response: "Strong background in SAP & AI. Always focused on high-value cloud solutions. 📄",
            suggestion: "Wanna **Contact** me or see my **Projects**?"
        },
        contact: {
            label: "Contact",
            icon: <Mail size={16} />,
            keywords: ['contact', 'email', 'reach', 'linkedin', 'hire', 'quote'],
            response: "Hit me up at keerthiprathap19@gmail.com or LinkedIn. Always down for new AI/SAP talks! ✉️",
            suggestion: "Anything else? Maybe my **About** or **Skills**?"
        }
    };

    const getRemainingOptions = () => {
        return Object.entries(topics)
            .filter(([id]) => !visitedTopics.has(id))
            .map(([id, topic]) => ({ id, ...topic }));
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (text = input) => {
        if (!text.trim()) return;

        const userMsg = { type: 'user', text: text };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        setTimeout(() => {
            const botResponse = generateResponse(text.toLowerCase());
            setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
        }, 600);
    };

    const generateResponse = (query) => {
        // Find matching topic
        const matchedTopicId = Object.keys(topics).find(id =>
            topics[id].keywords.some(keyword => query.includes(keyword)) ||
            query === topics[id].label.toLowerCase()
        );

        if (matchedTopicId) {
            if (visitedTopics.has(matchedTopicId)) {
                const remaining = getRemainingOptions();
                if (remaining.length > 0) {
                    return `Already shared that! 😊 Want to check out my ${remaining.slice(0, -1).join(', ')}${remaining.length > 1 ? ' or ' : ''}${remaining.slice(-1)}?`;
                }
                return "Think we covered it all! Anything else you'd like to revisit?";
            }

            setVisitedTopics(prev => new Set(prev).add(matchedTopicId));
            const topic = topics[matchedTopicId];
            return `${topic.response}\n\n${topic.suggestion}`;
        }

        // Generic responses
        if (query.includes('hello') || query.includes('hi') || query.includes('hey')) {
            return "Hey there! I'm here to show you around. What's on your mind?";
        }

        if (query.includes('thank')) {
            return "Anytime! Let me know if you need more info.";
        }

        return "I can help with skills, projects, resume, or contact. What's next?";
    };

    const handleOptionClick = (option) => {
        handleSend(option);
    };

    return (
        <div className="chatbot-container">
            <button
                className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <img src="/bot-avatar.png" alt="Bot" className="toggle-avatar" />}
            </button>

            {isOpen && (
                <div className="chatbot-window glass-chat">
                    <div className="chatbot-header">
                        <div className="header-agent">
                            <img src="/bot-avatar.png" alt="Keerthieswaran Bot" className="agent-avatar-img" />
                            <div className="agent-status">
                                <span className="agent-name">Keerthieswaran Bot</span>
                                <span className="status-text">Online</span>
                            </div>
                        </div>
                    </div>

                    <div className="chatbot-messages neon-scroll">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message-wrapper ${msg.type}`}>
                                {msg.type === 'bot' && <Bot size={14} className="bubble-icon" />}
                                <div className={`message-bubble ${msg.type}`}>
                                    {msg.text.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            {i !== msg.text.split('\n').length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {messages[messages.length - 1].type === 'bot' && (
                            <div className="quick-options-grid">
                                {getRemainingOptions().map((option) => (
                                    <button
                                        key={option.id}
                                        className="modern-option"
                                        onClick={() => handleOptionClick(option.label)}
                                    >
                                        {option.icon}
                                        <span>{option.label}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form className="chatbot-input-v2" onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about my work..."
                        />
                        <button type="submit" className="send-btn">
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ChatBot;
