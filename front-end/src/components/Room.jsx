import React from 'react'
import {Link} from 'react-router-dom';
import { Button, Card } from 'react-bootstrap'
import { CardImmStyle, CardsStyle, ImgIgStyle } from '../styles/styleLandPage'

const Room = ({ data }) => {
    const { foto, tipo, id, descripcion,id_hostal } = data
    console.log(id, id_hostal)
    return (
        <>
            <CardsStyle >
                <CardImmStyle>
                    <ImgIgStyle src={foto[1]}  />
                </CardImmStyle>
                <div>
                    <Card.Body>
                        <Card.Title>{tipo}</Card.Title>
                        <Card.Text>
                            {descripcion}
                        </Card.Text>

                        {/* <NavLink product={db} to={`/descrip/${ele.id}`} ><Button variant="primary">Ver Producto</Button></NavLink> */}
                        <Link to={`/room/${id_hostal}/${id}`} ><Button variant="primary">Ver Producto</Button></Link>
                    </Card.Body>
                </div>
            </CardsStyle>
        </>
    )
}

export default Room