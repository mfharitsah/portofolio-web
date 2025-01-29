import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Profile = ({ darkStatus }) => {

  return (
    <div className='w-full px-[15%] py-10 scroll-mt-32' id='profile'>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className='text-center mb-2 text-lg lg:text-xl font-lora'>Introduction</p>
        <p className='text-center text-4xl lg:text-5xl font-lora'>About Me</p>
      </motion.div>


      <div className='w-full h-fit flex flex-col items-center lg:items-start lg:flex-row gap-28 lg:gap-20 my-8 lg:my-20'>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='w-44 lg:w-80 h-40 lg:h-52 relative '>
          <Image src={assets.harris_rectangle} alt='user' className='w-full bg-cover rounded-3xl dark:border-2 dark:border-white/50' />
        </motion.div>
        <div className='flex-1 space-y-10'>
          <motion.p
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-gray-600 dark:text-white text-justify text-sm md:text-lg'>A third-year <span className='font-semibold'>Computer Engineering</span> student with a strong focus on collaborating and working on projects. I thrive on building robust and dynamic web-based applications as a <span className='font-semibold'>Fullstack Developer</span>. Known for my strong leadership skills, effective communication. goals. Continuously advancing my skills in <span className='font-semibold'>Web/Application Development, AI/ML Engineering, and Cyber Security</span>.</motion.p>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='flex flex-col items-center lg:flex-row gap-7 pt-4 lg:pt-0'>
            {
              infoList.map((info, index) => (
                <div key={index} className='w-52 h-52 border-[0.5px] border-gray-400 rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-300 py-5 px-4 dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                  <Image src={darkStatus ? info.iconDark : info.icon} alt='vscode' className='w-5' />
                  <p className='font-semibold mt-4 text-lg'>{info.title}</p>
                  <p className='mt-2 text-gray-600 dark:text-white text-sm leading-7'>{info.description}</p>
                </div>
              ))
            }
          </motion.div>
          <div className='flex flex-col gap-3 justify-center items-center lg:items-start pt-5 lg:pt-0'>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-gray-500 dark:text-white/80'>Tools I use</motion.p>
            <div className='flex gap-4'>
              {
                toolsData.map((tool, index) => (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.1, delay: (index/10)+0.3 }}
                    key={index} className='flex-col items-center justify-center aspect-square border border-gray-300 p-3 rounded-md cursor-pointer hover:-translate-y-1.5 duration-300 dark:border-white/50 dark:bg-white/20'>
                    <Image src={tool.icon} alt='vscode' className='w-6' />
                  </motion.div>
                ))
              }
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
