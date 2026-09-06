import React from "react";
import Harper from "../assets/harpercollege_logo.jpg";
import Elmhurst from "../assets/elmhurstuniversity_logo.jpg";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import SectionHeader from "./SectionHeader";

const educationItems = [
  {
    school: "Elmhurst University",
    logo: Elmhurst,
    location: "Elmhurst, IL",
    degree: "Bachelor of Science in Accounting; Second Major in Finance",
    dates: "Expected May 2028",
    highlight: "Junior | Finance and Accounting",
    coursework: [
      "Intermediate Accounting I",
      "Principles of Marketing",
      "Management Theory and Practice",
      "Intro to Logistics and Supply Chain Management",
    ],
  },
  {
    school: "Harper College",
    logo: Harper,
    location: "Palatine, IL",
    degree: "Associate in Arts",
    dates: "May 2026",
    highlight:
      "GPA: 3.32 | President’s List | Dean’s List | 73 credits completed",
    coursework: [
      "Financial Accounting",
      "Managerial Accounting",
      "Business Law",
      "Microeconomics",
      "Macroeconomics",
      "Computer Information Systems",
      "Computer Science I",
      "Calculus I",
    ],
  },
];

const professionalDevelopment = [
  {
    title: "Securities Industry Essentials (SIE) Exam",
    status: "Passed",
    description:
      "Passed the FINRA SIE, which covers securities products, risks, market structure, customer accounts, and industry rules.",
  },
];

const Education = () => {
  return (
    <div className="section-shell section-tint text-slate-100">
      <div className="section-container">
        <SectionHeader
          title="Education"
          description="I earned my associate degree at Harper College and transferred to Elmhurst University, where I am pursuing degrees in accounting and finance."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {educationItems.map((item) => (
            <EducationCard key={item.school} item={item} />
          ))}
        </div>

        <div className="mt-9">
          <h3 className="mb-4 text-xl font-bold text-white">
            Professional Development
          </h3>

          <div className="max-w-2xl">
            {professionalDevelopment.map((item) => (
              <DevelopmentCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const EducationCard = ({ item }) => {
  return (
    <article className="portfolio-card h-full p-5 transition duration-200 hover:border-slate-500 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          {item.logo && (
            <div className="flex-shrink-0">
              <img
                src={item.logo}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-16 w-16 rounded-xl bg-white object-contain p-2"
              />
            </div>
          )}

          <div>
            <h3 className="text-white text-xl font-bold">{item.school}</h3>

            <p className="text-slate-300 text-sm">{item.location}</p>
          </div>
        </div>

        <p className="whitespace-nowrap text-sm font-semibold text-slate-300">
          {item.dates}
        </p>
      </div>

      <div className="mt-5 border-t border-white/10 pt-4">
        <p className="text-slate-100 font-bold">{item.degree}</p>

        {item.highlight && (
          <p className="text-red-400 text-sm font-semibold mt-2">
            {item.highlight}
          </p>
        )}
      </div>

      {item.coursework?.length > 0 && (
        <div className="mt-5">
          <p className="text-white font-bold text-sm mb-3">
            Relevant Coursework
          </p>

          <div className="flex flex-wrap gap-2">
            {item.coursework.map((course) => (
              <span
                key={course}
                className="rounded-full border border-white/10 bg-slate-800/90 px-3 py-1.5 text-xs text-slate-200"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

const DevelopmentCard = ({ item }) => {
  return (
    <div className="portfolio-card flex flex-col gap-4 p-5 transition duration-200 hover:border-slate-500 sm:flex-row sm:items-center">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-2xl text-emerald-300">
        <HiOutlineBadgeCheck />
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h4 className="text-lg font-bold text-white">{item.title}</h4>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-950/40 px-2.5 py-1 text-xs font-semibold text-emerald-300">
            {item.status}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default Education;
