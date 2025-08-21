import React from "react";

export const ScannerSection = () => {
  return (
    <div className="py-10">
      <div className=" p-8 md:p-12 rounded-2xl border border-gray-800">
        <h2 className="text-center text-3xl font-bold mb-2 text-white">
          Scan a Solana <span className="text-cyan-400">Token</span>
        </h2>
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          Discover, analyze, and make informed decisions about any Solana token.
        </p>

        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-2 mb-10 text-center">
          <div>
            <p className="text-4xl font-bold text-cyan-400">4,289+</p>
            <p className="text-gray-500">TOKENS TRACKED</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-cyan-400">238</p>
            <p className="text-gray-500">SCANS TODAY</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-cyan-400">182</p>
            <p className="text-gray-500">UNIQUE USERS</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <input
            type="text"
            disabled
            placeholder="Enter Solana token address or name..."
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
          />
          <a
            href="https://ai.scamr.xyz/"
            target="_blank"
            className="w-full md:w-auto bg-cyan-400 text-black font-bold py-3 px-8 rounded-lg flex items-center justify-center gap-2 hover:bg-cyan-500 transition-transform transform hover:scale-105 whitespace-nowrap"
          >
            Analyze
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          <span className="text-green-400">•</span> Scanner active.{" "}
          <span className="text-white">255 tokens analyzed today</span>
        </p>
      </div>
    </div>
  );
};
