import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

const Works = ({ darkStatus }) => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [seeMore, setSeeMore] = useState(false);

  const toggleClick = (index) => {
    setClickedIndex(clickedIndex === index ? null : index); 
  };

  return (
    <div id='my-works' className='w-full px-[15%] py-10 scroll-mt-32 min-h-screen bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center dark:bg-none bg-[length:90%_auto]'>
      <p className='text-center mb-2 text-lg font-lora'>Portfolio</p>
      <p className='text-center text-4xl lg:text-5xl font-lora'>My Latest Work</p>
      <p className='text-justify lg:text-center text-sm lg:text-base max-w-2xl mx-auto mt-5 mb-12 font-lora'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis tenetur quaerat exercitationem explicabo hic
        saepe illo enim est! Nam quaerat molestiae velit cum exercitationem culpa praesentium modi quibusdam delectus
        nemo?
      </p>

      {/* <div className='flex flex-col lg:flex-row gap-5 justify-center items-center'> */}
      <div className={`grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center items-center transition-[max-height] duration-1000 ease-in-out overflow-hidden ${seeMore ? 'max-h-[135rem] md:max-h-[152rem] lg:max-h-[50rem]' : 'max-h-[66rem] md:max-h-[75rem] lg:max-h-[24rem]'}`}>
        {workData.map((project, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className="relative bg-cover bg-center w-80 max-w-2xl h-[21rem] md:h-96 md:w-96 rounded-2xl flex flex-col justify-between gap-4 p-5 dark:border-2 dark:border-white/50"
          >
            <div
              className={`absolute w-[80%] bottom-6 right-0 left-0 flex flex-col items-center justify-between rounded-lg mx-auto px-10 bg-white duration-500 ease-out transform transition-all cursor-pointer overflow-hidden ${clickedIndex === index ? 'h-72 lg:h-[21rem] py-4' : 'h-20 pt-3'
                }`}
              onClick={() => toggleClick(index)} // Kirim indeks kartu yang diklik
              onMouseLeave={() => setClickedIndex(null)} // Reset state jika mouse keluar
            >
              <div className='flex flex-col justify-center items-center'>
                <p className='text-black text-lg md:text-xl font-semibold'>{project.title}</p>
                <p className='font-semibold text-sm md:text-base text-gray-500 italic'>{project.description}</p>
                <p className='text-gray-600 mt-4 text-sm lg:text-base text-justify font-semibold'>
                  {project.full_desc}
                </p>
              </div>

              <a href={project.github} className='px-4 py-0.5 text-sm md:text-base md:py-1 md:px-6 border rounded-full border-white bg-black text-white flex items-center gap-2'>
                see detail
                <Image src={assets.right_arrow_white} alt='' className='w-3' />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-10'>
        <button className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-lightHover dark:hover:bg-darkHover duration-300' onClick={() => setSeeMore(!seeMore)}>
          {seeMore ? "see less" : "see more"}
          <Image src={darkStatus ? assets.right_arrow_white : assets.right_arrow_bold} alt='' className={`w-4 duration-300 ${seeMore ? '-rotate-90' : 'rotate-90'}`} />
        </button>
      </div>
    </div>
  );
};

export default Works;
