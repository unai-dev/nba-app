import { type FC } from "react";

import { CustomHeader } from "@/components/shared/CustomHeader";
import { CustomSearchBar } from "@/components/shared/CustomSearchBar";
import { PlayersList } from "../components/players/PlayersList";
import { useNba } from "../hooks/useNba";
import { Navbar } from "@/components/shared/Navbar";

export const SearchPlayer: FC = () => {
  const { query, playerResults, handleQuery, resetQuery } = useNba();

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <CustomHeader
            title="NBA Player"
            subTitle="Explore ratings, badges & archetypes for your favorite players"
            label="2K25 Ratings"
          />

          {/* SearchBar */}
          <CustomSearchBar
            placeholder="Search players, teams, archetypes..."
            query={query}
            onQuery={handleQuery}
          />

          {/* Results count */}
          <div className="mb-5 flex items-center gap-2">
            <span className="text-muted-foreground text-sm">
              {playerResults.length} resultados
            </span>
            {query && (
              <button
                onClick={resetQuery}
                className="text-primary text-xs font-semibold hover:underline "
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Grid */}
          {playerResults.length > 0 ? (
            <PlayersList players={playerResults} />
          ) : (
            <h1 className="mt-5 text-muted-foreground text-xl font-thin ">
              No hay jugadores disponibles
            </h1>
          )}
        </div>
      </main>
    </>
  );
};
