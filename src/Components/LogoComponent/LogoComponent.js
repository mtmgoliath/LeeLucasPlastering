import React from 'react'
import { NavbarBrand } from 'react-bootstrap'
import Logo from '../../../src/LLPLogo.png'
import "./LogoComponent.css"

const LogoComponent =()=> {
    return (
        <NavbarBrand href="#home">
            <img
             id="logoWords"
             src={Logo}
             alt="Company logo in black and orange"
             className="d-inline-block align-top"
             />

        </NavbarBrand>    
    )
}

export default LogoComponent