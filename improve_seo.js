const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const blogsDir = path.join(process.cwd(), 'src/content/blogs');
const seoBlogsDir = path.join(process.cwd(), 'src/content/seo-blogs');

function improveSEO() {
  const dirs = [blogsDir, seoBlogsDir];
  const blogs = [];

  // 1. Read all blogs from all directories
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
    files.forEach(file => {
      const fullPath = path.join(dir, file);
      const content = fs.readFileSync(fullPath, 'utf8');
      const parsed = matter(content);
      blogs.push({
        file,
        fullPath,
        data: parsed.data,
        content: parsed.content,
        // Helper to extract location for FAQ localization
        location: parsed.data.tags.find(tag => !['it-expert-near-me', 'computer-technician', 'mohammad-altaf', 'real-estate-agent', 'property-dealer', 'mohammad-altaf-properties', 'seo', 'expertise'].includes(tag))
      });
    });
  });

  console.log(`Analyzing ${blogs.length} total blogs for interlinking...`);

  // 2. Add Internal Links and FAQs
  blogs.forEach(blog => {
    let updatedContent = blog.content;

    // Internal Linking Strategy: Link to related blogs + High Value Master Articles
    const relatedBlogs = blogs.filter(b => b.data.id !== blog.data.id);
    const masterArticles = blogs.filter(b => [9001, 9002, 9003].includes(b.data.id));
    
    // Mix master articles with random related ones
    const linksToInclude = [...masterArticles, ...relatedBlogs.sort(() => 0.5 - Math.random()).slice(0, 3)].slice(0, 5);
    
    if (!updatedContent.includes('Service Areas Near You') && linksToInclude.length > 0) {
      updatedContent += `\n\n<h3>Other Service Areas Near You</h3>\n<p>Looking for services in nearby locations? We also provide expert assistance in these areas:</p>\n<ul>\n`;
      linksToInclude.forEach(r => {
        const url = `/blog-details/${r.data.id}`;
        updatedContent += `<li><a href="${url}">${r.data.title}</a></li>\n`;
      });
      updatedContent += `</ul>\n`;
    }

    // Add FAQ Section for Search Rich Snippets (AI-Era Focused)
    if (!updatedContent.includes('Frequently Asked Questions')) {
      const niche = blog.data.tags[0].replace(/-/g, ' ');
      const locationMatch = blog.data.title.match(/in (.*?) \|/);
      const locationName = locationMatch ? locationMatch[1] : (blog.location || 'your area');
      
      updatedContent += `
<h3>The AI-Era Advantage: Why Your Business in ${locationName} Needs More Than a Website</h3>
<p>In 2026, a static website is no longer enough. To compete, your digital presence must act as an <strong>autonomous lead-generation machine</strong>. Mohammad Altaf specializes in building "AI-First" infrastructures that don't just sit online—they actively find, engage, and convert your customers in ${locationName}.</p>

<h3>Frequently Asked Questions (FAQ) for the AI Era</h3>
<div class="faq-section">
  <div class="faq-item">
    <h4>Will my business show up in Google's AI-generated summaries (SGE)?</h4>
    <p>Yes. By using advanced <strong>Schema Markup</strong> and <strong>Semantic HTML</strong>, Mohammad Altaf ensures your business data is structured so that AI search engines like Gemini, Perplexity, and Google SGE can easily cite your business as a top authority in ${locationName}.</p>
  </div>
  <div class="faq-item">
    <h4>Can you integrate AI agents into my ${locationName} business website?</h4>
    <p>Absolutely. We specialize in deploying custom <strong>AI Agents</strong> that can handle customer inquiries, book appointments, and even qualify leads while you sleep, ensuring you never miss a business opportunity in ${locationName}.</p>
  </div>
  <div class="faq-item">
    <h4>Why hire a developer when I can use an AI site builder?</h4>
    <p>AI builders create generic, slow, and "boring" templates that fail to rank. Clients in ${locationName} choose Mohammad Altaf for <strong>human-orchestrated logic</strong>—we use AI to power the site, but manual expertise to ensure it wins the "vibe" and converts human users into paying customers.</p>
  </div>
  <div class="faq-item">
    <h4>How do I start my digital transformation in ${locationName}?</h4>
    <p>Contact Mohammad Altaf via the Adowise platform. We start with a strategy audit of your current ${locationName} market presence and build a roadmap for AI integration and search dominance.</p>
  </div>
</div>
`;
    }

    // Reconstruct file
    const newFileContent = matter.stringify(updatedContent, blog.data);
    fs.writeFileSync(blog.fullPath, newFileContent);
  });

  console.log('SEO Power-up complete: Internal links and FAQs added to all blogs.');
}

improveSEO();
