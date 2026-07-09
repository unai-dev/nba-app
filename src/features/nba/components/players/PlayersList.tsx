import type { Player } from "@/nba/interfaces/player.interface";
import { type FC } from "react";
import { PlayerCard } from "./PlayerCard";

interface Props {
  players: Player[];
}

export const PlayersList: FC<Props> = ({ players }) => {
  return (
    <>
      {players.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {players.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      ) : (
        <h1 className="text-2xl font-thin text-muted-foreground mt-5 ">
          No hay jugadores disponibles
        </h1>
      )}
    </>
  );
};
