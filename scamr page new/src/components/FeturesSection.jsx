import React from "react";
import { ShieldCheckIcon } from "../assets/ShieldCheckIcon";
import { WhaleIcon } from "../assets/WhaleIcon";
import { UsersIcon } from "../assets/UserIcon";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <ShieldCheckIcon />,
      title: "Advanced Scam Detection",
      description:
        "Instantly identify fraudulent tokens and contracts with our AI-powered risk analysis, protecting you from potential threats.",
    },
    {
      icon: <WhaleIcon />,
      title: "Whale Movement Tracking",
      description:
        "Gain a competitive edge by monitoring large holders and their transaction patterns to anticipate significant market movements.",
    },
    {
      icon: <UsersIcon />,
      title: "In-Depth Holder Analysis",
      description:
        "Analyze token distribution patterns to identify healthy community growth versus concerning holder centralization.",
    },
    {
      icon: <ShieldCheckIcon />,
      title: "Real-Time Insights",
      description:
        "Analyze token distribution patterns to identify healthy community growth versus concerning holder centralization.",
    },
    {
      icon: <UsersIcon />,
      title: "Holder Analysis",
      description:
        "A healthy token has a healthy distribution. SCAMR highlights whether a project is truly community-driven or controlled by a handful of insiders. This insight is critical to avoid becoming exit liquidity.",
    },
    {
      icon: <UsersIcon />,
      title: "Community  Metrics",
      description:
        "Analyze community engagement and token activity to ensure sustainable growth and prevent centralized control.",
    },
  ];

  return (
    <div className=" px-6 py-12">
      <h2 className="text-2xl  text-white sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
        Fea<span className="text-cyan-400">tures</span>
      </h2>
      <div className="flex justify-center text-center mb-4 mx-auto gap-3">
        <h2 className="text-3xl md:text-3xl font-bold text-white">
          Pioneering On-Chain
        </h2>
        <h2 className="text-3xl md:text-3xl font-bold text-white">
          Trust & Transparency
        </h2>
      </div>
      <p className="text-gray-300 text-base leading-relaxed text-center max-w-2xl mx-auto pb-10">
        SCAMR is a revolutionary AI-driven platform providing
        institutional-grade analytics for the Solana ecosystem. We empower
        investors, developers, and funds to navigate the complexities of
        decentralized finance with clarity and confidence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className=" p-8 rounded-2xl border border-gray-800 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="flex gap-5">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-800 text-cyan-400 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
            </div>

            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
