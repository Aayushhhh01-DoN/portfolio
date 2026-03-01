import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";
import { MagneticButton } from "./MagneticButton";
import { AnimatedText } from "./AnimatedText";

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
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24 relative">
      <div className="section-divider mb-20 sm:mb-28" />
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] sm:text-xs font-mono text-primary/70 uppercase tracking-[0.3em] mb-3 block"
          >
            Contact
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <AnimatedText text="Let's" /> <span className="gradient-text"><AnimatedText text="Connect" delay={0.1} /></span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base text-muted-foreground mt-4 max-w-xl mx-auto"
          >
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10" style={{ perspective: "1000px" }}>
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <TiltCard>
              <div className="glass-card rounded-xl p-5 sm:p-6 space-y-5 glow-border h-full">
                <h3 className="text-sm sm:text-base font-bold font-mono flex items-center gap-2">
                  <Send className="w-4 h-4 text-primary" /> Get in Touch
                </h3>
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="p-2 rounded-lg bg-primary/5 border border-primary/10 group-hover:border-primary/25 group-hover:bg-primary/8 transition-all shrink-0"
                    >
                      <item.icon className="w-3.5 h-3.5 text-primary/70 group-hover:text-primary transition-colors" />
                    </motion.div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">{item.label}</p>
                      {item.link ? (
                        <a href={item.link} className="text-xs sm:text-sm font-medium hover:text-primary transition-colors truncate block">{item.value}</a>
                      ) : (
                        <p className="text-xs sm:text-sm font-medium truncate">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TiltCard>
          </motion.div>

          <div className="space-y-3">
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <motion.a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass-card rounded-xl p-4 flex items-center gap-3 group glow-border block"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-2 rounded-lg bg-secondary/40 group-hover:bg-primary/8 transition-all shrink-0"
                  >
                    <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-xs sm:text-sm group-hover:text-primary transition-colors">{social.label}</p>
                    <p className="text-[10px] text-muted-foreground">{social.desc}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/20 group-hover:text-primary transition-all shrink-0" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <MagneticButton>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono transition-all duration-300 hover:shadow-[0_8px_30px_hsl(172_66%_50%/0.3)] relative overflow-hidden group" asChild>
              <a href="mailto:your.email@example.com">
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent/30 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="relative flex items-center">
                  <Mail className="w-4 h-4 mr-2" /> Send Email
                </span>
              </a>
            </Button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};
