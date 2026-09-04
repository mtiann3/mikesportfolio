import React from "react";

const focusAreas = [
  {
    title: "Business & Financial Fundamentals",
    description:
      "Building practical accounting and finance skills while learning how real businesses make decisions, manage resources, and create value.",
  },
  {
    title: "Ownership & Entrepreneurship",
    description:
      "Interested in what it takes to evaluate, launch, and responsibly grow a business—from the numbers to the operating details.",
  },
  {
    title: "People, Leadership & Service",
    description:
      "Drawn to work built on trust, clear communication, strong teams, and a positive impact on clients, coworkers, and the community.",
  },
];

const Focus = () => {
  return (
    <div
      id="focus"
      name="focus"
      className="w-full min-h-screen text-slate-100 bg-none py-16 scroll-mt-24"
    >
      <div className="max-w-[1000px] mx-auto px-4">

        {/* Section Header */}
        <div className="mb-12">
          <p className="text-4xl font-bold inline border-b-4 border-red-600">
            Interests
          </p>

          <p className="py-4 font-medium text-slate-100 max-w-3xl">
            I am exploring several paths rather than forcing an early answer.
            These are the themes connecting what I study, the work I pursue,
            and the projects I choose.
          </p>
        </div>


        {/* Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="
                bg-slate-950/95
                border
                border-white/10
                backdrop-blur-sm
                shadow-lg
                shadow-black/40
                rounded-md
                p-6
                hover:scale-[1.02]
                transition
                duration-300
              "
            >

              <h3 className="text-white text-lg font-bold mb-3">
                {area.title}
              </h3>

              <p className="text-slate-200 text-sm leading-relaxed">
                {area.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Focus;
