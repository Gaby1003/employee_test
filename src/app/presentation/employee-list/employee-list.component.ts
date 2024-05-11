import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/domain/models/employee';
import { EmployeeUsecase } from 'src/app/domain/usecases/employe-usecase';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Array<Employee> = []
  columns = ['id', 'employee_name', 'employee_salary', 'employee_age', 'salary_per_day']

  constructor(private employeeUsecase: EmployeeUsecase){}
  
  
  async ngOnInit(): Promise<void> {
    await this.employeeUsecase.getAllEmployees().subscribe(async (list) => {
      this.employees = await list.data
    })
    console.log(this.employees)
  }



}
