import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "SIMKO",
      description:
        "Simko is a desktop-based boarding house management information system.",
      image: "/project/simko1.png",
      tech: ["JAVA", "MySQL"],
      demo: "#",
      github: "#",
    },
    {
      title: "SIOPET",
      description:
        "Siopet is a desktop-based Hola Petcare management information system.",
      image: "/project/siopet1.png",
      tech: ["JAVA", "MySQL"],
      demo: "#",
      github: "#",
    },
    {
      title: "J-KOST",
      description:
        "J-Kost is a platform providing boarding house services in the Jember area which is website-based.",
      image: "/project/jkost1.png",
      tech: ["PHP", "Bootstrap", "JavaScript", "MySQL"],
      demo: "#",
      github: "#",
    },
    {
      title: "GAMESTORE",
      description:
        "Gamestore is a platform that provides mobile legend account jockey services and game diamond top ups based on a website.",
      image: "/project/gamestore1.png",
      tech: ["Laravel", "Tailwind CSS", "JavaScript", "MySQL"],
      demo: "#",
      github: "#",
    },
    {
      title: "DONASI UKT",
      description:
        "UKT Donation is a platform for educational institutions where they can make donations to those who need help and are also supported by SPK.",
      image: "/project/donasiukt1.png",
      tech: [
        "Laravel",
        "Tailwind CSS",
        "JavaScript",
        "Leaflet",
        "JQuery",
        "MySQL",
      ],
      demo: "#",
      github: "#",
    },
    {
      title: "PREDIKSI GRADE KENTANG MENGGUNAKAN METODE KNN",
      description:
        "Kentir is a platform for predicting potato size, which contains data that has been processed with classification using the KNN method.",
      image: "/project/kentir1.png",
      tech: ["Python", "HTML", "Firebase"],
      demo: "#",
      github: "#",
    },
    {
      title: "SMART MITIGATION",
      description:
        "Smart Mitigation is a platform for predicting floods where there are several methods for predicting floods themselves using the Random Forest method, for mapping areas that will experience flooding using the Clustering/K-Means method, and there is also a chatbot that will provide information about disaster victims using the NLP method.",
      image: "/project/mitigation1.png",
      tech: [
        "Python",
        "Flask",
        "Laravel",
        "Leaflet",
        "JQuery",
        "Tailwind CSS",
        "MySQL",
      ],
      demo: "#",
      github: "#",
    },
    {
      title: "JUSPLAY CORPORATE",
      description:
        "Justplay Corporate is a creative studio platform engaged in 3D animation, game development, and website creation. We provide visual solutions and interactive technology for various industries, from entertainment, education, marketing, to business.",
      image: "/project/justplay1.png",
      tech: ["Laravel", "Tailwind CSS", "JavaScript", "JQuery", "MySQL"],
      demo: "#",
      github: "#",
    },
    {
      title: "TR EXPRESS",
      description:
        "Tr Express is a shipping platform that provides a trusted solution for your website-based shipping needs.",
      image: "/project/trexpress1.png",
      tech: ["Laravel", "Tailwind CSS", "JavaScript", "JQuery", "MySQL"],
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-950/30 to-blue-950/30">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 border border-purple-500 text-purple-400 rounded-full text-sm mb-4">
            Portofolio
          </span>
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
                {/* <div className="flex gap-4">
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
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
