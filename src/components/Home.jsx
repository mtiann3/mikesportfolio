import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Me from "../assets/IMG_2216.PNG";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-none">
      {/* CENTER WRAPPER */}
      <div className="max-w-[1000px] mx-auto px-8 h-full flex flex-col md:flex-row justify-center items-center gap-10">

        {/* TEXT SECTION */}
        <div className="flex flex-col items-start">
          <p className="text-3xl font-bold text-red-600">
            Hi, my name is
          </p>

          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Michael Iannotti
          </h1>

          <h2 className="text-xl sm:text-2xl font-bold text-[#8892b0]">
            Accounting Student | Computer Science Minor | SDR Intern at Cyera
          </h2>

          <p className="text-[#ebecf0] font-bold py-4 max-w-[700px]">
            Junior at Elmhurst University pursuing a Bachelor's degree in Accounting with a minor in Computer Science. Interested in accounting, data analytics, and technology-driven business solutions.
          </p>

          <div>
            <Link to="work" smooth={true} duration={500} className="cursor-pointer">
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-[#4a4a4a] duration-300">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="flex justify-center items-center">
          <img
            src={Me}
            alt="Profile"
            className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-[#8892b0] shadow-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default Home;