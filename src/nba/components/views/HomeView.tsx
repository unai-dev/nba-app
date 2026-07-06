import { PLAYERS } from "@/nba/mock-data/mock.data";
import type { FC } from "react";

interface Props {
  onNavigate: (route: string) => void;
}

export const HomeView: FC<Props> = ({ onNavigate }) => {
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
};
