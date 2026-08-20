
function About() {
  return (
    <div id="about" className='w-full px-4 min-[371px]:px-8 xl:px-12 py-10 min-[671px]:py-20 xl:py-13 grid grid-cols-1 min-[671px]:grid-cols-2 xl:grid-cols-3 gap-9 xl:gap-11 scroll-mt-8'>
        <div className='min-[671px]:order-3 xl:order-2 min-[671px]:col-span-2 xl:col-span-1'>
            <h3 className="text-[15px] min-[571px]:text-[20px] xl:text-[15px] min-[1380px]:text-[18px] font-mono text-cyan-300 mb-1">
                ABOUT ME
            </h3>

            <h1 className="text-[19px] min-[571px]:text-[24px] xl:text-[19px] min-[1380px]:text-[22px] font-mono font-semibold text-cyan-50 mb-3">
                CRAFTING WEB EXPERIENCES <br /> WITH 
                <span className="text-cyan-300"> CODE</span> &
                <span className="text-fuchsia-400"> CREATIVITY</span>
            </h1>

            <p className="text-[12px] min-[571px]:text-[17px] xl:text-[12px] min-[1380px]:text-[15px] font-mono text-gray-300">
                I’m Ritesh, a Frontend Developer focused on creating
                modern, responsive, and engaging web applications. <br /> 

                I love transforming ideas and designs into functional
                digital experiences using React.js, Next.js, JavaScript,
                and Tailwind CSS. <br />

                I’m constantly learning, experimenting with new technologies,
                and improving my skills to build better products.
            </p>
        </div>
            
        <div className='flex flex-col min-[671px]:order-2 xl:order-3 text-gray-300 font-mono text-end min-[671px]:text-start min-[671px]:justify-center xl:justify-end'>
            <h3 className="font-bold text-[13px] min-[471px]:text-[16px] min-[671px]:text-[15px] min-[771px]:text-[18px] min-[871px]:text-[21px] min-[1071px]:text-[25px] min-[1171px]:text-[30px] xl:text-[18px] 2xl:text-[22px]">
                Name:
                <span className="font-light ml-2"> Ritesh Soni</span>
            </h3>

            <h3 className="font-bold text-[13px] min-[471px]:text-[16px] min-[671px]:text-[15px] min-[771px]:text-[18px] min-[871px]:text-[21px] min-[1071px]:text-[25px] min-[1171px]:text-[30px] xl:text-[18px] 2xl:text-[22px]">
                Email:
                <span className="font-light ml-2"> riteshsoni35468@gmail.com</span>
            </h3>

            <h3 className="font-bold text-[13px] min-[471px]:text-[16px] min-[671px]:text-[15px] min-[771px]:text-[18px] min-[871px]:text-[21px] min-[1071px]:text-[25px] min-[1171px]:text-[30px] xl:text-[18px] 2xl:text-[22px]">
                Education: 
                <span className="font-light ml-2"> BCA</span>
            </h3>

            <h3 className="font-bold text-[13px] min-[471px]:text-[16px] min-[671px]:text-[15px] min-[771px]:text-[18px] min-[871px]:text-[21px] min-[1071px]:text-[25px] min-[1171px]:text-[30px] xl:text-[18px] 2xl:text-[22px]">
                Location:
                <span className="font-light ml-2"> Uttar Pradesh, India</span>
            </h3>

            <h3 className="font-bold text-[13px] min-[471px]:text-[16px] min-[671px]:text-[15px] min-[771px]:text-[18px] min-[871px]:text-[21px] min-[1071px]:text-[25px] min-[1171px]:text-[30px] xl:text-[18px] 2xl:text-[22px]">
                Focus:
                <span className="font-light ml-2"> Web Development</span>
            </h3>

            <h3 className="font-bold text-[13px] min-[471px]:text-[16px] min-[671px]:text-[15px] min-[771px]:text-[18px] min-[871px]:text-[21px] min-[1071px]:text-[25px] min-[1171px]:text-[30px] xl:text-[18px] 2xl:text-[22px]">
                Availability:
                <span className="font-light ml-2"> Open for Opportunities</span>
            </h3>
        </div>

        <div className='min-[671px]:order-1 border border-cyan-900 rounded-2xl overflow-hidden'>
            <img src="/about-image.png" alt="image" />
        </div>
    </div>
  )
}

export default About