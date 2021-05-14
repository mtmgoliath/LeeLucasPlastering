import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import QuoteButtonComponent from '../QuoteButtonComponent/QuoteButtonComponent'
import Logo from '../../../src/LLPLogo.png'

const NavigationComponent =()=> {
    return (
        // <div>
        //     <NavLink>About</NavLink>
        //     <NavLink>Gallery</NavLink>
        //     <NavLink>Contact</NavLink>
        // </div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"><img id="logoWords" style={{"max-width": "40%"}} src={Logo} alt="Company logo in black and orange"/></Navbar.Brand>
            <QuoteButtonComponent />
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
                </Nav.Item>
            </Nav>
        </ Navbar >
    )
}

export default NavigationComponent

