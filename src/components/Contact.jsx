"use client"
import { FaPhoneAlt } from 'react-icons/fa'
import { IoLocation } from 'react-icons/io5'
import { MdEmail, MdEventAvailable } from 'react-icons/md'

function Contact() {
  return (
    <div id='contact' className='grid grid-cols-1 min-[671px]:grid-cols-2 lg:grid-cols-3 w-full px-4 min-[371px]:px-8 xl:px-12 py-10 min-[671px]:py-20 xl:py-13 gap-9 xl:gap-16 2xl:gap-22 scroll-mt-12'>
        <div className='flex flex-col gap-3 justify-center'>
            <h3 className='text-[12px] min-[471px]:text-[15px] min-[671px]:text-[12px] min-[871px]:text-[15px] lg:text-[18px] xl:text-[21px] font-mono tracking-[1px] text-cyan-300'>
                GET IN TOUCH
            </h3>

            <h1 className='leading-none text-[24px] min-[471px]:text-[28px] min-[671px]:text-[24px] min-[871px]:text-[28px] lg:text-[28px] xl:text-[32px] font-semibold'>
                Let&apos;s Build Something <br />
                <span className='text-cyan-400'> Amazing</span>
                <span className='text-fuchsia-400'> Together</span>
            </h1>
            <p className='text-[10px] min-[471px]:text-[13px] min-[671px]:text-[10px] min-[871px]:text-[13px] lg:text-[11px] xl:text-[14px] font-mono font-light text-gray-300'>
                Have a project in mind or want to collobrate? <br />
                Feel free to reach out, i&apos;ll get back to you!
            </p>
        </div>

        <div className='w-full rounded-[10px] border border-cyan-200/20 bg-[#01041a] p-3 sm:p-4 lg:p-5 shadow-[0_0_30px_rgba(34,211,238,0.05)] transition-all duration-300 hover:border-cyan-400/40]'>
            <form 
                action="https://api.web3forms.com/submit" 
                method="POST"
                onSubmit={async (e) => {
                    const form = e.currentTarget;
                    const formData = new FormData(form);

                    const response = await fetch(
                        "https://api.web3forms.com/submit",
                        {
                            method: "POST",
                            body: formData,
                        }
                    );

                    const result = await response.json();

                    if (result.success) {
                        form.reset();
                    }
                }}
                className='flex flex-col gap-2'
            >
                <input type="hidden" name="access_key" value="5abad0b2-b185-42fe-a6c3-493532231ab9"></input>

                <div className='flex gap-2 w-full'>
                    <input 
                        type="text"
                        placeholder='Your Name'
                        name='Name'
                        className='border border-gray-600 rounded-[5px] px-3 py-1 text-gray-50 w-[50%] focus:border-cyan-600 outline-none placeholder:font-semibold'
                        required 
                    />
                    <input
                        type="email"
                        placeholder='Your Email'
                        name='Email'
                        className='border border-gray-600 rounded-[5px] px-3 py-1 text-gray-50 w-[50%] focus:border-cyan-600 outline-none placeholder:font-semibold'
                        required
                    />
                </div>

                <input
                    type="tel"
                    placeholder='Your Phone Number'
                    name='Phone'
                    className='border border-gray-600 rounded-[5px] px-3 py-1 text-gray-50 focus:border-cyan-600 outline-none placeholder:font-semibold'
                    minLength={10}
                    maxLength={10}
                    required 
                />

                <input 
                    type="text"
                    placeholder='Subject'
                    name='Subject'
                    className='border border-gray-600 rounded-[5px] px-3 py-1 text-gray-50 focus:border-cyan-600 outline-none placeholder:font-semibold'
                    required 
                />

                <textarea
                    name="Message" 
                    id="" 
                    placeholder='Your Message'
                    className='border border-gray-600 rounded-[5px] px-3 py-1 text-gray-50 w-full h-20 resize-none scrollbar-none focus:border-cyan-600 outline-none placeholder:font-semibold'
                    minLength={50}
                    required    
                ></textarea>

                <button 
                    type='submit'
                    className='bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:bg-gradient-to-r hover:from-purple-700 hover:to-fuchsia-600 text-gray-50 font-bold text-[16px] py-2 rounded-[10px] '
                >
                    Send Message
                </button>
            </form>
        </div>

        <div className='min-[671px]:col-span-2 lg:col-span-1 min-[671px]:mx-auto lg:mx-0 flex flex-col gap-3 justify-center'>
            <div className='flex items-center gap-4'>
                <div className='border-2 rounded-full p-2 border-gray-500 bg-gray-900'>
                    <MdEmail className='text-fuchsia-500 text-2xl'/>
                </div>
                <div className='flex flex-col'>
                    <h1 className='font-semibold min-[671px]:text-xl lg:text-[16px]'>Email</h1>
                    <p className='min-[671px]:text-xl lg:text-[16px]'>riteshsoni35468@gmail.com</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='border-2 rounded-full p-2 border-gray-500 bg-gray-900'>
                    <FaPhoneAlt  className='text-fuchsia-500 text-2xl'/>
                </div>

                <div className='flex flex-col'>
                    <h1 className='font-semibold min-[671px]:text-xl lg:text-[16px]'>Phone</h1>
                    <p className='min-[671px]:text-xl lg:text-[16px]'>+91 9336675791</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='border-2 rounded-full p-2 border-gray-500 bg-gray-900'>
                    <IoLocation  className='text-fuchsia-500 text-2xl'/>
                </div>

                <div className='flex flex-col'>
                    <h1 className='font-semibold min-[671px]:text-xl lg:text-[16px]'>Location</h1>
                    <p className='min-[671px]:text-xl lg:text-[16px]'>India</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='border-2 rounded-full p-2 border-gray-500 bg-gray-900'>
                    <MdEventAvailable  className='text-fuchsia-500 text-2xl'/>
                </div>

                <div className='flex flex-col'>
                    <h1 className='font-semibold min-[671px]:text-xl lg:text-[16px]'>Availability</h1>
                    <p className='min-[671px]:text-xl lg:text-[16px]'>Open for Opportunities</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact