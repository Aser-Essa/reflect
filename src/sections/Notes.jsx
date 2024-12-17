import Line from "../ui/Line";
import NotesCard from "../ui/NotesCard";
import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import SparklesPreview from "../ui/SparklesPreview";
import { motion } from "framer-motion";

function Notes() {
  return (
    <div id="product">
      <SectionContainer styles="pt-[140px] max-sm:pt-[100px]" id="notes">
        <div className="mt-[430px] max-sm:mt-[265px] max-sm:w-full">
          <SectionHeader
            mainTitle="All your notes, connected"
            title="Give your brain superpowers"
            paragraph="Mirror the way your mind works by associating notes through backlinks. Reflect builds you a second brain that you can reference anytime."
            styles={"max-sm:mx-auto max-sm:w-[90%]"}
          />

          <div className="relative mt-12 flex h-fit flex-wrap max-[860px]:justify-center max-[860px]:gap-4 max-sm:mx-auto max-sm:w-full">
            <motion.div
              className="relative rounded-md max-[860px]:border max-[860px]:border-[#ffffff17]"
              initial={{ translateX: "-50%", opacity: 0 }}
              whileInView={{ translateX: "0", opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Line
                fill={"100%"}
                full={false}
                direction={"vertical"}
                gradDirection={"top"}
                bar={true}
                position={"bottom-0"}
                styles={"absolute"}
              />
              <NotesCard
                mainImage="graph.png"
                image="files.png"
                title="Your thoughts connected."
                paragraph="Backlink your notes to make everything easily searchable."
              />
              <Line
                fill={"70%"}
                full={false}
                gradDirection={"right"}
                bar={true}
                position={"bottom-0 right-0"}
                styles={"absolute right-0"}
              />
            </motion.div>

            <Line
              fill={"100%"}
              full={false}
              direction={"vertical"}
              gradDirection={"top"}
              bar={true}
              position={"bottom-[55px] h-[20px]"}
              styles={
                "absolute h-full left-[50%] translate-x-[-50%] max-[860px]:hidden"
              }
            />

            <motion.div
              className="relative rounded-md max-[860px]:border max-[860px]:border-[#ffffff17]"
              initial={{ translateX: "50%", opacity: 0 }}
              whileInView={{ translateX: "0", opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <NotesCard
                mainImage="comments.png"
                image="search-1.png"
                title="Frictionless thought capture."
                paragraph="Record your ideas and to-do’s easily, so you never miss a thing."
              />
              <Line
                fill={"100%"}
                full={false}
                gradDirection={"left"}
                bar={false}
                styles={"absolute right-[140px] top-0"}
              />

              <Line
                fill={"75%"}
                full={false}
                direction={"vertical"}
                gradDirection={"bottom"}
                bar={false}
                styles={"absolute right-0 top-0"}
              />
            </motion.div>
          </div>
        </div>

        <div className="absolute top-[90px] z-[0] h-[273px] w-[1000px]">
          <SparklesPreview styles="w-full h-full " particleDensity={20} />
        </div>

        <img
          src="/background.png"
          className="absolute left-[50%] top-[135px] z-[-1] w-[806px] translate-x-[-50%] max-sm:top-[185px] max-sm:scale-[1.5]"
        />
      </SectionContainer>
    </div>
  );
}

export default Notes;
