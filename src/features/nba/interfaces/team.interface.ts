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
  wins: number;
  losses: number;
  colors: {
    primary: string;
    secondary: string;
  };
}
