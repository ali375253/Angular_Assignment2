import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './employees/add_employee/addEmployee.component';
import { EditEmployeeComponent } from './employees/edit_employee/edit-employee.component';
import { EmployeelistComponent } from './employees/employee_list/employeelist.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeeService } from './employees/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    EmployeelistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path:'employeelist', component: EmployeelistComponent},
      { path:'addemployee', component: AddEmployeeComponent },
      { path:'editemployee/:index', component: EditEmployeeComponent }
    ])
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
