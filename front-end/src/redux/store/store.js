import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { authReducer } from "../reducers/authReducer";
import { getReducer } from "../reducers/getReducer";
import { crudReducer } from "../reducers/crudReducer";



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    login: authReducer,
    getData: getReducer,
    crud: crudReducer
});


export const store = createStore(
    reducers,
        composeEnhancers( applyMiddleware(thunk) )
);