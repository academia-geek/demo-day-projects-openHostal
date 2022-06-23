import { AGREGAR_FILTRO, AGREGAR_HOSPEDAJE, ACTUALIZAR_FILTRO, ACTUALIZAR_HOSPEDAJE, ELIMINAR_FILTRO, ELIMINAR_HOSPEDAJE } from "../types/types"

export function agregarFiltro(data) {
    return {type: AGREGAR_FILTRO, data}
}

export function agregarHospedaje(data) {
    return {type: AGREGAR_HOSPEDAJE, data}
}

export function actualizarFiltro(data) {
    return {type: ACTUALIZAR_FILTRO, data}
}

export function actualizarHospedaje(data) {
    return {type: ACTUALIZAR_HOSPEDAJE, data}
}

export function eliminarFiltro(data) {
    return {type: ELIMINAR_FILTRO, data}
}

export function eliminarHospedaje(data) {
    return {type: ELIMINAR_HOSPEDAJE, data}
}