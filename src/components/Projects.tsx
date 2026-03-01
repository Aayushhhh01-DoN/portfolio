import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight, Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";
import { AnimatedText } from "./AnimatedText";

const projects = [
  { title: "Neural Style Transfer Engine", description: "Real-time artistic style transfer using deep convolutional networks with custom loss functions", tags: ["PyTorch", "CNN", "FastAPI", "React"], demoLink: "#", githubLink: "#", featured: true },
  { title: "AI-Powered Code Review", description: "Automated code review tool leveraging LLMs for intelligent suggestions and bug detection", tags: ["LangChain", "GPT-4", "Python", "TypeScript"], demoLink: "#", githubLink: "#", featured: true },
  { title: "Predictive Analytics Dashboard", description: "Real-time ML predictions with interactive visualizations and model performance monitoring", tags: ["Scikit-learn", "React", "D3.js", "PostgreSQL"], demoLink: "#", githubLink: "#", featured: false },
  { title: "Conversational AI Assistant", description: "Multi-turn dialogue system with RAG architecture for domain-specific knowledge retrieval", tags: ["Hugging Face", "LangChain", "Vector DB", "Next.js"], demoLink: "#", githubLink: "#", featured: false },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24 relative">
      <div className="section-divider mb-20 sm:mb-28" />
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] sm:text-xs font-mono text-primary/70 uppercase tracking-[0.3em] mb-3 block"
          >
            Portfolio
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <AnimatedText text="Featured" /> <span className="gradient-text"><AnimatedText text="Projects" delay={0.15} /></span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base text-muted-foreground mt-4 max-w-xl mx-auto"
          >
            A showcase of AI/ML projects and intelligent applications
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4" style={{ perspective: "1200px" }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard glowColor={project.featured ? "38 80% 55%" : "172 66% 50%"}>
                <div className="glass-card rounded-xl p-5 sm:p-6 group glow-border transition-all duration-500 h-full">
                  <div className="mb-4">
                    {project.featured && (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 400, delay: 0.3 }}
                      >
                        <Badge className="mb-3 bg-accent/10 text-accent border-accent/20 text-[10px] font-mono gap-1">
                          <Flame className="w-3 h-3" />
                          Featured
                        </Badge>
                      </motion.div>
                    )}
                    <h3 className="text-base sm:text-lg font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                      {project.title}
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                      >
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-primary shrink-0" />
                      </motion.span>
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-5 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, ti) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + ti * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-secondary/40 text-muted-foreground/70 border border-border/30"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="text-xs font-mono text-muted-foreground hover:text-primary h-8" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" /> Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" className="text-xs font-mono text-muted-foreground hover:text-foreground h-8" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3.5 h-3.5 mr-1.5" /> Source
                      </a>
                    </Button>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
