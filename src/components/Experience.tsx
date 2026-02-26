import { Briefcase, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  { period: "2022 - Present", role: "Senior AI Engineer", company: "Tech Innovations Inc.", description: "Leading development of enterprise AI solutions, building ML pipelines, and mentoring junior engineers", tech: ["PyTorch", "AWS", "Kubernetes"] },
  { period: "2020 - 2022", role: "Machine Learning Engineer", company: "Digital Solutions Co.", description: "Built and deployed production ML models for NLP and computer vision applications", tech: ["TensorFlow", "Python", "GCP"] },
  { period: "2019 - 2020", role: "Data Scientist", company: "Creative Agency", description: "Developed predictive analytics models and data-driven insights for various clients", tech: ["Scikit-learn", "Pandas", "SQL"] },
  { period: "2018 - 2019", role: "Junior Developer", company: "Startup Ventures", description: "Started my professional journey building web applications and learning ML fundamentals", tech: ["Python", "React", "Node.js"] },
];

export const Experience = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24 relative">
      <div className="section-divider mb-20 sm:mb-28" />
      <div ref={ref} className={`container mx-auto max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-14">
          <span className="text-[10px] sm:text-xs font-mono text-primary/70 uppercase tracking-[0.3em] mb-3 block">Career</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-xl mx-auto">
            My professional journey in AI and software engineering
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-3 sm:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-accent/20 to-transparent" />
          <div className="space-y-5">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex gap-4 sm:gap-6 group transition-all duration-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                style={{ transitionDelay: `${index * 120 + 200}ms` }}
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative z-10 w-7 h-7 sm:w-10 sm:h-10 rounded-lg bg-card border border-border/60 flex items-center justify-center group-hover:border-primary/40 transition-all duration-300">
                    <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-primary/70 group-hover:text-primary transition-colors" />
                  </div>
                </div>
                <div className="flex-1 glass-card rounded-xl p-4 sm:p-6 hover-lift glow-border">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono text-primary/80 px-2 py-0.5 rounded-md bg-primary/5 border border-primary/15">{exp.period}</span>
                    {index === 0 && (
                      <span className="text-[10px] font-mono text-neon-green/80 px-2 py-0.5 rounded-md bg-neon-green/5 border border-neon-green/15 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" /> Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                  <p className="text-xs text-accent/80 mb-2 flex items-center gap-1"><ChevronRight className="w-3 h-3" />{exp.company}</p>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-secondary/40 text-muted-foreground/70 border border-border/30">{t}</span>
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
