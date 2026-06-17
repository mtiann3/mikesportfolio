import React from "react";
import WorkImg from "../assets/work.png";
import ExperienceImg from "../assets/experience.png";
import ExtracurricularsImg from "../assets/extracurriculars.png";
import AcademicsImg from "../assets/academics.png";

const Work = () => {
  return (
    <div
      id="work"
      name="work"
      className="w-full min-h-screen text-gray-300 bg-none py-16 scroll-mt-24"
    >
      <div className="max-w-[1000px] mx-auto px-4">

        {/* HEADER */}
        <div className="mb-12">
          <p className="text-4xl font-bold inline border-b-4 border-red-600">
            Experience
          </p>

          <p className="py-4 text-gray-400">
            Academic background, professional experience, and extracurricular involvement.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* EXPERIENCE */}
          <div
            className="bg-[#0d213e] shadow-lg shadow-[#040c16] rounded-md p-6 hover:scale-[1.02] duration-300"
          >
            <h3 className="text-white text-lg font-bold mb-2">
              Professional Experience
            </h3>

            <p className="text-gray-400 text-sm mb-3">
              SDR Intern at Cyera + Lifecafe Team Member (Part-Time)
            </p>

            <ul className="text-sm text-gray-300 space-y-2 list-disc pl-5">
              <li>
                SDR Intern at Cyera, developing skills in sales development, SaaS workflows, and business communication.
              </li>
              <li>
                Part-time Lifecafe Team Member (since May 2024), gaining experience in customer service, teamwork, and operations.
              </li>
              <li>
                Exposure to professional communication tools including Salesforce, LinkedIn Sales Navigator, Slack, and Google Workspace.
              </li>
            </ul>
          </div>

          {/* ACADEMICS */}
          <div
            className="bg-[#0d213e] shadow-lg shadow-[#040c16] rounded-md p-6 hover:scale-[1.02] duration-300"
          >
            <h3 className="text-white text-lg font-bold mb-2">
              Academics
            </h3>

            <p className="text-gray-400 text-sm mb-3">
              Elmhurst University — Accounting Major, Computer Science Minor
            </p>

            <ul className="text-sm text-gray-300 space-y-2 list-disc pl-5">
              <li>Current GPA: 3.4</li>
              <li>Accounting coursework: Financial Accounting, Business Law</li>
              <li>Economics: Microeconomics & Macroeconomics</li>
              <li>Building foundation in accounting, data analysis, and business systems</li>
            </ul>
          </div>

          {/* EXTRACURRICULARS */}
          <div
            className="bg-[#0d213e] shadow-lg shadow-[#040c16] rounded-md p-6 hover:scale-[1.02] duration-300"
          >
            <h3 className="text-white text-lg font-bold mb-2">
              Extracurriculars
            </h3>

            <p className="text-gray-400 text-sm mb-3">
              Leadership & Academic Involvement
            </p>

            <ul className="text-sm text-gray-300 space-y-2 list-disc pl-5">
              <li>Finance Club Member</li>
              <li>Technology Club Member</li>
              <li>Comp Sci Kids Mentor</li>
              <li>High school leadership and academic clubs (foundation of teamwork & communication)</li>
            </ul>
          </div>

          {/* EARLY WORK / GENERAL EXPERIENCE */}
          <div
            className="bg-[#0d213e] shadow-lg shadow-[#040c16] rounded-md p-6 hover:scale-[1.02] duration-300"
          >
            <h3 className="text-white text-lg font-bold mb-2">
              Early Work Experience
            </h3>

            <p className="text-gray-400 text-sm mb-3">
              Customer Service & Operations
            </p>

            <ul className="text-sm text-gray-300 space-y-2 list-disc pl-5">
              <li>
                Experience in retail and food service environments focused on customer interaction and teamwork.
              </li>
              <li>
                Developed communication, responsibility, and time management skills in fast-paced settings.
              </li>
              <li>
                Reinforced professionalism and work ethic applicable to business and accounting roles.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;