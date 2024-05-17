// import React from 'react';

// import HTML from '../assets/html.png';
// import CSS from '../assets/css.png';
// import JavaScript from '../assets/javascript.png';
// import ReactImg from '../assets/react.png';
// import Node from '../assets/node.png';
// import FireBase from '../assets/firebase.png';
// import GitHub from '../assets/github.png';
// import Tailwind from '../assets/tailwind.png';
// import Mongo from '../assets/mongo.png';
// import sql from '../assets/sql.png';
// import wordpress from '../assets/wordpress.png';
// import java from '../assets/java.png';
// import Cplus from '../assets/Cplus.png';
// import express from '../assets/express.png';




// const Skills = () => {
//   return (
//     <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
//       {/* Container */}
//       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
//           <div>
//               <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
//               <p className='py-4'>These are the technologies I've worked with</p>
//           </div>

//           <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
//                   <p className='my-4'>HTML</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
//                   <p className='my-4'>CSS</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
//                   <p className='my-4'>JAVASCRIPT</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
//                   <p className='my-4'>REACT</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
//                   <p className='my-4'>GITHUB</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
//                   <p className='my-4'>NODE JS</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
//                   <p className='my-4'>MONGO DB</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
//                   <p className='my-4'>TAILWIND</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
//                   <p className='my-4'>FIREBASE</p>
//               </div> 
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={wordpress} alt="HTML icon" />
//                   <p className='my-4'>WordPress</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={sql} alt="HTML icon" />
//                   <p className='my-4'>SQL</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={express} alt="HTML icon" />
//                   <p className='my-4'>Express Js</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={java} alt="HTML icon" />
//                   <p className='my-4'>JAVA</p>
//               </div>
//               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//                   <img className='w-20 mx-auto' src={Cplus} alt="HTML icon" />
//                   <p className='my-4'>C++</p>
//               </div>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import sql from '../assets/sql.png';
import bootstrap from '../assets/bootstrap.png';
import java1 from '../assets/java1.webp';

// import Cplus from '../assets/Cplus.jpg';
import cpp1 from '../assets/cpp1.png';
import wordpress from '../assets/wordpress.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4'>
        <div className=''>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-8'>
          <SkillItem img={HTML} label='HTML' />
          <SkillItem img={CSS} label='CSS' />
          <SkillItem img={JavaScript} label='JavaScript' />
          <SkillItem img={ReactImg} label='React' />
          <SkillItem img={GitHub} label='GitHub' />
          <SkillItem img={Node} label='Node JS' />
          <SkillItem img={Mongo} label='Mongo DB' />
          <SkillItem img={Tailwind} label='Tailwind' />
          <SkillItem img={FireBase} label='Firebase' />
          <SkillItem img={wordpress} label='WordPress' />
          <SkillItem img={cpp1} label='C++' />
          <SkillItem img={bootstrap} label='Bootstrap' />

          <SkillItem img={sql} label='SQL' />
          <SkillItem img={java1} label='JAVA' />
        </div>
      </div>
    </div>
  );
};

const SkillItem = ({ img, label }) => (
  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={img} alt={`${label} icon`} />
    <p className='my-4'>{label}</p>
  </div>
);

export default Skills;
