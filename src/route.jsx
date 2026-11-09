import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./Componets/App";
import Home from "./Componets/Home";
import Upcoming from "./Componets/Upcoming";
import Toprated from "./Componets/Toprated";
import Searchmovie from "./Componets/Searchmovie";
import Singlemovie from "./Componets/Singlemovie";
const PROJECTROUTE = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="toprated" element={<Toprated />} />
        <Route path="search" element={<Searchmovie />} />
        <Route path="singlemovie/:id" element={<Singlemovie />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
export default PROJECTROUTE;

// 263969180f620b2160c1aea08bba6347
// https://api.themoviedb.org/3/movie/upcoming?api_key=263969180f620b2160c1aea08bba6347&language=en-US&page=1
