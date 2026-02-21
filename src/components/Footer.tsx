import { Heart, Terminal } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-8 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono text-muted-foreground">
              <span className="text-primary">&lt;</span>Portfolio<span className="text-accent">/</span><span className="text-primary">&gt;</span>
            </span>
          </div>
          <p className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-accent fill-accent" /> using
            <span className="text-primary">React</span> &
            <span className="text-accent">Tailwind</span>
          </p>
          <p className="text-[10px] font-mono text-muted-foreground/50">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
