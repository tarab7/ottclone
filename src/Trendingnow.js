import React from 'react'
import Axios from 'axios'
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"    //gets the vid id of particular movie
import "./movies.css"

const myImageURL="https://image.tmdb.org/t/p/original"
const trendingnow="http://api.themoviedb.org/3/trending/all/week?api_key=80c95bc22926c4f745ce1f6f392fbb14&language=en-US"

function Trendingnow(){
    const [allMovies, setAllMovies]=React.useState([])
    const [id, setId]= React.useState("")       //Initially id=""
    React.useEffect(function()               // Logic to fetch all the movies info
    {
        async function fetchData()
        {
             const output=await Axios.get(trendingnow)     //React app visits TMDB, which takes some time, to give movie info to output variables
                //await--> some time given to the above process

            const result=output.data.results      //Array 
            //console.log(result)
            //setAllMovies(result)         //i.backdrop_path -> imag
          result.map(function(i)
        {
            const imageName=i.backdrop_path    //i ->object
            setAllMovies(myImageURL+imageName)
            setAllMovies(result)             //i.backdrop_path -> imag
        })
        }
        fetchData()
    },[])


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
        <h1>TRENDING NOW</h1> 
        <div className='alldiv'>
        {allMovies.map(function(i)
        {
            const imageName= i.backdrop_path
            return(
                <div className='trendingoriginaldiv'>
            <img src={myImageURL + imageName} className="trendingoriginalimage" onClick={function()
            {
                playtheTrailer(i);
            }}/>
            </div>
            )
        }
        )}
        </div>

        {/*Write logic to connect with youtube*/}
        {id && <Youtube videoId={id}  opts={myOptions}/>}      {/*opts=Options*/}

         </div>

    )
}

export default Trendingnow;