"use client"
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { RiMenu3Fill } from 'react-icons/ri';


function Header() {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className='flex items-center justify-between relative px-4 min-[371px]:px-8 py-3 border-b-2 border-gray-700 '>
            <div className='text-[23px] min-[841px]:text-[21px] xl:text-[25px] min-[841px]:text-[22px] font-bold font-mono tracking-[3px]'>
                RITESH 
                <span className='text-cyan-300'>_DEV</span>
            </div>

            <div className={`${showNav ? 'flex' : 'hidden'} z-2000 min-[841px]:flex absolute min-[841px]:static top-0 right-0 bottom-0 h-screen min-[841px]:h-auto w-[250px] min-[841px]:w-auto bg-[#111a34] min-[841px]:bg-transparent flex-col min-[841px]:flex-row justify-center gap-6 min-[841px]:gap-5 lg:gap-8 xl:gap-11 shadow-xl `}>
                <div className='min-[841px]:hidden text-2xl text-white hover:text-cyan-300 cursor-pointer absolute top-4 right-4' onClick={() => setShowNav(!showNav)}>
                    <IoClose size={30} className='hover:scale-[1.3]' />
                </div>

                <ul className='flex flex-col gap-4 min-[841px]:gap-5 lg:gap-8 xl:gap-11 items-center min-[841px]:flex-row'>
                    <li className='text-xl min-[841px]:text-[18px] lg:text-xl font-mono text-cyan-300 hover:text-cyan-50 hover:font-bold hover:text-[22px] min-[841px]:text-cyan-50 min-[841px]:hover:text-cyan-300'>Home</li>
                    <li className='text-xl min-[841px]:text-[18px] lg:text-xl font-mono text-cyan-300 hover:text-cyan-50 hover:font-bold hover:text-[22px] min-[841px]:text-cyan-50 min-[841px]:hover:text-cyan-300'>About</li>
                    <li className='text-xl min-[841px]:text-[18px] lg:text-xl font-mono text-cyan-300 hover:text-cyan-50 hover:font-bold hover:text-[22px] min-[841px]:text-cyan-50 min-[841px]:hover:text-cyan-300'>Skills</li>
                    <li className='text-xl min-[841px]:text-[18px] lg:text-xl font-mono text-cyan-300 hover:text-cyan-50 hover:font-bold hover:text-[22px] min-[841px]:text-cyan-50 min-[841px]:hover:text-cyan-300'>Projects</li>
                    <li className='text-xl min-[841px]:text-[18px] lg:text-xl font-mono text-cyan-300 hover:text-cyan-50 hover:font-bold hover:text-[22px] min-[841px]:text-cyan-50 min-[841px]:hover:text-cyan-300'>Services</li>
                    <li className='text-xl min-[841px]:text-[18px] lg:text-xl font-mono text-cyan-300 hover:text-cyan-50 hover:font-bold hover:text-[22px] min-[841px]:text-cyan-50 min-[841px]:hover:text-cyan-300'>Contact</li>
                </ul>

                <div className='flex flex-col items-center gap-4'>
                    <h3 className='text-[16px] min-[841px]:text-[14px] lg:text-[16px] font-mono text-cyan-300 hover:text-cyan-50 hover:font-bold hover:text-[18px] hover:bg-cyan-600 border-2 border-cyan-300 rounded-2xl px-4 py-1'>Hire Me</h3>
                </div>
                
            </div>

            <div className='min-[841px]:hidden text-2xl text-white hover:text-cyan-300 cursor-pointer' onClick={() => setShowNav(!showNav)}>
                <RiMenu3Fill size={30} className='hover:scale-[1.2]' />
            </div>
        </div>
    )
}

export default Header