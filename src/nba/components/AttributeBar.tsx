import type { FC } from "react";

interface Props {
  label: string;
  value: number;
}

export const AttributeBar: FC<Props> = ({ label, value }) => {
  const elite = value >= 90;
  return (
    <div className="flex items-center gap-4 border-b border-border py-2.5 last:border-b-0">
      <span className="w-40 shrink-0 text-sm text-muted-foreground">
        {label}
      </span>
      <div className="h-3 flex-1 border border-foreground/30 bg-background">
        <div
          className={`h-full ${elite ? "bg-hoop" : "bg-foreground"}`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="w-8 shrink-0 text-right font-display text-base font-semibold">
        {value}
      </span>
    </div>
  );
};
