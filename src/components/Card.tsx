import React from 'react';
import Image from 'next/image';

interface PropsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
  return (
    <div className='border border-black w-[300px] sm:w-[335px]' data-aos="flip-right">
      <div>
        <Image
          className='w-[300px] sm:w-[335px]'
          src={img}
          width={300}
          height={350}
          alt={title}
        />
      </div>
      <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el) => (
            <div className='tags' key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
