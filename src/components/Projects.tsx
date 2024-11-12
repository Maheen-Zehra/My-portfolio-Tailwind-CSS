import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
  {
    id: 0,
    title: "Resume Builder",
    desc: "A Typescript-based Interactive Resume Builder built with HTML, CSS & Typescript.",
    img: "/Project-01.png",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
    id: 1,
    title: "Travel website",
    desc: "Travel and Tours responsive website built with core HTML and CSS.",
    img: "/Project-02.png",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
    id: 2,
    title: "Simple Calculator",
    desc: "A basic HTML, CSS and Typescript Calculator for performing simple calculations.",
    img: "/Project-03.png",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='Projects' />
      <div className='grid gap-10 xl:gap-9 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (
          <Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
