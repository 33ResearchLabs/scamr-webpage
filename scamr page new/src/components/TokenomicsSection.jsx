import React, { useState } from "react";

const data = [
  {
    label: "Public Sale",
    percentage: 50,
    color: "#818cf8", // Indigo 400
    description:
      "Available during presale and public launches to ensure fair distribution and wide community ownership.",
  },
  {
    label: "Liquidity",
    percentage: 20,
    color: "#22d3ee", // Cyan 400
    description:
      "Locked for 2 years to ensure trading stability and investor confidence. Key to maintaining market health.",
  },
  {
    label: "Team & Advisors",
    percentage: 10,
    color: "#4c1d95", // Indigo 900
    description:
      "Vested over 24 months with a 6-month cliff to align with long-term goals and project success.",
  },
  {
    label: "Marketing",
    percentage: 5,
    color: "#6366f1", // Indigo 500
    description:
      "For ongoing promotion and partnership development to grow the ecosystem and user adoption.",
  },
  {
    label: "Cex listing",
    percentage: 5,
    color: "#f472b6", // Pink 400
    description: "Exchange listing and partnerships.",
  },
  {
    label: "Community rewards",
    percentage: 10,
    color: "#06b6d4", // Cyan 500
    description: "Strategic reserve for community rewards.",
  },
];

const radius = 70;
const circumference = 2 * Math.PI * radius;

const Tokenomics = () => {
  const [hoveredSlice, setHoveredSlice] = useState(null);
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    content: null,
  });

  let cumulativePercentage = 0;
  const slices = data.map(({ percentage, color }, index) => {
    const sliceLength = (percentage / 100) * circumference;
    const offset = -((cumulativePercentage / 100) * circumference);
    const slice = {
      strokeDasharray: `${sliceLength} ${circumference}`,
      strokeDashoffset: offset,
      color,
      startAngle: (cumulativePercentage / 100) * 360,
      endAngle: ((cumulativePercentage + percentage) / 100) * 360,
      index,
    };
    cumulativePercentage += percentage;
    return slice;
  });

  const handleMouseEnter = (event, sliceData, index) => {
    setHoveredSlice(index);
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      content: sliceData,
    });
  };

  const handleMouseMove = (event) => {
    if (tooltip.visible) {
      setTooltip((prev) => ({
        ...prev,
        x: event.clientX,
        y: event.clientY,
      }));
    }
  };

  const handleMouseLeave = () => {
    setHoveredSlice(null);
    setTooltip({ visible: false, x: 0, y: 0, content: null });
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-1">
      <div className="max-w-7xl mx-auto ">
        <section className=" text-gray-200 ">
          <div className="scale-75">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
              Token<span className="text-cyan-400">omics</span>
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
              {/* Interactive Donut Chart */}
              <div className="flex-shrink-0 w-full max-w-xs sm:max-w-sm lg:max-w-none lg:w-auto relative">
                <svg
                  width="100%"
                  height="auto"
                  viewBox="0 0 180 180"
                  className="w-full h-auto max-w-[280px] sm:max-w-[320px] lg:max-w-[350px] mx-auto"
                  onMouseMove={handleMouseMove}
                >
                  {/* Background circle */}
                  <circle
                    cx="90"
                    cy="90"
                    r={radius}
                    fill="none"
                    stroke="#111827"
                    strokeWidth="30"
                  />
                  {/* Interactive colored slices */}
                  {slices.map(
                    (
                      { strokeDasharray, strokeDashoffset, color, index },
                      idx
                    ) => (
                      <circle
                        key={idx}
                        cx="90"
                        cy="90"
                        r={radius}
                        fill="none"
                        strokeWidth={hoveredSlice === idx ? "35" : "30"}
                        stroke={color}
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        style={{
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                          filter:
                            hoveredSlice === idx
                              ? "brightness(1.2) drop-shadow(0 0 8px rgba(255,255,255,0.3))"
                              : "none",
                          opacity:
                            hoveredSlice !== null && hoveredSlice !== idx
                              ? 0.6
                              : 1,
                        }}
                        transform="rotate(-90 90 90)"
                        onMouseEnter={(e) =>
                          handleMouseEnter(e, data[idx], idx)
                        }
                        onMouseLeave={handleMouseLeave}
                      />
                    )
                  )}

                  {/* Center text showing hovered slice info */}
                  {hoveredSlice !== null && (
                    <g>
                      <text
                        x="90"
                        y="85"
                        textAnchor="middle"
                        className="fill-white text-sm font-semibold"
                      >
                        {data[hoveredSlice].label}
                      </text>
                      <text
                        x="90"
                        y="100"
                        textAnchor="middle"
                        className="fill-cyan-400 text-xl font-bold"
                      >
                        {data[hoveredSlice].percentage}%
                      </text>
                    </g>
                  )}
                </svg>
              </div>

              {/* Legend List */}
              <div className="w-full lg:flex-1 lg:max-w-xl">
                <div className="grid gap-4 sm:gap-6">
                  {data.map(
                    ({ label, percentage, description, color }, idx) => (
                      <div
                        key={idx}
                        className={`bg-[#111827] p-4 sm:p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border ${
                          hoveredSlice === idx
                            ? "border-cyan-400/50 bg-[#1a2332] transform scale-105"
                            : "border-transparent hover:border-gray-600"
                        }`}
                        onMouseEnter={(e) =>
                          handleMouseEnter(e, data[idx], idx)
                        }
                        onMouseLeave={handleMouseLeave}
                        style={{
                          opacity:
                            hoveredSlice !== null && hoveredSlice !== idx
                              ? 0.6
                              : 1,
                        }}
                      >
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-4 h-4 sm:w-5 sm:h-6 rounded-md flex-shrink-0 transition-transform duration-300"
                              style={{
                                backgroundColor: color,
                                transform:
                                  hoveredSlice === idx
                                    ? "scale(1.2)"
                                    : "scale(1)",
                                boxShadow:
                                  hoveredSlice === idx
                                    ? `0 0 8px ${color}`
                                    : "none",
                              }}
                            />
                            <h3 className="font-semibold text-base sm:text-lg text-white">
                              {label}
                            </h3>
                          </div>
                          <span className="font-bold text-cyan-400 text-base sm:text-lg ml-2">
                            {percentage}%
                          </span>
                        </div>
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                          {description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Tooltip */}
            {tooltip.visible && tooltip.content && (
              <div
                className="fixed z-50 bg-gray-900 text-white p-4 rounded-lg shadow-xl border border-cyan-400/30 max-w-xs pointer-events-none"
                style={{
                  left: `${tooltip.x + 10}px`,
                  top: `${tooltip.y - 10}px`,
                  transform:
                    tooltip.x > window.innerWidth - 200
                      ? "translateX(-100%)"
                      : "none",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: tooltip.content.color }}
                  />
                  <h4 className="font-semibold text-cyan-400">
                    {tooltip.content.label}
                  </h4>
                </div>
                <p className="text-2xl font-bold text-white mb-1">
                  {tooltip.content.percentage}%
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {tooltip.content.description}
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tokenomics;
