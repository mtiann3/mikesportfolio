import React from "react";

import AppImg from "../assets/app1.png";
import Ren from "../assets/medium.png";
import AthleteIQ from "../assets/athleteiq.png";
import dinorun from "../assets/dinorun.png";

const planningProjects = [
  {
    title: "Mock Family Financial Plan",
    tag: "Financial Planning",
    status: "In Progress",
    desc:
      "A simulated financial planning case study for a young family, covering cash flow, emergency fund planning, retirement savings, insurance questions, education savings, and next steps.",
    tools: "Excel • Financial Planning • Cash Flow Analysis",
    deliverables: [
      "Client profile and goals",
      "Monthly cash-flow summary",
      "Emergency fund target",
      "Retirement savings assumptions",
      "Planning recommendations",
    ],
  },
  {
    title: "Roth vs. Traditional Contribution Analysis",
    tag: "Tax-Aware Planning",
    status: "Planned",
    desc:
      "An Excel-based model comparing Roth and Traditional retirement contribution scenarios using different income, tax, and time-horizon assumptions.",
    tools: "Excel • Tax-Aware Planning • Retirement Analysis",
    deliverables: [
      "Income and tax assumptions",
      "Contribution comparison",
      "Long-term account value scenarios",
      "Summary memo",
    ],
  },
  {
    title: "Small-Business Owner Planning Dashboard",
    tag: "Accounting + Wealth Planning",
    status: "Planned",
    desc:
      "A simulated dashboard for a small business owner showing revenue, expenses, profit margin, cash flow, estimated tax considerations, and owner planning questions.",
    tools: "Excel • Accounting • Business Advisory",
    deliverables: [
      "Revenue and expense dashboard",
      "Profit margin summary",
      "Cash-flow snapshot",
      "Owner planning questions",
    ],
  },
];

const technicalProjects = [
  {
    img: AthleteIQ,
    title: "Fitness Tracking iOS App (AthleteIQ)",
    desc:
      "iOS application for tracking workouts, nutrition, and fitness progress. Demonstrates my interest in building tools that organize personal data and help users make better decisions.",
    tech: "Swift • SwiftUI • iOS Development",
    link: "https://github.com/mtiann3/athleteiq",
  },
  {
    img: AppImg,
    title: "Android Nutrition Tracking App",
    desc:
      "Mobile application for tracking diet and nutrition data with a simple user interface. Built to practice mobile development, data organization, and user-focused design.",
    tech: "Java • Android Studio • Mobile Development",
    link: "https://github.com/mikeiannotti55/android-nutrition-tracker-app/tree/main",
  },
  {
    img: dinorun,
    title: "Computer Vision Gesture Controller",
    desc:
      "Computer vision application using OpenCV to control the Chrome Dino game with hand tracking and gesture detection. Focused on real-time video processing and human-computer interaction.",
    tech: "Python • OpenCV • Computer Vision",
    link: "https://github.com/mtiann3/opencv-google-dino-run",
  },
  {
    img: Ren,
    title: "AI Chatbot (REN)",
    desc:
      "Conversational AI chatbot designed to simulate emotionally aware responses. Contributed to a project involving AI systems, natural language processing, and user interaction.",
    tech: "Python • NLP • AI Systems",
    link: "https://github.com/aryan-cs/ren",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full min-h-screen text-gray-300 bg-none py-16 scroll-mt-24"
    >
      <div className="max-w-[1000px] mx-auto px-4">

        {/* HEADER */}
        <div className="mb-12">
          <p className="text-4xl font-bold inline border-b-4 border-red-600">
            Projects 
          </p>

          <p className="py-4 font-bold text-gray-300 max-w-[850px] leading-relaxed">
            Financial planning, accounting, and technical projects showing my
            interest in wealth management, tax-aware planning, business analysis,
            and using technology to make financial decisions easier to understand.
          </p>
        </div>

        {/* PLANNING PROJECTS */}
        <div className="mb-16">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white">
              Financial Planning & Advisory Projects
            </h2>
            <p className="text-sm text-gray-400 mt-2 max-w-[850px] leading-relaxed">
              These projects are being built with simulated data to support my
              career interest in wealth management, financial planning,
              accounting, and tax-aware advisory work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planningProjects.map((project) => (
              <PlanningProjectCard key={project.title} project={project} />
            ))}
          </div>

          <p className="text-xs font-bold text-gray-400 mt-5 leading-relaxed">
            Projects use simulated data for educational purposes only and are not
            financial, tax, investment, or legal advice.
          </p>
        </div>

        {/* TECHNICAL PROJECTS */}
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white">
              Technical Background
            </h2>
            <p className="text-sm font-bold text-gray-400 mt-2 max-w-[850px] leading-relaxed">
              Earlier software projects that demonstrate my experience with
              programming, mobile development, data organization, and problem
              solving. I view these skills as a supporting advantage for finance,
              planning, and advisory work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {technicalProjects.map((project) => (
              <TechnicalProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        {/* CURRENT FOCUS */}
        <div
          className="mt-16 bg-opacity-75 font-bold bg-[#0d213e] p-6 rounded-md shadow-lg shadow-[#040c16]"
        >
          <h2 className="text-white text-lg font-bold mb-3">
            Current Focus
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            I am currently pursuing Accounting and Finance at Elmhurst University
            while exploring career paths in wealth management, financial
            planning, and tax-aware advisory work. My goal is to combine
            accounting, finance, client service, and technology to better
            understand how individuals, families, and business owners make
            financial decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

/* FINANCIAL PLANNING PROJECT CARD */
const PlanningProjectCard = ({ project }) => {
  return (
    <div
      className="
        bg-[#0d213e]
        bg-opacity-75
        shadow-md
        shadow-[#040c16]
        rounded-md
        p-6
        flex
        flex-col
        hover:scale-[1.02]
        duration-300
      "
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <p className="text-xs text-red-400 font-bold uppercase tracking-wide">
          {project.tag}
        </p>

        <span className="text-xs text-gray-300 border border-gray-600 rounded-full px-3 py-1">
          {project.status}
        </span>
      </div>

      <h3 className="text-white text-lg font-bold">{project.title}</h3>

      <p className="text-sm text-gray-400 mt-3 leading-relaxed">
        {project.desc}
      </p>

      <p className="text-xs text-gray-500 mt-4">{project.tools}</p>

      <div className="mt-5">
        <p className="text-sm text-white font-bold mb-2">
          Planned Deliverables
        </p>

        <ul className="text-sm text-gray-400 space-y-1 list-disc pl-5">
          {project.deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* TECHNICAL PROJECT CARD */
const TechnicalProjectCard = ({ project }) => {
  return (
    <div
      className="
        bg-[#0d213e]
        bg-opacity-75
        font-bold
        shadow-md
        shadow-[#040c16]
        rounded-md
        p-5
        flex
        flex-col
        items-center
        text-center
        hover:scale-[1.03]
        duration-300
      "
    >
      <img
        src={project.img}
        alt={project.title}
        className="h-28 object-contain mb-4"
      />

      <h3 className="text-white font-bold">{project.title}</h3>

      <p className="text-sm text-gray-400 mt-2 leading-relaxed">
        {project.desc}
      </p>

      <p className="text-xs text-gray-500 mt-3">{project.tech}</p>

      <a href={project.link} target="_blank" rel="noreferrer">
        <button className="mt-4 px-4 py-2 bg-white text-black font-bold rounded-md hover:bg-gray-200 duration-300">
          View Code
        </button>
      </a>
    </div>
  );
};

export default Projects;

