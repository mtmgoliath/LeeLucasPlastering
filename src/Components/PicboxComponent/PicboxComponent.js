import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import profilePic from '../../Assets/profilePicCropped.jpg'
import "./PicboxComponent.css"

const PicboxComponent =()=> {
    return(
       
        <Container>
                <Image id="picBox" src={profilePic} alt="Profile picture of Lee smiling" rounded />  
        </Container>

    )
}

export default PicboxComponent
