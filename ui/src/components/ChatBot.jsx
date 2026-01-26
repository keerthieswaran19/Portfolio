import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { resumeData } from '../data';
import './ChatBot.css';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hello! I am Keerthieswaran\'s Intelligent Freelance Assistant. Ready to build something extraordinary?' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const quickOptions = [
        "How can you help my business?",
        "Show me AI solutions",
        "Request a Quote / Project",
        "Your tech stack"
    ];

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
            const response = generateResponse(text.toLowerCase());
            setMessages(prev => [...prev, { type: 'bot', text: response }]);
        }, 800);
    };

    const handleOptionClick = (option) => {
        handleSend(option);
    };

    const generateResponse = (query) => {
        if (query.includes('business') || query.includes('help')) {
            return "Keerthieswaran specializes in accelerating business growth using Generative AI and SAP BTP. He can automate your workflows, build custom AI chatbots, or design enterprise-grade cloud architectures.";
        }
        if (query.includes('solutions') || query.includes('ai')) {
            return "From RAG-based document intelligence to AI Story builders, he creates tools that don't just 'exist'—they provide real ROI. Check the 'Featured Projects' section for more!";
        }
        if (query.includes('quote') || query.includes('project') || query.includes('hire')) {
            return "Great! To discuss a project, you can email directly at keerthiprathap19@gmail.com or connect via LinkedIn. He usually responds within 24 hours.";
        }
        if (query.includes('stack') || query.includes('tech')) {
            return "The core stack includes React, Python, LangChain, SAP BTP (CAP/UI5), and HANA Cloud. He also leverages Antigravity AI for rapid development.";
        }
        if (query.includes('hello') || query.includes('hi')) {
            return "Hello! I'm here to help you understand how Keerthieswaran can provide high-value tech solutions for your next project.";
        }

        return "I can help with details on AI integration, SAP consultancy, or starting a new project. What would you like to explore?";
    };

    return (
        <div className="chatbot-container">
            <button
                className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Bot size={28} />}
            </button>

            {isOpen && (
                <div className="chatbot-window glass-chat">
                    <div className="chatbot-header">
                        <div className="header-agent">
                            <Bot size={20} className="agent-icon" />
                            <div className="agent-status">
                                <span className="agent-name">Antigravity Agent</span>
                                <span className="status-text">Active Now</span>
                            </div>
                        </div>
                    </div>

                    <div className="chatbot-messages neon-scroll">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message-wrapper ${msg.type}`}>
                                {msg.type === 'bot' && <Bot size={14} className="bubble-icon" />}
                                <div className={`message-bubble ${msg.type}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {messages[messages.length - 1].type === 'bot' && (
                            <div className="quick-options-grid">
                                {quickOptions.map((option, idx) => (
                                    <button
                                        key={idx}
                                        className="modern-option"
                                        onClick={() => handleOptionClick(option)}
                                    >
                                        {option}
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
                            placeholder="Ask about AI services..."
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
