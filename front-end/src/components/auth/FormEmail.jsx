import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from '../../styles/authStyles.module.css'
import { Button, Container, Form, Navbar } from 'react-bootstrap';
import { BootonStyle } from '../../styles/styleLandPage';
import { logoutAsync } from '../../redux/actions/authActions';

const FormEmail = () => {

  const dispatch = useDispatch()

  return (

    <>
      <div className={styles.nav}>
        <Navbar fixed='top' bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home"><h3>OpenHostal</h3></Navbar.Brand>
            <Navbar.Brand href="#home"><h2>Verificación</h2></Navbar.Brand>
            <div>
              <BootonStyle onClick={() => dispatch(logoutAsync())}>Cerrar Sesion</BootonStyle>
            </div>
          </Container>
        </Navbar>
      </div>
      <div className={styles.global_auth_verify}>
        <div className={styles.auth_titles}>
        <h1>Ya casí estás!</h1>
        <h2>Necesitamos verificar tu correo electrónico para poder continuar</h2>
        </div>
        <div className={styles.capa}></div>
        {/* <Link to='/home'>Continuar al home</Link> */}
        <a href='https://www.gmail.com/' target="_blank" className={styles.href_email}>Llévame a Gmail</a>
        <a href='https://www.outlook.com/' target="_blank" className={styles.href_email}>Llévame a Outlook </a>
      </div>
    </>
  )
}

export default FormEmail