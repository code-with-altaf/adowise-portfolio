import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";

const JOBS = [
  {
    id: 1,
    title: "AI Solutions Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
    description: "Help our clients bridge the gap between AI potential and actual revenue growth by building custom intelligence pipelines."
  },
  {
    id: 2,
    title: "Growth Strategy Lead",
    department: "Sales",
    location: "Hybrid (Mumbai/Remote)",
    type: "Full-time",
    description: "Define the outbound strategies that power the next generation of growth engines for our enterprise clients."
  },
  {
    id: 3,
    title: "Full Stack Developer",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description: "Scale our internal infrastructure and build the world-class interfaces that our clients use to manage their pipelines."
  }
];

export const metadata = {
  title: "Careers | Join the Growth Engine",
  description: "Work at the intersection of AI, software excellence, and enterprise sales. Join Mohammad Altaf and the Adowise team.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] flex flex-col selection:bg-[#d9692a]/10 selection:text-[#d9692a]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-[140px] pb-24 px-6 md:px-8 bg-[#f3ece0]/50 border-b border-[#e1d7c5]">
        <div className="max-w-[1280px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4d9c3] text-[#b8541e] font-mono text-[10px] tracking-[0.2em] font-medium uppercase mb-8">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#d9692a] animate-pulse" />
            We are hiring
          </div>
          <h1 className="font-display italic text-[clamp(40px,6vw,84px)] font-light leading-[1.05] tracking-[-0.03em] text-[#1f1b16] mb-8">
            Join the <span className="text-[#d9692a]">Growth Engine.</span>
          </h1>
          <p className="max-w-[600px] mx-auto text-[18px] md:text-[20px] text-[#4a413a] leading-relaxed italic font-body">
            "We aren't just building software; we're building the future of how businesses grow. If you're obsessed with precision and AI, you belong here."
          </p>
          <p className="mt-4 text-[14px] font-bold text-[#1f1b16] uppercase tracking-widest">— Mohammad Altaf, Founder</p>
        </div>
      </section>


      {/* Job Listings */}
      <section className="py-24 px-6 md:px-8 bg-white border-y border-[#e1d7c5]">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h2 className="text-[12px] font-mono uppercase tracking-[0.2em] text-[#8a7f72] mb-4">Open Positions</h2>
              <h3 className="font-display italic text-[36px] md:text-[48px] text-[#1f1b16] leading-none">Current Openings</h3>
            </div>
            <p className="text-[14px] text-[#6b6b6b] font-body max-w-[300px]">
              Don't see a role that fits? Email us anyway at <a href="mailto:careers@adowise.com" className="text-[#d9692a] font-bold">careers@adowise.com</a>
            </p>
          </div>

          <div className="space-y-6">
            {JOBS.map((job) => (
              <div 
                key={job.id} 
                className="group p-8 border border-[#e1d7c5] bg-[#FAF8F5]/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="space-y-4 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-[#1f1b16] text-[#faf6f0] text-[10px] font-bold uppercase tracking-widest">
                        {job.department}
                      </span>
                      <div className="flex items-center gap-1.5 text-[12px] text-[#8a7f72] font-medium">
                        <MapPin size={14} />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1.5 text-[12px] text-[#8a7f72] font-medium">
                        <Clock size={14} />
                        {job.type}
                      </div>
                    </div>
                    <h4 className="text-[24px] font-bold text-[#1f1b16] group-hover:text-[#d9692a] transition-colors">
                      {job.title}
                    </h4>
                    <p className="text-[15px] text-[#6b6b6b] leading-relaxed font-body max-w-[600px]">
                      {job.description}
                    </p>
                  </div>
                  <a 
                    href={`mailto:reachmohdaltaf@gmail.com?subject=Job Application: ${job.title}`}
                    className="h-fit px-8 py-4 bg-[#1f1b16] text-[#faf6f0] font-bold text-[14px] uppercase tracking-widest hover:bg-[#d9692a] transition-colors flex items-center gap-3 group/btn"
                  >
                    Apply Now
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
