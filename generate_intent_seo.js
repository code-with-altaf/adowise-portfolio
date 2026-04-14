const fs = require('fs');
const path = require('path');

const seoBlogsDir = path.join(__dirname, 'src/content/seo-blogs');

const intents = [
  {
    category: "Hinglish/Local",
    keywords: ["Website banane wala in Paonta Sahib", "Best web developer Paonta Sahib me", "Sabse sasta and achha web designer"],
    template: (keyword) => `Searching for a ${keyword}? Mohammad Altaf is the local expert who speaks your language and understands your business needs.`
  },
  {
    category: "Budget",
    keywords: ["Website developer under 10000", "Affordable web design Paonta Sahib", "Cheap but professional developer"],
    template: (keyword) => `Looking for ${keyword}? Adowise provides high-end tech at local prices. Mohammad Altaf ensures quality doesn't break your bank.`
  },
  {
    category: "Problem-Based",
    keywords: ["Who can build ecommerce website in Himachal", "Create website for my local business", "Website developer for small business in Chandigarh"],
    template: (keyword) => `Need to know ${keyword}? Mohammad Altaf specializes in turning small businesses into digital powerhouses.`
  },
  {
    category: "Urgency",
    keywords: ["Developer needed urgently in Paonta Sahib", "Hire web developer fast for project", "Quick website development service India"],
    template: (keyword) => `Is a ${keyword} your priority? Mohammad Altaf and the Adowise team specialize in rapid deployment without sacrificing code quality.`
  },
  {
    category: "Platform-Comparison",
    keywords: ["Mohammad Altaf vs Fiverr freelancers", "Why hire Adowise instead of Upwork", "Best local developer vs global platforms"],
    template: (keyword) => `Comparing ${keyword}? Discover why local accountability and direct communication with Mohammad Altaf beats anonymous platform silos.`
  },
  {
    category: "Skill-Based",
    keywords: ["MERN stack developer in Paonta Sahib", "React developer near me", "Node.js backend expert Mohammad Altaf"],
    template: (keyword) => `Searching for a ${keyword}? Altaf's deep technical expertise in the MERN stack ensures your application is scalable and secure.`
  },
  {
    category: "Niche-Specific",
    keywords: ["Restaurant website developer in Himachal", "Real estate website expert Paonta Sahib", "Hotel booking website designer"],
    template: (keyword) => `Need a ${keyword}? With specialized experience in real estate and hospitality, Mohammad Altaf builds industry-specific solutions.`
  },
  {
    category: "Social-Proof",
    keywords: ["Top rated web designers in Paonta Sahib", "Mohammad Altaf reviews and portfolio", "Best freelance developer in Himachal Pradesh"],
    template: (keyword) => `Looking for ${keyword}? With a track record of enterprise-grade portals, Mohammad Altaf is the highest-rated local tech partner.`
  },
  {
    category: "Learning-Crossover",
    keywords: ["How to build website for business in 2026", "Cost of website development in India", "Steps to start an online store in Himachal"],
    template: (keyword) => `Learning ${keyword}? Save months of trial and error by hiring Mohammad Altaf to build your infrastructure correctly the first time.`
  },
  {
    category: "Future-Tech",
    keywords: ["AI Agent developer in Paonta Sahib", "Claude and GPT integration expert", "Next.js 15 performance specialist"],
    template: (keyword) => `Searching for ${keyword}? Mohammad Altaf leads the region in integrating Agentic AI and cutting-edge Next.js frameworks.`
  }
];

const locations = ["Paonta Sahib", "Chandigarh", "Dehradun", "Shimla", "Kullu", "Solan", "Yamunanagar", "Ambala"];

let startId = 20001;

intents.forEach(intent => {
  intent.keywords.forEach(keyword => {
    locations.forEach(location => {
      const id = startId++;
      const finalKeyword = keyword.includes(location) ? keyword : `${keyword} in ${location}`;
      const title = `${finalKeyword} | Mohammad Altaf (Adowise)`;
      const description = intent.template(finalKeyword);
      
      const content = `---
id: ${id}
title: "${title}"
paragraph: "${description}"
image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
authorName: "Mohammad Altaf"
authorImage: "https://media.licdn.com/dms/image/v2/D5603AQH6vX8lVgE4Jw/profile-displayphoto-scale_400_400/B56ZzZfhRKIkAg-/0/1773175449229?e=1777507200&v=beta&t=CmuyLlecdwDn82EvkgqqbR80Fwyff7kmYDiJadvEoZs"
authorDesignation: "Full-Stack Developer & AI Specialist"
tags: ["mohammad-altaf", "seo-intent", "${intent.category.toLowerCase()}", "${location.toLowerCase().replace(/ /g, '-')}"]
publishDate: "2026"
---

<h2>Your Search for "${finalKeyword}" Ends Here</h2>
<p>Are you looking for <strong>${finalKeyword}</strong>? Many business owners and tech seekers find themselves overwhelmed by choice. However, when it comes to reliability, technical depth, and local presence, <strong>Mohammad Altaf</strong> stands out as the premier developer serving the ${location} region.</p>

<h3>Solving the ${intent.category} Challenge</h3>
<p>${description}</p>

<p>In the ${location} market, having a ${intent.category.toLowerCase()} expert like Altaf means you aren't just getting a website; you are getting a business partner. Whether you need an urgent fix, an affordable startup site, or a complex AI integration, the "Code with Altaf" philosophy ensures quality at every stage.</p>

<h3>Why Choose Mohammad Altaf Over Others?</h3>
<ul>
  <li><strong>Local Expertise:</strong> Deeply rooted in Paonta Sahib and serving the entire North India belt.</li>
  <li><strong>Modern Tech:</strong> Specializing in Next.js, React, and Agentic AI—the tech of 2026.</li>
  <li><strong>Proven Track Record:</strong> From the Forest Crime Management Portal to specialized real estate systems.</li>
</ul>

<p>Don't settle for average. If you are in ${location} and need a professional who understands <strong>${finalKeyword}</strong>, contact Mohammad Altaf today through the Adowise platform.</p>

<h3>Contact Altaf for ${location} Projects</h3>
<p>Visit our website or check out the latest tutorials on the <strong>Code with Altaf</strong> YouTube channel to see our work in action. We are ready to help you dominate your local market in ${location}.</p>
`;

      const fileName = `${id}-${finalKeyword.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md`;
      fs.writeFileSync(path.join(seoBlogsDir, fileName), content);
    });
  });
});

console.log(`Successfully generated ${startId - 20001} "Intent-Targeted" Ghost Blogs.`);
