import { nbaApi } from "../api/nbaApi";
import type { Team } from "../interfaces/team.interface";
import type { TeamResponse } from "../interfaces/team.response";

export const getTeams = async (): Promise<Team[]> => {
  const response = await nbaApi.get<TeamResponse[]>("/teams");

  return response.data.map((team) => ({
    id: team.id,
    abbreviation: team.abbreviation,
    arena: team.arena,
    championships: team.championships,
    city: team.city,
    colors: team.colors,
    division: team.division,
    founded: team.founded,
    logo: team.logo,
    losses: team.record.losses,
    wins: team.record.wins,
    name: team.name,
    overall: team.overall,
    slug: team.slug,
    url: team.url,
  }));
};
