import {AGREGAR_FILTRO} from '../types/types';


export const reservasReducer = ( state = {}, action ) => {

    switch (action.type) {  

        case AGREGAR_FILTRO: 

        return {
            ...state,
            text: state.reservas
        }

        default:
            return state;
    };
};
