"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
  Code,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function EnhancedHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } =
        heroRef.current?.getBoundingClientRect() || {
          left: 0,
          top: 0,
          width: 0,
          height: 0,
        };

      // Calculate mouse position relative to the hero section
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

//   const skills = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Laravel"];

  return (
    <motion.section
      ref={heroRef}
      style={{ opacity, scale, y }}
      className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden pt-20"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#4c1d95_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,#1e40af_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,#6d28d9_0%,transparent_40%)]"></div>

        {/* Animated gradient overlay that follows mouse */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${
              50 + mousePosition.x * 30
            }% ${
              50 + mousePosition.y * 30
            }%, rgba(139, 92, 246, 0.5) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Animated grid pattern with parallax effect */}
      <motion.div
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiM0YTU1NjgiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjAuNSI+PHBhdGggZD0iTTYwIDBoLTYwdjYwaDYweiIvPjwvZz48L3N2Zz4=')] opacity-10"
        style={{
          x: useTransform(springX, [-0.5, 0.5], [20, -20]),
          y: useTransform(springY, [-0.5, 0.5], [20, -20]),
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0
                ? "bg-purple-500/20"
                : i % 3 === 1
                ? "bg-blue-500/20"
                : "bg-indigo-500/20"
            }`}
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              x: `${Math.random() * 100 - 50}%`,
              y: `${Math.random() * 100 - 50}%`,
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 40 - 20],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Glowing accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>

      {/* 3D Rotating cube */}
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="cube-wrapper">
          <div className="cube">
            <div className="cube-face front">
              <Code className="h-12 w-12 text-purple-300" />
            </div>
            <div className="cube-face back">
              <Sparkles className="h-12 w-12 text-blue-300" />
            </div>
            <div className="cube-face right">
              <div className="text-xl font-bold text-indigo-300">JS</div>
            </div>
            <div className="cube-face left">
              <div className="text-xl font-bold text-purple-300">TS</div>
            </div>
            <div className="cube-face top">
              <div className="text-xl font-bold text-blue-300">UI</div>
            </div>
            <div className="cube-face bottom">
              <div className="text-xl font-bold text-violet-300">UX</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content with enhanced glass effect */}
      <div className="container relative z-10 px-10 mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left side content */}
          <motion.div
            className="lg:col-span-3 backdrop-blur-sm bg-black/30 p-8 rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(139,92,246,0.15)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Code className="h-3.5 w-3.5" />
              Full Stack Developer
            </motion.div>

            <motion.h1
              className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="block">Farhan</span>
              <div className="relative">
                <span className="block mt-2 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Fullstack Developer
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
              </div>
            </motion.h1>

            <motion.p
              className="max-w-2xl mb-8 text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              I build exceptional and accessible digital experiences for the
              web. Specialized in creating modern, responsive websites and
              applications with cutting-edge technologies.
            </motion.p>

            {/* Skills tags */}
            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {/* {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium text-white/80 bg-white/5 border border-white/10 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))} */}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white relative overflow-hidden group rounded-md px-5 py-3 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute top-0 left-0 w-full h-full bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative z-10 flex items-center justify-center">
                  View My Work{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                className="border-purple-600/50 text-purple-400 hover:bg-purple-950/50 backdrop-blur-sm rounded-md px-5 py-3 border-2 hover:text-white transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <Link
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110 duration-200"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-200"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110 duration-200"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side animated image/illustration */}
          <motion.div
            className="lg:col-span-2 hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="relative">
              <div className="codeblock-container">
                <pre className="codeblock">
                  <code>
                    <span className="code-keyword">const</span>{" "}
                    <span className="code-function">Developer</span> = () =&gt;{" "}
                    {"{"}
                    <br />
                    &nbsp;&nbsp;<span className="code-keyword">const</span>{" "}
                    <span className="code-variable">skills</span> = [
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-string">"React"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-string">"Next.js"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-string">"TypeScript"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-string">"Node.js"</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-string">"Laravel"</span>
                    <br />
                    &nbsp;&nbsp;];
                    <br />
                    <br />
                    &nbsp;&nbsp;<span className="code-keyword">return</span> (
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;
                    <span className="code-tag">Developer</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-attribute">name</span>=
                    <span className="code-string">"Farhan Ariyanto"</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-attribute">passion</span>=
                    <span className="code-string">"Web Development"</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-attribute">available</span>=
                    <span className="code-boolean">{"{true}"}</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;/&gt;
                    <br />
                    &nbsp;&nbsp;);
                    <br />
                    {"}"};
                  </code>
                </pre>
                <div className="code-glow"></div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-br from-purple-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                100% Responsive
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                Modern UI/UX
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        initial={{ opacity: 0 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/50 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center items-start p-1">
            <motion.div
              className="w-1 h-2 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full"
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
          <ChevronDown className="h-4 w-4 text-white/50" />
        </div>
      </motion.div>
    </motion.section>
  );
}
