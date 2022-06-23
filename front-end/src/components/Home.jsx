import React  from 'react'
import { useSelector, useStore } from 'react-redux'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch,  } from 'react-redux'
import { logoutAsync } from '../redux/actions/authActions'
import { BootonStyle} from '../styles/styleLandPage'
import '../styles/caledar.css';
// import { DatePicker } from 'react-datepicker'
// import DatePicker from "react-datepicker";
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { Link } from 'react-router-dom'
import Product from './Product'

// import "react-datepicker/dist/react-datepicker.css";
const Home = () => {
    const dispatch = useDispatch() 
    const store = useStore()
    console.log(store)
    const data = useSelector((state)=> state.login)
    console.log(data)
    const {beforeToday} = DateRangePicker;
  return (
    <>
      <Navbar collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark">
      <Container>
                <Navbar.Brand href="#home"><h3>OpenHostel{}</h3></Navbar.Brand>
                <Navbar.Brand href="#home"><h2>Hola</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
          </Nav>
    
          <div className='dates'>
          <DateRangePicker placeholder="check In, check Out"
           disabledDate={beforeToday()} />
          </div>
            <div className="form-group ms-4">
                <input
                  type="text"
                              name="reserva"
                              className="form-control"
                              placeholder="Su Reserva max 6 dig,"
                              autoComplete="off"
                              maxLength="6" />  
                  </div>
          <Link to='/reserva'><BootonStyle>Mi Reserva</BootonStyle></Link>
          <BootonStyle  onClick={()=>dispatch(logoutAsync())}>Cerrar Sesion</BootonStyle>
          </Navbar.Collapse>
        </Container> 
      </Navbar>
      <br/>
      <br/>
      <Product/>
      
    </>
  )
}

export default Home