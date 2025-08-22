import React from "react";

export const ScannerSection = () => {
  return (
    <div className=" text-white w-full px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
        About <span className="text-cyan-400">SCAMR</span>
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* ✅ Left Side - Text */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold">
            Transforming{" "}
            <span className="text-cyan-400">Solana Token Intelligence</span>
          </h2>
          <p className="text-gray-400">
            SCAMR is a revolutionary Solana-based platform that provides
            real-time analytics and insights into token behavior patterns. Our
            AI-driven technology helps investors, developers, and institutions
            make informed decisions in the volatile crypto market.
          </p>

          {/* Features */}
          <div className="space-y-4 ">
            <div className="flex gap-3 items-start">
              <div className="text-cyan-400 text-xl">🔍</div>
              <div>
                <h4 className="font-semibold">Advanced Scam Detection</h4>
                <p className="text-gray-400 text-sm">
                  Our algorithms identify potentially fraudulent tokens and
                  contracts before they can cause harm to investors.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="text-cyan-400 text-xl">🐋</div>
              <div>
                <h4 className="font-semibold">Whale Movement Tracking</h4>
                <p className="text-gray-400 text-sm">
                  Monitor large holders and their transaction patterns to
                  anticipate market movements.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="text-cyan-400 text-xl">📊</div>
              <div>
                <h4 className="font-semibold">Holder Analysis</h4>
                <p className="text-gray-400 text-sm">
                  Understand distribution patterns and identify healthy vs.
                  concerning token holder structures.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Right Side - Scanner Section */}
        <div className="lg:w-1/2 flex flex-col items-center text-center border border-[#222222] py-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-2">
            Scan a Solana <span className="text-cyan-400">Token</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg">
            Discover, analyze, and make informed decisions about any Solana
            token.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-10 w-full max-w-md">
            <div>
              <p className="text-3xl font-bold text-cyan-400">4,289+</p>
              <p className="text-gray-500 text-sm">TOKENS TRACKED</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-400">238</p>
              <p className="text-gray-500 text-sm">SCANS TODAY</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-400">182</p>
              <p className="text-gray-500 text-sm">UNIQUE USERS</p>
            </div>
          </div>

          {/* Input + Button */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-md">
            <input
              type="text"
              disabled
              placeholder="Enter Solana token address or name..."
              className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            />
            <a
              href="https://ai.scamr.xyz/"
              target="_blank"
              className="bg-cyan-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-cyan-500 transition-transform transform hover:scale-105 whitespace-nowrap"
            >
              Analyze
            </a>
          </div>

          {/* Status */}
          <p className="text-sm text-gray-500 mt-4">
            <span className="text-green-400">•</span> Scanner active.{" "}
            <span className="text-white">255 tokens analyzed today</span>
          </p>
        </div>
      </div>
    </div>
  );
};
