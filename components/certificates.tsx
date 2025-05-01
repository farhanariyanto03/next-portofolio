import { Award, Calendar, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Certificates() {
  const certificates = [
    {
      title: "Finalist Hackathon - National Competition HackFest 2025 UC",
      issuer: "Interaction Design Foundation",
      date: "April 2025",
      image: "",
      link: "#",
    },
    {
      title: "1st Winner Governance Category - UM SDGs Hackathon National Competition",
      issuer: "Interaction Design Foundation",
      date: "June 2024",
      image: "/Juara Hackathon UM.jpg",
      link: "#",
    },
    {
      title: "3rd Winner Hackthon Software Development Category - National Competition Play IT",
      issuer: "Interaction Design Foundation",
      date: "November 2024",
      image: "/playIT.jpg",
      link: "#",
    },
    {
      title: "4rd Best Application - TIF EXHIBITION",
      issuer: "Interaction Design Foundation",
      date: "Desember 2024",
      image: "/kentir.png",
      link: "#",
    },
    {
      title: "1st Best Application - TIF EXHIBITION",
      issuer: "Interaction Design Foundation",
      date: "January 2021",
      image: "/simko.png",
      link: "#",
    },
    {
      title: "Junior Web Developer - BNSP",
      issuer: "Interaction Design Foundation",
      date: "November 2024",
      image: "/bnsp.png",
      link: "#",
    },
    {
      title: "Junior Web Developer - VSGA",
      issuer: "Interaction Design Foundation",
      date: "Agustus 2024",
      image: "/Juniaor Web Developer.jpg",
      link: "#",
    },
    {
      title: "Dasar AI - DICODING",
      issuer: "Interaction Design Foundation",
      date: "November 2024",
      image: "/DASAR AI DICODING.jpg",
      link: "#",
    },
    {
      title: "Data Science - DICODING",
      issuer: "Interaction Design Foundation",
      date: "November 2024",
      image: "/DATA SCIEND DICODING.jpg",
      link: "#",
    },
    {
      title: "Manajemen Proyek - DICODING",
      issuer: "Interaction Design Foundation",
      date: "November 2024",
      image: "/MAPRO DICODING.jpg",
      link: "#",
    },
    {
      title: "SQL - DICODING",
      issuer: "Interaction Design Foundation",
      date: "November 2024",
      image: "/SQL DICODING.jpg",
      link: "#",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-purple-950/30 to-purple-950/30">
      <div className="container mx-auto px-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 border border-blue-500 text-blue-400 rounded-full text-sm mb-4">
            Credentials
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">Awards & Certificates</h2>
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
