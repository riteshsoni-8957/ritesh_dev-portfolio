import React from 'react'

// technologies skills data
const technologies = [
    {name: "HTML", level: 95},
    {name: "CSS", level: 90},
    {name: "JavaScript", level: 85},
    {name: "React.js", level: 80},
    {name: "Next.js", level: 85},
    {name: "Tailwind css", level: 90}
]

// tools and development skills data
const tools = [
    {name: "Git & GitHub", level: 90},
    {name: "VS Code", level: 95},
    {name: "Netlify", level: 80},
]

// data and analytics skills data
const analytics = [
    {name: "Excel", level: 90},
    {name: "SQL", level: 85},
    {name: "Power BI", level: 95},
    {name: "Power Query", level: 90},
    {name: "Data Cleaning", level: 95},
]

function Skills() {
  return (
    <div id='skills' className='w-full px-4 min-[371px]:px-8 xl:px-12 py-10 min-[671px]:py-20 xl:py-13 grid grid-cols-1 min-[671px]:grid-cols-2 gap-9 lg:gap-16 xl:gap-22 scroll-mt-8'>
        <div className='min-[671px]:row-span-2 flex flex-col min-[671px]:justify-center'>
            <h3 className='text-[13px] min-[371px]:text-[17px] min-[571px]:text-[20px] min-[671px]:text-[15px] min-[871px]:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] font-mono text-cyan-300 mb-1'>
                MY SKILLS
            </h3>
            <h1 className='text-[18px] min-[371px]:text-[22px] min-[471px]:text-[26px] min-[571px]:text-[30px] min-[671px]:text-[20px] min-[871px]:text-[23px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] font-semibold mb-1'>
                Technologies  
                <span className='text-fuchsia-400'> I Work With</span>
            </h1>

            <div className='w-full pl-4 min-[371px]:pl-6'>
                {
                    technologies.map((skill) => {
                        return (
                            <div key={skill.name} className='flex flex-row justify-between items-center gap-4 min-[471px]:gap-6'>
                                <h3 className='w-20 min-[471px]:w-25 min-[571px]:w-30 min-[671px]:w-20 lg:w-28 min-[471px]:text-[18px] min-[571px]:text-[20px] min-[671px]:text-[16px] lg:text-[20px] xl:text-[16px]'>
                                    {skill.name}
                                </h3>

                                <div className='flex-1 h-1 bg-gray-300/30 rounded-full overflow-hidden'>
                                    <div
                                        className='h-full 
                                        bg-gradient-to-r from-cyan-300 to-fuchsia-600'
                                        style={{width: `${skill.level}%`}}
                                    >
                                    </div>
                                </div>

                                <h3 className='min-[471px]:text-[18px] min-[571px]:text-[20px] min-[671px]:text-[16px] lg:text-[20px] xl:text-[16px]'>
                                    {skill.level}%
                                </h3>
                            </div>
                        )
                        
                    })
                }
            </div>
        </div>

        <div>
            <h1 className='text-[18px] min-[371px]:text-[22px] min-[471px]:text-[26px] min-[571px]:text-[30px] min-[671px]:text-[20px] min-[871px]:text-[23px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] font-semibold mb-1'>
                Tools & Development
            </h1>

            <div className='w-full pl-4 min-[371px]:pl-6'>
                {
                    tools.map((skill) => {
                        return (
                            <div key={skill.name} className='flex flex-row justify-between items-center gap-4 min-[471px]:gap-6'>
                                <h3 className='w-20 min-[471px]:w-25 min-[571px]:w-30 min-[671px]:w-20 lg:w-28 min-[471px]:text-[18px] min-[571px]:text-[20px] min-[671px]:text-[16px] lg:text-[20px] xl:text-[16px]'>
                                    {skill.name}
                                </h3>

                                <div className='flex-1 h-1 bg-gray-300/30 rounded-full overflow-hidden'>
                                    <div
                                        className='h-full 
                                        bg-gradient-to-r from-cyan-300 to-fuchsia-600'
                                        style={{width: `${skill.level}%`}}
                                    >
                                    </div>
                                </div>

                                <h3 className='min-[471px]:text-[18px] min-[571px]:text-[20px] min-[671px]:text-[16px] lg:text-[20px] xl:text-[16px]'>
                                    {skill.level}%
                                </h3>
                            </div>
                        )
                        
                    })
                }
            </div>
        </div>

        <div>
            <h1 className='text-[18px] min-[371px]:text-[22px] min-[471px]:text-[26px] min-[571px]:text-[30px] min-[671px]:text-[20px] min-[871px]:text-[23px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] font-semibold mb-1'>
                Data & Analytics
            </h1>

            <div className='w-full pl-4 min-[371px]:pl-6'>
                {
                    analytics.map((skill) => {
                        return (
                            <div key={skill.name} className='flex flex-row justify-between items-center gap-4 min-[471px]:gap-6'>
                                <h3 className='w-20 min-[471px]:w-25 min-[571px]:w-30 min-[671px]:w-20 lg:w-28 min-[471px]:text-[18px] min-[571px]:text-[20px] min-[671px]:text-[16px] lg:text-[20px] xl:text-[16px]'>
                                    {skill.name}
                                </h3>

                                <div className='flex-1 h-1 bg-gray-300/30 rounded-full overflow-hidden'>
                                    <div
                                        className='h-full 
                                        bg-gradient-to-r from-cyan-300 to-fuchsia-600'
                                        style={{width: `${skill.level}%`}}
                                    >
                                    </div>
                                </div>

                                <h3 className='min-[471px]:text-[18px] min-[571px]:text-[20px] min-[671px]:text-[16px] lg:text-[20px] xl:text-[16px]'>
                                    {skill.level}%
                                </h3>
                            </div>
                        )
                        
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Skills