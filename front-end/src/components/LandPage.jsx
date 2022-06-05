import React from 'react'
import { Navbar , Container, Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {BsWifi, BsSnow2,BsFillDice5Fill,BsPersonBoundingBox,BsFillGiftFill } from "react-icons/bs";
import { BootonStyle, CarDivStyle, CarHStyle, CartabStyle, CarthStyle, H1Style, HDivStyle, ImgDivStyle, MainDivStyle, PDivStyle, TitlesDivStyle, FormLanStyle, BtnStyle, CardImgStyle, IconCStyle, H2Style, CardCateStyle, CardFindStyle } from '../styles/styleLandPage'

function LandPage() {
  return (
      <MainDivStyle>    
       <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><h3>OpenHostal</h3></Navbar.Brand>
                <Link to='/login'><BootonStyle>Iniciar Sesion</BootonStyle></Link>
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
              <IconCStyle>
              <th><BsWifi/></th>
              <th> <BsFillDice5Fill/></th>
              <th> <BsSnow2/></th>
              <th><BsPersonBoundingBox/></th>
              </IconCStyle> 
              </CartabStyle>
            </div>
            <CardImgStyle>
              <p>Hospedaje Para ti</p>
              <p>5 dias 6 noche</p>
              <BootonStyle> $890.000</BootonStyle>
            </CardImgStyle>
            <div>
            </div>
          </CarDivStyle>
        </ImgDivStyle>
        <H1Style>Selecciona tu Destino</H1Style>
        <FormLanStyle>
        <div className="form-group ">
                      <label className="col-sm-4 col-lg-2 col-form-label"></label>
                      <div className="form-group col-sm-11 ">
                          <input
                              type="email"
                              name="user"
                              className="form-control"
                              placeholder="A donde vamos?"
                              autoComplete="off"                         
                          />
                      </div>
                  </div>
                  <div className="form-group">
                      <label className="col-sm-4 col-lg-2 col-form-label"></label>
                      <div className="form-group col-sm-11">
                          <input
                              type="date"
                              name="checkin"
                              className="form-control"
                              placeholder="Check in"
                              autoComplete="off"
                          />
                      </div>
                  </div>
                  <div className="form-group">
                      <label className="col-sm-4 col-lg-2 col-form-label"></label>
                      <div className="form-group col-sm-11">
                          <input
                              type="date"
                              name="checkout"
                              className="form-control"
                              placeholder="Check out"
                              autoComplete="off"
                          />
                      </div>
                  </div>
                  <BtnStyle>Buscar</BtnStyle>
        </FormLanStyle>
        <H2Style>Diferentes Categorias</H2Style>
          <CardCateStyle>
          <Card style={{ margin:'2rem',width: '12rem', color: 'black', border:'none',
                 boxShadow:'10px 5px 5px black'}}>
          <Card.Img variant="top" src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1654386898/openhostal/los-mejores-hoteles-para-alojarte-al-menos-una-vez_1_eonw7r.webp" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
           </Card.Body>
            </Card>
            <Card style={{ margin:'2rem',width: '12rem', color: 'black', border:'none',
                 boxShadow:'10px 5px 5px black'}}>
          <Card.Img variant="top" src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1654386898/openhostal/los-mejores-hoteles-para-alojarte-al-menos-una-vez_1_eonw7r.webp" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
           </Card.Body>
            </Card>

            <Card style={{ margin:'2rem',width: '12rem', color: 'black', border:'none',
                 boxShadow:'10px 5px 5px black'}}>
          <Card.Img variant="top" src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1654386898/openhostal/los-mejores-hoteles-para-alojarte-al-menos-una-vez_1_eonw7r.webp" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
           </Card.Body>
            </Card>

            <Card style={{ margin:'2rem',width: '12rem', color: 'black', border:'none',
                 boxShadow:'10px 5px 5px black'}}>
          <Card.Img variant="top" src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1654386898/openhostal/los-mejores-hoteles-para-alojarte-al-menos-una-vez_1_eonw7r.webp" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
           </Card.Body>
            </Card>
            
        </CardCateStyle>
        <CardFindStyle>
        <H2Style>Buscando </H2Style >
        </CardFindStyle>
          <CardFindStyle>
          
          <Card style={{ margin:'2rem',width: '12rem', color: 'black', border:'none',
                 boxShadow:'10px 5px 5px #212529'}}>
          <Card.Img variant="bottom" src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1654386898/openhostal/los-mejores-hoteles-para-alojarte-al-menos-una-vez_1_eonw7r.webp" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
           </Card.Body>
            </Card>
            <Card style={{ margin:'2rem',width: '12rem', color: 'black', border:'none',
                 boxShadow:'10px 5px 5px #212529'}}>
          <Card.Img variant="bottom" src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1654386898/openhostal/los-mejores-hoteles-para-alojarte-al-menos-una-vez_1_eonw7r.webp" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
           </Card.Body>
            </Card>
            </CardFindStyle>
        
          <div>
          <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><h3>OpenHostal</h3></Navbar.Brand>
                <Link to='/login'><BootonStyle>Iniciar Sesion</BootonStyle></Link>
            </Container> 
        </Navbar>
          </div>
 
    </MainDivStyle>
  )
}

export default LandPage;