import React from 'react';
import Heading from './Heading';
import { MdOutlineAttachEmail } from "react-icons/md";
import { BsTelephoneOutbound } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32'>
      <div className='grid md:grid-cols-1 gap-10 text-center'>
        <div className='space-y-8'>
          <Heading title='Contact' />
          <h3 className='text-5xl text-teal-300 text-center' data-aos="zoom-in-up">Get In Touch</h3>
          <p className='text-amber-400 text-center text-[18px] pt-2' data-aos="zoom-in-up">
            If you want your Portfolio like this then contact me. I also design the CV (Resume) with the best designs.
          </p>
          <br />
          <div className='inline-block md:grid-cols-2'>
            <div>
              <div className='flex gap-3 text-[20px]' data-aos="zoom-in-up">
                <MdOutlineAttachEmail size={40} /> xyz@gmail.com
              </div>
            </div>
            <br />
            <div className='flex gap-3 text-center text-[20px]' data-aos="zoom-in-up">
              <BsTelephoneOutbound size={40} /> (021) 000-6500
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className='text-center items-center'>
          <div className='border-2 border-[#ffffff] p-5 mb-5 bg-[#000000]'>
            <h1 className='text-[25px]' data-aos="zoom-in-up">Enter Information here!</h1>
            <br />
            <div className='gap-1 text-center items-center' data-aos="zoom-in-up">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                className='h-[25px] w-50 bg-white border text-neutral-950 border-black'
                id='name'
              />
            </div>
            <br />
            <div className='gap-1 text-center items-center' data-aos="zoom-in-up">
              <label htmlFor="email">Email: </label>
              <input
                type="text"
                className='h-[25px] w-50 bg-white border text-neutral-950 border-black'
                id='email'
              />
            </div>
            <br />
            <div className='gap-1 text-center items-center' data-aos="zoom-in-up">
              <label htmlFor="msg">Message: </label>
              <textarea
                className='h-[25px] w-50 bg-white border text-neutral-950 border-black'
                id='msg'
              ></textarea>
            </div>
            <br />
            <button className='bg-white px-8 text-[20px] text-black' data-aos="zoom-in-up">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
