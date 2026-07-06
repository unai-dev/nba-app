import type { FC } from "react";

interface Props {
  overall: number;
}

export const OverallRing: FC<Props> = ({ overall }) => {
  const size = 50;
  const stroke = 2;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (overall / 100) * circumference;
  const color =
    overall >= 95
      ? "oklch(0.72 0.25 35)"
      : overall >= 90
        ? "oklch(0.82 0.18 85)"
        : overall >= 85
          ? "oklch(0.78 0.02 240)"
          : "oklch(0.65 0.1 45)";

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
        aria-hidden="true"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="oklch(1 0 0 / 8%)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${progress} ${circumference}`}
        />
      </svg>
      <span
        className="absolute text-base font-bold leading-none"
        style={{ color }}
      >
        {overall}
      </span>
    </div>
  );
};
