import { useState } from "react";

import { PLAYERS, TEAMS } from "./nba/mock-data/mock.data";

/* Custom components  */
import { OverallBox } from "./nba/components/OverallBox";
import { CustomTag } from "./nba/components/CustomTag";

const ATTR_LABELS = {
  threePointShot: "Tiro de 3",
  drivingDunk: "Mate en carrera",
  passAccuracy: "Precisión de pase",
  perimeterDefense: "Defensa exterior",
  speed: "Velocidad",
  strength: "Fuerza",
};

/* --------------------------- SUB-COMPONENTES ------------------------------ */
/* Extrae cada uno a su propio archivo cuando separes la lógica. */

function PlayerCard({ player, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col border border-foreground/30 bg-card text-left transition hover:border-hoop"
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b border-foreground/30 bg-secondary">
        <img
          src={player.image || "/placeholder.svg"}
          alt={player.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute left-0 top-0 bg-foreground px-2 py-1 font-display text-xl font-bold text-background">
          {player.number}
        </span>
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
}

/* ------------------------------- VISTAS ----------------------------------- */

function HomeView({ onNavigate }) {
  const ranked = [...PLAYERS].sort((a, b) => b.overall - a.overall);

  return (
    <div className="flex flex-col">
      {/* Portada / titular */}
      <section className="border-b-2 border-foreground pb-10">
        <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.3em] text-hoop">
          Almanaque · Temporada 25/26
        </p>
        <h1 className="max-w-4xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl">
          Todo el baloncesto, equipo por equipo y jugador por jugador
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Consulta la ficha de cada franquicia, repasa sus plantillas al
          completo y busca a cualquier jugador con sus valoraciones, atributos e
          insignias.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => onNavigate("teams")}
            className="border-2 border-foreground bg-foreground px-6 py-3 font-display text-sm font-semibold uppercase tracking-widest text-background transition hover:bg-hoop hover:border-hoop"
          >
            Ver equipos
          </button>
          <button
            onClick={() => onNavigate("players")}
            className="border-2 border-foreground px-6 py-3 font-display text-sm font-semibold uppercase tracking-widest transition hover:border-hoop hover:text-hoop"
          >
            Buscar jugadores
          </button>
        </div>
      </section>

      {/* Cifras */}
      <section className="grid grid-cols-2 divide-x divide-y divide-border border-b border-border md:grid-cols-4 md:divide-y-0">
        {[
          { label: "Equipos", value: "30" },
          { label: "Jugadores", value: "450+" },
          { label: "Conferencias", value: "2" },
          { label: "Datos por jugador", value: "40+" },
        ].map((stat) => (
          <div key={stat.label} className="px-2 py-8 text-center">
            <div className="font-display text-5xl font-bold">{stat.value}</div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      {/* Índice de secciones */}
      <section className="grid gap-px border-b border-border bg-border md:grid-cols-2">
        {[
          {
            key: "teams",
            n: "01",
            title: "Equipos",
            desc: "Récord, conferencia y plantilla completa de cada franquicia.",
          },
          {
            key: "players",
            n: "02",
            title: "Jugadores",
            desc: "Busca por nombre o equipo y abre la ficha con todos sus atributos.",
          },
        ].map((s) => (
          <button
            key={s.key}
            onClick={() => onNavigate(s.key)}
            className="group flex items-start gap-5 bg-background p-8 text-left transition hover:bg-card"
          >
            <span className="font-display text-4xl font-bold text-hoop">
              {s.n}
            </span>
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-2xl font-semibold uppercase tracking-tight">
                {s.title}
              </h2>
              <p className="text-muted-foreground">{s.desc}</p>
              <span className="mt-1 font-display text-sm font-semibold uppercase tracking-widest text-foreground transition group-hover:text-hoop">
                Entrar →
              </span>
            </div>
          </button>
        ))}
      </section>

      {/* Ranking destacado (tipo tabla de almanaque) */}
      <section className="py-10">
        <div className="mb-4 flex items-baseline justify-between border-b-2 border-foreground pb-2">
          <h2 className="font-display text-2xl font-semibold uppercase tracking-tight">
            Mejor valorados
          </h2>
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Por OVR
          </span>
        </div>
        <div className="border border-border">
          {ranked.map((p, i) => (
            <div
              key={p.id}
              className="flex items-center gap-4 border-b border-border px-4 py-3 last:border-b-0 odd:bg-card"
            >
              <span className="w-6 font-display text-lg font-bold text-muted-foreground">
                {i + 1}
              </span>
              <span className="flex-1 font-display text-lg font-semibold uppercase tracking-tight">
                {p.name}
              </span>
              <span className="hidden flex-1 text-sm text-muted-foreground sm:block">
                {p.team}
              </span>
              <span className="font-display text-2xl font-bold text-hoop">
                {p.overall}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function TeamsView({ onSelectPlayer }) {
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
}

function PlayersView({ onSelectPlayer }) {
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
}

function PlayerDetail({ player, onBack }) {
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
        <div className="relative aspect-[4/5] overflow-hidden border-2 border-foreground bg-secondary">
          <img
            src={player.image || "/placeholder.svg"}
            alt={player.name}
            className="h-full w-full object-cover"
          />
          <span className="absolute left-0 top-0 bg-foreground px-3 py-1 font-display text-3xl font-bold text-background">
            {player.number}
          </span>
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
                  <Tag key={p}>{p}</Tag>
                ))}
                <Tag variant="hoop">{player.archetype}</Tag>
              </div>
            </div>
            <OverallBox value={player.overall} size="lg" />
          </div>

          {/* Info física */}
          <div className="grid grid-cols-3 divide-x divide-border border border-border">
            {[
              { label: "Altura", value: player.height },
              { label: "Peso", value: player.weight },
              { label: "Dorsal", value: player.number },
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

      {/* Atributos */}
      <div className="border border-border p-6">
        <h2 className="mb-4 border-b-2 border-foreground pb-2 font-display text-2xl font-semibold uppercase tracking-tight">
          Atributos
        </h2>
        <div className="flex flex-col">
          {Object.entries(player.attributes).map(([key, value]) => (
            <AttributeBar
              key={key}
              label={ATTR_LABELS[key] || key}
              value={value}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ APP RAÍZ ---------------------------------- */

export const NbaApp = () => {
  const [route, setRoute] = useState("home"); // "home" | "teams" | "players"
  const [activePlayer, setActivePlayer] = useState(null);

  const navigate = (r) => {
    setActivePlayer(null);
    setRoute(r);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR / MASTHEAD */}
      <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <button
            onClick={() => navigate("home")}
            className="flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center bg-hoop font-display text-sm font-bold uppercase text-hoop-foreground">
              NBA
            </span>
          </button>
          <nav className="flex items-center gap-6">
            {[
              { key: "home", label: "Inicio" },
              { key: "teams", label: "Equipos" },
              { key: "players", label: "Jugadores" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => navigate(item.key)}
                className={`border-b-2 pb-1 font-display text-sm font-semibold uppercase tracking-widest transition ${
                  route === item.key && !activePlayer
                    ? "border-hoop text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* CONTENIDO */}
      <main className="mx-auto max-w-6xl px-4 py-10">
        {activePlayer ? (
          <PlayerDetail
            player={activePlayer}
            onBack={() => setActivePlayer(null)}
          />
        ) : route === "home" ? (
          <HomeView onNavigate={navigate} />
        ) : route === "teams" ? (
          <TeamsView onSelectPlayer={setActivePlayer} />
        ) : (
          <PlayersView onSelectPlayer={setActivePlayer} />
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t-2 border-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:flex-row">
          <span>NBA Almanac — Diseño de ejemplo</span>
          <span>Datos ficticios · Temporada 25/26</span>
        </div>
      </footer>
    </div>
  );
};
