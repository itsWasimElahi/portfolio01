// import React from 'react';
// import { HiArrowNarrowRight } from 'react-icons/hi';

// const Home = () => {
//   return (
//     <div name='home' className='w-full h-screen bg-[#0a192f]'>  {/*home screen color is black */}
//       {/* Container */}
//       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'> {/*container k ander k saray tags colomnar way way page k centre ma aajayeinge */}
//         <p className='text-pink-600'>Hi, my name is</p>
//         <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
//           WASEEM ELAHI
//         </h1>
//         <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
//           I'm a Full Stack Developer.
//         </h2>
//         <p className='text-[#8892b0] py-4 max-w-[700px]'>
//           I’m a full-stack developer specializing in building (and 
//           designing) exceptional digital experiences. Currently, I’m focused on
//           building responsive full-stack web applications.
//         </p>
//         <div>
//           <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
//             View Work
//             <span className='group-hover:rotate-90 duration-300'>  {/*group se ab khali arrow pr hover se nhi bulky button pr kahi bhi hover krne se arrow rotate hojayega */}
//               <HiArrowNarrowRight className='ml-3 ' />
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

//added image waseem
// import React from 'react';
// import { HiArrowNarrowRight } from 'react-icons/hi';
// import profileImage from '../assets/profile.png'; // Import your profile image

// const Home = () => {
//   return (
//     <div name='home' className='w-full h-screen bg-[#0a192f] '>
//       <div className='max-w-[1000px] mx-auto px-8 flex flex-col sm:flex-row justify-center items-center h-full '>
//         <div className="flex flex-col items-center sm:items-start sm:mr-8 ">{/*just now */} {/* Added a wrapper div for the text */}
//           <p className='text-pink-600 mt-40'>Hi, my name is</p>
//           <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
//             WASEEM ELAHI
//           </h1>
//           <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
//             I'm a Full Stack Developer.
//           </h2>
//           <p className='text-[#8892b0] py-4 max-w-[700px]'>
//             I’m a full-stack developer specializing in building (and designing) exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications.
//           </p>
//           <div>
//             <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
//               View Work
//               <span className='group-hover:rotate-90 duration-300'>
//                 <HiArrowNarrowRight className='ml-3' />
//               </span>
//             </button>
//           </div>
//         </div>
//         <img src={profileImage} alt="Waseem Elahi" className="rounded-full w-64 h-64 object-cover shadow-md mt-8 sm:mt-0" /> {/* Added profile image */}
//       </div>
//     </div>
//   );
// };

// export default Home;



import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import profileImage from '../assets/profile.png'; // Import your profile image

const Home = () => {
  return (
    <div name='home' className='w-full min-h-screen bg-[#0a192f] flex justify-center items-center'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col sm:flex-row justify-center items-center'>
        <div className="flex flex-col items-center sm:items-start sm:mr-8">
          <p className='text-pink-600 mt-8 sm:mt-0'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] mt-2 sm:mt-4'>
            WASEEM ELAHI
          </h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
            I'm a Full Stack Developer.
          </h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I’m a full-stack developer specializing in building (and designing) exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications.
          </p>
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </div>
        </div>
        <img src={profileImage} alt="Waseem Elahi" className="rounded-full w-64 h-64 object-cover shadow-md mt-8 sm:mt-0" />
      </div>
    </div>
  );
};

export default Home;
