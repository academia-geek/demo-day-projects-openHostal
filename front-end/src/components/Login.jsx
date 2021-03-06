import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { loginAsync, loginFacebookAsync, loginGoogleAsync } from '../redux/actions/authActions';
import { ContenDivStyle } from '../styles/styleApp';


const Login = () => {

  const dispatch = useDispatch()

  const loginFacebook = () => {
      dispatch( loginFacebookAsync() )
  }
  const loginGoogle = () =>{
      dispatch( loginGoogleAsync())
  }
  const[formValue, handleInputChange, rest]=useForm({
      user: '',
      pass: ''
  })

  const {user, pass}= formValue

  const handleSubmit =(e)=>{
      console.log(formValue)
      dispatch(loginAsync(user, pass))
      rest()
  }
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><h2>OpenHostal</h2></Navbar.Brand>
            </Container> 
        </Navbar>
        <ContenDivStyle>
          <div className="card-body p-5">
              <form onSubmit={handleSubmit}>
                  <h3>Inico de Sesion</h3>
                  <div className="orm-group ">
                      <label className="col-sm-4 col-lg-2 col-form-label">Correo</label>
                      <div className="form-group col-sm-8 col-lg-2">
                          <input
                              type="email"
                              name="user"
                              className="form-control"
                              placeholder="Tu nombre"
                              autoComplete="off"
                              value ={user}
                              onChange={handleInputChange}
                          />
                      </div>
                  </div>
                  <div className="form-group mt-3">
                      <label className="col-sm-4 col-lg-2 col-form-label">Contraseña</label>
                      <div className="form-group col-sm-8 col-lg-2">
                          <input
                              type="password"
                              name="pass"
                              className="form-control"
                              placeholder="Tu Clave"
                              autoComplete="off"
                              value ={pass}
                              onChange={handleInputChange}
                          />
                      </div>
                  </div>

                  <button type="submit" className="m-2 btn btn-danger col-lg-2">
                      Login
                  </button>
                  
                  
              </form>
              
              <button className="m-2 btn btn-light col-lg-2" onClick={loginGoogle}>Google 
                      <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                  </button>
                  <br/>
              <button className='m-2 btn btn-primary text-light col-lg-2' onClick={loginFacebook}>Inicio con facebook</button>
              <p style={{marginLeft:'30px'}}><Link to='/registro'>Registrarse</Link></p>
          </div>
        </ContenDivStyle>
    </div>
  );
};

export default Login