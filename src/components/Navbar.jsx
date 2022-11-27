import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill, bsFillPersonLinesFill } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import Logo from '../assets/logo1.png';
import Logo2 from '../assets/logo2.png';
import Logo3 from '../assets/logo3.png';
import Resume from '../assets/myResume4.pdf';
// import { Link } from 'react-scroll'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <a  href='/'  >
          <img type="button" className='cursor-pointer' hre src={Logo3} alt='Logo Image' style={{ width: '80px' }} />
        </a>
      </div>

      {/* Menu */}
      <ul className='px-10 hidden md:flex'>
        <li>
          <a href='/mikesportfolio/'>Home</a>
        </li>
        <li>
          <a href='/mikesportfolio/about'>About</a>
        </li>
        <li>
          <a href='/mikesportfolio/skills'>Skills</a>
        </li>
        <li>
          <a href='/mikesportfolio/work'>Work</a>
        </li>
        <li>
          <a href='/mikesportfolio/contact'>Contact</a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden ' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <a href='/mikesportfolio/'>Home</a>
        </li>
        <li className='py-6 text-4xl'>
          <a href='/mikesportfolio/contact'>About</a>
        </li>
        <li className='py-6 text-4xl'
        ><a href='/mikesportfolio/skills'>Skills</a>
        </li>
        <li className='py-6 text-4xl'>
          <a href='/mikesportfolio/work'>Work</a>
        </li>
        <li className='py-6 text-4xl'>
          <a href='/mikesportfolio/contact'>Contact</a>
        </li>
      </ul>


      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600  '>
            <a className='flex justify-between items-center w-full text-gray-300'
              href='https://twitter.com/miannotti06'>
              Twitter <FaTwitter size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333 ]  '>
            <a className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/mikeiannotti55'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c71610]  '>
            <a className='flex justify-between items-center w-full text-gray-300'
              href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqTflxmgPJpzhTWMVvSsgnkHkBRwBHWfRrJlcjltqRMDzzklTjSNrdKLCkwfTbhvcwCMJV'>
              Gmail <SiGmail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]  '>
            <a className='flex justify-between items-center w-full text-gray-300'
              href={Resume} download="MikeIannotiResume.pdf">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>


    </div>

  );
};

export default Navbar;
