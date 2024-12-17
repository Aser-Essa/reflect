import Link from "./Link";
import Links from "./Links";
import Logo from "./Logo";
import { FaTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import JoinRow from "./JoinRow";
import CopyRightRow from "./CopyRightRow";

function Footer() {
  return (
    <>
      <div
        className="relative bottom-[1px] right-0 bg-main px-[156px] max-[860px]:px-5 max-sm:px-4"
        style={{
          background:
            "radial-gradient(50% 44.06% at 50% 0%,rgba(147,130,255,.08) 0%,rgba(147,130,255,0) 100%),#030014",
        }}
      >
        <div className="flex h-[399px] items-start justify-between pt-20 max-[860px]:flex-col max-[860px]:pt-0">
          <div className="flex h-[214px] flex-col justify-between max-[860px]:h-[150px] max-[860px]:w-full max-[860px]:flex-row max-[860px]:items-center max-[860px]:justify-between">
            <Logo />
            <motion.div
              className="mt-auto flex items-center gap-5 max-[860px]:mb-5 max-[860px]:mt-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <FaDiscord className="h-6 w-6 text-[#efedfd4d]" />
              <FaTwitter className="h-6 w-6 text-[#efedfd4d]" />
            </motion.div>
          </div>
          <motion.div
            className="flex max-[860px]:mb-6"
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Links title="Product">
              <Link>Features</Link>
              <Link>Integrations</Link>
              <Link>Pricing</Link>
              <Link>Changelog</Link>
              <Link>Roadmap</Link>
            </Links>
            <Links title="Company">
              <Link>Our team</Link>
              <Link>Our values</Link>
              <Link>Blog</Link>
            </Links>
            <Links title="Resources">
              <Link>Downloads</Link>
              <Link>Documentation</Link>
              <Link>Contact</Link>
            </Links>
          </motion.div>
        </div>

        <JoinRow />
        <CopyRightRow />
      </div>
    </>
  );
}

export default Footer;
