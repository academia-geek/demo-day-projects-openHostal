import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logoutAsync } from '../redux/actions/authActions'

const Home = () => {
    const dispatch = useDispatch() 
   

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">OpenHostal</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button className="text-light" type='button' variant="primary"
              onClick={()=>dispatch(logoutAsync())}>
                            Cerrar Sesion 
          </Button>
          </Container> 
      </Navbar>
    </>
  )
}

export default Home