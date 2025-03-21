
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
      className="glassmorphism p-6 rounded-lg"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-space font-bold text-xl text-gray-900">
            {experience.title}
          </h3>
          <h4 className="text-primary font-medium mt-1">{experience.company}</h4>
        </div>
        <div className="text-right">
          <p className="text-gray-600 font-medium">{experience.duration}</p>
          <p className="text-gray-500 text-sm">{experience.location}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-3">
        {experience.points.map((point: string, pointIndex: number) => (
          <li key={pointIndex} className="flex items-start">
            <span className="inline-block bg-primary w-2 h-2 rounded-full mt-2 mr-3"></span>
            <p className="text-gray-700 flex-1">{point}</p>
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
        <h2 className="section-heading">Work Experience</h2>
      </AnimatedText>
      <AnimatedText delay={0.4} className="mt-3 text-gray-600 text-center max-w-3xl mx-auto">
        <p>
          My professional journey includes hands-on experience developing web applications,
          working with diverse tech stacks, and solving real-world problems through software solutions.
        </p>
      </AnimatedText>

      <div className="mt-16 flex flex-col gap-8">
        {experiences.map((experience, index) => (
          <ExperienceCard 
            key={`experience-${index}`} 
            experience={experience} 
            index={index} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(ExperienceSection, "experience");
