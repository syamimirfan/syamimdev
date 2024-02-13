import React from 'react'
import Image from "next/image"
import Link  from 'next/link'
import { FaGithub, FaLinkedin  } from "react-icons/fa"
import { MdOutlineAttachEmail } from "react-icons/md";
import {HiArrowDown} from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
        <div className="flex flex-col text-center items-center justify-center my-8 py-24 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
           <div className="md:w-1/2 md:mt-2">
               <Image className="rounded-full shadow-2xl" src="/assets/syamim.png" alt="syamim.png" width={300} height={300}/>
           </div>
           <div className="md:mt-2 md:w-3/5">
              <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
                 SyamimDev
              </h1>
              <p className="text-lg mt-4 mb-6 md:text-1xl">
                I&#39;m a {" "} 
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"> Software Engineer </span>
                based in Malaysia. I bring innovative solutions to life  through code,
                transforming ideas into powerful and efficient software experiences.
              </p>
              <div className="flex flex-row space-x-2 mb-1 justify-center md:justify-start"> 
              <Link
               href='https://github.com/syamimirfan'
               target='_blank'             
              >
               <FaGithub size={40} className="hover:translate-y-1 transition-transform cursor-pointer"/>
              </Link>
              <Link
               href='https://www.linkedin.com/in/syamim-irfan-8a84151ba/'
               target='_blank'             
              >
               <FaLinkedin size={40} className="hover:translate-y-1 transition-transform cursor-pointer"/>
              </Link>
              <Link
               href='mailto:syamimirfan59@gmail.com'
               target='_blank'             
              >
               <MdOutlineAttachEmail size={40} className="hover:translate-y-1 transition-transform cursor-pointer"/>
              </Link>
              </div>
           </div>
        </div>
         <div className="flex flex-row justify-center">
         <HiArrowDown size={40} className="animate-bounce" />
         </div>
    </section>
  )
}

export default HeroSection
