import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import PicboxComponent from '../PicboxComponent/PicboxComponent'
import "./ShowcaseSection.css"


const ShowcaseSection =()=> {
    return (
        <Container>
            <Jumbotron id="showcaseJumbo">
                <div id="showcasePics">
                <PicboxComponent />
                <PicboxComponent />
                </div>
                <div id="headline">
                    <h1>Third Generation Plasterer</h1>
                    <p>
                        Master level craftsman with over 20 years experience.
                    </p>
                    <p>
                        <Button id="showcaseButton">Learn more</Button>
                    </p>
                </div>
          </Jumbotron>
        </Container>
    )
}

export default ShowcaseSection