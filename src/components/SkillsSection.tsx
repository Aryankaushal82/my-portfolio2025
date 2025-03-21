
import { motion } from "framer-motion";
import { technologies } from "../constants";
import BallCanvas from "./Canvas/BallCanvas";
import SectionWrapper from "./common/SectionWrapper";
import AnimatedText from "./common/AnimatedText";

const SkillsSection = () => {
  return (
    <>
      <AnimatedText delay={0.2}>
        <h2 className="section-heading">Skills</h2>
      </AnimatedText>
      <AnimatedText delay={0.4} className="mt-3 text-gray-600 text-center max-w-3xl mx-auto">
        <p>
          These are the technologies I've worked with. Hover over each skill to see it animate.
          My expertise spans across frontend and backend development, with a focus on creating 
          interactive and responsive web applications.
        </p>
      </AnimatedText>

      <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {technologies.map((technology, index) => (
          <motion.div 
            key={technology.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-28 h-28 glassmorphism rounded-full flex items-center justify-center mb-2">
              <div className="w-20 h-20">
                <BallCanvas icon={technology.icon} />
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-2">{technology.name}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(SkillsSection, "skills");
