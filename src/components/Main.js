import React from 'react'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'

export const Main = (props) => (
	<div>

	<Grid>
    <Row>
    <Col xs={6} md={4}>
    {
      props.allMovies.map((movie) => {
        return <Thumbnail src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}>
              </Thumbnail>
      })
     } 
    </Col>
  </Row>
</Grid>      
	</div>
)
