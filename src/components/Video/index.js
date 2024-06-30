import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { MovieContext } from "../../context";

// https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=en-US

const Video = ({ movieId }) => {
  const [count, setCount]= useState(3)
  const [video, setvideo] = useState([]);
  const {language} = useContext(MovieContext)
  const getVideo = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=${language}`
    ).then((res) => {
      setvideo(res.data.results);
    });
  };
  useEffect(() => {
    getVideo(API_KEY);
  }, [language]);
  console.log(video);
  return (
    <div>
      <div id="video">
        <div className="container">
          <div className="video">
            {video.slice(0,count).map((el) => (
              <div className="video--block">
                <iframe
                  width="380"
                  height="338"
                  src={`https://www.youtube.com/embed/${el.key}`}
                  title="УЧИЛСЯ ПРОГРАММИРОВАТЬ ВСЕ ЛЕТО"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            ))}
          </div>
            <center>
            <button onClick={()=> {
              video.length >= count? setCount(count + 3) : setCount(3)
            }}>{
              video.length>=count? 'More...' : 'shirt'
            }</button>
            </center>
        </div>
      </div>
    </div>
  );
};

export default Video;
