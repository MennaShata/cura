export interface Iactiveingredient {
    id:number,
    name:string,
    description?:string,
    drugs?:number[],
    foodinteractions?:number[];
    diseases?:number[];
    sideEffect?:number[];
}