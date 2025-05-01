"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Briefcase,
  Folder,
  Award,
  Mail,
  Layers,
  X,
  Menu,
} from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", href: "/", icon: <Home size={16} className="mr-2" /> },
    { name: "Experience", href: "/experience", icon: <Briefcase size={16} className="mr-2" /> },
    { name: "Certificates", href: "/certificates", icon: <Award size={16} className="mr-2" /> },
    { name: "Portfolio", href: "/portfolio", icon: <Folder size={16} className="mr-2" /> },
    { name: "Gallery", href: "/gallery", icon: <Folder size={16} className="mr-2" /> },
    { name: "Contact", href: "/contact", icon: <Mail size={16} className="mr-2" /> },
  ];

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
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
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-500 cursor-pointer border-b-2 ${
                    isActive(link.href)
                      ? "text-white border-b-2 border-purple-500"
                      : "text-gray-300 hover:text-white hover:border-purple-400 border-transparent"
                  }`}
                >
                  {link.icon}
                  {link.name}
                </span>
              </Link>
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
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                onClick={() => setOpen(false)}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-all ${
                  isActive(link.href)
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
              >
                {link.icon}
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
