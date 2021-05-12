import React from 'react'
import LogoComponent from '../LogoComponent/LogoComponent'
import QuoteButtonComponent from '../QuoteButtonComponent/QuoteButtonComponent'
import NavigationComponent from '../NavigationComponent/NavigationComponent'

const HeaderComponent =()=> {
        return (
            <header>
                <div id="logoDiv">
                    <LogoComponent />
                    <QuoteButtonComponent />
                    <NavigationComponent />
                </div>
            </header>
        )
}

export default HeaderComponent