import React from "react";
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
            aria-label="GitHub profile (opens in a new tab)"
            className="icon-button"
          >
            <FaGithub aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com/in/michael-iannotti-5a9043417"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
            className="icon-button"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="icon-button cursor-pointer"
          >
            <FaArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
