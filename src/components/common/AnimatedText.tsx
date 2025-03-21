
import { motion } from "framer-motion";
import { ReactNode } from "react";

const textVariant = (delay?: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedText = ({ children, delay, className = "" }: AnimatedTextProps) => {
  return (
    <motion.div
      variants={textVariant(delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;
