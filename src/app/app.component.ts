import { Component } from '@angular/core';

import { Employee } from '../app/shared/employee';
import { BtnName } from '../app/shared/advanced';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  employee: Employee = new Employee();
  btnname: BtnName = BtnName.btnAdd;

  edit(employee: Employee) {
    this.employee = new Employee(
      employee.id,
      employee.surName,
      employee.name,
      employee.patronymic,
      employee.dob,
      employee.address,
      employee.phone,
      employee.email,
      employee.position,
      employee.salary
    );
    console.log("app");
    this.btnname = BtnName.btnEdit;
    console.log(this.btnname);
  }
}
