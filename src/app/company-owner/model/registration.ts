export class Registration{
    userName:string;
    password:string;
    firstName: string;
    middleName:string;
    lastName: string;
    phoneHome: number;
    phoneOffice: number;
    phoneMobile: number;
    email: string;
    address:address;
    company:company;
}
export class address{
    address1:string;
    address2:string;
    city:string;
    state:string;
    zip1:string;
    zip2:string;
}
export class company{
    name:string;
    ein:string;
    stateRegNo:string;
    noOfUnits:number;
    address:address;
}