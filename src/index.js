import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouters from './routers/AppRouters';
import { store } from './redux/store/store';
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Provider store={store}>
      <AppRouters/>
    </Provider>
  </React.StrictMode>
);

