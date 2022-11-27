import React from 'react'
import AppImg from "../assets/app1.png"
import Finance from "../assets/finance.jpeg"
import SoccerImg from "../assets/soccer.jpg"
import PortillosImg from "../assets/portillos2.jpeg"
import RefereeImg from "../assets/referee.jpeg"
import TargetImg from "../assets/target2.jpeg"


const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Work
                    </p>
                    <p className='py-6'>// Check out some of my recent work</p>
                </div>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${AppImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 text-center group-hover:opacity-100 ' >
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Android Diet Tracker Application

                            </span>
                            <div className='pt-8 text-center' >
                                <a href='https://github.com/mikeiannotti55/android-nutrition-tracker-app/tree/main'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-l'>Code (GitHub)</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${Finance})` }}

                        className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 text-center  group-hover:opacity-100 ' >
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                High School Extracurriculars

                            </span>
                            <div className='pt-8 text-center' >
                                <p>I have participated in Finance Club, and Technology Club for 2 years, along with a year of the Debate Team and Math Team.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${SoccerImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 text-center group-hover:opacity-100 ' >
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Athletic Career

                            </span>
                            <div className='pt-8 text-center' >
                                <p>I have played JV soccer for my High School for 2 years, and I have also played travel Hockey from the age of 6 to 14.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${PortillosImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 text-center group-hover:opacity-100 ' >
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Summer 2022 Job

                            </span>
                            <div className='pt-8 text-center' >
                                <p>Over the summer, i have worked as a crew member for portllos, where i prepared and served food for customers.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${RefereeImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 text-center group-hover:opacity-100 ' >
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Side Job

                            </span>
                            <div className='pt-8 text-center' >
                                <p>I also am a certified USA Hockey youth referee. I have refereed various youth
                                    hockey games for ages 8-14. </p>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${TargetImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 text-center group-hover:opacity-100 ' >
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Current Job

                            </span>
                            <div className='pt-8 text-center' >
                                <p>Currently, I work as a team member at target. I assist guests, and also work as a cashier.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Work