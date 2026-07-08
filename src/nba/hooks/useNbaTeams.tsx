import { useState, useEffect, useRef } from "react";

import type { Team } from "../interfaces/team.interface";
import { getTeams } from "../actions/get-teams.action";
import { MOCK_TEAMS } from "../mock-data/mock.data";

export const useNbaTeams = () => {
  const [query, setQuery] = useState("");
  const [teams, setTeams] = useState<Team[]>(MOCK_TEAMS);
  const teamsCache = useRef<Team[]>([]);

  useEffect(() => {
    if (teamsCache.current.length > 0) return;

    const timeoutID = setTimeout(async () => {
      const teamsApi = await getTeams();

      setTeams(teamsApi);
      teamsCache.current = teamsApi;
    }, 1000);

    return () => clearTimeout(timeoutID);
  }, []);

  const teamResults = teams.filter((team) => {
    return (
      team.name.toLowerCase().includes(query) ||
      team.city.toLowerCase().includes(query) ||
      team.abbreviation.toLowerCase().includes(query) ||
      team.division.toLowerCase().includes(query) ||
      team.arena.toLowerCase().includes(query)
    );
  });

  return {
    query,
    teams,
    teamResults,

    setQuery,
  };
};
