import { authTypes } from "../types/types";



export const authReducer = ( state = {}, action ) => {

    switch (action.type) {  //"[USR] register"

        case authTypes.REGISTER:  //"[USR] register"

        return action.payload;

        default:

            return state;
    };
};