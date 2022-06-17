import React, { useEffect } from 'react'
import { Button, Container, Form, Navbar } from 'react-bootstrap';
import { BootonStyle } from '../styles/styleLandPage';
import { logoutAsync, updatePass, updateUser, updateUsr } from '../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import styles from '../styles/user.module.css'
import { Avatar, styled, TextField } from '@mui/material';
import { getAuth, updateProfile, updatePassword } from 'firebase/auth';
import useForm from '../hooks/useForm';
import * as Yup from 'yup';
import { useFormik } from 'formik';


const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

const UserInfo = () => {
  const dispatch = useDispatch()


  //   const formik = useFormik({
  //     initialValues: {
  //       displayName: '  ',
  //       photoURL: '',
  //       // email: '',
  //       password: '',
  //     },
  //     onSubmit: ( formValue ) => {
  //       dispatch(updateUser(formValue.displayName))
  //       rest()
  //       console.log(formValue)
  //       if (formValue.password != '') {
  //         dispatch(updatePass(formValue.password))
  //       }
  //       //dispatch(updateProfile(displayName))
  //       if (formValue.displayName != '') {
  //       }
  //     },
  //     validationSchema: Yup.object({
  //         displayName: Yup.string().required(),
  //         contraseña: Yup.string().required().min(6, 'La contraseña debe tener al menos 6 caracteres',)
  //     })
  // });

  const [formValue, handleInputChange, rest] = useForm({
    displayName: '  ',
    photoURL: '',
    // email: '',
    password: '',
  })

  const { displayName, password } = formValue

  const handleSubmit = (e) => {
    e.preventDefault()
    // updateUser(nombre)

    console.log(formValue)
    if (formValue.password !== '') {
      dispatch(updatePass(formValue.password))
    }
    //dispatch(updateProfile(displayName))
    if (formValue.defaultValue !== '') {
      dispatch(updateUser(formValue.displayName))
      rest()
    }

  }

  // useEffect(() => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user != null) {
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
  }
  else {
    const displayName = "username";
    const photoURL = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200";
  }
  // })

  // const newPassword = "";

  useEffect(() => {
    return () => {

    }
  }, [])

  return (
    <>
      <div className={styles.nav_user}>
        <Navbar fixed='top' bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home"><h3>OpenHostal</h3></Navbar.Brand>
            <Navbar.Brand href="#home"><h2>Módulo de Usuario</h2></Navbar.Brand>
            <div>
              <BootonStyle onClick={() => dispatch(logoutAsync())}>Cerrar Sesion</BootonStyle>
            </div>
          </Container>
        </Navbar>
      </div>
      <div className={styles.firstContainer}>
        <h1>Información de usuario</h1>
        <div className={styles.userPhoto_container}>
          <Avatar sx={{ width: 84, height: 84 }} src={user.photoURL} ></Avatar>
          <p>Foto de perfil de {user.displayName}</p>
        </div>
        <div className={styles.userInfo_container}>
          <form onSubmit={handleSubmit}>
            <div className={styles.userInfo_container_input}>
              <div>
                <CssTextField
                  id="standard-basic"
                  label="Nombre"
                  variant="standard"
                  margin="dense"
                  color="primary"
                  name="displayName"
                  autoComplete='off'
                  defaultValue={user.displayName}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="Correo electrónico"
                  variant="standard"
                  margin="dense"
                  color="warning"
                  name="email"
                  disabled
                  defaultValue={user.email}
                />
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="Actualizar Contraseña"
                  variant="standard"
                  margin="dense"
                  color="warning"
                  name="password"
                  autoComplete='off'
                  value={password}
                  onChange={handleInputChange}
                />
              </div>

            </div>
            <button className={styles.submit_update_data} type='submit' >Actualizar datos</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default UserInfo