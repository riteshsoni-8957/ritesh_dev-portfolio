import Link from 'next/link'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className='w-full px-4 min-[371px]:px-8 xl:px-12 pt-10 min-[671px]:pt-20 xl:pt-13 pb-3 flex flex-col border-t border-t-gray-700 rounded-[30px] bg-[#00020f] shadow-[0_0_15px_rgba(34,211,238,0.15)] gap-9'>
        <div className='grid grid-cols-1 min-[671px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 min-[671px]:gap-12'>
            <div className='flex flex-col gap-1'>
                <h3 className='text-xl min-[471px]:text-3xl  font-semibold font-mono text-cyan-300'>
                    Quick Links
                </h3>
                <ul className='flex flex-col'>
                    <li className='text-[18px] min-[471px]:text-[25px] font-mono'>
                        <Link href='#' className='inline-block text-gray-400 hover:text-gray-100 hover:translate-x-2 hover:duration-200'>
                            Home
                        </Link>
                    </li>

                    <li className='text-[18px] min-[471px]:text-[25px] font-mono'>
                        <Link href='#about' className='inline-block text-gray-400 hover:text-gray-100 hover:translate-x-2 hover:duration-200'>
                            About
                        </Link>                        
                    </li>

                    <li className='text-[18px] min-[471px]:text-[25px] font-mono'>
                        <Link href='#skills' className='inline-block text-gray-400 hover:text-gray-100 hover:translate-x-2 hover:duration-200'>
                            Skills
                        </Link>                        
                    </li>


                    <li className='text-[18px] min-[471px]:text-[25px] font-mono'>
                        <Link href='#projects' className='inline-block text-gray-400 hover:text-gray-100 hover:translate-x-2 hover:duration-200'>
                            Projects
                        </Link>                        
                    </li>

                    <li className='text-[18px] min-[471px]:text-[25px] font-mono'>
                        <Link href='#services' className='inline-block text-gray-400 hover:text-gray-100 hover:translate-x-2 hover:duration-200'>
                            Services
                        </Link>                        
                    </li>

                    <li className='text-[18px] min-[471px]:text-[25px] font-mono'>
                        <Link href='#contact' className='inline-block text-gray-400 hover:text-gray-100 hover:translate-x-2 hover:duration-200'>
                            Contcact
                        </Link>                        
                    </li>
                </ul>
            </div>

            <div className='flex flex-col gap-1'>
                <h3 className='text-xl min-[471px]:text-3xl  font-semibold font-mono text-cyan-300'>
                    Services
                </h3>
                <ul className='flex flex-col'>
                    <li className='text-[18px] min-[471px]:text-[25px] font-mono'>
                        <Link href='' className='inline-block text-gray-400 hover:text-gray-100 hover:translate-x-2 hover:duration-200'>
                            Frontend Development
                        </Link>                        
                    </li>

                    <li className='text-[18px] min-[471px]:text-[25px] font-mono'>
                        <Link href='' className='inline-block text-gray-400 hover:text-gray-100 hover:translate-x-2 hover:duration-200'>
                            Dashboard creation
                        </Link>                        
                    </li>

                    <li className='text-[18px] min-[471px]:text-[25px] font-mono'>
                        <Link href='' className='inline-block text-gray-400 hover:text-gray-100 hover:translate-x-2 hover:duration-200'>
                            Data Analysis
                        </Link>                        
                    </li>
                </ul>
            </div>

            <div className='flex flex-col gap-1'>
                <h3 className='text-xl min-[471px]:text-3xl  font-semibold font-mono text-cyan-300'>
                    Resources
                </h3>
                <ul className='flex flex-col'> 
                    <li className='text-[18px] min-[471px]:text-[25px] font-mono'>
                        <Link href='' className='inline-block text-gray-400 hover:text-gray-100 hover:translate-x-2 hover:duration-200'>
                            Blog
                        </Link>                        
                    </li>

                    <li className='text-[18px] min-[471px]:text-[25px] font-mono'>
                        <Link href='' className='inline-block text-gray-400 hover:text-gray-100 hover:translate-x-2 hover:duration-200'>
                            Case Study
                        </Link>                        
                    </li>

                    <li className='text-[18px] min-[471px]:text-[25px] font-mono'>
                        <Link href='' className='inline-block text-gray-400 hover:text-gray-100 hover:translate-x-2 hover:duration-200'>
                            Resume
                        </Link>
                    </li>

                    <li className='text-[18px] min-[471px]:text-[25px] font-mono'>
                        <Link href='' className='inline-block text-gray-400 hover:text-gray-100 hover:translate-x-2 hover:duration-200'>
                            Privacy Policy
                        </Link>
                    </li>

                    <li className='text-[18px] min-[471px]:text-[25px] font-mono'>
                        <Link href='' className='inline-block text-gray-400 hover:text-gray-100 hover:translate-x-2 hover:duration-200'>
                            Terms & Conditions
                        </Link>                        
                    </li>
                </ul>
            </div>

            <div className='flex flex-col gap-1'>
                <h3 className='text-xl min-[471px]:text-3xl  font-semibold font-mono text-cyan-300'>
                    Contact
                </h3>
                <ul className='flex flex-col'>
                    <li className='text-[14px] min-[471px]:text-[20px] min-[671px]:text-[18px] font-mono'>
                        <Link href='mailto:riteshsoni35468@gmail.com' className='items-center gap-2 inline-flex text-gray-400 hover:text-gray-100 hover:translate-x-2 hover:duration-200'>
                            <MdEmail />
                            riteshsoni35468@gmail.com
                        </Link>                        
                    </li>

                    <li className='text-[18px] min-[471px]:text-[25px] font-mono'>
                        <Link href='' className='items-center gap-2 inline-flex text-gray-400 hover:text-gray-100 hover:translate-x-2 hover:duration-200'>
                            <FaPhoneAlt />
                            +91 9336675791
                        </Link>
                    </li>

                    <li className='text-[18px] min-[471px]:text-[25px] font-mono'>
                        <Link href='' className='items-center gap-2 inline-flex text-gray-400 hover:text-gray-100 hover:translate-x-2 hover:duration-200'>
                            <IoLocation />      
                            India
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

        <div className='text-center font-mono text-[11px] min-[671px]:text-[15px] lg:text-xl'>
            &copy; Ritesh_dev. All right reserved
        </div>
    </div>
  )
}

export default Footer