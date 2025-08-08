"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Home, Briefcase, Folder, Award, Mail, X, Menu } from "lucide-react";

const sections = [
  { id: "home", name: "Home", icon: <Home size={16} className="mr-2" /> },
  { id: "experience", name: "Experience", icon: <Briefcase size={16} className="mr-2" /> },
  { id: "certificates", name: "Certificates", icon: <Award size={16} className="mr-2" /> },
  { id: "portfolio", name: "Portfolio", icon: <Folder size={16} className="mr-2" /> },
  { id: "gallery", name: "Gallery", icon: <Folder size={16} className="mr-2" /> },
  { id: "contact", name: "Contact", icon: <Mail size={16} className="mr-2" /> },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const offsets = sections.map((section) => {
        const el = document.getElementById(section.id);
        if (!el) return { id: section.id, offset: Infinity };
        return { id: section.id, offset: Math.abs(el.getBoundingClientRect().top) };
      });

      const closestSection = offsets.reduce((a, b) => (a.offset < b.offset ? a : b));
      setActiveSection(closestSection.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 text-transparent bg-clip-text cursor-pointer">
              Farhanayanto
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-4">
            {sections.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 border-b-2 ${
                  activeSection === link.id
                    ? "text-white border-purple-500"
                    : "text-gray-300 hover:text-white hover:border-purple-400 border-transparent"
                }`}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-white">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-black transition-transform duration-300 ease-in-out z-40 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-800">
          <span className="text-xl font-bold text-white">Menu</span>
          <button onClick={() => setOpen(false)} className="text-white">
            <X />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-3">
          {sections.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-all ${
                activeSection === link.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
