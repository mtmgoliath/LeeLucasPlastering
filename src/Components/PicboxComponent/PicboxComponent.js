import React from 'react'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import testImage from '../../placeHolderPlastering.png'
import "./PicboxComponent.css"

const PicboxComponent =()=> {
    return(
        // <Container>
        //     <Row>
        //         <Col xs={6} md={4}>
        //         <Image src={testImage} rounded />
        //         </Col>
        //         <Col xs={6} md={4}>
        //         <Image src={testImage} roundedCircle />
        //         </Col>
        //         <Col xs={6} md={4}>
        //         <Image src={testImage} thumbnail />
        //         </Col>
        //     </Row>
        // </Container>
        <Container>
                <Image id="picBox" src={testImage} rounded />  
        </Container>

    )
}

export default PicboxComponent