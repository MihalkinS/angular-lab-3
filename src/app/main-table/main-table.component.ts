import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Employee } from '../shared/employee';

import { DataService } from '../shared/data.service';
// import {  } from '@angular/core/src/event_emitter';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent implements OnInit {

  employees: Employee[];

  @Output() employeeToForm = new EventEmitter();

  constructor(private dataService: DataService) { 
    this.employees = [];
  }

  ngOnInit() {
    this.employees = this.dataService.getData();
  }

  delete(employee: Employee) {
    this.dataService.deleteEmployee(employee);
  }

  edit(employee: Employee) {
    //this.dataService.editEmployee(employee);
    this.employeeToForm.emit(employee);
  }

}
