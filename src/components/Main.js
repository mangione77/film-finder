import React from 'react'

export const Main = (props) => (
	<div id="image-container">
    {
      props.allMovies.map((movie) => {
        return <img className= "images" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}>
               </img>
                //todo hover
      })
     }     
	</div>
)
