import { Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import Header from "./components/Header";
import MovieDetails from "./components/MoviesDetails";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/:movie" element={<MovieDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
