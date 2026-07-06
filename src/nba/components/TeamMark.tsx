import type { FC } from "react";

interface Props {
  mark: string;
  color: string;
  size?: string;
}

export const TeamMark: FC<Props> = ({ mark, color, size = "md" }) => {
  const dims = size === "lg" ? "h-20 w-20 text-2xl" : "h-11 w-11 text-sm";
  return (
    <div
      className={`flex ${dims} shrink-0 items-center justify-center font-display font-bold uppercase text-white`}
      style={{ backgroundColor: color }}
    >
      {mark}
    </div>
  );
};
