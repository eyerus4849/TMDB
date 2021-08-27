import React from 'react'
import PropTypes from 'prop-types';
import { Button,Paragragh,Div } from "../style"
  const MovieDetails =(props) =>{
 
    return (<Div display="flex" >
        <Div className="movie_img" > <img  src={props.posterUrl} alt="movie poster"></img></Div>
     <Div margin="0 0 0 10px">
         <Div className="title_rate"><h4 className="detail_title">{props.title}</h4> <h4 className="rate">{props.rating}</h4> </Div>
     <Div> <span className="hour">{props.pg}</span><span className="hour">{props.hour}</span>  </Div>
     <Div className="hour">{props.category}</Div>
     <h3>plot</h3>
     <p>{props.description}</p>
     <h3>Actors</h3>
     <p>{props.actors_name}</p>
     <h3>Released</h3>
     <p>{props.Released}</p>
     <p>{props.award}</p>
      </Div>
      
    </Div>)
    }
    MovieDetails.propTypes = {
        title:PropTypes.string.isRequired ,
        rating:PropTypes.string,
        pg:PropTypes.string,
        posterUrl:PropTypes.string
    }
    MovieDetails.defaultProps = {
       title:"movie title" ,
        rating:10,
        pg:"pg",
    }
    export default MovieDetails