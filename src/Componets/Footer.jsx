import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-gray-100 mt-10">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold uppercase tracking-widest text-red-500 hover:text-red-400 transition duration-300">
          MovieDB
        </h1>

        <p className="text-gray-600">
          Discover your favourite movies and explore the world of cinema.
        </p>

        <div className="flex justify-center gap-6 p-4">
          <a href="/" className="hover:text-blue-600">
            Home
          </a>
          <a href="/upcoming" className="hover:text-blue-600">
            Upcoming
          </a>
          <a href="/toprated" className="hover:text-blue-600">
            Top Rated
          </a>
        </div>

        <hr className="border-gray-300" />

        <p className="text-sm text-gray-500 p-4">
          © {new Date().getFullYear()} MovieDB. All rights reserved.
        </p>
      </div>
    </div>
  );
}
