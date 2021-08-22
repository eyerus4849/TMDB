const API_URL='https://www.omdbapi.com/'
export const getMoviesBySearchTerm=async (title,type)=>{
  const url=`${API_URL}?apikey=${process.env.REACT_APP_OMDB_API}&s=${title}&type=${type}&page=3`
 const response=await fetch(url);
const movie=await response.json();
// console.log(movie)
return movie
}
