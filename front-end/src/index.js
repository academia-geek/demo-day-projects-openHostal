import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouters from './routers/AppRouters';
import { store } from './redux/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Geolocation/Home.probe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Provider store={store}>
      <AppRouters/>
    </Provider>
  </React.StrictMode>


  // se prueba directamente el componente
  // ya que no renderiza la aplicacion
);

// ReactDOM.render(
//   <Home /> ,
// document.getElementById("root")
// );