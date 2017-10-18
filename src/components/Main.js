import React, {Component} from 'react'

export class Main extends Component {
  componentWillUpdate () {
    console.log('main will update')
  }
  render () {
    return (
      <div id='image-container'>
        {
          this.props.allMovies.map((movie) => {
            return <img className='images' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            // todo hover
          })
         }
      </div>
    )
  }
}
