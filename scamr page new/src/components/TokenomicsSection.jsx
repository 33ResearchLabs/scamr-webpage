import React from "react";

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
  let cumulativeLength = 0;
  const slices = data.map(({ percentage, color }) => {
    const sliceLength = (percentage / 100) * circumference;
    const slice = {
      strokeDasharray: `${sliceLength} ${circumference}`,
      strokeDashoffset: circumference - cumulativeLength,
      color,
    };
    cumulativeLength += sliceLength;
    return slice;
  });

  return (
    <div className=" p-8 md:p-12 rounded-2xl border border-gray-800">
      <section className="mx-auto px-6 pb-6 text-gray-200 max-w-7xl scale-75 ">
        <h2 className="text-3xl font-bold mb-10 text-center">Tokenomics</h2>

        <div className="flex flex-col md:flex-row space-x-0 md:space-x-32 items-center justify-center gap-20">
          {/* Donut Chart */}
          <svg
            width="350"
            height="350"
            viewBox="0 0 180 180"
            className="mx-auto md:mx-0"
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
            {/* Colored slices */}
            {slices.map(({ strokeDasharray, strokeDashoffset, color }, idx) => (
              <circle
                key={idx}
                cx="90"
                cy="90"
                r={radius}
                fill="none"
                strokeWidth="30"
                stroke={color}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                style={{ transition: "stroke-dashoffset 0.5s ease" }}
                transform="rotate(-90 90 90)"
              />
            ))}
          </svg>

          {/* List */}
          <div className="flex flex-col gap-6 max-w-xl">
            {data.map(({ label, percentage, description, color }, idx) => (
              <div
                key={idx}
                className="bg-[#111827] p-4 rounded-lg shadow-md flex flex-col"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-5 h-6 rounded-md"
                      style={{ backgroundColor: color }}
                    />
                    <h3 className="font-semibold text-lg">{label}</h3>
                  </div>
                  <span className="font-bold text-cyan-400">{percentage}%</span>
                </div>
                <p className="text-sm text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tokenomics;
