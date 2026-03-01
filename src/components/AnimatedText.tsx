import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export const AnimatedText = ({ text, className = "", delay = 0, once = true }: AnimatedTextProps) => {
  const words = text.split(" ");

  return (
    <motion.span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, rotateX: 90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mr-[0.3em] inline-block"
          style={{ perspective: "500px" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};
