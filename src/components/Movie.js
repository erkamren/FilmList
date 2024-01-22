import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/solid";

function Movie({ movie, setSelectedId }) {
  const rating = Number(movie.vote_average).toFixed(1);

  return (
    <li className="relative">
      <PlusIcon className="absolute cursor-pointer h-14 w-6 top-0 start-0 text-white bg-trans hover:bg-yellow-500 hover:text-black" />
      <Link to="/details">
        <img
          onClick={() => setSelectedId(movie.id)}
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
      </Link>
      <div className="bg-zinc-900 h-52 py-3 text-xl max-w-52">
        <p className="text-white m-3">
          <span>⭐️</span> {rating}
        </p>

        <h3 className="text-white m-4">{movie.title}</h3>

        <button className=" text-blue-400 bg-zinc-800 w-4/5 text-lg  rounded absolute bottom-4 flex justify-center items-center gap-2 hover:bg-slate-700 h-9 left-5">
          <PlusIcon className="w-6 mr-0" /> Favori
        </button>
      </div>
    </li>
  );
}
export default Movie;
