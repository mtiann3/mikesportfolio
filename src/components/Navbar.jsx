import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { SiLeetcode } from "react-icons/si";
import { Link } from "react-scroll";

import Logo3 from "../assets/logo3.png";
import Resume from "../assets/Mike Iannotti Resume.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const linkProps = {
    smooth: true,
    duration: 500,
    offset: -90,
    className: "cursor-pointer",
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-none text-gray-300 z-50">
      {/* LOGO */}
      <Link to="home" {...linkProps}>
        <img src={Logo3} alt="logo" className="w-[80px] cursor-pointer" />
      </Link>

      {/* DESKTOP MENU (NO SOCIALS HERE) */}
      <ul className="hidden font-bold md:flex gap-6">
        <li>
          <Link to="home" {...linkProps}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" {...linkProps}>
            About
          </Link>
        </li>
        <li>
          <Link to="focus" {...linkProps}>
            Focus
          </Link>
        </li>
        <li>
          <Link to="experience" {...linkProps}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="education" {...linkProps}>
            Education
          </Link>
        </li>
        <li>
          <Link to="projects" {...linkProps}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="skills" {...linkProps}>
            Skills
          </Link>
        </li>
{/* reume component here */}
        <li>
          <Link to="contact" {...linkProps}>
            Contact
          </Link>
        </li>
      </ul>

      {/* HAMBURGER */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* MOBILE MENU (INCLUDES SOCIALS) */}
      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-3xl cursor-pointer">
          <Link to="home" {...linkProps} onClick={handleClick}>
            Home
          </Link>
        </li>

        <li className="py-6 text-3xl cursor-pointer">
          <Link to="about" {...linkProps} onClick={handleClick}>
            About
          </Link>
        </li>
        <li className="py-6 text-3xl cursor-pointer">
          <Link to="focus" {...linkProps} onClick={handleClick}>
            Professional Focus
          </Link>
        </li>
          <li className="py-6 text-3xl cursor-pointer">
          <Link to="experience" {...linkProps} onClick={handleClick}>
            Experience
          </Link>
        </li>
          <li className="py-6 text-3xl cursor-pointer">
          <Link to="education" {...linkProps} onClick={handleClick}>
            Education
          </Link>
        </li>
         <li className="py-6 text-3xl cursor-pointer">
          <Link to="projects" {...linkProps} onClick={handleClick}>
            Projects
          </Link>
        </li>

        <li className="py-6 text-3xl cursor-pointer">
          <Link to="skills" {...linkProps} onClick={handleClick}>
            Skills
          </Link>
        </li>

       

      

        {/* SOCIALS ONLY MOBILE */}
        <li className="py-6 text-3xl cursor-pointer">
          <Link to="contact" {...linkProps} onClick={handleClick}>
            Contact
          </Link>
        </li>

        {/* <li className="py-6 text-3xl cursor-pointer">
          <Link to="contact" {...linkProps} onClick={handleClick}>
            Contact
          </Link>
        </li> */}
      </ul>

      {/* DESKTOP SOCIAL SIDEBAR (KEEP THIS) */}
      {/* <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077B5] w-[160px] h-[60px] flex items-center cursor-pointer">
            <a
              href="https://www.linkedin.com/in/michael-iannotti-5a9043417

"
              className="flex justify-between w-full px-1 text-white"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="ml-[-120px] hover:ml-0 duration-300 bg-[#D44638] px-2 w-[180px] h-[60px] flex items-center cursor-pointer">
            <a
              href="mailto:miannotti06@gmail.com"
              className="flex justify-between items-center w-full h-full px-3 text-white"
            >
              <span>Email</span>
              <FaEnvelope size={30} />
            </a>
          </li>

          <li className="ml-[-100px] hover:ml-[-10px] duration-300 px-2 bg-gray-600 w-[160px] h-[60px] flex items-center cursor-pointer">
            <a
              href={Resume}
              download
              className="flex justify-between w-full px-2 text-white"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          {/* Add email button */}
        {/* </ul>
      </div> */} 
    </div>
  );
};

export default Navbar;
