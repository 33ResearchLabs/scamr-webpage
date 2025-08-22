import React from "react";
import { PresaleModal } from "./PresaleModel";

export const HeroSection = () => {
  const [modelOpen, setModelOpen] = React.useState(false);
  return (
    <div className="mt-20 text-center sm:text-left">
      <h1 className="text-4xl md:text-2xl lg:text-5xl font-bold text-white leading-tight">
        Next-Gen <span className="text-cyan-400">Solana Token</span>{" "}
        Intelligence
      </h1>
      <p className="mt-6 text-lg text-center md:text-xl sm:text-justify text-gray-400 max-w-3xl mx-auto">
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
      <div className="mt-20 sm:mt-10 flex flex-col sm:flex-row justify-left items-center gap-4">
        <a
          href="https://ai.scamr.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="
      w-[80%] sm:w-auto px-8 py-4
      text-lg sm:text-base font-semibold
      text-blue-500 border border-blue-500
      rounded-lg
      transition-all duration-300 ease-in-out
      hover:bg-blue-500 hover:text-white hover:border-blue-500
      hover:shadow-[0_0_10px_rgba(0,255,255,0.9)]
    "
        >
          Launch App
        </a>
      </div>
    </div>
  );
};
