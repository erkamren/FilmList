import { useEffect, useState } from "react";
import Movie from "./Movie";

function Filmlist({ setSelectedId }) {
  const [movies, setMovies] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2ZhN2UyZmI4NDBjOWVhMDUzNTY5YjA4Y2EzZjFkNCIsInN1YiI6IjY1YWNjMjdmMzk3NTYxMDEwYzQ0ZDA3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._TpaI2R6lEDgdds690aKCquAVpTj9ZHMrU1OVks60Dg",
    },
  };

  const getTrendMoviesHandler = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    );
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    getTrendMoviesHandler();
  }, []);

  console.log(movies);

  return (
    <div className="">
      <p className="flex text-purple-800 items-center justify-center text-5xl tracking-wider m-12">
        Welcome to Fimlist!!!
      </p>
      <ul className="flex flex-wrap gap-10 mx-7 justify-center">
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} setSelectedId={setSelectedId} />
        ))}
      </ul>
    </div>
  );
}
export default Filmlist;
