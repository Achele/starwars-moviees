import dateFormat from "./dateFormat";

const MovieCard = (props) => {
  return (
    <div className="card">
      <div className="card-info">
        <h2>{props.title}</h2>
        <p className="release-date">{dateFormat(props.release_date)}</p>

        <p className="summary">{props.opening_crawl}</p>
        <hr className="line-break" />
        <a href="#">More Info</a>
      </div>
    </div>
  );
};

export default MovieCard;
