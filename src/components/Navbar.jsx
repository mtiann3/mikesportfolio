import React, { useEffect, useRef, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

import Logo3 from "../assets/mi-logo.webp";
import Resume from "../assets/Mike Iannotti Resume.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuButtonRef = useRef(null);

  const toggleNav = () => setNav((isOpen) => !isOpen);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const activateOnKeyboard = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.currentTarget.click();
    }
  };

  useEffect(() => {
    if (!nav) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setNav(false);
        menuButtonRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [nav]);

  useEffect(() => {
    const closeAtDesktopWidth = () => {
      if (window.innerWidth >= 1024) setNav(false);
    };

    window.addEventListener("resize", closeAtDesktopWidth);
    return () => window.removeEventListener("resize", closeAtDesktopWidth);
  }, []);

  const linkProps = {
    smooth: !prefersReducedMotion,
    duration: prefersReducedMotion ? 0 : 180,
    offset: -80,
    spy: true,
    activeClass: "nav-link-active",
    hashSpy: false,
    onSetActive: setActiveSection,
  };

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "focus", label: "Interests" },
    { to: "experience", label: "Experience" },
    { to: "education", label: "Education" },
    { to: "projects", label: "Projects" },
    { to: "skills", label: "Skills" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav aria-label="Primary navigation" className="fixed top-0 left-0 w-full h-20 backdrop-blur-md bg-[#050d18]/95 border-b border-slate-700/90 z-50">
      <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-5 sm:px-6">

        {/* Logo */}
        <Link
          to="home"
          {...linkProps}
          role="link"
          tabIndex={0}
          onKeyDown={activateOnKeyboard}
          className="flex cursor-pointer items-center gap-3"
          aria-label="Back to top"
        >
          <img
            src={Logo3}
            alt="Michael Iannotti monogram"
            className="h-11 w-11 rounded-full"
          />
          <span className="brand-type hidden text-sm font-bold tracking-wide text-white sm:block">
            Michael Iannotti
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-3 xl:gap-5 text-sm font-medium text-slate-200">

          {navLinks.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                {...linkProps}
                role="link"
                tabIndex={0}
                aria-current={activeSection === item.to ? "location" : undefined}
                onKeyDown={activateOnKeyboard}
                className="relative cursor-pointer py-2 transition duration-200 font-semibold hover:text-red-400 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:rounded-full after:bg-red-500 after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li>
            <a
              href={Resume}
              download="Michael_Iannotti_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-500 text-white hover:border-slate-300 hover:bg-slate-800 transition duration-200"
            >
              <BsFillPersonLinesFill />
              Resume
            </a>
          </li>

        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden 2xl:flex items-center gap-4 text-lg text-slate-200">


          <a
            href="https://linkedin.com/in/michael-iannotti-5a9043417"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-red-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:miannotti06@gmail.com"
            aria-label="Email Michael Iannotti"
            className="hover:text-red-400 transition"
          >
            <FaEnvelope />
          </a>

        </div>

        {/* Mobile Button */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={toggleNav}
          aria-label={nav ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={nav}
          aria-controls="mobile-menu"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/80 text-xl text-white z-50"
        >
          {nav ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        aria-hidden={!nav}
        id="mobile-menu"
        style={{ maxHeight: "calc(100dvh - 80px)" }}
        className={`lg:hidden fixed top-20 left-0 w-full overflow-y-auto overscroll-contain bg-[#050d18] border-b border-slate-700 transition-all duration-200 ease-out ${
          nav
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <ul
          className="flex flex-col items-center pt-6"
          style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
        >

          {navLinks.map((item) => (
            <li key={item.to} className="w-full px-5 text-center">
              <Link
                to={item.to}
                {...linkProps}
                onClick={() => setNav(false)}
                role="link"
                tabIndex={nav ? 0 : -1}
                aria-current={activeSection === item.to ? "location" : undefined}
                onKeyDown={activateOnKeyboard}
                className="block w-full cursor-pointer border-b border-white/5 py-3 text-lg font-semibold text-slate-100 hover:text-red-400 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li>
            <a
              href={Resume}
              download="Michael_Iannotti_Resume.pdf"
              onClick={toggleNav}
              tabIndex={nav ? 0 : -1}
              className="mt-5 flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-500 text-white hover:bg-slate-800 transition"
            >
              <BsFillPersonLinesFill />
              Resume
            </a>
          </li>

          <li className="mt-6 flex gap-4 text-xl text-slate-100">
              <a
                href="https://linkedin.com/in/michael-iannotti-5a9043417"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                tabIndex={nav ? 0 : -1}
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg transition hover:bg-slate-800 hover:text-red-400"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:miannotti06@gmail.com"
                aria-label="Email Michael Iannotti"
                tabIndex={nav ? 0 : -1}
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg transition hover:bg-slate-800 hover:text-red-400"
              >
                <FaEnvelope />
              </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
