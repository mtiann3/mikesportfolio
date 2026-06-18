import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-none flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/1df1c675-fe6a-43f9-b287-66c4625314e7" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4 font-bold'>Submit the form below or shoot me an email at miannotti06@gmail.com</p>
            </div>
            <input className='bg-[#0d213e] bg-opacity-75 p-2 ' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#0d213e] bg-opacity-75' type="text" placeholder='Email' name='email'/>
            <textarea className='bg-[#0d213e] p-2 bg-opacity-75'  name='message' rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-3 my-8 mx-auto items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact