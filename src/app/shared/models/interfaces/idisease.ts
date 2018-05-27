import { IDrugDisease } from "./IDrugDisease";

export interface Idisease {
    id:number;
    name:string,
    descripton:string,
    bodyParts:string[] ,
    forbiddenDrugs:IDrugDisease[],
    treatedDrugs:IDrugDisease[]
}
