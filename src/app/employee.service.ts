import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = [];

  constructor() {
    this.generateDummyData();
  }

  generateDummyData(): void {
    for (let i = 0; i < 1000; i++) {
      this.employees.push({
        username: `user${i}`,
        firstName: `FirstName${i}`,
        lastName: `LastName${i}`,
        email: `user${i}@example.com`,
        birthDate: new Date(`1980-01-01`),
        basicSalary: Math.floor(Math.random() * 100000) + 30000, // Random salary between 30,000 and 130,000
        status: i % 2 === 0 ? 'active' : 'inactive',
        group: `Group${i % 10 + 1}`,
        description: new Date(),
      });
    }
  }

  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }

  getEmployeeByUsername(username: string): Observable<Employee> {
    const employee = this.employees.find((e) => e.username === username);
    return of(employee!);
  }

  addEmployee(employee: Employee): Observable<void> {
    this.employees.push(employee);
    return of();
  }

  updateEmployee(employee: Employee): Observable<void> {
    const index = this.employees.findIndex((e) => e.username === employee.username);
    if (index !== -1) {
      this.employees[index] = employee;
    }
    return of();
  }
}
