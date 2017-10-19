import React from 'react'

export const Main = props => (
  <div id='image-container'>
    {
      props.allMovies.map((movie, id) => {
        return (
        
        <div className="page-post-button page-post">

          <a className="page-post-button page-post" href={'#popup-' + id}>
          <div key={id}>
            <h5 className='movie-title'>{movie.title}<br />&#9734;{movie.vote_average}</h5>
            <p className='movie-description'>{ movie.overview.substring(0, 50) + '...' }</p>
            <img className='images' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          </div>
          </a>

          <div className="overlay popup-1" id={'popup-' + id}>
            <div className="popup">
              <div className="popup-content">
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <a class="close" href="#">&times;</a>
              </div>
            </div> 
          </div> 

        </div>  

              
        )
      })
    }
    <button onClick={props.loadMore}>Load More results</button>
  </div>
)
