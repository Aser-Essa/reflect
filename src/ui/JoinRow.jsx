import { motion } from "framer-motion";

function JoinRow() {
  return (
    <motion.div
      className="flex h-[173px] items-center justify-between overflow-hidden border-y border-[#f3eeff14] max-[860px]:flex-col max-[860px]:justify-center max-[860px]:gap-4 max-[860px]:text-center max-sm:w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="flex flex-col gap-2">
        <p className="font-roboto text-[23px] font-medium">
          Join our newsletter
        </p>
        <p className="text-sm text-[#efedfdb3]">
          Keep up to date with everything Reflect
        </p>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="h-[38px] w-[296px] rounded-lg border border-[#f3eeff1a] bg-[transparent] px-[13px] py-2.5 focus:outline-none max-sm:w-[230px]"
        />
        <button className="glow-1 mx-auto h-[38px] rounded-lg border border-[#f3eeff14] px-4 text-sm font-medium">
          Subscribe
        </button>
      </div>
    </motion.div>
  );
}

export default JoinRow;
