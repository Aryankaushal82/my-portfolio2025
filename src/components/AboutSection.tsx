
import { motion } from "framer-motion";
import SectionWrapper from "./common/SectionWrapper";
import AnimatedText from "./common/AnimatedText";
import { personalInfo, education, coursework, skills, certifications, extracurricular } from "../constants";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <>
      <AnimatedText delay={0.2}>
        <h2 className="section-heading">About Me</h2>
      </AnimatedText>
      <AnimatedText delay={0.4} className="mt-3 text-gray-600 text-center max-w-3xl mx-auto">
        <p>
          I'm a skilled software developer with experience in TypeScript and JavaScript, 
          specializing in frameworks like React, Node.js, and Three.js. I'm a quick learner and 
          collaborate closely with clients to create efficient, scalable, and user-friendly solutions 
          that solve real-world problems.
        </p>
      </AnimatedText>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glassmorphism p-6 rounded-lg"
        >
          <h3 className="sub-heading text-center mb-6">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                <div className="flex justify-between mb-1">
                  <h4 className="font-space font-bold text-lg">{edu.school}</h4>
                  <span className="text-gray-600 text-sm">{edu.duration}</span>
                </div>
                <p className="text-gray-700">{edu.degree}</p>
                <p className="text-gray-600 text-sm">{edu.location}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glassmorphism p-6 rounded-lg"
        >
          <h3 className="sub-heading text-center mb-6">Technical Skills</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-primary mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((lang, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-primary mb-2">Technologies & Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {skills.technologies.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-primary mb-2">Database Management</h4>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((db, index) => (
                  <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                    {db}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-primary mb-2">Developer Tools</h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool, index) => (
                  <span key={index} className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-primary mb-2">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.softSkills.map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Relevant Coursework */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8 glassmorphism p-6 rounded-lg"
      >
        <h3 className="sub-heading text-center mb-6">Relevant Coursework</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {coursework.map((course, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-primary w-2 h-2 rounded-full mr-2"></div>
              <span className="text-gray-700">{course}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Leadership & Certifications */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glassmorphism p-6 rounded-lg"
        >
          <h3 className="sub-heading text-center mb-6">Certifications</h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-none shadow-sm bg-white/50">
                <CardContent className="p-4">
                  <h4 className="font-space font-bold text-lg text-primary">{cert.title}</h4>
                  <p className="text-gray-700 text-sm mt-2">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Extracurricular */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glassmorphism p-6 rounded-lg"
        >
          <h3 className="sub-heading text-center mb-6">Leadership & Extracurricular</h3>
          <div className="space-y-4">
            {extracurricular.map((activity, index) => (
              <Card key={index} className="border-none shadow-sm bg-white/50">
                <CardContent className="p-4">
                  <h4 className="font-space font-bold text-lg text-primary">{activity.title}</h4>
                  <p className="text-gray-700 text-sm mt-2">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(AboutSection, "about");
