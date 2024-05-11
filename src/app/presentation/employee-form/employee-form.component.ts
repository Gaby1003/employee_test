import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/domain/models/employee';
import { EmployeeUsecase } from 'src/app/domain/usecases/employe-usecase';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {

  employee: FormGroup;

  constructor( private employeeUsecase: EmployeeUsecase, private router: Router){
    this.employee = new FormGroup({
      name: new FormControl(),
      salary: new FormControl(),
      age: new FormControl()
    })
  }

  onSend(){
    console.log(this.employee.value)
    this.employeeUsecase.createEmployee(this.employee.value).subscribe((res)=> {
      console.log(res)
    })
    this.router.navigateByUrl('employees')
  }
}
