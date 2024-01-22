import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Flogo from "../images/Flogo.jpg";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Searchbar from "./Searchbar";

function Header({ query, setQuery }) {
  return (
    <div
      className="
    h-20 
    bg-neutral-900 
    flex 
    p-2 
    items-center
    pl-5"
    >
      <img src={Flogo} className="h-full" alt="flogo" />
      <Link to="/">
        <div
          className="flex 
        gap-2 
        m-2 
        px-6
        items-center
        justify-center  hover:bg-neutral-800
        rounded-md
        cursor:pointer"
        >
          <Bars3Icon
            className="text-neutral-50 
        w-8"
          />
          <p
            className="text-neutral-50 
        text-lg"
          >
            Main
          </p>
        </div>
      </Link>
      <Searchbar query={query} setQuery={setQuery} />
    </div>
  );
}

export default Header;
