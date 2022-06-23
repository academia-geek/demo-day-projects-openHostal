import React, { useState, useEffect } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  BootonStyle
} from '../styles/styleLandPage'


function Nav() {
 
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.crud;

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
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><h3>OpenHostal</h3></Navbar.Brand>
          <div>
            <Link to='/registro'><BootonStyle>Registrarse</BootonStyle></Link>
            <Link to='/login'><BootonStyle>Iniciar Sesion</BootonStyle></Link>
          </div>
        </Container>
      </Navbar>
     
  )
}

export default Nav;