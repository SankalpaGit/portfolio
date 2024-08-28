'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Import the Link component
import { FiMenu, FiX } from 'react-icons/fi'; // Import menu icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-white h-20 flex items-center justify-between px-10 shadow-md mt-4 relative">
      <Link href="/sankalpa">
        <div className="text-2xl font-bold text-green-800">
          SANKALPA
        </div>
      </Link>

      {/* Desktop view */}
      <div className="hidden md:flex space-x-6">
        {['Skills', 'Experience', 'Projects', 'Connect'].map((item, index) => (
          <div key={index}>
            <Link href={`/${item.toLowerCase()}`}>
              <motion.p
                className="text-lg text-black hover:text-green-900 font-bold"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.p>
            </Link>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet view */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <FiX className="text-2xl text-green-800" />
          ) : (
            <FiMenu className="text-2xl text-green-800" />
          )}
        </button>
      </div>

      {/* Hamburger Menu */}
      {isOpen && (
        <div className="absolute top-20 right-0 w-10/12 h-screen bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-20">
          {['Skills', 'Experience', 'Projects', 'Connect'].map((item, index) => (
            <Link key={index} href={`/${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
              <motion.p
                className="text-lg text-black hover:text-green-900 font-bold"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.p>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
