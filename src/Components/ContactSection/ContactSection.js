import React from 'react'
import PicboxComponent from '../PicboxComponent/PicboxComponent'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import './ContactSection.css'
import ContactFormComponent from '../ContactFormComponent/ContactFormComponent'

const ContactSection =()=> {
    return (
        <Container fluid id="contactContainer">
            <Row >
                <h2 id="contactHeading">Contact</h2>
            </Row>
            <Row>
                {/* Call to action with contact number */}
                <Container id="callToAction">
                    <h2>Call for a quote today!</h2>
                    <h2> +44(0)7567 033 033</h2>
                    <p>or send fill in the form below to send an email </p>
                </Container>
            </Row>
            <Row id="contactFormContainer">
                <ContactFormComponent />
                <Col>contact form</Col>
                <Col>social links??</Col>
            </Row>
        </Container>
    )
}

export default ContactSection