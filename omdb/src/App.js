import logo from './logo.svg';
import './App.css';
import Moviecard from './Moviecard';
import {getMoviesBySearchTerm} from './getmovie'
import {getMoviesById} from './getmoviedetail'
import React from 'react'
import MovieDetails from './MovieDetails';

function App() {
  // const movie_func=getMoviesBySearchTerm("batman")
  console.log(getMoviesById("tt0096895"))
  let movies={}
  let ismovies=false;
  let movieDetail={}
  window.onload = async () => {
    const movieAPI = await getMoviesBySearchTerm("batman");
    sessionStorage.setItem("movies", JSON.stringify(movieAPI));
    const movieDetailAPI = await getMoviesById("tt2975590");
    sessionStorage.setItem("movieDetail", JSON.stringify(movieDetailAPI));
  };
  if (sessionStorage.getItem("movies")) {
    movies = JSON.parse(sessionStorage.getItem("movies")); 
    ismovies = true;
  }
  if (sessionStorage.getItem("movieDetail")) {
    movieDetail = JSON.parse(sessionStorage.getItem("movieDetail")); 
    
  }
  console.log(movieDetail);
  console.log(movies)
  function truncate(str,n){
    return str?.length>n ? str.substr(0,n-1)+"...":str;
        }

  return (
    <div className="App">
       {ismovies ? (
       <Moviecard posterUrl={movies.Search[1].Poster} title={truncate(movies.Search[1].Title,12)} type={movies.Search[1].Type}/>):("Hello")}
       <MovieDetails posterUrl={movieDetail.Poster} title={movieDetail.Title} rating={movieDetail.imdbRating} pg={movieDetail.Rated} hour={movieDetail.Runtime} category={movieDetail.Genre} description={movieDetail.Plot} actors_name={movieDetail.Actors} />
    </div>
  );
}

export default App;
