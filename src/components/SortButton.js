import React, {Component}  from 'react'
import {MenuItem, DropdownButton} from 'react-bootstrap'


class SortButton extends Component {
  constructor() {
    super()
    this.handleClickVoteUp = this.handleClickVoteUp.bind(this)
    this.handleClickVoteDown = this.handleClickVoteDown.bind(this)
    this.handleClickPopularity = this.handleClickPopularity.bind(this)
    this.handleClickMoney = this.handleClickMoney.bind(this)
    this.handleClickMReleaseUp = this.handleClickMReleaseUp.bind(this)
    this.handleClickReleaseDown = this.handleClickReleaseDown.bind(this)
  }

  handleClickVoteUp() {
    this.props.sortItems('vote_average.asc')
  }

  handleClickVoteDown() {
    this.props.sortItems('vote_average.desc')
  }

  handleClickPopularity() {
    this.props.sortItems('popularity.desc')
  }

  handleClickMoney() {
    this.props.sortItems('revenue.desc')
  }

  handleClickMReleaseUp() {
    this.props.sortItems('release_date.asc')
  }
  
  handleClickReleaseDown() {
    this.props.sortItems('release_date.desc')
  }

  render() {
    return (
      <div id="dropdown">
        <DropdownButton id="drop" title="Sort!">
          <MenuItem onClick={ this.handleClickVoteUp } >Vote Average &uarr;</MenuItem>
          <MenuItem onClick={ this.handleClickVoteDown } >Vote Average &darr;</MenuItem>
          <MenuItem onClick={ this.handleClickPopularity } >Popularity </MenuItem>
          <MenuItem onClick={ this.handleClickMoney } >Revenue </MenuItem>
          <MenuItem onClick={ this.handleClickMReleaseUp } >Release Data &uarr;</MenuItem>
          <MenuItem onClick={ this.handleClickReleaseDown } >Release Data &darr;</MenuItem>
        </DropdownButton>
      </div>
    )
  }
}
export default SortButton