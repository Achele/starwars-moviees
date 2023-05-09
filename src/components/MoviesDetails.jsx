import { useLocation, useNavigate } from "react-router-dom";
import Characters from "../sections/Characters";
import Planets from "../sections/Planets";
import Species from "../sections/Species";
import Starships from "../sections/Starships";
import Vehicles from "../sections/Vehicles";
import "../styles/MovieDetails.css";

export default function SingleMovie() {
  const film = useLocation();
  const navigate = useNavigate();
  const { movie } = film.state;
  console.log(`"movies:" ${movie}`);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <section className="details-main">
        <section className="details">
          <header>
            <div className="back">
              <button onClick={handleClick}>&larr; Back to list</button>
            </div>

            <h2>{movie.title}</h2>
            <p>Director: {movie.director}</p>
            <p>Producer: {movie.producer}</p>
          </header>

          <section className="characters">
            <h3 className="gray">Description</h3>
            <p>{movie.opening_crawl}</p>
          </section>

          <section className="characters">
            <h3>Characters</h3>
            <ul>
              {movie.characters.map((character, key) => (
                <Characters key={key} character={character} />
              ))}
            </ul>
          </section>
          <section className="characters">
            <h3>planets</h3>
            <ul>
              {movie.planets.map((planet) => (
                <Planets planet={planet} />
              ))}
            </ul>
          </section>
          <section className="characters">
            <h3>Species</h3>
            <ul>
              {movie.species.map((specie) => (
                <Species specie={specie} />
              ))}
            </ul>
          </section>
          <section className="characters">
            <h3>Starships</h3>
            <ul>
              {movie.starships.map((starship) => (
                <Starships starship={starship} />
              ))}
            </ul>
          </section>
          <section className="characters">
            <h3>Vehicles</h3>
            <ul>
              {movie.vehicles.map((vehicle) => (
                <Vehicles vehicle={vehicle} />
              ))}
            </ul>
          </section>
        </section>
      </section>
    </>
  );
}
