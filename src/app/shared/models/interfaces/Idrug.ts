export interface Idrug{
    id?:number;
    image:string;
    drugName:string;
    drugTypeName:string[];
    drugTypeImage?:string;
    activeIngredient:string[];
    strength:number;
    strengthUnit:string;
    usage:string;
    dosage:string;
    company:string;
    pregnancyWarning:boolean;
    childernWarning:boolean;
    warning:string;
    approvalHistory:string;
    color?:string;
    shape?:string;
    pillImage?:string;
    textOnSide?:string;
    textOnOtherSide?:string;


}