import PortfolioHero from "@/components/ui/portfolio-hero";
import { ExternalLink, Tag } from "lucide-react";

const projects = [
  {
    title: "THUMBTACK TO CRM INTEGRATION",
    description: "Engineered a data pipeline using n8n and GoHighLevel webhooks to capture and process leads, resolving a critical failure and restoring 100% sales flow.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
    link: "#",
    status: "ACTIVE",
    code: "n8n_CRM_01"
  },
  {
    title: "HUBSPOT AR WORKFLOWS",
    description: "Designed 10+ automated HubSpot AR workflows including invoice reminders and escalations, reducing delinquency and manual tracking time.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "#",
    status: "COMPLETED",
    code: "n8n_AR_02"
  },
  {
    title: "MULTI-CALENDAR BOOKING SYSTEM",
    description: "Architected a custom booking system using n8n and Google Calendar APIs with 2-step verification, eliminating double-bookings entirely.",
    thumbnail: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800",
    link: "#",
    status: "ACTIVE",
    code: "n8n_BOOK_03"
  },
  {
    title: "INSTAGRAM CONTEXT SCRAPER",
    description: "Developed a Python-based scraper to analyze reels/posts and generate training data for a fine-tuned GPT-4 content assistant.",
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    link: "#",
    status: "PROD",
    code: "AI_SCRAPE_04"
  },
  {
    title: "ASANA-DISCORD SYNC",
    description: "Integrated Asana, Discord, and Slack via n8n webhooks to create real-time project alerts, improving cross-functional visibility.",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    link: "#",
    status: "SYNC_OK",
    code: "n8n_SYNC_05"
  },
  {
    title: "SOCIAL MEDIA LEAD QUALIFIER",
    description: "Built an AI-powered lead qualification assistant for Facebook/Instagram/Telegram sales agents using LLMs.",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    link: "#",
    status: "ACTIVE",
    code: "AI_LEAD_06"
  }
];

export default function App() {
  return (
    <div className="bg-industrial-page min-h-screen">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap"
      />
      <PortfolioHero />

      <section id="projects" className="max-w-screen-2xl mx-auto px-6 py-32">
        <div className="flex justify-between items-end mb-12 border-b border-industrial-border pb-8">
          <div>
            <h2 className="text-display text-4xl font-bold tracking-tight uppercase text-industrial-green">
              Workflows & Automations
            </h2>
            <p className="text-industrial-subtle mt-2 font-mono text-sm uppercase">
              // PRODUCTION_LOG: SYSTEM_READY
            </p>
          </div>
          <div className="text-right">
            <span className="text-[11px] font-bold text-industrial-subtle uppercase tracking-widest">
              Total Projects
            </span>
            <div className="text-3xl font-bold font-display text-white">06</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shiny-card flex flex-col group"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-industrial-page/80 backdrop-blur-sm border border-industrial-border px-3 py-1 flex items-center gap-2">
                  <span className="bracket-status">{project.status}</span>
                </div>
              </div>

              <div className="p-6 flex-grow border-t border-industrial-border">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold text-industrial-green bg-industrial-green/10 px-2 py-0.5">
                    {project.code}
                  </span>
                  <div className="h-px flex-grow bg-industrial-border"></div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 font-display uppercase leading-tight group-hover:text-industrial-green transition-colors">
                  {project.title}
                </h3>

                <p className="text-industrial-subtle text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto flex justify-between items-center text-industrial-subtle font-bold text-[11px] uppercase tracking-wider group-hover:text-white transition-colors">
                  <span className="flex items-center gap-2">
                    <Tag size={12} className="text-industrial-green" />
                    Automation
                  </span>
                  <span className="flex items-center gap-2">
                    OPEN WORKFLOW
                    <ExternalLink size={12} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-industrial-border py-20 px-6 text-center">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-4xl mb-8 font-display font-bold text-industrial-green uppercase tracking-tighter">
            Let's build something agentic.
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-[11px] font-bold text-industrial-subtle uppercase tracking-widest">
            <a href="mailto:emon.biotech.10th@gmail.com" className="hover:text-industrial-green transition-colors">Email</a>
            <a href="https://linkedin.com/in/md-tabassum-hossain-emon-ag007" className="hover:text-industrial-green transition-colors">LinkedIn</a>
            <a href="https://github.com/Emon-ProCoder7" className="hover:text-industrial-green transition-colors">GitHub</a>
          </div>
          <div className="mt-12 text-[10px] text-industrial-subtle font-mono">
            © 2024 MD TABASSUM HOSSAIN EMON // DEVELOPER_PORTFOLIO_V3
          </div>
        </div>
      </footer>
    </div>
  );
}
