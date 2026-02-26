import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";
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
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24 relative">
      <div className="section-divider mb-20 sm:mb-28" />
      <div ref={ref} className={`container mx-auto max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-14">
          <span className="text-[10px] sm:text-xs font-mono text-primary/70 uppercase tracking-[0.3em] mb-3 block">Contact</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          <div className={`glass-card rounded-xl p-5 sm:p-6 space-y-5 glow-border transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <h3 className="text-sm sm:text-base font-bold font-mono flex items-center gap-2">
              <Send className="w-4 h-4 text-primary" /> Get in Touch
            </h3>
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-primary/5 border border-primary/10 group-hover:border-primary/25 group-hover:bg-primary/8 transition-all shrink-0">
                  <item.icon className="w-3.5 h-3.5 text-primary/70 group-hover:text-primary transition-colors" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="text-xs sm:text-sm font-medium hover:text-primary transition-colors truncate block">{item.value}</a>
                  ) : (
                    <p className="text-xs sm:text-sm font-medium truncate">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={`space-y-3 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-4 flex items-center gap-3 group hover-lift glow-border block"
              >
                <div className="p-2 rounded-lg bg-secondary/40 group-hover:bg-primary/8 transition-all shrink-0">
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-xs sm:text-sm group-hover:text-primary transition-colors">{social.label}</p>
                  <p className="text-[10px] text-muted-foreground">{social.desc}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground/20 group-hover:text-primary transition-all shrink-0" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono transition-all duration-300 hover:shadow-[0_8px_30px_hsl(172_66%_50%/0.25)]" asChild>
            <a href="mailto:your.email@example.com">
              <Mail className="w-4 h-4 mr-2" /> Send Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
