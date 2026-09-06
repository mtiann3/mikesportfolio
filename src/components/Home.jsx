import React from "react";
import { HiArrowNarrowRight, HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-scroll";
import Me from "../assets/michael-iannotti.webp";
import Resume from "../assets/Mike Iannotti Resume.pdf";

const Home = () => {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className="w-full border-b border-white/10 bg-gradient-to-b from-black/5 to-[#06101e]/40 lg:min-h-[calc(100vh-80px)]">
      <div className="section-container grid items-center gap-10 py-12 sm:py-14 md:grid-cols-[1.35fr_.8fr] lg:min-h-[calc(100vh-80px)] lg:py-16">
        <div className="flex flex-col items-start">
          <p className="mb-4 inline-flex items-center rounded-full border border-red-400/30 bg-red-900/30 px-3 py-1 text-sm font-semibold text-red-300">
            Junior at Elmhurst University
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight drop-shadow-lg">
            Michael Iannotti
          </h1>

          <h2 className="mt-4 max-w-[700px] text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 leading-snug">
            Finance and Accounting Student at Elmhurst University
          </h2>

          <p className="max-w-[680px] py-5 text-base sm:text-lg text-slate-200 leading-relaxed">
            I currently intern part time at WGTaxLaw and work at Life Time. My
            experience also includes sales development at Cyera and retail at
            lululemon. I am interested in business ownership, investing,
            leadership, and working with people.
          </p>

          <div className="mt-1 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link
              to="experience"
              smooth={!prefersReducedMotion}
              duration={prefersReducedMotion ? 0 : 220}
              offset={-80}
              role="link"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  event.currentTarget.click();
                }
              }}
              className="button-primary group w-full cursor-pointer sm:w-auto"
            >
              View Experience
              <span className="group-hover:translate-x-1 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </Link>

            <a
              href={Resume}
              download="Michael_Iannotti_Resume.pdf"
              className="button-secondary w-full gap-2 sm:w-auto"
            >
              <HiOutlineDownload className="text-lg" />
              Download Resume
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-5 text-sm font-medium text-slate-300">
            <span>WGTaxLaw Intern</span>
            <span>Life Time Team Member</span>
            <span>Chicago Area</span>
          </div>
        </div>

        <div className="relative mx-auto w-60 sm:w-72 md:w-full md:max-w-[300px]">
          <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border-2 border-red-500/60" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-300/60 bg-slate-900 shadow-2xl shadow-black/50">
            <img
              src={Me}
              alt="Michael Iannotti"
              decoding="async"
              fetchpriority="high"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
