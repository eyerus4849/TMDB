import logo from './logo.svg';
import './App.css';
import Moviecard from './components/Moviecard';
import {getMoviesBySearchTerm} from './getmovie'
import {getMoviesById} from './getmoviedetail'
import React ,{useState,useEffect} from 'react'
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import Modal from './components/Modalcomponent'
import Searchbar from './components/Searchbar';

function App() {
  // const movie_func=getMoviesBySearchTerm("batman")
  // console.log(getMoviesById("tt0096895"))
  
  function truncate(str,n){
    return str?.length>n ? str.substr(0,n-1)+"...":str;
        }
        const [modalShow, setModalShow] = React.useState(false);
const[searchTerm,setsearchTerm  ]=useState("batman")
const[searchID,setsearchID  ]=useState("tt0372784")
const[isLoading,setisLoading  ]=useState(false)
const[movies,setmovies  ]=useState([])
const[movieDetail,setmoviesDetail  ]=useState([])

const[error ,seterror   ]=useState(null)
useEffect(()=>{
  
  setisLoading(true)
  setTimeout(()=>{getMoviesBySearchTerm(searchTerm).then((movie)=>
    {
      setmovies(movie)
      setisLoading(false)
      seterror(null)
    }
    ).catch((error)=>{
      setmovies([])
      setisLoading(false)
      seterror(error)
    })},3000)
  
    // getMoviesById(searchID).then((movieDetail)=>
    // {
    //   setmoviesDetail(movieDetail)
    // })
 
},[])
console.log(movieDetail)
const[show,setshow]=useState(false)

  return (
    <div className="App">
       {/* <Searchbar/> */}
       {/* {
       !show&& */}
       <MovieList  onclicked={(SingleMovieId)=>{
          console.log(SingleMovieId)
        setshow(true)
        console.log(show)
        setModalShow(true)
        getMoviesById(SingleMovieId).then((movieDetail)=>
        {
          setmoviesDetail(movieDetail)
        })
      }}searchTerm="batman" />
      {/* }  */}
    
    {show && 
    
    <Modal show ={show}onClose={()=>{
        setshow(false)
      }} show={modalShow}
      onHide={() => setModalShow(false)} >
      <MovieDetails posterUrl={movieDetail.Poster} title={movieDetail.Title} rating={movieDetail.imdbRating} pg={movieDetail.Rated} hour={movieDetail.Runtime} category={movieDetail.Genre} description={movieDetail.Plot} actors_name={movieDetail.Actors} Released={movieDetail.Released} award={movieDetail.Awards}/>
    
      </Modal>
      }
    
    </div>
    
  );
}

export default App;
