import { Address } from "./address";
import { Company } from "./company";

//The interface for the User data received from the API endpoint.
export interface User{
    id:number;
    username:string;
    name:string;
    email:string;
    address: Address;
    phone:string;
    website:string;
    company: Company;
}