import { Idrug } from "src/app/shared/models/interfaces/Idrug";

export interface Iactiveingredient {
    id:number,
    name:string,
    description?:string,
    drugs?:number[]
}