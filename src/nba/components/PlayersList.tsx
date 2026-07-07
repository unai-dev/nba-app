import { type FC } from "react";
import type { Player } from "../interfaces/player.interface";
import { PlayerCard } from "./PlayerCard";

interface Props {
  players: Player[];
}

export const PlayersList: FC<Props> = ({ players }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {players.length > 0 &&
          players.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
      </div>
    </>
  );
};
