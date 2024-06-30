import React, { useContext } from 'react';
import { MovieContext } from '../../context';
import MovieCard from '../MovieCard';
import loading from '../../assets/img/loading2.svg'

const Favorite = () => {
    // const [color, setColor] = useState(false)
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