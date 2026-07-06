import type { FC } from "react";

import type { Player } from "../interfaces/player.interface";

import { CustomTag } from "./CustomTag";
import { OverallBox } from "./OverallBox";

interface Props {
  player: Player;
  onBack: () => void;
}

export const PlayerDetail: FC<Props> = ({ player, onBack }) => {
  const badgeItems = [
    { label: "Hall of Fame", value: player.badges.hallOfFame },
    { label: "Oro", value: player.badges.gold },
    { label: "Plata", value: player.badges.silver },
    { label: "Bronce", value: player.badges.bronze },
  ];

  return (
    <div className="flex flex-col gap-8">
      <button
        onClick={onBack}
        className="self-start font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground transition hover:text-hoop"
      >
        ← Volver
      </button>

      {/* Cabecera */}
      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <div className="relative aspect-4/5 overflow-hidden border-2 border-foreground bg-secondary">
          <img
            src={player.img || "/placeholder.svg"}
            alt={player.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-start justify-between gap-4 border-b-2 border-foreground pb-4">
            <div className="flex flex-col gap-3">
              <h1 className="font-display text-4xl font-bold uppercase leading-none tracking-tight md:text-5xl">
                {player.name}
              </h1>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {player.team}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {player.positions.map((p) => (
                  <CustomTag key={p}>{p}</CustomTag>
                ))}
                <CustomTag variant="hoop">{player.archetype}</CustomTag>
              </div>
            </div>
            <OverallBox value={player.overall} size="lg" />
          </div>

          {/* Info física */}
          <div className="grid grid-cols-3 divide-x divide-border border border-border">
            {[
              { label: "Altura", value: player.height },
              { label: "Peso", value: player.weight },
            ].map((info) => (
              <div key={info.label} className="px-4 py-3 text-center">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {info.label}
                </div>
                <div className="mt-1 font-display text-2xl font-bold">
                  {info.value}
                </div>
              </div>
            ))}
          </div>

          {/* Insignias */}
          <div>
            <h3 className="mb-3 font-display text-lg font-semibold uppercase tracking-tight">
              Insignias · {player.badges.total}
            </h3>
            <div className="grid grid-cols-4 divide-x divide-border border border-border">
              {badgeItems.map((b) => (
                <div key={b.label} className="px-2 py-4 text-center">
                  <div className="font-display text-3xl font-bold text-hoop">
                    {b.value}
                  </div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {b.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
