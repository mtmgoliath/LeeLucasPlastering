import React from 'react'
import NavigationComponent from '../NavigationComponent/NavigationComponent'
import Container from 'react-bootstrap/Container'
import "./HeaderComponent.css"

const HeaderComponent =()=> {
        return (
            <Container fluid>
                <header>
                    <NavigationComponent />
                </header>
            </Container>
        )
}

export default HeaderComponent