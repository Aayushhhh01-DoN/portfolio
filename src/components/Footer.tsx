import { Heart, Terminal } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-8 relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-primary/60" />
            <span className="text-xs font-mono text-muted-foreground">
              <span className="text-primary/60">&lt;</span>Portfolio<span className="text-accent/60">/&gt;</span>
            </span>
          </div>
          <p className="text-[10px] sm:text-xs font-mono text-muted-foreground/60 flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-accent/60" /> using
            <span className="text-primary/60">React</span> &
            <span className="text-accent/60">Tailwind</span>
          </p>
          <p className="text-[9px] font-mono text-muted-foreground/40">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
