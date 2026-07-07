import { TeamCard } from "../components/teams/TeamCard";
import { CustomSearchBar } from "@/components/shared/CustomSearchBar";
import { CustomHeader } from "@/components/shared/CustomHeader";
import { useNba } from "../hooks/useNba";

export const SearchTeam = () => {
  const { teamResults, query, handleQuery, resetQuery } = useNba();

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
          onQuery={handleQuery}
        />

        {/* Results count */}
        <div className="mb-5 flex items-center gap-2">
          <span className="text-muted-foreground text-xs font-medium">
            {teamResults.length} {teamResults.length === 1 ? "team" : "teams"}{" "}
            found
          </span>
          {query && (
            <button
              onClick={resetQuery}
              className="text-primary text-xs font-semibold hover:underline"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {teamResults.length > 0 ? (
            teamResults.map((team) => <TeamCard key={team.id} team={team} />)
          ) : (
            <h1>No hay equipos disponibles</h1>
          )}
        </div>
      </div>
    </main>
  );
};
