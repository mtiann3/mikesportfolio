import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full bg-none text-slate-100 py-24 scroll-mt-24">
      <div className="flex flex-col justify-center items-center w-full">
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
            <p>Learning broadly. Building with purpose.</p>
          </div>
          <div>
            <p className="font-medium leading-relaxed">
              I am a junior at Elmhurst University studying accounting and
              finance after earning my Associate in Arts from Harper College.
              Right now, I am focused on building practical skills, learning
              from different parts of business, and understanding where I can
              contribute most.
              <br />
              <br />
              My interests reach beyond a single job title. I care about
              business ownership, entrepreneurship, investing, leadership, and
              work that genuinely helps people. Family examples of ownership
              and community service have shaped that outlook. My twin brother,
              Jack, and I are also studying the feasibility of an independent
              Italian food concept called Gemelli as a way to apply what we are
              learning.
              <br />
              <br />
              Outside of academics and work, I enjoy working out, traveling,
              exploring new technologies, spending time with family, and
              training and competing in Jiu Jitsu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
