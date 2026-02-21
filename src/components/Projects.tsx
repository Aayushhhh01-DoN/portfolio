import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Neural Style Transfer Engine",
    description: "Real-time artistic style transfer using deep convolutional networks with custom loss functions",
    tags: ["PyTorch", "CNN", "FastAPI", "React"],
    demoLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    title: "AI-Powered Code Review",
    description: "Automated code review tool leveraging LLMs for intelligent suggestions and bug detection",
    tags: ["LangChain", "GPT-4", "Python", "TypeScript"],
    demoLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "Real-time ML predictions with interactive visualizations and model performance monitoring",
    tags: ["Scikit-learn", "React", "D3.js", "PostgreSQL"],
    demoLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    title: "Conversational AI Assistant",
    description: "Multi-turn dialogue system with RAG architecture for domain-specific knowledge retrieval",
    tags: ["Hugging Face", "LangChain", "Vector DB", "Next.js"],
    demoLink: "#",
    githubLink: "#",
    featured: false,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-2 justify-center">
          <div className="h-[1px] w-12 bg-primary/50" />
          <span className="text-xs font-mono text-primary uppercase tracking-[0.3em]">Portfolio</span>
          <div className="h-[1px] w-12 bg-primary/50" />
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
              className={`card-cyber rounded-lg p-6 group hover-lift transition-all duration-500 ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  {project.featured && (
                    <Badge className="mb-2 bg-primary/10 text-primary border-primary/20 text-[10px] font-mono">
                      Featured
                    </Badge>
                  )}
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </h3>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-[10px] font-mono rounded bg-secondary/50 text-muted-foreground border border-border/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" className="text-xs font-mono text-muted-foreground hover:text-primary hover:bg-primary/5" asChild>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                    Live Demo
                  </a>
                </Button>
                <Button size="sm" variant="ghost" className="text-xs font-mono text-muted-foreground hover:text-accent hover:bg-accent/5" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3.5 h-3.5 mr-1.5" />
                    Source
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
