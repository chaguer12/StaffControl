import { Component } from '@angular/core';
import { EmployeeService,Employee } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  constructor(private employeeService: EmployeeService) { }
  employees: Employee[] = [];

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.employeeService.getEmployees();
  }
  displayAddEmployeeForm(): void {
    // Placeholder for showing an add employee form.
    alert('Add Employee Form Logic Goes Here');
  }
  editEmployee(employee: Employee): void {
    // Placeholder for editing an employee.
    alert(`Edit Employee: ${employee.fullName}`);
  }
  deleteEmployee(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id);
      this.fetchEmployees();
    }
  }

}
