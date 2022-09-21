import React from 'react';
import Axios from 'axios'
import "./movies.css"

const myImageURL="https://image.tmdb.org/t/p/original"
const mainapi="http://api.themoviedb.org/3/trending/all/week?api_key=10745b8428c6f8f1733d0eac001a0469&language=en-US"

function Main(){
    const [allMovies, setAllMovies]=React.useState([])
    
  React.useEffect(function()
  {
    async function fetchData()
    {
        // Logic to fetch all the movies info
        const output=await Axios.get(mainapi)  //React app visits TMDB, which takes some time, to give movie info to output variables
        //await--> some time given to the above process
        const result=output.data.results      //Array 
        

            setAllMovies(result[Math.floor(Math.random()*20)])
            //0 or 1 --> 0.68 , 0.34, etc. Thus we multiply by 20
            
        
    }
     fetchData()

  }, [])

    return(
        <div>
            {/*allMovies= [{}, {}, {}, {}]}
            {/*Random Larger Image--> from Trending movies*/}
            {/*Movie Name*/}
            {/*Description*/}
            {/*Play Button*/}
            {/*More Info Button*/}
            <img src={myImageURL+allMovies.backdrop_path} className="myLargeImage"/>
            <h2>{allMovies.title}</h2>
            <p>{allMovies.overview}</p>
        </div>
    )
}
export default Main;