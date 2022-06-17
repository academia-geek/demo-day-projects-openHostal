import React, { useState, useEffect } from 'react'
import { Navbar , Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {BsWifi, BsSnow2,BsFillDice5Fill,BsPersonBoundingBox,BsFillGiftFill } from "react-icons/bs";
import { BootonStyle, CarDivStyle, CarHStyle, CartabStyle, CarthStyle, H1Style, HDivStyle, ImgDivStyle,
  MainDivStyle, PDivStyle, TitlesDivStyle, FormLanStyle, BtnStyle, CardImgStyle, IconCStyle, H2Style,
   CardCateStyle, CardFindStyle, IconIIStyle } from '../styles/styleLandPage'
import { DateRangePicker } from 'rsuite';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { helpHttp } from '../helpers/helpHttp';
import { noAction, readAllAction } from '../redux/actions/crudActions';
import Categorias from './Categorias';
import { Form } from 'react-bootstrap';


const personalBusqueda={
  ciudad:"",
    cantPersonas:"",
    checkIn:[],
    checkout:"",
    diasReservado:"",
}

function LandPage() {
  const {beforeToday} = DateRangePicker;
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const {db} = state.crud; 
  const [hostal, setHostal] = useState([])
  const [busquedaInfo, setBusquedaInfo]= useState(personalBusqueda)

  const updateBuscar = (e) =>{
    setBusquedaInfo({
      ...busquedaInfo,
      ciudad: e.target.value,
    })
  }
  function calcular(a,b){
    let fecha1 = Date.UTC(a.getFullYear(), a.getMonth(), b.getDate);
    let fecha2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate);
    let diferencia = (a - b) / (1000* 60 * 60 * 24);
    return Math.floor(diferencia);
  }
  const updateBuscarr = (e) =>{
    setBusquedaInfo({
      ...busquedaInfo,
      checkIn: [e[0],e[1]],
      
    })
    setBusquedaInfo({
      ...busquedaInfo,
     diasReservado: calcular(e[1],e[0])
    })
  }
  const updateBuscarH = (e) =>{
    setBusquedaInfo({
      ...busquedaInfo,
      cantPersonas: e.target.value,
    })
  }
  const hostales = hostal
  let url = "http://35.237.19.167:4000/api/hostal";

  useEffect(() => {
   
    helpHttp()
      .get(url)
      .then((res) => {
      
        if (!res.err) {
          //setDb(res);
          setHostal(res)
          dispatch(readAllAction(res));
         
        } else {
          //setDb(null);
          dispatch(noAction());
         
        }
       
      });
  }, [url, dispatch]);
  

  return (
      <MainDivStyle>    
        <Navbar  bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home"><h3>OpenHostal</h3></Navbar.Brand>
            <div>
              <Link to='/registro'><BootonStyle>Registrarse</BootonStyle></Link>
              <Link to='/login'><BootonStyle>Iniciar Sesion</BootonStyle></Link>
            </div>
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
                <thead>
                  <tr>
                    <CarthStyle> Wifi</CarthStyle>
                    <CarthStyle> Juegos</CarthStyle>
                    <CarthStyle>Aire</CarthStyle>
                    <CarthStyle> Servicio</CarthStyle>
                  </tr> 
                  <IconCStyle>
                    <IconIIStyle><BsWifi/></IconIIStyle>
                    <IconIIStyle> <BsFillDice5Fill/></IconIIStyle>
                    <IconIIStyle> <BsSnow2/></IconIIStyle>
                    <IconIIStyle><BsPersonBoundingBox/></IconIIStyle>
                  </IconCStyle> 
                </thead>
              </CartabStyle>
            </div>
            <CardImgStyle>
              <p>Hospedaje Para ti</p>
              <p>5 dias 6 noche</p>
              <BootonStyle> $890.000</BootonStyle>
            </CardImgStyle>
          </CarDivStyle>
        </ImgDivStyle>

        <H1Style>Selecciona tu Destino</H1Style>
        <FormLanStyle>
        {/* <div className="form-group ">
                      <label className="col-sm-4 col-lg-2 col-form-label"></label>
                      <div className="form-group col-sm-11 ">
                          <input
                              type="text"
                              name="ciudad"
                              className="form-control"
                              placeholder="A donde vamos?"
                              autoComplete="off"                         
                          />
                      </div>
                      <select className="col-sm-4 col-lg-2 col-form-label ">
                      <option selected>Choose...</option>
                            <option value="1">Bogota</option>
                            <option value="2">Medellin</option>
                            <option value="3">Santa Marta</option>
                      </select>
                  </div> */}
                  <Form.Group className="mb-3 col-lg-3" controlId="formBasicName">
                    <Form.Label>ciudad</Form.Label>
                    <Form.Select aria-label="Default select example" type="text"
                          placeholder="ciudad"
                          name="ciudad "
                          required
                          value={busquedaInfo.ciudad}
                          onChange={updateBuscar}>
                            <option>Seleccione la Ciudad</option>
                              <option value='Bogota' >Bogota</option>
                              <option value='Medellin' >Medellin</option>
                              <option value='Santa Marta' >Santa Marta</option>
                          
                    </Form.Select>
                    
                
            </Form.Group>
                  <div className="form-group">
                    <label className="col-sm-4 col-lg-2 col-form-label"></label>
                        <div className="form-group col-sm-8">
                        <DateRangePicker 
                          method="get"
                          name="checkIn"
                          placeholder="check In, check Out"
                          disabledDate={beforeToday()}
                          value={busquedaInfo.checkIn}
                          onChange={updateBuscarr}
                           />
                          </div>
                  </div>
                  <div className="form-group text-dark">
                      <label className="col-sm-4 col-lg-2 col-form-label"></label>
                      <div className="form-group col-sm-11">
                          <input
                              type="number"
                              name="cantPersonas"
                              placeholder="Cantidad personas"
                              value={busquedaInfo.cantPersonas}
                              onChange={updateBuscarH}
                              maxLength="2"
                          />
                      </div>
                  </div>
                  <BtnStyle>Buscar </BtnStyle>
        </FormLanStyle>
        {
          !busquedaInfo.ciudad 
            ?<H2Style>Selecciona tu Ciudad de Destino</H2Style>
            :<H2Style>Busqueda en la ciudad de {busquedaInfo.ciudad}</H2Style>
        }
          <CardCateStyle>

          <Categorias hostales={hostales}/>

        </CardCateStyle>
          <CardFindStyle>
            <H2Style>Buscando </H2Style >
          </CardFindStyle>
          
          <CardFindStyle>
            <Product/>

             {/* <CardsStyle>
              <CardImmStyle>
                <ImgIgStyle src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1654386898/openhostal/los-mejores-hoteles-para-alojarte-al-menos-una-vez_1_eonw7r.webp"/>
              </CardImmStyle>
              <div>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
              </div>
            </CardsStyle> */}
           
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