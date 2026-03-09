import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "How to Level Up Your Web Development Skills in 2025",
    paragraph:
      "A complete guide to learning modern web development with a focus on hands-on projects, structured learning, and mastering core fundamentals.",
    image: "https://img.freepik.com/free-vector/web-development-concept-with-programmer-ar_107791-17049.jpg?semt=ais_se_enriched&w=740&q=80",
    author: {
      name: "Mahtab",
      image: "/images/blog/author-01.png",
      designation: "Web Developer",
    },
    tags: ["webdev", "learning"],
    publishDate: "2025",
    content: `<h2>The Path to Mastery in 2025</h2>
<p>Modern web development is moving faster than ever. In 2025, it's no longer just about knowing HTML, CSS, and JavaScript. You need to master frameworks like Next.js, understand how to leverage AI tools, and focus on delivering exceptional user experiences.</p>

<h3>Master the Fundamentals First</h3>
<p>While frameworks come and go, the core principles of the web remain constant. Invest time in deeply understanding:</p>
<ul>
<li><strong>Semantic HTML:</strong> Building accessible and SEO-friendly structures.</li>
<li><strong>Advanced CSS:</strong> Container queries, subgrid, and modern layout techniques.</li>
<li><strong>Modern JavaScript:</strong> Async patterns, performance optimization, and memory management.</li>
</ul>

<h3>Build Projects That Matter</h3>
<p>Tutorial hell is real. The best way to level up is to build real-world applications. Focus on projects that solve problems, integrate with APIs, and handle complex state management. This hands-on experience is what truly transforms a developer's skills.</p>

<blockquote>
<p>"Learning to code is like learning to play an instrument; you don't get better by watching someone else play, you get better by playing yourself."</p>
</blockquote>

<p>At Adowise, we emphasize a project-first approach. By building platforms like Moltbot, we've learned more about production-grade code than any course could ever teach.</p>`
  },
  {
    id: 2,
    title: "Boost Your UI Design Skills With These Simple Techniques",
    paragraph:
      "UI design becomes easier when you follow layout patterns, spacing rules, and color system principles. These tips improve your UI instantly.",
    image: "https://img.freepik.com/free-vector/gradient-style-ui-ux-background_52683-69621.jpg?semt=ais_hybrid&w=740&q=80",
    author: {
      name: "priya verma",
      image: "/images/blog/author-02.png",
      designation: "Frontend Developer",
    },
    tags: ["design", "ui"],
    publishDate: "2025",
    content: `<h2>Visual Design That Converts</h2>
<p>Beautiful UI is useless if it doesn't serve the user. In 2025, design is about the marriage of aesthetics and functionality. By following core design systems, you can create interfaces that are not only stunning but also highly effective.</p>

<h3>Spacing and Typography: The Silent Heroes</h3>
<p>Most bad designs suffer from poor spacing and inconsistent typography. Implementing a robust 8pt grid system and defining a clear type scale will instantly elevate your work.</p>

<h3>Color Systems for the Modern Web</h3>
<p>Move beyond arbitrary hex codes. Learn to build color systems based on HSL, ensuring proper contrast for accessibility and visual harmony across your entire application.</p>

<p>Our team at Adowise focuses on 'Glassmorphism' and high-end retro aesthetics, ensuring that every pixel serves a purpose while wowing the user at first glance.</p>`
  },
  {
    id: 3,
    title: "Faster Development With Reusable Components in Next.js",
    paragraph:
      "Using reusable UI elements saves hours of coding time. Learn how to design and structure components for speed and scalability.",
    image: "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fuploads.teachablecdn.com%2Fattachments%2F0dKhU49vRbiSSWknbHAR_1920X1357.jpg&w=3840&q=75",
    author: {
      name: "Arman Ali",
      image: "/images/blog/author-03.png",
      designation: "Full-Stack Learner",
    },
    tags: ["nextjs", "productivity"],
    publishDate: "2025",
    content: `<h2>Efficiency in Next.js</h2>
<p>Next.js 15+ has transformed how we think about full-stack development. By leveraging React Server Components and optimized caching patterns, we can build applications that feel instant.</p>

<h3>The Power of Reusability</h3>
<p>Don't repeat yourself (DRY) isn't just a mantra; it's a performance strategy. Creating atomic components that are highly configurable allows for rapid prototyping and consistent design across large projects.</p>

<h3>Turbopack and Development Speed</h3>
<p>With Next.js 16's advancements in Turbopack, development cycles have reached incredible speeds. This allows for rapid iteration, which is essential when building complex AI-driven SaaS platforms like Adowise's flagship products.</p>`
  },
  // New amazing blog posts
  {
    id: 4,
    title: "Mastering AI Integration: Practical Guide for Full-Stack Developers",
    paragraph:
      "Learn how to integrate AI APIs, build intelligent features, and create next-generation applications with practical examples using OpenAI, Claude, and local LLMs.",
    image: "https://img.freepik.com/free-vector/artificial-intelligence-ai-innovation-background_53876-118300.jpg?semt=ais_se_enriched&w=740&q=80",
    author: {
      name: "Alex Chen",
      image: "/images/blog/author-04.png",
      designation: "AI Engineer",
    },
    tags: ["ai", "fullstack", "innovation"],
    publishDate: "2025",
  },
  {
    id: 5,
    title: "The Ultimate Performance Optimization Checklist for React Apps",
    paragraph:
      "From code splitting to memoization, discover 15 proven techniques to make your React applications lightning fast and deliver exceptional user experience.",
    image: "https://img.freepik.com/free-vector/optimization-concept-illustration_114360-2359.jpg?semt=ais_se_enriched&w=740&q=80",
    author: {
      name: "Sarah Johnson",
      image: "/images/blog/author-05.png",
      designation: "Senior React Developer",
    },
    tags: ["react", "performance", "optimization"],
    publishDate: "2025",
  },
  {
    id: 6,
    title: "Building Scalable Backends with Serverless Architecture",
    paragraph:
      "Learn how to design and implement serverless backends that scale automatically, reduce costs, and simplify deployment using AWS Lambda and Cloud Functions.",
    image: "https://img.freepik.com/free-vector/serverless-architecture-concept-illustration_114360-12176.jpg?semt=ais_se_enriched&w=740&q=80",
    author: {
      name: "Michael Rodriguez",
      image: "/images/blog/author-06.png",
      designation: "Cloud Architect",
    },
    tags: ["backend", "serverless", "cloud"],
    publishDate: "2025",
  },
  {
    id: 7,
    title: "TypeScript Pro Tips: Advanced Patterns for Enterprise Applications",
    paragraph:
      "Go beyond basic TypeScript. Learn advanced type manipulation, conditional types, generics, and patterns used by top tech companies to build robust applications.",
    image: "https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg?semt=ais_se_enriched&w=740&q=80",
    author: {
      name: "David Kim",
      image: "/images/blog/author-07.png",
      designation: "TypeScript Expert",
    },
    tags: ["typescript", "advanced", "enterprise"],
    publishDate: "2025",
  },
  {
    id: 8,
    title: "The Future of Web Development: WebAssembly and Beyond",
    paragraph:
      "Explore how WebAssembly is revolutionizing web applications, enabling near-native performance, and opening doors to new programming languages on the web.",
    image: "https://img.freepik.com/free-vector/future-technology-background-with-circuit-board_53876-117805.jpg?semt=ais_se_enriched&w=740&q=80",
    author: {
      name: "Emma Watson",
      image: "/images/blog/author-08.png",
      designation: "Web Platform Advocate",
    },
    tags: ["webassembly", "future", "performance"],
    publishDate: "2025",
  },
  {
    id: 9,
    title: "Accessibility First: Building Inclusive Web Applications",
    paragraph:
      "Learn essential accessibility practices that make your applications usable by everyone. Discover tools, techniques, and mindset shifts for inclusive design.",
    image: "https://img.freepik.com/free-vector/accessible-internet-concept-illustration_114360-9519.jpg?semt=ais_se_enriched&w=740&q=80",
    author: {
      name: "Lisa Park",
      image: "/images/blog/author-09.png",
      designation: "Accessibility Specialist",
    },
    tags: ["accessibility", "inclusive", "best-practices"],
    publishDate: "2025",
  },
  {
    id: 10,
    title: "Monorepo Mastery: Turbocharge Your Development Workflow",
    paragraph:
      "Discover how monorepos with tools like Turborepo and Nx can dramatically improve code sharing, collaboration, and deployment across large projects.",
    image: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1217.jpg?semt=ais_se_enriched&w=740&q=80",
    author: {
      name: "Tom Wilson",
      image: "/images/blog/author-10.png",
      designation: "DevOps Engineer",
    },
    tags: ["monorepo", "devops", "productivity"],
    publishDate: "2025",
  },
  {
    id: 11,
    title: "State Management in 2025: Beyond Redux and Context",
    paragraph:
      "Explore modern state management solutions like Zustand, Jotai, and Signals. Learn when to use each and how to choose the right tool for your project.",
    image: "https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-1235.jpg?semt=ais_se_enriched&w=740&q=80",
    author: {
      name: "Robert Chen",
      image: "/images/blog/author-11.png",
      designation: "Frontend Architect",
    },
    tags: ["state-management", "react", "modern"],
    publishDate: "2025",
  },
  {
    id: 12,
    title: "From Junior to Senior: Navigating Your Developer Career Path",
    paragraph:
      "A practical guide to leveling up in your career. Learn the skills, mindset, and strategies that differentiate senior developers from juniors.",
    image: "https://img.freepik.com/free-vector/career-development-concept-illustration_114360-6737.jpg?semt=ais_se_enriched&w=740&q=80",
    author: {
      name: "Sophia Martinez",
      image: "/images/blog/author-12.png",
      designation: "Tech Lead",
    },
    tags: ["career", "growth", "soft-skills"],
    publishDate: "2025",
  },
  {
    id: 13,
    title: "Agentic AI: The Next Frontier in Enterprise Automation",
    paragraph:
      "Explore how autonomous AI agents are performing complex tasks, from coding to customer support, powered by RAG and advanced LLMs like Claude and Gemini.",
    image: "https://img.freepik.com/free-vector/ai-technology-concept-illustration_114360-123.jpg",
    author: {
      name: "Adowise Labs",
      image: "/images/blog/author-01.png",
      designation: "AI Strategist",
    },
    tags: ["agentic-ai", "automation", "claude"],
    publishDate: "2026",
    content: `<h2>The Rise of Autonomous Agents</h2>
<p>In 2026, we've moved beyond simple chatbots. Agentic AI is about autonomous systems that can reason, plan, and execute complex workflows. These agents don't just answer questions; they perform tasks.</p>

<h3>Multi-Agent Orchestration</h3>
<p>The real power of Agentic AI lies in orchestration. Imagine a team of specialized agents—one for research, one for coding, and one for testing—all working together to complete a project. Using advanced orchestration frameworks, we can now build systems that handle end-to-end business processes with minimal human intervention.</p>

<h3>RAG and Memory: Keeping Agents Informed</h3>
<p>By integrating Retrieval-Augmented Generation (RAG) and long-term memory, agents can stay updated with the latest information and learn from past interactions. This makes them significantly more powerful for enterprise use cases where context and domain-specific knowledge are key.</p>

<p>Adowise is at the forefront of this revolution, building Moltbot to be the ultimate autonomous partner for digital businesses.</p>`
  },
  {
    id: 14,
    title: "Sora & The Revolution of AI Video Generation",
    paragraph:
      "Analyzing the impact of Sora, Runway, and Luma on the creative industry. How AI video generators are changing cinema, marketing, and storytelling in 2026.",
    image: "https://img.freepik.com/free-vector/video-production-concept-illustration_114360-1234.jpg",
    author: {
      name: "Visual Team",
      image: "/images/blog/author-02.png",
      designation: "Creative Director",
    },
    tags: ["sora", "ai-video", "future"],
    publishDate: "2026",
    content: `<h2>A New Era of Cinematic Creation</h2>
<p>The release of models like Sora and the advancements in platforms like Luma have fundamentally changed video production. We are now entering an era where high-fidelity cinematic content can be generated from simple text prompts.</p>

<h3>The Impact on Marketing and Content Creation</h3>
<p>For brands, this means the ability to create high-quality video ads in minutes instead of weeks. The cost of storytelling has dropped significantly, allowing for more experimentation and personalized video content at scale.</p>

<h3>Ethical Considerations and the Future</h3>
<p>As AI video becomes indistinguishable from reality, the importance of watermarking and authentication is paramount. At Adowise, we're exploring how to integrate these creative tools with responsible AI practices to empower the next generation of storytellers.</p>`
  },
  {
    id: 15,
    title: "SpaceX Starship, Artemis, and the New Space Economy",
    paragraph:
      "From lunar bases to Mars missions, explore how SpaceX and NASA's Artemis are opening up commercial space manufacturing and asteroid mining opportunities.",
    image: "https://img.freepik.com/free-vector/space-exploration-concept-illustration_114360-1235.jpg",
    author: {
      name: "Tech News",
      image: "/images/blog/author-03.png",
      designation: "Innovation Analyst",
    },
    tags: ["spacex", "artemis", "science"],
    publishDate: "2026",
  },
  {
    id: 16,
    title: "DeFi 2.0 and the Future of Embedded Finance",
    paragraph:
      "A deep dive into Decentralized Finance (DeFi), CBDCs, and how Buy Now Pay Later (BNPL) is reshaping the global economy and digital transactions.",
    image: "https://img.freepik.com/free-vector/digital-economy-concept-illustration_114360-1236.jpg",
    author: {
      name: "FinTech Hub",
      image: "/images/blog/author-04.png",
      designation: "Finance Expert",
    },
    tags: ["defi", "finance", "crypto"],
    publishDate: "2026",
  },
];

export default blogData;