import React, { useContext, useState } from 'react';
import headlogo from '../../assets/img/header-logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { MovieContext } from '../../context';
import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import Home from '../Home';

const Header = () => {
    const {dark, setDark} = useContext(MovieContext)
    const {language, setLanguage} = useContext(MovieContext)
    const {page, setPage} = useContext(MovieContext)
    const [searchMovie, setSearchMovie] = useState('')
    const naviGate = useNavigate()
    const getFavorite = useNavigate()
    return (
        <>
        <div id='header'>
            <div className="container">
                <div className="header">
                    <img src={headlogo} alt="" width={200}/>
                    <div className="header--nav">
                        <Link to={"/"} className=''>Home</Link>
                        <Link to={"/Popular"} className=''>Popular</Link>
                        <Link to={"/TopRated"} className=''>Top Rated</Link>
                        <Link to={"/Favorite"} className=''>Favorite</Link>
                    </div>
                    
                    <div className="header--search">
                        <input type="text" placeholder='serch films...' onChange={(e)=> {
                            setSearchMovie(e.target.value)
                        }}/>
                        <button onClick={()=> {
                            naviGate(`/search/${searchMovie}`)
                        }}>search</button>
                    </div>
                        <select className='language' onChange={(e)=> {
                            setLanguage(e.target.value)
                        }}>
                            <option value="us-US">English</option>
                            <option value="ru-RU">Русский</option>
                            <option value="fr-FR">France</option>
                        </select>
                        <select className='language' onChange={(e)=> {
                            setPage(+e.target.value)
                        }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        </select>
                        <a className="header--dark" onClick={()=> {
                            setDark(!dark)
                        }}>{dark? <IoMoonOutline /> :<FiSun />}</a>
                </div>
            </div>
        
        </div>
        </>
    );
};

export default Header;


































