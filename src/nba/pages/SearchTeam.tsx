import { useEffect, useState } from "react";

import { TeamCard } from "../components/teams/TeamCard";
import { CustomSearchBar } from "@/components/shared/CustomSearchBar";
import { CustomHeader } from "@/components/shared/CustomHeader";
import { getTeams } from "../actions/get-teams.action";
import type { Team } from "../interfaces/team.interface";

export const SearchTeam = () => {
  const [query, setQuery] = useState("");
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const timeoutID = setTimeout(async () => {
      const teamsApi = await getTeams();

      setTeams(teamsApi);
    }, 1000);

    return () => clearTimeout(timeoutID);
  }, []);

  const results = teams.filter((team) => {
    return (
      team.name.toLowerCase().includes(query) ||
      team.city.toLowerCase().includes(query) ||
      team.abbreviation.toLowerCase().includes(query) ||
      team.division.toLowerCase().includes(query) ||
      team.arena.toLowerCase().includes(query)
    );
  });

  const handleSearch = (query: string) => {
    setQuery(query);
  };

  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <CustomHeader
          label="2K25 Franchises"
          title="NBA Team"
          subTitle="Explore ratings, records &amp; history across all franchises"
        />

        {/* Search & Controls */}
        <CustomSearchBar
          placeholder="Search teams, cities, divisions..."
          query={query}
          onQuery={handleSearch}
        />

        {/* Results count */}
        <div className="mb-5 flex items-center gap-2">
          <span className="text-muted-foreground text-xs font-medium">
            {results.length} {results.length === 1 ? "team" : "teams"} found
          </span>
          {query && (
            <button
              onClick={() => {
                setQuery("");
              }}
              className="text-primary text-xs font-semibold hover:underline"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {results.length > 0 ? (
            results.map((team) => <TeamCard key={team.id} team={team} />)
          ) : (
            <h1>No hay equipos disponibles</h1>
          )}
        </div>
      </div>
    </main>
  );
};
