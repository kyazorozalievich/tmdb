import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Popular from './components/Popular';
import MovieDetails from './Pages/MovieDetails';
import ActorDetails from './Pages/ActorDetails';
import { useContext } from 'react';
import { MovieContext } from './context';
import TopRated from './components/TopRated';
import Search from './components/Search';
import Favorite from './components/Favorite';


function App() {
  const {dark} = useContext(MovieContext)
  return (
    <div className="" style={{
      background: dark? 'black': 'white',
      color: dark? 'white': 'black',
    }}>
     <Header/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Popular' element={<Popular/>}/>
        <Route path='/TopRated' element={<TopRated/>}/>
        <Route path='/details/:movieId' element={<MovieDetails/>} />
        <Route path='/actorDetails/:personId' element={<ActorDetails/>} />
        <Route path='/search/:movieName' element={<Search/>}/>
        <Route path='/Favorite' element={<Favorite/>} />
      </Routes>
    </div>
  );
}

export default App;
