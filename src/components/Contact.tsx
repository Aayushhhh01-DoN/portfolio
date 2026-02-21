import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";

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
  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-2 justify-center">
          <div className="h-[1px] w-12 bg-primary/50" />
          <span className="text-xs font-mono text-primary uppercase tracking-[0.3em]">Contact</span>
          <div className="h-[1px] w-12 bg-primary/50" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Contact info */}
          <div className="card-cyber rounded-lg p-6 space-y-6">
            <h3 className="text-lg font-bold font-mono flex items-center gap-2">
              <Send className="w-4 h-4 text-primary" />
              Get in Touch
            </h3>
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="p-2.5 rounded-lg bg-primary/5 border border-primary/10 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="text-sm font-medium hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="space-y-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-cyber rounded-lg p-5 flex items-center gap-4 group hover-lift block"
              >
                <div className="p-2.5 rounded-lg bg-secondary/50 group-hover:bg-primary/10 transition-all">
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm group-hover:text-primary transition-colors">{social.label}</p>
                  <p className="text-xs text-muted-foreground">{social.desc}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono" asChild>
            <a href="mailto:your.email@example.com">
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
