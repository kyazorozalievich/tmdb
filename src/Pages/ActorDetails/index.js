import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../API";
import ActorFilms from "../../components/ActorFilms";
import { MovieContext } from "../../context";


const ActorDetails = () => {
  const [countText, setcountText] = useState(200)
  const [ActorBio, setActorBio] = useState({});
  const { personId } = useParams();
  const {language} = useContext(MovieContext)
  // console.log(personId, 'hello');
  const getActorDtl = (key) => {
    axios(
      `https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=${language}`
    ).then((res) => {
      setActorBio(res.data)
      console.log(res.data);
    });
  };
   
  useEffect(() => {
    getActorDtl(API_KEY);
  }, [language]);

  let {
biography, name, birthday, profile_path, 
known_for_department,place_of_birth,also_known_as,
  } = ActorBio
  
  return (
    <>
    <div id="actorDetails">
      <div className="container">
        <div className="actorDetails">
          <div className="actorDetails--info">
          <img src={`	https://media.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`} alt="" />
          <div className="actorDtl-text">
          <h1>Personal information</h1>
          <h2>{name ? 'Name': ''}</h2>
          <h4>{name}</h4>
          <h2>{birthday ? 'Date of Birth': ''}</h2>
          <h4>{birthday}</h4>
          <h2>{place_of_birth ? 'Place of Birth': ''}</h2>
          <h4>{place_of_birth}</h4>
          <h2>{also_known_as ? 'Also known as': ''}</h2>
          <h4 className="also">{also_known_as}</h4>
          </div>
          </div>
          <div className="actorDetails--bio">
            <h1>{name}</h1>
            <h2>Biography</h2>
            <p >{biography?.slice(0, countText)}</p>
            <div className="count">
            <a className="more" onClick={()=> biography.length > countText ? setcountText(biography.length): setcountText(200)}>{biography?.length > countText? 'Read more...': '...close'}</a>
            </div>
              <ActorFilms id={personId}/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ActorDetails;
