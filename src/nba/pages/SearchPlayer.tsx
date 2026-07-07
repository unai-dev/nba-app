import { useState, useMemo, type FC, useEffect } from "react";

import { CustomHeader } from "@/components/shared/CustomHeader";
import { CustomSearchBar } from "@/components/shared/CustomSearchBar";
import type { Player } from "../interfaces/player.interface";
import { getPlayers } from "../actions/get-players.action";
import { MOCK_PLAYERS } from "../mock-data/mock.data";
import { PlayersList } from "../components/PlayersList";

export const SearchPlayer: FC = () => {
  const [query, setQuery] = useState("");
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const timeoutID = setTimeout(async () => {
      const apiPlayers = await getPlayers();

      setPlayers(apiPlayers);
    }, 1000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  const handleQuery = (query: string) => {
    setQuery(query);
  };

  const searchedPlayers = useMemo(() => {
    const q = query.toLowerCase().trim();

    const currentPlayers = players.length > 0 ? players : MOCK_PLAYERS;
    const results = currentPlayers.filter((p) => {
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.team.toLowerCase().includes(q) ||
        p.archetype.toLowerCase().includes(q);

      return matchesQuery;
    });

    return results;
  }, [query, players]);

  return (
    <main className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <CustomHeader
          title="NBA Player"
          subTitle="Explore ratings, badges &amp; archetypes for your favorite players"
          label="2K25 Ratings"
        />

        {/* SearchBar */}
        <CustomSearchBar
          placeholder="Search players, teams, archetypes…"
          onQuery={handleQuery}
        />

        {/* Results count */}
        <div className="mb-5 flex items-center gap-2">
          <span className="text-muted-foreground text-sm">
            {searchedPlayers.length} results
          </span>
          {query && (
            <button
              onClick={() => {
                setQuery("");
              }}
              className="text-primary text-sm font-semibold hover:underline"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Grid */}
        <PlayersList players={searchedPlayers} />
      </div>
    </main>
  );
};
