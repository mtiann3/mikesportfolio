import React from "react";
import AppImg from "../assets/app1.png";
import Ren from "../assets/medium.png";
import AthleteIQ from "../assets/athleteiq.png";
import dinorun from "../assets/dinorun.png";
const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full h-full text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-600">
            Projects
          </p>
          <p className="py-6">
            // Check out some of my projects I've worked on!
          </p>
        </div>
        {/* Container */}
        <div className="grid  grid-cols-2  gap-4">
          {/* Grid Item */}
{/* ------------------------------------------------------------ */}

          <div
            style={{
              backgroundImage: `url(${AppImg})`,
              backgroundSize: "contain", // Ensures the image is contained within the container
              backgroundRepeat: "no-repeat", // Prevents the image from repeating
              backgroundPosition: "center", // Centers the image in the container
            }}
            className="shadow-lg bg-[#0d213e] shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-l font-bold text-white tracking-wider">
                Android Diet Tracker Application (My first project!)
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/mikeiannotti55/android-nutrition-tracker-app/tree/main">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-l">
                    Code (GitHub)
                  </button>
                </a>
              </div>
            </div>
          </div>
{/* ------------------------------------------------------------ */}

          <div
            style={{
              backgroundImage: `url(${Ren})`,
              backgroundSize: "contain", // Ensures the image is contained within the container
              backgroundRepeat: "no-repeat", // Prevents the image from repeating
              backgroundPosition: "center", // Centers the image in the container
            }}
            className="shadow-lg bg-[#0d213e] shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-l font-bold text-white tracking-wider">
                An emotionally aware multifaceted chatbot. Your friend, REN. 
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/aryan-cs/ren">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-l">
                    Code (GitHub)
                  </button>
                </a>
              </div>
            </div>
            
          </div>
{/* ------------------------------------------------------------ */}

          <div
            style={{
              backgroundImage: `url(${dinorun})`,
              backgroundSize: "contain", // Ensures the image is contained within the container
              backgroundRepeat: "no-repeat", // Prevents the image from repeating
              backgroundPosition: "center", // Centers the image in the container
            }}
            className="shadow-lg bg-[#0d213e] shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-l font-bold text-white tracking-wider">
              A unique way to play the Google Dino Run game using computer vision. There are two options to play the game, by blinking, or by pressing your fingers.
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/mtiann3/opencv-google-dino-run">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-l">
                    Code (GitHub)
                  </button>
                </a>
              </div>
            </div>
          </div>
{/* ------------------------------------------------------------ */}

          <div
            style={{
              backgroundImage: `url(${AthleteIQ})`,
              backgroundSize: "contain", // Ensures the image is contained within the container
              backgroundRepeat: "no-repeat", // Prevents the image from repeating
              backgroundPosition: "center", // Centers the image in the container
            }}
            className="shadow-lg bg-[#0d213e] shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-l font-bold text-white tracking-wider">
              Simple IOS app made with Swift and Swift Data to track my workouts, diet and my progress. (Under review for app store)


              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/mtiann3/athleteiq">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-l">
                    Code (GitHub)
                  </button>
                </a>
              </div>
            </div>
          </div>
{/* ------------------------------------------------------------ */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
