"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import RollingGallery from "@/ui/roolling_gallery";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const contentRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      });

      // Gorden atas naik
      tl.to(topRef.current, {
        y: "-100%",
        duration: 1.2,
        ease: "power2.inOut",
      });

      // Gorden bawah turun
      tl.to(
        bottomRef.current,
        {
          y: "100%",
          duration: 1.2,
          ease: "power2.inOut",
        },
        "<"
      );

      // Background fade in
      tl.to(backgroundRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      });

      // Konten muncul lebih cepat
      tl.fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
      id="gallery"
    >
      {/* Background gradient transparan */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-b from-blue-950/30 to-black opacity-0 transition-opacity duration-1000"
      />

      {/* Panel atas transparan + blur */}
      <div
        ref={topRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-100/70 via-slate-300/60 to-blue-300/40 backdrop-blur-md z-10 flex items-end justify-center"
      >
        <h2 className="text-5xl font-bold text-black mb-8 drop-shadow-lg">
          My Album
        </h2>
      </div>

      {/* Panel bawah transparan + blur */}
      <div
        ref={bottomRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 via-slate-800/60 to-blue-900/50 backdrop-blur-md  z-10 flex items-start justify-center"
      >
        <h2 className="text-5xl font-bold text-white mt-8 drop-shadow-xl">
          Gallery
        </h2>
      </div>

      {/* Konten yang akan muncul setelah animasi */}
      <div
        ref={contentRef}
        className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 opacity-0"
      >
        <div className="text-center mb-10">
          <h3 className="text-4xl font-semibold text-white mb-4">
            Memories Captured
          </h3>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Enjoy a selection of unforgettable moments from competitions,
            projects, and organizational life.
          </p>
        </div>
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </section>
  );
};

export default Gallery;
