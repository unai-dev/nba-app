import { Handshake, Menu, UserRound } from "lucide-react";
import { useState, type FC } from "react";
import { Link } from "react-router";

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`flex min-h-screen flex-col justify-between border-r-2 border-white/20  px-3 py-4 backdrop-blur-md transition-[width] duration-300 ease-out ${
        isOpen ? "w-60" : "w-20"
      }`}
    >
      <div className="space-y-6">
        <div className="flex justify-start px-3">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition hover:bg-white/10"
          >
            <Menu />
          </button>
        </div>

        <div className="space-y-3">
          <div className="px-2">
            <p
              className={`text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400 ${isOpen ? "block" : "hidden"}`}
            >
              Menu
            </p>
          </div>

          <Link
            to="/players"
            className="flex w-full items-center justify-start gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-white transition hover:border hover:border-primary hover:bg-white/10"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary">
              <UserRound />
            </span>
            <span
              className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${
                isOpen ? "max-w-24 opacity-100" : "max-w-0 opacity-0"
              }`}
            >
              Players
            </span>
          </Link>

          <Link
            to="/teams"
            className="flex w-full items-center justify-start gap-3 rounded-xl px-3 py-3 text-sm font-medium text-white transition hover:border hover:border-primary hover:bg-white/10"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary">
              <Handshake />
            </span>
            <span
              className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${
                isOpen ? "max-w-24 opacity-100" : "max-w-0 opacity-0"
              }`}
            >
              Teams
            </span>
          </Link>
        </div>
      </div>
    </aside>
  );
};
