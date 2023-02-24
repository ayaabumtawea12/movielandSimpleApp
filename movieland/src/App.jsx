import React from "react";
import axios from "axios";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

import './App.css';
import { useState,useEffect } from "react";
 



const API_URL="http://www.omdbapi.com/?i=tt3896198&apikey=dbc67362";

const App=()=>{

let [searchTerm, setSearchTerm] = useState("");
let [movies,setMovies]=useState([]);

   useEffect(() => {
   searchMovies('spiderman');
   }, []);
    
    const searchMovies = async(title) => {
     let {data}=await axios.get(`${API_URL}&s=${title}`);
     setMovies(data.Search);
     console.log(data);
     }

    return (
        <div className="app">
        <h1>MovieLand</h1>
    
          <div className="search">
            <input
             value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
            />
            <img
              src={SearchIcon}
              alt="search"
              onClick={() => searchMovies(searchTerm)}
            />
          </div>
    
          {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}
        </div>
      );
    };
    
    export default App;