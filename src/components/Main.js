import React  from 'react'


export const Main = (props) => (
	<div id="image-container">
    {
      props.allMovies.map((movie,id) => {
        return ( 
            <div key={id} className="page-post">
              <h5 className="movie-title">{movie.title}<br />&#9734;{movie.vote_average}</h5>
              <p className="movie-description">{ movie.overview.substring(0,50) + '...' }</p>
              <img className="images" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  />
            </div>
        )
     })
    }
  </div>        
)
