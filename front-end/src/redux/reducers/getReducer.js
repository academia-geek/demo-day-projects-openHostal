import { getData } from "../types/types";



export const getReducer = ( state = {}, action ) => {

    switch (action.type) {  

        case getData.ROOM: 

        return action.payload;

        default:

            return state;
    };
};