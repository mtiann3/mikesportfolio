import React from "react";
import {
  HiOutlineBriefcase,
  HiOutlineCalculator,
  HiOutlineChatAlt2,
  HiOutlineDesktopComputer,
} from "react-icons/hi";
import SectionHeader from "./SectionHeader";

const skillGroups = [
  {
    title: "Accounting & Business",
    icon: HiOutlineCalculator,
    skills: [
      "Accounting fundamentals",
      "Transaction entries",
      "Bank reconciliations",
      "Microsoft Excel",
      "Business analysis",
      "Business law coursework",
    ],
  },
  {
    title: "Communication & Service",
    icon: HiOutlineChatAlt2,
    skills: [
      "Professional communication",
      "Account research",
      "Prospect research",
      "Customer service",
      "Team collaboration",
    ],
  },
  {
    title: "Technical & Analytical",
    icon: HiOutlineDesktopComputer,
    skills: [
      "Microsoft Word",
      "Microsoft PowerPoint",
      "Python",
      "JavaScript",
      "React",
    ],
  },
  {
    title: "Tools & Workflows",
    icon: HiOutlineBriefcase,
    skills: [
      "Salesforce",
      "Google Workspace",
      "Slack",
      "Data organization",
      "Research workflows",
      "Information systems",
    ],
  },
];

const Skills = () => {
  return (
    <div className="section-shell section-tint text-slate-100">
      <div className="section-container">
        <SectionHeader
          title="Skills"
          description="Tools and skills I have used in class, at work, and on projects."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article
                key={group.title}
                className="portfolio-card p-5 transition duration-200 hover:border-slate-500 sm:p-6"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-xl text-red-400">
                    <Icon />
                  </span>
                  <h3 className="text-lg font-bold text-white">{group.title}</h3>
                </div>

                <ul className="mt-5 grid grid-cols-1 gap-x-5 gap-y-2.5 text-sm text-slate-200 sm:text-base lg:grid-cols-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2.5">
                      <span className="mt-[.65em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" aria-hidden="true" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
