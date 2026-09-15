import React from "react";

import AppImg from "../assets/android-nutrition.webp";
import Ren from "../assets/medium.png";
import AthleteIQ from "../assets/athleteiq.webp";
import dinorun from "../assets/dinorun.png";
import { HiOutlineExternalLink } from "react-icons/hi";
import SectionHeader from "./SectionHeader";

const appliedProjects = [
  {
    title: "Gemelli Business Feasibility Project",
    tag: "Independent Project",
    status: "Planned",
    desc: "I plan to study whether Gemelli could work as a small Italian specialty foods shop, starting with local demand, startup costs, and day-to-day operations.",
    approach: "The study will apply finance, accounting, analytics, and information systems to evaluate the initial shop and possible growth paths over time.",
    tools: ["Finance", "Accounting", "Analytics", "Information Systems"],
    deliverables: [
      "Local market and competitor research",
      "Startup and operating cost estimates",
      "Revenue, margin, and cash-flow scenarios",
      "Operating requirements and information-system needs",
      "A go / no-go recommendation based on the findings",
    ],
    growthPaths: [
      "Catering",
      "Branded products",
      "Wholesale / distribution",
      "Eventual property ownership",
    ],
  },
];

const technicalProjects = [
  {
    img: AthleteIQ,
    title: "Fitness Tracking iOS App (AthleteIQ)",
    desc: "Built an iOS app for tracking workouts, nutrition, and fitness progress.",
    tech: "Swift • SwiftUI • iOS Development",
    link: "https://github.com/mtiann3/athleteiq",
  },
  {
    img: AppImg,
    title: "Android Nutrition Tracking App",
    desc: "Built an Android app for logging meals and tracking nutrition data.",
    tech: "Java • Android Studio • Mobile Development",
    link: "https://github.com/mikeiannotti55/android-nutrition-tracker-app/tree/main",
  },
  {
    img: dinorun,
    title: "Computer Vision Gesture Controller",
    desc: "Used OpenCV and hand tracking to control the Chrome Dino game with gestures.",
    tech: "Python • OpenCV • Computer Vision",
    link: "https://github.com/mtiann3/opencv-google-dino-run",
  },
  {
    img: Ren,
    title: "AI Chatbot (REN)",
    desc: "Contributed to a conversational chatbot project using Python and natural language processing.",
    tech: "Python • NLP • AI Systems",
    link: "https://github.com/aryan-cs/ren",
  },
];

const Projects = () => {
  return (
    <div className="section-shell bg-transparent text-slate-100">
      <div className="section-container">
        <SectionHeader
          title="Projects"
          description="A planned business feasibility study, along with software projects I built earlier in college."
        />

        {/* APPLIED BUSINESS PROJECT */}
        <div className="mb-12">
          <div className="mb-5">
            <h3 className="text-xl font-semibold text-white">
              Applied Business Project
            </h3>
            <p className="text-base text-slate-300 mt-2 max-w-[850px] leading-relaxed">
              The first step will be researching the idea before deciding
              whether it makes sense to pursue further.
            </p>
          </div>

          <div>
            {appliedProjects.map((project) => (
              <PlanningProjectCard key={project.title} project={project} />
            ))}
          </div>

        </div>

        {/* TECHNICAL PROJECTS */}
        <div>
          <div className="mb-5">
            <h3 className="text-xl font-semibold text-white">
              Technical Background
            </h3>
            <p className="text-base text-slate-300 mt-2 max-w-[850px] leading-relaxed">
              My technical background includes mobile development, Python,
              computer vision, and AI projects. These skills complement my
              finance and accounting education and remain useful in my work.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {technicalProjects.map((project) => (
              <TechnicalProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

/* APPLIED BUSINESS PROJECT CARD */
const PlanningProjectCard = ({ project }) => {
  return (
    <article className="portfolio-card overflow-hidden border-t-2 border-t-red-500">
      <div className="grid lg:grid-cols-[1.05fr_.95fr]">
        <div className="min-w-0 p-5 sm:p-7 lg:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-red-400">
              {project.tag}
            </p>
            <span className="rounded-full border border-slate-600 bg-slate-800/70 px-3 py-1 text-xs text-slate-200">
              {project.status}
            </span>
          </div>
          <h4 className="text-2xl font-bold leading-tight text-white sm:text-3xl">{project.title}</h4>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-200">
            <p>{project.desc}</p>
            <p>{project.approach}</p>
          </div>
          <ul aria-label="Project disciplines" className="mt-5 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <li key={tool} className="rounded-md border border-red-400/20 bg-red-400/5 px-2.5 py-1 text-xs font-semibold text-red-300">
                {tool}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-l-2 border-slate-600 pl-3 text-sm leading-relaxed text-slate-400">
            Proposed feasibility study; not currently an operating company.
          </p>
        </div>

        <div className="border-t border-white/10 bg-slate-900/60 p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
          <h5 className="mb-4 text-sm font-bold uppercase tracking-[.14em] text-white">
            Planned Scope
          </h5>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            {project.deliverables.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-[.65em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 bg-slate-900/40 p-5 sm:p-7 lg:px-8">
        <h5 className="text-sm font-bold uppercase tracking-[.14em] text-white">
          Growth Paths to Evaluate
        </h5>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          If the initial shop proves feasible, I will assess what it could take
          to expand into:
        </p>
        <ul className="mt-4 grid gap-x-6 gap-y-3 text-sm leading-relaxed text-slate-200 sm:grid-cols-2 xl:grid-cols-4">
          {project.growthPaths.map((path) => (
            <li key={path} className="flex items-start gap-3">
              <span className="mt-[.65em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" aria-hidden="true" />
              <span>{path}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

/* TECHNICAL PROJECT CARD */
const TechnicalProjectCard = ({ project }) => {
  return (
    <article className="portfolio-card flex h-full flex-col overflow-hidden transition duration-200 hover:-translate-y-1 hover:border-slate-500">
      <div className="flex h-32 items-center justify-center border-b border-white/10 bg-white/95 p-4">
        <img
          src={project.img}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full max-w-full rounded-md object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h4 className="text-lg font-bold text-white">{project.title}</h4>
        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
          {project.desc}
        </p>
        <p className="mt-4 text-sm font-semibold text-red-300">{project.tech}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          aria-label={`View code for ${project.title} (opens in a new tab)`}
          className="mt-auto inline-flex w-fit items-center gap-2 pt-5 font-semibold text-white transition hover:text-red-300"
        >
          View code <HiOutlineExternalLink aria-hidden="true" />
        </a>
      </div>
    </article>
  );
};

export default Projects;
