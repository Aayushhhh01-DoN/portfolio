import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Sparkles, Brain, Cpu, Network } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  { icon: Brain, title: "AI Architecture", description: "Designing scalable ML pipelines and neural network architectures" },
  { icon: Cpu, title: "Production ML", description: "Deploying models at scale with monitoring and optimization" },
  { icon: Code2, title: "Clean Code", description: "Writing maintainable, scalable, and efficient systems" },
  { icon: Network, title: "Full Stack", description: "End-to-end development from APIs to beautiful frontends" },
  { icon: Palette, title: "Design Focus", description: "Creating intuitive and visually compelling interfaces" },
  { icon: Sparkles, title: "Innovation", description: "Always exploring cutting-edge technologies and research" },
];

export const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24 relative">
      <div className="section-divider mb-20 sm:mb-28" />
      <div ref={ref} className={`container mx-auto max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-14 sm:mb-16">
          <span className="text-[10px] sm:text-xs font-mono text-primary/70 uppercase tracking-[0.3em] mb-3 block">About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Building the <span className="gradient-text">Future</span> with AI
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-xl mx-auto">
            A passionate AI engineer bridging research and real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start mb-14">
          <div className={`space-y-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="glass-card p-5 sm:p-6 rounded-xl">
              <p className="text-base sm:text-lg leading-relaxed">
                I'm an <span className="text-primary font-medium">AI Engineer</span> with a deep passion for 
                machine learning, deep learning, and building intelligent systems that solve 
                complex real-world challenges.
              </p>
            </div>
            <div className="glass-card p-5 sm:p-6 rounded-xl">
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                From designing neural network architectures to deploying production ML pipelines, 
                I work across the full AI stack. My approach combines rigorous research methodology 
                with pragmatic engineering.
              </p>
            </div>

            {/* Terminal */}
            <div className="rounded-xl border border-border/60 bg-card/40 backdrop-blur overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-secondary/40 border-b border-border/40">
                <div className="w-2 h-2 rounded-full bg-neon-red/60" />
                <div className="w-2 h-2 rounded-full bg-neon-yellow/60" />
                <div className="w-2 h-2 rounded-full bg-neon-green/60" />
                <span className="text-[10px] font-mono text-muted-foreground/60 ml-2">about.py</span>
              </div>
              <div className="p-4 font-mono text-[11px] space-y-1">
                <p><span className="text-primary/70">class</span> <span className="text-accent">AIEngineer</span>:</p>
                <p className="pl-4"><span className="text-primary/70">def</span> <span className="text-neon-blue">__init__</span>(self):</p>
                <p className="pl-8">self.passion = <span className="text-neon-green">"infinite"</span></p>
                <p className="pl-8">self.learning = <span className="text-neon-green">"always"</span></p>
                <p className="pl-8">self.mode = <span className="text-accent">"building"</span></p>
              </div>
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-3 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="glass-card border-0 hover-lift group cursor-default glow-border transition-all duration-500"
                style={{ transitionDelay: `${index * 80 + 400}ms` }}
              >
                <CardContent className="p-4 sm:p-5">
                  <div className="p-2 rounded-lg bg-primary/5 border border-primary/10 w-fit mb-3 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xs sm:text-sm mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
