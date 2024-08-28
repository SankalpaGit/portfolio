'use client'

import Navbar from "@/app/_components/navbar"
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaAngular } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss,  SiDjango, SiMysql, SiExpress } from 'react-icons/si'

const services = [
  {
    title: "Frontend Development",
    image: "https://img.freepik.com/free-vector/frontend-developer-typographic-header-website-interface-design-improvement-web-page-programming-coding-testing-it-profession-isolated-flat-vector-illustration_613284-304.jpg?t=st=1724771070~exp=1724774670~hmac=08a2c9db762f628d42d782d30b646a36385a70728a6da258e9f1389652bf9613&w=1380",
    technologies: [
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <FaAngular />, name: "Angular" },
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend Development",
    image: "https://img.freepik.com/free-vector/back-end-developer-typographic-header-software-development-process-website-interface-design-improvement-programming-coding-it-profession-isolated-flat-vector-illustration_613284-521.jpg?t=st=1724771124~exp=1724774724~hmac=2075741e99486275949a8f4a917751382098203eb2dabf421c94431dcd3a0c31&w=1380",
    technologies: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiDjango />, name: "Django" },
      { icon: <SiExpress />, name: "Express" },
      { icon: <SiMysql />, name: "MySQL" },
    ],
  },

]

const ServiceCard = ({ title, image, technologies }) => (
  <motion.div 
    className="bg-white shadow-lg rounded-lg p-5 w-full sm:w-1/2 lg:w-1/3 m-3"
    whileHover={{ scale: 1.05, rotate: 1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3 }}
  >
    <motion.img 
      src={image} 
      alt={title} 
      className="rounded-t-lg w-full h-48 object-cover"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    />
    <motion.h3 
      className="text-2xl font-bold mt-3 text-green-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      {title}
    </motion.h3>
    <div className="flex flex-wrap mt-3">
      {technologies.map((tech, index) => (
        <motion.div 
          key={index} 
          className="group relative m-2"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-3xl text-green-600 group-hover:text-green-800">
            {tech.icon}
          </span>
          <motion.span 
            className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block text-sm text-gray-600 font-semibold bg-gray-200 rounded p-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {tech.name}
          </motion.span>
        </motion.div>
      ))}
    </div>
  </motion.div>
)

const Page = () => {
  return (
    <div>
      <Navbar />
      <p className="text-green-700 text-center font-bold text-4xl mt-5 tracking-wider">My Services</p>
      <motion.div 
        className="w-11/12 m-auto flex flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
            technologies={service.technologies}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default Page
