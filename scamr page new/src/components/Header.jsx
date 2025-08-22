import React, { useEffect, useState } from "react";
import { PresaleModal } from "./PresaleModel";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeMobileMenu();
  };

  const handlePresaleClick = () => {
    setModelOpen(true);
    closeMobileMenu();
  };

  return (
    <>
      <header
        className={`py-2 px-28 fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out bg-[ rgba(10, 10, 10, 0.95)] backdrop-blur-3xl border-b border-[ #222222]`}
      >
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <a href="/" className="text-white text-2xl font-bold">
            SCAM<span className="text-2xl text-blue-500">R</span>
          </a>

          {/* Desktop Navigation */}
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
            <a
              href="#roadmap"
              className="hover:text-cyan-400 transition-colors"
            >
              Roadmap
            </a>
            <button
              hidden
              onClick={() => setModelOpen(true)}
              className="bg-transparent border border-cyan-400 text-cyan-400 py-2 px-6 rounded-lg hover:bg-cyan-400 hover:text-black transition-all"
            >
              Join Presale
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2 hover:text-cyan-400 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-gray-800 transform transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-2 invisible"
          }`}
        >
          <div className="flex flex-col space-y-4 p-6 text-white">
            <a
              href="#about"
              onClick={handleLinkClick}
              className="text-lg hover:text-cyan-400 transition-colors py-2"
            >
              About
            </a>
            <a
              href="#tokenomics"
              onClick={handleLinkClick}
              className="text-lg hover:text-cyan-400 transition-colors py-2"
            >
              Tokenomics
            </a>
            <a
              href="#roadmap"
              onClick={handleLinkClick}
              className="text-lg hover:text-cyan-400 transition-colors py-2"
            >
              Roadmap
            </a>
            <button
              hidden
              onClick={handlePresaleClick}
              className="  mt-4 bg-transparent border border-cyan-400 text-cyan-400 py-3 px-6 rounded-lg hover:bg-cyan-400 hover:text-black transition-all text-lg font-medium"
            >
              Join Presale
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Presale Modal */}
      {modelOpen && (
        <PresaleModal isOpen={modelOpen} onClose={() => setModelOpen(false)} />
      )}
    </>
  );
};
