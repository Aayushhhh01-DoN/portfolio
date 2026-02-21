import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const skillCategories = [
  {
    title: "AI / Machine Learning",
    icon: "🧠",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "LangChain", "OpenAI API", "Computer Vision", "NLP"],
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js", "Framer Motion"],
  },
  {
    title: "Backend & Cloud",
    icon: "⚙️",
    skills: ["Python", "Node.js", "FastAPI", "PostgreSQL", "Docker", "AWS", "GCP", "Kubernetes"],
  },
  {
    title: "Data & Tools",
    icon: "📊",
    skills: ["Pandas", "NumPy", "MLflow", "Git", "Jupyter", "Weights & Biases", "DVC", "Airflow"],
  },
];

export const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="section-padding relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-2 justify-center">
          <div className="h-[1px] w-12 bg-primary/50" />
          <span className="text-xs font-mono text-primary uppercase tracking-[0.3em]">Tech Stack</span>
          <div className="h-[1px] w-12 bg-primary/50" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
          Technologies and tools I use to build intelligent systems
        </p>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-lg text-sm font-mono transition-all duration-300 border ${
                activeTab === i
                  ? "bg-primary/10 border-primary/30 text-primary shadow-[0_0_15px_hsl(280_100%_65%/0.1)]"
                  : "bg-secondary/30 border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {skillCategories[activeTab].skills.map((skill, skillIndex) => (
              <div
                key={skill}
                className="card-cyber rounded-lg p-4 text-center hover-lift group cursor-default"
                style={{ animationDelay: `${skillIndex * 50}ms` }}
              >
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* All skills inline */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {skillCategories.flatMap(c => c.skills).map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="border-border/50 text-muted-foreground/70 text-[10px] font-mono hover:border-primary/30 hover:text-primary transition-all cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
