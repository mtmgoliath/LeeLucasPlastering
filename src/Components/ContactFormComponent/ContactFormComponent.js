import React from 'react'
import PicboxComponent from '../PicboxComponent/PicboxComponent'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import FormControl from 'react-bootstrap/FormControl'
import useState from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import emailjs from 'emailjs-com'
import { FormGroup } from 'react-bootstrap'
import '../ContactFormComponent/ContactFormComponent.css'

const ContactFormComponent =()=> {
    
    let sendEmail =(e)=> {
        e.preventDefault();
    
        emailjs.sendForm('service_zks0oa2', 'contact_form', e.target, 'user_ZfXjswtmZQjIVs9fvRkpH')
          .then((result) => {
              alert('Email Sent');
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    
      return (
        <Container>
            <Row>
                <Col xs="1" md="2" lg="3"></Col>
                <Col>
                    <Form className="contact-form" onSubmit={sendEmail}>
                        <Form.Label className="contactLabels">Name</Form.Label>
                        <Form.Control required placeholder="Please enter your full name..." type="text" name="user_name" />
                        <Form.Label className="contactLabels">Email</Form.Label>
                        <Form.Control required placeholder="Please enter your email address..." type="email" name="user_email" />
                        <Form.Label className="contactLabels">Message</Form.Label>
                        <Form.Control required placeholder="Please provide details of work to be done and a contact telephone number..." as="textarea" name="message" rows={4} cols={2}/>                    
                        <Button id="contactSubmitButton" type="submit">Send</Button>
                    </Form>
                </Col>
                <Col xs="1" md="2" lg="3"></Col>
            </Row>
        </Container>
      );
}

export default ContactFormComponent
