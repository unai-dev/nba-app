import { useState, useEffect } from "react";

import { getPlayers } from "../actions/get-players.action";
import type { Player } from "../interfaces/player.interface";
import { MOCK_PLAYERS, MOCK_TEAMS } from "../mock-data/mock.data";
import type { Team } from "../interfaces/team.interface";
import { getTeams } from "../actions/get-teams.action";

export const useNba = () => {
  const [query, setQuery] = useState("");
  const [players, setPlayers] = useState<Player[]>(MOCK_PLAYERS);
  const [teams, setTeams] = useState<Team[]>(MOCK_TEAMS);

  useEffect(() => {
    const timeoutID = setTimeout(async () => {
      const apiPlayers = await getPlayers();

      setPlayers(apiPlayers);
    }, 1000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  useEffect(() => {
    const timeoutID = setTimeout(async () => {
      const teamsApi = await getTeams();

      setTeams(teamsApi);
    }, 1000);

    return () => clearTimeout(timeoutID);
  }, []);

  const playerResults = players.filter((p) => {
    return (
      // busqueda por nombre
      p.name.toLowerCase().includes(query) ||
      // busqueda por equipo
      p.team.toLowerCase().includes(query) ||
      // busqueda por arquetipo
      p.archetype.toLowerCase().includes(query)
    );
  });

  const teamResults = teams.filter((team) => {
    return (
      team.name.toLowerCase().includes(query) ||
      team.city.toLowerCase().includes(query) ||
      team.abbreviation.toLowerCase().includes(query) ||
      team.division.toLowerCase().includes(query) ||
      team.arena.toLowerCase().includes(query)
    );
  });

  const handleQuery = (query: string) => {
    setQuery(query);
  };

  const resetQuery = () => setQuery("");

  return {
    query,
    players,
    teams,
    playerResults,
    teamResults,

    handleQuery,
    resetQuery,
  };
};
