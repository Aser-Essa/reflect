import Question from "../ui/Question";
import SectionHeader from "../ui/SectionHeader";
import SectionContainer from "../ui/SectionContainer";

import Services from "../ui/Services";
import SparklesPreview from "../ui/SparklesPreview";
import { motion } from "framer-motion";

function AiAssistant() {
  return (
    <>
      <SectionContainer styles="pt-[140px] max-sm:pt-[100px] ">
        <SectionHeader
          mainTitle="Reflect AI"
          title="Notes with an AI assistant"
          paragraph="Reflect uses GPT-4 and Whisper from OpenAI to improve your writing, organize your thoughts, and act as your intellectual thought partner."
          styles={" max-sm:w-[89%]"}
        />
        <div className="absolute top-[170px] z-[0] h-[140px] max-w-[1100px]">
          <SparklesPreview styles="w-full h-full" particleDensity={40} />
        </div>
        <Question />
        <Services />
        <motion.img
          src="/light.png"
          className="absolute top-[200px] z-[-1] h-[835px] max-w-[1440px] max-sm:top-[45px] max-sm:h-[700px] max-sm:max-w-[1240px]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </SectionContainer>
    </>
  );
}

export default AiAssistant;
