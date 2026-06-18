import React from "react";

import AppImg from "../assets/app1.png";
import Ren from "../assets/medium.png";
import AthleteIQ from "../assets/athleteiq.png";
import dinorun from "../assets/dinorun.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full min-h-screen text-gray-300 bg-none py-16"
    >
      <div className="max-w-[1000px] mx-auto px-4">

        {/* HEADER */}
        <div className="mb-12">
          <p className="text-4xl font-bold inline border-b-4 border-red-600">
            Projects
          </p>

          <p className="py-4 font-bold text-gray-300">
            Software projects focused on mobile development, AI, and computer vision. Currently expanding into business and accounting applications.
          </p>
        </div>

        {/* FEATURED PROJECT */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Featured Project
          </h2>

          <div className="bg-[#0d213e] bg-opacity-75
        font-bold shadow-lg shadow-[#040c16] rounded-md p-6 flex flex-col md:flex-row gap-6 items-center">

            <img
              src={dinorun}
              alt="Dino Run"
              className="h-40 object-contain"
            />

            <div>
              <h3 className="text-white text-lg font-bold">
                Computer Vision Gesture Controller (Dino Run)
              </h3>

              <p className="text-gray-400 mt-2">
                Built a computer vision application using OpenCV to control the Chrome Dino game using hand tracking and gesture detection.
                Focused on real-time video processing and human-computer interaction.
              </p>

              <p className="text-xs text-gray-500 mt-3">
                Python • OpenCV • Computer Vision
              </p>

              <a
                href="https://github.com/mtiann3/opencv-google-dino-run"
                target="_blank"
                rel="noreferrer"
              >
                <button className="mt-4 px-4 py-2 bg-white text-black font-bold rounded-md">
                  View Code
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* GRID PROJECTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <ProjectCard
            img={AppImg}
            title="Android Nutrition Tracking App"
            desc="Mobile application for tracking diet and nutrition data with a simple user interface."
            tech="Java • Android Studio • Mobile Development"
            link="https://github.com/mikeiannotti55/android-nutrition-tracker-app/tree/main"
          />

          <ProjectCard
            img={Ren}
            title="AI Chatbot (REN)"
            desc="Conversational AI chatbot designed to simulate emotionally aware responses."
            tech="Python • NLP • AI Systems"
            link="https://github.com/aryan-cs/ren"
          />

          <ProjectCard
            img={AthleteIQ}
            title="Fitness Tracking iOS App (AthleteIQ)"
            desc="iOS application for tracking workouts, nutrition, and fitness progress."
            tech="Swift • SwiftUI • iOS Development"
            link="https://github.com/mtiann3/athleteiq"
          />

        </div>

        {/* CAREER DIRECTION (IMPORTANT ADDITION) */}
        <div className="mt-16 bg-opacity-75
        font-bold bg-[#0d213e] p-6 rounded-md shadow-lg shadow-[#040c16]">
          <h2 className="text-white text-lg font-bold mb-3">
            Current Focus
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            I am currently strengthening my foundation in software development while pursuing a Bachelor's degree in Accounting with a minor in Computer Science.
            I am also exploring the intersection of business, data analysis, and technology, with an interest in pursuing the CPA path and finance-related roles in the future.
          </p>
        </div>

      </div>
    </div>
  );
};

/* PROJECT CARD */
const ProjectCard = ({ img, title, desc, tech, link }) => {
  return (
    <div className="bg-[#0d213e] bg-opacity-75
        font-bold shadow-md shadow-[#040c16] rounded-md p-5 flex flex-col items-center text-center hover:scale-[1.03] duration-300">

      <img src={img} alt={title} className="h-28 object-contain mb-4" />

      <h3 className="text-white font-bold">{title}</h3>

      <p className="text-sm text-gray-400 mt-2">{desc}</p>

      <p className="text-xs text-gray-500 mt-3">{tech}</p>

      <a href={link} target="_blank" rel="noreferrer">
        <button className="mt-4 px-4 py-2 bg-white text-black font-bold rounded-md">
          View Code
        </button>
      </a>

    </div>
  );
};

export default Projects;