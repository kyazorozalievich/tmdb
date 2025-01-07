import React, { useContext } from 'react';
import { MovieContext } from '../../context';
import MovieCard from '../MovieCard';

const Favorite = () => {
    const {favorite} = useContext(MovieContext)
    console.log(favorite, 'favorite');

    

    return (
        <div id="popular">
        <div className="container">
            <>
            <center>
            </center>
              <div className="popular">
                {favorite.map((el, idx, arr) => (
                  <MovieCard el={el} key={idx}/>
                ))}
              </div>
            </>
        </div>
      </div>
    );
};

export default Favorite;