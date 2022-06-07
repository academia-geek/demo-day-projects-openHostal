import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logoutAsync } from '../redux/actions/authActions'
import { BootonStyle } from '../styles/styleLandPage'

const Home = () => {
    const dispatch = useDispatch() 
   

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">OpenHostal</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <BootonStyle  onClick={()=>dispatch(logoutAsync())}>Cerrar Sesion</BootonStyle>
        </Container> 
      </Navbar>
    </>
  )
}

export default Home