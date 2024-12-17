import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import SparklesPreview from "../ui/SparklesPreview";
import { motion } from "framer-motion";

function About() {
  return (
    <div id="about">
      <SectionContainer
        styles="w-full mt-[140px] max-sm:mt-[100px]  "
        id="company"
      >
        <SectionHeader
          styles="w-[592px]"
          mainTitle="About"
          title="We're an indie team dotted across the globe"
          paragraph="Our mission is to improve the way people think by making a jolly good note-taking app."
        />
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button className="glow-1 mx-auto mt-10 h-[36px] rounded-lg border border-[#f3eeff14] px-4 text-sm font-medium">
            See our values
          </button>
        </motion.div>
        <div className="absolute top-[330px] z-[0] mx-auto h-[320px] w-[900px] max-sm:top-[240px] max-sm:h-[200px] max-sm:w-full">
          <SparklesPreview styles="w-full h-full" particleDensity={20} />
        </div>
        <motion.video
          src="/earth.mp4"
          autoPlay
          loop
          muted
          className="max-sm:max-w-auto max-max-w-[900px] max-[860px]:w-[700px]"
          initial={{ scale: 0, translateY: 50, opacity: 0 }}
          whileInView={{ scale: 1, translateY: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "linear" }}
        ></motion.video>
      </SectionContainer>
    </div>
  );
}

export default About;
