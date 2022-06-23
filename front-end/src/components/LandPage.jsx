import React, { useState, useEffect } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import MainInfo  from './MainInfo';
import FormSearch from './FormSearch';
import {
  BootonStyle, H1Style, H2Style,
  MainDivStyle, 
  CardCateStyle, CardFindStyle
} from '../styles/styleLandPage';
import Rooms from './Rooms';

// import { helpHttp } from '../helpers/helpHttp';
// import { noAction, readAllAction } from '../redux/actions/crudActions';
// import Categorias from './Categorias';
import Hostales from './Hostales';
import hostales from '../mocks/hostal.json'
 
/* 
const { db } = state.crud; */


function LandPage() {
  

  // const [hostal, setHostal] = useState([])
  // let hostales = hostal
  // const [filtroHostal, setFiltroHostal] = useState(hostales)
  const [rooms, setRooms] = useState(null);
  const [hostals, setHostals] = useState(hostales.hostales);

  // useEffect(() => {
  //   setFiltroHostal(hostal)
  // }, [hostal]);

  // console.log(hostales)
  // let url = "https://openhostal.herokuapp.com/hostales";
  // let url2 = "https://openhostal.herokuapp.com/rooms";

  // useEffect(() => {

  //   helpHttp()
  //     .get(url2)
  //     .then((res) => {

  //       if (!res.err) {
  //         setRoom(res)
  //         dispatch(readAllAction(res));
  //       } else {
  //         dispatch(noAction());
  //       }

  //     });
  // }, [url2, dispatch]);

  // useEffect(() => {

  //   helpHttp()
  //     .get(url)
  //     .then((res) => {

  //       if (!res.err) {
  //         // setHostal(res)
  //         dispatch(readAllAction(res));
  //       } else {
  //         dispatch(noAction());
  //       }
  //     });
  // }, [url, dispatch]);



  return (
    <MainDivStyle>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><h3>OpenHostel</h3></Navbar.Brand>
          <div>
            <Link to='/registro'><BootonStyle>Registrarse</BootonStyle></Link>
            <Link to='/login'><BootonStyle>Iniciar Sesion</BootonStyle></Link>
          </div>
        </Container>
      </Navbar>
      <MainInfo />
      <H1Style>Selecciona tu destino</H1Style>
      <FormSearch hostals={hostals} setHostals={setHostals} setRooms={setRooms}/>
      <H2Style>Selecciona tu Ciudad de Destino</H2Style>
      <CardCateStyle>
        <Hostales data={hostals} rooms={rooms} setRooms={setRooms}/>
      </CardCateStyle>
      {
        rooms ? 
        <>
          <CardFindStyle>
            <H2Style>Buscando </H2Style >
          </CardFindStyle>

          <CardFindStyle>
            <Rooms data={rooms} />
          </CardFindStyle>
        </>: null
        
      }
      
      
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home"><h3>OpenHostel</h3></Navbar.Brand>
            <h3>Hecho con 💕</h3>
          </Container>
        </Navbar>
      </div>

    </MainDivStyle>
  )
}

export default LandPage;