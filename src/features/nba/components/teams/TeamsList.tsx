import type { Team } from "@/nba/interfaces/team.interface";
import type { FC } from "react";
import { TeamCard } from "./TeamCard";

interface Props {
  teams: Team[];
}
export const TeamsList: FC<Props> = ({ teams }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {teams.length > 0 ? (
          teams.map((team) => <TeamCard key={team.id} team={team} />)
        ) : (
          <h1 className="text-2xl font-thin text-muted-foreground mt-5">
            No hay equipos disponibles
          </h1>
        )}
      </div>
    </>
  );
};
