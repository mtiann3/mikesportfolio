import React from "react";
import Cyera from "../assets/cyera_logo.jpg";
import lululemon from "../assets/lululemon_logo.jpg";
import LifeTime from "../assets/lifetimeinc_logo.jpg";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    company: "WGTaxLaw",
    role: "Accounting & Tax Intern (Part time)",
    dates: "August 2026 – Present",
    tag: "Accounting, tax, and small business experience",
    initials: "WG",
    current: true,
    bullets: [
      "Use QuickBooks Online and QuickBooks Desktop in my accounting work.",
      "Enter transactions and help keep financial records organized.",
      "Work on bank reconciliations and learn how activity moves through the accounting process.",
      "Expect to begin helping with tax returns as the internship continues.",
      "Learn how a small accounting and tax firm runs and supports its clients.",
    ],
  },
  {
    company: "Cyera",
    role: "Sales Development Representative Intern",
    logo: Cyera,
    location: "Chicago, IL",
    dates: "June 2026 – August 2026",
    tag: "Sales and customer acquisition",
    bullets: [
      "Prospected and qualified potential leads for the business development team.",
      "Built and updated prospect lists for outbound campaigns.",
      "Researched companies and buyer roles to help improve outreach.",
      "Learned how prospecting, account research, and lead qualification support customer acquisition.",
    ],
  },
  {
    company: "Life Time",
    role: "LifeCafe Team Member",
    logo: LifeTime,
    location: "Schaumburg, IL",
    dates: "April 2024 – Present",
    tag: "Customer service and cafe operations",
    current: true,
    bullets: [
      "Serve Life Time members and prepare food and drink orders accurately.",
      "Keep the cafe clean, stocked, and organized during busy shifts.",
      "Work with teammates to keep orders moving and provide consistent service.",
    ],
  },
  {
    company: "lululemon",
    role: "Educator",
    logo: lululemon,
    location: "Schaumburg, IL",
    dates: "April 2024 – November 2025",
    tag: "Customer service and retail sales",
    bullets: [
      "Helped guests choose products based on fit, features, and how they planned to use them.",
      "Built product knowledge and learned how to make useful recommendations without being pushy.",
      "Worked with the store team to help customers during busy shifts.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="section-shell bg-transparent text-slate-100">
      <div className="section-container">
        <SectionHeader
          title="Experience"
          description="From sales and customer acquisition to daily operations and accounting, each role has helped me understand a different part of how businesses serve customers and operate."
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.company}-${experience.role}`}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ experience }) => {
  return (
    <article className="portfolio-card h-full p-5 transition duration-200 hover:border-slate-500 sm:p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-4">
          <div className="flex-shrink-0">
            {experience.logo ? (
              <img
                src={experience.logo}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-14 w-14 rounded-xl bg-white object-contain p-1.5"
              />
            ) : (
              <div className="brand-type flex h-14 w-14 items-center justify-center rounded-xl border border-red-400/30 bg-red-900/30 font-bold text-red-300">
                {experience.initials}
              </div>
            )}
          </div>

          <div className="min-w-0">
            <h3 className="text-xl font-bold text-white">
              {experience.company}
            </h3>
            <p className="font-semibold text-slate-200">{experience.role}</p>
            {experience.location && (
              <p className="text-slate-300 text-sm">{experience.location}</p>
            )}
          </div>
        </div>

        {experience.current && (
          <span className="rounded-full border border-emerald-400/30 bg-emerald-950/40 px-2.5 py-1 text-xs font-semibold text-emerald-300">
            Current
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-y border-white/10 py-3 text-sm">
        <p className="font-semibold text-red-300">{experience.tag}</p>
        <p className="font-medium text-slate-300">{experience.dates}</p>
      </div>

      <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-slate-200 sm:text-base">
        {experience.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-[.65em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Experience;
