import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Photo Section */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_40px_hsl(var(--primary)/0.3)] hover:scale-105 transition-transform duration-300">
              <img 
                src="/placeholder.svg" 
                alt="AI Engineer Portrait" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />
            </div>
          </div>

          {/* Introduction Section */}
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-accent text-sm md:text-base font-medium mb-4 tracking-wider uppercase">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Hi, I'm <span className="gradient-text">Your Name</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
              AI Engineer & Developer
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl">
              Specializing in artificial intelligence and machine learning solutions. 
              I build intelligent systems that solve real-world problems, leveraging 
              cutting-edge AI technologies to create innovative applications that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
        
        <a
          href="#about"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </a>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
    </section>
  );
};
