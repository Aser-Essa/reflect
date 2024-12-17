import FeatureCard from "../ui/FeatureCard";
import GoRightAnimation from "../ui/GoRightAnimation";
import GoLeftAnimation from "../ui/GoLeftAnimation";

function Features() {
  return (
    <>
      <div className="relative z-[1000] mt-[140px] h-fit px-[120px] pt-[75px] max-sm:mt-[58px] max-sm:p-0">
        <div className="grid-cards grid h-fit max-sm:mx-auto max-sm:w-full">
          <GoRightAnimation>
            <FeatureCard
              direction="top"
              full={true}
              fill={"196px"}
              title="Built for speed"
              paragraph=" Instantly sync your notes across devices"
              image="cloud.png"
              styles={"h-[196px] w-[300px] max-[860px]:w-[90%]"}
            />
          </GoRightAnimation>
          <GoRightAnimation>
            <FeatureCard
              direction="top"
              full={false}
              fill={"196px"}
              title="Networked notes"
              paragraph="Form a graph of ideas with backlinked notes"
              image="target.png"
              styles={"h-[196px] w-[300px] max-[860px]:w-[90%]"}
            />
          </GoRightAnimation>
          <GoRightAnimation>
            <FeatureCard
              direction="top"
              full={true}
              fill={"196px"}
              title="iOS app"
              paragraph="Capture ideas on the go, online or offline"
              image="ios.png"
              styles={"h-[196px] w-[300px] max-[860px]:w-[90%]"}
            />
          </GoRightAnimation>
          <GoRightAnimation>
            <FeatureCard
              direction="top"
              full={false}
              fill={"196px"}
              title="End-to-end encryption"
              paragraph="Only you can access your notes"
              image="security.png"
              styles={"h-[196px] w-[300px] max-[860px]:w-[90%]"}
            />
          </GoRightAnimation>

          <GoLeftAnimation>
            <FeatureCard
              direction="bottom"
              full={false}
              fill={"196px"}
              title="Calendar integration"
              paragraph="Keep track of meetings and agendas"
              image="date.png"
              styles={"h-[196px] w-[300px] max-[860px]:w-[90%]"}
            />
          </GoLeftAnimation>
          <GoLeftAnimation>
            <FeatureCard
              direction="bottom"
              full={true}
              fill={"196px"}
              title="Publishing"
              paragraph="Share anything you write with one click"
              image="click.png"
              styles={"h-[196px] w-[300px] max-[860px]:w-[90%]"}
            />
          </GoLeftAnimation>
          <GoLeftAnimation>
            <FeatureCard
              direction="bottom"
              full={false}
              fill={"196px"}
              title="Instant capture"
              paragraph="Save snippets from your browser and Kindle"
              image="tablet.png"
              styles={"h-[196px] w-[300px] max-[860px]:w-[90%]"}
            />
          </GoLeftAnimation>
          <GoLeftAnimation>
            <FeatureCard
              direction="bottom"
              full={true}
              fill={"196px"}
              title="Frictionless search"
              paragraph="Easily recall and index past notes and ideas"
              image="search.png"
              styles={"h-[196px] w-[300px] max-[860px]:w-[90%]"}
            />
          </GoLeftAnimation>
        </div>
      </div>
    </>
  );
}

export default Features;
