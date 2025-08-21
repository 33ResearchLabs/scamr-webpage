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
    <div className="h-[900px] p-8 md:p-12 rounded-2xl border border-gray-800">
      <div className="py-2  text-white relative overflow-hidden max-w-7xl mx-auto scale-75 ">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
        </div>

        <div className="relative z-40 ">
          <h2 className="text-4xl font-bold text-center mb-10">
            Our <span className="text-cyan-400">Roadmap</span>
          </h2>

          <div className="relative max-w-3xl mx-auto px-4">
            {/* Central timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-gray-600 to-cyan-400 transform -translate-x-1/2" />

            {roadmapData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isCompleted = item.status === "Completed";

              return (
                <div
                  key={index}
                  className={`relative flex items-center mb-2 ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className=" absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`w-5 h-5 rounded-full border-4 border-gray-900 ${
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
                    className={`w-full max-w-md ${
                      isLeft ? " pr-1" : "ml-auto pl-1"
                    } md:w-3/6`}
                  >
                    <div
                      className={`group relative bg-gray-800 rounded-xl p-2 border ${
                        isCompleted ? "border-cyan-400/30" : "border-gray-700"
                      } shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                    >
                      {/* Connecting line to dot */}
                      <div
                        className={`absolute top-8  h-0.5 ${
                          isCompleted ? "bg-cyan-400" : "bg-gray-600"
                        } ${isLeft ? "-right-8" : "-left-8"}`}
                      />
                      <div className="flex flex-row gap-5">
                        {/* Quarter title */}
                        <h3
                          className={`text-xl font-bold mb-4 ${
                            isCompleted ? "text-cyan-300" : "text-gray-200"
                          }`}
                        >
                          {item.quarter}
                        </h3>
                        {/* Status badge */}
                        {item.status && (
                          <div
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
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
                      <ul className="space-y-1">
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

          {/* Bottom decoration */}
          <div className="text-center mt-16">
            <div className="inline-block w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <div className="w-2 h-2 bg-cyan-400 rounded-full mx-auto mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
