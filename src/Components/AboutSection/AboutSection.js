import React from 'react'
import PicboxComponent from '../PicboxComponent/PicboxComponent'
import Button from 'react-bootstrap/Button'
import './AboutSection.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const AboutSection =()=> {
    let contactClickHandler =()=> {
        const anchor = document.querySelector('#callToAction')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    return (
        <section>
            <Container fluid id="aboutContainer">
                <Row id="aboutHeading">
                    <h2>About</h2>
                </Row>
                <Row id="sectionContent">
                    <Col id="profilePic" xs="auto" md={5} lg={6}>
                        <PicboxComponent  />
                    </Col>
                    <Col id="textboxContainer">
                        <div>
                            <h2>Background</h2>
                            <p>Awesome write up about how passionate and dedicated the Lucas family are to plastering and mastery of the trade</p>
                        </div>
                        <div>
                            <h2>Experience</h2>
                            <p>So many years experience and also totaly a badass and general excellent guy!</p>
                        </div>
                    </Col>
                </Row>
                    <h2 id="skillsHeading">Skills</h2>
                <Row id="sectionContent2">                                           
                            <Col>                           
                                <p>Skimming</p>
                                <p>Ceilings</p>
                                <p>Walls</p>                                    
                                <p>Domestic work</p>
                                <p>Artexing</p>
                                <p>Insurance work</p>
                            </Col>                           
                    </Row>
                    <Row>
                    <Col id="contactBox">
                        <p>
                            No job too small! 
                        </p>
                        <p>
                           Get in touch for a quote!
                        </p>
                        <p>
                            Available for video conference on request.
                        </p>
                        <Button onClick={contactClickHandler} id="contactButton">
                            Contact
                        </Button>
                    </Col>
                
                </Row>
            </Container>
        </section>
    )
}

export default AboutSection