import { useState } from "react";

/* Custom components  */
import { PlayerDetail } from "./nba/components/PlayerDetail";
import { HomeView } from "./nba/components/views/HomeView";
import { PlayersView } from "./nba/components/views/PlayersView";
import { TeamsView } from "./nba/components/views/TeamsView";

type ROUTE_TYPE = "home" | "teams" | "players";

export const NbaApp = () => {
  const [route, setRoute] = useState<ROUTE_TYPE>("home");
  const [activePlayer, setActivePlayer] = useState(null);

  const navigate = (route: ROUTE_TYPE) => {
    setActivePlayer(null);
    setRoute(route);
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
          <span>NBA App — Diseño de ejemplo</span>
          <span>Datos ficticios · Temporada 25/26</span>
        </div>
      </footer>
    </div>
  );
};
