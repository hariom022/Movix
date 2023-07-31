import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./Pages/HomePage";
import TopRated from "./TopRated/TopRated";
import MovieDetails from "./Details/MovieDetails";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Trending from "./Trending/Trending";
import Popular from "./Popular/Popular";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/toprated" element={<TopRated />} />
        <Route path="/toprated/details/:id" element={<MovieDetails />} />
        <Route exact path="/trending" element={<Trending />} />
        <Route path="/trending/details/:id" element={<MovieDetails />} />
        <Route exact path="/popular" element={<Popular />} />
        <Route path="/popular/details/:id" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

{
  /* {movie.isLoading ? "Loading..." : <Movie movie={movie} />} */
}
