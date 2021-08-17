// const OMBD_API_KEY='e09119f4'
const API_URL='https://www.omdbapi.com/'
export const getMoviesBySearchTerm=async (title)=>{
  const url=`${API_URL}?apikey=${process.env.REACT_APP_OMDB_API}&s=${title}`
 const response=await fetch(url);
const movie=await response.json();
// console.log(movie)
return movie

}