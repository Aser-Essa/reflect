import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function GoLeftAnimation({ children }) {
  return (
    <motion.div
      initial={{ translateX: "100%", opacity: 0 }}
      whileInView={{ translateX: "0", opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-sm:border-0"
    >
      {children}
    </motion.div>
  );
}

export default GoLeftAnimation;
