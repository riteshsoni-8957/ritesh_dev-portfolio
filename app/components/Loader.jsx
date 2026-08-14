"use client";

import React, { useEffect, useState } from 'react'

function Loader() {
    const [hide, setHide] = useState(false);
    const [progress, setProgress] = useState(0);

    // Simulate progress
    useEffect(() => {
        let value = 0;

        const interval = setInterval (() => {
            value += Math.floor(Math.random() * 8) + 3;

            if(value >= 100) {
                value = 100;
                clearInterval(interval);

                setTimeout(() => {
                    setHide(true);
                }, 500)
            }

            setProgress(value)
        }, 120)

        return () => clearInterval(interval);
    }, [])

    if(hide) return null;
    // console.log(progress);

    return (
        <div className='fixed insert-0 z-[9999] bg-[#020617] flex items-center justify-center w-full min-h-screen'>
            {/* background glow */}
            <div className='absolute w-[250px] h-[350px] min-[580px]:w-[400px] min-[580px]:h-[400px] min-[680px]:w-[500px] min-[680px]:h-[500px] rounded-full bg-cyan-500/10 blur-[120px]'></div>

            <div className='relative flex flex-col w-full max-w-md items-center justify-center px-[20px] min-[371px]:px-[40px]'>
                {/* logo */}
                <div className='relative h-[102px] w-[102px] flex items-center justify-center mb-6'>
                    {/* outer ring */}
                    <div className='absolute inset-0 rounded-full border-2 border-cyan-500/30 border-t-cyan-500 animate-spin flex items-center justify-center'>
                    </div>

                    {/* inner ring*/}
                    <div className='absolute inset-2 rounded-full border-2 border-cyan-400/30 border-b-cyan-400'>
                    </div>

                    {/* code icon */}
                    <div className='absolute border rounded-xl border-cyan-400/30 p-3'>
                        <span className='text-xl font-bold font-mono text-cyan-400'>
                            &lt;/&gt;
                        </span>
                    </div>
                </div>

                {/* name */}
                <div className='text-3xl font-bold font-mono mb-2 tracking-[3px]'>          
                    RITESH 
                    <span className='text-cyan-300'>_DEV</span>
                </div>

                {/* developer */}
                <div className='text-gray-300 tracking-[6px] text-[11px] mb-8 font-mono'>
                    FRONTEND DEVELOPER
                </div>

                {/* loading text */}
                <div className='flex w-full justify-between mb-2'>
                    <p className='text-[12px] tracking-[1px] text-cyan-300 font-mono'>
                        {progress<100 ? "Initializing Portfolio..." : "Portfolio Ready!"}
                    </p>
                    <p className='font-mono'>
                        {progress}%
                    </p>
                </div>

                {/* progress bar */}
                <div className='w-full h-[8px] rounded-full overflow-hidden bg-cyan-600/35 mb-8'>
                    <div className='h-full bg-gradient-to-r from-cyan-500 to-cyan-500 transition-all duration-200' style={{ width: `${progress}%` }}></div>
                </div>

                {/* bottom text */}
                <div className='text-gray-400 tracking-[4px] text-[8px] min-[371px]:text-[10px]'>
                    BUILDING DIGITAL EXPERIENCES 
                </div>
            </div>
            
        </div>
    )
}

export default Loader