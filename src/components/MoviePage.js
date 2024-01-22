function MoviePage({ item }) {
  const rating = Number(item.vote_average).toFixed(1);

  return (
    <div className="bg-zinc-800 px-14">
      <div className="flex pb-4 pt-14 items-center space-x-6">
        <h3 className="flex text-white justify-start text-6xl">{item.title}</h3>
        <p className="flex text-white justify-end m-3 text-2xl ">
          <span>⭐️</span> {rating}
        </p>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
        alt={`${item.title} poster`}
        className="pb-12 w-80"
      />
      <p className=" text-white pb-14 text-xl">{item.overview}</p>
    </div>
  );
}

export default MoviePage;
