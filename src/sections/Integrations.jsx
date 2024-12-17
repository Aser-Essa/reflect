import { useWidth } from "../hooks/useWidth";
import IntergrationCard from "../ui/IntergrationCard";
import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

function Integrations() {
  const { width } = useWidth();
  const desktopScreen = width > 640;
  return (
    <>
      <SectionContainer styles="mt-[140px] w-full max-sm:mt-[100px] ">
        <SectionHeader
          styles="w-[387px]"
          mainTitle="integrations"
          title="Use Reflect with other apps"
        />
        <div className="relative mt-12 grid h-[432px] w-[984px] grid-cols-2 max-[860px]:h-auto max-[860px]:w-fit max-[860px]:grid-cols-1 max-sm:mt-3">
          <motion.div
            initial={{
              translateX: desktopScreen ? "-40%" : 0,
              translateY: desktopScreen ? "-40%" : 0,
              opacity: 0,
            }}
            whileInView={{ translateX: "0", translateY: "0", opacity: 1 }}
            transition={{ duration: desktopScreen ? 0.8 : 1.2 }}
            className="w-fit"
          >
            <IntergrationCard
              title="Zapier"
              paragraph="Connect with Reflect with dozens of applications without code"
              icon="icon-1.png"
            />
          </motion.div>

          <motion.div
            initial={{
              translateX: desktopScreen ? "40%" : 0,
              translateY: desktopScreen ? "-40%" : 0,
              opacity: 0,
            }}
            whileInView={{ translateX: "0", translateY: "0", opacity: 1 }}
            transition={{ duration: desktopScreen ? 0.8 : 1.2 }}
            className="w-fit"
          >
            <IntergrationCard
              title="Readwise"
              paragraph="Sync your reading highlights and notes with Reflect."
              icon="icon-2.png"
            />
          </motion.div>

          <motion.div
            initial={{
              translateX: desktopScreen ? "-40%" : 0,
              translateY: desktopScreen ? "40%" : 0,
              opacity: 0,
            }}
            whileInView={{ translateX: "0", translateY: "0", opacity: 1 }}
            transition={{ duration: desktopScreen ? 0.8 : 1.2 }}
            className="w-fit"
          >
            <IntergrationCard
              title="Google and Outlook"
              paragraph="Integrate your contacts and calendars"
              icon="icon-3.png"
            />
          </motion.div>

          <motion.div
            initial={{
              translateX: desktopScreen ? "40%" : 0,
              translateY: desktopScreen ? "40%" : 0,
              opacity: 0,
            }}
            whileInView={{ translateX: "0", translateY: "0", opacity: 1 }}
            transition={{ duration: desktopScreen ? 0.8 : 1.2 }}
          >
            <IntergrationCard
              title="Chrome and Safari"
              paragraph="Save web clips and sync with your Kindle"
              icon="icon-4.png"
            />
          </motion.div>

          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            src="/grid-background.png"
            className="absolute left-0 top-0 max-sm:hidden"
          />
        </div>
      </SectionContainer>
    </>
  );
}

export default Integrations;
