XMLHttpRequest.setRequestHeader({
    "content-type":"application/json",
    "authorization":"Y2QyMDhmNzItZWNiNy00YjJkLThhMTAtMmM0NjU3MDhhNDBj",
    "partner-token":"82b632103bd041af94d9ae0a071473bc"
  }  )
const API_URL='http://api.carmd.com/v3.0/fields?vin=1GNALDEK9FZ108495'
export const getMoviesBySearch=async ()=>{
  const url=`${API_URL}`
 const response=await fetch(url);
const movie=await response.json();
console.log(movie)
console.log("object")
return movie
}
// getMoviesBySearchTerm()