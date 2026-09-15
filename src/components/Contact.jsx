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
          description="Send me an email, connect on LinkedIn, or download my resume."
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
              <a href="mailto:miannotti06@gmail.com" className="mt-3 inline-flex min-h-[44px] items-center break-all text-sm text-slate-200 underline decoration-slate-500 underline-offset-4 transition hover:text-red-300">
                miannotti06@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:miannotti06@gmail.com"
                className="button-primary w-full gap-2 sm:w-auto"
              >
                <MdEmail className="text-xl" aria-hidden="true" />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/michael-iannotti-5a9043417"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary w-full gap-2 sm:w-auto"
              >
                <FaLinkedin className="text-lg" aria-hidden="true" />
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href={ResumePDF}
                download="Michael_Iannotti_Resume.pdf"
                className="button-secondary w-full gap-2 sm:w-auto"
              >
                <MdOutlineFileDownload className="text-xl" aria-hidden="true" />
                Resume
                <span className="sr-only"> (download PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
