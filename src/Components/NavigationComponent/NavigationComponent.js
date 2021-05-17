import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import QuoteButtonComponent from '../QuoteButtonComponent/QuoteButtonComponent'
import Logo from '../../../src/LLPLogo.png'
import headerBG from '../../../src/HeaderBG.png'
import LogoComponent from '../LogoComponent/LogoComponent'
import "./NavigationComponent.css"

const NavigationComponent =()=> {
    return (
        // <div>
        //     <NavLink>About</NavLink>
        //     <NavLink>Gallery</NavLink>
        //     <NavLink>Contact</NavLink>
        // </div>
        <Navbar style={{ backgroundImage: `url(${headerBG})`, height: "auto", display: "flex", justifyContent: "space-between"}} variant="dark">
            <LogoComponent />
            {/* <Navbar.Brand href="#home"><img id="logoWords" style={{"max-width": "40%", "min-width": "40%", alignSelf: "screenLeft"}} src={Logo} alt="Company logo in black and orange"/></Navbar.Brand> */}
            <QuoteButtonComponent />
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item className="navItems">
                <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItems">
                <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItems">
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
                </Nav.Item>
            </Nav>
        </ Navbar >
    )
}

export default NavigationComponent

