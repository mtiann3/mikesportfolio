import React from "react";
import Linkedin2 from "../assets/linkedin2.png";
import Resume from "../assets/resume2.jpg";
import ResumePDF from "../assets/Mike Iannotti Resume.pdf";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full  text-gray-300 py-20"
    >
      <div className="max-w-[900px] h-screen mx-auto px-6">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold inline border-b-4 border-red-600">
            Contact
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg">
            Feel free to connect with me professionally, download my resume, or
            reach out by email.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/michael-iannotti-5a9043417"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900/90 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300 p-8 flex flex-col items-center text-center hover:-translate-y-1"
          >
            <img
              src={Linkedin2}
              alt="LinkedIn"
              className="w-20 h-20 object-contain"
            />

            <h3 className="mt-6 text-xl font-semibold text-white">
              LinkedIn
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              View my professional profile and connect with me.
            </p>
          </a>

          {/* Resume */}
          <a
            href={ResumePDF}
            download="MikeIannottiResume.pdf"
            className="bg-slate-900/90 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300 p-8 flex flex-col items-center text-center hover:-translate-y-1"
          >
            <img
              src={Resume}
              alt="Resume"
              className="w-20 h-20 object-contain"
            />

            <h3 className="mt-6 text-xl font-semibold text-white">
              Resume
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Download a copy of my resume in PDF format.
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:miannotti06@gmail.com"
            className="bg-slate-900/90 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300 p-8 flex flex-col items-center text-center hover:-translate-y-1"
          >
            <MdEmail size={72} className="text-white" />

            <h3 className="mt-6 text-xl font-semibold text-white">
              Email
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Have a question or opportunity? I'd be happy to hear from you.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;