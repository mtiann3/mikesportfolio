import React from "react";
import Harper from "../assets/harpercollege_logo.jpg";
import Elmhurst from "../assets/elmhurstuniversity_logo.jpg";

const educationItems = [
  {
    school: "Elmhurst University",
    logo: Elmhurst,
    location: "Elmhurst, IL",
    degree: "Bachelor of Science in Accounting; Second Major in Finance",
    dates: "Expected May 2028",
    highlight:
      "Junior studying finance and accounting while exploring business, advisory, and ownership paths.",
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
    date: "Completed",
    description:
      "Passed the FINRA SIE exam, demonstrating foundational knowledge of securities products, risks, market structure, customer accounts, and industry regulation.",
  },
];

const Education = () => {
  return (
    <div
      id="education"
      name="education"
      className="w-full min-h-screen text-slate-100 bg-none py-16 scroll-mt-24"
    >
      <div className="max-w-[1000px] mx-auto px-4">
        {/* HEADER */}
        <div className="mb-12">
          <p className="text-4xl font-bold inline border-b-4 border-red-600">
            Education
          </p>

          <p className="py-4 font-semibold text-slate-300 max-w-[850px] leading-relaxed">
            Academic work across accounting, finance, business, economics, and
            information systems, supported by practical experience outside the
            classroom.
          </p>
        </div>

        {/* EDUCATION CARDS */}
        <div className="space-y-6">
          {educationItems.map((item) => (
            <EducationCard key={item.school} item={item} />
          ))}
        </div>

        {/* PROFESSIONAL DEVELOPMENT */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Professional Development
          </h2>

          <p className="text-sm text-slate-300 mb-6 max-w-[850px] leading-relaxed">
            A completed industry exam that complements my finance coursework
            without defining a single long-term career path.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    <div className="bg-slate-900/90 border border-white/10 backdrop-blur-sm shadow-lg shadow-black/40 rounded-xl p-6 hover:scale-[1.01] transition duration-300">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
        {/* School Info + Logo */}
        <div className="flex items-start gap-4">
          {item.logo && (
            <div className="flex-shrink-0">
              <img
                src={item.logo}
                alt={`${item.school} logo`}
                className="w-16 h-16 rounded-xl object-contain bg-white p-2"
              />
            </div>
          )}

          <div>
            <h3 className="text-white text-xl font-bold">{item.school}</h3>

            <p className="text-slate-400 text-sm">{item.location}</p>
          </div>
        </div>

        {/* Dates */}
        <p className="text-slate-300 text-sm font-semibold whitespace-nowrap">
          {item.dates}
        </p>
      </div>

      {/* Degree Information */}
      <div className="mt-4">
        <p className="text-slate-100 font-bold">{item.degree}</p>

        {item.highlight && (
          <p className="text-red-400 text-sm font-semibold mt-2">
            {item.highlight}
          </p>
        )}
      </div>

      {/* Coursework */}
      {item.coursework?.length > 0 && (
        <div className="mt-5">
          <p className="text-white font-bold text-sm mb-3">
            Relevant Coursework
          </p>

          <div className="flex flex-wrap gap-2">
            {item.coursework.map((course) => (
              <span
                key={course}
                className="text-xs text-slate-200 bg-slate-800/90 border border-white/10 rounded-full px-3 py-2"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const DevelopmentCard = ({ item }) => {
  return (
    <div className="bg-slate-900/90 border border-white/10 backdrop-blur-sm shadow-lg shadow-black/40 rounded-md p-5 hover:scale-[1.02] duration-300">
      <div className="flex items-center justify-between gap-3 mb-3">
        <p className="text-xs text-red-400 font-bold uppercase tracking-wide">
          {item.status}
        </p>
      </div>

      <h3 className="text-white text-lg font-bold">{item.title}</h3>

      <p className="text-slate-400 text-sm mt-1">{item.date}</p>

      <p className="text-slate-300 text-sm leading-relaxed mt-4">
        {item.description}
      </p>
    </div>
  );
};

export default Education;
