import React from 'react'
import Room from './Room'

const Rooms = (props) => {
    const {data} = props;

    return (
        <>
            {
                data.length === 0 ? <p> No hay habitaciones disponibles </p> :
                data.map((element, index) => <Room key={Math.random().toString(36).substring(0, index)} data={element} />)
            }
        </>
    )
}

export default Rooms