import { useWidth } from "../hooks/useWidth";
import Button from "../ui/Button";
import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import SparklesPreview from "../ui/SparklesPreview";
import { motion } from "framer-motion";

function GetStarted() {
  const { width } = useWidth();
  return (
    <>
      <SectionContainer styles="mt-[140px] max-sm:mt-[100px] h-[536px] w-full gap-8 max-sm:h-[350px]">
        <SectionHeader
          mainTitle="Get Started"
          title="Think better with Reflect"
          paragraph="Never miss a note, idea or connection."
        />
        <Button>Start your 14-day trial</Button>
        <div className="absolute top-[240px] z-[0] mx-auto h-[300px] w-[600px] max-sm:top-[249px] max-sm:h-[100px] max-sm:w-[170px]">
          <SparklesPreview styles="w-full h-full" particleDensity={45} />
        </div>
        <motion.video
          src="/blackhole.webm"
          autoPlay
          loop
          muted
          className="absolute top-[-30px] z-[-1] h-[1125px] max-w-[2000px] max-[860px]:w-[1100px] max-sm:top-[190px] max-sm:h-[317px] max-sm:w-full"
          initial={{ scale: 0 }}
          whileInView={{ scale: width > 640 ? 1 : 1.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        ></motion.video>
      </SectionContainer>
    </>
  );
}

export default GetStarted;
