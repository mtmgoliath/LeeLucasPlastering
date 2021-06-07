import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './ContactSection.css'
import ContactFormComponent from '../ContactFormComponent/ContactFormComponent'

const ContactSection =()=> {
    return (
        <Container fluid id="contactContainer">
            <Row >
                <h2 id="contactHeading">Contact</h2>
            </Row>
            <Row>
                <Container id="callToAction">
                    <h2>Call for a quote today!</h2>
                    <h2> +44(0)7567 033 033</h2>
                    <p>or fill in the form below to send an email </p>
                </Container>
            </Row>
            <Row id="contactFormContainer">
                <ContactFormComponent />
            </Row>
        </Container>
    )
}

export default ContactSection