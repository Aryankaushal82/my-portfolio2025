
import { motion } from "framer-motion";
import SectionWrapper from "./common/SectionWrapper";
import AnimatedText from "./common/AnimatedText";
import { experiences } from "../constants";

const ExperienceCard = ({ experience, index }: { experience: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glassmorphism p-6 rounded-lg hover:shadow-neon transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-space font-bold text-xl text-foreground group-hover:text-primary transition-colors">
            {experience.title}
          </h3>
          <h4 className="text-primary font-medium mt-1">{experience.company}</h4>
        </div>
        <div className="text-right">
          <p className="text-gray-400 font-medium">{experience.duration}</p>
          <p className="text-gray-500 text-sm">{experience.location}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-3">
        {experience.points.map((point: string, pointIndex: number) => (
          <li key={pointIndex} className="flex items-start group">
            <span className="inline-block bg-primary w-2 h-2 rounded-full mt-2 mr-3 group-hover:animate-glow"></span>
            <p className="text-gray-300 flex-1 group-hover:text-gray-200 transition-colors">{point}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <>
      <AnimatedText delay={0.2}>
        <h2 className="section-heading">
          <span className="green-gradient">Work Experience</span>
        </h2>
      </AnimatedText>
      <AnimatedText delay={0.4} className="mt-3 text-gray-400 text-center max-w-3xl mx-auto">
        <p>
          My professional journey includes hands-on experience developing web applications,
          working with diverse tech stacks, and solving real-world problems through software solutions.
        </p>
      </AnimatedText>

      <div className="mt-16 flex flex-col gap-8 relative">
        {/* 3D decorative element */}
        <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 hidden xl:block">
          <div className="w-12 h-12 rounded-full bg-green-dark/30 shadow-neon animate-float"></div>
        </div>
        
        {/* Experience timeline */}
        <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-dark via-primary to-green-dark/30 hidden lg:block"></div>
        
        {experiences.map((experience, index) => (
          <motion.div 
            key={`experience-${index}`} 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Timeline dot */}
            <div className="absolute left-8 top-8 w-4 h-4 rounded-full bg-primary shadow-neon hidden lg:block"></div>
            <div className="lg:ml-20">
              <ExperienceCard 
                experience={experience} 
                index={index} 
              />
            </div>
          </motion.div>
        ))}
        
        {/* 3D decorative element */}
        <div className="absolute -right-16 bottom-20 hidden xl:block">
          <div className="w-20 h-20 rounded-full bg-green-dark/20 shadow-neon animate-spin-slow"></div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(ExperienceSection, "experience");
