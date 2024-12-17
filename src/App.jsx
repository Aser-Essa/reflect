import Header from "./ui/Header";
import HeroSection from "./sections/HeroSection";
import Features from "./sections/Features";
import AiAssistant from "./sections/AiAssistant";
import Notes from "./sections/Notes";
import Research from "./sections/Research";
import Security from "./sections/Security";
import Meetings from "./sections/Meetings";
import Integrations from "./sections/Integrations";
import Pricing from "./sections/Pricing";
import Reviews from "./sections/Reviews";
import About from "./sections/About";
import Academy from "./sections/Academy";
import GetStarted from "./sections/GetStarted";
import Footer from "./ui/Footer";
import { MotionConfig } from "framer-motion";
import { useWidth } from "./hooks/useWidth";

function App() {
  const { width } = useWidth();
  return (
    <MotionConfig
      transition={{ duration: 1 }}
      reducedMotion={width > 640 ? "never" : "always"}
    >
      <Header />
      <div className="px-4" id="top">
        <HeroSection />
        <Features />
        <AiAssistant />
        <Notes />
        <Research />
        <Security />
        <Meetings />
        <Integrations />
        <Pricing />
        <Reviews />
        <About />
        <Academy />
        <GetStarted />
      </div>
      <Footer />
    </MotionConfig>
  );
}

export default App;
