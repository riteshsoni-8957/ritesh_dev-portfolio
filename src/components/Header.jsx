"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { RiMenu3Fill } from 'react-icons/ri';


function Header() {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className='z-3000 fixed top-3 right-4 left-4 lg:right-8 lg:left-8 xl:right-12 xl:left-12 rounded-full flex items-center justify-between px-4 min-[371px]:px-8 min-[841px]:px-4 lg:px-8 py-3 border border-gray-700 bg-[#00020f] shadow-[0_0_15px_rgba(34,211,238,0.15)]'>
            <div className='text-[23px] min-[841px]:text-[21px] xl:text-[25px] font-bold font-mono tracking-[3px]'>
                RITESH 
                <span className='text-cyan-300'>_DEV</span>
            </div>

            <div className={`${showNav ? 'flex' : 'hidden'} z-2000 min-[841px]:flex fixed min-[841px]:static top-0 right-0 bottom-0 h-screen min-[841px]:h-auto w-[250px] min-[841px]:w-auto bg-[#111a34] min-[841px]:bg-transparent flex-col min-[841px]:flex-row justify-center gap-8 min-[841px]:gap-4 lg:gap-8 xl:gap-11 shadow-xl `}>
                <div className='min-[841px]:hidden text-2xl text-white hover:text-cyan-300 cursor-pointer absolute top-4 right-4' onClick={() => setShowNav(!showNav)}>
                    <IoClose size={30} className='hover:scale-[1.3]' />
                </div>

                <ul className='flex flex-col gap-6 min-[841px]:gap-4 lg:gap-8 xl:gap-11 items-center min-[841px]:flex-row'>
                    <li className='text-xl min-[841px]:text-[18px] lg:text-xl font-mono text-cyan-300 hover:text-cyan-50 hover:font-bold hover:text-[22px] min-[841px]:text-cyan-50 min-[841px]:hover:text-cyan-300'>
                        <Link href="#" onClick={() => setShowNav(!showNav)}>
                            Home
                        </Link>    
                    </li>

                    <li className='text-xl min-[841px]:text-[18px] lg:text-xl font-mono text-cyan-300 hover:text-cyan-50 hover:font-bold hover:text-[22px] min-[841px]:text-cyan-50 min-[841px]:hover:text-cyan-300'>
                        <Link href="#about" onClick={() => setShowNav(!showNav)}>
                            About
                        </Link>
                    </li>

                    <li className='text-xl min-[841px]:text-[18px] lg:text-xl font-mono text-cyan-300 hover:text-cyan-50 hover:font-bold hover:text-[22px] min-[841px]:text-cyan-50 min-[841px]:hover:text-cyan-300'>
                        <Link href="#skills" onClick={() => setShowNav(!showNav)}>
                            Skills
                        </Link>
                    </li>

                    <li className='text-xl min-[841px]:text-[18px] lg:text-xl font-mono text-cyan-300 hover:text-cyan-50 hover:font-bold hover:text-[22px] min-[841px]:text-cyan-50 min-[841px]:hover:text-cyan-300'>
                        <Link href="#projects" onClick={() => setShowNav(!showNav)}>
                            Projects
                        </Link>
                    </li>

                    <li className='text-xl min-[841px]:text-[18px] lg:text-xl font-mono text-cyan-300 hover:text-cyan-50 hover:font-bold hover:text-[22px] min-[841px]:text-cyan-50 min-[841px]:hover:text-cyan-300'>
                        <Link href="#services" onClick={() => setShowNav(!showNav)}>
                            Services
                        </Link>
                    </li>

                    <li className='text-xl min-[841px]:text-[18px] lg:text-xl font-mono text-cyan-300 hover:text-cyan-50 hover:font-bold hover:text-[22px] min-[841px]:text-cyan-50 min-[841px]:hover:text-cyan-300'>
                        <Link href="#contact" onClick={() => setShowNav(!showNav)}>
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className='flex flex-col items-center gap-4'>
                    <Link href="mailto:riteshsoni35468@gmail.com">
                        <h3 className='text-[16px] min-[841px]:text-[14px] lg:text-[16px] font-mono text-cyan-300 hover:text-cyan-50 hover:font-bold hover:bg-cyan-600 border-2 border-cyan-300 rounded-2xl px-4 py-1'>
                            Hire Me
                        </h3>
                    </Link>
                </div>
                
            </div>

            <div className='min-[841px]:hidden text-2xl hover:text-cyan-300 cursor-pointer' onClick={() => setShowNav(!showNav)}>
                <RiMenu3Fill size={30} className='hover:scale-[1.2]' />
            </div>
        </div>
    )
}

export default Header