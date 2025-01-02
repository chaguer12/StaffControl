export class EmployeeModel{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    phone:string;
    address:string;
    city:string;

    constructor(){
        this.id=0;
        this.firstName="";
        this.lastName="";
        this.email="";
        this.phone= "";
        this.address = "";
        this.city = "";
    
    }
}