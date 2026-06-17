import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 py-16"
    >
      <div className="max-w-[1000px] mx-auto px-4">

        {/* HEADER */}
        <div className="mb-10">
          <p className="text-4xl font-bold inline border-b-4 border-red-600">
            Skills
          </p>

          <p className="py-4 text-gray-400">
            Accounting, business, and technical skills developed through coursework and work experience
          </p>
        </div>

        {/* GRID */}
        <div className="space-y-10">

          <Section title="Accounting & Finance">
            <Skill title="Financial Accounting" />
            <Skill title="Financial Statement Analysis" />
            <Skill title="CPA Track (Exploring)" />
            <Skill title="Business Communication" />
          </Section>

          <Section title="Business & Sales Experience">
            <Skill title="SDR Intern Experience" />
            <Skill title="Salesforce CRM" />
            <Skill title="Lead Generation & Prospecting" />
            <Skill title="Cold Outreach (Email & LinkedIn)" />
            <Skill title="Client Communication" />
            <Skill title="Pipeline Management" />
          </Section>

          <Section title="Programming & Technical Skills">
            <Skill title="Python" />
            <Skill title="Java" />
            <Skill title="Excel (Intermediate)" />
            <Skill title="GitHub" />
            <Skill title="VS Code" />
          </Section>

          <Section title="Software & Tools Used">
            <Skill title="Salesforce" />
            <Skill title="Slack" />
            <Skill title="Google Workspace" />
            <Skill title="LinkedIn Sales Navigator" />
            <Skill title="AI Tools (Claude)" />
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
      <h2 className="text-xl font-semibold text-white mb-4">
        {title}
      </h2>

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

        transition-all duration-300 ease-in-out

        hover:scale-105
        hover:-translate-y-1
        hover:shadow-lg
        hover:shadow-red-500/20
        hover:bg-[#112a4a]
        cursor-pointer
      "
    >
      <p className="text-sm sm:text-base text-gray-200">
        {title}
      </p>
    </div>
  );
};