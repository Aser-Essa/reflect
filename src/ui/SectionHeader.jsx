import { motion } from "framer-motion";
import GridText from "./GridText";
import { useWidth } from "../hooks/useWidth";

// eslint-disable-next-line react/prop-types
function SectionHeader({ mainTitle, title, paragraph, bigFont, size, styles }) {
  const { width } = useWidth();
  return (
    <div className={`flex flex-col items-center gap-1 max-sm:w-full ${styles}`}>
      <motion.div
        className="xxx mb-0 flex h-[32px] w-fit items-center justify-center rounded-[32px] border border-[#4D2F8C] px-[14px] font-medium max-[860px]:mb-0"
        initial={{ translateY: -20, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <GridText size={width > 640 ? "16px" : "14px"}>{mainTitle}</GridText>
      </motion.div>
      <motion.p
        className={`text mb-0 max-[860px]:mb-0 ${bigFont ? "text-[72px] max-[860px]:text-[52px] max-sm:text-[30px]" : "text-[56px] max-[860px]:text-[42px] max-sm:text-[26px]"} text-center font-medium`}
        style={{ fontSize: size ? size : "" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {title}
      </motion.p>
      <motion.p
        className={`w-[600px] text-center max-sm:w-fit ${bigFont ? "text-[18px] max-[860px]:text-[14px]" : "text-[16px] max-[860px]:text-[12px]"} text-[#efedfdb3]`}
        initial={{ translateY: 20, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        {paragraph}
      </motion.p>
    </div>
  );
}

export default SectionHeader;
