import { Search } from "lucide-react";
import { type FC } from "react";

interface Props {
  placeholder: string;
<<<<<<< HEAD
  query: string;
=======

>>>>>>> 9ee5d8fdda05cd1d7239db5658d17684a7ad2ce6
  onQuery: (query: string) => void;
}

export const CustomSearchBar: FC<Props> = ({ onQuery, placeholder, query }) => {
  return (
    <div className="relative group mb-5">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors duration-200  cursor-pointer"
        size={18}
      />
      <input
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => onQuery(e.target.value.trim().toLowerCase())}
        className="w-full h-14 pl-12 pr-12 rounded-2xl border border-[oklch(1_0_0/8%)] bg-[oklch(0.15_0.008_240)] text-foreground placeholder:text-muted-foreground text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
      />
    </div>
  );
};
