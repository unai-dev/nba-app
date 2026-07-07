export interface Team {
  id: string;
  name: string;
  city: string;
  abbreviation: string;
  slug: string;
  division: string;
  overall: number;
  logo: string;
  url: string;
  arena: string;
  founded: number;
  championships: number;
  record: TeamRecord;
  colors: {
    primary: string;
    secondary: string;
  };
}
export type Conference = "East" | "West";

export interface TeamRecord {
  wins: number;
  losses: number;
}
