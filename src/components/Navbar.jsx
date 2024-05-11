// shuru ma baki sb nabar k tags hidden honge so menu nazr ayega bus space between se
// choti screen krne pr hamberger nazar ayega aur hamberger click krne pr cross aajayega icon aur mobile menu show hojayega

// import React, { useState } from "react";
// import {
//   FaBars,
//   FaTimes,
//   FaGithub,
//   FaLinkedin,
//   FaFacebook,
//   FaLinkedinIn,
// } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
// import Plogo from "../assets/Plogo.png";
// import { Link } from "react-scroll";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const handleClick = () => setNav(!nav);

//   return (
//     //using custom background color here thats why written in []
//     <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
//       <div>
//         {/* adding logo in navbar div */}
//         <img src={Plogo} alt="Logo Image" style={{ width: "200px" }} />
//       </div>
//       {/* menu */}
//       {/*start ma bus big screen pr yehi menu show hoga kun k baki sb cheezain hidden hui hongi navbar se */}
//       <ul className="hidden md:flex">
        
//         {/* Anything above medium size screen so show menu */}
//         <li>
//           <Link to="home" smooth={true} duration={500}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="about" smooth={true} duration={500}>
//             About
//           </Link>
//         </li>
//         <li>
//           <Link to="skills" smooth={true} duration={500}>
//             Skills
//           </Link>
//         </li>
//         <li>
//           <Link to="work" smooth={true} duration={500}>
//             Work
//           </Link>
//         </li>
//         <li>
//           <Link to="contact" smooth={true} duration={500}>
//             Contact
//           </Link>
//         </li>
//       </ul>
//       {/* Hamburger */}
//       <div onClick={handleClick} className="md:hidden z-10">
//         {" "}
//         {/*Anything medium and above hide hamburger menu */}{" "}
//         {/* we added Z index kun k hamburger ka icon chup gaya tha aur humne usko dikhana ha so Z index wala tag ooper aajata ha sb k istrha wo ooper aakr show hojayega */}
//         {!nav ? <FaBars /> : <FaTimes />}{" "}
//         {/* imported bars from react icons npm module */}
//       </div>
//       {/* Mobile menu */}
//       <ul
//         className={
//           // so aik colomn ma mobile menu aajayega page k center ma
//           !nav
//             ? "hidden"
//             : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
//         }
//       >
//         <li className="py-6 text-4xl">
//           <Link onClick={handleClick} to="home" smooth={true} duration={500}>
//             Home
//           </Link>
//         </li>
//         <li className="py-6 text-4xl">
//           <Link onClick={handleClick} to="about" smooth={true} duration={500}>
//             About
//           </Link>
//         </li>
//         <li className="py-6 text-4xl">
//           <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
//             Skills
//           </Link>
//         </li>
//         <li className="py-6 text-4xl">
//           <Link onClick={handleClick} to="work" smooth={true} duration={500}>
//             Work
//           </Link>
//         </li>
//         <li className="py-6 text-4xl">
//           <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
//             Contact
//           </Link>
//         </li>
//       </ul>

//       {/* Social icons */}
//       <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
//         {/*social icons are fixed */}
//         <ul>
//           <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
//             {/* justify-between will make linkedIn and its tag seperate in row within such short height*/}
//             <a
//               className="flex justify-between items-center w-full text-gray-300"
//               href="/"
//             >
//               Linkedin <FaLinkedin size={30} />
//             </a>
//           </li>
//           <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
//             <a
//               className="flex justify-between items-center w-full text-gray-300"
//               href="/"
//             >
//               Github <FaGithub size={30} />
//             </a>
//           </li>
//           <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
//             <a
//               className="flex justify-between items-center w-full text-gray-300"
//               href="/"
//             >
//               Email <HiOutlineMail size={30} />
//             </a>
//           </li>
//           <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
//             <a
//               className="flex justify-between items-center w-full text-gray-300"
//               href="/"
//             >
//               Resume <BsFillPersonLinesFill size={30} />
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Plogo from '../assets/Plogo.jpg';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Plogo} alt='Logo Image' style={{ width: '50px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/m-waseem-elahi/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/itsWasimElahi'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://phenomenal-lily-c656cc.netlify.app/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/190odi0oMV2JJYfxzneRYDPWkH55UYN0n/view?usp=sharing'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
