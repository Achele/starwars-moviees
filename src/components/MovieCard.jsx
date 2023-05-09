import { Link } from "react-router-dom";
import dateFormat from "./dateFormat";

const MovieCard = (movie, actor) => {
  console.log(`results: ============= ${movie}`);
  return (
    <div className="card">
      <div className="card-info">
        <h2>{movie.title}</h2>
        <p className="release-date">{dateFormat(movie.release_date)}</p>

        <p className="summary">{movie.opening_crawl.substring(0, 260)}...</p>

        <Link
          to={`/:${movie.title}`}
          state={{ movie: movie, actor: actor }}
          className="movie-link"
        >
          More info
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
