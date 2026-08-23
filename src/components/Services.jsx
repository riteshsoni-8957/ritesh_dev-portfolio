import React from 'react'
import ServicesData from '../data/services.json'
import {FaCode, FaChartLine, FaDatabase} from "react-icons/fa";

function Services() {
  return (
    <div id='services' className='w-full flex flex-col px-4 min-[371px]:px-8 py-10 min-[671px]:py-20 xl:py-13 scroll-mt-12'>
      <h3 className='text-[12px] min-[471px]:text-[15px] min-[671px]:text-[12px] min-[871px]:text-[15px] lg:text-[18px] xl:text-[21px] font-mono tracking-[1px] text-cyan-300'>
        WHAT I OFFER
      </h3>

      <h1 className='text-[22px] min-[471px]:text-[28px] min-[571px]:text-[34px] min-[671px]:text-[28px] min-[871px]:text-[30px] lg:text-[32px] xl:text-[34px] 2xl:text-[38px] font-semibold'>
        Services That I 
        <span className='text-cyan-300'> Provide </span>
      </h1>

      <div className='w-full px-4 min-[471px]:px-8 min-[571px]:px-12 min-[671px]:px-0 py-10 grid grid-cols-1 min-[671px]:grid-cols-2 lg:grid-cols-3 gap-9 xl:gap-11'>
        {
          ServicesData.map((service) => {
            return (
              <div key={service.id} className="w-full rounded-2xl border border-cyan-200/20 bg-[#01041a] p-3 sm:p-4 lg:p-5 shadow-[0_0_30px_rgba(34,211,238,0.05)] transition-all duration-300 hover:border-cyan-400/40">
                <h1 className='mb-2 text-base font-bold text-white sm:text-lg'>
                  {service.title}
                </h1>
                <p className="mb-4 text-xs font-light leading-relaxed text-slate-400 sm:text-sm">
                  {service.description}
                </p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Services