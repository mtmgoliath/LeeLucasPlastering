import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import QuoteButtonComponent from '../QuoteButtonComponent/QuoteButtonComponent'
import headerBG from '../../../src/HeaderBG.png'
import LogoComponent from '../LogoComponent/LogoComponent'
import "./NavigationComponent.css"

const NavigationComponent =()=> {
    let scrollToHome =()=> {
        const homeAnchor = document.querySelector('#appStart')
        homeAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    
    let scrollToAbout =()=> {
        const aboutAnchor = document.querySelector('#aboutHeading')
        aboutAnchor.scrollIntoView({ behavior: 'smooth', block: 'start'})
    }

    let scrollToGallery =()=> {
        const galleryAnchor = document.querySelector('#galleryHeading')
        galleryAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }


    return (
        <Navbar fixed="top" expand="lg" style={{ backgroundImage: `url(${headerBG})`, height: "auto", display: "flex", justifyContent: "space-between"}}>
            <LogoComponent />
            <QuoteButtonComponent href="#callToAction" />
            <Nav id='customNavs' defaultActiveKey="/home">
                <Nav.Item className="navItems">
                <Nav.Link onClick={scrollToHome} eventKey="link-1">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItems">
                <Nav.Link onClick={scrollToAbout} eventKey="link-2">About</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItems">
                <Nav.Link onClick={scrollToGallery} eventKey="link-3">Gallery</Nav.Link>
                </Nav.Item>
            </Nav>
        </ Navbar >
    )
}

export default NavigationComponent

