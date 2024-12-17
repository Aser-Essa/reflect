import Button from "./Button";
import Logo from "./Logo";
import Nav from "./Nav";
import { motion } from "framer-motion";
import { HiMiniBars3 } from "react-icons/hi2";
import { Link } from "react-scroll";
import { createPortal } from "react-dom";
import useOutSideClick from "../hooks/useOutSideClick";

function Header() {
  const { ref, open: isOpen, setOpen } = useOutSideClick();
  function handleClick() {
    setOpen((prev) => !prev);
  }
  return (
    <>
      <header className="fixed top-0 z-[10000] h-[88px] w-full">
        <div className="flex h-[87px] w-full items-center justify-between px-[72px] text-white backdrop-blur-[20px] max-sm:h-fit max-sm:p-4 max-sm:py-2.5">
          <Logo />
          <Nav />
          <motion.div
            className="flex items-center gap-6 max-sm:hidden"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <button className="text-sm transition-all hover:text-[#fff9]">
              Login
            </button>
            <Button>Start free trial</Button>
          </motion.div>
          <div onClick={handleClick} id="toogle">
            <HiMiniBars3 className="hidden h-6 w-6 max-sm:inline-block" />
          </div>
        </div>
        <div className="line h-[1px] w-full"></div>
      </header>
      {createPortal(
        <motion.div
          ref={ref}
          initial={{ height: 0 }}
          whileInView={{
            height: isOpen ? "fit-content" : 0,
            padding: isOpen ? "14px 0px" : "0px 0px",
          }}
          transition={{ duration: 0.5 }}
          className="fixed right-4 top-[57px] z-[10000] hidden w-[50%] overflow-hidden rounded-md bg-[#ffffff1a] backdrop-blur-[20px] max-sm:block"
        >
          <ul>
            <li className="w-full cursor-pointer px-2.5 py-1 transition-all hover:text-[#fff9]">
              <Link to="product" duration={1800} smooth offset={45}>
                Product
              </Link>
            </li>
            <div className="line h-[1px] w-full"></div>

            <li className="cursor-pointer px-2.5 py-1 transition-all hover:text-[#fff9]">
              <Link to="pricing" duration={1800} smooth offset={40}>
                Pricing
              </Link>
            </li>
            <div className="line h-[1px] w-full"></div>

            <li className="cursor-pointer px-2.5 py-1 transition-all hover:text-[#fff9]">
              <Link to="about" duration={1800} smooth offset={-60}>
                Company
              </Link>
            </li>
            <div className="line h-[1px] w-full"></div>

            <li className="cursor-pointer px-2.5 py-1 transition-all hover:text-[#fff9]">
              Blog
            </li>
            <div className="line h-[1px] w-full"></div>

            <li className="cursor-pointer px-2.5 transition-all hover:text-[#fff9]">
              Changelog
            </li>
          </ul>
        </motion.div>,
        document.body,
      )}
    </>
  );
}

export default Header;
