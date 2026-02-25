import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  SiPytorch, SiTensorflow, SiScikitlearn, SiOpenai, SiLangchain,
  SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiThreedotjs, SiFramer,
  SiPython, SiNodedotjs, SiFastapi, SiPostgresql, SiDocker, SiAmazonwebservices, SiGooglecloud, SiKubernetes,
  SiPandas, SiNumpy, SiMlflow, SiGit, SiJupyter, SiWeightsandbiases, SiApacheairflow
} from "react-icons/si";
import { Brain, Eye } from "lucide-react";

const skillCategories = [
  {
    title: "AI / ML", icon: "🧠", color: "primary",
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
    title: "Frontend", icon: "🎨", color: "accent",
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
    title: "Backend", icon: "⚙️", color: "neon-blue",
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
    title: "Tools", icon: "📊", color: "neon-green",
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
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 relative">
      <div ref={ref} className={`container mx-auto max-w-6xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="flex items-center gap-3 mb-2 justify-center">
          <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-[10px] sm:text-xs font-mono text-primary uppercase tracking-[0.3em] neon-glow">// Tech Stack</span>
          <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
          Technologies and tools I use to build intelligent systems
        </p>

        {/* Tab navigation — scrollable on mobile */}
        <div className="flex justify-start sm:justify-center gap-2 mb-8 sm:mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          {skillCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-mono transition-all duration-300 border whitespace-nowrap shrink-0 ${
                activeTab === i
                  ? "bg-primary/10 border-primary/40 text-primary neon-box"
                  : "bg-secondary/30 border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              <span className="mr-1.5">{cat.icon}</span>
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3">
            {skillCategories[activeTab].skills.map((skill, skillIndex) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`card-cyber rounded-lg p-4 sm:p-5 text-center hover-lift group cursor-default glow-border transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${skillIndex * 80 + 300}ms` }}
                >
                  <Icon
                    className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2.5 sm:mb-3 transition-transform duration-300 group-hover:scale-125"
                    style={{ color: skill.color }}
                  />
                  <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-all relative z-10">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* All skills inline */}
        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-1.5 sm:gap-2 max-w-4xl mx-auto">
          {skillCategories.flatMap(c => c.skills).map((skill) => {
            const Icon = skill.icon;
            return (
              <Badge
                key={skill.name}
                variant="outline"
                className="border-border/50 text-muted-foreground/70 text-[9px] sm:text-[10px] font-mono hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all cursor-default gap-1 sm:gap-1.5 py-1"
              >
                <Icon className="w-2.5 h-2.5 sm:w-3 sm:h-3" style={{ color: skill.color }} />
                {skill.name}
              </Badge>
            );
          })}
        </div>
      </div>
    </section>
  );
};
