import React from 'react'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const PicboxComponent =()=> {
    return(
        <Container>
            <Row>
                <Col xs={6} md={4}>
                <Image src="holder.js/171x180" rounded />
                </Col>
                <Col xs={6} md={4}>
                <Image src="holder.js/171x180" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                <Image src="holder.js/171x180" thumbnail />
                </Col>
            </Row>
        </Container>

    )
}

export default PicboxComponent