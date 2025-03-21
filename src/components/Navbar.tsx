import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full flex items-center py-4 md:py-5 px-4 md:px-8 z-20 transition-all duration-300 ease-in-out
        ${scrolled ? "bg-background/80 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.p 
            className="text-base md:text-[18px] font-bold font-space cursor-pointer flex"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-primary">My</span>&nbsp;Portfolio
          </motion.p>
        </Link>

        <ul className="hidden sm:flex flex-row gap-6 md:gap-10">
          {navLinks.map((nav) => (
            <motion.li
              key={nav.id}
              className={`${
                active === nav.title ? "text-primary" : "text-gray-300"
              } hover:text-primary text-base md:text-[18px] font-medium cursor-pointer nav-link`}
              onClick={() => setActive(nav.title)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </motion.li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button 
            className="w-10 h-10 relative focus:outline-none"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span 
                className={`block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                  toggle ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span 
                className={`block absolute h-0.5 bg-white transform transition duration-300 ease-in-out ${
                  toggle ? "opacity-0" : "w-5"
                }`}
              ></span>
              <span 
                className={`block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                  toggle ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>

          <motion.div
            className={`p-6 absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-xl bg-background/90 backdrop-blur-md shadow-xl`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: toggle ? 1 : 0.8, 
              opacity: toggle ? 1 : 0,
              display: toggle ? "block" : "none"
            }}
            transition={{ duration: 0.3 }}
          >
            <ul className="list-none flex justify-start items-start flex-col gap-4">
              {navLinks.map((nav) => (
                <motion.li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-primary" : "text-gray-300"
                  } w-full`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href={`#${nav.id}`} className="block w-full py-1">{nav.title}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;