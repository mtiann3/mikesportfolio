import React from 'react'
import ReactImg from '../assets/react.png'
import Java2 from '../assets/java2.png'
import Cpp from '../assets/cpp2.png'
import TensorFlow from '../assets/tensorflow2.png'
import Xcode from '../assets/xcode.jpeg'
import Opencv from '../assets/opencv2.png'
import Unity from '../assets/unity.png'
import Python from '../assets/python4.png'
import Node from '../assets/node.png'
import Firebase from '../assets/firebase.png'
import Mongodb from '../assets/mongo.png'
import Swift from '../assets/swift.jpeg'

const Skills = () => {
    return (
        <div name='skills' className= 'w-full h-full bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-red-600  '>Skills</p>
                    <p className='py-4'>// These are some technologies I've studied or worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    {/* s */}
                    <div className='bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-auto h-20 mx-auto' src={TensorFlow} alt = "HTML icon"/>
                        <p className='my-4'>TENSORFLOW</p>
                    </div>
                    {/* <div className='bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt = "HTML icon"/>
                        <p className='my-4'>JAVASCRIPT</p>
                    </div> */}
                    <div className='bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt = "HTML icon"/>
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Java2} alt = "HTML icon"/>
                        <p className='my-4'>JAVA</p>
                    </div>
                    <div className='bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Xcode} alt = "HTML icon"/>
                        <p className='my-4'>XCODE</p>
                    </div>
                    <div className='bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Cpp} alt = "HTML icon"/>
                        <p className='my-4'>C++</p>
                    </div>
                    <div className='bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-40 h-15 mx-auto' src={Unity} alt = "HTML icon"/>
                        <p className='my-4'>UNITY</p>
                    </div>
                    <div className='bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-auto h-20 mx-auto' src={Opencv} alt = "HTML icon"/>
                        <p className='my-4'>OPENCV</p>
                    </div>
                    <div className='bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className=' mx-auto h-16' src={Python} alt = "HTML icon"/>
                        <p className='my-4'>Python</p>
                    </div>
                    <div className='bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt = "HTML icon"/>
                        <p className='my-4'>NodeJs</p>
                    </div>
                    <div className='bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Firebase} alt = "HTML icon"/>
                        <p className='my-4'>Firebase</p>
                    </div>
                    <div className='bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Mongodb} alt = "HTML icon"/>
                        <p className='my-4'>MongoDB</p>
                    </div>
                    <div className='bg-[#0d213e] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Swift} alt = "HTML icon"/>
                        <p className='my-4'>Swift</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills