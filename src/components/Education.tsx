import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Star } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";
import { AnimatedText } from "./AnimatedText";

const education = [
  { degree: "Master's in Artificial Intelligence", institution: "Your University", year: "2022 - 2024", description: "Specialized in deep learning, NLP, and computer vision." },
  { degree: "Bachelor's in Computer Science", institution: "Your University", year: "2018 - 2022", description: "Focused on software engineering, algorithms, and data structures." },
];

const certifications = [
  { name: "AWS Certified ML – Specialty", issuer: "Amazon Web Services", year: "2024", badge: "AWS" },
  { name: "GCP Professional ML Engineer", issuer: "Google Cloud", year: "2024", badge: "GCP" },
  { name: "Deep Learning Specialization", issuer: "Coursera – DeepLearning.AI", year: "2023", badge: "DL" },
  { name: "TensorFlow Developer Certificate", issuer: "Google", year: "2023", badge: "TF" },
  { name: "NLP Specialization", issuer: "Coursera – DeepLearning.AI", year: "2023", badge: "NLP" },
  { name: "Azure AI Engineer Associate", issuer: "Microsoft", year: "2024", badge: "Azure" },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24 relative">
      <div className="section-divider mb-20 sm:mb-28" />
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] sm:text-xs font-mono text-primary/70 uppercase tracking-[0.3em] mb-3 block"
          >
            Credentials
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <AnimatedText text="Education &" /> <span className="gradient-text"><AnimatedText text="Certifications" delay={0.15} /></span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base text-muted-foreground mt-4 max-w-xl mx-auto"
          >
            Continuous learning through formal education and industry certifications
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: "1000px" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-2 rounded-lg bg-primary/5 border border-primary/15"
              >
                <GraduationCap className="w-4 h-4 text-primary" />
              </motion.div>
              <h3 className="text-lg font-bold font-mono">Education</h3>
            </div>
            <div className="space-y-3">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <TiltCard>
                    <div className="glass-card rounded-xl p-5 glow-border">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                        <h4 className="font-semibold text-sm">{item.degree}</h4>
                        <span className="text-[10px] font-mono text-primary/70 px-2 py-0.5 rounded-md bg-primary/5 border border-primary/15 shrink-0 w-fit">{item.year}</span>
                      </div>
                      <p className="text-accent/80 text-xs font-medium mb-2">{item.institution}</p>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: "1000px" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-2 rounded-lg bg-accent/5 border border-accent/15"
              >
                <Award className="w-4 h-4 text-accent" />
              </motion.div>
              <h3 className="text-lg font-bold font-mono">Certifications</h3>
            </div>
            <div className="space-y-2.5">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="glass-card rounded-xl p-3.5 group flex items-center gap-3 glow-border"
                  >
                    <motion.div
                      whileHover={{ rotate: 180, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                      className="p-1.5 rounded-md bg-secondary/40 group-hover:bg-primary/8 transition-colors shrink-0"
                    >
                      <Star className="w-3.5 h-3.5 text-primary/60 group-hover:text-primary transition-colors" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-xs leading-tight group-hover:text-primary transition-colors">{cert.name}</h4>
                      <p className="text-[10px] text-muted-foreground mt-0.5 truncate">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Badge variant="outline" className="text-[9px] font-mono border-border/40 px-1.5">{cert.badge}</Badge>
                      <span className="text-[9px] font-mono text-muted-foreground/60 hidden sm:inline">{cert.year}</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
