import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function Singlemovie() {
  let result = useParams();

  let [record, setRecord] = useState(null);
  let [cast, setCast] = useState([]);

  useEffect(
    function () {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${result.id}?api_key=d71534b45d39c45664a7c5c3f1022f38&language=en-US&append_to_response=credits`,
        )
        .then(function (res) {
          console.log(res.data);

          setRecord(res.data);
          setCast(res.data.credits.cast);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    [result.id],
  );

  if (!record) {
    return <h1 className="text-center p-10">Loading...</h1>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Movie Details */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img
            src={"https://image.tmdb.org/t/p/w500" + record.poster_path}
            alt={record.title}
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-4xl font-bold">{record.title}</h1>

          <p>Release Date: {record.release_date}</p>

          <p className="text-yellow-500 font-bold text-xl">
            {record.vote_average?.toFixed(1)} / 10
          </p>

          <p>
            <b>Runtime:</b> {record.runtime} minutes
          </p>

          <p>
            <b>Status:</b> {record.status}
          </p>

          <div>
            <b>Genres:</b>
            <div className="flex flex-wrap gap-2 mt-2">
              {record.genres?.map((value) => (
                <span
                  key={value.id}
                  className="bg-red-600 text-white px-3 py-1 rounded-full"
                >
                  {value.name}
                </span>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-3">Overview</h2>

          <p className="text-gray-600 leading-7">{record.overview}</p>
        </div>
      </div>

      {/* Cast Section */}

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Top Cast</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {cast.slice(0, 10).map((value) => (
            <div
              key={value.cast_id || value.id}
              className="shadow-md rounded-lg overflow-hidden text-center"
            >
              <img
                src={
                  value.profile_path
                    ? "https://image.tmdb.org/t/p/w300" + value.profile_path
                    : "https://placehold.co/300x450?text=No+Image"
                }
                alt={value.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-3">
                <h3 className="font-bold">{value.name}</h3>

                <p className="text-gray-500 text-sm">{value.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link
        to="/"
        className="inline-block mt-8 bg-red-600 text-white px-6 py-3 rounded-lg"
      >
        Back to Home
      </Link>
    </div>
  );
}
