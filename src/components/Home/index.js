import React, { useContext, useEffect, useState } from 'react';
import { API_KEY } from '../../API';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HomeNext from '../HomeNext';
import { MovieContext } from '../../context';
import HomeMovie from '../HomeMovie';


const Home = () => {
    const [background, setbackground] = useState([])
    const {language} = useContext(MovieContext)

    const getBackground = (key) => {
        axios(
            `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}`
          ).then((res) => {
              setbackground(res.data.results.map((el)=> el.backdrop_path));
          });
    }
    
    
    useEffect(()=> {
        getBackground(API_KEY)
    }, [language])
    
    const getBckg = Math.floor(Math.random() * background.length)
    const getBckgImg = background[getBckg]

    return (
        <>
        <div  style={{background : `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${getBckgImg})`}} id='home'>
            <div className="container">
                <div className="home">
                    <div className="home--text">
                        <center>
                        <h1>Welcome. <br /> <span> Millions of films, TV series and people. Explore now.</span></h1>
                       <div className="search">
                        <input type="text" name="" id="" placeholder='Search films, serial, person....'/>
                        <button>Search</button>
                       </div>
                       </center>
                    </div>
                </div>
            </div>
            <div className="bcg"></div>
        </div>
        <HomeNext/> 
        <HomeMovie/>

        </>
    );
};

export default Home;