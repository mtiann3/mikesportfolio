import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full' >
                <p className='text-3xl font-thin text-pink-600' >Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]' >Mike Iannotti</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a High School Student</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Junior in High School with 3 years of studying computer science. Currently, i'm focused on web development, specifically React.Js</p>
                <div>
                    <a href='/mikesportfolio/work'>
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-[#4a4a4a] hover: duration-300' >View Work

                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3 ' />
                            </span>
                        </button>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Home