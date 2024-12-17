import { FaPlay } from "react-icons/fa";
import SectionHeader from "../ui/SectionHeader";
import SparklesPreview from "../ui/SparklesPreview";
import { motion } from "framer-motion";
import { useWidth } from "../hooks/useWidth";

function HeroSection() {
  const { width } = useWidth();

  return (
    <div
      className="relative h-[1170px] w-full max-sm:h-[630px]"
      style={{
        background:
          "radial-gradient(37.74% 81.78% at 50% 26.56%, rgba(148, 101, 255, .08) 0%, rgba(3, 0, 20, 0) 100%)",
      }}
    >
      <SectionHeader
        mainTitle="Think better with Reflect"
        title="Think better with Reflect"
        paragraph="Never miss a note, idea or connection."
        bigFont={true}
        styles=" absolute top-[173px] left-[50%] translate-x-[-50%] w-full h-[186px] gap-1 max-sm:top-[120px] "
      />
      <motion.img
        initial={{ scale: 0, translateX: "-50%" }}
        whileInView={{ scale: 1, translateX: "-50%" }}
        transition={{ duration: 0.8 }}
        src="/rings.png"
        className="absolute left-[50%] top-[172px] z-[0] max-w-[755px] translate-x-[-50%] brightness-[.5] max-sm:hidden max-sm:w-[495px]"
      />
      <motion.div className="absolute left-[50%] top-[340px] z-[0] h-[290px] w-[290px] translate-x-[-50%] max-sm:top-[242px] max-sm:h-[80px] max-sm:w-[130px]">
        <SparklesPreview styles="w-full h-full " particleDensity={70} />
      </motion.div>
      <motion.video
        initial={{ scaleX: 0, scaleY: 0, translateX: "-50%" }}
        whileInView={{
          scaleX: width > 860 ? 1 : 1.4,
          scaleY: width > 860 ? 1 : 1.5,
          translateX: "-50%",
        }}
        transition={{ duration: 0.6, delay: 0.4 }}
        src="/blackhole.webm"
        autoPlay
        loop
        muted
        className="absolute left-[50%] top-[172px] z-[-1] h-[810px] max-w-full max-[860px]:top-[120px] max-[860px]:w-[1100px] max-sm:top-[170px] max-sm:h-[300px] max-sm:w-full max-sm:scale-[1.5]"
      ></motion.video>
      <motion.img
        className="absolute left-[50%] top-[570px] z-[15] h-[767px] max-w-full translate-x-[-50%] max-[860px]:top-[524px] max-[860px]:h-[600px] max-[860px]:w-[731px] max-sm:top-[320px] max-sm:h-[350px] max-sm:w-full"
        src="/window.png"
        initial={{ translateY: 50, translateX: "-50%", opacity: 0 }}
        whileInView={{ translateY: 0, translateX: "-50%", opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      />
      <div className="absolute left-[50%] top-[570px] z-[10] h-[767px] w-full translate-x-[-50%] backdrop-blur-[10px] max-[860px]:top-[524px] max-[860px]:h-[600px] max-[860px]:w-[731px] max-sm:top-[320px] max-sm:h-[350px] max-sm:w-full"></div>
      <div className="layer absolute left-[50%] top-[570px] z-20 flex h-[767px] w-[1220px] translate-x-[-50%] items-center justify-center max-[860px]:top-[524px] max-sm:top-[320px] max-sm:h-[350px]">
        <div className="absolute top-[33%] flex h-[112px] w-[112px] items-center justify-center rounded-[50%] border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] max-sm:h-[90px] max-sm:w-[90px]">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-[50%] bg-[rgba(255,255,255,0.05)] max-sm:h-[70px] max-sm:w-[70px]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom , #fff0 18% , #fff3 100%)",
            }}
          >
            <FaPlay />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
