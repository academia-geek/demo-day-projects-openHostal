import React from 'react'
import { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap'

const Hostal = (props) => {
    const { data, rooms, setRooms } = props;
    const { foto, nombre, descripcion, habitaciones } = data;
    
    const validateReservas = (reservas) => {
        
        const date1 = new Date('2022-07-27')
        const date2 = new Date('2022-07-28')
        let result = [];
         reservas.map((reserva) => {
            const dateIni = new Date(reserva.fecha_in)
            const dateFinal = new Date(reserva.fecha_final)
        
            if (( date1.getTime() >= dateIni.getTime() && date1.getTime() <= dateFinal.getTime()) || ( date2.getTime() >= dateIni.getTime() && date2.getTime() <= dateFinal.getTime()))
               { 
                result.push(false)}
        })
        return !result.includes(false) 
    }
    
    const changeRooms = () => {
        setRooms(habitaciones.filter((room) => 2 <= room.capacidad && validateReservas(room.reservas)));
    };

    useEffect(()=>{

    },[rooms])

    return (
        <>
            <Card className="m-4 border-0 hostal-card col-lg-3 text-dark ">
                <figure className="container-img  mx-auto d-block h-5">
                    <Card.Img className="image-card" variant="top" src={`${foto}`} />
                </figure>
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text className='description-hostales'>
                        {descripcion}
                    </Card.Text>
                    <Button onClick={changeRooms} variant="primary">Ver Habitaciones</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Hostal