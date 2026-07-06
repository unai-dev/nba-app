import { useState, useMemo, type FC, useEffect } from "react";

import { PlayerCard } from "../components/PlayerCard";
import { CustomHeader } from "@/components/shared/CustomHeader";
import { CustomSearchBar } from "@/components/shared/CustomSearchBar";
import type { Player } from "../interfaces/player.interface";
import { getPlayers } from "../actions/get-players.action";

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

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    const results = players.filter((p) => {
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
            {filtered.length} {filtered.length === 1 ? "player" : "players"}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.length > 0 &&
            filtered.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
        </div>
      </div>
    </main>
  );
};
