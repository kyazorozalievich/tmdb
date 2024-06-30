import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import user from "../../assets/img/useer.png";
import { Link } from "react-router-dom";
import MovieCard from "../MovieCard";
import { MovieContext } from "../../context";

const ActorFilms = ({ id }) => {
  const [actorFilm, setActorFilm] = useState([]);
  const {language} =  useContext(MovieContext)

  const getActorFilms = (key) => {
    axios(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=${language}`
    ).then((res) => {
      setActorFilm(res.data.cast);
      console.log(res.data.cast);
    });
  };

  useEffect(() => {
    getActorFilms(API_KEY);
  }, [language]);

  return (
    <div id="actorFilms">
      {/* <div className="container"> */}
      <div className="actorFilms">
        {actorFilm.map((el) => (
          <div className="actorFilms--movie">
            <Link to={`/details/${el.id}`}> 
            <img
              src={
                el.backdrop_path
                ? `https://media.themoviedb.org/t/p/w220_and_h330_face${el.backdrop_path}`
                : user
              }
              alt=""
              />
              </Link>
            <h3>{el.title}</h3>
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
};

export default ActorFilms;
