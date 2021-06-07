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
                            <p>I am a third generation plasterer, with experience and technique that has been passed down the family line. 
                                Though I have done some commercial site work, I specialize in dealing directly with domestic customers. 
                                I know just how daunting it can be to get in a tradesman to do work in your home, especially with messy trades like plastering. 
                                Thats why a clean and tidy job is always included in my price, because I want my customer's to be able to progress with the
                                 beautifcation of their castle without worrying about having their home ruined.</p>
                        </div>
                        <div>
                            <h2>Experience</h2>
                            <p>20 years experience with the private sector, supplying clean, tidy and professional workmanship.
                                Contact details below, so please call for a quote and we can discuss your plastering needs.
                            </p>
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
                        <div>
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
                        </div>
                    </Col>
                
                </Row>
            </Container>
        </section>
    )
}

export default AboutSection