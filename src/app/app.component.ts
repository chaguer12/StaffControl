import { Component } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { EmployeeModel } from './model/Employee';
import { first, last } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'EmployeeManager';
  employeeForm: FormGroup = new FormGroup({});
  employeeOBJ: EmployeeModel = new EmployeeModel();

  constructor(){
    this.createForm();
  }

  createForm(){
    this.employeeForm = new FormGroup({
      id: new FormControl(this.employeeOBJ.id),
      firstName: new FormControl(this.employeeOBJ.firstName),
      lastName: new FormControl(this.employeeOBJ.lastName),
      email: new FormControl(this.employeeOBJ.email),
      phone: new FormControl(this.employeeOBJ.phone),
      address: new FormControl(this.employeeOBJ.address),
      city: new FormControl(this.employeeOBJ.city),
      

    })
    onSave(){
      const oldData = localStorage.getItem("EmpData");
      if(oldData != null) {
        
      }

    }
  }
}
=

