import { useState, useRef, useEffect } from "react";
import { getPlayers } from "../actions/get-players.action";
import type { Player } from "../interfaces/player.interface";
import { MOCK_PLAYERS } from "../mock-data/mock.data";

export const useNbaPlayers = () => {
  const [query, setQuery] = useState("");

  const [players, setPlayers] = useState<Player[]>(MOCK_PLAYERS);
  const playersCache = useRef<Player[]>([]);

  useEffect(() => {
    if (playersCache.current.length > 0) return;

    const timeoutID = setTimeout(async () => {
      const apiPlayers = await getPlayers();

      setPlayers(apiPlayers);
      playersCache.current = apiPlayers;
      console.log(playersCache.current);
    }, 1000);

    return () => {
      clearTimeout(timeoutID);
    };
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

  return {
    query,
    players,
    playerResults,

    setQuery,
  };
};
