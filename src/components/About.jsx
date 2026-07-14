import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-none text-gray-300">
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
            <p>Building toward planning-first wealth management.</p>
          </div>
          <div>
            <p className="font-medium leading-relaxed">
              I am an accounting and finance student transferring to Elmhurst University
              after earning my Associate in Arts from Harper College. My
              long-term goal is to build a career in wealth management and
              financial planning, with a focus on helping individuals, families,
              and business owners make better financial decisions.
              <br />
              <br />
              I am especially interested in tax-aware planning, retirement
              planning, investment education, and eventually building or
              partnering in a planning-focused advisory business. My accounting
              background, client-facing experience, and technical skills give me
              a foundation to understand both the numbers and the people behind
              them.
              <br />
              <br />
              Outside of academics and work, I enjoy working out, traveling,
              exploring new technologies, and training and competing in Jiu
              Jitsu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
