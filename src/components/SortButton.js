import React  from 'react'
import {MenuItem, DropdownButton} from 'react-bootstrap'


export const SortButton = props => (
  <div id="dropdown">
    <DropdownButton title="Sort!">
      <MenuItem onClick={props.sortItems('vote_average.asc')} eventKey="1">Vote Average</MenuItem>
      <MenuItem onClick="" eventKey="2">Popularity</MenuItem>
      <MenuItem onClick="" eventKey="3">Release date</MenuItem>
    </DropdownButton>
  </div>
)