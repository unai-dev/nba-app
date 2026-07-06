import axios from "axios";
import type { Player } from "../interfaces/player.interface";
import type { PlayerResponse } from "../interfaces/player.response";

export const getPlayers = async (): Promise<Player[]> => {
  const { data } = await axios.get<PlayerResponse>("/api/players", {
    params: {
      limit: 30,
    },
  });

  return data.data.map((player) => ({
    id: player._id,
    name: player.name,
    archetype: player.archetype,
    badges: player.badges,
    height: player.height,
    img: player.playerImage,
    overall: player.overall,
    positions: player.positions,
    slug: player.slug,
    team: player.team,
    url: player.playerUrl,
    weight: player.weight,
  }));
};
