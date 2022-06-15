import { ReferalApplication } from "./referal-application.entity";


export class Referal {
    id!: number;
    email!: string;
    referalApplicationId!: number;
    referalCode!: string;
    application!: ReferalApplication;

 
}
