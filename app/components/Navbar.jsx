import { assets, navbarMenu } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = ({ darkStatus, setDarkMode }) => {

    const [isScroll, setIsScroll] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        })
    }, [])


    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt="" className='w-full' />
            </div>

            <nav className={`w-full flex justify-between items-center py-4 px-5 lg:px-8 xl:px-[8%] fixed top-0 z-50 ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:bg-transparent' : ''}`}>
                <a href="" className='font-bold text-3xl lg:text-4xl'><span className='text-2xl lg:text-3xl font-light'>about</span>Harris<span className='text-red-700 text-4xl lg:text-5xl'>.</span></a>

                <ul className={`gap-6 lg:gap-8 text-xl hidden md:flex items-center rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                    {
                        navbarMenu.map((item, index) => (
                            <li key={index} className={`hover:-translate-y-1 duration-300`}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))
                    }
                </ul>

                <div className='flex items-center gap-4'>
                    <button onClick={() => setDarkMode(prev => !prev)} >
                        <Image src={darkStatus ? assets.sun_icon : assets.moon_icon} alt="" className='w-6' />
                    </button>
                    <a
                        href="https://www.linkedin.com/in/mfharitsah/"
                        className="relative hidden lg:flex items-center gap-3 px-8 py-2 border border-gray-500 rounded-full ml-4 text-lg dark:border-white/50 group overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-lightHover dark:bg-darkHover transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                        <span className="relative z-10 text-gray-800 dark:text-white">
                            My Linkedin
                        </span>
                        <Image
                            src={darkStatus ? assets.arrow_icon_dark : assets.arrow_icon}
                            className="w-3 relative z-10"
                            alt=""
                        />
                    </a>

                    <button className='block md:hidden' onClick={toggleMenu}>
                        <Image src={darkStatus ? assets.menu_white : assets.menu_black} alt="" className='w-6' />
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul className={`w-64 h-screen z-50 flex md:hidden flex-col gap-4 px-10 py-20 fixed ${isMenuOpen ? 'right-0' : '-right-64'} top-0 bottom-0 bg-rose-50  transition-all duration-500 dark:bg-darkHover dark:text-white`}>
                    <div className='absolute top-6 right-6' onClick={toggleMenu}>
                        <Image src={darkStatus ? assets.close_white : assets.close_black} alt="" className='w-5 cursor-pointer' />
                    </div>
                    {
                        navbarMenu.map((item, index) => (
                            <li key={index} onClick={toggleMenu}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    )
}

export default Navbar
