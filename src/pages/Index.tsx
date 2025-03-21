
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import { motion } from "framer-motion";

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
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-700 font-space font-medium">Loading experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-0 bg-background">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div id="about" className="section-wrapper">
          <h2 className="section-heading">About</h2>
          <div className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto text-center">
            <p className="mb-4">
              I'm a skilled software developer with experience in TypeScript and JavaScript, 
              specializing in frameworks like React, Node.js, and Three.js. I'm a quick learner and 
              collaborate closely with clients to create efficient, scalable, and user-friendly solutions 
              that solve real-world problems.
            </p>
            <p>
              I enjoy creating elegant, functional web applications that balance technical capabilities 
              with beautiful design. My passion for 3D visualization and interactive experiences drives me 
              to continuously explore new technologies and push the boundaries of what's possible on the web.
            </p>
          </div>
        </div>
        
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />

        <footer className="text-center py-10 border-t border-gray-200 mt-20">
          <p className="text-gray-600">© 2023 3D Portfolio. All rights reserved.</p>
          <p className="text-sm text-gray-500 mt-2">Crafted with precision and care</p>
        </footer>
      </motion.div>
    </div>
  );
};

export default Index;
