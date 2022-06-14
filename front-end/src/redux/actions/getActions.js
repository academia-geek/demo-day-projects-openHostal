import { getData } from "../types/types"




const getDatos = (url) => {
    return {
        type: getData.ROOM,
        payload: { url}
    }
}