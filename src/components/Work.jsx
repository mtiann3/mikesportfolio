import React from "react";
import WorkImg from "../assets/work.png";
import Experience from "../assets/experience.png";
import Extracurriculars from "../assets/extracurriculars.png";
import Academics from "../assets/academics.png";

const Work = () => {
  return (
    <div name="work" className="w-full h-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className="grid grid-cols-2 gap-4 object-contain">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Experience})` }}
            className="shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100 ">
              <span className="text-l font-bold text-white tracking-wider">
                Relevant Coursework
              </span>
              <div className="pt-8 text-center">
                <p>
                Calculus 1, Statistics, Computer Science Principles, Computer Science A, Mobile Application Development, Independent Study Computer Science, Chemistry 1, Introduction to Engineering

                </p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Extracurriculars})` }}
            className="shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center  group-hover:opacity-100 ">
              <span className="text-l font-bold text-white tracking-wider">
                Extracurricular Activities
              </span>
              <div className="pt-8 text-center">
                <p>
                    Finance Club, Technology Club, and Comp Sci Kids Mentor.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Academics})` }}
            className="shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100 ">
              <span className="text-l font-bold text-white tracking-wider">
                Academics
              </span>
              <div className="pt-8 text-center">
                <p>High School GPA: 3.4 unweighted, 4.1 weighted.</p>
                <p>College GPA: 3.5</p>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100 ">
              <span className="text-l font-bold text-white tracking-wider">
                Work Experience
              </span>
              <div className="pt-8 text-center">
                <p>
                  Currently, I have retail experience, as well as experience in the food and health industry. For 
                  more information, be sure to check out my resume.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
