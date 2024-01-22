import { useEffect, useState } from "react";
import MovieDetail from "./MovieDetail";

function MoviePath({ selectedId }) {
  const [imdbId, setImdbId] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2ZhN2UyZmI4NDBjOWVhMDUzNTY5YjA4Y2EzZjFkNCIsInN1YiI6IjY1YWNjMjdmMzk3NTYxMDEwYzQ0ZDA3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._TpaI2R6lEDgdds690aKCquAVpTj9ZHMrU1OVks60Dg",
    },
  };

  const getImdbHandler = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${selectedId}/external_ids`,
      options
    );
    const data = await res.json();
    setImdbId(data.imdb_id);
  };

  useEffect(() => {
    getImdbHandler();
  }, []);

  return (
    <div>
      <MovieDetail imdbId={imdbId} />
    </div>
  );
}

export default MoviePath;
