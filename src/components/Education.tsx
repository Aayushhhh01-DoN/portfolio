import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const education = [
  { degree: "Master's in Artificial Intelligence", institution: "Your University", year: "2022 - 2024", description: "Specialized in deep learning, NLP, and computer vision." },
  { degree: "Bachelor's in Computer Science", institution: "Your University", year: "2018 - 2022", description: "Focused on software engineering, algorithms, and data structures." },
];

const certifications = [
  { name: "AWS Certified Machine Learning – Specialty", issuer: "Amazon Web Services", year: "2024", badge: "AWS", color: "text-accent" },
  { name: "Google Cloud Professional ML Engineer", issuer: "Google Cloud", year: "2024", badge: "GCP", color: "text-neon-blue" },
  { name: "Deep Learning Specialization", issuer: "Coursera – DeepLearning.AI", year: "2023", badge: "Coursera", color: "text-primary" },
  { name: "TensorFlow Developer Certificate", issuer: "Google", year: "2023", badge: "Google", color: "text-neon-green" },
  { name: "Natural Language Processing Specialization", issuer: "Coursera – DeepLearning.AI", year: "2023", badge: "Coursera", color: "text-primary" },
  { name: "Microsoft Certified: Azure AI Engineer Associate", issuer: "Microsoft", year: "2024", badge: "Azure", color: "text-neon-blue" },
];

export const Education = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="section-padding relative">
      <div ref={ref} className={`container mx-auto max-w-6xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="flex items-center gap-3 mb-2 justify-center">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-xs font-mono text-primary uppercase tracking-[0.3em] neon-glow">// Credentials</span>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight">
          Education & <span className="gradient-text">Certifications</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
          Continuous learning through formal education and industry certifications
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 neon-box">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-mono">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((item, index) => (
                <div key={index} className="card-cyber rounded-lg p-6 hover-lift glow-border">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-base">{item.degree}</h4>
                    <span className="text-[10px] font-mono text-primary px-2 py-1 rounded bg-primary/5 border border-primary/20 shrink-0 ml-2 neon-box">{item.year}</span>
                  </div>
                  <p className="text-accent text-sm font-medium mb-2">{item.institution}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold font-mono">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`card-cyber rounded-lg p-4 hover-lift group flex items-center gap-4 glow-border transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${index * 100 + 500}ms` }}
                >
                  <div className="p-2 rounded bg-secondary/50 group-hover:bg-primary/10 transition-colors group-hover:neon-box">
                    <Star className={`w-4 h-4 ${cert.color} transition-colors`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm leading-tight group-hover:text-primary transition-colors">{cert.name}</h4>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge variant="outline" className="text-[10px] font-mono border-border/50 hover:border-primary/30">{cert.badge}</Badge>
                    <span className="text-[10px] font-mono text-muted-foreground">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
