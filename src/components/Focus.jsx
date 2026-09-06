import React from "react";
import {
  HiOutlineCalculator,
  HiOutlineOfficeBuilding,
  HiOutlineUserGroup,
} from "react-icons/hi";
import SectionHeader from "./SectionHeader";

const focusAreas = [
  {
    title: "Accounting & Finance",
    icon: HiOutlineCalculator,
    description:
      "I want a strong understanding of financial statements, cash flow, taxes, and the day-to-day decisions businesses make.",
  },
  {
    title: "Ownership & Entrepreneurship",
    icon: HiOutlineOfficeBuilding,
    description:
      "I am interested in how an idea becomes a real business, including the financial risk, daily operations, and responsibility that come with ownership.",
  },
  {
    title: "Leadership & Service",
    icon: HiOutlineUserGroup,
    description:
      "I enjoy working with people and want to become a better communicator, teammate, and leader.",
  },
];

const Focus = () => {
  return (
    <div className="section-shell section-tint text-slate-200">
      <div className="section-container">
        <SectionHeader
          title="Interests"
          description="The areas I am building toward through school, work, and personal projects."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="portfolio-card border-t-2 border-t-red-500 p-5 transition duration-200 hover:-translate-y-1 hover:border-slate-500 lg:p-6"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-2xl text-red-400">
                  <Icon />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">
                  {area.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-300">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Focus;
