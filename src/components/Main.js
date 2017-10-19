import React, {Component} from 'react'

class Main extends Component {
  constructor () {
    super()
    this.handleScroll = this.handleScroll.bind(this)
    this.last = 0
  }
  handleScroll () {
    let element = document.getElementById('image-container')
    let elementHeight = element.scrollHeight - element.clientHeight
    if (element.scrollTop <= elementHeight && element.scrollTop >= (elementHeight - 200)) {
      if (this.last > (element.scrollTop + 100) || this.last < (element.scrollTop - 200)) {
        this.last = element.scrollTop
        this.props.loadMore()
      }

    }
    // console.log(element.scrollTop, elementHeight)
  }

  componentDidMount () {
    document.getElementById('image-container').addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount () {
    document.getElementById('image-container').removeEventListener('scroll', this.handleScroll)
  }
  render () {
    return (
      <div id='image-container'>
        {
          this.props.allMovies.map((movie, id) => {
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
        <button onClick={this.props.loadMore}>Load More results</button>
      </div>
    )
  }
}

export default Main
