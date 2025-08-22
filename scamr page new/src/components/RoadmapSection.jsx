import React from "react";

const roadmapData = [
  {
    quarter: "Q1 2024",
    status: "Completed",
    points: [
      "Project conception and team formation",
      "Initial market research and tokenomics design",
      "Started X page",
      "Community building and social media presence",
    ],
  },
  {
    quarter: "Q4 2024",
    status: "Completed",
    points: [
      "Private investment rounds",
      "Advanced platform development",
      "Security audits and optimizations",
    ],
  },
  {
    quarter: "Q1 2025",
    status: "Completed",
    points: [
      "Public token sale",
      "Scaling the app",
      "Improving and scaling App",
      "Integration of community initiatives",
      "Beta version of analytics platform",
    ],
  },
  {
    quarter: "Q2 2025",
    status: "",
    points: [
      "SCAMR launch – Major CEX listings",
      "Full platform launch with all features",
      "Mobile app development",
      "Cross-chain integration deployment",
    ],
  },
];

export const RoadmapSection = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="p-6 sm:p-8 lg:p-12  text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 hidden lg:block">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
          </div>

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
              Our <span className="text-cyan-400">Roadmap</span>
            </h2>

            {/* Desktop Timeline Layout */}
            <div className="hidden lg:block relative max-w-[720px] mx-auto">
              {/* Central timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-gray-600 to-cyan-400 transform -translate-x-1/2" />

              {roadmapData.map((item, index) => {
                const isLeft = index % 2 === 0;
                const isCompleted = item.status === "Completed";

                return (
                  <div
                    key={index}
                    className={`relative flex items-center mb-4 ${
                      isLeft ? "justify-start" : "justify-end"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div
                        className={`w-3 h-2 rounded-full border-4 border-gray-900 ${
                          isCompleted ? "bg-cyan-400" : "bg-gray-600"
                        } shadow-lg`}
                      >
                        <div
                          className={`absolute inset-1 rounded-full ${
                            isCompleted ? "bg-cyan-300" : "bg-gray-500"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Content card */}
                    <div
                      className={`w-full max-w-[350px] ${
                        isLeft ? "pr-1" : "ml-auto pl-1"
                      }`}
                    >
                      <div
                        className={`group relative bg-[#111111] rounded-xl p-2 border ${
                          isCompleted ? "border-cyan-400/30" : "border-gray-700"
                        } shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                      >
                        {/* Connecting line to dot */}
                        <div
                          className={`absolute top-8 w-0 h-0.5 ${
                            isCompleted ? "bg-cyan-400" : "bg-gray-600"
                          } ${isLeft ? "-right-6" : "-left-6"}`}
                        />

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-4">
                          {/* Quarter title */}
                          <h3
                            className={`text-xl font-bold ${
                              isCompleted ? "text-cyan-300" : "text-gray-200"
                            }`}
                          >
                            {item.quarter}
                          </h3>
                          {/* Status badge */}
                          {item.status && (
                            <div
                              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                isCompleted
                                  ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/30"
                                  : "bg-gray-700 text-gray-300 border border-gray-600"
                              }`}
                            >
                              {item.status}
                            </div>
                          )}
                        </div>

                        {/* Points list */}
                        <ul className="space-y-3">
                          {item.points.map((point, i) => (
                            <li
                              key={i}
                              className="flex items-start text-sm text-gray-300 leading-relaxed"
                            >
                              <div
                                className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 ${
                                  isCompleted ? "bg-cyan-400" : "bg-gray-500"
                                }`}
                              />
                              <span className="group-hover:text-gray-200 transition-colors duration-200">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Glow effect for completed items */}
                        {isCompleted && (
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-transparent rounded-xl pointer-events-none" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile/Tablet Vertical Layout */}
            <div className="lg:hidden space-y-6">
              {roadmapData.map((item, index) => {
                const isCompleted = item.status === "Completed";

                return (
                  <div
                    key={index}
                    className={`relative  rounded-xl p-4 sm:p-6 border ${
                      isCompleted ? "border-cyan-400/30" : "border-gray-700"
                    } shadow-xl hover:shadow-2xl transition-all duration-300`}
                  >
                    {/* Mobile timeline indicator */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-4 h-4 rounded-full border-2 border-gray-900 ${
                          isCompleted ? "bg-cyan-400" : "bg-gray-600"
                        } flex-shrink-0`}
                      >
                        <div
                          className={`w-full h-full rounded-full ${
                            isCompleted ? "bg-cyan-300" : "bg-gray-500"
                          } scale-50`}
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 flex-1">
                        <h3
                          className={`text-lg sm:text-xl font-bold ${
                            isCompleted ? "text-cyan-300" : "text-gray-200"
                          }`}
                        >
                          {item.quarter}
                        </h3>
                        {item.status && (
                          <div
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold w-fit ${
                              isCompleted
                                ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/30"
                                : "bg-gray-700 text-gray-300 border border-gray-600"
                            }`}
                          >
                            {item.status}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Points list */}
                    <ul className="space-y-2 sm:space-y-3 ml-7">
                      {item.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm sm:text-base text-gray-300 leading-relaxed"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 ${
                              isCompleted ? "bg-cyan-400" : "bg-gray-500"
                            }`}
                          />
                          <span className="hover:text-gray-200 transition-colors duration-200">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Glow effect for completed items */}
                    {isCompleted && (
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-transparent rounded-xl pointer-events-none" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom decoration */}
            <div className="text-center mt-12 sm:mt-16">
              <div className="inline-block w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
              <div className="w-2 h-2 bg-cyan-400 rounded-full mx-auto mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
