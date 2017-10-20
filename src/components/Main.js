import SortButton from './SortButton'
import React, {Component} from 'react'
import { Button, Modal } from 'react-bootstrap'
import DescriptionModal from './DescriptionModal'

class Main extends Component {
  constructor (props) {
    super(props)

    this.handleScroll = this.handleScroll.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.last = 0
    this.state = {
      show:false,
      modal:{}
          }
    }
  
  // modal

  getInitialState = () => {
    return { show: true}
  }

  close = () => {
    this.setState({show:false})
  }

  open = (movie) => {
    // console.log(movie)
    this.setState({
      show: true,
      modal: movie,
    })

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

  componentDidUpdate() {
    //console.log(this.props)
  }

  render () {
    return (
      <div>
      <div id='image-container'>
        <SortButton sortItems={this.props.sortItems} />
        {
          this.props.allMovies.map((movie, id) => {

            return (
              <a className='page-post-button page-post' value="blue" onClick={() => this.open(movie)}>
                <div key={id}>
                  <h5 className='movie-title'>{movie.title}<br />&#9734;{movie.vote_average}</h5>
                  <p className='movie-description'>{ movie.overview.substring(0, 50) + '...' }</p>
                  <img className='images' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                </div>

              </a>
           )
          })
        }

        <DescriptionModal movie={this.state.modal} show={this.state.show} hide={this.close}/>
        <div className='loadMore'>
          <button onClick={this.props.loadMore}>Load More</button>
        </div>
      </div>

      </div>)
        
    }
}

export default Main