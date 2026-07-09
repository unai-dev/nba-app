import type { FC } from "react";

interface Props {
  results: number;
  query: string;
  onClick: () => void;
}

export const ResultsCount: FC<Props> = ({ onClick, query, results }) => {
  return (
    <>
      <div className="mb-5 flex items-center gap-2">
        <span className="text-muted-foreground text-sm">
          {results} {results > 1 ? "resultados" : "resultado"}
        </span>
        {query && (
          <button
            onClick={onClick}
            className="text-primary text-xs font-semibold hover:underline "
          >
            Limpiar
          </button>
        )}
      </div>
    </>
  );
};
