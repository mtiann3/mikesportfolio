import React from "react";

const focusAreas = [
  {
    title: "Wealth Management & Financial Planning",
    description:
      "Interested in planning-first wealth management, retirement planning, investment education, and helping families make confident long-term financial decisions.",
  },
  {
    title: "Tax-Aware Planning",
    description:
      "Building accounting and tax knowledge to better understand cash flow, tax strategy, business owners, and how financial decisions affect real families.",
  },
  {
    title: "Client Service & Technology",
    description:
      "Developing communication, research, organization, Excel, and technical skills to make financial information easier to understand and act on.",
  },
];

const Focus = () => {
  return (
    <div id="focus" name="focus" className="w-full min-h-screen text-gray-300 bg-none py-16 scroll-mt-24">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="mb-12">
          <p className="text-4xl font-bold inline border-b-4 border-red-600">
            Focus
          </p>
          <p className="py-4 font-medium text-gray-300">
            My career direction is wealth management and financial planning,
            supported by accounting, tax, client service, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="bg-[#0d213e] bg-opacity-75 shadow-lg shadow-[#040c16] rounded-md p-6 hover:scale-[1.02] duration-300"
            >
              <h3 className="text-white text-lg font-bold mb-3">{area.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
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
