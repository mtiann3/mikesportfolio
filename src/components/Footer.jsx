import React from "react";
import { Link } from "react-scroll";
import { FaArrowUp, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050d18]/95">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-5 px-5 py-7 text-center sm:flex-row sm:px-6 sm:text-left">
        <div>
          <p className="brand-type font-bold text-white">Michael Iannotti</p>
          <p className="mt-1 text-sm text-slate-400">
            Finance and accounting student based in the Chicago area.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/mtiann3"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="icon-button"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/michael-iannotti-5a9043417"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="icon-button"
          >
            <FaLinkedin />
          </a>
          <Link
            to="home"
            smooth={false}
            duration={0}
            offset={-80}
            role="link"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                event.currentTarget.click();
              }
            }}
            aria-label="Back to top"
            className="icon-button cursor-pointer"
          >
            <FaArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
