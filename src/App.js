
import Add from './component/Add';
import './App.css';
import Footer from './component/footer/Footer';
import Movielist from './component/Movielist/Movielist';
import SearchAppBar from './component/Navbar/Partone';
import { useState } from 'react';
import { MoviesData } from './component/MoviesData';

function App() {
const [movies, setMoviesData] = useState(MoviesData)
const [text, setText] = useState("");
const [rate, setRate] = useState("");
const addMovie=(Movie)=>setMoviesData(movies.concat(Movie))

  return (
  <div className="App">
    <div>
    <SearchAppBar setText={setText} setRate={setRate} rate={rate}/>
    </div>
    <Add haz={addMovie}/>
    <div>
      <Movielist Data={movies} abc={text} cba={rate} />
    </div>
    <div>
       <Footer/>
    </div>
 
    </div>
  );
  }

export default App;
