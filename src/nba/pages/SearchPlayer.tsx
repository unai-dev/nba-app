import { type FC } from "react";

import { CustomHeader } from "@/components/shared/CustomHeader";
import { CustomSearchBar } from "@/components/shared/CustomSearchBar";
import { PlayersList } from "../components/players/PlayersList";
import { Navbar } from "@/components/shared/Navbar";
import { useNbaPlayers } from "../hooks/useNbaPlayers";

export const SearchPlayer: FC = () => {
  const { query, playerResults, setQuery } = useNbaPlayers();

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
            onQuery={(query: string) => setQuery(query)}
          />

          {/* Results count */}
          <div className="mb-5 flex items-center gap-2">
            <span className="text-muted-foreground text-sm">
              {playerResults.length} resultados
            </span>
            {query && (
              <button
                onClick={() => setQuery("")}
                className="text-primary text-xs font-semibold hover:underline "
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Grid */}
          <PlayersList players={playerResults} />
        </div>
      </main>
    </>
  );
};
