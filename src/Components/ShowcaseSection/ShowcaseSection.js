import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import PicboxComponent from '../PicboxComponent/PicboxComponent'
import "./ShowcaseSection.css"
import { Col, Row } from 'react-bootstrap'


const ShowcaseSection =()=> {
    return (
        <Container fluid>
            <Jumbotron id="showcaseJumbo">
                <Row id="showcasePics">
                    <Col md={6} id="firstImage">
                        <PicboxComponent />
                    </Col>
                    <Col md={6} id="secondImage">
                        <PicboxComponent />
                    </Col>
                </Row>
                <div id="headline">
                    <h1>Third Generation Plasterer</h1>
                    <p>
                        Master level craftsman with over 20 years experience.
                    </p>
                    <Button id="showcaseButton">Learn more</Button>
                </div>
          </Jumbotron>
        </Container>
    )
}

export default ShowcaseSection