import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import user from "../../assets/img/useer.png";
import { Link } from "react-router-dom";
import { MovieContext } from "../../context";

const Actors = ({ movieId }) => {
  const [movieactor, setmovieactor] = useState([]);
  const {language} = useContext(MovieContext)
  const getActor = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=${language}`
    ).then((res) => {
      setmovieactor(res.data.cast);
      console.log(res.data.cast);
    });
  };

  useEffect(() => {
    getActor(API_KEY);
  }, [language]);

  return (
    <div className="container">
      <div className="actor">
        <h1>В главных ролях</h1>
        <div className="actors">
          {movieactor.map((el) => (
            <div className="movie-actor">
              <Link to={`/actorDetails/${el.id}`}>
              
              <img
                src={
                  el.profile_path
                    ? `https://media.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`
                    : user
                }
                alt=""
              />
              </Link>
              <h1>{el.name}</h1>
              <h4>{el.character}</h4>
              <h2></h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Actors;
