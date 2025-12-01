import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code",
  },
  {
    icon: Palette,
    title: "Design Focus",
    description: "Creating beautiful and intuitive user interfaces",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Always exploring new technologies and best practices",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-padding bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A passionate developer dedicated to creating exceptional digital experiences
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              I'm a full-stack developer with a keen eye for design and a passion for building
              innovative web applications. With expertise in modern frameworks and a commitment
              to excellence, I transform ideas into reality.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My journey in web development has equipped me with a diverse skill set, allowing
              me to tackle complex challenges and deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <Card key={index} className="hover-lift bg-background/50 border-border/50">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
