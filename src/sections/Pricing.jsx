import { useWidth } from "../hooks/useWidth";
import Button from "../ui/Button";
import GridText from "../ui/GridText";
import List from "../ui/List";
import ListItem from "../ui/ListItem";
import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import SparklesPreview from "../ui/SparklesPreview";
import { motion } from "framer-motion";

function Pricing() {
  const { width } = useWidth();

  return (
    <div id="pricing">
      <SectionContainer
        styles="pt-[140px] h-[1214px] max-sm:h-[825px] w-full max-sm:pt-[100px]"
        id="pricing"
      >
        <div className="w-[637px] max-[860px]:w-[600px] max-sm:w-full">
          <SectionHeader
            mainTitle="Get access"
            ss
            title="We like keeping things simple One plan one price."
            size={width >= 680 ? 48 : 26}
          />
          <div className="mt-2.5 max-sm:mt-5">
            <motion.div
              className="flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span style={{ fontSize: width > 640 ? "66px" : "44px" }}>
                <GridText size={width > 640 ? "66px" : "44px"}>$10</GridText>
              </span>
              <p className="text-[#efedfd99]">
                /month <br /> if billed annually
              </p>
            </motion.div>

            <List>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <ListItem>Networked note-taking</ListItem>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <ListItem>End to end encryption</ListItem>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <ListItem>Chrome and Safari web clipper</ListItem>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <ListItem>Kindle offline sync</ListItem>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ListItem>Kindle offline sync</ListItem>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <ListItem>iOS app</ListItem>
              </motion.div>
            </List>

            <div className="mx-auto mt-12 w-fit max-sm:mt-5">
              <Button>Start your 14-day trial</Button>
            </div>

            <div className="absolute top-[470px] z-[0] mx-auto h-[170px] w-[600px]">
              <SparklesPreview styles="w-full h-full" particleDensity={20} />
            </div>
            <motion.img
              src="/light-3.png"
              className="absolute left-[50%] top-[55px] z-[-1] max-w-[755px] translate-x-[-50%] max-[860px]:top-[210px] max-[860px]:w-[600px] max-sm:top-[260px] max-sm:h-[555px] max-sm:w-full"
              initial={{ translateX: "-50%", translateY: "20%", opacity: 0 }}
              whileInView={{ translateX: "-50%", translateY: "0", opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

export default Pricing;
