import React from 'react'
import { Navbar , Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {BsWifi, BsSnow2,BsFillDice5Fill,BsPersonBoundingBox,BsFillGiftFill } from "react-icons/bs";
import { CarDivStyle, CarHStyle, CartabStyle, CarthStyle, H1Style, HDivStyle, ImgDivStyle, MainDivStyle, PDivStyle, TitlesDivStyle } from '../styles/styleLandPage'

function LandPage() {
  return (
      <MainDivStyle>    
       <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><h3>OpenHostal</h3></Navbar.Brand>
                <p style={{marginLeft:'30px'}}><Link to='/login'>Iniciar Sesion </Link></p>
            </Container> 
        </Navbar>
        <ImgDivStyle>
          <TitlesDivStyle>
            <HDivStyle>
             Tus Mejores
             Momentos Esperan
            </HDivStyle>
            <PDivStyle>Hospedajes al menor precio, inolvidable experiencia </PDivStyle>
            <PDivStyle><BsFillGiftFill/>   EL MEJOR REGALO . . .</PDivStyle>          
          </TitlesDivStyle>
          <CarDivStyle>
            <div>
              <CarHStyle>Todo Incluido</CarHStyle>
              <CartabStyle>
              <tr>
              <CarthStyle> Wifi</CarthStyle>
              <CarthStyle> Juegos</CarthStyle>
              <CarthStyle>Aire</CarthStyle>
              <CarthStyle> Servicio</CarthStyle>
              </tr> 
              <tr>
              <th><BsWifi/></th>
              <th> <BsFillDice5Fill/></th>
              <th> <BsSnow2/></th>
              <th><BsPersonBoundingBox/></th>
              </tr> 
              </CartabStyle>
            </div>
            <div>
            </div>
            <div>
            </div>
          </CarDivStyle>
        </ImgDivStyle>
        <H1Style>Selecciona tu Destino</H1Style>
 
    </MainDivStyle>
  )
}

export default LandPage;