
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen w-full bg-background">
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 md:w-16 md:h-16 border-4 border-primary border-t-transparent rounded-full animate-spin shadow-neon"></div>
          <p className="mt-4 text-green-light font-space font-medium">Loading experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-0 bg-background text-foreground w-full min-h-screen overflow-x-hidden">
      <div className="stars-container absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative w-full">
        <Navbar />
        <Hero />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 w-full"
      >
        <div id="about" className="section-wrapper">
          <AboutSection />
        </div>
        
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />

        <footer className="text-center py-8 md:py-10 border-t border-gray-800 mt-16 md:mt-20 px-4">
          <p className="text-gray-400 text-sm md:text-base">© 2023 {personalInfo.name}. All rights reserved.</p>
          <p className="text-xs md:text-sm text-gray-500 mt-2">
            <span className="green-gradient">Crafted with precision and care</span>
          </p>
        </footer>
      </motion.div>
    </div>
  );
};

export default Index;
