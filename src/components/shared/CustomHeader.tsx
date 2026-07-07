import type { FC } from "react";

interface Props {
  label: string;
  title: string;
  subTitle: string;
}

export const CustomHeader: FC<Props> = ({ label, subTitle, title }) => {
  return (
    <>
      <header className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[oklch(0.72_0.2_48/30%)] bg-[oklch(0.72_0.2_48/8%)] mb-4">
          <span
            className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"
            aria-hidden="true"
          />
          <span className="text-primary text-[11px] font-bold tracking-widest uppercase">
            {label}
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground text-balance">
          {title} <span className="text-primary">Search</span>
        </h1>
        <p className="text-muted-foreground mt-3 text-sm font-medium">
          {subTitle}
        </p>
      </header>
    </>
  );
};
