import { ObjectId } from "mongodb";

export interface InterfaceReservas{
    sede:string,
    ciudad:string,
    checkin:Date,
    checkout:Date,
    huespedes:number,
    noches:number,
    habitacion:string,
    valorTotal:number,
}