import React from 'react'
import Hostal from './Hostal'

const Hostales = (props) => {
    const {data, rooms, setRooms} = props;
  return (
    <div className="d-flex justify-content-center flex-wrap">
       {
        data.map((element,index) => 
        <Hostal
            key={Math.random().toString(36).substring(0,index)}  
            data={element}
            rooms={rooms}
            setRooms={setRooms}
        />)
       }
    </div>
  )
}

export default Hostales