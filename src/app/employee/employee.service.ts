import { Injectable } from '@angular/core';

export interface Employee{
  id:number;
  fullName:string;
  position: string;
  salary:number;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private localStorageKey = 'employees';

  constructor() { }
  
  getEmployees(): Employee[]{
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : [];
  }
  getEmployeeById(id:number):Employee | undefined{
    const employees = this.getEmployees();
    return employees.find(emp => emp.id === id);
  }
  addEmployee(employee:Employee):void{
    const employees = this.getEmployees();
    employees.push(employee);
    localStorage.setItem(this.localStorageKey, JSON.stringify(employees));
  }
  updateEmployee(updatedEmployee: Employee): void {
    const employees = this.getEmployees().map((emp) =>
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    );
    localStorage.setItem(this.localStorageKey, JSON.stringify(employees));
  }

  deleteEmployee(id: number): void {
    const employees = this.getEmployees().filter((emp) => emp.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(employees));
  }
}
