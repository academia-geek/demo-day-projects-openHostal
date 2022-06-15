import React from 'react'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

const Categorias = ({hostales}) => {
    
    // {`https://storage.googleapis.com/${ele.foto}`} 
  return (
    <>
        { hostales.map( (ele, index) =>(
            <Card key={index} style={{ margin:'2rem',width: '12rem', color: 'black', border:'none',
                    boxShadow:'10px 5px 5px black'}}>
                <Card.Img variant="top" src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1654386898/openhostal/los-mejores-hoteles-para-alojarte-al-menos-una-vez_1_eonw7r.webp" />
                <Card.Body>
                    <Card.Title>{ele.nombre}</Card.Title>
                    <Card.Title>{ele.ciudad}</Card.Title>
                    <Card.Text>
                        {ele.descripcion}
                    </Card.Text>
                    <Button variant="primary">Ver Habitaciones</Button>
                </Card.Body>
            </Card>
        ))
        }
    </>
  )
}

export default Categorias