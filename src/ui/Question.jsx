import { motion } from "framer-motion";

function Question() {
  return (
    <>
      <motion.div
        className="mt-[143px] flex h-[140px] w-[578px] cursor-pointer items-center justify-center rounded-3xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.01)] p-[9px] max-sm:mx-[21.5px] max-sm:mt-[45px] max-sm:h-fit max-sm:w-full"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="h-[122px] w-[560px] rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(4,1,21,0.38)] px-[33px] py-[24px] backdrop-blur-[34px] max-sm:h-[104px] max-sm:w-full max-sm:p-[15px]"
          style={{
            backgroundImage: "linear-gradient(45deg , #a87fff0a , #a87fff00)",
          }}
          whileHover={{
            background: "#2c274361",
          }}
          transition={{ duration: "10s" }}
        >
          <div className="flex items-center justify-between">
            <p className="text-[15px] font-medium max-sm:text-[13px]">
              How to use AI to take better notes
            </p>
            <div className="flex items-center">
              <img src="/stars.png" className="h-6 w-6" />
              <motion.p
                className="text-[13px] max-sm:hidden"
                style={{
                  background:
                    "linear-gradient(to right ,#FC72FF 0%, #8F68FF 25%, #487BFF 50% ,#2CD9FF 75%, #2CFFCC 100%)",
                  backgroundClip: "text",
                  "-webkit-text-fill-color": "transparent",
                }}
                whileHover={{
                  background: [
                    "linear-gradient(to right ,#FC72FF 0%, #8F68FF 25%, #487BFF 50% ,#2CD9FF 75%, #2CFFCC 100%)",
                    "linear-gradient(to right ,#2CFFCC 0%, #FC72FF 25%, #8F68FF 50% ,#487BFF 75%, #2CD9FF 100%)",
                    "linear-gradient(to right ,#2CD9FF 0%, #2CFFCC 25%, #FC72FF 50% ,#8F68FF 75%, #487BFF 100%)",
                    "linear-gradient(to right ,#487BFF 0%, #2CD9FF 25%, #2CFFCC 50% ,#FC72FF 75%, #8F68FF 100%)",
                    "linear-gradient(to right ,#8F68FF 0%, #487BFF 25%, #2CD9FF 50% ,#2CFFCC 75%, #FC72FF 100%)",
                    "linear-gradient(to right ,#FC72FF 0%, #8F68FF 25%, #487BFF 50% ,#2CD9FF 75%, #2CFFCC 100%)",
                  ],
                  backgroundClip: "text",
                  "-webkit-text-fill-color": "transparent",
                }}
                transition={{ duration: 1, repeat: Infinity }}
                whileTap={{ scale: 0.9 }}
              >
                Click to see magic
              </motion.p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="h-6 w-1 rounded-[2px] bg-[#ffffff3d]"></div>
            <p className="text-[13px] max-sm:text-[11px]">
              What can LLMs like GPT do, specifically for note-taking?
            </p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Question;
