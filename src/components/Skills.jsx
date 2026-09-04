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

          <p className="py-4 font-medium text-gray-300">
            Skills and working knowledge developed through coursework,
            internships, projects, and customer-facing roles
          </p>
        </div>


        {/* SKILLS */}
        <div className="space-y-10">

          <Section title="Accounting & Business Foundation">
            <Skill title="Accounting Fundamentals" />
            <Skill title="Transaction Entries" />
            <Skill title="Bank Reconciliations" />
            <Skill title="Microsoft Excel" />
            <Skill title="Business Analysis" />
            <Skill title="Business Law Coursework" />
          </Section>


          <Section title="Client Service & Communication">
            <Skill title="Professional Communication" />
            <Skill title="Account Research" />
            <Skill title="Prospect Research" />
            <Skill title="Business Communication" />
            <Skill title="Customer Service" />
            <Skill title="Team Collaboration" />
          </Section>


          <Section title="Technical & Analytical Tools">
            <Skill title="Microsoft Word" />
            <Skill title="Microsoft PowerPoint" />
            <Skill title="Python" />
            <Skill title="JavaScript" />
            <Skill title="React" />
          </Section>


          <Section title="Professional Tools & Workflows">
            <Skill title="Salesforce" />
            <Skill title="Google Workspace" />
            <Skill title="Slack" />
            <Skill title="Data Organization" />
            <Skill title="Research Workflows" />
            <Skill title="Information Systems" />
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


/* SKILL CARD */
const Skill = ({ title }) => {
  return (
    <div
      className="
        bg-slate-900/90
        border
        border-white/10
        backdrop-blur-sm
        shadow-lg
        shadow-black/40
        rounded-md
        p-4
        flex
        items-center
        justify-center
        text-center
        min-h-[80px]

        transition
        duration-300

        hover:scale-105
        hover:-translate-y-1
     

        cursor-pointer
      "
    >
      <p className="text-sm sm:text-base text-slate-200 font-medium">
        {title}
      </p>
    </div>
  );
};
