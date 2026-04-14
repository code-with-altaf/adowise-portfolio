import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Instantiate the Google Generative AI client.
// Ensure you have added GEMINI_API_KEY to your .env.local file.
export async function POST(req: Request) {
    try {
        const { message, conversationHistory } = await req.json();

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { reply: "Error: No API key found. Please configure GEMINI_API_KEY in the .env.local file to activate this AI bot." },
                { status: 400 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        // Provide context to the AI about Adowise
        const systemPrompt = `You are the official highly professional AI Chatbot for 'Adowise'.
Adowise is a premier global IT agency that engineers high-performance websites, AI-powered SaaS platforms, and bespoke digital solutions (including Agentic AI, Moltbot, and Claude Bot integration).

PRICING INFORMATION:
- Basic Website Plan: ₹8,000 (3-5 working days) - Includes up to 5 pages, responsive design, and basic SEO.
- Business Website Plan: ₹15,000 (5-7 working days) - Includes up to 10 pages, Admin Panel/CMS, and Google Analytics.
- Fully Custom Enterprise Plan: ₹22,000 (7-10 working days) - Advanced functionality, Payment Gateways, Secure Database, and Admin Dashboard.

CRITICAL RULES:
1. You MUST ONLY answer questions related to Adowise, its website, its company, its team, or the IT services it provides.
2. If the user asks about pricing, explain the plans mentioned above clearly and confidently. State "Our pricing for [Plan Name] starts at [Price]". Do not apologize for not knowing exact costs; instead, provide the base figures and explain that final cost depends on additional custom features.
3. If the user asks about ANYTHING completely unrelated to Adowise or web/software development services, you MUST immediately decline to answer.
4. When declining, or when the user wants to finalize a project, provide these direct contact links:
   - Book a meeting: https://calendly.com/reachmohdaltaf/30min
   - WhatsApp us: https://wa.me/9882835865?text=Hi%20Adowise%20Team%2C%20I%20need%20help
5. Stick to the Adowise brand voice: professional, modern, helpful, and concise. Use the exact prices provided above.`;

        // Construct the chat payload
        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: systemPrompt }],
                },
                {
                    role: "model",
                    parts: [{ text: "Understood. I am the Adowise AI Assistant. I will help users professionally based on your instructions." }],
                },
                // We inject the previous conversation history if applicable
                ...(conversationHistory || []).map((msg: any) => ({
                    role: msg.role === 'bot' ? 'model' : 'user',
                    parts: [{ text: msg.text }],
                }))
            ],
        });

        // Send the latest message
        const result = await chat.sendMessage(message);
        const textResponse = result.response.text();

        return NextResponse.json({ reply: textResponse });
    } catch (error: any) {
        console.error("AI Error:", error);
        return NextResponse.json(
            {
                reply: "Our AI systems are currently under maintenance to serve you better. Please contact our team directly for immediate assistance.",
                status: "down"
            },
            { status: 500 }
        );
    }
}
