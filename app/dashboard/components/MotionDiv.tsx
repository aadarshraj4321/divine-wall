// components/MotionDiv.tsx
import { motion } from 'framer-motion';

interface MotionDivProps {
  children: React.ReactNode;
}

const MotionDiv: React.FC<MotionDivProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16"
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
