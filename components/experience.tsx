"use client";

import { Briefcase, Calendar, Code } from "lucide-react";
// import ScrollVelocity from "@/ui/variable-proximity";

export default function Experience() {
  // const containerRef = useRef(null);
  const experiences = [
    {
      title: "Frontend Web Developer",
      company: "PT. Meetaza Prawira Media",
      period: "2025 - Now",
      description:
        "Fixing some display issues on Prime Hotel and Trehaus websites",
    },
    {
      title: "Fullstack Web Developer",
      company: "JTI Innovation",
      period: "2024 - 2025",
      description:
        "Building an E-Learning/LMS website for campus as a learning tool.",
    },
    {
      title: "Fullstack Web Developer",
      company: "Upylon/Proform",
      period: "2024 - Now",
      description:
        "Developing websites for multiple clients with an experienced team.",
    },
    {
      title: "Web Developer Intern",
      company: "CV. Hummasoft Technology",
      period: "2021",
      description:
        "Building a website for a school that provides a Student Donation System (DOSIS) for those affected by disasters.",
    },
  ];

  const techStack = [
    {
      name: "Laravel",
      icon: <i className="devicon-laravel-original colored text-2xl" />,
    },
    { name: "Next JS", icon: <i className="devicon-nextjs-plain text-2xl" /> },
    {
      name: "Node JS",
      icon: <i className="devicon-nodejs-plain-wordmark colored text-2xl" />,
    },
    {
      name: "Express JS",
      icon: <i className="devicon-express-original text-2xl" />,
    },
    {
      name: "React JS",
      icon: <i className="devicon-react-original text-2xl" />,
    },
    {
      name: "Tailwind CSS",
      icon: <i className="devicon-tailwindcss-original text-2xl" />,
    },
    {
      name: "HTML",
      icon: <i className="devicon-html5-plain colored text-2xl" />,
    },
    { name: "CSS", icon: <i className="devicon-css3-plain text-2xl" /> },
    {
      name: "JavaScript",
      icon: <i className="devicon-javascript-plain colored text-2xl" />,
    },
    {
      name: "Prisma",
      icon: <i className="devicon-prisma-original text-2xl" />,
    },
    {
      name: "PostgreSQL",
      icon: <i className="devicon-postgresql-plain text-2xl" />,
    },
    { name: "Mysql", icon: <i className="devicon-mysql-original text-2xl" /> },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-950/30">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-purple-500 text-purple-400 rounded-full text-sm mb-4">
            My Journey
          </div>
          {/* <div ref={containerRef} style={{ position: "relative" }}>
            <ScrollVelocity
              texts={["React Bits", "Scroll Down"]}
              velocity={100}
              className="custom-scroll-text"
            />
          </div> */}
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience & Tech Stack
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A timeline of my career and the technologies I have grown to love
            and master.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <Briefcase className="mr-2 h-6 w-6 text-purple-500" />
              Work Experience
            </h3>

            <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-600 before:via-blue-600 before:to-purple-600">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-1 h-10 w-10 rounded-full bg-purple-800 border-4 border-black flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-purple-300" />
                  </div>
                  <div className="bg-purple-950/50 border border-purple-800 rounded-2xl p-6 shadow-lg backdrop-blur-md">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-xl font-semibold text-white">
                        {exp.title}
                      </h4>
                      <span className="bg-blue-800 text-blue-200 text-xs px-3 py-1 rounded-full shadow-sm">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-purple-300 font-medium">{exp.company}</p>
                    <p className="text-gray-400 mt-2">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <Code className="mr-2 h-6 w-6 text-blue-500" />
              Tech Stack
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-blue-950/40 border border-blue-800 hover:bg-blue-900/50 hover:rotate-5 hover:scale-100 rounded-xl p-6 flex flex-col items-center text-center transition-colors shadow-md"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-900/50 flex items-center justify-center mb-4">
                    {tech.icon}
                  </div>
                  <h4 className="text-white font-medium">{tech.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
