import { motion } from "framer-motion";

function CopyRightRow() {
  return (
    <>
      <motion.div
        className="flex items-center justify-center gap-4 p-4 pb-5 text-[#efedfd99] max-[860px]:flex-col max-[860px]:gap-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="flex items-center gap-4">
          <a>Privacy Policy</a>
          <span>.</span>
          <a>Terms of Conditions</a>
        </div>
        <p>Reflect App, LLC. All rights reserved.</p>
      </motion.div>
    </>
  );
}

export default CopyRightRow;
