import type { FC } from "react";

import { CustomSearchBar } from "@/components/shared/CustomSearchBar";
import { CustomHeader } from "@/components/shared/CustomHeader";
import { Navbar } from "@/components/shared/Navbar";
import { useNbaTeams } from "../hooks/useNbaTeams";
import { TeamsList } from "../components/teams/TeamsList";
import { ResultsCount } from "../components/shared/ResultsCount";

export const TeamsPage: FC = () => {
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
          <ResultsCount
            query={query}
            results={teamResults.length}
            onClick={() => setQuery("")}
          />

          {/* Grid */}
          <TeamsList teams={teamResults} />
        </div>
      </main>
    </>
  );
};
