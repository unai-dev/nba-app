export interface PlayerResponse {
  id: string;
  height: string;
  name: string;
  slug: string;
  overall: number;
  img: string;
  url: string;
  team: string;
  positions: string[];
  weight: string;
  badges: Badges;
  archetype: string;
}

export interface Badges {
  bronze: number;
  gold: number;
  hallOfFame: number;
  legendary: number;
  silver: number;
  total: number;
}
