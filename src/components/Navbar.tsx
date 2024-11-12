"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav ul li a');

      let currentSection: string | null = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
          currentSection = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.slice(1);
    const targetElement = document.getElementById(targetId!);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center space-x-2 mb-4 sm:mb-0'>
        <div className='flex items-center mb-4 sm:mb-0'>
          <Image src='/logo.png' alt='logo' width={60} height={56} className='w-15 h-14' />
          <div className='text-xl font-medium flex justify-between'>Maheen Zehra</div>
        </div>

        <ul className='gap-10 lg:gap-16 hidden md:flex'>
          <li className='menuLink'><a href="#hero" onClick={handleClick}>Home</a></li>
          <li className='menuLink'><a href="#projects" onClick={handleClick}>Projects</a></li>
          <li className='menuLink'><a href="#skills" onClick={handleClick}>Skills</a></li>
          <li className='menuLink'><a href="#contact" onClick={handleClick}>Contact</a></li>
          <li className='menuLink'><a href="#about" onClick={handleClick}>About</a></li>
        </ul>
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      {isMenuOpen && (
        <ul className='flex flex-col gap-4 mt-4 md:hidden'>
          <li className="menuLink">
            <a href="#hero" onClick={toggleMenu}>Home</a>
          </li>
          <li className="menuLink">
            <a href="#projects" onClick={toggleMenu}>Projects</a>
          </li>
          <li className="menuLink">
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li className="menuLink">
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
          <li className="menuLink">
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
