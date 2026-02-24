import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight, Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  { title: "Neural Style Transfer Engine", description: "Real-time artistic style transfer using deep convolutional networks with custom loss functions", tags: ["PyTorch", "CNN", "FastAPI", "React"], demoLink: "#", githubLink: "#", featured: true },
  { title: "AI-Powered Code Review", description: "Automated code review tool leveraging LLMs for intelligent suggestions and bug detection", tags: ["LangChain", "GPT-4", "Python", "TypeScript"], demoLink: "#", githubLink: "#", featured: true },
  { title: "Predictive Analytics Dashboard", description: "Real-time ML predictions with interactive visualizations and model performance monitoring", tags: ["Scikit-learn", "React", "D3.js", "PostgreSQL"], demoLink: "#", githubLink: "#", featured: false },
  { title: "Conversational AI Assistant", description: "Multi-turn dialogue system with RAG architecture for domain-specific knowledge retrieval", tags: ["Hugging Face", "LangChain", "Vector DB", "Next.js"], demoLink: "#", githubLink: "#", featured: false },
];

export const Projects = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="section-padding relative">
      <div ref={ref} className={`container mx-auto max-w-6xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="flex items-center gap-3 mb-2 justify-center">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-xs font-mono text-primary uppercase tracking-[0.3em] neon-glow">// Portfolio</span>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
          A showcase of AI/ML projects and intelligent applications
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card-cyber rounded-lg p-6 group hover-lift transition-all duration-500 glow-border ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  {project.featured && (
                    <Badge className="mb-2 bg-accent/10 text-accent border-accent/30 text-[10px] font-mono gap-1">
                      <Flame className="w-3 h-3" />
                      Featured
                    </Badge>
                  )}
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-primary" />
                  </h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-[10px] font-mono rounded bg-secondary/50 text-muted-foreground border border-border/30 hover:border-primary/30 hover:text-primary transition-all">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" className="text-xs font-mono text-muted-foreground hover:text-primary hover:bg-primary/5" asChild>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" /> Live Demo
                  </a>
                </Button>
                <Button size="sm" variant="ghost" className="text-xs font-mono text-muted-foreground hover:text-accent hover:bg-accent/5" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3.5 h-3.5 mr-1.5" /> Source
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
