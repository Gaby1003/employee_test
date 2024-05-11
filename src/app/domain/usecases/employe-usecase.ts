import { Observable } from "rxjs";
import { Employee } from "../models/employee";
import { EmployeeGateway } from "../models/gateway/employee-gateway";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class EmployeeUsecase {

    constructor(private employeeGateway: EmployeeGateway){}
    
    createEmployee(employee: Employee): Observable<any> {
        return this.employeeGateway.createEmployee(employee);
    }
    
    getAllEmployees(): Observable<any> {
        return this.employeeGateway.getAllEmployees();
    }

}