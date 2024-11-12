import React from 'react';

const Hero = () => {
  return (
    <div 
      id="hero" 
      className='min-h-screen bg-no-repeat bg-[url(/banner.bg.png)] bg-left lg:bg-[15%] pt-9 bg-cover'
      style={{ backgroundSize: "33%" }}
      role="banner"
      aria-label="Hero section with background image"
    >
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[8vw] font-thin font-serif sm:text-[6vw] md:text-[5vw] lg:text-[4vw] leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-up">I&apos;m Maheen Zehra,</p>
            <p data-aos="zoom-in-up">a Front-End Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
