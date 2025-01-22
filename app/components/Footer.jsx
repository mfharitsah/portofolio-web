import { assets, socialMediaData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {

    return (
        <div className='w-full flex flex-col gap-5 justify-between mt-20 items-center px-32 lg:px-52 py-8'>
            <div className='w-full flex flex-col items-center gap-2'>
                <a href="#home" className='font-bold text-4xl lg:text-5xl'><span className='text-3xl lg:text-4xl font-light'>about</span>Harris<span className='text-red-700 text-4xl lg:text-5xl'>.</span></a>
                <p className='flex gap-1 items-center'><Image src={assets.mail_icon} alt='' className='w-4' /> mfharitsah@gmail.com</p>

            </div>
            <div className='w-full h-0.5 bg-gray-300 mt-5'></div>
            <div className='w-full flex flex-col items-center lg:flex-row gap-5 lg:justify-between'>
                <p>@ 2025 Fahish Haritsah. All rights reserved. </p>
                <div className='flex gap-6 items-center'>
                    {
                        socialMediaData.map((item, index) => (
                            <a href={item.link} key={index} className='flex-col items-center justify-center aspect-square border border-gray-300 p-1 rounded-md cursor-pointer hover:-translate-y-1.5 duration-300 dark:border-white/50 dark:bg-white/20'>
                                <Image alt={item.name} src={item.icon} className='w-8 h-8' />
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer
