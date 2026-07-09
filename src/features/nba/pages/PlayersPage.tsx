import { type FC } from "react";

import { CustomHeader } from "@/components/shared/CustomHeader";
import { CustomSearchBar } from "@/components/shared/CustomSearchBar";
import { PlayersList } from "../components/players/PlayersList";
import { Navbar } from "@/components/shared/Navbar";
import { useNbaPlayers } from "../hooks/useNbaPlayers";
import { ResultsCount } from "../components/shared/ResultsCount";

export const PlayersPage: FC = () => {
  const { query, playerResults, setQuery } = useNbaPlayers();

  return (
    <div className="flex min-h-screen text-white">
      <Navbar />
      <main className="flex-1 min-h-screen px-4 py-10 sm:px-6 lg:px-8">
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
          <ResultsCount
            query={query}
            results={playerResults.length}
            onClick={() => setQuery("")}
          />

          {/* Grid */}
          <PlayersList players={playerResults} />
        </div>
      </main>
    </div>
  );
};
