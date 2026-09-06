import React from "react";
import ResumePDF from "../assets/Mike Iannotti Resume.pdf";
import { MdEmail, MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  return (
    <div className="section-shell bg-transparent text-slate-100">
      <div className="section-container">
        <SectionHeader
          title="Contact"
          description="Connect with me on LinkedIn, download my resume, or send me an email."
        />

        <div className="portfolio-card overflow-hidden">
          <div className="grid gap-7 p-5 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center lg:p-8">
            <div>
              <p className="brand-type text-xl font-bold text-white sm:text-2xl">
                Let’s connect.
              </p>
              <p className="mt-2 max-w-xl text-base leading-relaxed text-slate-300">
                I’m always glad to talk about business, internships, projects,
                or new opportunities.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:miannotti06@gmail.com"
                className="button-secondary w-full gap-2 sm:w-auto"
              >
                <MdEmail className="text-xl" />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/michael-iannotti-5a9043417"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary w-full gap-2 sm:w-auto"
              >
                <FaLinkedin className="text-lg" />
                LinkedIn
              </a>
              <a
                href={ResumePDF}
                download="Michael_Iannotti_Resume.pdf"
                className="button-secondary w-full gap-2 sm:w-auto"
              >
                <MdOutlineFileDownload className="text-xl" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
