import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../../API';
import loading from '../../assets/img/loading2.svg'
import MovieCard from '../MovieCard';

const Search = () => {
    const {movieName} = useParams()
    const [searchFilm, setSearchFilm] = useState('')

    const getSearchFilm = (key) => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`).then((res)=> {
            setSearchFilm(res.data.results)
        })
    }
     
    useEffect(()=> {
        getSearchFilm(API_KEY)
    })

    console.log(searchFilm, 'hi');

    return (
        <div id="popular">
      <div className="container">
        { !searchFilm.length ? (
          <center>
                <img src={loading} alt=""className="loading" />
            </center>
        ) : (
          <>
         
            <div className="popular">
              {searchFilm.map((el, idx, arr) => (
                <MovieCard el={el} key={idx}/>
              ))}
            </div>

          </>
        )}
      </div>
    </div>
    );
};

export default Search;