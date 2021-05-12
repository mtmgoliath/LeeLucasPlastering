import React from 'react'
import { NavLink } from 'react-bootstrap'

const NavigationComponent =()=> {
    return (
        <div>
            <NavLink>About</NavLink>
            <NavLink>Gallery</NavLink>
            <NavLink>Contact</NavLink>
        </div>
    )
}

export default NavigationComponent