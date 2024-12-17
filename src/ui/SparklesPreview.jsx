import { SparklesCore } from "./SparklesCore.jsx";

// eslint-disable-next-line react/prop-types
export default function SparklesPreview({ particleDensity, styles }) {
  return (
    <div className="relative h-full w-full">
      {/* Core component */}
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={particleDensity}
        className={`${styles}`}
        particleColor="#FFFFFF"
      />

      {/* Radial Gradient to prevent sharp edges */}
      <div className="absolute inset-0 h-full w-full bg-[transparent] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    </div>
  );
}
