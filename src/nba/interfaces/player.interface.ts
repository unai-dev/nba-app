import type { Badges } from "./badges.interface";

export interface Player {
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
