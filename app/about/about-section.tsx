import React from "react";
import Link from "next/link";

const experiences = [
  { experience: "HTML" },
  { experience: "CSS" },
  { experience: "Javascript" },
  { experience: "Typescript" },
  { experience: "Dart" },
  { experience: "PHP" },
  { experience: "Java" },
  { experience: "MySQL" },
  { experience: "PostgreSQL" },
  { experience: "Firebase" },
  { experience: "Visual Studio Code" },
  { experience: "Android Studio" },
  { experience: "Figma" },
  { experience: "RESTful API" },
  { experience: "Git" },
  { experience: "Github" },
  { experience: "Azure DevOps" },
  { experience: "Flutter" },
  { experience: "Next.js" },
  { experience: "Node.js" },
  { experience: "React.js" },
  { experience: "Bootstrap" },
  { experience: "Tailwind" },
  { experience: "ORM" },
  { experience: "Web 3.0" },
  { experience: "Blockchain" },
  { experience: "R3 Corda" },
];

const learning = [
  { learning: "C#" },
  { learning: "Python" },
  { learning: "Kotlin" },
  { learning: "C++" },
  { learning: "AI" },
  { learning: "Laravel" },
  { learning: "Django" },
  { learning: "Nuxt.js" },
  { learning: "Svelte.js" },
  { learning: "Android & iOS Development" },
  { learning: "ASP.NET" },
  { learning: "Spring boot" },
  { learning: "Jira" },
  { learning: "Kubernetes" },
  { learning: "GCP" },
  { learning: "AWS" },
  { learning: "Docker" },
];

const About_Section = () => {
  return (
    <section id="about">
      <div className="my-24 pb-12 md:pt-16 md:pb-48">
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
              Assalamualaikum, I am Muhamad Syamim Irfan, a{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                results-oriented
              </span>{" "}
              Full Stack Developer and Software Engineer from Malaysia with over
              2 years of hands-on experience in designing, developing, and
              maintaining software applications.
            </p>
            <br />
            <p className="text-justify">
              I graduated from Tun Hussein Onn University of Malaysia {"(UTHM)"}{" "}
              in 2024 with a Bachelor of Computer Science in Software
              Engineering. Proficient in multiple programming languages and
              frameworks, I have contributed to building{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                scalable and efficient solutions
              </span>{" "}
              while collaborating closely with cross-functional teams.
            </p>
            <br />
            <p className="text-justify">
              With strong communication skills and a{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                problem-solving mindset
              </span>
              , I actively participate in delivering high-quality features and
              improvements.
            </p>
            <br />
            <p className="text-justify">
              Committed to{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                continuous learning
              </span>{" "}
              and staying up to date with the latest technology trends, I am
              eager to further grow my career and make meaningful contributions
              to impactful and innovative projects.
            </p>
            <br />
            <h1 className=" text-center text-2xl font-bold mb-6 md:text-left">
              Resume
            </h1>
            <Link
              href="https://drive.google.com/file/d/1foN1EJlulmtgcO5FzLUdRhcc7ZbxZokn/view?usp=sharing"
              target="_blank"
            >
              <span className="mx-auto md:mx-0 flex w-fit items-center gap-4 rounded-lg px-8 py-3 text-left transition-colors bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <span className="flex flex-col leading-tight">
                  <span className="font-semibold">View Resume</span>
                  <span className="text-sm opacity-80">
                    Muhamad Syamim Irfan
                  </span>
                </span>
              </span>
            </Link>
            <br />
            {/* <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              PPT Interview
            </h1>
            <Link
              href="https://drive.google.com/file/d/1psxhMW3esSWBTiHjtbi23rVOJLvgoQRe/view?usp=sharing"
              target="_blank"
            >
              <Image
                src="/assets/download-button.png"
                alt="download-button.png"
                width={300}
                height={300}
                className="mx-auto md:mx-0"
              />
            </Link> */}
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <div className="text-2xl font-bold mb-6">Experience On</div>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {experiences.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.experience}
                  </p>
                );
              })}
            </div>
            <div className="text-2xl font-bold mt-6 mb-6">Still Learning</div>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {learning.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.learning}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_Section;
