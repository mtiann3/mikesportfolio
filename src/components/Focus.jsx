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
      "Building an understanding of financial statements, accounting, tax, cash flow, margins, and budgeting to support business decisions.",
  },
  {
    title: "Business Operations",
    icon: HiOutlineUserGroup,
    description:
      "Learning how a business runs each day, from working with customers and employees to managing vendors, pricing, and finances.",
  },
  {
    title: "Ownership & Entrepreneurship",
    icon: HiOutlineOfficeBuilding,
    description:
      "Exploring durable, locally rooted businesses and the skills and responsibilities involved in eventually owning and operating a small family business.",
  },
];

const Focus = () => {
  return (
    <div className="section-shell section-tint text-slate-200">
      <div className="section-container">
        <SectionHeader
          title="Focus Areas"
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
