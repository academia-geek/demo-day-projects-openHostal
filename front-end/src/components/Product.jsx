import React from 'react'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { CardFindStyle, CardImmStyle, CardsStyle, ImgIgStyle, MainDivStyle } from '../styles/styleLandPage';

const Product = () => {
    const pro = [1,2,3,4,5,6,7,8,9]
  return (
    <><MainDivStyle>
    <CardFindStyle>
        {
            pro.map( index =>(
            
                <CardsStyle key={index}>
                    <CardImmStyle>
                         <ImgIgStyle src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1654386898/openhostal/los-mejores-hoteles-para-alojarte-al-menos-una-vez_1_eonw7r.webp"/>
                    </CardImmStyle>
                    <div>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </div>
              </CardsStyle>
            
            ))
        }
          </CardFindStyle>
              </MainDivStyle>
    </>
  )
}

export default Product