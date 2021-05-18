import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import PicboxComponent from '../PicboxComponent/PicboxComponent'
import "./ShowcaseSection.css"


const ShowcaseSection =()=> {
    return (
        <section>
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
                </div>
                <p>
                    <Button id="showcaseButton">Learn more</Button>
                </p>
          </Jumbotron>
        </section>
    )
}

export default ShowcaseSection