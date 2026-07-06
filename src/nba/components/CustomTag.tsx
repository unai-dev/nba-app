import type { FC } from "react";

interface Props {
  children: string;
  variant?: string;
}

export const CustomTag: FC<Props> = ({ children, variant = "outline" }) => {
  const styles =
    variant === "solid"
      ? "bg-foreground text-background"
      : variant === "hoop"
        ? "border border-hoop text-hoop"
        : "border border-foreground/40 text-foreground";
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${styles}`}
    >
      {children}
    </span>
  );
};
