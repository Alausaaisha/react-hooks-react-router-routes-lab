import React from "react";
import { movies } from "../data";
import {nanoid} from "nanoid"

function Movies() {
  return <div>{/*{code here}*/}
  <h1>Movies Page</h1>
  {movies.map(movie =>
    <div key = {nanoid(5)}>
      {movie.title}
      {movie.time}
      <ul>{movie.genres.map(genre =>
      <li key = {nanoid(5)}>{genre}</li>
      )}
      </ul>
    </div>
    )}
  </div>
}

export default Movies;
