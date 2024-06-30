import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../API";
import { BsCircleFill } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaHeart } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { IoPlay } from "react-icons/io5";
import Actors from "../../components/Actors";
import { HiMiniXCircle } from "react-icons/hi2";
import Video from "../../components/Video";
import { MovieContext } from "../../context";

const MovieDetails = ({ el }) => {
  const [moviedetails, setmoviedetails] = useState({});
  const [open, setopen] = useState(false);
  let { movieId } = useParams();
  const { language } = useContext(MovieContext);
  const { favorite, setFavorite } = useContext(MovieContext);

  const getMovieId = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=${language}`
    ).then((res) => {
      setmoviedetails(res.data);
      console.log(res.data);
    });
  };

  const addToFavorite = () => {
    let findFavorite = favorite.find((el) => el.id === moviedetails.id);
    if (findFavorite) {
      let deleteFavorite = favorite.filter((el) => el.id !== moviedetails.id);
      setFavorite(deleteFavorite);
      localStorage.setItem("movie", JSON.stringify(deleteFavorite));
    } else {
      let result = [...favorite, moviedetails];
      setFavorite(result);
      localStorage.setItem("movie", JSON.stringify(result));
    }
  };

  let heart = favorite.some((el)=> el.id === moviedetails.id)

  useEffect(() => {
    getMovieId(API_KEY);
  }, [language]);

  let {
    backdrop_path,
    origin_country,
    original_language,
    genres,
    title,
    overview,
    popularity,
    poster_path,
    production_countries,
    release_date,
    status,
    runtime,
    tagline,
    vote_average,
    vote_count,
  } = moviedetails;

 
  console.log(favorite, "movieDetils");
  return (
    <>
      <div
        style={{
          background: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path})`,
        }}
        id="movieDetails"
      >
        <div className="container">
          <div className="movieDetails">
            <img
              onClick={() => {
                setTimeout(() => {
                  setopen(true);
                }, 1000);
              }}
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}
              alt=""
            />
            <div className="movieinfo">
              <h1>{title}</h1>
              <div className="movietime">
                <h4>
                  {release_date}({origin_country})
                </h4>
                <h6>{<BsCircleFill />}</h6>
                <h4>
                  {Math.floor(runtime / 60)}h {runtime % 60}min
                </h4>
              </div>
              <div className="moviereiting">
                <div className="reiting">
                  <h2>{Math.round(vote_average * 10)}</h2>
                  <p>%</p>
                </div>
                <h3>Рейтинг</h3>
                <h4>What's your Vibe?</h4>
              </div>
              <div className="movieicon">
                <a className="">{<TfiMenuAlt />}</a>
                <a
                  className=""
                  onClick={() => {
                    addToFavorite();
                  }}
                >
                  {<FaHeart style={{ color: heart ? "red" : "white" }} />}
                </a>
                <a className="">{<FaBookmark />}</a>
                <h3>{<IoPlay />}Воспроизвести трейлер</h3>
              </div>
              <h5>{tagline}</h5>
              <h3>Обзор</h3>
              <p>{overview}</p>
            </div>
          </div>
          <div style={{ display: open ? "block" : "none" }} className="modal">
            <h3
              onClick={() => {
                setopen(false);
              }}
            >
              {<HiMiniXCircle />}
            </h3>
            <img
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}
              alt=""
            />
            <h1>{title}</h1>
            <div className="phototime">
              <h4>{release_date}</h4>
              <h6>{<BsCircleFill />}</h6>
              <h4>
                {Math.floor(runtime / 60)}h {runtime % 60}min
              </h4>
              <div className="allEmoji">
                <div className="emoji">😁</div>
                <div className="emoji">😘</div>
                <div className="emoji">🤧</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg"></div>
      </div>
      <Actors movieId={movieId} />
      <Video movieId={movieId} />
    </>
  );
};

export default MovieDetails;
