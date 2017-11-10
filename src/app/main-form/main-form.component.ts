import { Component, Input } from '@angular/core';

import { Employee } from '../shared/employee';
import { BtnName } from '../shared/advanced';

import { DataService } from '../shared/data.service';
import { employees } from '../shared/init-data';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent {

  @Input() employee: Employee = new Employee();
  @Input() btnname;

  constructor(private dataService: DataService) {
    console.log("form constr");
  }

  addEmployee() {
    if(this.btnname == BtnName.btnAdd) {
      this.dataService.addEmployee(this.employee);
      this.employee = new Employee();
      console.log("added");
    }
    else {
     this.dataService.editEmployee(this.employee);
     this.btnname = BtnName.btnAdd;
     this.employee = new Employee();
     console.log("edited");
     console.log(this.btnname);
    }

  }

  // editEmployee(employee: Employee) {
  //   this.employee = employee;
  //   this.btnName = BtnName.btnAdd;
  // }
}
