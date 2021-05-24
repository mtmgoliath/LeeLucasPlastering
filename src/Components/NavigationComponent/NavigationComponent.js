import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import QuoteButtonComponent from '../QuoteButtonComponent/QuoteButtonComponent'
import Logo from '../../../src/LLPLogo.png'
import headerBG from '../../../src/HeaderBG.png'
import LogoComponent from '../LogoComponent/LogoComponent'
import "./NavigationComponent.css"

const NavigationComponent =()=> {
    let scrollToAbout =()=> {
        const aboutAnchor = document.querySelector('#aboutHeading')
        aboutAnchor.scrollIntoView({ behavior: 'smooth', block: 'start'})
    }

    let scrollToGallery =()=> {
        const galleryAnchor = document.querySelector('#galleryHeading')
        galleryAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }


    return (
        // <div>
        //     <NavLink>About</NavLink>
        //     <NavLink>Gallery</NavLink>
        //     <NavLink>Contact</NavLink>
        // </div>
        <Navbar sticky="top" expand="lg" style={{ backgroundImage: `url(${headerBG})`, height: "auto", display: "flex", justifyContent: "space-between"}}>
            <LogoComponent />
            {/* <Navbar.Brand href="#home"><img id="logoWords" style={{"max-width": "40%", "min-width": "40%", alignSelf: "screenLeft"}} src={Logo} alt="Company logo in black and orange"/></Navbar.Brand> */}
            <QuoteButtonComponent href="#callToAction" />
            <Nav defaultActiveKey="/home">
                <Nav.Item className="navItems">
                <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItems">
                <Nav.Link onClick={scrollToAbout} eventKey="link-1">About</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItems">
                <Nav.Link onClick={scrollToGallery} eventKey="link-2">
                    Gallery
                </Nav.Link>
                </Nav.Item>
            </Nav>
        </ Navbar >
    )
}

export default NavigationComponent

