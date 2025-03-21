
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
  linkedin: "linkedin.com/in/aryan-kaushal-91a2b0255/",
  github: "github.com/Aryankaushal82",
  leetcode: "leetcode.com/u/Aryan_Kaushal777/"
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
  },
  {
    title: "Software Developer Intern",
    company: "Ikarus",
    duration: "Currently Working",
    location: "Mohali",
    points: [
      "Exploring and learning new technologies and frameworks to improve my skills.",
      "Working on a project to develop a web application for a client.",
      "Collaborating with the team to develop and deploy the project.",
      "Participating in code reviews and providing feedback to other developers."
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
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS 3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "Node JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Three JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  }
];
export { services, technologies };
