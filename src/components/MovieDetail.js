import { useEffect, useState } from "react";
import MoviePage from "./MoviePage";

function MovieDetail({ imdbId }) {
  const [movieDetails, setMovieDetails] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2ZhN2UyZmI4NDBjOWVhMDUzNTY5YjA4Y2EzZjFkNCIsInN1YiI6IjY1YWNjMjdmMzk3NTYxMDEwYzQ0ZDA3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._TpaI2R6lEDgdds690aKCquAVpTj9ZHMrU1OVks60Dg",
    },
  };
  const getMovieDetailHandler = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/find/${imdbId}?external_source=imdb_id`,
      options
    );
    const data = await res.json();
    setMovieDetails(data.movie_results);
  };

  useEffect(() => {
    getMovieDetailHandler();
  }, [movieDetails]);

  return (
    <div>
      {movieDetails?.map((item) => (
        <MoviePage item={item} key={item.id} />
      ))}
    </div>
  );
}

export default MovieDetail;
