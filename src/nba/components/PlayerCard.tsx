import type { Player } from "../interfaces/player.interface";
import type { FC } from "react";
import { OverallRing } from "./OverallRing";
import { BadgePill } from "./BadgePill";

interface Props {
  player: Player;
}

export const PlayerCard: FC<Props> = ({ player }) => {
  return (
    <a
      href={player.url}
      className="group block rounded-2xl border border-[oklch(1_0_0/8%)] bg-[oklch(0.15_0.008_240)] hover:border-[oklch(0.72_0.2_48/50%)] hover:bg-[oklch(0.17_0.01_240)] transition-all duration-300   overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary  hover:scale-105 hover:m-5"
    >
      {/* Top image section */}
      <div className="relative h-52 w-full overflow-hidden bg-[oklch(0.12_0.005_240)]">
        {/* Decorative court arc */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 rounded-t-full border-t-2 border-[oklch(0.72_0.2_48/15%)] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-20 rounded-t-full border-t border-[oklch(0.72_0.2_48/8%)] pointer-events-none"
          aria-hidden="true"
        />

        <img
          src={player.img}
          alt={`Photo of ${player.name}`}
          className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Top overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_30%,oklch(0.15_0.008_240)_100%)]" />

        {/* Overall ring — top left */}
        <div className="absolute top-3 left-3">
          <OverallRing overall={player.overall} />
        </div>

        {/* Positions — top right */}
        <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
          {player.positions.map((position) => (
            <span
              key={position}
              className="px-2 py-0.5 rounded-md bg-[oklch(0.72_0.2_48)] text-[oklch(0.1_0_0)] text-[10px] font-extrabold tracking-widest"
            >
              {position}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-4 pt-2 flex flex-col gap-3">
        {/* Name + team */}
        <div>
          <h3 className="text-foreground font-bold text-lg leading-tight tracking-tight text-balance">
            {player.name}
          </h3>
          <p className="text-muted-foreground text-xs font-medium mt-0.5">
            {player.team}
          </p>
        </div>

        {/* Archetype chip */}
        <div className="flex items-center gap-1.5">
          <span
            className="w-1 h-4 rounded-full bg-primary shrink-0"
            aria-hidden="true"
          />
          <span className="text-primary text-xs font-semibold tracking-wide">
            {player.archetype}
          </span>
        </div>

        {/* Physical stats */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-0.5">
            <span className="text-muted-foreground text-[10px] font-medium uppercase tracking-widest">
              Height
            </span>
            <span className="text-foreground text-sm font-semibold">
              {player.height}
            </span>
          </div>
          <div className="w-px bg-border self-stretch" />
          <div className="flex flex-col gap-0.5">
            <span className="text-muted-foreground text-[10px] font-medium uppercase tracking-widest">
              Weight
            </span>
            <span className="text-foreground text-sm font-semibold">
              {player.weight}
            </span>
          </div>
          <div className="w-px bg-border self-stretch" />
          <div className="flex flex-col gap-0.5">
            <span className="text-muted-foreground text-[10px] font-medium uppercase tracking-widest">
              Badges
            </span>
            <span className="text-foreground text-sm font-semibold">
              {player.badges.total}
            </span>
          </div>
        </div>

        {/* Badges row */}
        <div className="flex flex-wrap-reverse gap-1.5">
          <BadgePill count={player.badges.hallOfFame} tier="hallOfFame" />
          <BadgePill count={player.badges.legendary} tier="legendary" />
          <BadgePill count={player.badges.gold} tier="gold" />
          <BadgePill count={player.badges.silver} tier="silver" />
          <BadgePill count={player.badges.bronze} tier="bronze" />
        </div>
      </div>
    </a>
  );
};
