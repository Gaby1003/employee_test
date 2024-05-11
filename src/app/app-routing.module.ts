import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './presentation/employee-list/employee-list.component';
import { EmployeeFormComponent } from './presentation/employee-form/employee-form.component';

const routes: Routes = [ 
  { path: 'employees', component: EmployeeListComponent},
  { path: 'create-employee', component: EmployeeFormComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
