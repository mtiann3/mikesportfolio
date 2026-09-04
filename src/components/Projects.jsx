import React from "react";

import AppImg from "../assets/app1.png";
import Ren from "../assets/medium.png";
import AthleteIQ from "../assets/athleteiq.png";
import dinorun from "../assets/dinorun.png";

const appliedProjects = [
  {
    title: "Gemelli Independent Business Feasibility Project",
    tag: "Applied Business Study",
    status: "In Progress",
    desc: "An independent project with my twin brother, Jack, evaluating whether an Italian deli and specialty food concept could become a viable business. It is a structured way to apply finance, accounting, analytics, and information systems to a real idea.",
    tools: "Finance • Accounting • Analytics • Information Systems",
    deliverables: [
      "Local market and competitor research",
      "Startup and operating cost estimates",
      "Revenue, margin, and cash-flow scenarios",
      "Operating requirements and information-system needs",
      "A grounded go / no-go framework",
    ],
  },
];

const technicalProjects = [
  {
    img: AthleteIQ,
    title: "Fitness Tracking iOS App (AthleteIQ)",
    desc: "iOS application for tracking workouts, nutrition, and fitness progress. Demonstrates my interest in building tools that organize personal data and help users make better decisions.",
    tech: "Swift • SwiftUI • iOS Development",
    link: "https://github.com/mtiann3/athleteiq",
  },
  {
    img: AppImg,
    title: "Android Nutrition Tracking App",
    desc: "Mobile application for tracking diet and nutrition data with a simple user interface. Built to practice mobile development, data organization, and user-focused design.",
    tech: "Java • Android Studio • Mobile Development",
    link: "https://github.com/mikeiannotti55/android-nutrition-tracker-app/tree/main",
  },
  {
    img: dinorun,
    title: "Computer Vision Gesture Controller",
    desc: "Computer vision application using OpenCV to control the Chrome Dino game with hand tracking and gesture detection. Focused on real-time video processing and human-computer interaction.",
    tech: "Python • OpenCV • Computer Vision",
    link: "https://github.com/mtiann3/opencv-google-dino-run",
  },
  {
    img: Ren,
    title: "AI Chatbot (REN)",
    desc: "Conversational AI chatbot designed to simulate emotionally aware responses. Contributed to a project involving AI systems, natural language processing, and user interaction.",
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
            Applied business analysis and earlier technical work that show how
            I approach questions, organize information, and turn ideas into
            something concrete.
          </p>
        </div>

        {/* APPLIED BUSINESS PROJECT */}
        <div className="mb-16">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white">
              Applied Business Project
            </h2>
            <p className="text-sm text-gray-400 mt-2 max-w-[850px] leading-relaxed">
              A serious exploration of a business idea—not a claim that the
              company is operating today.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {appliedProjects.map((project) => (
              <PlanningProjectCard key={project.title} project={project} />
            ))}
          </div>

          <p className="text-xs font-bold text-gray-400 mt-5 leading-relaxed">
            Gemelli is an independent feasibility project and is not currently
            an operating company.
          </p>
        </div>

        {/* TECHNICAL PROJECTS */}
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white">
              Technical Background
            </h2>
            <p className="text-sm font-bold text-gray-400 mt-2 max-w-[850px] leading-relaxed">
              Earlier software projects that demonstrate programming, mobile
              development, data organization, and problem solving. Technology
              remains a useful part of how I analyze and build, even though it
              is no longer my academic minor.
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
          className="
    mt-16
    bg-slate-900/90
    border
    border-white/10
    backdrop-blur-sm
    p-6
    rounded-md
    shadow-lg
    shadow-black/40
    transition
    duration-300
  "
        >
          <h2 className="text-white text-lg font-bold mb-3">Current Focus</h2>

          <p className="text-slate-400 text-sm leading-relaxed">
            I am studying finance and accounting at Elmhurst University while
            gaining practical experience and testing ideas through projects.
            I’m open to several paths, especially work that combines business
            judgment, responsibility, people, and the chance to build something
            meaningful.
          </p>
        </div>
      </div>
    </div>
  );
};

/* APPLIED BUSINESS PROJECT CARD */
const PlanningProjectCard = ({ project }) => {
  return (
    <div
      className="
        bg-slate-900/90
        border
        border-white/10
        backdrop-blur-sm
        shadow-lg
        shadow-black/40
        rounded-md
        p-6
        flex
        flex-col
        hover:scale-[1.02]
        transition
        duration-300
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <p className="text-xs text-red-400 font-bold uppercase tracking-wide">
          {project.tag}
        </p>

        <span
          className="
            text-xs
            text-slate-300
            border
            border-white/20
            rounded-full
            px-3
            py-1
            bg-slate-800/50
          "
        >
          {project.status}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-white text-xl font-bold">{project.title}</h3>

      {/* Description */}
      <p className="text-sm text-slate-400 mt-3 leading-relaxed">
        {project.desc}
      </p>

      {/* Tools */}
      <p className="text-sm text-red-400 font-semibold mt-4">{project.tools}</p>

      {/* Deliverables */}
      <div className="mt-5">
        <p className="text-white font-bold text-sm mb-3">
          Areas of Analysis
        </p>

        <ul className="text-sm text-slate-300 space-y-2 list-disc pl-5">
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
        bg-slate-900/90
        border
        border-white/10
        backdrop-blur-sm
        shadow-lg
        shadow-black/40
        rounded-md
        p-6
        flex
        flex-col
        items-center
        text-center
        hover:scale-[1.03]
        transition
        duration-300
      "
    >
      {/* Project Image */}
      <div className="h-32 flex items-center justify-center mb-5">
        <img
          src={project.img}
          alt={project.title}
          className="h-28 object-contain rounded-md"
        />
      </div>

      {/* Project Title */}
      <h3 className="text-white text-xl font-bold">{project.title}</h3>

      {/* Project Description */}
      <p className="text-sm text-slate-400 mt-3 leading-relaxed">
        {project.desc}
      </p>

      {/* Technologies */}
      <p className="text-sm text-red-400 font-semibold mt-4">{project.tech}</p>

      {/* View Code Button */}
      <a href={project.link} target="_blank" rel="noreferrer">
        <button
          className="
      text-white
      border-2
      border-white/20
      px-6
      py-3
      mt-5
      rounded-md
      hover:bg-[#4a4a4a]
      hover:border-[#4a4a4a]
      transition
      duration-300
    "
        >
          View Code
        </button>
      </a>
    </div>
  );
};

export default Projects;
