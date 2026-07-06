import type { FC } from "react";
import type { Player } from "../interfaces/player.interface";
import { OverallBox } from "./OverallBox";
import { CustomTag } from "./CustomTag";

interface Props {
  player: Player;
  onClick: () => void;
}

export const PlayerCard: FC<Props> = ({ player, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col border border-foreground/30 bg-card text-left transition hover:border-hoop"
    >
      <div className="relative aspect-4/3 overflow-hidden border-b border-foreground/30 bg-secondary">
        <img
          src={player.img || "/placeholder.svg"}
          alt={player.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <div className="absolute right-2 top-2">
          <OverallBox value={player.overall} />
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h3 className="font-display text-xl font-semibold uppercase leading-none tracking-tight">
          {player.name}
        </h3>
        <p className="text-sm text-muted-foreground">{player.team}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {player.positions.map((p) => (
            <CustomTag key={p}>{p}</CustomTag>
          ))}
          <CustomTag variant="hoop">{player.archetype}</CustomTag>
        </div>
      </div>
    </button>
  );
};
