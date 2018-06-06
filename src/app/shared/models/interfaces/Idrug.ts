import { Icolor } from "./Icolor";
import { Ishape } from "./ishape";
import { IdrugType } from "./Idrug-type";
import { Iactiveingredient } from "./iactiveingredient";
import { IstrengthUnit } from "./Istrength-unit";
import { Idisease } from "./idisease";
import { Ifood } from "./ifood";
import { IfoodInteraction } from "./ifoodInteraction";
import { Isideeffect } from "./Isideeffect";

export interface Idrug{
    id?:number;
    image:string;
    drugName:string;
    drugTypeName:number;
    drugTypeImage?:string;
    activeIngredient:number[];
    strength:number;
    strengthUnit:number;
    usage:string;
    dosage:string;
    company:string;
    pregnancyWarning:boolean;
    childernWarning:boolean;
    warning:string;
    approvalHistory:string;
    color?:number;
    shape?:number;
    pillImage?:string;
    textOnSide?:string;
    textOnOtherSide?:string;
    disease?:number[];
    foodInteraction?:number[];
    sideEffect?:number[];


}