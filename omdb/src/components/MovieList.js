import Moviecard from "./Moviecard"
import React ,{useState,useEffect} from 'react'
import {getMoviesBySearchTerm} from '../getmovie'
import Searchbar from './Searchbar';
import Pagination from "react-js-pagination";
const MovieList=({onclicked,page })=>{

    const[searchTerm,setsearchTerm  ]=useState("batman")
    const[searchType,setsearchType  ]=useState("movie")
    const[Term,setTerm  ]=useState("batman")
    const[Type,setType  ]=useState("movie")
const[isLoading,setisLoading  ]=useState(false)
const[movies,setmovies  ]=useState([])
const[error ,seterror   ]=useState(null)
const[movieDetail,setmoviesDetail  ]=useState([])
const[pageNumber,setpageNumber]=useState(1)
    const [moviesearchstring,setmoviesearchstring]=useState('')
    // const [moviesearchtype,setmoviesearchtype]=useState('')
    const onchangestring=(event)=>{
        // console.log(event.target)
        setTerm(event.target.value)
    }
    const onchangetype=(event)=>{
        console.log(event.target)
        setType(event.target.value)
    }
    const handlesearch =()=>{
        setsearchTerm(Term)
        setsearchType(Type)
    }
    // console.log(moviesearchstring)
    // console.log(moviesearchtype)

    console.log(searchTerm)
 function truncate(str,n){
    return str?.length>n ? str.substr(0,n-1)+"...":str;
        }
useEffect(()=>{
getMoviesBySearchTerm(searchTerm,searchType,pageNumber).then((movie)=>
    {
      setmovies(movie.Search)
     
    }
    ).catch((error)=>{
      setmovies([])
    })
   
},[searchTerm,searchType,pageNumber])
const handlePageChange=(pageNumber)=> {
    console.log(`active page is ${pageNumber}`);
    setpageNumber(pageNumber);
  }
  console.log(pageNumber)
console.log(movies)
    return (<div className="movielist" >
        
         <Searchbar onchangestring={onchangestring} onchangetype={onchangetype} handlesearch={handlesearch}/>
         <div className="movie_list">
         {
      movies ? 
      movies.map((EachMovie,i)=>(
        //   we can use // buttononclick={onclicked} 0r  
        // buttononclick={() => onclicked(EachMovie.imdbID)} if we use it this way we don't need to pass movieid as a props on movie card component
        
       
             <Moviecard key={i} posterUrl={EachMovie.Poster} title={truncate(EachMovie.Title,12)} type={EachMovie.Type} buttononclick={onclicked}   movieId={EachMovie.imdbID}  />
            
    ))
    :<p>Searching for a movie...</p>
    }
    
         </div>
         <Pagination 
          activePage={pageNumber}
        //   itemsCountPerPage={10}
          totalItemsCount={200}
          pageRangeDisplayed={10}
          onChange={handlePageChange}
        />
</div>
        
       
    )
}
export default MovieList