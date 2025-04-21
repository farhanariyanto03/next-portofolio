import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Nutrition & IMT Calculator",
      description:
        "Responsive calculator for BMI and nutrition levels based on gender, height, and weight.",
      image: "/Juara Hackathon UM.jpg",
      tech: ["HTML", "Bootstrap", "JavaScript"],
      demo: "#",
      github: "#",
    },
    {
      title: "Nutrition & IMT Calculator",
      description:
        "Responsive calculator for BMI and nutrition levels based on gender, height, and weight.",
      image: "/Juara Hackathon UM.jpg",
      tech: ["HTML", "Bootstrap", "JavaScript"],
      demo: "#",
      github: "#",
    },
    {
      title: "Nutrition & IMT Calculator",
      description:
        "Responsive calculator for BMI and nutrition levels based on gender, height, and weight.",
      image: "/Juara Hackathon UM.jpg",
      tech: ["HTML", "Bootstrap", "JavaScript"],
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-950/30 to-slate-950/30">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects that showcase my experience in web
            development, UI design, and backend engineering.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-slate-900/60 border border-slate-700 hover:border-blue-500 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-sm mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-blue-800/30 text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={project.demo}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center"
                  >
                    Live Demo <ExternalLink className="h-4 w-4 ml-1" />
                  </Link>
                  <Link
                    href={project.github}
                    className="text-gray-400 hover:text-gray-300 text-sm font-medium flex items-center"
                  >
                    GitHub <ExternalLink className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
