import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "your.email@example.com", link: "mailto:your.email@example.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", link: "tel:+15551234567" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", link: null },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com/in/yourprofile", color: "text-[#0077b5]" },
  { icon: Github, label: "GitHub", link: "https://github.com/yourprofile", color: "text-foreground" },
  { icon: Mail, label: "Email", link: "mailto:your.email@example.com", color: "text-primary" },
];

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Let's collaborate on your next project. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-background/50 border-border/50">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} className="font-medium hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-border/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <p className="text-muted-foreground mb-6">
                Follow me on social media or send me a message directly
              </p>
              <div className="flex flex-col gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start border-border hover:bg-primary/10"
                    asChild
                  >
                    <a href={social.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <social.icon className={`w-5 h-5 ${social.color}`} />
                      <span>{social.label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <a href="mailto:your.email@example.com">Send Me an Email</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
