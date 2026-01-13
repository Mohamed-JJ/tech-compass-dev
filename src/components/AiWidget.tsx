"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";

type Message = {
    role: "user" | "ai";
    content: string;
};

const RESPONSES = {
    greeting: [
        "Hello! I'm the Fondex AI Assistant. We design, build, and deliver scalable digital solutions. Are you looking to start a new project or are you an existing client?",
        "Welcome to Fondex IT Solutions! We help businesses transform ideas into reliable, high-performance software. How can I help you today?",
        "Hi there! At Fondex, we architect systems that support long-term growth. Are you here for a new build or support?"
    ],
    contact: [
        "I'll connect you with our team right away. Navigating to the contact section so you can reach us directly...",
        "Let me get you to the right place. Creating a direct line to our team below...",
        "I'm scrolling you down to our contact form so you can speak with a specialist immediately."
    ],
    bug: [
        "To report a bug, please use your dedicated Jira board or email our support team at support@fondex.com for immediate tracking.",
        "The fastest way to resolve an issue is via your Jira backlog or by emailing support@fondex.com directly.",
        "Please flag any bugs on your project's Jira board. You can also email support@fondex.com for urgent blockers."
    ],
    invoice: [
        "Invoices are automatically sent to your registered billing email at the start of each month. Would you like me to connect you with accounts?",
        "You can find all billing documents in your email inbox. They are sent monthly. Need help finding one?",
        "We send invoices to the billing contact on file every month. Let me know if you need to update that email."
    ],
    status: [
        "You can view real-time project status on your client dashboard. If you need a login link, I can direct you to support.",
        "Your project dashboard handles all live updates. Do you have your login credentials handy?",
        "Check your dedicated dashboard for the real-time build status. I can point you to support if you're locked out."
    ],
    client_general: [
        "Welcome back! How can I assist you with your active project today?",
        "Good to see you. What looks like the priority for your project today?",
        "Hello! I'm here to support your active project. What do you need help with?"
    ],
    website_diff: [
        "Great question! We don't just build products — we architect systems. A website is typically informational, while a web app is a scalable digital solution. We specialize in both.",
        "Think of a website as a digital brochure and a web app as a high-performance software tool. We build both with secure, maintainable code.",
        "At Fondex, we believe great software requires strong foundations. Whether it's a site or an app, we engineer it for real-world impact."
    ],
    website_build: [
        "We prioritize clean code and thoughtful architecture. Do you have a specific deadline or budget in mind for your scalable solution?",
        "Our team specializes in end-to-end development. Could you share your timeline or rough budget?",
        "We customize solutions to your challenges. To help us quote you, what is your estimated budget or launch date?"
    ],
    app_build: [
        "We partner closely with clients to build secure, maintainable apps. Are you a startup looking for an MVP, or an enterprise scaling up?",
        "From early-stage startups to growing enterprises, we deliver solutions built to scale. What stage is your project at?",
        "We focus on cloud architecture and system optimization. Tell me, are you building a new MVP or optimizing an existing product?"
    ],
    project_qualify: [
        "I'd love to help route you to the right specialist. Could you tell me a little bit about what you're looking to build (e.g., a mobile app, a marketing site, or a custom platform)?",
        "To connect you with the right architect, what kind of solution do you need? (Mobile App, Dashboard, Website?)",
        "I can fast-track this. Briefly describe what you're building (e.g., 'E-commerce site' or 'SaaS Platform')."
    ],
    pricing: [
        "Pricing depends on the scope. A simple solution might start around $5k, while a full architecture can range from $15k-$50k+. If you can share a rough budget, I can tell you what's feasible.",
        "We focus on value and ROI. Custom builds typically range from $10k to $100k+ depending on complexity. Do you have a budget range in mind?",
        "It's hard to give an exact number without details, but our projects generally start at $5k. Shall I connect you for a custom consultation?"
    ],
    timeline: [
        "Speed is important, but quality is paramount. A robust MVP usually takes 4-8 weeks. Larger enterprise platforms can take 3-6 months. When are you hoping to launch?",
        "We move fast without breaking things. A typical sprint-based build takes about 6 weeks for a V1 release. Do you have a hard deadline?",
        "Most projects go from concept to launch in 4-10 weeks. If you have a specific launch date, we can often work backward to meet it."
    ],
    process: [
        "We believe great software is the result of clear communication. We work in sprints with continuous improvement and regular updates.",
        "Transparency is key. We partner closely with you, providing updates every week and demos every two weeks.",
        "Our process is: Architecture -> Design -> Build -> Test -> Launch. We engineer systems that support long-term growth."
    ],
    team: [
        "We are technology-driven. Our team consists of Senior Software Engineers, Cloud Architects, and Technical Consultants.",
        "You'll work directly with our core team of experts. We don't just write code; we solve business challenges.",
        "Our team specializes in technical consulting and system optimization. You get direct access to the engineers building your product."
    ],
    portfolio: [
        "We've delivered scalable digital solutions for startups and enterprises alike. You can scroll down to see our selected case studies.",
        "Our work speaks for itself. We've built reliable, high-performance software across industries. Check out the 'Selected Projects' section below.",
        "We help businesses transform ideas into reality. I can point you to our case studies section to see our work in action."
    ],
    tech_react_why: [
        "We use React and Next.js because they ensure your solution is high-performance and scalable, while Docker ensures reliability.",
        "React allows for robust interactive UIs, and Next.js provides the SEO and performance you need. It's the standard for modern software.",
        "We choose React for its maintainability and ecosystem—it allows us to build secure, future-proof software for you."
    ],
    tech_stack: [
        "We use a modern stack: React/Next.js, Node/Python, and Cloud Infrastructure. This ensures your software is secure, maintainable, and built to scale.",
        "Our stack is future-proof: TypeScript, Next.js, and Cloud-Native architecture. It supports long-term growth.",
        "We rely on proven engineering practices: TypeScript, Tailwind, and React. It provides the best balance of speed and reliability."
    ],
    tech_redirect: [
        "That's a specific technical requirement! Our engineering team handles those details directly. Let me connect you...",
        "I see you're looking for deep technical specifics. I'll pass you to our lead engineer who can answer that best.",
        "For that level of technical detail, it's best to speak with our dev team. Redirecting you to them now..."
    ],
    fallback: [
        "I'm here to save you time. Are you an existing client looking for support, or are you interested in starting a new project with us?",
        "I want to make sure you get the right help. Are you a new partner or an existing client?",
        "My goal is to route you correctly. Are you looking to build something new, or do you have an active account with us?"
    ]
};

export function AiWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "ai", content: RESPONSES.greeting[0] }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [lastRes, setLastRes] = useState<string>(RESPONSES.greeting[0]); // Track last response to avoid repeats
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const getRandomResponse = (key: keyof typeof RESPONSES) => {
        const options = RESPONSES[key];
        // Filter out the exact last response if possible (and if there are multiple options)
        const availableOptions = options.length > 1
            ? options.filter(opt => opt !== lastRes)
            : options;

        const random = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        setLastRes(random);
        return random;
    };

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg = inputValue.trim();
        setMessages(prev => [...prev, { role: "user", content: userMsg }]);
        setInputValue("");
        setIsTyping(true);

        // Process logic after a "typing" delay
        setTimeout(() => {
            const lowerMsg = userMsg.toLowerCase();
            let aiResponse = "";
            let shouldScrollToContact = false;

            // 1. Strict Contact Handling (Global Priority)
            const contactKeywords = ["contact", "get in touch", "email", "quote", "talk to someone", "hire", "call"];
            const isContactIntent = contactKeywords.some(keyword => lowerMsg.includes(keyword));

            if (isContactIntent) {
                aiResponse = getRandomResponse("contact");
                shouldScrollToContact = true;
            } else {
                // 2. Smart Receptionist Routing

                // Existing Client / Support Flow
                if (lowerMsg.includes("client") || lowerMsg.includes("status") || lowerMsg.includes("bug") || lowerMsg.includes("invoice") || lowerMsg.includes("login")) {
                    if (lowerMsg.includes("bug") || lowerMsg.includes("issue")) {
                        aiResponse = getRandomResponse("bug");
                    } else if (lowerMsg.includes("invoice") || lowerMsg.includes("billing")) {
                        aiResponse = getRandomResponse("invoice");
                    } else if (lowerMsg.includes("status") || lowerMsg.includes("update")) {
                        aiResponse = getRandomResponse("status");
                    } else {
                        aiResponse = getRandomResponse("client_general");
                    }
                }
                // New Project / Services Flow
                else if (lowerMsg.includes("new") || lowerMsg.includes("website") || lowerMsg.includes("app") || lowerMsg.includes("startup") || lowerMsg.includes("build") || lowerMsg.includes("service")) {
                    if (lowerMsg.includes("website") && lowerMsg.match(/what.*difference/)) {
                        aiResponse = getRandomResponse("website_diff");
                    } else if (lowerMsg.includes("website")) {
                        aiResponse = getRandomResponse("website_build");
                    } else if (lowerMsg.includes("app")) {
                        aiResponse = getRandomResponse("app_build");
                    } else {
                        aiResponse = getRandomResponse("project_qualify");
                    }
                }
                // Knowledge Base (Pricing, Timeline, Process, Team, Portfolio)
                else if (lowerMsg.includes("cost") || lowerMsg.includes("price") || lowerMsg.includes("rate") || lowerMsg.includes("budget") || lowerMsg.includes("how much")) {
                    aiResponse = getRandomResponse("pricing");
                }
                else if (lowerMsg.includes("long") || lowerMsg.includes("time") || lowerMsg.includes("week") || lowerMsg.includes("month") || lowerMsg.includes("deadline") || lowerMsg.includes("schedule")) {
                    aiResponse = getRandomResponse("timeline");
                }
                else if (lowerMsg.includes("process") || lowerMsg.includes("work") || lowerMsg.includes("agile") || lowerMsg.includes("scrum") || lowerMsg.includes("steps")) {
                    aiResponse = getRandomResponse("process");
                }
                else if (lowerMsg.includes("team") || lowerMsg.includes("who") || lowerMsg.includes("dev") || lowerMsg.includes("engineer")) {
                    aiResponse = getRandomResponse("team");
                }
                else if (lowerMsg.includes("expert") || lowerMsg.includes("portfolio") || lowerMsg.includes("example") || lowerMsg.includes("case") || lowerMsg.includes("show me")) {
                    aiResponse = getRandomResponse("portfolio");
                }
                // Technical Explanations -> Redirect
                else if (lowerMsg.includes("react") || lowerMsg.includes("nextjs") || lowerMsg.includes("docker") || lowerMsg.includes("tech")) {
                    aiResponse = getRandomResponse("tech_redirect");
                    shouldScrollToContact = true;
                }
                // General / Fallback
                else {
                    aiResponse = getRandomResponse("fallback");
                }
            }

            setIsTyping(false);
            setMessages(prev => [...prev, { role: "ai", content: aiResponse }]);

            if (shouldScrollToContact) {
                setTimeout(() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                }, 1000); // Wait a second so user can read the message
            }
        }, 1200);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {/* Chat Window */}
            {isOpen && (
                <div className="w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 flex flex-col max-h-[500px]">
                    <div className="bg-secondary p-3 flex items-center justify-between flex-shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 flex items-center justify-center shrink-0">
                                <img src="/fondex_logo_clean.png" alt="Fondex" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Fondex AI Assistant</h4>
                                <div className="flex items-center gap-2 mt-0.5">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-white/60 text-xs">Online</span>
                                    </div>
                                    <span className="px-1.5 py-[1px] rounded-[4px] bg-white/10 text-[10px] font-medium text-white/80 border border-white/10 tracking-wide">BETA</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white/60 hover:text-white transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    <div
                        className="h-[350px] bg-gray-50 p-4 overflow-y-auto space-y-4 flex flex-col scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent"
                        data-lenis-prevent
                    >
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                                {msg.role === 'ai' && (
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                                        <Sparkles size={14} className="text-primary" />
                                    </div>
                                )}
                                <div className={`
                                    max-w-[80%] p-3 text-sm border-gray-100 shadow-sm
                                    ${msg.role === 'user'
                                        ? 'bg-primary text-white rounded-2xl rounded-tr-none'
                                        : 'bg-white text-gray-600 border rounded-2xl rounded-tl-none'}
                                `}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                                    <Sparkles size={14} className="text-primary" />
                                </div>
                                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                                    <div className="flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-4 bg-white border-t border-gray-100 flex-shrink-0">
                        <form onSubmit={handleSendMessage} className="relative">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type a message..."
                                className="w-full pl-4 pr-10 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-all text-secondary placeholder:text-gray-400"
                            />
                            <button
                                type="submit"
                                disabled={!inputValue.trim() || isTyping}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send size={14} />
                            </button>
                        </form>
                    </div>
                </div>
            )
            }

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border border-white/10"
            >
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/40 transition-all duration-500" />
                {isOpen ? (
                    <X className="text-white relative z-10" size={24} />
                ) : (
                    <div className="relative z-10">
                        <MessageSquare className="text-white" size={24} />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-secondary" />
                    </div>
                )}
            </button>
        </div >
    );
}
