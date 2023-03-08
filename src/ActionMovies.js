import React from 'react';
import Axios from 'axios';
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"    //gets the vid id of particular movie
import "./movies.css"

const actionMovies="https://api.themoviedb.org/3/discover/movie?api_key=80c95bc22926c4f745ce1f6f392fbb14&with_genres=28";
const myImageURL="https://image.tmdb.org/t/p/original"

function ActionMovies() {
    const[myactionMovies, setActionMovies]=React.useState([]) 
    const [id, setId]= React.useState("")       //Initially id=""

    React.useEffect(function()
    {
        async function fetchdata()
        {
            const output= await Axios.get(actionMovies)
            setActionMovies(output.data.results)
        }
        fetchdata()
    }, [])


    function playtheTrailer(data)
    {
        var tname;
        if("name" in data)
        {
            tname=data.name;
        }
        else{
            tname=data.title;
        }
        movieTrailer(tname || "")   //empty string in case of no name of movie in database
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
            <h1>ACTION MOVIES</h1>
            <div className="alldiv">
            {myactionMovies.map(function(i)
            {
            return(
                <div className="actionMoviesdiv">
                <img src={myImageURL+i.backdrop_path} className="actionMoviesimage" onClick={function()
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

export default ActionMovies;