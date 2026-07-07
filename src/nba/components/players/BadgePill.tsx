import { cn } from "@/lib/utils";
import { BADGE_CONFIG } from "@/nba/constants/badgeStyles";
import type { FC } from "react";

interface Props {
  count: number;
  tier: "hallOfFame" | "legendary" | "gold" | "silver" | "bronze";
}

export const BadgePill: FC<Props> = ({ count, tier }) => {
  if (count === 0) return null;
  const badgeStyle = BADGE_CONFIG[tier];
  return (
    <div
      className={cn(
        "flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-bold tracking-widest",
        badgeStyle.colorClass,
      )}
    >
      <span className={cn("w-1.5 h-1.5 rounded-full", badgeStyle.dotClass)} />
      <span>{badgeStyle.label}</span>
      <span>{count}</span>
    </div>
  );
};
