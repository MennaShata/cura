import { IDrugDisease } from "./IDrugDisease";

export interface Idisease {
    name:string,
    descripton:string,
    bodyParts:string[] ,
    forbiddenDrugs:IDrugDisease[],
    treatedDrugs:IDrugDisease[]
}
