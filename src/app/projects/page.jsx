'use client'

import Navbar from "../_components/navbar"
import { motion } from "framer-motion";
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMysql, SiDjango, SiJavascript, SiExpress } from "react-icons/si";

const techIcons = {
  Java: <FaJava />,
  MySQL: <SiMysql />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <SiJavascript />,
  Django: <SiDjango />,
  React: <FaReact />,
  Node: <FaNodeJs />,
  Express: <SiExpress />
};

const projects = [
  {
    name: "SellPhone",
    description: "A comprehensive e-commerce platform tailored for mobile phone sales, featuring a secure checkout process, real-time inventory management, and advanced search filters.",
    techUsed: ["Java", "JSP", "MySQL"],
    githubLink: "https://github.com/SankalpaGit/Java-servlets",
    imageUrl: "https://img.freepik.com/free-vector/dark-themed-mobile-phone-surrounded-by-apps_52683-23826.jpg?t=st=1724822139~exp=1724825739~hmac=10579c8f682a8d2a8ee8aa972b702d29b55aaf04c69612993bec598bb3708858&w=740"
  },
  {
    name: "Medico",
    description: "An e-commerce platform for pharmacies with an integrated chat feature for customer support. The system includes order tracking, prescription uploads, and payment gateway integration.",
    techUsed: ["HTML", "CSS", "JavaScript", "Django", "MySQL"],
    githubLink: "https://github.com/SankalpaGit/Medico",
    imageUrl: "https://img.freepik.com/free-vector/pharmacist_23-2148172036.jpg?t=st=1724822172~exp=1724825772~hmac=6b9f2f6f89ad2c0059350c88e9e11373ae91fcf49443fe94e1131f3199e3d4e1&w=740"
  },
  {
    name: "Book Store",
    description: "A modern online book store platform with advanced search, user reviews, and a recommendation system. It supports a variety of payment methods and a user-friendly interface.",
    techUsed: ["MySQL", "React", "Node", "Express"],
    githubLink: "https://github.com/SankalpaGit/jwt-auth",
    imageUrl: "https://img.freepik.com/free-vector/children-reading-books-library_1308-30864.jpg?t=st=1724822207~exp=1724825807~hmac=de0fd43a66d974f95fea3b46b758c5d35137388abff9b8f257e571fbd54632e7&w=1380"
  }
];

const ProjectCard = ({ description, techUsed, githubLink, imageUrl }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <img src={imageUrl} alt="Project" className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex space-x-2 mb-4 text-green-700 text-2xl">
        {techUsed.map((tech, index) => (
          <span key={index}>{techIcons[tech]}</span>
        ))}
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-green-700 font-bold hover:underline">
        View on GitHub
      </a>
    </div>
  </motion.div>
);

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
