import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";

import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  //run condition of variable
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.table(movies);

  return (
    <div className="row">
      {/* title */}

      <h2>{title}</h2>

      {/* cotainer for posters of film*/}
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row_poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Row;
