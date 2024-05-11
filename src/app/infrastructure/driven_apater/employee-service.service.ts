import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "src/app/domain/models/employee";
import { EmployeeGateway } from "src/app/domain/models/gateway/employee-gateway";


@Injectable({
    providedIn: 'root'
})
export class EmployeeService extends EmployeeGateway{
    url = 'https://dummy.restapiexample.com/api/v1'

    constructor(private _httpClient: HttpClient){ super() }
    
    getAllEmployees(): Observable<any>{
        return this._httpClient.get(this.url + '/employees');
    }

    createEmployee(employee: Employee): Observable<any>{
        return this._httpClient.post((this.url + '/create'), employee);
    }
}