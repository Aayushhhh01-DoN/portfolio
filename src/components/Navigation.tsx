import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
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
          ? "bg-background/80 backdrop-blur-xl border-b border-primary/10 shadow-[0_4px_30px_hsl(280_100%_65%/0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-12">
        <a href="#home" className="flex items-center gap-2 group">
          <Terminal className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
          <span className="font-mono text-sm font-bold tracking-wider">
            <span className="text-primary">&lt;</span>
            <span className="text-foreground">Portfolio</span>
            <span className="text-accent">/</span>
            <span className="text-primary">&gt;</span>
          </span>
        </a>

        <div className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative px-4 py-2 text-xs font-mono uppercase tracking-widest transition-all duration-300 rounded ${
                activeSection === item.href.slice(1)
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {activeSection === item.href.slice(1) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-primary rounded-full" />
              )}
              {item.label}
            </a>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground hover:text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-t border-primary/10">
          <div className="flex flex-col p-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-3 text-sm font-mono uppercase tracking-widest transition-all rounded ${
                  activeSection === item.href.slice(1)
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-primary mr-2">//</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
