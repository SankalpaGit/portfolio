'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    // Detect if the screen size is mobile or tablet
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobileOrTablet(true);
      } else {
        setIsMobileOrTablet(false);
      }
    };

    // Initialize on mount
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to handle image click on mobile
  const handleImageClick = (e) => {
    if (!isMobileOrTablet && isHovered) {
      e.preventDefault();
    } else {
      setIsHovered(true);
    }
  };

  return (
    <>
      <Link href="/sankalpa" onClick={(e) => handleImageClick(e)}>
        <main className="w-full h-screen flex items-center justify-center max-w-screen-xl m-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative"
          >
            <img
              src="boy.png"
              alt="Developer"
              className="w-11/12 sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-11/12 max-w-none mx-auto"
              onMouseEnter={() => !isMobileOrTablet && setIsHovered(true)}
              onMouseLeave={() => !isMobileOrTablet && setIsHovered(false)}
              onClick={(e) => handleImageClick(e)}
            />

            {/* Hover box */}
            {(isHovered || isMobileOrTablet) && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute -top-20 transform -translate-x-1/2 bg-white p-4 border border-gray-300 rounded-lg shadow-lg text-center ml-28"
              >
                <p className="text-lg font-semibold text-gray-800">Welcome to My Portfolio!</p>
                <p className="text-sm text-gray-600 mt-2">Click anywhere to visit my portfolio</p>
              </motion.div>
            )}
          </motion.div>
        </main>
      </Link>
    </>
  );
}
