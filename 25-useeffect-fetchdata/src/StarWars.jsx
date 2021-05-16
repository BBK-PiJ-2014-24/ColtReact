import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StarWars(props){

    const [movieNumber, setMovieNumber] = useState(1);
    const [movie, setMovie] = useState('StarWars'); // state to collect the movie obj


    useEffect(()=> {
        async function fetchData(){
            const res =  await axios.get(`https://swapi.dev/api/films/${movieNumber}/`);
            console.log(res);
            setMovie(res.data);
        }
        fetchData();
    }, [movieNumber]); // triggered state change to run useEffect()



    return(
        <div>
            <h1>Pick a Star Wars Movie</h1>
            <h4>Star War Film Selected: {movieNumber}. {movie.title}</h4>
            <h5>{movie.opening_crawl}</h5>
            <select value={movieNumber} onChange={ e => setMovieNumber(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
        </div>
    );
}

export default StarWars;
