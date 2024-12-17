import { useWidth } from "../hooks/useWidth";
import FeatureCard from "../ui/FeatureCard";
import HalfLine from "../ui/HalfLine";
import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

function Research() {
  const { width } = useWidth();

  return (
    <>
      <SectionContainer styles="mt-[140px] max-sm:mt-[100px] max-sm:w-full ">
        <div
          className="relative z-50 mt-[443px] h-fit w-full max-sm:mt-[170px] max-sm:h-[676px]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #030014cc 0%, #030014 38%)",
          }}
        >
          <SectionHeader
            styles="mt-[67px] max-sm:mt-[30px]"
            mainTitle="Research and reading"
            title="Never lose information"
            paragraph="Collect your web snippets, Kindle highlights and important links – all in one place. Then quickly find them again from any device."
          />
          <div className="mx-auto mt-6 flex h-[212px] w-[890px] text-center max-[860px]:w-full max-[860px]:flex-col max-[860px]:items-center">
            <motion.div
              initial={{ translateX: "-50%", opacity: 0 }}
              whileInView={{ translateX: "0", opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <FeatureCard
                full={false}
                fill={"196px"}
                direction={"bottom"}
                title="Integrated with your devices"
                paragraph="We're everywhere, mobile or desktop, online or offline. Everything is synced in real-time."
                image="screens.png"
                center={true}
                styles=" max-[860px]:max-w-[70%] max-sm:max-w-[unset] "
              />
            </motion.div>
            <motion.div
              initial={{ translateX: "50%", opacity: 0 }}
              whileInView={{ translateX: "0", opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <FeatureCard
                full={false}
                fill={"196px"}
                direction={"top"}
                title="Secure but open"
                paragraph="End-to-end encryption keeps your notes secure. Our export and API keeps your notes accessible."
                image="lock.png"
                center={true}
                styles=" max-[860px]:max-w-[70%] max-sm:max-w-[unset] "
              />
            </motion.div>
            <HalfLine direction="bottom" />
          </div>
        </div>

        <motion.video
          initial={{ translateX: "-50%", opacity: 0 }}
          whileInView={{
            translateX: "-50%",
            opacity: 1,
            scale: width > 640 ? 1 : 1.8,
          }}
          transition={{ duration: 0.4, ease: "linear" }}
          loop
          autoPlay
          muted
          src="/radar.mp4"
          className="absolute left-[50%] top-0 z-[-1] h-[890px] max-w-[1440px] translate-x-[-50%] max-[860px]:w-[1100px] max-sm:top-[79px] max-sm:h-fit max-sm:w-full"
        ></motion.video>
      </SectionContainer>
    </>
  );
}

export default Research;
