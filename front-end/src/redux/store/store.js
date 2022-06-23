import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { authReducer } from "../reducers/authReducer";
import { crudReducer } from "../reducers/crudReducer";
import { reservasReducer } from "../reducers/reservasReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistConfig = {
    key: 'root',
    storage,
  }

const reducers = combineReducers({
    login: authReducer,
    crud: crudReducer,
    reservas: reservasReducer
});


const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(
    persistedReducer, composeEnhancers( applyMiddleware(thunk) )
);

const Persistor = persistStore(store);

export {Persistor};
export default store;