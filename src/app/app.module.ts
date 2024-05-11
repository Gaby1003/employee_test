import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EmployeeGateway } from './domain/models/gateway/employee-gateway';
import { EmployeeService } from './infrastructure/driven_apater/employee-service.service';
import { EmployeeListComponent } from './presentation/employee-list/employee-list.component';
import { MatToolbarModule } from '@angular/material/toolbar' 
import { MatCardModule } from '@angular/material/card' 
import { MatTableModule } from '@angular/material/table' 
import { RouterModule } from '@angular/router';
import { SalaryPipe } from './presentation/employee-list/salary.component';
import { EmployeeFormComponent } from './presentation/employee-form/employee-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field' 
import { MatInputModule } from '@angular/material/input' 

const routes = [
  { path: 'employees', component: EmployeeListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    SalaryPipe,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [ {provide: EmployeeGateway, useClass: EmployeeService}, 
    SalaryPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
