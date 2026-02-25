import { Heart, Terminal, Zap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-primary/10 py-6 sm:py-8 relative cyber-scanlines">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono text-muted-foreground">
              <span className="text-primary neon-glow">&lt;</span>Portfolio<span className="text-accent neon-glow-accent">/</span><span className="text-primary neon-glow">&gt;</span>
            </span>
          </div>
          <p className="text-[10px] sm:text-xs font-mono text-muted-foreground flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-accent fill-accent" /> &
            <Zap className="w-3 h-3 text-neon-yellow" /> using
            <span className="text-primary">React</span> &
            <span className="text-accent">Tailwind</span>
          </p>
          <p className="text-[9px] sm:text-[10px] font-mono text-muted-foreground/50">
            © {new Date().getFullYear()} // All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
