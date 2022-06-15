import React from 'react'
import { Container } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutAsync } from '../redux/actions/authActions'
import { BootonStyle } from '../styles/styleLandPage'
import Product from './Product'

const Reserva = () => {
    const dispatch = useDispatch() 
  return (
    <>
        <Navbar  fixed='top' bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><h3>OpenHostal</h3></Navbar.Brand>
                <Navbar.Brand href="#home"><h2>Reservas</h2></Navbar.Brand>
                <div>
                <Link to='/home'><BootonStyle>Volver al Home</BootonStyle></Link>
                <BootonStyle  onClick={()=>dispatch(logoutAsync())}>Cerrar Sesion</BootonStyle>
                </div>
            </Container> 
        </Navbar>
    
    <h1>Reserva</h1>
        <Product/>
    </>
  )
}

export default Reserva