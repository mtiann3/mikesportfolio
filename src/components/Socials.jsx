import React from "react";
import Linkedin2 from "../assets/linkedin2.png";
import Github from "../assets/github.png";
import Resume from "../assets/resume2.jpg";
import ResumePDF from "../assets/myResume.pdf";

import Leetcode2 from "../assets/leetcode2.jpeg";

const Socials = () => {
  return (
    <div
      name="socials"
      className="md:hidden w-full h-full bg-[#0a192f] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-red-600  ">
            Socials
          </p>
          <p className="py-4">
            // Check out my socials to see what else I have been up to.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://www.linkedin.com/in/mike-iannotti-70b447258">
              <img className="w-20 mx-auto" src={Linkedin2} alt="HTML icon" />
            </a>

            {/* <p className="my-4">HTML</p> */}
          </div>
          <div className="bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://github.com/mtiann3">
              <img className="w-20 mx-auto" src={Github} alt="HTML icon" />
            </a>
            {/* <p className="my-4">CSS</p> */}
          </div>
          <div className="bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://leetcode.com/mtiann3">
              <img className="w-20 mx-auto" src={Leetcode2} alt="HTML icon" />
            </a>
            {/* <p className="my-4">JAVASCRIPT</p> */}
          </div>
          <div className="bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
  <a href={ResumePDF} download="MikeIannottiResume.pdf">
    <div className="flex flex-col items-center">
      <img className="w-20" src={Resume} alt="Resume" />
      {/* <p className="my-4 text-white">Download Resume</p> */}
    </div>
  </a>
</div>

        </div>
      </div>
    </div>
  );
};

export default Socials;
