"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles, Send, X, MessageSquareText, Star } from "lucide-react";
import ReactMarkdown from "react-markdown";

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: "bot" | "user"; text: string }[]>([]);
    const [input, setInput] = useState("");
    const [showGreeting, setShowGreeting] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [isServiceDown, setIsServiceDown] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const playNotificationSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(e => console.log("Audio play blocked by browser:", e));
        }
    };

    useEffect(() => {
        // Initial setup for greeting sound
        if (!isOpen && messages.length === 0) {
            const timer = setTimeout(() => {
                setShowGreeting(true);
                const firstMsg = { role: "bot" as const, text: "Hi there! 👋 I am the Adowise AI assistant. How can I help you today?" };
                setMessages([firstMsg]);
                playNotificationSound();
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [isOpen, messages.length]);

    useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "unset";
            document.body.style.overflow = "unset";
        }
        return () => {
            document.documentElement.style.overflow = "unset";
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    useEffect(() => {
        // Auto scroll down when new message is added
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isTyping) return;

        // Add user message
        const userMessage = { role: "user" as const, text: input };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput("");
        setIsTyping(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: input,
                    conversationHistory: messages
                })
            });

            const data = await res.json();
            if (res.ok) {
                setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
                playNotificationSound();
            } else {
                if (data.status === "down") {
                    setIsServiceDown(true);
                }
                setMessages((prev) => [...prev, { role: "bot", text: data.reply || "Connection error." }]);
                playNotificationSound();
            }
        } catch (error) {
            setMessages((prev) => [...prev, { role: "bot", text: "Oops, network issue while reaching the AI." }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="fixed bottom-24 right-5 z-[9999] flex flex-col items-end">

            {/* Auto-greeting bubble when closed */}
            <AnimatePresence>
                {!isOpen && showGreeting && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="mb-4 rounded-3xl rounded-br-none bg-white/70 dark:bg-black/40 backdrop-blur-xl p-5 text-gray-900 dark:text-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] w-72 cursor-pointer relative transition-all duration-300 border border-white/40 dark:border-gray-700/50 hover:shadow-[0_15px_45px_-10px_rgba(0,0,0,0.4)]"
                        onClick={() => {
                            setIsOpen(true);
                            setShowGreeting(false);
                        }}
                    >
                        <button
                            className="absolute top-2 right-3 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowGreeting(false);
                            }}
                            aria-label="Dismiss Greeting"
                        >
                            <X size={18} />
                        </button>
                        <div className="flex gap-3 items-start">
                            <div className="h-10 w-10 flex items-center justify-center shrink-0 rounded-full bg-white/50">
                                <Sparkles size={22} />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Adowise Assistant</h4>
                                <p className="text-[15px] leading-relaxed font-semibold">How can I help you today? 👋</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-4 w-[350px] overflow-hidden rounded-[2rem] bg-white/80 dark:bg-gray-dark/80 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-white/50 dark:border-gray-800/50 flex flex-col h-[440px] max-h-[70vh]"
                    >
                        {/* Header */}
                        <div className="bg-[#ACBBFB] p-4 flex justify-between items-center text-gray-900 border-b border-[#ACBBFB]/80">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-white border border-black/20 flex items-center justify-center text-black shadow-sm relative">
                                    <Sparkles size={22} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Adowise {isServiceDown ? "Support" : "AI Bot"}</h3>
                                    <div className="flex items-center gap-1">
                                        <span className={`w-2 h-2 rounded-full ${isServiceDown ? "bg-orange-500 animate-pulse" : "bg-green-500"}`}></span>
                                        <p className="text-xs text-gray-700 font-medium">{isServiceDown ? "Manual Mode" : "Online"}</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-white/30 text-gray-700 hover:text-black rounded-full p-1.5 transition-colors"
                                aria-label="Close Chat"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div
                            className="flex-1 overflow-y-auto p-5 space-y-6 bg-gray-50/30 dark:bg-black/10 no-scrollbar"
                            data-lenis-prevent
                        >
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-[85%] rounded-[1.5rem] px-5 py-3 text-[15px] leading-relaxed shadow-sm border transition-all duration-300 break-words ${msg.role === "user"
                                        ? "bg-gradient-to-br from-[#ACBBFB] to-[#8da0f8] text-gray-900 font-medium rounded-br-none border-white/40 whitespace-pre-wrap"
                                        : "bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-100 rounded-bl-none border-white/60 dark:border-gray-700/60 backdrop-blur-sm shadow-md markdown-content"
                                        }`}>
                                        {msg.role === "user" ? (
                                            msg.text
                                        ) : (
                                            <div className="space-y-2 markdown-content">
                                                <ReactMarkdown>{msg.text}</ReactMarkdown>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />

                            {/* Failover / Backup Buttons */}
                            {isServiceDown && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex flex-col gap-3 p-2"
                                >
                                    <p className="text-[11px] text-gray-500 uppercase font-bold tracking-widest text-center mb-1">Quick Contact Options</p>
                                    <a
                                        href="https://wa.me/9882835865?text=Hi%20Adowise%20Team%2C%20I%20need%20help"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-3 rounded-xl font-bold shadow-md hover:scale-[1.02] transition-transform active:scale-95"
                                    >
                                        <MessageSquareText size={20} />
                                        Chat on WhatsApp
                                    </a>
                                    <a
                                        href="https://calendly.com/infomohdaftab/30min"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 bg-primary text-white py-3 rounded-xl font-bold shadow-md hover:scale-[1.02] transition-transform active:scale-95"
                                    >
                                        <Sparkles size={18} />
                                        Book a 1:1 Meeting
                                    </a>
                                </motion.div>
                            )}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="max-w-[85%] rounded-2xl px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none shadow-sm border border-gray-100 dark:border-gray-700 flex items-center space-x-1">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-3 bg-white dark:bg-gray-dark border-t border-gray-100 dark:border-gray-800">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex items-center gap-2 relative"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask anything..."
                                    className="w-full rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-2 pr-12 text-sm focus:border-primary focus:outline-none dark:text-white"
                                />
                                <button
                                    type="submit"
                                    disabled={isTyping}
                                    className="absolute right-1 top-1 bottom-1 flex items-center justify-center rounded-full bg-[#ACBBFB] p-2 text-gray-900 hover:bg-[#8da0f8] transition-colors disabled:opacity-50"
                                    aria-label="Send Message"
                                >
                                    <Send size={16} className="-ml-0.5" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            {!isOpen && (
                <button
                    onClick={() => {
                        setIsOpen(true);
                        setShowGreeting(false);
                    }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ACBBFB] text-gray-900 transition-all relative overflow-hidden group"
                    aria-label="Open Chat"
                >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent translate-y-full group-hover:translate-y-[-100%] transition-transform duration-1000"></div>

                    {/* Notification Dot */}
                    {showGreeting && <span className="absolute top-1 right-1 h-3.5 w-3.5 rounded-full bg-red-500 border-2 border-[#ACBBFB] z-10"></span>}

                    <Sparkles
                        size={32}
                        strokeWidth={1}
                        className="relative z-10 group-hover:scale-110 transition-transform duration-300 text-black"
                    />
                </button>
            )}
            {/* Hidden Audio Element */}
            <audio ref={audioRef} src="/sound.mp3" preload="auto" />
        </div>
    );
};

export default ChatBot;
