import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Me from "../assets/DSC07129.JPG";
import Resume from "../assets/Mike Iannotti Resume.pdf";

const Home = () => {
  return (
    <div name="home" className="w-full min-h-[calc(100vh-80px)] bg-none py-16">
      {/* CENTER WRAPPER */}
      <div className="max-w-[1000px] mx-auto px-6 min-h-[calc(100vh-208px)] flex flex-col md:flex-row justify-center items-center gap-10">
        {/* TEXT SECTION */}
        <div className="flex flex-col items-start">
          <p className="text-lg font-semibold text-red-500">Hi, my name is</p>

          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Michael Iannotti
          </h1>

          <h2 className="text-xl sm:text-3xl font-bold text-[#a8bbef] mt-2">
            Finance and Accounting Student Exploring Business, Ownership, and
            Meaningful Work
          </h2>

          <p className="text-[#ebecf0] font-medium py-4 max-w-[700px] leading-relaxed">
            I’m a junior at Elmhurst University learning how businesses work
            through accounting, finance, client-facing roles, and applied
            projects. I’m interested in entrepreneurship, leadership, and
            helping people—and I’m keeping an open mind about where those
            interests will lead.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <button className="text-white group border-2 px-6 py-3 flex items-center hover:bg-[#4a4a4a] hover:border-[#4a4a4a] duration-300">
                View Experience
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>

            <a href={Resume} download="Michael_Iannotti_Resume.pdf">
              <button className="text-white border-2 px-6 py-3 hover:bg-[#4a4a4a] hover:border-[#4a4a4a] duration-300">
                Download Resume
              </button>
            </a>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="flex justify-center items-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#8892b0] shadow-lg">
            <img
              src={Me}
              alt="Profile"
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
