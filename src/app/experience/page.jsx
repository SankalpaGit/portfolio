'use client'

import Navbar from "../_components/navbar"
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const ExperienceCard = ({ jobTitle, position, company, description, logoUrl, companyUrl }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-[90%] md:w-[400px] mx-6 mb-8 relative z-10"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.05, 
        rotate: 2, 
        transition: { duration: 0.3 }
      }}
    >
      <div className="p-6 flex flex-col md:flex-row items-center">
        <a href={companyUrl} target="_blank" rel="noopener noreferrer">
          <img src={logoUrl} alt={`${company} logo`} className="w-20 h-20 md:w-24 md:h-24 rounded-full" />
        </a>
        <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-green-700">{jobTitle}</h2>
          <p className="text-md md:text-lg text-gray-500">{position}</p>
          <p className="text-md md:text-lg text-gray-600 font-semibold">{company}</p>
        </div>
      </div>
      <p className="p-6 text-gray-700 text-base text-justify">{description}</p>
      <p className="p-2 text-center text-green-600 font-bold mb-5">View Certificate Letter</p>
    </motion.div>
  )
}

const Page = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;
    if (line) {
      const { width } = line.parentElement.getBoundingClientRect();
      line.setAttribute('d', `M 0 0 Q ${width / 2} 20, ${width} 0`);
    }
  }, []);

  return (
    <div>
      <Navbar /> {/* Navbar with z-index 20 */}
      <div className="p-6 flex flex-col items-center ">
        <h1 className="text-3xl font-bold mb-12 text-green-700">Professional Journey</h1>

        <div className="flex flex-wrap justify-center items-center space-y-6 md:space-y-0 md:space-x-8"> {/* Wrapped cards and added space */}
          <ExperienceCard
            jobTitle="I.T Support & Opeations"
            position="Internship"
            company="Itahari International College"
            description="Provided technical support, maintained IT systems, and assisted staff along with student in troubleshooting hardware and software issues."
            logoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxFFN11aZ3OCOdhZxYCMyNBl7pczLkxv9Y6A&s"
            companyUrl="https://iic.edu.np/"
          />

          <ExperienceCard
            jobTitle="Frontend Engineer"
            position="Internship"
            company="Blue Fox Private Limted"
            description="Developed and maintained frontend of web application, collaborated with design teams, and ensured optimal user experience following best architecture."
            logoUrl="https://bluefox.com.np/assets/images/logo-footer.svg"
            companyUrl="https://bluefox.com.np/"
          />
        </div>
      </div>
    </div>
  )
}

export default Page
