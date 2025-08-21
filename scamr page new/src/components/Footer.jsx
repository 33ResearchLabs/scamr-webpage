import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-500/20 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About SCAMR */}
        <div>
          <h3 className="text-white font-semibold mb-4 border-b-2 border-cyan-500 inline-block pb-1">
            About SCAMR
          </h3>
          <p className="text-sm leading-relaxed max-w-sm">
            SCAMR is a revolutionary Solana-based AI platform with over a year
            of development history and a strong, growing community of over 3,500
            holders.
          </p>
          <div className="flex space-x-3 mt-6">
            {/* Social buttons */}
            <a
              href="https://x.com/scamr_io"
              target="_blank"
              className="w-8 h-8 rounded-full bg-gray-800 text-gray-400 hover:text-white flex items-center justify-center text-xs font-bold"
            >
              X
            </a>
            <a
              href="https://t.me/scamr_official"
              target="_blank"
              className="w-8 h-8 rounded-full bg-gray-800 text-gray-400 hover:text-white flex items-center justify-center text-xs font-bold"
            >
              TG
            </a>
            <a
              href="https://discord.com/invite/scamr"
              target="_blank"
              className="w-8 h-8 rounded-full bg-gray-800 text-gray-400 hover:text-white flex items-center justify-center text-xs font-bold"
            >
              DC
            </a>
            <a
              href="https://medium.com/@scam.r"
              target="_blank"
              className="w-8 h-8 rounded-full bg-gray-800 text-gray-400 hover:text-white flex items-center justify-center text-xs font-bold"
            >
              M
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 border-b-2 border-cyan-500 inline-block pb-1">
            Quick Links
          </h3>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#home" className="hover:text-cyan-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-cyan-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#tokenomics" className="hover:text-cyan-400 transition">
                Tokenomics
              </a>
            </li>
            <li>
              <a href="#roadmap" className="hover:text-cyan-400 transition">
                Roadmap
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition">
                Whitepaper
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-white font-semibold mb-4 border-b-2 border-cyan-500 inline-block pb-1">
            Contact Us
          </h3>
          <ul className="text-sm space-y-2">
            <li>info@scamr.xyz</li>{" "}
            <li>
              {" "}
              <a href="https://t.me/scamr_official" target="_blank">
                Telegram Community
              </a>
            </li>{" "}
            <li>
              {" "}
              <a href="https://discord.com/invite/scamr" target="_blank">
                Discord Server{" "}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email for updates"
            id=""
            className="border border-gray-700 bg-gray-800 text-white rounded-lg px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all    "
          />
          <button className="border p-2  rounded-xl shadow bg-cyan-400 text-black hover:bg-cyan-500 transition-all  ">
            Subscribe{" "}
          </button>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />
      <p className="text-center text-xs text-gray-500">
        © 2025 SCAMR. All rights reserved.
      </p>
    </footer>
  );
};
