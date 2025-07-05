import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-900/50">
      <div className="container mx-auto px-15 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Farhan Ariyanto
            </h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer specializing in creating modern, responsive
              websites and applications with a focus on user experience and
              performance.
            </p>

            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Certificates
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                <span className="text-gray-400">
                  Probolinggo, East Java
                  <br />
                  Jl. Ikan Paus, Mayangan
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-purple-500 mr-3" />
                <span className="text-gray-400">+62 852 3366 1118</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-purple-500 mr-3" />
                <span className="text-gray-400">ariyantofarhan03@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to my newsletter for the latest articles, tutorials, and
              updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-purple-950/30 border-purple-800 focus-visible:ring-purple-500 text-white px-4 py-2 rounded-l-md"
              />
              <button className="ml-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-md flex items-center">
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-900/50 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Farhanayanto. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Designed and built with <span className="text-purple-500">♥</span>{" "}
            by Farhan Ariyanto
          </p>
        </div>
      </div>
    </footer>
  );
}
