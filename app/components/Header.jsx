import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Header = () => {
    return (
        <div className='w-11/12 max-w-6xl text-center mx-auto flex flex-col items-center justify-center min-h-screen gap-4'>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
                <Image src={assets.user_image} alt='logo' className='rounded-full w-32 lg:w-52' />
            </motion.div>
            <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='flex items-end gap-2 text-base md:text-2xl font-lora'>I'm Fahish Haritsah. Casually<span className='font-bold'>Harris</span><Image src={assets.hand_icon} alt='' className='w-6' /></motion.p>

            <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='text-4xl sm:text-6xl lg:text-[66px] font-lora '>You've found a <span className='underline'>web developer</span> here!</motion.p>

            <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='max-w-2xl text-center font-lora text-sm lg:text-lg'><span className='font-bold'>--</span> Fullstack Developer based in Jakarta with 2 years of experience developing efficient and user-friendly web applications.</motion.p>

            <motion.div
                className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.1, delay: 0.3 }}
                    href="https://github.com/mfharitsah" className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 dark:bg-transparent hover:bg-black/80 dark:hover:bg-darkHover duration-300'>
                    view github
                    <Image src={assets.right_arrow_white} alt='' className='w-4' />
                </motion.a>
                <motion.a
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.1, delay: 0.5 }}
                    href="https://drive.google.com/file/d/1EPWlNe_BTJGU7oe7AemEIi8okpJkjVY4/view?usp=sharing" className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white hover:bg-lightHover dark:hover:bg-white/90 dark:text-black duration-300'>
                    view resume
                    <Image src={assets.download_icon} alt='' className='w-4' />
                </motion.a>
            </motion.div>
        </div>
    )
}

export default Header
