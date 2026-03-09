import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { getAdminAuth } from "@/lib/auth";

// Blog content templates based on common Adowise topics
const blogContents: Record<string, { paragraph: string; content: string }> = {
    // Generic content generator based on title keywords
};

function generateBlogContent(title: string): { paragraph: string; content: string } {
    const lowerTitle = title.toLowerCase();

    // AI / Artificial Intelligence topics
    if (lowerTitle.includes("ai") || lowerTitle.includes("artificial intelligence") || lowerTitle.includes("machine learning")) {
        return {
            paragraph: `Artificial Intelligence is revolutionizing every industry, from healthcare to finance. In this comprehensive guide, we explore how AI technologies are reshaping the digital landscape and what businesses need to know to stay ahead of the curve. Whether you're a startup or an enterprise, understanding AI's potential is no longer optional — it's essential for survival in the modern market.`,
            content: `<h2>The AI Revolution Is Here</h2>
<p>Artificial Intelligence has moved beyond the realm of science fiction into practical, everyday business applications. From chatbots that handle customer service to algorithms that predict market trends, AI is transforming how we work, live, and interact with technology.</p>

<h3>Why AI Matters for Your Business</h3>
<p>In today's competitive landscape, businesses that leverage AI gain a significant advantage. Here's why:</p>
<ul>
<li><strong>Automation of repetitive tasks</strong> — Free your team to focus on creative and strategic work</li>
<li><strong>Data-driven decision making</strong> — Extract actionable insights from massive datasets</li>
<li><strong>Personalized customer experiences</strong> — Deliver tailored content and recommendations at scale</li>
<li><strong>Predictive analytics</strong> — Anticipate market trends and customer behavior before they happen</li>
</ul>

<h3>Key AI Technologies to Watch</h3>
<p>The AI ecosystem is vast, but several technologies stand out for their transformative potential:</p>

<h4>1. Natural Language Processing (NLP)</h4>
<p>NLP enables machines to understand, interpret, and generate human language. Applications range from sentiment analysis and content generation to sophisticated chatbots that can hold meaningful conversations.</p>

<h4>2. Computer Vision</h4>
<p>Computer vision allows machines to interpret visual information from the world. This technology powers everything from autonomous vehicles to medical imaging diagnostics.</p>

<h4>3. Generative AI</h4>
<p>Perhaps the most exciting development in recent years, generative AI can create text, images, code, and even music. Tools like GPT and DALL-E have demonstrated the creative potential of AI systems.</p>

<h3>Getting Started with AI</h3>
<p>Implementing AI doesn't require a massive budget or a team of data scientists. Here are practical steps to begin:</p>
<ol>
<li>Identify processes that could benefit from automation</li>
<li>Start with pre-built AI solutions and APIs</li>
<li>Collect and organize your data</li>
<li>Experiment with small pilot projects</li>
<li>Measure results and iterate</li>
</ol>

<blockquote>
<p>"The question is not whether AI will transform your industry — it's whether you'll be the one leading that transformation or playing catch-up."</p>
</blockquote>

<h3>The Future of AI</h3>
<p>As AI continues to evolve, we can expect even more groundbreaking applications. Edge AI, quantum machine learning, and autonomous systems are just a few areas poised for explosive growth. The businesses that invest in AI capabilities today will be the leaders of tomorrow.</p>

<p>At Adowise, we help businesses harness the power of AI to drive growth, efficiency, and innovation. Whether you need a custom AI solution or want to integrate existing tools, our team of experts is here to guide your journey.</p>`
        };
    }

    // Web Development topics
    if (lowerTitle.includes("web") || lowerTitle.includes("next.js") || lowerTitle.includes("nextjs") || lowerTitle.includes("react") || lowerTitle.includes("frontend") || lowerTitle.includes("website")) {
        return {
            paragraph: `Modern web development has evolved dramatically in recent years. With frameworks like Next.js leading the charge, building fast, SEO-friendly, and scalable web applications has never been more accessible. In this article, we dive deep into the latest web development trends and best practices that every developer and business owner should know.`,
            content: `<h2>The Modern Web Development Landscape</h2>
<p>The web development ecosystem is constantly evolving, with new tools, frameworks, and methodologies emerging at a rapid pace. Understanding the current landscape is crucial for making informed technology decisions.</p>

<h3>Why Next.js Is Leading the Pack</h3>
<p>Next.js has emerged as the go-to framework for building modern web applications. Here's what makes it special:</p>
<ul>
<li><strong>Server-Side Rendering (SSR)</strong> — Deliver lightning-fast initial page loads with pre-rendered content</li>
<li><strong>Static Site Generation (SSG)</strong> — Build blazing-fast static pages that scale effortlessly</li>
<li><strong>API Routes</strong> — Build full-stack applications without a separate backend</li>
<li><strong>Image Optimization</strong> — Automatic image optimization for better performance</li>
<li><strong>TypeScript Support</strong> — First-class TypeScript integration for type-safe code</li>
</ul>

<h3>Essential Web Development Best Practices</h3>

<h4>1. Performance First</h4>
<p>Users expect web pages to load in under 3 seconds. Optimize your assets, leverage caching, use lazy loading, and minimize JavaScript bundles to deliver the best possible experience.</p>

<h4>2. Mobile-First Design</h4>
<p>With over 60% of web traffic coming from mobile devices, designing for mobile first is no longer optional. Use responsive design principles and test across multiple devices.</p>

<h4>3. Accessibility (a11y)</h4>
<p>Building accessible websites isn't just good practice — it's a legal requirement in many jurisdictions. Use semantic HTML, proper ARIA labels, and ensure keyboard navigation works flawlessly.</p>

<h4>4. SEO Optimization</h4>
<p>A beautiful website means nothing if nobody can find it. Implement proper meta tags, structured data, sitemaps, and ensure your content is crawlable by search engines.</p>

<h3>The Tech Stack We Recommend</h3>
<p>After years of building web applications, here's the stack we've found delivers the best results:</p>
<ol>
<li><strong>Next.js</strong> — For the frontend framework</li>
<li><strong>TypeScript</strong> — For type safety and better developer experience</li>
<li><strong>Tailwind CSS</strong> — For rapid UI development</li>
<li><strong>MongoDB</strong> — For flexible data storage</li>
<li><strong>Vercel</strong> — For seamless deployment and hosting</li>
</ol>

<blockquote>
<p>"Great web development isn't just about writing code — it's about crafting experiences that delight users and drive business results."</p>
</blockquote>

<h3>Looking Ahead</h3>
<p>The future of web development is exciting. Server components, edge computing, and AI-powered development tools are changing the game. Stay curious, keep learning, and never stop building.</p>

<p>At Adowise, we specialize in building world-class web applications using cutting-edge technologies. From concept to deployment, we deliver digital experiences that make an impact.</p>`
        };
    }

    // SaaS / Startup topics
    if (lowerTitle.includes("saas") || lowerTitle.includes("startup") || lowerTitle.includes("business") || lowerTitle.includes("growth") || lowerTitle.includes("company")) {
        return {
            paragraph: `Building a successful SaaS business requires more than just great technology — it demands strategic thinking, user-centric design, and relentless execution. In this guide, we share proven strategies and insights from our experience helping startups and enterprises build and scale SaaS products that users love.`,
            content: `<h2>Building SaaS Products That Scale</h2>
<p>The SaaS industry continues to grow at an incredible pace, with global revenue expected to reach new heights. But with increased opportunity comes increased competition. Here's how to stand out.</p>

<h3>The Foundation of a Great SaaS Product</h3>
<p>Every successful SaaS product shares common characteristics:</p>
<ul>
<li><strong>Solves a real problem</strong> — The best products address genuine pain points</li>
<li><strong>Intuitive user experience</strong> — Users should be productive within minutes</li>
<li><strong>Reliable and performant</strong> — Downtime and slow performance kill trust</li>
<li><strong>Scalable architecture</strong> — Built to handle growth from day one</li>
</ul>

<h3>Key Strategies for SaaS Success</h3>

<h4>1. Product-Led Growth</h4>
<p>Let your product be your best salesperson. Offer free trials or freemium plans, invest in onboarding, and make the value proposition obvious from the first interaction.</p>

<h4>2. Customer Retention Over Acquisition</h4>
<p>It costs 5-7x more to acquire a new customer than to retain an existing one. Focus on customer success, gather feedback regularly, and continuously improve your product.</p>

<h4>3. Data-Driven Decisions</h4>
<p>Track key metrics like Monthly Recurring Revenue (MRR), Customer Acquisition Cost (CAC), Lifetime Value (LTV), and churn rate. Let data guide your product and marketing decisions.</p>

<h4>4. Build for Global Scale</h4>
<p>From day one, think about internationalization, multi-currency support, and compliance with global regulations like GDPR. The world is your market.</p>

<h3>The Technology Behind Great SaaS</h3>
<p>Choosing the right tech stack is critical for SaaS success:</p>
<ol>
<li>Use cloud-native architectures for scalability</li>
<li>Implement CI/CD pipelines for rapid deployment</li>
<li>Adopt microservices when complexity demands it</li>
<li>Invest in monitoring and observability</li>
<li>Prioritize security at every layer</li>
</ol>

<blockquote>
<p>"The best SaaS products don't just solve problems — they transform how people work and think."</p>
</blockquote>

<p>At Adowise, we've helped numerous startups and enterprises build, launch, and scale SaaS platforms. Our end-to-end approach covers everything from product strategy to deployment and growth optimization.</p>`
        };
    }

    // Design / UI/UX topics
    if (lowerTitle.includes("design") || lowerTitle.includes("ui") || lowerTitle.includes("ux") || lowerTitle.includes("brand") || lowerTitle.includes("creative")) {
        return {
            paragraph: `Great design is the silent ambassador of your brand. In the digital age, your website and application design can make or break user trust within seconds. This article explores the principles of exceptional design, emerging trends, and how investing in UI/UX can dramatically improve your business outcomes.`,
            content: `<h2>The Power of Exceptional Design</h2>
<p>Design isn't just about making things look pretty — it's about creating intuitive, enjoyable experiences that guide users toward their goals while reflecting your brand's values.</p>

<h3>Design Principles That Never Go Out of Style</h3>
<ul>
<li><strong>Clarity</strong> — Every element should have a clear purpose</li>
<li><strong>Consistency</strong> — Maintain visual and behavioral patterns throughout</li>
<li><strong>Hierarchy</strong> — Guide the user's eye to the most important elements first</li>
<li><strong>Feedback</strong> — Every user action should have a visible response</li>
<li><strong>Accessibility</strong> — Design for all users, regardless of ability</li>
</ul>

<h3>Trending Design Approaches</h3>

<h4>1. Glassmorphism & Frosted Effects</h4>
<p>Translucent surfaces with subtle blur effects create depth and visual interest without overwhelming the user. This trend continues to evolve with new variations and applications.</p>

<h4>2. Micro-Animations</h4>
<p>Subtle animations that respond to user interactions create a sense of life and interactivity. From button hover effects to page transitions, these small details make a big impact.</p>

<h4>3. Dark Mode as Standard</h4>
<p>Dark mode is no longer a nice-to-have — users expect it. A well-implemented dark mode reduces eye strain, saves battery life, and often looks more premium.</p>

<h4>4. Bold Typography</h4>
<p>Large, expressive typography creates impact and helps establish brand personality. Combining different weights and sizes creates visual rhythm and guides the reader.</p>

<h3>The Business Impact of Good Design</h3>
<p>Investing in design delivers measurable business results:</p>
<ol>
<li>Users form opinions about your site in 50 milliseconds</li>
<li>Good UX design can increase conversion rates by up to 400%</li>
<li>Consistent branding increases revenue by 23% on average</li>
<li>Mobile-optimized designs see 67% higher purchase likelihood</li>
</ol>

<blockquote>
<p>"Design is not just what it looks like and feels like. Design is how it works." — Steve Jobs</p>
</blockquote>

<p>At Adowise, we combine creative design thinking with technical excellence to create digital experiences that captivate users and drive results.</p>`
        };
    }

    // Digital Marketing / SEO topics
    if (lowerTitle.includes("marketing") || lowerTitle.includes("seo") || lowerTitle.includes("digital") || lowerTitle.includes("social media") || lowerTitle.includes("content")) {
        return {
            paragraph: `Digital marketing is the engine that drives online business growth. From SEO and content marketing to social media and paid advertising, mastering digital channels is essential for reaching your target audience. This comprehensive guide covers the strategies and tools that top-performing businesses use to dominate their markets.`,
            content: `<h2>Mastering Digital Marketing in the Modern Era</h2>
<p>The digital marketing landscape is more complex and competitive than ever. With countless channels, tools, and strategies available, knowing where to focus your efforts can be overwhelming.</p>

<h3>The Pillars of Effective Digital Marketing</h3>
<ul>
<li><strong>Search Engine Optimization (SEO)</strong> — Organic visibility is the gift that keeps giving</li>
<li><strong>Content Marketing</strong> — Valuable content attracts and retains your audience</li>
<li><strong>Social Media Marketing</strong> — Build community and brand awareness</li>
<li><strong>Email Marketing</strong> — Still the highest ROI channel in digital marketing</li>
<li><strong>Paid Advertising</strong> — Accelerate growth with targeted campaigns</li>
</ul>

<h3>SEO Strategies That Work</h3>

<h4>1. Quality Content Is King</h4>
<p>Create comprehensive, well-researched content that genuinely helps your audience. Google rewards content that demonstrates expertise, authoritativeness, and trustworthiness (E-A-T).</p>

<h4>2. Technical SEO</h4>
<p>Ensure your website loads fast, is mobile-friendly, has proper site structure, and uses schema markup. Technical SEO is the foundation that supports all your content efforts.</p>

<h4>3. Link Building</h4>
<p>Earn high-quality backlinks through valuable content, partnerships, and thought leadership. Quality always trumps quantity in link building.</p>

<h3>Content Marketing Framework</h3>
<ol>
<li>Research your audience's pain points and questions</li>
<li>Create a content calendar aligned with business goals</li>
<li>Produce mixed-format content (blogs, videos, infographics)</li>
<li>Distribute across relevant channels</li>
<li>Measure performance and optimize continuously</li>
</ol>

<blockquote>
<p>"Marketing is no longer about the stuff you make, but about the stories you tell." — Seth Godin</p>
</blockquote>

<p>At Adowise, we help businesses develop and execute digital marketing strategies that deliver measurable results. From SEO audits to full-scale marketing campaigns, we've got you covered.</p>`
        };
    }

    // Default / generic technology content
    return {
        paragraph: `Technology continues to reshape our world at an unprecedented pace. Staying informed about the latest trends, tools, and methodologies isn't just beneficial — it's essential for anyone looking to thrive in the digital economy. In this article, we explore key insights and practical strategies that can help you and your business stay ahead of the curve.`,
        content: `<h2>Navigating the Digital Landscape</h2>
<p>The pace of technological change has never been faster. New tools, platforms, and methodologies emerge constantly, creating both opportunities and challenges for businesses of all sizes.</p>

<h3>Key Trends Shaping the Future</h3>
<ul>
<li><strong>Cloud Computing</strong> — The backbone of modern digital infrastructure</li>
<li><strong>AI and Automation</strong> — Transforming workflows across every industry</li>
<li><strong>Edge Computing</strong> — Processing data closer to where it's generated</li>
<li><strong>Cybersecurity</strong> — An ever-growing priority in our connected world</li>
<li><strong>Low-Code/No-Code</strong> — Democratizing software development</li>
</ul>

<h3>Why Digital Transformation Matters</h3>
<p>Digital transformation isn't a buzzword — it's a business imperative. Companies that embrace digital technologies see measurable improvements in:</p>

<h4>1. Operational Efficiency</h4>
<p>Automating manual processes, streamlining workflows, and reducing human error through technology leads to significant cost savings and faster execution.</p>

<h4>2. Customer Experience</h4>
<p>Digital tools enable personalized, responsive, and seamless customer experiences across all touchpoints. From AI chatbots to recommendation engines, technology enhances every interaction.</p>

<h4>3. Innovation Speed</h4>
<p>Cloud platforms, agile methodologies, and modern development tools allow businesses to experiment, iterate, and launch new products faster than ever before.</p>

<h4>4. Data-Driven Insights</h4>
<p>Modern analytics tools transform raw data into actionable intelligence, enabling smarter decision-making at every level of the organization.</p>

<h3>Getting Started on Your Digital Journey</h3>
<ol>
<li>Assess your current digital maturity</li>
<li>Identify high-impact areas for technology investment</li>
<li>Start with quick wins to build momentum</li>
<li>Invest in your team's digital skills</li>
<li>Partner with experienced technology advisors</li>
</ol>

<blockquote>
<p>"The only way to discover the limits of the possible is to go beyond them into the impossible." — Arthur C. Clarke</p>
</blockquote>

<h3>Building for Tomorrow</h3>
<p>The businesses that thrive in the coming years will be those that embrace change, invest in technology, and put their customers at the center of everything they do.</p>

<p>At Adowise, we're passionate about helping businesses navigate the complexities of digital transformation. Our team combines deep technical expertise with strategic thinking to deliver solutions that make a real difference.</p>`
    };
}

// POST: Populate blogs that have empty or minimal content
export async function POST() {
    const auth = await getAdminAuth();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await dbConnect();
    try {
        // Find blogs that have no content or very short paragraph
        const blogs = await Blog.find({
            $or: [
                { content: { $exists: false } },
                { content: "" },
                { content: null },
                { paragraph: { $exists: true, $not: { $regex: /^.{100,}$/ } } }
            ]
        });

        let updatedCount = 0;
        for (const blog of blogs) {
            const generated = generateBlogContent(blog.title);

            const updateData: any = {};

            // Only update paragraph if it's very short (less than 80 chars)
            if (!blog.paragraph || blog.paragraph.length < 80) {
                updateData.paragraph = generated.paragraph;
            }

            // Only update content if it's empty/missing
            if (!blog.content || blog.content.length < 50) {
                updateData.content = generated.content;
            }

            if (Object.keys(updateData).length > 0) {
                await Blog.findOneAndUpdate({ _id: blog._id }, updateData);
                updatedCount++;
            }
        }

        return NextResponse.json({
            success: true,
            message: `Updated ${updatedCount} blogs with full content`,
            total: blogs.length
        });
    } catch (error) {
        console.error("Blog populate error:", error);
        return NextResponse.json({ error: "Failed to populate blogs" }, { status: 500 });
    }
}
