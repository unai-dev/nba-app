import { PLAYERS } from "@/nba/mock-data/mock.data";
import { useState, type FC } from "react";
import { PlayerCard } from "../PlayerCard";
import type { Player } from "@/nba/interfaces/player.interface";

interface Props {
  onSelectPlayer: (player: Player) => void;
}

export const PlayersView: FC<Props> = ({ onSelectPlayer }) => {
  const [query, setQuery] = useState("");
  const filtered = PLAYERS.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.team.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="border-b-2 border-foreground pb-3">
        <h1 className="font-display text-4xl font-bold uppercase tracking-tight">
          Buscar jugadores
        </h1>
        <p className="mt-1 text-muted-foreground">
          Busca por nombre de jugador o equipo.
        </p>
      </div>

      {/* Barra de búsqueda (campo con línea inferior, estilo editorial) */}
      <div className="flex items-center gap-3 border-b-2 border-foreground pb-2">
        <span className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Buscar
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ej: LeBron James, Warriors..."
          className="w-full bg-transparent font-display text-2xl uppercase tracking-tight outline-none placeholder:normal-case placeholder:tracking-normal placeholder:text-muted-foreground/60"
        />
        <span className="shrink-0 font-display text-sm font-semibold text-muted-foreground">
          {filtered.length}
        </span>
      </div>

      {/* Resultados */}
      {filtered.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onClick={() => onSelectPlayer(player)}
            />
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-border p-10 text-center text-muted-foreground">
          No se encontraron jugadores para “{query}”.
        </div>
      )}
    </div>
  );
};
