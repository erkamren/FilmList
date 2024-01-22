import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Searchbar({ query, setQuery }) {
  return (
    <Link
      to="/search"
      className="bg-white 
    rounded-md 
    h-10 
    flex 
    w-1/2
    items-center"
    >
      <input
        placeholder=" Search  Filmlist"
        className="rounded-md
        w-full
        mx-3
        focus:outline-none"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <MagnifyingGlassIcon
        className="h-8
        text-slate-500
        "
      />
    </Link>
  );
}

export default Searchbar;
