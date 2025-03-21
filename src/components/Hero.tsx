
import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputerCanvas from "./Canvas/ComputerCanvas";
import { personalInfo } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-primary/5 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-green-dark/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className={`absolute inset-0 sm:top-[120px] top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-3 md:gap-5 z-10`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary shadow-neon" />
          <div className="w-1 sm:h-60 h-40 bg-gradient-to-b from-primary to-transparent" />
        </div>

        <div>
          <motion.h1 
            className={`${styles.heroHeadText} text-white`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm <span className="green-gradient">{personalInfo.name}</span>
          </motion.h1>
          <motion.p 
            className={`${styles.heroSubText} mt-2 text-gray-300`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I develop user interfaces <br className="sm:block hidden" />
            and web applications
          </motion.p>
          <motion.p 
            className="mt-3 text-sm md:text-base text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {personalInfo.location}
          </motion.p>
          
          <motion.div 
            className="mt-4 md:mt-6 flex flex-wrap gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-gray-300 hover:text-primary transition-colors group"
            >
              <div className="p-1.5 md:p-2 rounded-full bg-secondary border border-gray-700 group-hover:border-primary group-hover:shadow-neon transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              {personalInfo.email}
            </a>
            
            <a 
              href={`tel:${personalInfo.phone}`} 
              className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-gray-300 hover:text-primary transition-colors group"
            >
              <div className="p-1.5 md:p-2 rounded-full bg-secondary border border-gray-700 group-hover:border-primary group-hover:shadow-neon transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              {personalInfo.phone}
            </a>
          </motion.div>
          
          <motion.div 
            className="mt-4 flex gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a 
              href={`https://${personalInfo.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 md:p-2 bg-secondary rounded-full border border-gray-700 shadow-sm hover:shadow-neon hover:border-primary transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#0077b5]">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a 
              href={`https://${personalInfo.github}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 md:p-2 bg-secondary rounded-full border border-gray-700 shadow-sm hover:shadow-neon hover:border-primary transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a 
              href={`https://${personalInfo.leetcode}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 md:p-2 bg-secondary rounded-full border border-gray-700 shadow-sm hover:shadow-neon hover:border-primary transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#F89F1B]">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
              </svg>
            </a>
          </motion.div>
          
          <motion.div 
            className="mt-6 md:mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a href="#about" className="btn-primary inline-flex items-center gap-2 text-sm md:text-base">
              Explore My Portfolio
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Canvas container with full width/height */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <ComputerCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[55px] md:w-[35px] md:h-[64px] rounded-3xl border-4 border-primary flex justify-center items-start p-2 shadow-neon">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
