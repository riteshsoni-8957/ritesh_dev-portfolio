import Link from "next/link"
import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Hero() {
  return (
    <div className='w-full px-4 min-[371px]:px-8 xl:px-12 py-10 min-[671px]:py-20 xl:py-13 mt-16 flex flex-col min-[671px]:flex-row gap-9'>
        {/* Hero Details */}
        <div className='w-full flex flex-col justify-center gap-3'>  
            {/* Frontend Developer */}
            <p className='text-[12px] min-[471px]:text-[15px] min-[671px]:text-[12px] min-[871px]:text-[15px] lg:text-[18px] xl:text-[21px] font-mono tracking-[1px] text-cyan-300'>
                FRONTEND DEVELOPER
            </p>

            {/* Building Modern ..... */}
            <h1 className='leading-none text-[26px] min-[471px]:text-[30px] min-[671px]:text-[26px] min-[871px]:text-[30px] lg:text-[35px] xl:text-[40px] font-semibold'>
                Building Modern <br /> 
                <span className='text-cyan-300'>Digital </span> 
                <span className='text-fuchsia-400'>Experiences</span>
            </h1>

            {/* Paragraph */}
            <p className='text-[10px] min-[471px]:text-[13px] min-[671px]:text-[10px] min-[871px]:text-[13px] lg:text-[16px] xl:text-[19px] font-mono font-light text-gray-300'>
                I&apos;m Ritesh Soni, a Frontend Developer focused on creating responsive, interactive and high-performance web applications with React, Next.js and modern technologies.
            </p>

            {/* Buttons */}
            <div className='flex gap-4'>
                <Link href="">
                    <p className='text-[13px] min-[871px]:text-[15px] lg:text-[18px] xl:text-[21px] border border-cyan-100 rounded-[5px] px-4 py-1 bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:bg-gradient-to-r hover:from-purple-700 hover:to-fuchsia-600'>
                        Explore Work
                    </p>
                </Link>

                <Link href="/Ritesh_Soni_Resume.pdf" target="_blank" download>
                    <p className='text-[13px] min-[871px]:text-[15px] lg:text-[18px] xl:text-[21px] border border-cyan-100 rounded-[5px] px-4 py-1 hover:bg-gray-700 flex gap-2 items-center'>
                        Download CV
                        <FaDownload />
                    </p>
                </Link>
            </div>

            {/* Social icons */}
            <div className="flex gap-4 mt-2">
                <Link href="https://github.com/riteshsoni-8957" target="_blank" className="text-[13px] border border-cyan-300 rounded-full p-2 hover:bg-fuchsia-400 hover:text-black hover:scale-[1.2]">
                    <FaGithub />
                </Link>

                <Link href="https://www.linkedin.com/in/ritesh-soni-4939a0270/" target="_blank" className="text-[13px] border border-cyan-300 rounded-full p-2 hover:bg-fuchsia-400 hover:text-black hover:scale-[1.2]">
                    <FaLinkedinIn />
                </Link>

                <Link href="mailto:riteshsoni35468@gmail.com" className="text-[13px] border border-cyan-300 rounded-full p-2 hover:bg-fuchsia-400 hover:text-black hover:scale-[1.2]">
                    <MdEmail />
                </Link>
            </div>
        </div>

        {/* Hero Image */}
        <div className='flex flex-col w-full h-full object-cover'>
            <img src="/hero-image.jpg" alt="image" />

            <div className="flex justify-between border rounded-[10px] px-2.5 xl:px-5 py-1.5 bg-gray-300/5">
                <div className="flex flex-col font-mono">
                    <span className="text-[14px] min-[471px]:text-[17px] min-[671px]:text-[14px] min-[871px]:text-[17px] lg:text-[20px] xl:text-[24px] text-cyan-500 font-semibold">2+</span>
                    <span className="text-[7px] min-[471px]:text-[10px] min-[671px]:text-[7px] min-[871px]:text-[10px] lg:text-[13px] xl:text-[16px] text-cyan-500 font-semibold">Year Experience</span>
                </div>

                <div className="flex flex-col font-mono">
                    <span className="text-[14px] min-[471px]:text-[17px] min-[671px]:text-[14px] min-[871px]:text-[17px] lg:text-[20px] xl:text-[24px] text-purple-500 font-semibold">10+</span>
                    <span className="text-[7px] min-[471px]:text-[10px] min-[671px]:text-[7px] min-[871px]:text-[10px] lg:text-[13px] xl:text-[16px] text-purple-500 font-semibold">Projects Completed</span>
                </div>

                <div className="flex flex-col font-mono">
                    <span className="text-[14px] min-[471px]:text-[17px] min-[671px]:text-[14px] min-[871px]:text-[17px] lg:text-[20px] xl:text-[24px] text-purple-500 font-semibold">15+</span>
                    <span className="text-[7px] min-[471px]:text-[10px] min-[671px]:text-[7px] min-[871px]:text-[10px] lg:text-[13px] xl:text-[16px] text-purple-500 font-semibold">Technologies </span>
                </div>

                <div className="flex flex-col font-mono">
                    <span className="text-[14px] min-[471px]:text-[17px] min-[671px]:text-[14px] min-[871px]:text-[17px] lg:text-[20px] xl:text-[24px] text-purple-500 font-semibold">5+</span>
                    <span className="text-[7px] min-[471px]:text-[10px] min-[671px]:text-[7px] min-[871px]:text-[10px] lg:text-[13px] xl:text-[16px] text-purple-500 font-semibold">Certifications</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero