import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import PicboxComponent from '../PicboxComponent/PicboxComponent'
import "./ShowcaseSection.css"
import { Col, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import wallSkimmed from '../../Assets/wallSkimmed.jpeg'
import wallSkimmedBefore from '../../Assets/wallSkimmedBefore.jpeg'

const ShowcaseSection =()=> {
    let scrollToSkills =()=> {
        const aboutAnchor = document.querySelector('#skillsHeading')
        aboutAnchor.scrollIntoView({ behavior: 'smooth', block: 'center'})
    }
    return (
        <Container fluid>
            <Jumbotron id="showcaseJumbo">
                <Row id="showcasePics">
                    <Col md={6} id="firstImage">
                        <Container fluid >
                             <Image className="galleryImages" src={wallSkimmedBefore} rounded />
                        </Container>
                    </Col>
                    <Col md={6} id="secondImage">
                        <Container fluid >
                             <Image className="galleryImages" src={wallSkimmed} rounded />
                        </Container>
                    </Col>
                </Row>
                <div id="headline">
                    <h1>Third Generation Plasterer</h1>
                    <p>
                        Master level craftsman with over 20 years experience.                        
                    </p>
                    <p>
                        Specialist in clean and tidy domestic work.
                    </p>
                    <Button onClick={scrollToSkills} id="showcaseButton">Learn more</Button>
                </div>
          </Jumbotron>
        </Container>
    )
}

export default ShowcaseSection