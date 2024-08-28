'use client'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HireForm from "./HireForm";

const About = () => {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";
  const [showModal, setShowModal] = useState(false);

  // Typing effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, currentIndex + 1));
      currentIndex += 1;
      if (currentIndex > fullText.length) {
        setText(""); // Clear the text
        currentIndex = 0; // Reset the index to start over
      }
    }, 150);

    return () => clearInterval(typingInterval); // Cleanup the interval on component unmount
  }, [fullText]);

  // Function to handle "Hire Me" button click
  const handleHireMeClick = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white w-11/12 m-auto mt-5">
        <div className="text-center md:text-left mb-4 md:mb-0 w-full md:w-6/12 md:ml-9">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">I am Sankalpa Shrestha</h1>
          <div className="overflow-hidden" style={{ height: '60px' }}>
            <motion.h1
              className="text-xl md:text-5xl font-bold text-green-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {text}
            </motion.h1>
          </div>
          <div className="flex justify-center md:justify-start mt-4 space-x-4 ">
            <button className="p-3 text-gray-500 font-bold border-green-600 border-2 rounded-md">
              Download CV
            </button>
            <button
              onClick={handleHireMeClick}
              className="p-3 text-gray-500 font-bold border-green-600 border-2 rounded-md"
            >
              Make A Hire
            </button>
          </div>
        </div>
        <div className="w-full md:w-6/12 flex justify-center md:justify-end md:mr-24">
          <img src="coder.png" alt="Coder" className="w-64 md:w-72 lg:w-80" />
        </div>
        {showModal && <HireForm onClose={handleCloseModal} />} {/* Render the HireForm as a modal */}
      </div>
    </>
  );
};

export default About;
