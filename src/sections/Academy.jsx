import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";
import SectionContainer from "../ui/SectionContainer";
import ControlBar from "../ui/ControlBar";

function Academy() {
  return (
    <>
      <SectionContainer styles="mb-2 mt-5 h-[684px] w-full max-sm:mt-[100px] max-sm:h-[365px]">
        <div className="max-sm:w-[85%]">
          <SectionHeader
            styles="mt-[160px] w-[589px] max-[860px]:w-[480px] max-sm:mt-0 "
            mainTitle="Academy"
            title="Learn how to take great notes at our academy"
            paragraph="Master the principles of note-taking in Reflect's free online Academy."
          />
        </div>
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button className="glow-1 mx-auto mt-10 h-[36px] rounded-lg border border-[#f3eeff14] px-4 text-sm font-medium">
            Take the course
          </button>
        </motion.div>
        <ControlBar />
        <motion.img
          src="/academy.png"
          className="absolute left-[50%] top-[0px] z-[-1] h-[640px] max-w-[896px] max-[860px]:w-[90%] max-sm:top-0 max-sm:h-[285px]"
          initial={{ translateY: 110, translateX: "-50%", opacity: 0 }}
          whileInView={{ translateY: 0, translateX: "-50%", opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
      </SectionContainer>
    </>
  );
}

export default Academy;
