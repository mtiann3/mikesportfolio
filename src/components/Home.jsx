import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">

      {/* CENTER WRAPPER */}
      <div className="max-w-[1000px] mx-auto px-8 h-full flex flex-col justify-center items-start">

        <p className="text-3xl font-thin text-red-600">
          Hi, my name is
        </p>

        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Michael Iannotti
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold text-[#8892b0]">
          Accounting Student | Computer Science Minor | SDR Intern at Cyera
        </h2>

        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Junior at Elmhurst University pursuing a Bachelor's degree in Accounting with a minor in Computer Science. Interested in accounting, data analytics, and technology-driven business solutions.
        </p>

        <div>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-[#4a4a4a] duration-300">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Home;