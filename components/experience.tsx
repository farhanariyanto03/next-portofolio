import {
    Briefcase,
    Calendar,
    Code,
    Database,
    Globe,
    Layers,
    Server,
    Smartphone,
  } from "lucide-react"
  
  export default function Experience() {
    const experiences = [
      {
        title: "Senior Frontend Developer",
        company: "Tech Solutions Inc.",
        period: "2021 - Present",
        description:
          "Led the development of responsive web applications using React and Next.js. Implemented modern UI/UX designs and improved performance by 40%.",
      },
      {
        title: "Full Stack Developer",
        company: "Digital Innovations",
        period: "2018 - 2021",
        description:
          "Developed and maintained full-stack applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality products.",
      },
      {
        title: "Junior Web Developer",
        company: "Creative Web Agency",
        period: "2016 - 2018",
        description:
          "Created responsive websites for clients across various industries. Worked with HTML, CSS, JavaScript, and WordPress.",
      },
    ]
  
    const techStack = [
      { name: "Laravel", icon: <Code className="h-6 w-6" /> },
      { name: "Next.js", icon: <Layers className="h-6 w-6" /> },
      { name: "Node.js", icon: <Server className="h-6 w-6" /> },
      { name: "TypeScript", icon: <Code className="h-6 w-6" /> },
      { name: "MongoDB", icon: <Database className="h-6 w-6" /> },
      { name: "Tailwind CSS", icon: <Code className="h-6 w-6" /> },
    ]
  
    return (
      <section className="py-20 bg-gradient-to-b from-black to-purple-950/30">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 border border-purple-500 text-purple-400 rounded-full text-sm mb-4">
              My Journey
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Experience & Tech Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A timeline of my career and the technologies I've grown to love and master.
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
                        <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
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
                    className="bg-blue-950/40 border border-blue-800 hover:bg-blue-900/50 rounded-xl p-6 flex flex-col items-center text-center transition-colors shadow-md"
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
    )
  }
  