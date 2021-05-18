import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import testImage from '../../placeHolderPlastering.png'
import "./PicboxComponent.css"

const PicboxComponent =()=> {
    return(
       
        <Container>
                <Image id="picBox" src={testImage} rounded />  
        </Container>

    )
}

export default PicboxComponent