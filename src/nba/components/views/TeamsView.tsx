import { PLAYERS, TEAMS } from "@/nba/mock-data/mock.data";
import { useState, type FC } from "react";
import { TeamMark } from "../TeamMark";
interface Props {
  onSelectPlayer: () => void;
}

export const TeamsView: FC<Props> = ({ onSelectPlayer }) => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  if (selectedTeam) {
    const roster = PLAYERS.filter((p) => p.team === selectedTeam.name);
    return (
      <div className="flex flex-col gap-8">
        <button
          onClick={() => setSelectedTeam(null)}
          className="self-start font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground transition hover:text-hoop"
        >
          ← Volver a equipos
        </button>

        {/* Cabecera del equipo */}
        <div className="flex flex-col gap-5 border-2 border-foreground p-6 md:flex-row md:items-center md:gap-6">
          <TeamMark team={selectedTeam} size="lg" />
          <div className="flex flex-1 flex-col gap-2">
            <h1 className="font-display text-4xl font-bold uppercase leading-none tracking-tight md:text-5xl">
              {selectedTeam.name}
            </h1>
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Conferencia {selectedTeam.conference}
            </p>
          </div>
          <div className="flex gap-6 border-t border-border pt-4 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <div className="text-center">
              <div className="font-display text-4xl font-bold">
                {selectedTeam.wins}
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Victorias
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold">
                {selectedTeam.losses}
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Derrotas
              </div>
            </div>
          </div>
        </div>

        {/* Plantilla */}
        <div>
          <h2 className="mb-4 border-b-2 border-foreground pb-2 font-display text-2xl font-semibold uppercase tracking-tight">
            Plantilla
          </h2>
          {roster.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {roster.map((player) => (
                <PlayerCard
                  key={player.id}
                  player={player}
                  onClick={() => onSelectPlayer(player)}
                />
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-border p-10 text-center text-muted-foreground">
              No hay jugadores de ejemplo cargados para este equipo.
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="border-b-2 border-foreground pb-3">
        <h1 className="font-display text-4xl font-bold uppercase tracking-tight">
          Equipos
        </h1>
        <p className="mt-1 text-muted-foreground">
          Selecciona un equipo para ver su plantilla.
        </p>
      </div>
      <div className="border border-border">
        {TEAMS.map((team, i) => (
          <button
            key={team.id}
            onClick={() => setSelectedTeam(team)}
            className="group flex w-full items-center gap-4 border-b border-border px-4 py-4 text-left transition last:border-b-0 odd:bg-card hover:bg-secondary"
          >
            <span className="w-6 font-display text-lg font-bold text-muted-foreground">
              {i + 1}
            </span>
            <TeamMark team={team} />
            <div className="flex-1">
              <h3 className="font-display text-xl font-semibold uppercase leading-none tracking-tight">
                {team.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Conferencia {team.conference} · {team.players} jugadores
              </p>
            </div>
            <div className="hidden text-right font-display sm:block">
              <span className="text-xl font-bold">{team.wins}</span>
              <span className="text-muted-foreground"> — {team.losses}</span>
            </div>
            <span className="font-display text-muted-foreground transition group-hover:translate-x-1 group-hover:text-hoop">
              →
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
