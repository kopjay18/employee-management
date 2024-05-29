import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/add', component: AddEmployeeComponent },
  { path: 'employees/edit/:username', component: AddEmployeeComponent },
  { path: 'employees/:username', component: EmployeeDetailComponent },
  { path: '**', redirectTo: '/employees' }, // Redirect unknown paths to the employee list
];

export default routes;
