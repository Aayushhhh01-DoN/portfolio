import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Sparkles, Brain, Cpu, Network } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";
import { AnimatedText } from "./AnimatedText";

const highlights = [
  { icon: Brain, title: "AI Architecture", description: "Designing scalable ML pipelines and neural network architectures" },
  { icon: Cpu, title: "Production ML", description: "Deploying models at scale with monitoring and optimization" },
  { icon: Code2, title: "Clean Code", description: "Writing maintainable, scalable, and efficient systems" },
  { icon: Network, title: "Full Stack", description: "End-to-end development from APIs to beautiful frontends" },
  { icon: Palette, title: "Design Focus", description: "Creating intuitive and visually compelling interfaces" },
  { icon: Sparkles, title: "Innovation", description: "Always exploring cutting-edge technologies and research" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 15 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24 relative">
      <div className="section-divider mb-20 sm:mb-28" />
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] sm:text-xs font-mono text-primary/70 uppercase tracking-[0.3em] mb-3 block"
          >
            About Me
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <AnimatedText text="Building the" />
            {" "}
            <span className="gradient-text"><AnimatedText text="Future" delay={0.2} /></span>
            {" "}
            <AnimatedText text="with AI" delay={0.3} />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base text-muted-foreground mt-4 max-w-xl mx-auto"
          >
            A passionate AI engineer bridging research and real-world applications
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start mb-14">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
            style={{ perspective: "1000px" }}
          >
            <div className="glass-card p-5 sm:p-6 rounded-xl">
              <p className="text-base sm:text-lg leading-relaxed">
                I'm an <span className="text-primary font-medium">AI Engineer</span> with a deep passion for 
                machine learning, deep learning, and building intelligent systems that solve 
                complex real-world challenges.
              </p>
            </div>
            <div className="glass-card p-5 sm:p-6 rounded-xl">
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                From designing neural network architectures to deploying production ML pipelines, 
                I work across the full AI stack. My approach combines rigorous research methodology 
                with pragmatic engineering.
              </p>
            </div>

            {/* Terminal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-xl border border-border/60 bg-card/40 backdrop-blur overflow-hidden"
            >
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-secondary/40 border-b border-border/40">
                <motion.div whileHover={{ scale: 1.3 }} className="w-2 h-2 rounded-full bg-neon-red/60" />
                <motion.div whileHover={{ scale: 1.3 }} className="w-2 h-2 rounded-full bg-neon-yellow/60" />
                <motion.div whileHover={{ scale: 1.3 }} className="w-2 h-2 rounded-full bg-neon-green/60" />
                <span className="text-[10px] font-mono text-muted-foreground/60 ml-2">about.py</span>
              </div>
              <div className="p-4 font-mono text-[11px] space-y-1">
                <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                  <span className="text-primary/70">class</span> <span className="text-accent">AIEngineer</span>:
                </motion.p>
                <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="pl-4">
                  <span className="text-primary/70">def</span> <span className="text-neon-blue">__init__</span>(self):
                </motion.p>
                <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }} className="pl-8">
                  self.passion = <span className="text-neon-green">"infinite"</span>
                </motion.p>
                <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="pl-8">
                  self.learning = <span className="text-neon-green">"always"</span>
                </motion.p>
                <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.9 }} className="pl-8">
                  self.mode = <span className="text-accent">"building"</span>
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3"
            style={{ perspective: "1000px" }}
          >
            {highlights.map((item, index) => (
              <motion.div key={index} variants={cardVariants}>
                <TiltCard>
                  <Card className="glass-card border-0 group cursor-default glow-border transition-all duration-500 h-full">
                    <CardContent className="p-4 sm:p-5">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="p-2 rounded-lg bg-primary/5 border border-primary/10 w-fit mb-3 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all"
                      >
                        <item.icon className="w-4 h-4 text-primary" />
                      </motion.div>
                      <h3 className="font-semibold text-xs sm:text-sm mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
