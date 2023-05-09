import useFetch from "../hooks/useFetch";

export default function Planets({ planet }) {
  // const url = "https://swapi.dev/api/people";
  const { data } = useFetch(planet);

  // let actors = data.results;
  // console.log(actors, data, character);
  return <>{data && <li className="character-list">{data.name}</li>}</>;
}
