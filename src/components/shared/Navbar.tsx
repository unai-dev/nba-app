import type { FC } from "react";
import { Link } from "react-router";

export const Navbar: FC = () => {
  return (
    <nav className="w-full border-b border-[rgba(255,255,255,0.12)] bg-slate-950/60 backdrop-blur-md ">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <div>
          <span className="text-lg font-semibold tracking-tight text-white">
            NBA <span className="text-primary">Explorer</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/players"
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10 hover:ring-2 hover:ring-primary"
          >
            Players
          </Link>
          <Link
            to="/teams"
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10 hover:ring-2 hover:ring-primary "
          >
            Teams
          </Link>
        </div>
      </div>
    </nav>
  );
};
