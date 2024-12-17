import { useWidth } from "../hooks/useWidth";
import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

function Security() {
  const { width } = useWidth();

  return (
    <>
      <SectionContainer styles="h-[740px] w-full max-[860px]:h-[860px] max-sm:h-[250px] mt-0 max-sm:mt-[100px]">
        <div className="absolute top-[340px] max-[860px]:top-[370px] max-sm:top-[44px]">
          <motion.img
            src="/logo-lock.png"
            className="mx-auto mb-2 h-[102px] w-20 max-[860px]:h-[80px] max-[860px]:w-[60px] max-sm:mb-0 max-sm:h-[82px] max-sm:w-[60px]"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: width > 640 ? 1 : 0.7, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          />
          <SectionHeader
            mainTitle="Encryption"
            title="Hardened security"
            paragraph={
              width > 640
                ? `The contents of your notes are end-to-end encrypted. No one else can read them (not even us).`
                : ""
            }
          />
        </div>
        <motion.video
          src="/encryption.webm"
          autoPlay
          loop
          muted
          className="absolute left-[50%] top-[35px] z-[-1] h-[882px] max-w-[1440px] translate-x-[-50%] max-[860px]:w-[130%] max-sm:h-fit max-sm:w-full"
          initial={{ translateX: "-50%", scaleX: 0, scaleY: 0, opacity: 0 }}
          whileInView={{
            translateX: "-50%",
            scaleX: width > 640 ? 1 : 1.5,
            scaleY: width > 640 ? 1 : 1.9,
            opacity: 1,
          }}
          transition={{ duration: 0.4, delay: 0.1 }}
        ></motion.video>
      </SectionContainer>
    </>
  );
}

export default Security;
