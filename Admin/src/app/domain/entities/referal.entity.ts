import { required } from "@rxweb/reactive-form-validators";
import { ReferalApplication } from "./referal-application.entity";


export class Referal {
    id!: number;

    @required()
    email!: string;

    @required()
    referalApplicationId!: number;

    referalCode!: string;
    
    application!: ReferalApplication;

 
}
