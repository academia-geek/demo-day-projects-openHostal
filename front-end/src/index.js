import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouters from './routers/AppRouters';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersistGate } from 'redux-persist/integration/react';
import store, { Persistor } from './redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        <AppRouters/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

