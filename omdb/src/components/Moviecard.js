  import { Button,Paragragh,Div } from "../style"
  const Moviecard =(props) =>{
  
    return (<Div width="100px" margin="30px" border="1px solid black" onClick={()=>{props.buttononclick(props.movieId)} }>
      
      <img src={props.posterUrl} alt="movie poster"></img>
      <Paragragh>{props.title}</Paragragh>
      <Button border="1px solid red" bgcolor="rgb(247, 166, 166)">{props.type}</Button>
      {/* <p className="title">{props.title}</p> */}
      {/* <p className="type">{props.type}</p> */}
    </Div>)
    }
    export default Moviecard