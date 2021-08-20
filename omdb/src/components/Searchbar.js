import { useState } from "react"

const Searchbar=({onchangestring,onchangetype})=>{
    // const [moviesearchstring,setmoviesearchstring]=useState('')
    // const [moviesearchtype,setmoviesearchtype]=useState('')
    // const onchangestring=(event)=>{
    //     console.log(event.target)
    //     setmoviesearchstring(event.target.value)
    // }
    // const onchangetype=(event)=>{
    //     console.log(event.target)
    //     setmoviesearchtype(event.target.value)
    // }
    // console.log(moviesearchstring)
    // console.log(moviesearchtype)
    
return(
    
    <div>
        <input className="search-input" onChange={onchangestring} placeholder="Enter movies, series, or episode name..."></input>
        <span className="search-type"> <input onChange={onchangetype}  className="search-type" placeholder="Type"></input>
    
    <select className="search-drop">
        <option value="movie">
            </option>
            <option value="game">movie
            </option>
            <option value="game">Game
            </option>
    </select></span>
       
    </div>
)
}
export default Searchbar
