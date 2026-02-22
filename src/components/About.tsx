import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Sparkles, Brain, Cpu, Network } from "lucide-react";

const highlights = [
  { icon: Brain, title: "AI Architecture", description: "Designing scalable ML pipelines and neural network architectures", color: "text-primary", bg: "bg-primary/10", borderColor: "border-primary/20" },
  { icon: Cpu, title: "Production ML", description: "Deploying models at scale with monitoring and optimization", color: "text-accent", bg: "bg-accent/10", borderColor: "border-accent/20" },
  { icon: Code2, title: "Clean Code", description: "Writing maintainable, scalable, and efficient systems", color: "text-neon-blue", bg: "bg-neon-blue/10", borderColor: "border-neon-blue/20" },
  { icon: Network, title: "Full Stack", description: "End-to-end development from APIs to beautiful frontends", color: "text-neon-green", bg: "bg-neon-green/10", borderColor: "border-neon-green/20" },
  { icon: Palette, title: "Design Focus", description: "Creating intuitive and visually compelling interfaces", color: "text-primary", bg: "bg-primary/10", borderColor: "border-primary/20" },
  { icon: Sparkles, title: "Innovation", description: "Always exploring cutting-edge technologies and research", color: "text-accent", bg: "bg-accent/10", borderColor: "border-accent/20" },
];

export const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-2 justify-center">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-xs font-mono text-primary uppercase tracking-[0.3em] neon-glow">// About Me</span>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight">
          Building the <span className="gradient-text">Future</span> with AI
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A passionate AI engineer bridging research and real-world applications
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          <div className="space-y-6">
            <div className="card-cyber rounded-lg p-6 holo-shimmer">
              <p className="text-lg leading-relaxed relative z-10">
                I'm an <span className="text-primary font-semibold neon-glow">AI Engineer</span> with a deep passion for 
                machine learning, deep learning, and building intelligent systems that solve 
                complex real-world challenges.
              </p>
            </div>
            <div className="card-cyber rounded-lg p-6">
              <p className="text-base leading-relaxed text-muted-foreground">
                From designing neural network architectures to deploying production ML pipelines, 
                I work across the full AI stack. My approach combines rigorous research methodology 
                with pragmatic engineering — because the best model is the one that ships.
              </p>
            </div>

            {/* Terminal-style element */}
            <div className="rounded-lg border border-border/50 bg-background/80 overflow-hidden neon-box">
              <div className="flex items-center gap-1.5 px-4 py-2 bg-secondary/50 border-b border-border/50">
                <div className="w-2.5 h-2.5 rounded-full bg-neon-red/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-neon-yellow/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-neon-green/80" />
                <span className="text-[10px] font-mono text-muted-foreground ml-2">about.py</span>
              </div>
              <div className="p-4 font-mono text-xs space-y-1 cyber-scanlines">
                <p><span className="text-primary">class</span> <span className="text-accent">AIEngineer</span>:</p>
                <p className="pl-4"><span className="text-primary">def</span> <span className="text-neon-blue">__init__</span>(self):</p>
                <p className="pl-8">self.passion = <span className="text-neon-green">"infinite"</span></p>
                <p className="pl-8">self.coffee = <span className="text-neon-green">True</span></p>
                <p className="pl-8">self.learning = <span className="text-neon-green">"always"</span></p>
                <p className="pl-8">self.mode = <span className="text-neon-yellow">"UNSTOPPABLE"</span></p>
                <p className="pl-4"><span className="text-primary">def</span> <span className="text-neon-blue">status</span>(self):</p>
                <p className="pl-8"><span className="text-primary">return</span> <span className="text-accent">"Building the future 🚀"</span></p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className={`hover-lift card-cyber rounded-lg border-0 group cursor-default glow-border`}
              >
                <CardContent className="p-5">
                  <div className={`p-2.5 rounded-lg ${item.bg} border ${item.borderColor} w-fit mb-3 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
