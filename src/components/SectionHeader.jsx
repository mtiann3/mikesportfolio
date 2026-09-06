import React from "react";

const SectionHeader = ({ title, description }) => {
  return (
    <div className="mb-8 sm:mb-10">
      <div className="flex items-center gap-4">
        <span className="h-1 w-10 rounded-full bg-red-500" aria-hidden="true" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {title}
        </h2>
      </div>

      {description && (
        <p className="mt-4 max-w-[780px] text-base sm:text-lg text-slate-200 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
