import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";
import Line from "./Line";

function Services() {
  return (
    <div className="mt-[210px] max-sm:mt-[145px] max-sm:w-full">
      <motion.p
        className="text mb-[38px] text-wrap text-center font-roboto text-[32px] font-medium max-sm:text-[28px]"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        What can you do with Reflect AI?
      </motion.p>

      <div className="flex w-[920px] flex-wrap justify-center max-sm:w-full">
        <motion.div
          className="flex max-[860px]:w-[60%] max-[860px]:flex-col max-sm:w-full"
          initial={{ translateX: "-50%", opacity: 0 }}
          whileInView={{ translateX: "0", opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <FeatureCard
            image="mic.png"
            title="Transcribe voice notes"
            paragraph="with human-level accuracy"
            center={true}
            styles={"h-[164px] w-[300px] max-[860px]:w-[90%]"}
          />
          <Line
            full={false}
            direction={"vertical"}
            fill={"100%"}
            gradDirection={"bottom"}
          />
          <FeatureCard
            image="service-2.png"
            title="Generate article outlines"
            paragraph="from your scattered thoughts"
            center={true}
            styles={"h-[164px] w-[300px] max-[860px]:w-[90%]"}
          />
          <Line
            full={false}
            direction={"vertical"}
            fill={"100%"}
            gradDirection={"top"}
          />
          <FeatureCard
            image="service-3.png"
            title="List key takeaways and action"
            paragraph="items from your meeting notes"
            center={true}
            styles={"h-[164px] w-[300px] max-[860px]:w-[90%]"}
          />
        </motion.div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(to right, transparent , #ffffff17 , transparent)",
          }}
          className="h-[1px] w-full"
        ></div>
        <motion.div
          className="flex max-[860px]:w-[60%] max-[860px]:flex-col max-sm:w-full"
          initial={{ translateX: "50%", opacity: 0 }}
          whileInView={{ translateX: "0", opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <FeatureCard
            image="service-4.png"
            title="Fix grammar, spelling,"
            paragraph="and improve your writing"
            center={true}
            styles={"h-[164px] w-[300px] max-[860px]:w-[90%]"}
          />
          <Line
            full={false}
            direction={"vertical"}
            fill={"100%"}
            gradDirection={"bottom"}
          />

          <FeatureCard
            image="service-5.png"
            title="Save your own"
            paragraph="custom prompts"
            center={true}
            styles={"h-[164px] w-[300px] max-[860px]:w-[90%]"}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
