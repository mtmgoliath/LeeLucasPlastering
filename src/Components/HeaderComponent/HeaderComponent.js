import React from 'react'
import LogoComponent from '../LogoComponent/LogoComponent'
import QuoteButtonComponent from '../QuoteButtonComponent/QuoteButtonComponent'
import NavigationComponent from '../NavigationComponent/NavigationComponent'
import Container from 'react-bootstrap/Container'
import "./HeaderComponent.css"

const HeaderComponent =()=> {
        return (
            <Container fluid>
                <header>
                    {/* <LogoComponent /> */}
                    {/* <QuoteButtonComponent /> */}
                    <NavigationComponent />
                </header>
            </Container>
        )
}

export default HeaderComponent