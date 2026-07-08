import { CustomSearchBar } from "@/components/shared/CustomSearchBar";
import { CustomHeader } from "@/components/shared/CustomHeader";
import { Navbar } from "@/components/shared/Navbar";
import { useNbaTeams } from "../hooks/useNbaTeams";
import { TeamsList } from "../components/teams/TeamsList";

export const SearchTeam = () => {
  const { teamResults, query, setQuery } = useNbaTeams();

  return (
    <>
      <Navbar />
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
            onQuery={(query: string) => setQuery(query)}
          />

          {/* Results count */}
          <div className="mb-5 flex items-center gap-2">
            <span className="text-muted-foreground text-xs font-medium">
              {teamResults.length} {teamResults.length === 1 ? "team" : "teams"}{" "}
              found
            </span>
            {query && (
              <button
                onClick={() => setQuery("")}
                className="text-primary text-xs font-semibold hover:underline"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Grid */}
          <TeamsList teams={teamResults} />
        </div>
      </main>
    </>
  );
};
