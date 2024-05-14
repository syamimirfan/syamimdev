import React from 'react'
import {
    AiOutlineGithub,
    AiOutlineLinkedin,
  } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-300 border-0"/>
        <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
            <div className="flex flex-row items-center justify-center space-x-1 text-neutral-400 dark:text-neutral-400">
              {/* 
               &copy; is for ©
               new Date().getFullYear() is for update the year for every year
              */}
               &copy; {new Date().getFullYear()} Muhamad Syamim Irfan <a href="/" className="hover:underline"></a>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2 mb-1">
                <a href="https://github.com/syamimirfan" rel="noreferer" target='_blank'>
                    <AiOutlineGithub 
                     size={30}
                     className="hover: translate-y-1 transition-transform cursor-pointer text-neutral-400 dark:text-neutral-100"
                    />
                </a>
                <a href="https://www.linkedin.com/in/syamim-irfan-8a84151ba/" rel="noreferer" target='_blank'>
                    <AiOutlineLinkedin 
                     size={30}
                     className="hover: translate-y-1 transition-transform cursor-pointer text-neutral-400 dark:text-neutral-100"
                    />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
