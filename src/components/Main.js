import React from 'react'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'

export const Main = () => (
	<div>
	<Grid>
    <Row>
    <Col xs={6} md={4}>
      <Thumbnail src="/assets/thumbnaildiv.png" >
      <h1>Movie Title</h1>	
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="/assets/thumbnaildiv.png" >
      <h1>Movie Title</h1>  
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="/assets/thumbnaildiv.png" >
      <h1>Movie Title</h1>  
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="/assets/thumbnaildiv.png" >
      <h1>Movie Title</h1>  
      </Thumbnail>
    </Col>
    
    </Row>
    </Grid>
	</div>
	)

