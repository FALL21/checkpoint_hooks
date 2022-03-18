import './App.css';
import MovieCard from "./components/movieCard";
import MovieList from './components/movieList';
import { useState } from "react";
import Description from './components/description'
import data from "./datas.json"


function App() {

  const[newMovie, setNewMovie]=useState({
    "title": "",
    "PosterURL":"",
    "rate": "",
    "description":""
  })
const addMovie = (e) => {console.log(e.target.value)}

  return (
    <div className="App">
      <Description/>
      <div>
        <MovieCard/>
      </div>
      <br/>
      <div className="movieList_Add">
      <div>
          <h1>Add Movie</h1>
          <form onSubmit = {(e) => addMovie(e) } >
              <input type="text" id="nameMovie" placeholder="Name of movie" onChange={e=>{setNewMovie(e.target.value)}}/><br/><br/>
              <input type="text" id="porsterUrl" placeholder="Link of movie picture"onChange={e=>{setNewMovie(e.target.value)}} /><br/><br/>
              <input type="number" id="rate" placeholder="Rate of movie" max="5" min="1" style={{width:"255px"}} onChange={e=>{setNewMovie(e.target.value)}}/><br/><br/>
              <input type="text" id="description" placeholder="Description of movie" onChange={e=>{setNewMovie(e.target.value)}}/><br/><br/>
              <button type="submit">Add</button>
          </form>
          
        </div>

        <div>
          <MovieList/>
        </div>
        
      </div>
    </div>
  );
}

export default App;