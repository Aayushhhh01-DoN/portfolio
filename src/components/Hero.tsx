import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Sparkles, Zap, Brain, Shield, CircuitBoard } from "lucide-react";
import { useEffect, useState } from "react";

const roles = ["AI Engineer", "ML Architect", "Deep Learning Specialist", "Full Stack Developer", "Neural Network Designer"];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Crazy decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl float-animation" />
      <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-neon-blue/5 rounded-full blur-2xl float-animation" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/3 left-1/5 w-32 h-32 bg-neon-green/5 rounded-full blur-2xl float-animation" style={{ animationDelay: "4s" }} />
      
      {/* Circuit board pattern */}
      <div className="absolute top-1/3 right-1/4 opacity-5">
        <Brain className="w-48 h-48 text-primary" />
      </div>
      <div className="absolute bottom-1/4 left-1/6 opacity-5">
        <CircuitBoard className="w-32 h-32 text-accent" />
      </div>
      <div className="absolute top-1/5 right-1/6 opacity-5">
        <Shield className="w-24 h-24 text-neon-blue" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Content — takes 3 cols */}
          <div className="md:col-span-3 text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-green/30 bg-neon-green/5 mb-6 pulse-neon">
              <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              <span className="text-xs font-mono text-neon-green uppercase tracking-widest">System Online — Available for work</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2 leading-[0.9] tracking-tight">
              <span className="text-foreground">Hi, I'm</span>
              <br />
              <span className="gradient-text text-glitch" data-text="Your Name">Your Name</span>
            </h1>

            <div className="h-12 md:h-14 flex items-center justify-center md:justify-start mb-6">
              <span className="font-mono text-lg md:text-2xl text-muted-foreground">
                <span className="text-neon-green">$</span> <span className="text-accent">{displayed}</span>
                <span className="inline-block w-0.5 h-5 bg-accent ml-1 animate-pulse" />
              </span>
            </div>

            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
              I architect intelligent systems that bridge the gap between cutting-edge 
              AI research and production-ready applications. From neural networks to 
              full-stack deployments — <span className="text-primary">I make machines think</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group neon-box hover:shadow-[0_0_30px_hsl(280_100%_65%/0.5)]  transition-shadow" asChild>
                <a href="#projects">
                  <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  View My Work
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50 hover:neon-box transition-all" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button size="lg" variant="ghost" className="text-muted-foreground hover:text-accent hover:bg-accent/5" asChild>
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Stats strip with neon styling */}
            <div className="flex gap-8 mt-12 justify-center md:justify-start">
              {[
                { num: "5+", label: "Years Exp", color: "primary" },
                { num: "50+", label: "Projects", color: "accent" },
                { num: "20+", label: "AI Models", color: "neon-blue" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left group cursor-default">
                  <p className="text-2xl md:text-3xl font-bold gradient-text group-hover:neon-glow transition-all">{stat.num}</p>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Photo — takes 2 cols */}
          <div className="md:col-span-2 flex justify-center order-1 md:order-2">
            <div className="relative">
              {/* Orbiting rings */}
              <div className="absolute -inset-6 rounded-full border border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-12 rounded-full border border-dashed border-accent/10 animate-[spin_30s_linear_infinite_reverse]" />
              <div className="absolute -inset-16 rounded-full border border-dotted border-neon-blue/10 animate-[spin_40s_linear_infinite]" />
              
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-3xl animate-pulse" />
              
              {/* Photo container */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_50px_hsl(280_100%_65%/0.3)] hover:shadow-[0_0_100px_hsl(280_100%_65%/0.5)] transition-all duration-500 hover:scale-105 hover:border-primary/60 scan-line"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}
              >
                <img
                  src="/placeholder.svg"
                  alt="AI Engineer Portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-primary/10" />
                <div className="absolute inset-0 holo-shimmer" />
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded bg-card border border-primary/30 shadow-lg neon-box float-animation">
                <span className="text-xs font-mono text-primary">🧠 AI/ML</span>
              </div>
              <div className="absolute -top-4 -right-4 px-3 py-1.5 rounded bg-card border border-accent/30 shadow-lg float-animation" style={{ animationDelay: "1s" }}>
                <span className="text-xs font-mono text-accent">⚡ Engineer</span>
              </div>
              <div className="absolute top-1/2 -right-6 px-2 py-1 rounded bg-card border border-neon-blue/30 shadow-lg float-animation" style={{ animationDelay: "3s" }}>
                <span className="text-[10px] font-mono text-neon-blue">🔮 Neural</span>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        >
          <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">scroll.down()</span>
          <ArrowDown className="w-4 h-4 text-primary animate-bounce" />
        </a>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
    </section>
  );
};
