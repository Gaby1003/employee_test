import { Observable } from "rxjs";
import { Employee } from "../employee";

export abstract class EmployeeGateway{
    abstract createEmployee(employee: Employee): Observable<any>;
    abstract getAllEmployees(): Observable<any>;
}