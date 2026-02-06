
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const USER_DETAILS = {
    name: "Abhinav Singh",
    title: "Full Stack Developer (MERN)",
    bio: "Aspiring MERN Stack Developer with a strong command of Data Structures, Algorithms, and Object-Oriented Programming concepts. Passionate about solving complex problems and building scalable, user-friendly web applications.",
    email: "abhinavsingh280803@gmail.com",
    socialMatches: [
        {
            id: "github",
            link: "https://github.com/abhinavsingh6909li",
            icon: FaGithub,
            label: "GitHub"
        },
        {
            id: "linkedin",
            link: "https://www.linkedin.com/in/abhinav-singh-227a9822a/",
            icon: FaLinkedin,
            label: "LinkedIn"
        },
        {
            id: "leetcode",
            link: "https://leetcode.com/u/abhinav_thakur__1/",
            icon: SiLeetcode,
            label: "LeetCode"
        },
        {
            id: "email",
            link: "mailto:abhinavsingh280803@gmail.com",
            icon: FaEnvelope,
            label: "Email"
        }
    ]
};

export const PROJECTS = [
    {
        id: 1,
        title: "StudyHub – Learning Platform",
        description: "A centralized, clean, and responsive interface focused on productivity. Features secure user authentication, personalized dashboards, and structured study content.",
        tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
        liveLink: "https://studyhubfinal-1.onrender.com/",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYqoKTu_o3Zns2yExbst2Co84Gpc2Q1RJbA&s"
    },
    {
        id: 2,
        title: "Job Application Portal",
        description: "Comprehensive job board application with premium UX, guided multi-step forms, real-time validation, and application tracking.",
        tech: ["React (Vite)", "Redux Toolkit", "Context API", "CSS Variables"],
        liveLink: "https://studyhubfinal-1.onrender.com/", // User provided same link, might be placeholder or same host
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYqoKTu_o3Zns2yExbst2Co84Gpc2Q1RJbA&s"
    },
    {
        id: 3,
        title: "Smart Shopping Cart",
        description: "Interactive e-commerce web application showcasing advanced React patterns, global state management, and seamless checkout experience.",
        tech: ["React", "Redux", "Context API", "Tailwind CSS"],
        liveLink: "https://studyhubfinal-1.onrender.com/",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYqoKTu_o3Zns2yExbst2Co84Gpc2Q1RJbA&s"
    }
];

export const SKILLS = [
    { category: "Frontend", items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "JavaScript"] },
    { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "SQL"] },
    { category: "Tools", items: ["Git", "GitHub", "Postman", "VS Code"] }
];
