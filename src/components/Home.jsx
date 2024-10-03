import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-3xl font-thin text-red-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Mike Iannotti
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a College Student
        </h2>

        <p className="text-[#8892b0] py-4 max-w-[700px]">
          {" "}
          I'm a freshman and Promise Scholar at William Rainey Harper College in
          the Engineering Pathways Program to UIUC. I'm majoring in computer
          science, seeking to pursue cybersecurity or software engineering.
        </p>
        <div>
          <Link
            to="work"
            style={{ cursor: "pointer" }}
            smooth={true}
            duration={500}
          >
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-[#4a4a4a] hover: duration-300">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
