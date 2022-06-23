import React, { useState } from 'react'
import { useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import { Container, Button } from 'react-bootstrap';
// import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { ContentImgStyle, DestitleStyle, ImgDivvStyle, ImgIgGStyle, ImgMmStyle, ImgMStyle, MainDDivStyle } from '../styles/styleDescrip';
import { BootonStyle, DivContent } from '../styles/styleLandPage';
import hostales from '../mocks/hostal.json'
import { useSelector } from 'react-redux';



const Descrip = (product) => {

  const state = useSelector((state) => state);
  const reservas = state;
  let { idhostal, idroom } = useParams();
  const hostal = hostales.hostales.find((element) => element.id == idhostal);
  const room = hostal.habitaciones.find((element) => element.id == idroom);
  console.log(reservas)
  useEffect(() => {

  }, [])

  console.log(hostal, room)
  return (
    <>
      <DivContent>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home"><h3>OpenHostel</h3></Navbar.Brand>
            <div>
              <Link to='/registro'><BootonStyle>Registrarse</BootonStyle></Link>
              <Link to='/login'><BootonStyle>Iniciar Sesion</BootonStyle></Link>
            </div>
          </Container>
        </Navbar>
        <MainDDivStyle>
          <DestitleStyle>{`${room.tipo}`}</DestitleStyle>
        </MainDDivStyle>
        <MainDDivStyle>

          <ImgDivvStyle>
            <ImgIgGStyle src={`${room.foto[0]}`} />
          </ImgDivvStyle>
          <ContentImgStyle>
            <ImgMStyle src={`${room.foto[1]}`} />

            <ImgMStyle src={`${room.foto[2]}`} />
          </ContentImgStyle>
          <ContentImgStyle>
            <ImgMmStyle src={`${room.foto[3]}`} />
            <ImgMmStyle src={`${room.foto[0]}`}
            />
          </ContentImgStyle>
        </MainDDivStyle>


        <div className='container w-100'>
          <div className='row'>
            <div className='col div-description p-3'>
              <div className='m-3'>
                <h3>Descripcion</h3>
                <p>{`${room.descripcion}`}</p>
              </div>
              <div className='m-3'>
                <h3>Servicios</h3>
                <p>{`${room.servicios}`}</p>
              </div>
              <div className='m-3'>
                <h3>Direccion</h3>
                <p>{`${hostal.direccion}`}</p>
              </div>
            </div>
            
            <div className='col div-description p-3'>
              <h5 className='p-3'>Precio:  ${`${room.precio}`}</h5>
              <Link className='p-3' to='/booking'><Button>Reservar</Button></Link>
            </div>
          </div>
        </div>
        

      </DivContent>

    </>

  )
}

export default Descrip