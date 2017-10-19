import React, { Component } from 'react'
import { Modal, ButtonToolbar, Button } from 'react-bootstrap'

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
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">{this.props.movie.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.movie.overview}</p>
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
