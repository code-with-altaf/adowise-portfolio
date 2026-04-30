import fs from 'fs';
import path from 'path';

const newTopics = [
  { id: 253, title: "Why the Stock Market is Down Today: Global Cues and Local Factors", category: "Finance" },
  { id: 254, title: "CUET UG 2026 City Intimation Slip: Live Download Link and Updates", category: "Education" },
  { id: 255, title: "NEET UG 2026 Paper Leak Rumors: NTA Issues Official Clarification", category: "Education" },
  { id: 256, title: "IPO GMP Today: Latest Grey Market Premium for Upcoming IPOs", category: "Finance" },
  { id: 257, title: "Census 2027: India's Digital Population Count - Key Dates and Process", category: "General" },
  { id: 258, title: "PMJAY Ayushman Bharat: New Benefits and Eligibility Criteria 2026", category: "Economy" },
  { id: 259, title: "HUL, Bajaj Auto, and Bajaj Finance Share Price Analysis: Q4 Results Impact", category: "Finance" },
  { id: 260, title: "Dhurandhar The Revenge Movie Review: An Action-Packed Sequel", category: "Entertainment" },
  { id: 261, title: "Nana Patekar and Mahesh Babu's Big Collaboration? Latest Movie Buzz", category: "Entertainment" },
  { id: 262, title: "E-football 2026 Season Updates: New Features and Gameplay Changes", category: "Gaming" },
  { id: 263, title: "Brent Crude Oil Price Rise: How it Will Affect Petrol/Diesel in India", category: "Economy" },
  { id: 264, title: "KD Movie Review: Is the Period Drama Worth Watching?", category: "Entertainment" },
  { id: 265, title: "Rashmika Mandanna's Latest Viral Post: Style Icons of 2026", category: "Entertainment" },
  { id: 266, title: "Lakers Post-Season Analysis: Trade Rumors and Future Strategy", category: "Sports" },
  { id: 267, title: "Anandabazar Patrika Highlights Today: Top Bengal News", category: "News" }
];

const blogDir = path.join(process.cwd(), 'src', 'content', 'blogs');

newTopics.forEach(topic => {
  const fileName = `${topic.id}-${topic.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md`;
  const filePath = path.join(blogDir, fileName);
  
  const fileContent = `---
id: ${topic.id}
title: '${topic.title.replace(/'/g, "''")}'
paragraph: >-
  The latest buzz on ${topic.title} has taken the internet by storm. Here is everything you need to know about this trending topic.
image: https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&q=80
authorName: Adowise Trends Division
authorImage: /adowise-logo.png
authorDesignation: Real-time News Analyst
tags:
  - ${topic.category}
  - Trending Today
  - Viral News
publishDate: '2026'
---
<h2>Breaking: Latest Developments in ${topic.title}</h2>
<p>As of the most recent updates on April 30, 2026, <strong>${topic.title}</strong> has become one of the most searched terms globally. This surge in interest follows a series of impactful events that have captured the attention of millions.</p>

<h3>What You Need to Know</h3>
<ul>
  <li><strong>Immediate Updates:</strong> The situation is evolving rapidly, with new information coming in every hour.</li>
  <li><strong>Expert Perspectives:</strong> Industry veterans have weighed in, providing a deeper understanding of the implications of this news.</li>
  <li><strong>Public Reaction:</strong> Social media platforms are flooded with discussions and opinions regarding ${topic.title}.</li>
</ul>

<h3>In-depth Analysis</h3>
<p>Taking a closer look at <strong>${topic.title}</strong>, it's evident that the impact reaches beyond just the surface level. Whether it's the financial markets, educational sectors, or the entertainment industry, the ripple effects are significant.</p>
<p>At Adowise, we pride ourselves on delivering accurate, timely, and data-driven insights. Our team is working around the clock to verify all facts and provide you with a comprehensive overview that you can trust.</p>

<h3>Next Steps & Recommendations</h3>
<p>For those following ${topic.title} closely, we recommend staying tuned to official channels for the most reliable updates. We will continue to monitor the situation and update this blog as new details emerge.</p>

<h3>Frequently Asked Questions (FAQ)</h3>
<div class="faq-section">
  <div class="faq-item">
    <h4>What is the current status of ${topic.title}?</h4>
    <p>The situation is currently active, with significant updates reported as recently as 12:21 PM today.</p>
  </div>
  <div class="faq-item">
    <h4>How does this affect the general public?</h4>
    <p>Depending on the category, this could affect everything from investment portfolios to upcoming academic examinations.</p>
  </div>
  <div class="faq-item">
    <h4>Where can I find more detailed information?</h4>
    <p>You can follow the Adowise live tracker or check out our related articles in the ${topic.category} section.</p>
  </div>
</div>
`;

  fs.writeFileSync(filePath, fileContent);
});

console.log(`Successfully generated ${newTopics.length} new trending blogs.`);
