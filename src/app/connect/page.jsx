'use client'
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Navbar from "../_components/navbar";

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="w-11/12 m-auto mt-14 flex flex-col md:flex-row justify-evenly">
        <div className="md:w-5/12 p-5 text-green-700">
          <p className="text-3xl font-bold text-green-800 mb-4">Connect with me</p>
          <p className="text-gray-700">
            Know me socially and professionally by connecting with me on different social media platforms.
          </p>
          <div className="mt-5 space-y-4">
            <p className="text-xl font-bold text-green-800 mb-4 underline">Message me</p>
            <div>
              <a href="https://www.instagram.com/being_joshi.sankalpa" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl inline-block mr-2" />
                <span className="align-middle">Sankalpa Shrestha</span>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/sankalpa-shrestha-776834278/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl inline-block mr-2" />
                <span className="align-middle">Sankalpa Shrestha</span>
              </a>
            </div>
            <div>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=joshisankalpa2@gmail.com" target="_blank" rel="noopener noreferrer">
                <MdOutlineEmail className="text-3xl inline-block mr-2" />
                <span className="align-middle">joshisankalpa2@gmail.com</span>
              </a>
            </div>
            <div>
              <a href="https://wa.me/9779829369238" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-3xl inline-block mr-2" />
                <span className="align-middle">+977-9829369238</span>
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-6/12 p-5 mt-10 md:mt-0">
          <p className="text-3xl font-bold text-green-800 mb-4">Get In Touch</p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-green-300 rounded-md focus:outline-none focus:border-green-500 placeholder-green-700 focus:text-green-700"
            />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-green-300 rounded-md focus:outline-none focus:border-green-500 placeholder-green-700 focus:text-green-700"
            />
            <textarea
              placeholder="Your thoughts or queries"
              className="w-full p-3 border border-green-300 rounded-md focus:outline-none focus:border-green-500 placeholder-green-700 h-32 resize-none focus:text-green-700"
            ></textarea>
            <button
              type="submit"
              className="w-full md:w-3/12 bg-green-800 text-white p-3 rounded-md hover:bg-green-700 font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
