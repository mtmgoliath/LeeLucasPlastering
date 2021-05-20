import React from 'react'
import PicboxComponent from '../PicboxComponent/PicboxComponent'
import Button from 'react-bootstrap/Button'
import './AboutSection.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const AboutSection =()=> {
    return (
        <section>
            <Container id="aboutContainer">
                <Row>
                    <Col><h2>About</h2></Col>
                </Row>
                <Row id="sectionContent">
                    <Col xs="auto" md="auto" lg>
                        <PicboxComponent id="profilePic" fluid />
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
                <Row id="sectionContent2">
                    {/* <div id="skillsContainer"> */}
                        
                            <Col>
                                <ul>
                                    <li>Skimming</li>
                                    <li>Artex</li>
                                    <li>Ceilings</li>
                                    <li>Rendering</li>
                                    <li>Marbling</li>
                                    <li>Skimming</li>
                                    <li>Artex</li>
                                    <li>Ceilings</li>
                                    <li>Rendering</li>                                    
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    <li>Artex</li>
                                    <li>Ceilings</li>
                                    <li>Rendering</li>
                                    <li>Marbling</li>
                                    <li>Skimming</li>
                                    <li>Artex</li>
                                    <li>Ceilings</li>
                                    <li>Rendering</li>
                                    <li>Marbling</li>
                                </ul>
                            </Col>
                    {/* </div> */}
                    
                    
                    <Col id="contactBox">
                        <p>Short write up to encourage people to get in touch</p>
                        <Button id="contactButton">Contact</Button>
                    </Col>
                
                </Row>
            </Container>
        </section>
    )
}

export default AboutSection