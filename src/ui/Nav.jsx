import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Nav() {
  return (
    <motion.ul
      className="mx-auto flex h-[42px] w-[407px] items-center justify-center gap-6 rounded-[999px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] px-[13px] py-2.5 text-sm max-[860px]:hidden"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <li className="cursor-pointer transition-all hover:text-[#fff9]">
        <Link to="product" duration={500} smooth offset={45}>
          Product
        </Link>
      </li>

      <li className="cursor-pointer transition-all hover:text-[#fff9]">
        <Link to="pricing" duration={500} smooth offset={45}>
          Pricing
        </Link>
      </li>

      <li className="cursor-pointer transition-all hover:text-[#fff9]">
        <Link to="about" duration={500} smooth offset={45}>
          Company
        </Link>
      </li>
      <li className="cursor-pointer transition-all hover:text-[#fff9]">Blog</li>
      <li className="cursor-pointer transition-all hover:text-[#fff9]">
        Changelog
      </li>
    </motion.ul>
  );
}

export default Nav;
