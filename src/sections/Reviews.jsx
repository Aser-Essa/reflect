import SectionHeader from "../ui/SectionHeader";
import CommentsRow from "../ui/CommentsRow";
import { useEffect, useState } from "react";
import SparklesPreview from "../ui/SparklesPreview";
import { motion, MotionConfig } from "framer-motion";
import SectionContainer from "../ui/SectionContainer";
import { useWidth } from "../hooks/useWidth";

function Reviews() {
  const { width } = useWidth();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://67152a7f33bc2bfe40b99ad5.mockapi.io/id")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <MotionConfig transition={{ duration: 1 }} reducedMotion={"never"}>
      <SectionContainer styles="mt-[28px] max-sm:mt-[100px] w-full ">
        <div className="mt-20 max-sm:mt-[30px] max-sm:w-full">
          <SectionHeader
            mainTitle="Wall of love"
            title="Loved by thinkers"
            paragraph="Here’s what people are saying about us"
          />
          <motion.div
            className="mt-12 max-sm:mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "linear", delay: 0.4 }}
          >
            <div className="flex items-center gap-6">
              <motion.div
                className="relative"
                initial={{ translateX: 0 }}
                whileInView={{ translateX: "-100%" }}
                transition={{ duration: 250, ease: "linear", repeat: Infinity }}
              >
                <CommentsRow data={data.slice(0, 25)} />
              </motion.div>
              <motion.div
                className="relative"
                initial={{ translateX: 0 }}
                whileInView={{ translateX: "-100%" }}
                transition={{ duration: 250, ease: "linear", repeat: Infinity }}
              >
                <CommentsRow data={data.slice(0, 25)} />
              </motion.div>
            </div>
            <div className="flex items-center gap-6">
              <motion.div
                className="relative"
                initial={{ translateX: "-90%" }}
                whileInView={{ translateX: "0" }}
                transition={{ duration: 250, ease: "linear", repeat: Infinity }}
              >
                <CommentsRow data={data.slice(25)} />
              </motion.div>
              <motion.div
                className="relative"
                initial={{ translateX: "-90%" }}
                whileInView={{ translateX: "0" }}
                transition={{ duration: 250, ease: "linear", repeat: Infinity }}
              >
                <CommentsRow data={data.slice(25)} />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-[20px] z-[0] mx-auto h-[250px] w-[1100px] max-sm:top-0">
          <SparklesPreview styles="w-full h-full" particleDensity={25} />
        </div>
        <motion.video
          src="/heart.mp4"
          autoPlay
          loop
          muted
          className="absolute left-[50%] top-[-220px] z-[-1] h-[882px] max-w-[750px] translate-x-[-50%] max-sm:top-[0px] max-sm:h-fit max-sm:w-full"
          initial={{ scale: 0, translateX: "-50%" }}
          whileInView={{ scale: width > 640 ? 1 : 1.18, translateX: "-50%" }}
          transition={{ duration: 0.3, ease: "linear" }}
        ></motion.video>
      </SectionContainer>
    </MotionConfig>
  );
}

export default Reviews;
