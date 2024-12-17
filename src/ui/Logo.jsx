import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Logo() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Link
        to="top"
        duration={500}
        smooth
        offset={45}
        className="flex cursor-pointer items-center gap-3"
      >
        <img src="/logo.png" />
        <p className="font-medium">Reflect</p>
      </Link>
    </motion.div>
  );
}

export default Logo;
