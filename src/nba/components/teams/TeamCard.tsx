"use client";

import type { Team } from "@/nba/interfaces/team.response";
import { Trophy, MapPin } from "lucide-react";

interface TeamCardProps {
  team: Team;
}

function OverallRing({ value }: { value: number }) {
  const size = 56;
  const stroke = 4;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / 100) * circumference;
  const color =
    value >= 95
      ? "oklch(0.72 0.25 35)"
      : value >= 90
        ? "oklch(0.82 0.18 85)"
        : value >= 85
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
        className="absolute text-sm font-bold leading-none"
        style={{ color }}
      >
        {value}
      </span>
    </div>
  );
}

/* Team crest built from abbreviation + team colors (no external assets) */
function TeamCrest({ team }: { team: Team }) {
  return (
    <div
      className="relative flex items-center justify-center w-16 h-16 rounded-2xl shrink-0 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${team.colors.primary}, ${team.colors.secondary})`,
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[oklch(0_0_0/20%)]" />
      <span className="relative text-[oklch(0.98_0_0)] font-black text-lg tracking-tight drop-shadow">
        {team.abbreviation}
      </span>
    </div>
  );
}

export const TeamCard = ({ team }: TeamCardProps) => {
  const games = team.record.wins + team.record.losses;
  const winPct = games > 0 ? Math.round((team.record.wins / games) * 100) : 0;

  return (
    <a
      href={team.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-[oklch(1_0_0/8%)] bg-[oklch(0.15_0.008_240)] hover:border-[oklch(0.72_0.2_48/50%)] hover:bg-[oklch(0.17_0.01_240)] transition-all duration-300 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label={`View ${team.name} profile`}
    >
      {/* Accent bar tinted with team color */}
      <div
        className="h-1.5 w-full"
        style={{ background: team.colors.primary }}
        aria-hidden="true"
      />

      <div className="p-4 flex flex-col gap-4">
        {/* Header: crest + name + rating */}
        <div className="flex items-center gap-3">
          <TeamCrest team={team} />
          <div className="min-w-0 flex-1">
            <p className="text-muted-foreground text-xs font-medium uppercase tracking-widest">
              {team.city}
            </p>
            <h3 className="text-foreground font-bold text-lg leading-tight tracking-tight truncate">
              {team.name}
            </h3>
          </div>
          <OverallRing value={team.overall} />
        </div>

        {/* Record bar */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-foreground font-semibold">
              {team.record.wins}
              <span className="text-muted-foreground font-medium">
                {" "}
                - {team.record.losses}
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
