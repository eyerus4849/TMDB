import Moviecard from "./Moviecard"
import React ,{useState,useEffect} from 'react'
import {getMoviesBySearchTerm} from '../getmovie'


const MovieList=(props)=>{

    const[searchTerm,setsearchTerm  ]=useState("batman")
const[isLoading,setisLoading  ]=useState(false)
const[movies,setmovies  ]=useState([])
const[error ,seterror   ]=useState(null)
 function truncate(str,n){
    return str?.length>n ? str.substr(0,n-1)+"...":str;
        }
useEffect(()=>{
getMoviesBySearchTerm(searchTerm).then((movie)=>
    {
      setmovies(movie.Search)
      setisLoading(false)
      seterror(null)
    }
    ).catch((error)=>{
      setmovies([])
      setisLoading(false)
      seterror(error)
    })
},[])
console.log(movies)
    return (<div className="movie_list">
        {movies.map((EachMovie,i)=>{
            let movie=(  <Moviecard key={i} posterUrl={EachMovie.Poster} title={truncate(EachMovie.Title,12)} type={"movie"}/>)
          return movie
        })}
        
    </div>
        
       
    )
}
export default MovieList