import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import Arrow from "./Arrow";
import { motion } from "framer-motion";

function ControlBar() {
  return (
    <motion.div
      className="mt-auto flex w-full items-center justify-center gap-5 bg-[#03001480] max-sm:flex-col"
      initial={{ translateX: "-50%", opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="flex items-center max-sm:gap-2">
        <p className="mr-2.5 text-xs text-[#efedfd52]">
          Press “Controls” to play:
        </p>
        <div className="flex items-center gap-2">
          <Arrow>
            <IoMdArrowDropleft />
          </Arrow>

          <Arrow>
            <IoMdArrowDropup />
          </Arrow>

          <Arrow>
            <IoMdArrowDropdown />
          </Arrow>

          <Arrow>
            <IoMdArrowDropright />
          </Arrow>
        </div>
      </div>
      <div className="flex items-center gap-8 max-sm:gap-4">
        <div className="flex items-center gap-2">
          <p className="text-xs text-[#efedfd52]">Rotate</p>
          <Arrow>
            <IoMdArrowDropup />
          </Arrow>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xs text-[#efedfd52]">Fall Faster:</p>
          <Arrow>
            <IoMdArrowDropdown />
          </Arrow>
        </div>
      </div>
    </motion.div>
  );
}

export default ControlBar;
