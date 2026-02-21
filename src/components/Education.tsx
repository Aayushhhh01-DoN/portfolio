import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Master's in Artificial Intelligence",
    institution: "Your University",
    year: "2022 - 2024",
    description: "Specialized in deep learning, NLP, and computer vision.",
  },
  {
    degree: "Bachelor's in Computer Science",
    institution: "Your University",
    year: "2018 - 2022",
    description: "Focused on software engineering, algorithms, and data structures.",
  },
];

const certifications = [
  {
    name: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    year: "2024",
    badge: "AWS",
  },
  {
    name: "Google Cloud Professional ML Engineer",
    issuer: "Google Cloud",
    year: "2024",
    badge: "GCP",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera – DeepLearning.AI",
    year: "2023",
    badge: "Coursera",
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2023",
    badge: "Google",
  },
  {
    name: "Natural Language Processing Specialization",
    issuer: "Coursera – DeepLearning.AI",
    year: "2023",
    badge: "Coursera",
  },
  {
    name: "Microsoft Certified: Azure AI Engineer Associate",
    issuer: "Microsoft",
    year: "2024",
    badge: "Azure",
  },
];

export const Education = () => {
  return (
    <section id="education" className="section-padding bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Education & <span className="gradient-text">Certifications</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Continuous learning through formal education and industry-recognized certifications
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((item, index) => (
                <Card key={index} className="hover-lift bg-background/50 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-lg">{item.degree}</h4>
                      <Badge variant="outline" className="text-xs shrink-0 ml-2">
                        {item.year}
                      </Badge>
                    </div>
                    <p className="text-primary text-sm font-medium mb-2">{item.institution}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover-lift bg-background/50 border-border/50 group">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-primary/10 transition-colors">
                      <BookOpen className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm leading-tight">{cert.name}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Badge className="text-xs">{cert.badge}</Badge>
                      <span className="text-xs text-muted-foreground">{cert.year}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
