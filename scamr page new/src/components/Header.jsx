import React, { use, useEffect, useState } from "react";
import { PresaleModal } from "./PresaleModel";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);
  console.log(modelOpen);
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      const element = document.querySelector("#home");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`py-2 px-6 fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? " bg-black/80 backdrop-blur-md shadow-lg"
          : " bg-transparent sm:px-28 "
      }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <a href="/" className="text-white text-2xl font-bold">
          SCAM<span className="text-2xl text-blue-500">R</span>
        </a>
        <div className="hidden md:flex items-center space-x-8 text-white">
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <a
            href="#tokenomics"
            className="hover:text-cyan-400 transition-colors"
          >
            Tokenomics
          </a>
          <a href="#roadmap" className="hover:text-cyan-400 transition-colors">
            Roadmap
          </a>
          <button
            onClick={() => setModelOpen(true)}
            className="hidden md:block bg-transparent border border-cyan-400 text-cyan-400 py-2 px-6 rounded-lg hover:bg-cyan-400 hover:text-black transition-all"
          >
            Join Presale
          </button>
          <button className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          {modelOpen && (
            <PresaleModal
              isOpen={modelOpen}
              onClose={() => setModelOpen(false)}
            />
          )}
        </div>
      </nav>
    </header>
  );
};
