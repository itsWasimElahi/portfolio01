// import React from 'react';

// const About = () => {
//   return (
//     <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
//       <div className='flex flex-col justify-center items-center w-full h-full'>
//         <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
//           <div className='sm:text-right pb-8 pl-4 '>  {/*just now */}
//             <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
//               About
//             </p>
//           </div>
//           <div></div>
//           </div>
//           <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
//             <div className='sm:text-right text-4xl font-bold'>
//               <p>Hi. I'm Waseem Elahi, nice to meet you. Please take a look around.</p>
//             </div>
//             <div>
//               <p>I am a Dedicated web developer passionate about crafting engaging online experiences. With a focus on clean code and intuitive design, I specialize in building responsive websites and dynamic web applications. Let's collaborate and bring your digital vision to life.</p>  
//             </div>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default About;
//


import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Waseem Elahi, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>I am a dedicated web developer passionate about crafting engaging online experiences. With a focus on clean code and intuitive design, I specialize in building responsive websites and dynamic web applications. Let's collaborate and bring your digital vision to life.</p>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;




