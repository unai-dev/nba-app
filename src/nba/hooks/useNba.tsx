import { useState, useEffect } from "react";

import { getPlayers } from "../actions/get-players.action";
import type { Player } from "../interfaces/player.interface";
import { MOCK_PLAYERS } from "../mock-data/mock.data";

export const useNba = () => {
  const [query, setQuery] = useState("");
  const [players, setPlayers] = useState<Player[]>(MOCK_PLAYERS);

  useEffect(() => {
    const timeoutID = setTimeout(async () => {
      const apiPlayers = await getPlayers();

      setPlayers(apiPlayers);
    }, 1000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  const results = players.filter((p) => {
    return (
      // busqueda por nombre
      p.name.toLowerCase().includes(query) ||
      // busqueda por equipo
      p.team.toLowerCase().includes(query) ||
      // busqueda por arquetipo
      p.archetype.toLowerCase().includes(query)
    );
  });

  const handleQuery = (query: string) => {
    setQuery(query);
  };

  const resetQuery = () => setQuery("");

  return {
    query,
    players,
    results,

    handleQuery,
    resetQuery,
  };
};
