import { useState, useEffect } from "react";
import { Menu, X, Terminal, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map(item => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-2xl border-b border-primary/10 shadow-[0_4px_30px_hsl(175_85%_50%/0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3 md:px-12">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative">
            <Terminal className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
            <div className="absolute -inset-1 bg-primary/15 rounded blur-sm group-hover:bg-accent/15 transition-colors" />
          </div>
          <span className="font-mono text-sm font-bold tracking-wider">
            <span className="text-primary neon-glow">&lt;</span>
            <span className="text-foreground">Portfolio</span>
            <span className="text-accent neon-glow-accent">/</span>
            <span className="text-primary neon-glow">&gt;</span>
          </span>
        </a>

        <div className="hidden md:flex gap-0.5 items-center bg-secondary/30 rounded-lg p-1 border border-border/30">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest transition-all duration-300 rounded-md ${
                activeSection === item.href.slice(1)
                  ? "text-primary bg-primary/10 neon-box"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Wifi className="w-3 h-3 text-neon-green animate-pulse" />
          <span className="text-[10px] font-mono text-neon-green">ONLINE</span>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground hover:text-primary hover:bg-primary/5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-2xl border-t border-primary/10 cyber-scanlines">
          <div className="flex flex-col p-3 sm:p-4">
            {navItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2.5 text-sm font-mono uppercase tracking-widest transition-all rounded ${
                  activeSection === item.href.slice(1)
                    ? "text-primary bg-primary/5 neon-box"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-primary mr-2">{String(i + 1).padStart(2, '0')}.</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
