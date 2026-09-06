import React from "react";
import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <div className="section-shell bg-transparent text-slate-200">
      <div className="section-container">
        <SectionHeader title="About" />

        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
          <div>
            <p className="brand-type border-l-4 border-red-500 pl-5 text-2xl font-bold leading-snug text-white sm:text-3xl">
              I want to understand how businesses really work.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                <p className="font-semibold text-red-400">Education</p>
                <p className="mt-1 text-slate-200">Elmhurst University</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                <p className="font-semibold text-red-400">Current Work</p>
                <p className="mt-1 text-slate-200">WGTaxLaw + Life Time</p>
              </div>
            </div>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-slate-200 sm:text-lg">
            <p>
              I earned my Associate in Arts from Harper College and am now a
              junior at Elmhurst University studying finance and accounting. My
              classes and internships are giving me experience with accounting,
              finance, operations, and client work.
            </p>
            <p>
              My long-term goals include owning a business, investing, leading
              a team, and helping people. I am building the financial and
              practical experience to prepare for those goals.
            </p>
            <p>
              I plan to evaluate an Italian deli and specialty food idea called
              Gemelli with my brother through a finance, accounting, analytics,
              and information systems feasibility study. It is a proposed
              project, not an operating business.
            </p>
            <p>
              Outside of school and work, I enjoy working out, traveling,
              learning about new technology, and training and competing in Jiu
              Jitsu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
