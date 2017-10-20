import React, { Component } from 'react'
import { Modal, ButtonToolbar, Button, Fade, Grid, Row, Col } from 'react-bootstrap'

class DescriptionModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }

    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.getInitialState = this.getInitialState.bind(this)

  }
  getInitialState () {
    return {show: false}
  }

  showModal () {
    this.setState({show: true})
  }

  hideModal() {
    this.setState({show: false})
    this.props.hide()
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps.show)
    this.setState({
      show: nextProps.show
    })
  }
  componentWillUnmount () {
    this.setState({
      show: false
    })
  }

  render () {
    return (
      <ButtonToolbar>
      
        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="custom-modal"
          className="description-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">{this.props.movie.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Grid>
          <Row className="description-row">
          <Col xs={6} md={6} lg={6}>
            <img src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`} className="modal-photo" />
          </Col>
          <Col xs={6} md={6} lg={6}>  
            <p className="modal-movie-overview">{this.props.movie.overview}</p>
            <p><strong>Vote Average:</strong>{this.props.movie.vote_average}</p>
            <p><strong>Release Date:</strong>{this.props.movie.release_date}</p>
          </Col>  
          </Row>
          </Grid>        
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      
      </ButtonToolbar>
    )
  }
}

export default DescriptionModal
