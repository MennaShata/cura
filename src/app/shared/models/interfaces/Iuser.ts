import { IUserDrug } from "./IUserDrug";
import { IuserDisease } from "./IUserDisease";

export interface Iuser {
    username:string
    email:string
    password:string
    confirmPassword?:string;
    firstName?: string;
    lastName?: string;
    profession?: string;
    fieldOfSpeciality?: string;
    phoneNumber?: number;
    dateOfBirth?: any;
    image?: string;
    country?: string;
    city?: string;
    druglist?: IUserDrug[]
    diseaseList?: IuserDisease[]
}   
