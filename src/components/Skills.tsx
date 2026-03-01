import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiltCard } from "./TiltCard";
import { AnimatedText } from "./AnimatedText";
import {
  SiPytorch, SiTensorflow, SiScikitlearn, SiOpenai, SiLangchain,
  SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiThreedotjs, SiFramer,
  SiPython, SiNodedotjs, SiFastapi, SiPostgresql, SiDocker, SiAmazonwebservices, SiGooglecloud, SiKubernetes,
  SiPandas, SiNumpy, SiMlflow, SiGit, SiJupyter, SiWeightsandbiases, SiApacheairflow
} from "react-icons/si";
import { Brain, Eye } from "lucide-react";

const skillCategories = [
  {
    title: "AI / ML", icon: "🧠",
    skills: [
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Hugging Face", icon: Brain, color: "#FFD21E" },
      { name: "LangChain", icon: SiLangchain, color: "#1C3C3C" },
      { name: "OpenAI API", icon: SiOpenai, color: "#412991" },
      { name: "Computer Vision", icon: Eye, color: "#00D4AA" },
      { name: "NLP", icon: Brain, color: "#8B5CF6" },
    ],
  },
  {
    title: "Frontend", icon: "🎨",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Three.js", icon: SiThreedotjs, color: "#FFFFFF" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    ],
  },
  {
    title: "Backend", icon: "⚙️",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    ],
  },
  {
    title: "Tools", icon: "📊",
    skills: [
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "MLflow", icon: SiMlflow, color: "#0194E2" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
      { name: "W&B", icon: SiWeightsandbiases, color: "#FFBE00" },
      { name: "DVC", icon: SiGit, color: "#13ADC7" },
      { name: "Airflow", icon: SiApacheairflow, color: "#017CEE" },
    ],
  },
];

export const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24 relative">
      <div className="section-divider mb-20 sm:mb-28" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-5xl"
      >
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] sm:text-xs font-mono text-primary/70 uppercase tracking-[0.3em] mb-3 block"
          >
            Tech Stack
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <AnimatedText text="My" /> <span className="gradient-text"><AnimatedText text="Skills" delay={0.1} /></span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base text-muted-foreground mt-4 max-w-xl mx-auto"
          >
            Technologies and tools I use to build intelligent systems
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex justify-start sm:justify-center gap-2 mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          {skillCategories.map((cat, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveTab(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-mono transition-all duration-300 border whitespace-nowrap shrink-0 relative ${
                activeTab === i
                  ? "bg-primary/10 border-primary/30 text-primary"
                  : "bg-transparent border-border/40 text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              {activeTab === i && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/10 border border-primary/30 rounded-lg"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                <span className="mr-1.5">{cat.icon}</span>
                {cat.title}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
              style={{ perspective: "800px" }}
            >
              {skillCategories[activeTab].skills.map((skill, skillIndex) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ delay: skillIndex * 0.06, duration: 0.4 }}
                  >
                    <TiltCard>
                      <div className="glass-card rounded-xl p-4 sm:p-5 text-center group cursor-default glow-border transition-all duration-500">
                        <motion.div
                          whileHover={{ scale: 1.3, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Icon
                            className="w-6 h-6 sm:w-7 sm:h-7 mx-auto mb-3 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_currentColor]"
                            style={{ color: skill.color }}
                          />
                        </motion.div>
                        <span className="text-xs sm:text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* All skills inline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-1.5 max-w-4xl mx-auto"
        >
          {skillCategories.flatMap(c => c.skills).map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                whileHover={{ scale: 1.15, y: -2 }}
              >
                <Badge
                  variant="outline"
                  className="border-border/40 text-muted-foreground/60 text-[9px] sm:text-[10px] font-mono hover:border-primary/20 hover:text-primary/80 transition-all cursor-default gap-1.5 py-1"
                >
                  <Icon className="w-2.5 h-2.5 sm:w-3 sm:h-3" style={{ color: skill.color }} />
                  {skill.name}
                </Badge>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};
