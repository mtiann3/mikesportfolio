// src/components/Work.jsx

import React from "react";
import Cyera from "../assets/cyera_logo.jpg";
import lululemon from "../assets/lululemon_logo.jpg";
import LifeTime from "../assets/lifetimeinc_logo.jpg";

const experiences = [
  {
    company: "WGTaxLaw",
    role: "Part-Time Intern",
    location: "Accounting, tax, and business support",
    dates: "August 2026 – Present",
    tag: "Hands-on accounting experience and professional learning",
    bullets: [
      "Enter business transactions and support accurate, organized financial records.",
      "Perform bank reconciliations while learning how day-to-day activity flows through the accounting process.",
      "Build a foundation to support tax return work as responsibilities expand.",
      "May also gain exposure to legal work as the internship develops.",
    ],
  },
  {
    company: "Cyera",
    role: "Sales Development Representative Intern",
    logo: Cyera,
    location: "Chicago, IL",
    dates: "June 2026 – August 2026",
    tag: "Business development, account research, and professional communication",
    bullets: [
      "Supported BDR team efforts by qualifying and prospecting leads for active pipeline development.",
      "Built and enriched targeted prospect lists used by SDRs in outbound campaigns.",
      "Researched accounts and buyer personas to sharpen outbound targeting and messaging.",
      "Developed business communication, account research, organization, and professional follow-up skills.",
    ],
  },
  {
    company: "lululemon",
    role: "Educator",
    logo: lululemon,
    location: "Schaumburg, IL",
    dates: "April 2024 – November 2025",
    tag: "Guest education, premium retail service, and relationship-building",
    bullets: [
      "Educated guests on product features, fit, and lifestyle use cases to support informed purchasing decisions.",
      "Built guest relationships through attentive service, product knowledge, and personalized recommendations.",
      "Supported a premium retail experience by maintaining professionalism, teamwork, and strong communication in a fast-paced environment.",
      "Strengthened relationship-building, listening, and service skills in a high-expectation environment.",
    ],
  },
  {
    company: "Life Time",
    role: "Life Cafe Team Member",
    logo: LifeTime,
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

          <p className="py-4 font-semibold text-slate-100 max-w-[850px] leading-relaxed">
            Experience across accounting, business development, retail, and
            service—each offering a different view of how organizations serve
            people and operate well.
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
        <div className="mt-10 bg-slate-950/95 border border-white/10 backdrop-blur-sm shadow-lg shadow-black/40 rounded-md p-6">
          <h3 className="text-white text-lg font-bold mb-3">
            What I’m Taking Forward
          </h3>

          <p className="text-slate-100 text-sm leading-relaxed">
            These roles have helped me connect classroom concepts with real
            work: accurate financial records, thoughtful research, clear
            communication, consistent service, and dependable teamwork. I want
            to keep building that range while I explore where I can create the
            most value over time.
          </p>
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ experience }) => {
  return (
    <div className="bg-slate-950/95 border border-white/10 backdrop-blur-sm shadow-lg shadow-black/40 rounded-xl p-6 hover:scale-[1.01] transition duration-300">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
        {/* Company Info */}
        <div className="flex items-start gap-4">
          {experience.logo && (
            <div className="flex-shrink-0">
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-14 h-14 rounded-lg object-contain bg-white p-1"
              />
            </div>
          )}

          <div>
            <h3 className="text-white text-xl font-bold">
              {experience.company}
            </h3>

            <p className="text-slate-200 font-semibold">{experience.role}</p>

            <p className="text-slate-200 text-sm">{experience.location}</p>
          </div>
        </div>

        <p className="text-slate-100 text-sm font-semibold whitespace-nowrap">
          {experience.dates}
        </p>
      </div>

      {experience.tag && (
        <p className="text-red-400 text-sm font-semibold mt-4">
          {experience.tag}
        </p>
      )}

      <ul className="mt-4 pl-5 space-y-2 list-disc text-sm text-slate-100">
        {experience.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
