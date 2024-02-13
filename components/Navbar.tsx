"use client" //this is a client component
import React, { useState } from 'react'
import Link  from 'next/link'
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunFill, RiVerifiedBadgeFill } from 'react-icons/ri'
import { IoMdMenu, IoMdClose } from 'react-icons/io'

interface NavItem {
    label: string
    URL: string
}

const nav_item: Array<NavItem> = [
    {
        label: "Home",
        URL: "/"
    },
    {
        label: "About",
        URL: "/AboutSection"
    },
]

const Navbar = () => {
const { systemTheme, theme, setTheme } = useTheme()
const currentTheme = theme === "system" ? systemTheme : theme
const [navbar,setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
        <div className="justify-between md:items-center md:flex">
            <div>
                <div className="flex items-center justify-between py-3">
                    <Link href='/' className="cursor-pointer">
                    <div className="md:py-5 flex items-center justify-between">
                        <h1 className="text-2xl font-bold">SyamimDev</h1>
                        <i className="text-2xl text-blue-500 ">
                            <RiVerifiedBadgeFill />
                        </i>
                    </div>
                    </Link>
                    <div className="md:hidden">
                    <button onClick={() => setNavbar(!navbar)}>
                        {navbar ? <IoMdClose size={30}/> :  <IoMdMenu size={30}/>}
                    </button>
                 </div>
              </div>
            </div>
        <div>
        <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
             navbar ? "block" : "hidden"
          }`}>
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {nav_item.map((item, idx) => {
                    return (
                        <Link 
                         key={idx} 
                         href={item.URL}              
                         className={
                         "block lg:inline-block text-neutral-900  dark:hover:text-neutral-400  hover:text-neutral-400 dark:text-neutral-100"
                         }
                         onClick={() => setNavbar(!navbar)}
                        >{item.label}
                        </Link>
                    ) 
                })}
                {currentTheme === "dark" ? (
                    <button onClick={() => setTheme("light")}
                     className="bg-slate-100 p-2 rounded-xl"
                    >
                     <RiSunFill size={25} color="black"/>
                    </button>
                ) : (
                    <button onClick={() => setTheme("dark")}
                     className="bg-slate-100 p-2 rounded-xl"
                    >
                     <RiMoonFill size={25}/>
                    </button>
                )}
                
             </div>
          </div>
        </div>
        </div>
    </header>
  )
}

export default Navbar
