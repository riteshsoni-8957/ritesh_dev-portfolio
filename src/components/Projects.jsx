"use client"
import React, { useEffect, useState, useTransition } from 'react'
import projectsData from '../data/projects.json'

function Projects() {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState("all");
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(() => {
            setProjects(projectsData);
        })
    }, [])
    console.log("projects" , projects);

    const filterdProjects = projects.filter((project) => {
        if(filter === "all"){
            return projects;
        }
        else {
            return project.category.toLowerCase() === filter.toLowerCase();
        }
    })
    console.log("filterd projects : " , filterdProjects)

    return (
        <div id='projects' className='w-full flex flex-col px-4 min-[371px]:px-8 xl:px-12 py-10 min-[671px]:py-20 xl:py-13 gap-9 xl:gap-11 scroll-mt-12'>
            <div className='w-full flex flex-col min-[671px]:flex-row gap-4 min-[671px]:gap-15 min-[771px]:gap-35 lg:gap-60 xl:gap-80 2xl:gap-100'>
                <div className=''>
                    <h3 className='text-[12px] min-[471px]:text-[15px] min-[671px]:text-[12px] min-[871px]:text-[15px] lg:text-[18px] xl:text-[21px] font-mono tracking-[1px] text-cyan-300'>
                        MY WORK
                    </h3>
                    <h1 className='text-[22px] min-[471px]:text-[28px] min-[571px]:text-[34px] min-[671px]:text-[28px] min-[871px]:text-[30px] lg:text-[32px] xl:text-[34px] 2xl:text-[38px] font-semibold'>
                        Features 
                        <span className='text-cyan-300'> Projects</span>
                    </h1>
                </div>

                <div className='flex flex-row items-end gap-3 min-[671px]:gap-5 min-[871px]:gap-15'>
                    <button 
                        className={`border hover:border-cyan-300 hover:bg-cyan-200/20 rounded-[5px] min-[471px]:rounded-[7px] px-2 py-1 min-[371px]:px-4 min-[471px]:px-6 min-[671px]:px-4 min-[971px]:px-6 xl:px-8 min-[371px]:text-[14px] min-[471px]:text-[16px] min-[671px]:text-[14px] min-[871px]:text-[16px] xl:text-[18px]  ${filter === "all" ? "bg-cyan-200/20 border-cyan-300" : "border-cyan-400/30"} `}  
                        onClick={() => setFilter("all")}
                    >
                        All
                    </button>

                    <button 
                        className={`border hover:border-cyan-300 hover:bg-cyan-200/20 rounded-[5px] min-[471px]:rounded-[7px] px-2 py-1 min-[371px]:px-4 min-[471px]:px-6 min-[671px]:px-4 min-[971px]:px-6 xl:px-8 min-[371px]:text-[14px] min-[471px]:text-[16px] min-[671px]:text-[14px] min-[871px]:text-[16px] xl:text-[18px]  ${filter === "web app" ? "bg-cyan-200/20 border-cyan-300" : "border-cyan-400/30"} `}  
                        onClick={() => setFilter("web app")}
                    >
                        Web Apps
                    </button>

                    <button 
                        className={`border hover:border-cyan-300 hover:bg-cyan-200/20 rounded-[5px] min-[471px]:rounded-[7px] px-2 py-1 min-[371px]:px-4 min-[471px]:px-6 min-[671px]:px-4 min-[971px]:px-6 xl:px-8 min-[371px]:text-[14px] min-[471px]:text-[16px] min-[671px]:text-[14px] min-[871px]:text-[16px] xl:text-[18px]  ${filter === "dashboard" ? "bg-cyan-200/20 border-cyan-300" : "border-cyan-400/30"} `}  
                        onClick={() => setFilter("dashboard")}
                    >
                        Dashboards
                    </button>
                </div>
            </div>

            <div className='w-full px-4 min-[471px]:px-8 min-[571px]:px-12 min-[671px]:px-0 py-0 lg:py-5 grid grid-cols-1 min-[671px]:grid-cols-2 lg:grid-cols-3 gap-9 xl:gap-11'>
                {
                    filterdProjects.map((project) => {
                        return (
                            <div key={project.id} className="sticky top-20 sm:top-24 lg:top-[150px] w-full overflow-hidden rounded-2xl border border-cyan-200/20 bg-[#01041a] p-3 sm:p-4 lg:p-5 shadow-[0_0_30px_rgba(34,211,238,0.05)] transition-all duration-300 hover:border-cyan-400/40">
                                <div className="overflow-hidden rounded-xl">
                                    <img src={project.image} alt={project.title} className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-105" />
                                </div>

                                <div className="flex flex-col pt-4 sm:pt-5">
                                    <h2 className="mb-1 text-base font-bold text-white sm:text-lg">
                                        {project.title}
                                    </h2>

                                    <p className="mb-4 text-xs font-light leading-relaxed text-slate-400 sm:text-sm">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="rounded-md border border-purple-400/50 px-3 py-1.5 text-xs text-purple-300 transition-all duration-300 hover:border-purple-400 hover:bg-purple-400/10 hover:text-white sm:text-sm">
                                            GitHub Repo
                                        </a>

                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="rounded-md border border-cyan-400/50 px-4 py-1.5 text-xs text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-white sm:text-sm">
                                            Live Demo ↗
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Projects