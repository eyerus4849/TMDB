  import React from 'react'
  const Moviecard =(props) =>{
 
    return (<div className="movie">
      <img src={props.posterUrl} alt="movie poster"></img>
      <p className="title">{props.title}</p>
      <p className="type">{props.type}</p>
    </div>)
    }
    export default Moviecard