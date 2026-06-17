import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi, I'm Mike. Thanks for visiting my portfolio.</p>
          </div>
          <div>
            <p>
             I am a junior at Elmhurst University pursuing a Bachelor’s degree in Accounting with a minor in Computer Science. Prior to transferring, I attended Harper College, where I built a strong foundation in business and technology and earned an Associate of Arts degree.
              <br />
              <br />
              Currently, I am an SDR Intern at Cyera, gaining experience in
              business development, communication, and the technology industry.
              I am considering pursuing the CPA designation and a career in
              accounting, with interests in financial analysis, data analytics,
              and technology-driven business solutions.
              <br />
              <br />
              Outside of academics and work, I enjoy following sports, staying
              active, and exploring new technologies and industry trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
