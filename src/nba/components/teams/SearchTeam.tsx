import { MOCK_TEAMS } from "@/nba/mock-data/mock.data";
import { useState, useMemo } from "react";
import { TeamCard } from "./TeamCard";
import { CustomSearchBar } from "@/components/shared/CustomSearchBar";

export const SearchTeam = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    const results = MOCK_TEAMS.filter((t) => {
      const matchesQuery =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.city.toLowerCase().includes(q) ||
        t.abbreviation.toLowerCase().includes(q) ||
        t.division.toLowerCase().includes(q) ||
        t.arena.toLowerCase().includes(q);

      return matchesQuery;
    });
    return results;
  }, [query]);

  return (
    <main className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[oklch(0.72_0.2_48/30%)] bg-[oklch(0.72_0.2_48/8%)] mb-4">
            <span
              className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"
              aria-hidden="true"
            />
            <span className="text-primary text-[11px] font-bold tracking-widest uppercase">
              2K25 Franchises
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground text-balance">
            NBA Team <span className="text-primary">Search</span>
          </h1>
          <p className="text-muted-foreground mt-3 text-sm font-medium">
            Explore ratings, records &amp; history across all franchises
          </p>
        </header>

        {/* Search & Controls */}
        <CustomSearchBar
          placeholder="Search teams, cities, divisions..."
          query={query}
          onQuery={() => console.log("hellow")}
        />

        {/* Results count */}
        <div className="mb-5 flex items-center gap-2">
          <span className="text-muted-foreground text-xs font-medium">
            {filtered.length} {filtered.length === 1 ? "team" : "teams"} found
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
          {filtered.length > 0 ? (
            filtered.map((team) => <TeamCard key={team.id} team={team} />)
          ) : (
            <h1>No hay equipos disponibles</h1>
          )}
        </div>
      </div>
    </main>
  );
};
