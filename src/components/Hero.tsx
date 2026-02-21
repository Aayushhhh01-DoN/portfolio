import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Sparkles, Zap, Brain } from "lucide-react";
import { useEffect, useState } from "react";

const roles = ["AI Engineer", "ML Architect", "Deep Learning Specialist", "Full Stack Developer"];

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
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 opacity-10">
        <Brain className="w-40 h-40 text-primary" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Content — takes 3 cols */}
          <div className="md:col-span-3 text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-mono text-primary uppercase tracking-widest">Available for work</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2 leading-[0.9] tracking-tight">
              <span className="text-foreground">Hi, I'm</span>
              <br />
              <span className="gradient-text text-glitch">Your Name</span>
            </h1>

            <div className="h-12 md:h-14 flex items-center justify-center md:justify-start mb-6">
              <span className="font-mono text-lg md:text-2xl text-muted-foreground">
                {">"} <span className="text-accent">{displayed}</span>
                <span className="inline-block w-0.5 h-5 bg-accent ml-1 animate-pulse" />
              </span>
            </div>

            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
              I architect intelligent systems that bridge the gap between cutting-edge 
              AI research and production-ready applications. From neural networks to 
              full-stack deployments — I make machines think.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group" asChild>
                <a href="#projects">
                  <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  View My Work
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button size="lg" variant="ghost" className="text-muted-foreground hover:text-accent hover:bg-accent/5" asChild>
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Stats strip */}
            <div className="flex gap-8 mt-12 justify-center md:justify-start">
              {[
                { num: "5+", label: "Years Exp" },
                { num: "50+", label: "Projects" },
                { num: "20+", label: "AI Models" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.num}</p>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Photo — takes 2 cols */}
          <div className="md:col-span-2 flex justify-center order-1 md:order-2">
            <div className="relative">
              {/* Orbiting ring */}
              <div className="absolute -inset-4 rounded-full border border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-8 rounded-full border border-dashed border-accent/10 animate-[spin_30s_linear_infinite_reverse]" />
              
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-3xl" />
              
              {/* Photo container */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_50px_hsl(280_100%_65%/0.2)] hover:shadow-[0_0_80px_hsl(280_100%_65%/0.4)] transition-all duration-500 hover:scale-105 hover:border-primary/60"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}
              >
                <img
                  src="/placeholder.svg"
                  alt="AI Engineer Portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-primary/10" />
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded bg-card border border-primary/30 shadow-lg">
                <span className="text-xs font-mono text-primary">🧠 AI/ML</span>
              </div>
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded bg-card border border-accent/30 shadow-lg">
                <span className="text-xs font-mono text-accent">⚡ Engineer</span>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        >
          <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">scroll</span>
          <ArrowDown className="w-4 h-4 text-primary animate-bounce" />
        </a>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
    </section>
  );
};
