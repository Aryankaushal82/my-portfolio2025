
import { 
  mobile, 
  backend, 
  creator, 
  web, 
  javascript, 
  typescript, 
  html, 
  css, 
  reactjs, 
  redux, 
  tailwind, 
  nodejs, 
  mongodb, 
  git, 
  figma, 
  docker, 
  threejs,
  project1,
  project2,
  project3
} from "../assets";

// Personal information
export const personalInfo = {
  name: "Aryan Kaushal",
  location: "Punjab, India",
  email: "kaushalaryan1234@gmail.com",
  phone: "+917888593684",
  linkedin: "linkedin.com",
  github: "github.com",
  leetcode: "leetcode.com"
};

// Education information
export const education = [
  {
    school: "Chitkara University",
    degree: "Bachelor of Engineering in Computer Science",
    gpa: "GPA: 9.0/10.0",
    duration: "Sep 2022 - Jun 2026",
    location: "Punjab, India"
  },
  {
    school: "Police DAV Public School",
    degree: "High School (12th Grade): 91%, (10th Grade): 84%",
    duration: "Mar 2022",
    location: "Punjab, India"
  }
];

// Coursework
export const coursework = [
  "Data Structures",
  "Operating Systems",
  "Algorithms",
  "Database Management",
  "Networking",
  "Computer Architecture"
];

// Technical Skills
export const skills = {
  languages: ["C++", "Java", "JavaScript", "TypeScript"],
  technologies: ["HTML", "CSS", "JavaScript", "Node.js", "React.js", "Express.js", "Tailwind CSS"],
  databases: ["MongoDB", "MySQL"],
  tools: ["Visual Studio Code", "Chrome Developer Tools", "Postman"],
  softSkills: ["Leadership", "Communication", "Event and Prioritization"]
};

// Experience
export const experiences = [
  {
    title: "Web Developer Intern",
    company: "Smartern Tech",
    duration: "Nov 2024 - Jan 2025",
    location: "Remote",
    points: [
      "Developed responsive web interfaces for EasyDiagnose using React.js, JavaScript, HTML, and CSS, ensuring cross-device compatibility and improving user experience.",
      "Built and deployed a Student Management Portal and a Quiz Conduction Platform using the MERN stack (MongoDB, Express.js, React.js, Node.js), enhancing operational efficiency.",
      "Integrated secure authentication and authorization systems, ensuring data privacy compliance and protecting sensitive information for many users.",
      "Optimized application performance with REST API integrations, utilizing JSON, and XML formats, improving load times and ensuring seamless data exchange across services."
    ]
  }
];

// Projects
export const projects = [
  {
    name: "Profitex",
    description: "A robust billing management system using the MERN stack, featuring inventory management, dynamic invoice generation, and expense tracking to improve operational efficiency.",
    tech: "MongoDB, Express.js, React.js, Node.js, Tailwind CSS",
    date: "November 2024",
    points: [
      "Designed and developed a robust billing management system using the MERN stack.",
      "Implemented role-based access control (RBAC), enabling secure user management for over 100+ single-branch and multi-branch owners.",
      "Integrated payment gateways and automated mailing systems.",
      "Developed and deployed a comprehensive financial management system with a user-friendly UI/UX."
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/",
    demo_link: "https://example.com/",
  },
  {
    name: "Game Island",
    description: "An interactive mental exercise game called Island, using Python, Tkinter, and Pygame, aimed at enhancing cognitive skills through engaging gameplay.",
    tech: "Python, Tkinter, CustomTkinter, Firebase, Pygame",
    date: "December 2022",
    points: [
      "Engineered an interactive mental exercise game, Game Island, using Python, Tkinter, and Pygame.",
      "Built a custom GUI with Tkinter and CustomTkinter, offering a basic yet functional interface.",
      "Integrated Firebase for real-time data storage, expected to handle up to 50 data entries."
    ],
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "pygame",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/",
    demo_link: "https://example.com/",
  },
  {
    name: "Student Management Portal",
    description: "A comprehensive platform for managing student data, courses, and academic performance using the MERN stack and RESTful APIs.",
    tech: "MongoDB, Express.js, React.js, Node.js",
    date: "January 2025",
    points: [
      "Developed a full-featured student management system with secure authentication.",
      "Implemented real-time updates for attendance and grade tracking.",
      "Created an intuitive dashboard for students and administrators."
    ],
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
    demo_link: "https://example.com/",
  },
];

// Leadership & Certifications
export const certifications = [
  {
    title: "MongoDB Developer Certification",
    link: "#",
    description: "Successfully completed a comprehensive course on MongoDB, covering NoSQL database management, schema design, query optimization, and real-world application development."
  },
  {
    title: "Java Programming Certification",
    link: "#",
    description: "Acquired strong proficiency in Java programming, mastering core concepts, object-oriented principles, data structures, and algorithmic problem-solving."
  }
];

export const extracurricular = [
  {
    title: "Active Member – NSS Society",
    description: "Contributed 30+ hours to community service, participating in 5+ social welfare initiatives, including environmental drives, educational programs, and volunteer-led events focused on community development."
  }
];

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

export { services, technologies };
