import React from 'react';
import Heading from './Heading';

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
          <Heading title='My Skills' />
          <h2 className='text-4xl md:text-5xl text-teal-300'>Technologies I work with</h2>
          <p className='text-white pt-4 space-y-8 space-x-8'>
            I have a solid foundation in Web Development, specializing in HTML, CSS, and TypeScript. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I&apos;m also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
          </p>
        </div>
        <div className='grid grid-cols-2 text-yellow-400 text-3xl sm:text-4xl'>
          <div className='space-y-5'>
            <h2 data-aos="zoom-in-up">TypeScript</h2>
            <h2 data-aos="zoom-in-up">Next.js</h2>
         
            <h2 data-aos="zoom-in-up">React.js</h2>
            <h2 data-aos="zoom-in-up">Tailwind</h2>
          </div>
          <div className='space-y-5'>
            <h2 data-aos="zoom-in-up">HTML</h2>
            <h2 data-aos="zoom-in-up">CSS</h2>
          
            <h2 data-aos="zoom-in-up">Node.js</h2>
            <h2 data-aos="zoom-in-up">JavaScript</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
