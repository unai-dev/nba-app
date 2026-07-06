export interface PlayerResponse {
  success: boolean;
  data: PlayerItem[];
  meta: Meta;
}

export interface PlayerItem {
  _creationTime: number;
  _id: string;
  archetype: string;
  attributes: { [key: string]: number };
  badges: Badges;
  build?: string;
  college?: string;
  createdAt: Date;
  gameVersion?: string;
  height: string;
  lastUpdated: Date;
  name: string;
  overall: number;
  playerImage: string;
  playerUrl: string;
  positions: Position[];
  ratingHistory?: RatingHistory[];
  slug: string;
  team: string;
  teamImg: string;
  teamType: string;
  weight: string;
  wingspan: string;
}

export interface Badges {
  bronze: number;
  gold: number;
  hallOfFame: number;
  legendary: number;
  list: List[];
  silver: number;
  total: number;
}

export interface List {
  category: Category;
  description?: string;
  imageUrl?: string;
  name: string;
  tier: Tier;
}

export type Category =
  | "All Around"
  | "Defense"
  | "General Offense"
  | "Inside Scoring"
  | "Outside Scoring"
  | "Playmaking"
  | "Rebounding";

export type Tier = "Bronze" | "Gold" | "Hall of Fame" | "Legendary" | "Silver";

export type Position = "PF" | "SF";

export interface RatingHistory {
  delta?: number;
  gameVersion: string;
  overall: number;
}

export interface Meta {
  count: number;
  total: number;
  truncated: boolean;
}
