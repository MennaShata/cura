import { Icolor } from "./Icolor";
import { Ishape } from "./ishape";
import { IdrugType } from "./Idrug-type";
import { Iactiveingredient } from "./iactiveingredient";
import { IstrengthUnit } from "./Istrength-unit";

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


}