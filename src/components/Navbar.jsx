import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

import Logo3 from "../assets/logo3.png";
import Resume from "../assets/Mike Iannotti Resume.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);

  const linkProps = {
    smooth: true,
    duration: 500,
    offset: -80,
    spy: true,
    activeClass: "text-red-600",
  };

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "focus", label: "Focus" },
    { to: "experience", label: "Experience" },
    { to: "education", label: "Education" },
    { to: "projects", label: "Projects" },
    { to: "skills", label: "Skills" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-20 backdrop-blur-md bg-[#000000]/70 border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="home"
          {...linkProps}
          className="cursor-pointer"
        >
          <img
            src={Logo3}
            alt="Logo"
            className="w-16 hover:scale-105 transition duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-gray-300">

          {navLinks.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                {...linkProps}
                className="relative cursor-pointer transition duration-300 font-bold hover:text-red-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            </li>
          ))}

          <a
            href={Resume}
            download
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-white text-white hover:bg-[#4a4a4a] hover:border-[#4a4a4a] transition duration-300"
          >
            <BsFillPersonLinesFill />
            Resume
          </a>

        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden lg:flex items-center gap-5 text-xl text-gray-300">


          <a
            href="https://linkedin.com/in/michael-iannotti-5a9043417"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-600 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:miannotti06@gmail.com"
            className="hover:text-red-600 transition"
          >
            <FaEnvelope />
          </a>

        </div>

        {/* Mobile Button */}
        <button
          onClick={toggleNav}
          className="md:hidden text-2xl text-gray-300 z-50"
        >
          {nav ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-[#000000]/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          nav
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center py-10">

          {navLinks.map((item) => (
            <li key={item.to} className="py-5">
              <Link
                to={item.to}
                {...linkProps}
                onClick={toggleNav}
                className="text-2xl font-semibold hover:text-red-600 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}

          <a
            href={Resume}
            download
            onClick={toggleNav}
            className="mt-6 flex items-center gap-2 px-6 py-3 rounded-full border border-[#4a4a4a] text-white hover:bg-[#4a4a4a]  transition"
          >
            <BsFillPersonLinesFill />
            Resume
          </a>

          <div className="flex gap-8 mt-10 text-3xl text-gray-300">

            <a
              href="https://linkedin.com/in/michael-iannotti-5a9043417"
              target="_blank"
              rel="noreferrer"
              className="transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:miannotti06@gmail.com"
              className=" transition"
            >
              <FaEnvelope />
            </a>

          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;