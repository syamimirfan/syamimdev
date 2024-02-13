import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const experiences = [
    { experience : "HTML" },
    { experience : "CSS" },
    { experience : "Javascript" },
    { experience : "Dart" },
    { experience : "PHP" },
    { experience : "Java" },
    { experience : "C" },
    { experience : "MySQL" },
    { experience : "PostgreSQL" },
    { experience : "Firebase" },
    { experience : "Pocketbase" },
    { experience : "Xampp" },
    { experience : "Docker" },
    { experience : "PuTTY" },
    { experience : "VS Code" },
    { experience : "Android Studio" },
    { experience : "Figma" },
    { experience : "RESTful API" },
    { experience : "Git" },
    { experience : "Github" },
    { experience : "Flutter" },
    { experience : "Node.js" },
    { experience : "React.js" },
    { experience : "Bootstrap" },
    { experience : "Web 3.0" },
    { experience : "Blockchain" },
    { experience : "R3 Corda" },
    { experience : "Solidity" },
    { experience : "Ethereum" },
    { experience : "Smart Contracts" },
]

const learning = [
    { learning: "C#" },
    { learning: "Python" },
    { learning: "Kotlin" },
    { learning: "C++" },
    { learning: "AI" },
    { learning: "Next.js" },
    { learning: "Next Auth" },
    { learning: "Tailwind" },
    { learning: "Laravel" },
    { learning: "Django" },
    { learning: "Android & iOS Development" },
    { learning: "HarmonyOS" },
    { learning: "ASP.NET" },
    { learning: "ASP.NETCORE" },
    { learning: "Spring boot" },
    { learning: "ORM" },
    { learning: "Jira" },
    { learning: "Kubernetes" },
    { learning: "GCP" },
    { learning: "AWS" },
    { learning: "Azure" },
    { learning: "DigitalOcean" },
]

const About_Section = () => {
  return ( 
    <section id="about">
        <div className='my-24 pb-12 md:pt-16 md:pb-48'>
            <h1 className="text-center font-bold text-4xl">
                About Me
            <hr className="w-6 h-1 mx-auto my-4 bg-gray-700 dark:bg-white border-0-rounded"></hr>
            </h1>
             <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-20 md:space-y-0 md:p-4 md:flex-row md:text-left">
                <div className="md:w-1/2 p-4 md:p-0"> 
                    <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                        Get to know me!
                    </h1>
                    <p className="text-justify">
                        Assalamualaikum hi, my name is  Muhamad Syamim Irfan, an{""}
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"> {"exceptionally ambitious"} </span>,
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"> {"self-motivated"} </span>, and
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"> {"driven"} </span>
                        software engineer hailing from Malaysia
                    </p>
                    <br />
                    <p className="text-justify">
                        I graduated from Tun Hussein Onn University of Malaysia {"(UTHM)"}, Batu Pahat,
                        Parit Raja in 2024 with a Bachelor of Computer Science in Software Engineer Majors.
                        Now, I am working in the field ever since as a fresh graduate .
                    </p>
                    <br />
                    <p className="text-justify">
                        I cultivate a diverse set of hobbies and passions that consistently captivate my time. 
                        From delving into the realms of gaming, coding, and watching movies and travelling,
                        each pursuit serves as a means to enhance my skills and personal development.
                        I am always seeking new experiences and love to keep myself
                        engaged and learning new things.
                    </p>
                    <br />
                    <p className="text-justify">
                      I am all about {" "}
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        NEVER GIVE UP
                      </span>         
                      {" "}
                      on personal growth. 
                      Technology is my jam, and I love pushing the limits just to see what is possible.
                      Can{"'"}t wait to see where my career winds up, 
                      and I am totally down for whatever cool opportunities come my way!
                    </p>
                    <br />
                    <h1 className=" text-center text-2xl font-bold mb-6 md:text-left">
                        Resume
                    </h1>
                    <Link
                     href="https://drive.google.com/file/d/1MbFLpGBsVCBoV8jQEUMoEEWDXzqRy-bY/view?usp=sharing"
                     target="_blank"
                    >
                        <Image src="/assets/download-button.png" alt='download-button.png' width={300} height={300} className="mx-auto md:mx-0"/>
                    </Link>
                </div>
                <div className="text-center md:w-1/2 md:text-left">
                    <div className="text-2xl font-bold mb-6">
                        Experience On
                    </div>
                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                        {experiences.map((item, idx) => {
                            return (
                            <p
                             key={idx} 
                             className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                            >
                                {item.experience}
                            </p>
                            )
                        })}
                    </div>
                    <div className="text-2xl font-bold mt-6 mb-6">
                        Still Learning
                    </div>
                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                        {learning.map((item, idx) => {
                            return (
                            <p
                             key={idx} 
                             className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                            >
                                {item.learning}
                            </p>
                            )
                        })}
                    </div>
                </div>
             </div>
        </div>
    </section>
  )
}

export default About_Section
