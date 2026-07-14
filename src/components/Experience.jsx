// src/components/Work.jsx

import React from "react";

const experiences = [
  {
    company: "Cyera",
    role: "Sales Development Representative Intern",
    location: "Chicago, IL",
    dates: "June 2026 – August 2026",
    tag: "Business development, account research, and professional communication",
    bullets: [
      "Supported BDR team efforts by qualifying and prospecting leads for active pipeline development.",
      "Built and enriched targeted prospect lists used by SDRs in outbound campaigns.",
      "Researched accounts and buyer personas to sharpen outbound targeting and messaging.",
      "Developed business communication, account research, organization, and follow-up skills that translate well to client-facing advisory roles.",
    ],
  },
  {
    company: "lululemon",
    role: "Educator",
    location: "Schaumburg, IL",
    dates: "April 2024 – November 2025",
    tag: "Guest education, premium retail service, and relationship-building",
    bullets: [
      "Educated guests on product features, fit, and lifestyle use cases to support informed purchasing decisions.",
      "Built guest relationships through attentive service, product knowledge, and personalized recommendations.",
      "Supported a premium retail experience by maintaining professionalism, teamwork, and strong communication in a fast-paced environment.",
      "Developed client-service skills relevant to wealth management, financial planning, and advisory work.",
    ],
  },
  {
    company: "Life Time Fitness",
    role: "Life Cafe Team Member",
    location: "Schaumburg, IL",
    dates: "April 2024 – Present",
    tag: "Member service, operations, and teamwork",
    bullets: [
      "Provided member-facing customer service in a fast-paced environment while maintaining accuracy and professionalism.",
      "Prepared orders according to recipes while keeping a clean and organized workspace.",
      "Collaborated with staff to support a positive member experience and consistent daily operations.",
      "Built reliability, communication, and time-management skills while balancing work and school.",
    ],
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      name="experience"
      className="w-full min-h-screen text-slate-100 bg-none py-16 scroll-mt-24"
    >
      <div className="max-w-[1000px] mx-auto px-4">
        {/* HEADER */}
        <div className="mb-12">
          <p className="text-4xl font-bold inline border-b-4 border-red-600">
            Experience
          </p>

          <p className="py-4 font-semibold text-slate-300 max-w-[850px] leading-relaxed">
            Client-facing, business development, and service experience that
            supports my interest in wealth management, financial planning, and
            advisory work.
          </p>
        </div>

        {/* EXPERIENCE LIST */}
        <div className="space-y-6">
          {experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.company}-${experience.role}`}
              experience={experience}
            />
          ))}
        </div>

        {/* CAREER CONNECTION */}
        <div className="mt-10 bg-slate-900/90 border border-white/10 backdrop-blur-sm shadow-lg shadow-black/40 rounded-md p-6">
          <h3 className="text-white text-lg font-bold mb-3">
            How This Connects to My Career Direction
          </h3>

          <p className="text-slate-300 text-sm leading-relaxed">
            These experiences have helped me build communication, research,
            organization, customer service, and follow-up skills. My goal is to
            combine those client-facing skills with my Accounting and Finance
            education as I explore wealth management, financial planning, and
            tax-aware advisory work.
          </p>
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ experience }) => {
  return (
    <div className="bg-slate-900/90 border border-white/10 backdrop-blur-sm shadow-lg shadow-black/40 rounded-md p-6 hover:scale-[1.01] duration-300">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
        <div>
          <h3 className="text-white text-xl font-bold">{experience.company}</h3>
          <p className="text-slate-200 font-semibold">{experience.role}</p>
          <p className="text-slate-400 text-sm">{experience.location}</p>
        </div>

        <p className="text-slate-300 text-sm font-semibold">
          {experience.dates}
        </p>
      </div>

      <p className="text-red-400 text-sm font-semibold mt-4">
        {experience.tag}
      </p>

      <ul className="text-sm text-slate-300 space-y-2 list-disc pl-5 mt-4">
        {experience.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;

