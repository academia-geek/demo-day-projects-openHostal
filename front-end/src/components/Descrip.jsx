import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { ContentImgStyle, DestitleStyle, ImgDivvStyle, ImgIgGStyle, ImgMmStyle, ImgMStyle, MainDDivStyle } from '../styles/styleDescrip';
import { BootonStyle } from '../styles/styleLandPage';
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup
// } from 'https://cdn.esm.sh/react-leaflet'

const Descrip = () => {
    
    let {index} = useParams();
    const state = useSelector((state) => state);
  
    const {db} = state.crud;
    console.log(db) 
   
  return (
    <>
      <Navbar  bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><h3>OpenHostal</h3></Navbar.Brand>
                <div>
                <Link to='/registro'><BootonStyle>Registrarse</BootonStyle></Link>
                <Link to='/login'><BootonStyle>Iniciar Sesion</BootonStyle></Link>
                </div>
            </Container> 
        </Navbar> 
        <MainDDivStyle>
        <DestitleStyle>{`${db[index].tipo}`}</DestitleStyle>
        </MainDDivStyle>
        <MainDDivStyle>
          
          <ImgDivvStyle>
            <ImgIgGStyle src={`${db[index].foto[0]}`} />
          </ImgDivvStyle>
          <ContentImgStyle>
            <ImgMStyle src={`${db[index].foto[1]}`} />
        
            <ImgMStyle src={`${db[index].foto[2]}`} />
            </ContentImgStyle>
            <ContentImgStyle>
            <ImgMmStyle src={`${db[index].foto[3]}`} />
            <ImgMmStyle  src={`${db[index].foto[0]}`} 
            />
            </ContentImgStyle>
        </MainDDivStyle>
        <div>
          <h3>Descripcion</h3>
          <p>{`${db[index].descripcion}`}</p>    
        </div>
        <div>
          <h3>Servicion</h3>
          <p>{`${db[index].servicios}`}</p>    
        </div>
        
        

  {/* <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer> */}

      </>
    
  )
}

export default Descrip