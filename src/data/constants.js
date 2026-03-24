import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

// Import project images
import studyHubImg from "../assets/studyhub.png";
import jobPortalImg from "../assets/job-portal.png";
import smartCartImg from "../assets/smart-cart.png";
import profileIMG from "../assets/profile.png";

export const USER_DETAILS = {
  name: "Abhinav Singh",
  title: "Full Stack Developer (MERN)",
  bio: "Aspiring MERN Stack Developer with a strong command of Data Structures, Algorithms, and Object-Oriented Programming concepts. Passionate about solving complex problems and building scalable, user-friendly web applications.",
  email: "abhinavsingh280803@gmail.com",
  // Paste your profile picture URL below within the quotes.
  // Leave clear to show initials "AS" instead.
  profileImage: profileIMG,
  socialMatches: [
    {
      id: "github",
      link: "https://github.com/abhinavsingh6909",
      icon: FaGithub,
      label: "GitHub",
    },
    {
      id: "linkedin",
      link: "https://www.linkedin.com/in/abhinav-singh-227a9822a/",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      id: "leetcode",
      link: "https://leetcode.com/u/abhinav--singh/",
      icon: SiLeetcode,
      label: "LeetCode",
    },
    {
      id: "email",
      link: "mailto:abhinavsingh280803@gmail.com",
      icon: FaEnvelope,
      label: "Email",
    },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: "StudyHub – Learning Platform",
    description:
      "A centralized, clean, and responsive interface focused on productivity. Features secure user authentication, personalized dashboards, and structured study content.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://studyhubfinal-1.onrender.com/",
    image: studyHubImg,
  },
  {
    id: 2,
    title: "Job Application Portal",
    description:
      "Comprehensive job board application with premium UX, guided multi-step forms, real-time validation, and application tracking.",
    tech: ["React (Vite)", "Redux Toolkit", "Context API", "CSS Variables"],
    liveLink: "https://job-application-portal-i.vercel.app/",
    image: jobPortalImg,
  },
  {
    id: 3,
    title: "Smart Shopping Cart",
    description:
      "Interactive e-commerce web application showcasing advanced React patterns, global state management, and seamless checkout experience.",
    tech: ["React", "Redux", "Context API", "Tailwind CSS"],
    liveLink: "https://smart-cart-shopping.vercel.app/",
    image: smartCartImg,
  },
];

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "SQL"] },
  { category: "Tools", items: ["Git", "GitHub", "Postman", "VS Code"] },
];
