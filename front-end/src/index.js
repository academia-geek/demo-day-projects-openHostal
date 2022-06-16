import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouters from './routers/AppRouters';
import { store } from './redux/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { ThemeProvider,  createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// import Home from './Geolocation/Home.probe';

const theme = createTheme({
  pallete:{
    primary:{
      // main:'#ffffff',
      main: red[500],
    },
    secondary:{}
  }
}
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <AppRouters/>
    </Provider>
    </ThemeProvider>
  </React.StrictMode>


  // se prueba directamente el componente
  // ya que no renderiza la aplicacion
);

// ReactDOM.render(
//   <Home /> ,
// document.getElementById("root")
// );