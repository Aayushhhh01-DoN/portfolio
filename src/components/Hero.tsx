import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HeroScene } from "./HeroScene";
import { MagneticButton } from "./MagneticButton";
import { AnimatedText } from "./AnimatedText";

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
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
      <HeroScene />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-center">
          {/* Content */}
          <div className="md:col-span-3 text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neon-green/20 bg-neon-green/5 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono text-neon-green/80 uppercase tracking-widest">Available for work</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 leading-[1] tracking-tight font-display">
              <AnimatedText text="Hi, I'm" delay={0.3} />
              <br />
              <span className="gradient-text">
                <AnimatedText text="Your Name" delay={0.5} />
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="h-8 sm:h-10 flex items-center justify-center md:justify-start mb-6"
            >
              <span className="font-mono text-sm sm:text-base md:text-lg text-muted-foreground">
                <span className="text-primary/60">→</span> <span className="text-foreground/80">{displayed}</span>
                <span className="inline-block w-0.5 h-4 bg-primary/60 ml-1 animate-pulse" />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-sm sm:text-base text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
            >
              I architect intelligent systems that bridge cutting-edge 
              AI research and production-ready applications. From neural networks to 
              full-stack deployments — <span className="text-primary font-medium">I make machines think</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
            >
              <MagneticButton>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group transition-all duration-300 hover:shadow-[0_8px_30px_hsl(172_66%_50%/0.3)] relative overflow-hidden" asChild>
                  <a href="#projects">
                    <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      View My Work
                    </span>
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button size="lg" variant="outline" className="border-border hover:border-primary/40 text-foreground hover:bg-primary/5 transition-all" asChild>
                  <a href="#contact">Get In Touch</a>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button size="lg" variant="ghost" className="text-muted-foreground hover:text-foreground" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    CV
                  </a>
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 justify-center md:justify-start">
              {[
                { num: "5+", label: "Years" },
                { num: "50+", label: "Projects" },
                { num: "20+", label: "AI Models" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + i * 0.15 }}
                  className="text-center md:text-left"
                >
                  <motion.p
                    className="text-2xl sm:text-3xl font-bold gradient-text"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stat.num}
                  </motion.p>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="md:col-span-2 flex justify-center order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
              style={{ perspective: "1000px" }}
            >
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/5 blur-2xl animate-pulse" />
              
              <motion.div
                whileHover={{ rotateY: 5, rotateX: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-border/80 hover:border-primary/30 transition-all duration-700 hover:shadow-[0_20px_60px_hsl(172_66%_50%/0.15)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src="/placeholder.svg"
                  alt="AI Engineer Portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </motion.div>

              {/* Floating badges with 3D */}
              <motion.div
                animate={{ y: [0, -10, 0], rotateZ: [0, 3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-2 px-2.5 py-1 rounded-lg bg-card/90 backdrop-blur border border-border/60"
              >
                <span className="text-[10px] font-mono text-primary">🧠 AI/ML</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0], rotateZ: [0, -3, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-2 -right-2 px-2.5 py-1 rounded-lg bg-card/90 backdrop-blur border border-border/60"
              >
                <span className="text-[10px] font-mono text-accent">⚡ Engineer</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        >
          <span className="text-[10px] font-mono text-muted-foreground/60 group-hover:text-primary transition-colors">scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};
