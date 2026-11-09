import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Toprated() {
  let [record, setRecord] = useState([]);
  useEffect(function () {
    let apipath = `https://api.themoviedb.org/3/movie/top_rated?api_key=d71534b45d39c45664a7c5c3f1022f38&language=en-US&page=1`;
    axios.get(apipath).then(function (res) {
      console.log(res);
      console.log(res.data.results);
      setRecord(res.data.results);
    });
  }, []);

  return (
    <div className="w-7xl mx-auto">
      <h1 className="text-4xl uppercase p-4 text-center">Top Rated Movies</h1>
      <div className="grid gap-3 grid-cols-4">
        {record &&
          record.map((value) => (
            <div className="text-center p-2 border">
              <img
                src={"https://image.tmdb.org/t/p/w500" + value.poster_path}
                alt=""
              />
              <h2>{value.title}</h2>
              <p>{value.vote_average}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
