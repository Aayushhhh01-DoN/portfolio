import { Briefcase, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";

const experiences = [
  { period: "2022 - Present", role: "Senior AI Engineer", company: "Tech Innovations Inc.", description: "Leading development of enterprise AI solutions, building ML pipelines, and mentoring junior engineers", tech: ["PyTorch", "AWS", "Kubernetes"] },
  { period: "2020 - 2022", role: "Machine Learning Engineer", company: "Digital Solutions Co.", description: "Built and deployed production ML models for NLP and computer vision applications", tech: ["TensorFlow", "Python", "GCP"] },
  { period: "2019 - 2020", role: "Data Scientist", company: "Creative Agency", description: "Developed predictive analytics models and data-driven insights for various clients", tech: ["Scikit-learn", "Pandas", "SQL"] },
  { period: "2018 - 2019", role: "Junior Developer", company: "Startup Ventures", description: "Started my professional journey building web applications and learning ML fundamentals", tech: ["Python", "React", "Node.js"] },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24 relative">
      <div className="section-divider mb-20 sm:mb-28" />
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] sm:text-xs font-mono text-primary/70 uppercase tracking-[0.3em] mb-3 block"
          >
            Career
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <AnimatedText text="Work" /> <span className="gradient-text"><AnimatedText text="Experience" delay={0.1} /></span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base text-muted-foreground mt-4 max-w-xl mx-auto"
          >
            My professional journey in AI and software engineering
          </motion.p>
        </div>

        <div className="relative">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-3 sm:left-5 top-2 w-px bg-gradient-to-b from-primary/40 via-accent/20 to-transparent"
          />
          <div className="space-y-5">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60, rotateY: 15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-4 sm:gap-6 group"
                style={{ perspective: "1000px" }}
              >
                <div className="flex flex-col items-center shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative z-10 w-7 h-7 sm:w-10 sm:h-10 rounded-lg bg-card border border-border/60 flex items-center justify-center group-hover:border-primary/40 transition-all duration-300"
                  >
                    <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-primary/70 group-hover:text-primary transition-colors" />
                  </motion.div>
                </div>
                <motion.div
                  whileHover={{ x: 5, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex-1 glass-card rounded-xl p-4 sm:p-6 glow-border"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono text-primary/80 px-2 py-0.5 rounded-md bg-primary/5 border border-primary/15">{exp.period}</span>
                    {index === 0 && (
                      <motion.span
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-[10px] font-mono text-neon-green/80 px-2 py-0.5 rounded-md bg-neon-green/5 border border-neon-green/15 flex items-center gap-1"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-green" /> Current
                      </motion.span>
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                  <p className="text-xs text-accent/80 mb-2 flex items-center gap-1"><ChevronRight className="w-3 h-3" />{exp.company}</p>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <motion.span
                        key={t}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-secondary/40 text-muted-foreground/70 border border-border/30"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
