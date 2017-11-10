import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ConfirmComponent } from '../confirm/confirm.component';
import { DialogService } from "ng2-bootstrap-modal";

import { Employee } from '../shared/employee';

@Component({
  moduleId: module.id,
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent {

  @Input() index: number;
  @Input() employee: Employee;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  onDelete() {
    this.showConfirm();
  }

  onEdit() {
    this.edit.emit(this.employee);
  }

  constructor(private dialogService:DialogService) {}

  showConfirm() {
    let disposable = this.dialogService.addDialog(ConfirmComponent, {
        title:'Подтверждение', 
        message:'Вы действительно хотите удалить запись?'})
        .subscribe((isConfirmed)=>{
            //We get dialog result
            if(isConfirmed) {
              this.delete.emit(this.employee);
            }
            //else {
            //    alert('declined');
            //}
        });
    //We can close dialog calling disposable.unsubscribe();
    //If dialog was not closed manually close it by timeout
    setTimeout(()=>{
        disposable.unsubscribe();
    },1000000);
}
}
