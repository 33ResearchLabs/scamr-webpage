import React from "react";
import { PresaleModal } from "./PresaleModel";

export const HeroSection = () => {
  const [modelOpen, setModelOpen] = React.useState(false);
  return (
    <div className="mt-20 text-left min-h-screen">
      <h1 className="text-2xl md:text-2xl lg:text-5xl font-bold text-white leading-tight">
        Next-Gen <span className="text-cyan-400">Solana Token</span>{" "}
        Intelligence
      </h1>
      <p className="mt-6 text-lg md:text-xl text-justify text-gray-400 max-w-3xl mx-auto">
        Enterprise-grade AI to detect scams, track insider trades, and decode
        whale movements with unmatched precision.
      </p>
      <div className="mt-16 md:mt-24 flex  justify-center gap-8 md:gap-16">
        <div className="text-center">
          <p className="text-xl font-bold text-cyan-400">10,000+</p>
          <p className="text-gray-400 mt-1">Tokens Scanned</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold text-cyan-400">93%</p>
          <p className="text-gray-400 mt-1 ">Scam Detection</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold text-cyan-400">12.5M+</p>
          <p className="text-gray-400 mt-1 ">Transactions Analyzed</p>
        </div>
      </div>
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <button
          onClick={() => setModelOpen(true)}
          className="w-full sm:w-auto px-6 py-2 font-semibold rounded-md text-white border border-cyan-400 hover:bg-cyan-500/10 transition duration-300 shadow-[0_0_10px_rgba(0,255,255,0.5)]"
        >
          Join Token Sale
        </button>
        {modelOpen && (
          <PresaleModal
            isOpen={modelOpen}
            onClose={() => setModelOpen(false)}
          />
        )}

        <a
          href="https://ai.scamr.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-500/50 text-white text-center font-semibold py-3 px-8 rounded-lg w-full sm:w-auto hover:bg-gray-700 transition-transform transform hover:scale-105"
        >
          Launch App
        </a>
      </div>
    </div>
  );
};
