import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SlideUp from './slide-up'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
    {
        name: "E-Bookstore",
        description: "A front-end development e-commerce for university assignment in web development course. It's use HTML, CSS plain and Vanilla Javascript  with a JQuery.",
        image: "/assets/e-bookstore.png",
        github: "https://github.com/syamimirfan/e-bookstore",
        link: "https://e-bookstore-two.vercel.app/"
    },
    {
        name: "To Do App",
        description: "A To Do App with Flutter framework to learn more about the SQLite, Dart language and Flutter environment.",
        image: "/assets/todo-app.png",
        github: "https://github.com/syamimirfan/todo_app",
        link: "",
    },
    {
        name: "Dropship Project",
        description: "A Dropship project for university assignment to stakeholders. It's use PHP language with CSS Bootstrap to complete the project. ",
        image: "/assets/dropship.png",
        github: "https://github.com/syamimirfan/dropship-project",
        link: ""
    },
    {
        name: "Beautyst",
        description: "A Backend Project named Beautyst for university assignment with C#, .NET (Entiti Framework).",
        image: "/assets/beautyst.png",
        github: "https://github.com/syamimirfan/Beautyst-backend",
        link: ""
    },
    {
        name: "WeMeet DApps",
        description: "A Final Year Project degree with Flutter Framework.",
        image: "/assets/wemeet-dapps.png",
        github: "https://github.com/syamimirfan/wemeet_dapps",
        link: ""
    },
    {
        name: "WeMeet DApps Backend",
        description: "A Final Year Project degree for backend development with Node.js, API, WebSocket, and MySQL.",
        image: "/assets/wemeet-dapps.png",
        github: "https://github.com/syamimirfan/wemeet_dapps_backend",
        link: ""
    },
    {
        name: "UTHM Token",
        description: "A Final Year Project degree for UTHM Token with Hardhat Framework, Ethereum, and Smart Contracts.",
        image: "/assets/uthm-token.png",
        github: "https://github.com/syamimirfan/UTHMToken_Hardhat",
        link: ""
    },
    {
        name: "R3 Corda",
        description: "An internship project in RnD team to test a new technology for clients in Distributed Ledger Technology (DLT).",
        image: "/assets/r3-corda.png",
        github: "https://github.com/corda/samples-java",
        link: "https://docs.r3.com/"
    },
]

const ProjectSection = () => {
  return (
    <section id="project">
        <h1 className="my-10 text-center font-bold text-4xl">
            Projects Involved
            <hr className="w-6 h-1 mx-auto my-4 bg-gray-700 dark:bg-white border-0-rounded"/>
        </h1>
        <div className="flex flex-col space-y-24">
            {projects.map((project, idx) => {
                return (
                    <div key={idx}>
                        <SlideUp offset="-300px 0px -300px 0px">
                            <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                                <div className="md:w-1/2">
                                   <Link
                                   href={project.link}                
                                   >
                                   <Image
                                    src={project.image}
                                    alt={project.image}
                                    width={1000}
                                    height={1000}
                                    className="rounded-xl shadow-xl hover:opacity-70"
                                   />
                                   </Link>
                                </div>
                                <div className="mt-8 md:w-1/2">
                                    <h1 className="text-4xl font-bold mb-6 text-center md:text-left lg:text-left">{project.name}</h1>
                                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-row align-bottom space-x-4">
                                        <Link
                                        href={project.github}
                                        target="_blank"
                                        >
                                         <BsGithub
                                          size={30}
                                          className="hover:translate-y-1 transition-transform cursor-pointer"
                                         />
                                        </Link>
                                        <Link
                                         href={project.link}
                                        
                                        >
                                         <BsArrowUpRightSquare
                                          size={30}
                                          className="hover:translate-y-1 transition-transform cursor-pointer"
                                         />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                )
            })}
                                    <p className="text-xl text-center">and more...</p>
        </div>
    </section>
  )
}

export default ProjectSection
