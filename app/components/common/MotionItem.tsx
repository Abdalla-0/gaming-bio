"use client";
import { motion } from "framer-motion";
type TMotionProps = {
  children: React.ReactNode;
  className?: string;
  initial: any;
  animate: any;
};
const MotionItem = ({ children, className, initial, animate }: TMotionProps) => {
  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      className={`${className || ""}`}
    >
      {children}
    </motion.div>
  );
};

export default MotionItem;
