
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import SectionWrapper from "./common/SectionWrapper";
import AnimatedText from "./common/AnimatedText";
import { github } from "../assets";

interface ProjectCardProps {
  index: number;
  project: {
    name: string;
    description: string;
    tags: Array<{
      name: string;
      color: string;
    }>;
    image: string;
    source_code_link: string;
    demo_link: string;
    tech: string;
    date: string;
    points: string[];
  };
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.75, delay: index * 0.3 } }
      }}
      className="glassmorphism rounded-2xl overflow-hidden"
    >
      <div className="relative w-full h-[200px] bg-gray-100 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex justify-end m-3 gap-2">
          <div
            onClick={() => window.open(project.source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <div
            onClick={() => window.open(project.demo_link, "_blank")}
            className="bg-primary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 3H21V9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 14L21 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-space font-bold text-xl">{project.name}</h3>
          <span className="text-gray-500 text-sm">{project.date}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
          <p className="text-primary text-sm">{project.tech}</p>
        </div>
        
        <div className="mt-3">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
          <ul className="space-y-2">
            {project.points.map((point, pointIndex) => (
              <li key={pointIndex} className="flex items-start text-sm text-gray-700">
                <span className="inline-block bg-primary w-2 h-2 rounded-full mt-2 mr-3"></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <p
              key={`${project.name}-${tag.name}`}
              className={`text-xs px-2 py-1 rounded-full bg-gray-200`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <>
      <AnimatedText delay={0.2}>
        <h2 className="section-heading">Projects</h2>
      </AnimatedText>
      <AnimatedText delay={0.4} className="mt-3 text-gray-600 text-center max-w-3xl mx-auto">
        <p>
          The following projects showcase my skills and experience through real-world examples of my work. 
          Each project is briefly described with links to code repositories and live demos. 
          They reflect my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>
      </AnimatedText>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            project={project} 
            index={index} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(ProjectsSection, "projects");
