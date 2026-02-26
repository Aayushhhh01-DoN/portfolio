import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24 relative">
      <div className="section-divider mb-20 sm:mb-28" />
      <div ref={ref} className={`container mx-auto max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-14">
          <span className="text-[10px] sm:text-xs font-mono text-primary/70 uppercase tracking-[0.3em] mb-3 block">Credentials</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-xl mx-auto">
            Continuous learning through formal education and industry certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/5 border border-primary/15">
                <GraduationCap className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-mono">Education</h3>
            </div>
            <div className="space-y-3">
              {education.map((item, index) => (
                <div key={index} className="glass-card rounded-xl p-5 hover-lift glow-border">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <h4 className="font-semibold text-sm">{item.degree}</h4>
                    <span className="text-[10px] font-mono text-primary/70 px-2 py-0.5 rounded-md bg-primary/5 border border-primary/15 shrink-0 w-fit">{item.year}</span>
                  </div>
                  <p className="text-accent/80 text-xs font-medium mb-2">{item.institution}</p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/5 border border-accent/15">
                <Award className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-lg font-bold font-mono">Certifications</h3>
            </div>
            <div className="space-y-2.5">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`glass-card rounded-xl p-3.5 hover-lift group flex items-center gap-3 glow-border transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${index * 80 + 400}ms` }}
                >
                  <div className="p-1.5 rounded-md bg-secondary/40 group-hover:bg-primary/8 transition-colors shrink-0">
                    <Star className="w-3.5 h-3.5 text-primary/60 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-xs leading-tight group-hover:text-primary transition-colors">{cert.name}</h4>
                    <p className="text-[10px] text-muted-foreground mt-0.5 truncate">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge variant="outline" className="text-[9px] font-mono border-border/40 px-1.5">{cert.badge}</Badge>
                    <span className="text-[9px] font-mono text-muted-foreground/60 hidden sm:inline">{cert.year}</span>
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
