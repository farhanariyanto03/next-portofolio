import { Award, Calendar, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Certificates() {
  const certificates = [
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Interaction Design Foundation",
      date: "January 2020",
      image: "/Juara Hackathon UM.jpg",
      link: "#",
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Interaction Design Foundation",
      date: "January 2020",
      image: "/Juara Hackathon UM.jpg",
      link: "#",
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Interaction Design Foundation",
      date: "January 2020",
      image: "/Juara Hackathon UM.jpg",
      link: "#",
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Interaction Design Foundation",
      date: "January 2020",
      image: "/Juara Hackathon UM.jpg",
      link: "#",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-purple-950/30 to-blue-950/30">
      <div className="container mx-auto px-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 border border-blue-500 text-blue-400 rounded-full text-sm mb-4">
            Credentials
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">Certificates & Licenses</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and knowledge in various technologies.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-blue-950/40 border border-blue-800 hover:border-blue-600 shadow-md transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center text-blue-200 text-sm font-medium">
                  <Award className="h-4 w-4 mr-1" />
                  {cert.issuer}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {cert.date}
                </div>

                <Link
                  href={cert.link}
                  className="text-sm font-medium text-blue-400 hover:text-blue-300 inline-flex items-center"
                >
                  View Certificate
                  <ExternalLink className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
