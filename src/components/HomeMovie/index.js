import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../../context';
import axios from 'axios';
import { API_KEY } from '../../API';
import MovieCard from '../MovieCard';
import { SlArrowRightCircle } from "react-icons/sl";
import { SlArrowLeftCircle } from "react-icons/sl";

const HomeMovie = () => {
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
          getPopular(API_KEY);
      }, [page, language]);
    return (
        <div id="homeMovie">
        <div className="container">
                <h1>Popular - Films</h1>
              <div className="homeMovie">
                {popular.map((el, idx, arr) => (
                  <MovieCard el={el} key={idx}/>
                ))}
              </div>
        </div>
      </div>
    );
};

export default HomeMovie;