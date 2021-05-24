import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import PicboxComponent from '../PicboxComponent/PicboxComponent'
import './GallerySection.css'
import beforeOne from '../../Assets/artex2before.jpeg'
import afterOne from '../../Assets/artex2after.jpeg' 
import afterTwo from '../../Assets/artex3after.jpeg' 
import beforeTwo from '../../Assets/artex3before.jpeg'
import afterThree from '../../Assets/artexCoverupAfter.jpeg'
import beforeThree from '../../Assets/artexCoverupBefore.jpeg'
import wallSkimmed from '../../Assets/wallSkimmed.jpeg'

const GallerySection =()=> {
    return (
        <Container fluid id="galleryContainer">
            <Row id="galleryHeading">
                <h2>
                    Gallery of Work
                </h2>
            </Row>
            <Row>
                <Col xs="auto" md="auto" lg>
                    <Container fluid >
                        <Image className="galleryImages" src={beforeOne} rounded />
                    </Container>
                </Col>
                <Col xs="auto" md="auto" lg>
                    <Container fluid>
                        <Image className="galleryImages" src={afterOne} rounded />
                    </Container>
                </Col>
                <Col xs="auto" md="auto" lg>
                    <Container fluid>
                        <Image className="galleryImages" src={beforeTwo} rounded />
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col xs="auto" md="auto" lg>
                    <Container fluid>
                        <Image className="galleryImages" src={afterTwo} rounded />
                    </Container>
                </Col>
                <Col xs="auto" md="auto" lg>
                    <Container fluid>
                        <Image className="galleryImages" src={beforeThree} rounded />
                    </Container>
                </Col>
                <Col xs="auto" md="auto" lg>
                    <Container fluid>
                        <Image className="galleryImages" src={afterThree} rounded />
                    </Container>
                </Col>
            </Row>
        </ Container>    
    )
}

export default GallerySection