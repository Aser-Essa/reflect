import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

function Meetings() {
  return (
    <>
      <SectionContainer styles="h-[1154px] w-full max-[860px]:h-[980px] max-sm:mt-[60px] max-sm:h-[605px]">
        <div className="absolute top-[330px] max-sm:top-[185px]">
          <SectionHeader
            styles="mx-auto w-[450px]"
            mainTitle="Meetings"
            title="Get more out of your meetings"
            paragraph="Keep track of all your meetings and what was discussed. Import events quickly with our Google Calendar and Outlook integrations."
          />
          <div className="relative">
            <motion.img
              src="/window-2.png"
              className="mt-[70px] h-[466px] w-[896px] max-[860px]:h-[280px] max-[860px]:w-auto max-sm:mt-[45px]"
              initial={{ translateY: 50, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            />
            <div className="layer absolute bottom-[-60px] left-[50%] h-[280px] w-[1440px] translate-x-[-50%] max-sm:bottom-0"></div>
          </div>
        </div>
        <motion.img
          src="/light-2.png"
          className="absolute left-[50%] top-[35px] z-[-1] h-[431px] max-w-[812px] translate-x-[-50%] max-sm:h-[200px] max-sm:scale-[1.30]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        />
      </SectionContainer>
    </>
  );
}

export default Meetings;
