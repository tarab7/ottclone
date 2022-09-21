import React from 'react';
import Axios from 'axios';
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"    //gets the vid id of particular movie
import "./movies.css"

const horrorMovies="https://api.themoviedb.org/3/discover/movie?api_key=80c95bc22926c4f745ce1f6f392fbb14&with_genres=27"
const myImageURL="https://image.tmdb.org/t/p/original"

function HorrorMovies() {
    const[myhorrorMovies, setHorrorMovies]=React.useState([])   
    const [id, setId]= React.useState("")       //Initially id=""

    React.useEffect(function()
    {
        async function fetchdata()
        {
            const output= await Axios.get(horrorMovies)
            setHorrorMovies(output.data.results)
        }
        fetchdata()
    }, [])


    function playtheTrailer(data)
    {
        movieTrailer(data.name || "")   //empty string in case of no name of movie in database
        .then(function(output)         //if trailer present , output variable -> Stores URL of trailer
        {                                                                   //URLSearchParams-> new Class
            const search= new URLSearchParams(new URL(output).search)       //searching video id from url of trailer 
            const my_Id= search.get("v")                //my_Id-> Stores video ID only 
            setId(my_Id)
        })
                    
        .catch(function()            //if trailer not present
        {
    
        })           
    }
    
    
        const myOptions={
            height:"600px",
            width: "100%"
        }


    return(
        <div>
            <h1>HORROR MOVIES</h1>
            <div className="alldiv">
            {myhorrorMovies.map(function(i)
            {
            return(
                <div className="horrorMoviesdiv">
                <img src={myImageURL+i.backdrop_path} className="horrorMoviesimage" onClick={function()
            {
                playtheTrailer(i);
            }}/>
                </div>
            )
            })}
        </div>

        
        {/*Write logic to connect with youtube*/}
        {id && <Youtube videoId={id}  opts={myOptions}/>}      {/*opts=Options*/}

        </div>
        )
    
    }
    export default HorrorMovies;