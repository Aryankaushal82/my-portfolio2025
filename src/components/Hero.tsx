
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../styles";
import ComputerCanvas from "./Canvas/ComputerCanvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for screen size changes to detect mobile screens
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className="relative w-full h-screen max-h-[800px] mx-auto flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 px-6 sm:px-16">
        <div className="flex flex-col justify-center items-center mt-5 w-full">
          <div className="w-full max-w-3xl mx-auto">
            <motion.h1
              className="font-space font-black text-5xl sm:text-7xl mt-2 text-center leading-tight"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block">Creative</span>{" "}
              <span className="blue-gradient">3D Portfolio</span>
            </motion.h1>
            <motion.p 
              className="text-gray-600 text-lg md:text-xl mt-6 max-w-2xl mx-auto text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Interactive 3D developer showcase featuring stunning visuals and cutting-edge web technology. Explore projects and skills through an immersive experience.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[400px] sm:h-[500px] mt-32 sm:mt-24">
        {!isMobile && <ComputerCanvas />}
      </div>

      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-300 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-primary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
