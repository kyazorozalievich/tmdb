import React, { useContext } from 'react';
import { MdOndemandVideo } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MovieContext } from '../../context';
import film from '../../assets/img/film.jpeg'

const MovieCard = ({el}) => {
  const {dark} = useContext(MovieContext)
    return (
        <div className="blocks" key={el.id} style={{
        }}>
          <Link to={`/details/${el.name}`}>
        <img
          src={el.poster_path ? `https://media.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`: film}
          alt=""
        />
          </Link>
          <div className="reiting">
            <h2>{Math.round(el.vote_average * 10)}</h2>
            <p>%</p>
              </div>
        <h1>{el.title}</h1>
        <div className="data">
        <h6>{el.release_date}</h6>
        <h5>{<MdOndemandVideo /> }</h5>
        </div>
      </div>
    );
};

export default MovieCard;