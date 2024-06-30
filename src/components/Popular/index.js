import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import loading from "../../assets/img/loading2.svg";
import { SlArrowRightCircle } from "react-icons/sl";
import { SlArrowLeftCircle } from "react-icons/sl";
import { API_KEY } from "../../API";
import MovieCard from "../MovieCard";
import { MovieContext } from "../../context";

const Popular = () => {
  const [popular, setpopular] = useState([]);
  const {language} = useContext(MovieContext)
  const {page, setPage} = useContext(MovieContext)

  const getPopular = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${page}`
    ).then((res) => {
      setpopular(res.data.results);
    });
  };
  

  useEffect(() => {
    setpopular([])
    window.scroll(0, 0);
    setTimeout(() => {
      getPopular(API_KEY);
    }, 1000);
  }, [page, language]);
  console.log(popular);
  return (
    <div id="popular">
      <div className="container">
        { !popular.length ? (
          <center>
                <img src={loading} alt=""className="loading" />
            </center>
        ) : (
          <>
          <center>
              <h1>Popular - Films</h1>
          </center>
            <div className="popular">
              {popular.map((el, idx, arr) => (
                <MovieCard el={el} key={idx}/>
              ))}
            </div>
            <div className="poganation">
              <h1 onClick={() => {setPage(page > 1 ? page - 1 : 1)}}>{<SlArrowLeftCircle />}</h1>
              <h2>{page}</h2>
              <h1 onClick={() => {setPage(page + 1)}} >{<SlArrowRightCircle />}</h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Popular;
