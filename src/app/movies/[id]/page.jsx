import React from 'react'

function MovieData(props) {
    const movieid = props.params.id;
    console.log("id : ",props.params.id);
  return (
    <div>Movie data page : {movieid}</div>
  )
}

export default MovieData;