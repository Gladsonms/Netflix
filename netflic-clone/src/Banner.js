import { useState, useEffect } from "react";

import axios from "./axios";
import requests from "./request";

import "./banner.css";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
      // Math.floor(Math.random()*request.data.result.length -1)
    }
    fetchData();
  }, []);
  console.log("movie", movies);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      {/* background image */}
      <div className="banner_content">
        {/* title */}
        <h1 className="banner_title">
          {movies?.title || movies?.name || movies?.orginal_name}
        </h1>
        {/* 2 BUTTONS */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        {/* DESCRIPCTION */}
        <div className="banner_description">
          {truncate(movies?.overview, 150)}
        </div>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
};
export default Banner;
