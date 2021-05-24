import React from 'react'
import Button from 'react-bootstrap/Button'
import "./QuoteButtonComponent.css"

const QuoteButtonComponent =()=> {
    let clickHandler =()=> {
        const anchor = document.querySelector('#callToAction')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    return (
        <Button onClick={clickHandler} id="quoteButton" >
            Get a Quote
         </Button>
    )
}

export default QuoteButtonComponent