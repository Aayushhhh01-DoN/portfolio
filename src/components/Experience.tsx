import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    period: "2022 - Present",
    role: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    description: "Leading development of enterprise web applications and mentoring junior developers",
  },
  {
    period: "2020 - 2022",
    role: "Frontend Developer",
    company: "Digital Solutions Co.",
    description: "Built responsive web applications using React and modern frontend technologies",
  },
  {
    period: "2019 - 2020",
    role: "Web Developer",
    company: "Creative Agency",
    description: "Developed custom websites and web applications for various clients",
  },
  {
    period: "2018 - 2019",
    role: "Junior Developer",
    company: "Startup Ventures",
    description: "Started my professional journey learning and contributing to various projects",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          My professional journey and career milestones
        </p>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-0 md:pl-20">
                <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />
                
                <Card className="hover-lift bg-card border-border/50">
                  <CardContent className="p-6">
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                    <h3 className="text-xl font-bold mt-2 mb-1">{exp.role}</h3>
                    <p className="text-accent mb-3">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
