import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { CurrencyFormatPipe } from '../currency-format.pipe';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule,  // Import RouterModule here
    CurrencyFormatPipe
  ],
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    birthDate: new Date(),
    basicSalary: 0,
    status: '',
    group: '',
    description: new Date(),
  };

  groups = ['Group1', 'Group2', 'Group3', 'Group4', 'Group5', 'Group6', 'Group7', 'Group8', 'Group9', 'Group10'];

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get('username');
    console.log('Username from route:', username);
    if (username) {
      this.employeeService.getEmployeeByUsername(username).subscribe((employee) => {
        console.log('Employee data:', employee);
        this.employee = employee;
      });
    }
  }

  onSave(): void {
    if (this.employee.username) {
      this.employeeService.updateEmployee(this.employee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    } else {
      this.employeeService.addEmployee(this.employee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/employees']);
  }
}
