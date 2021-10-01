import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

export class Slider extends Component {
    render() {
        return (
            <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="Images\slider1.jpg"
                alt="First slide"
                height="600px"
                />
                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="Images\slider2.jpg"
                alt="Second slide"
                height="600px"
                />
                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="Images\slider3.jpg"
                alt="Third slide"
                height="600px"
                />
                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="Images\slider4.jpg"
                alt="Third slide"
                height="600px"
                />
                <Carousel.Caption>
               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="Images\slider5.jpg"
                alt="Third slide"
                height="600px"
                />
                <Carousel.Caption>
             
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        )
    }
}

export default Slider
