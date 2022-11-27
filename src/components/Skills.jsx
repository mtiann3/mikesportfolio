import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Java from '../assets/java.png'
import Java2 from '../assets/java2.png'
import Portillos from '../assets/portillos.png'
import Target from '../assets/target.png'
import IHOA from '../assets/ihoa.png'
import IHOA3 from '../assets/ihoa3.png'



const Skills = () => {
    return (
        <div name='skills' className= 'w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600  '>Skills/Experience</p>
                    <p className='py-4'>// These are some technologies and corporations I've studied or worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt = "HTML icon"/>
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt = "HTML icon"/>
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt = "HTML icon"/>
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt = "HTML icon"/>
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Java2} alt = "HTML icon"/>
                        <p className='my-4'>JAVA</p>
                    </div>
                    <div className='bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Portillos} alt = "HTML icon"/>
                        <p className='my-4'>PORTILLOS</p>
                    </div>
                    <div className='bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Target} alt = "HTML icon"/>
                        <p className='my-4'>TARGET</p>
                    </div>
                    <div className='bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-40 h-15 mx-auto' src={IHOA3} alt = "HTML icon"/>
                        <p className='my-4'>IHOA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills