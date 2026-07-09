import type { Player } from "../interfaces/player.interface";
import type { PlayerResponse } from "../interfaces/responses/player.response";
import { nbaApi } from "../api/nbaApi";

export const getPlayers = async (): Promise<Player[]> => {
  const response = await nbaApi.get<PlayerResponse[]>("/players");

  return response.data.map((player) => ({
    id: player.id,
    name: player.name,
    archetype: player.archetype,
    badges: player.badges,
    height: player.height,
    img: player.img,
    overall: player.overall,
    positions: player.positions,
    slug: player.slug,
    team: player.team,
    url: player.url,
    weight: player.weight,
  }));
};
