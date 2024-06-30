import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import MovieCard from "../MovieCard";
import { SlArrowRightCircle } from "react-icons/sl";
import { SlArrowLeftCircle } from "react-icons/sl";
import loading from "../../assets/img/loading2.svg";
import { MovieContext } from "../../context";

const TopRated = () => {
  const [rated, setrated] = useState([]);
  // const [poganation, setpoganation] = useState(1)
  const { language } = useContext(MovieContext);
  const { page, setPage } = useContext(MovieContext);

  const getRated = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${page}`
    ).then((res) => {
      setrated(res.data.results);
    });
  };

  useEffect(() => {
    setrated([]);
    window.scroll(0, 0);
    setTimeout(() => {
      getRated(API_KEY);
    }, 1000);
  }, [page, language]);
  return (
    <div id="popular">
      <div className="container">
        {!rated.length ? (
          <center>
            <img src={loading} alt="" className="loading" />
          </center>
        ) : (
          <>
            <center>
              <h1>Top - Films</h1>
            </center>
            <div className="popular">
              {rated.map((el, idx, arr) => (
                <MovieCard el={el} key={idx} />
              ))}
            </div>
            <div className="poganation">
              <h1
                onClick={() => {
                  setPage(page > 1 ? +page - 1 : 1);
                }}
              >
                {<SlArrowLeftCircle />}
              </h1>
              <h2>{page}</h2>
              <h1
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                {<SlArrowRightCircle />}
              </h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TopRated;
