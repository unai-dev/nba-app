import type { FC } from "react";

interface Props {
  value: number;
  size?: string;
}

export const OverallBox: FC<Props> = ({ value, size = "md" }) => {
  const dims = size === "lg" ? "h-20 w-20" : "h-12 w-14";
  const num = size === "lg" ? "text-4xl" : "text-2xl";
  const strong = value >= 95;
  return (
    <div
      className={`flex ${dims} flex-col items-center justify-center border-2 ${
        strong
          ? "border-hoop bg-hoop text-hoop-foreground"
          : "border-foreground bg-background text-foreground"
      }`}
    >
      <span className={`font-display font-bold leading-none ${num}`}>
        {value}
      </span>
      <span className="text-[9px] font-semibold uppercase tracking-widest">
        OVR
      </span>
    </div>
  );
};
