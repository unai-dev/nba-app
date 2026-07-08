import { Trophy, MapPin } from "lucide-react";

import { OverallRing } from "../shared/OverallRing";
import type { Team } from "@/nba/interfaces/team.interface";

interface TeamCardProps {
  team: Team;
}

export const TeamCard = ({ team }: TeamCardProps) => {
  const games = team.wins + team.losses;
  const winPct = games > 0 ? Math.round((team.wins / games) * 100) : 0;

  return (
    <a
      href={team.url}
      className="group block rounded-2xl border border-[oklch(1_0_0/8%)] bg-[oklch(0.15_0.008_240)] hover:border-[oklch(0.72_0.2_48/50%)] hover:bg-[oklch(0.17_0.01_240)] transition-all duration-300 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:scale-105 hover:m-5"
      aria-label={`View ${team.name} profile`}
    >
      <div
        className="h-1.5 w-full"
        style={{ background: team.colors.primary }}
        aria-hidden="true"
      />

      <div className="p-4 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <img src={team.logo} width={70} />
          <div className="min-w-0 flex-1">
            <p className="text-muted-foreground text-xs font-medium uppercase tracking-widest">
              {team.city}
            </p>
            <h3 className="text-foreground font-bold text-lg leading-tight tracking-tight truncate">
              {team.name}
            </h3>
          </div>
          <OverallRing overall={team.overall} />
        </div>

        {/* Record bar */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-foreground font-semibold">
              {team.wins}
              <span className="text-muted-foreground font-medium">
                {" "}
                - {team.losses}
              </span>
            </span>
            <span className="text-muted-foreground font-medium">
              {winPct}% win
            </span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-[oklch(0.2_0.01_240)] overflow-hidden">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${winPct}%` }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Meta stats */}
        <div className="flex items-center gap-4 pt-1">
          <div className="flex items-center gap-1.5">
            <Trophy
              size={14}
              className="text-[oklch(0.82_0.18_85)]"
              aria-hidden="true"
            />
            <span className="text-foreground text-sm font-semibold">
              {team.championships}
            </span>
            <span className="text-muted-foreground text-[10px] uppercase tracking-widest">
              Titles
            </span>
          </div>
          <div className="w-px bg-border self-stretch" />
          <div className="flex flex-col gap-0.5">
            <span className="text-muted-foreground text-[10px] uppercase tracking-widest">
              Est.
            </span>
            <span className="text-foreground text-sm font-semibold">
              {team.founded}
            </span>
          </div>
        </div>

        {/* Arena */}
        <div className="flex items-center gap-1.5 pt-1 border-t border-[oklch(1_0_0/6%)] -mx-4 px-4">
          <MapPin
            size={13}
            className="text-muted-foreground shrink-0"
            aria-hidden="true"
          />
          <span className="text-muted-foreground text-xs font-medium truncate">
            {team.arena}
          </span>
        </div>
      </div>
    </a>
  );
};
