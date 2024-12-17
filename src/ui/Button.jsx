import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function Button({ children }) {
  return (
    <motion.div
      initial={{ scale: 1.1, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <button className="glow h-[36px] rounded-lg border border-[#4D2F8C] px-4 text-sm font-medium">
        {children}
      </button>
    </motion.div>
  );
}

export default Button;
