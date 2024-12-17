/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Line from "./Line";

function FeatureCard({
  full,
  fill,
  direction,
  title,
  paragraph,
  image,
  styles,
  center,
}) {
  return (
    <motion.div
      className={`flex ${styles} max-[860px]:mx-auto max-[860px]:mb-4 max-[860px]:border max-[860px]:border-[#ffffff17] max-sm:w-full`}
      whileHover={{
        background:
          "radial-gradient(100% 100% at 0% 50% ,rgba(147,130,255,.08) 0%,rgba(147,130,255,0) 100%),#030014",
      }}
    >
      <Line
        full={full}
        fill={fill}
        direction={"vertical"}
        gradDirection={direction}
        bar={true}
        position={"top-[50%] translate-y-[-50%] left-0 h-5"}
        styles={"absolute"}
      />
      <div
        className={`card-content mx-8 mb-9 mt-6 flex w-full flex-col max-sm:mx-4 ${center ? "items-center" : ""} `}
      >
        <img src={`/${image}`} className="h-10 w-10" />
        <p className="mb-1.5 mt-[24px] font-medium">{title}</p>
        <p className="text-[#efedfd99]">{paragraph}</p>
      </div>
    </motion.div>
  );
}

export default FeatureCard;
