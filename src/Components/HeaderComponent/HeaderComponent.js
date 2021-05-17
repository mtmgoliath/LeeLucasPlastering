import React from 'react'
import LogoComponent from '../LogoComponent/LogoComponent'
import QuoteButtonComponent from '../QuoteButtonComponent/QuoteButtonComponent'
import NavigationComponent from '../NavigationComponent/NavigationComponent'
import "./HeaderComponent.css"

const HeaderComponent =()=> {
        return (
            <header>
                    {/* <LogoComponent /> */}
                    {/* <QuoteButtonComponent /> */}
                    <NavigationComponent />
            </header>
        )
}

export default HeaderComponent