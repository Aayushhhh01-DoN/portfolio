import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with payment integration and admin dashboard",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates and team features",
    tags: ["Next.js", "TypeScript", "Prisma", "WebSockets"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Portfolio Generator",
    description: "Dynamic portfolio website generator with customizable themes and templates",
    tags: ["React", "Tailwind", "Firebase"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather tracking application with detailed forecasts and maps",
    tags: ["Vue.js", "APIs", "Charts.js"],
    demoLink: "#",
    githubLink: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A showcase of my recent work and personal projects
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift bg-background/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-primary/10 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
