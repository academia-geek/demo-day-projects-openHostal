import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandPage() {
  return (
      <>    
    <div>LandPage</div>
    <p style={{marginLeft:'30px'}}><Link to='/login'>Iniciar Sesion </Link></p>
    <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100 h-10"
      src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1654286831/openhostal/d8062803_z_x93qx8.webp"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-10"
      src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1654286831/openhostal/291189069_cbxgsr.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-10"
      src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1654286831/openhostal/d163e3d8_z_sl9o5y.webp"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-10"
      src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1654286831/openhostal/images_qxlrf2.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-10"
      src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1654286831/openhostal/hostal-quil_rtsrrb.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  )
}

export default LandPage;