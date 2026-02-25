import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone, Send, ArrowUpRight, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contactInfo = [
  { icon: Mail, label: "Email", value: "your.email@example.com", link: "mailto:your.email@example.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", link: "tel:+15551234567" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", link: null },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com/in/yourprofile", desc: "Connect professionally" },
  { icon: Github, label: "GitHub", link: "https://github.com/yourprofile", desc: "View my repositories" },
  { icon: Mail, label: "Email", link: "mailto:your.email@example.com", desc: "Send me a message" },
];

export const Contact = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 relative">
      <div ref={ref} className={`container mx-auto max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="flex items-center gap-3 mb-2 justify-center">
          <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-[10px] sm:text-xs font-mono text-primary uppercase tracking-[0.3em] neon-glow">// Contact</span>
          <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className={`card-cyber rounded-lg p-5 sm:p-6 space-y-5 sm:space-y-6 glow-border transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <h3 className="text-base sm:text-lg font-bold font-mono flex items-center gap-2">
              <Send className="w-4 h-4 text-primary" /> Get in Touch
              <Zap className="w-3 h-3 text-neon-yellow animate-pulse" />
            </h3>
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-3 sm:gap-4 group">
                <div className="p-2 sm:p-2.5 rounded-lg bg-primary/5 border border-primary/10 group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:neon-box transition-all shrink-0">
                  <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="text-xs sm:text-sm font-medium hover:text-primary hover:neon-glow transition-all truncate block">{item.value}</a>
                  ) : (
                    <p className="text-xs sm:text-sm font-medium truncate">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={`space-y-2.5 sm:space-y-3 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-cyber rounded-lg p-4 sm:p-5 flex items-center gap-3 sm:gap-4 group hover-lift glow-border block"
              >
                <div className="p-2 sm:p-2.5 rounded-lg bg-secondary/50 group-hover:bg-primary/10 group-hover:neon-box transition-all shrink-0">
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-xs sm:text-sm group-hover:text-primary transition-colors">{social.label}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">{social.desc}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono neon-box hover:shadow-[0_0_40px_hsl(175_85%_50%/0.4)] transition-shadow" asChild>
            <a href="mailto:your.email@example.com">
              <Mail className="w-4 h-4 mr-2" /> Send Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
