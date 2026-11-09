import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchMovie } from "./redux/slices/searchSlice.jsx";

export default function Header() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let x1 = useRef();

  function myFunction(e) {
    e.preventDefault();

    let movie = x1.current.value.trim();

    if (movie !== "") {
      dispatch(searchMovie(movie));
      navigate("/search");
    }
  }

  return (
    <header className="w-full bg-cyan-950 shadow-lg sticky top-0 z-50 border-b border-cyan-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-4 gap-5">
        {/* Logo */}
        <figure className="logo">
          <Link
            to="/"
            className="transition-transform duration-300 hover:scale-105 inline-block"
          >
            <img
              src="https://png.pngtree.com/element_our/png/20181113/clapperboard-film-logo-icon-design-template-vector-isolated-png_236642.jpg"
              width={170}
              alt="MovieDB Logo"
              className="w-12 h-12 object-contain"
            />
          </Link>
        </figure>

        {/* Navigation */}
        <nav>
          <ul className="flex flex-wrap justify-center items-center gap-3 md:gap-7 text-white font-semibold">
            <li>
              <Link
                to="/"
                className="px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1 inline-block"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/upcoming"
                className="px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1 inline-block"
              >
                Upcoming
              </Link>
            </li>

            <li>
              <Link
                to="/toprated"
                className="px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1 inline-block"
              >
                Top Rated
              </Link>
            </li>

            {/* Search */}
            <li>
              <form
                onSubmit={myFunction}
                className="flex items-center bg-gray-800 rounded-full border border-gray-700 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500/30 transition-all duration-300 overflow-hidden"
              >
                <input
                  ref={x1}
                  type="text"
                  placeholder="Search movies..."
                  className="bg-transparent text-white px-5 py-3 outline-none w-40 sm:w-56 placeholder-yellow-400"
                />

                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-3 font-bold hover:bg-blue-700 transition-all duration-300 active:scale-40"
                >
                  Search
                </button>
              </form>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
