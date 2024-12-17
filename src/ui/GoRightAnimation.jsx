import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function GoRightAnimation({ children }) {
  return (
    <motion.div
      initial={{ translateX: "-100%", opacity: 0 }}
      whileInView={{ translateX: "0", opacity: 1 }}
      transition={{ duration: 1 }}
      className="border-b border-[#ffffff17] max-sm:border-b-0"
    >
      {children}
    </motion.div>
  );
}

export default GoRightAnimation;
