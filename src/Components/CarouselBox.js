import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import forestImg from '../assets/forest_slider.jpg'
import mountsImg from '../assets/mountains_slider.jpeg'
import baloonsImg from '../assets/baloons_slider.jpeg'


export default class CarouselBox extends Component {
    render(){
        return (
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={forestImg} alt="Forest" />
              <Carousel.Caption>
                <h3>Forest</h3>
                <p>Lorem ipsum</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={mountsImg} alt="Forest" />
              <Carousel.Caption>
                <h3>Baloons</h3>
                <p>Lorem ipsum</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={baloonsImg} alt="Forest" />
              <Carousel.Caption>
                <h3>Mountains</h3>
                <p>Lorem ipsum</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
    }
}