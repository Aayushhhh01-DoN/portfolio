import { Briefcase, ChevronRight } from "lucide-react";

const experiences = [
  { period: "2022 - Present", role: "Senior AI Engineer", company: "Tech Innovations Inc.", description: "Leading development of enterprise AI solutions, building ML pipelines, and mentoring junior engineers", tech: ["PyTorch", "AWS", "Kubernetes"] },
  { period: "2020 - 2022", role: "Machine Learning Engineer", company: "Digital Solutions Co.", description: "Built and deployed production ML models for NLP and computer vision applications", tech: ["TensorFlow", "Python", "GCP"] },
  { period: "2019 - 2020", role: "Data Scientist", company: "Creative Agency", description: "Developed predictive analytics models and data-driven insights for various clients", tech: ["Scikit-learn", "Pandas", "SQL"] },
  { period: "2018 - 2019", role: "Junior Developer", company: "Startup Ventures", description: "Started my professional journey building web applications and learning ML fundamentals", tech: ["Python", "React", "Node.js"] },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-2 justify-center">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-xs font-mono text-primary uppercase tracking-[0.3em] neon-glow">// Career</span>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
          My professional journey in AI and software engineering
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-accent to-neon-blue/30 hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-6 group">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="relative z-10 w-10 h-10 rounded-lg bg-card border border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:neon-box transition-all duration-300">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 card-cyber rounded-lg p-6 hover-lift glow-border">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-primary px-2 py-1 rounded bg-primary/5 border border-primary/20 neon-box">
                      {exp.period}
                    </span>
                    {index === 0 && (
                      <span className="text-[10px] font-mono text-neon-green px-2 py-0.5 rounded bg-neon-green/10 border border-neon-green/20 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                  <p className="text-sm text-accent mb-3 flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" />
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded bg-secondary/50 text-muted-foreground border border-border/30 hover:border-primary/30 hover:text-primary transition-all">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
