import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full min-h-screen bg-none text-gray-300 py-16"
    >
      <div className="max-w-[1000px] mx-auto px-4">
        {/* HEADER */}
        <div className="mb-10">
          <p className="text-4xl font-bold inline border-b-4 border-red-600">
            Skills
          </p>

          <p className="py-4 font-bold text-gray-300">
            Accounting, business, and technical skills developed through
            coursework and work experience
          </p>
        </div>

        {/* GRID */}
        <div className=" space-y-10">
          <Section title="Financial Planning & Business Foundation">
            <Skill title="Accounting Fundamentals" />
            <Skill title="Financial Analysis" />
            <Skill title="Financial Statement Analysis" />
            <Skill title="Business Law Coursework" />
            <Skill title="Economics Coursework" />
            <Skill title="Tax-Aware Planning Interest" />
          </Section>

          <Section title="Client Service & Communication">
            <Skill title="Client Communication" />
            <Skill title="Account Research" />
            <Skill title="Prospect Research" />
            <Skill title="Business Communication" />
            <Skill title="Customer Service" />
            <Skill title="Professional Follow-Up" />
          </Section>

          <Section title="Technical & Analytical Tools">
            <Skill title="Microsoft Excel" />
            <Skill title="Microsoft Word" />
            <Skill title="Microsoft PowerPoint" />
            <Skill title="Python" />
            <Skill title="JavaScript" />
            <Skill title="React" />
          </Section>

          <Section title="Professional Tools">
            <Skill title="Salesforce" />
            <Skill title="Google Workspace" />
            <Skill title="Slack" />
            <Skill title="Data Organization" />
            <Skill title="Research Workflows" />
            <Skill title="AI Tools" />
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Skills;

/* SECTION */
const Section = ({ title, children }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {children}
      </div>
    </div>
  );
};

/* SKILL CARD (ANIMATED) */
const Skill = ({ title }) => {
  return (
    <div
      className="
        bg-[#0d213e]
        shadow-md shadow-[#040c16]
        rounded-md
        p-4
        flex items-center justify-center
        text-center
        min-h-[80px]
        bg-opacity-75
        
        transition-all duration-300 ease-in-out

        hover:scale-105
        hover:-translate-y-1
        hover:shadow-lg
        hover:shadow-red-500/20
        hover:bg-[#112a4a]
        cursor-pointer
      "
    >
      <p className="text-sm sm:text-base text-gray-200">{title}</p>
    </div>
  );
};
