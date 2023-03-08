import Axios from 'axios'
import ActionMovies from './ActionMovies';
import './App.css';
import HorrorMovies from './HorrorMovies';
import NavBar from './NavBar';
import Main from './Main';
import Movies from './Movies';
import Trendingnow from './Trendingnow';
import TopRated from './TopRated';
import ComedyMovies from './ComedyMovies';
import Documentaries from './Documentaries';

function App() {
  return (
   
    <div>
    <NavBar/>
    <Main/>
    <Movies/>
    <Trendingnow/>
    <TopRated/>
    <ComedyMovies/>
    <ActionMovies/>
    <HorrorMovies/>
    <Documentaries/>
    </div>
  );
}

export default App;

/*
      <Main/>
      */